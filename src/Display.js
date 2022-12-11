import { useRef, useState } from "react";
import Results from "./Results";
import { complete, findAnag } from "./find";

const Display = () => {
  const [res, setRes] = useState([]);
  const [str, setStr] = useState("");
  const myInput = useRef("myInput");

  const findWords = () => {
    let msg = str.toLowerCase();
    setRes(msg.includes("?") ? complete(msg) : findAnag(msg));
    myInput.current.blur();
  };

  const handler = (e) => {
    setStr(e.target.value);
  };

  const clear = () => {
    setStr("");
  };

  const click = (e) => {
    if (e.key === "Enter") {
      findWords();
    }
  };

  return (
    <>
      <input
        type="text"
        autoFocus="autofocus"
        value={str}
        ref={myInput}
        onFocus={clear}
        onChange={handler}
        onKeyUp={click}
        placeholder="Enter text."
        size="15"
      />
      <button
        className="ms-2 mb-4"
        type="button"
        id="myBtn"
        onClick={findWords}
      >
        Go!
      </button>
      <Results res={res} />
    </>
  );
};

export default Display;
