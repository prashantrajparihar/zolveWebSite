import React, { useState } from "react";
import copy from "copy-to-clipboard";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyToClipboardComponent = (props) => {
  let queries = queryString.parse(props.location.search);
  const [text1, setText1] = useState(queries.q);

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setText1(e.target.value);
    copy(text1);
  };

  return (
    <CopyToClipboard text={text1}>
      <div className="container">
        <div>
          <h3>The initial value copied on clipboard is : {text1}</h3>
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
