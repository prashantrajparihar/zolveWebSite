import React, { useState } from "react";
import copy from "copy-to-clipboard";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyToClipboardComponent = (props) => {
  let queries = queryString.parse(props.location.search);
  console.log(queries.q);
  const [text1, setText1] = useState(queries.q);
  const [text2, setText2] = useState(queries.q);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setText1(e.target.value);
    copy(text1);
  };
  const changeQHandler = (e) => {
    // setText2(e.target.value);
    // queries.q = text2;
  };

  return (
    <CopyToClipboard text={(text1, text2)}>
      <div className="container">
        <div>
          <input
            type="text"
            value={text2}
            placeholder="Enter URL params with key name ‘q’ (url/?q=ABC"
            onChange={changeQHandler}
          ></input>
          <h3>TextArea</h3>
        </div>
        <div className="txt">
          <textarea
            className="form-control"
            placeholder="Enter Text to be copied on clipboard"
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CopyToClipboard>
  );
};
export default CopyToClipboardComponent;
