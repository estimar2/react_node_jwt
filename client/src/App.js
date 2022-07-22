import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    _getPost();
  }, []);

  const _getPost = async () => {
    await axios
      .get("/api/getPost")
      .then(res => {
        if (res.status === 200) {
          const resultData = res.data;

          console.log(resultData, "getPost res");
        } else if (res.status === 400) {
          console.log(res.data, "status 400");
        }
      })
      .catch(e => {
        console.log(e, "error");
      });
  };

  return <div>hehehheh</div>;
};

export default App;
