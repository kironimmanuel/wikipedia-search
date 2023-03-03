import { renderHook } from "@testing-library/react-hooks";
import { Result, useFetch } from "./useFetch";

describe("useFetch", () => {
  const mockData: Result[] = [
    {
      pageid: 1,
      title: "Test 1",
      snippet: "Snippet 1",
    },
    {
      pageid: 2,
      title: "Test 2",
      snippet: "Snippet 2",
    },
  ];

  let mockFetch: jest.Mock;

  beforeEach(() => {
    mockFetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        query: {
          search: mockData,
        },
      }),
    });

    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("fetches data", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    const searchValue = "test";
    result.current[1](searchValue);

    expect(mockFetch).toHaveBeenCalledWith(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchValue}`
    );
    expect(result.current[0].loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current[0].data).toEqual(mockData);
    expect(result.current[0].loading).toBe(false);
  });

  it("handles error during data fetching", async () => {
    const errorMsg = "Network Error";

    mockFetch.mockRejectedValueOnce(new Error(errorMsg));

    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    const searchValue = "test";
    result.current[1](searchValue);

    expect(mockFetch).toHaveBeenCalledWith(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchValue}`
    );
    expect(result.current[0].loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current[0].data).toEqual([]);
    expect(result.current[0].loading).toBe(false);

    expect(toastMock.error).toHaveBeenCalledTimes(1);
  });

  it("handles no matching results found", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch());

    const searchValue = "no results";
    result.current[1](searchValue);

    expect(mockFetch).toHaveBeenCalledWith(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchValue}`
    );
    expect(result.current[0].loading).toBe(true);

    await waitForNextUpdate();
    expect(result.current[0].loading).toBe(false);
  });
});

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    warn: jest.fn(),
  },
}));
const toastMock = jest.requireMock("react-toastify").toast;
