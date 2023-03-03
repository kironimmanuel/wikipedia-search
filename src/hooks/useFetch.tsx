import { useState } from "react";
import { toast } from "react-toastify";

export type Result = {
  pageid: number;
  title: string;
  snippet: string;
};

export type Response = {
  query: {
    search: Result[];
  };
};

const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

export type UseFetchReturnType = [
  {
    loading: boolean;
    data: Result[];
  },
  (searchValue: string) => Promise<void>,
  (loading: boolean) => void
];

export const useFetch = (): UseFetchReturnType => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Result[]>([]);

  const fetchData = async (searchValue: string): Promise<void> => {
    setLoading(true);

    try {
      const response = await fetch(`${url}${searchValue}`);
      const data: Response = await response.json();
      const results = data.query.search;

      if (results.length < 1) {
        toast.warn("No matching results found", {
          toastId: "custom-id-yes",
        });
        setLoading(false);
        setData([]);
      } else {
        setData(results);
        setLoading(false);
      }
    } catch (error) {
      toast.error("An error occurred", {
        toastId: "custom-id-yes",
      });
      setLoading(false);
    }
  };

  return [{ loading, data }, fetchData, setLoading];
};
