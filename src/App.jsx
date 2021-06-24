import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setbooks] = useState();
  useEffect(() => {
    async function fetchData() {
      await axios
        .post("http://ed359272d97b.ngrok.io/api/book/search/", {
          title_or_author: "",
        })
        .then((res) => setbooks(res.data.results));
    }
    fetchData();
  }, []);
  return <div className="App">{JSON.stringify(books)}</div>;
}

export default App;
