import React, { useRef } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "./assets/images/globe.svg";
import Form from "./components/form/Form";
import Article from "./components/ui/Article";
import Loading from "./components/ui/Loading";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [{ data, loading }, fetchData] = useFetch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current?.value) {
      fetchData(inputRef.current.value);
    } else if (!inputRef.current?.value) {
      toast.info("Please fill out the search field", {
        toastId: "custom-id-yes",
      });
    }
  };

  return (
    <main>
      <section className="wiki">
        <div className="container">
          <img src={img} alt="globe" />
          <h1>Wikipedia search</h1>
          <Form handleSubmit={handleSubmit} inputRef={inputRef} />
        </div>
        <div className="results">
          {!loading ? (
            <div className="articles">
              {/* @ts-ignore */}
              <Article {...data} />
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        draggablePercent={80}
        pauseOnHover={false}
        transition={Slide}
        hideProgressBar
        closeOnClick
      />
    </main>
  );
}

export default App;
