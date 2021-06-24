import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [books, setbooks] = useState();
  useEffect(() => {
    async function fetchData() {
      axios.post("http://ed359272d97b.ngrok.io/api/", {
        title_or_author: "",
      });
    }
    fetchData();
  }, []);
  return <div className="App">{books}</div>;
}

export default App;
