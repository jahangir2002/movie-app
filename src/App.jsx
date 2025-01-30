import React, { useEffect, useState } from "react";

const Test = ({ title }) => {
  const [prevState, setPrevState] = useState(0);

  const [hasLike, setHasLike] = useState(false);

  useEffect(() => {
    console.log(`${title} has been Liked : ${hasLike}`);
  },[hasLike]);

  return (
    <>
      <div onClick={()=>{ setPrevState((prevState) => prevState + 1)}}>
        <h2>{title} - {prevState}</h2>

        <button
          onClick={() => {
            setHasLike(!hasLike);
          }}
        >
          {hasLike ? "❤" : "🤍💖"}
        </button>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <Test title="new" />
      <Test title="Movie" />
      <Test title="latest Trande" />
    </>
  );
};

export default App;
