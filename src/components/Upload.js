import React, { useState } from "react";
import axios from "axios";
import './css/Upload.css';

function Upload() {
  const [userInfo1, setuserInfo1] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange1 = (event) => {
    setuserInfo1({
      ...userInfo1,
      file: event.target.files[0],
      filepreview: URL.createObjectURL(event.target.files[0]),
    });
  };

  const submit1 = async () => {
    const formdata = new FormData();
    formdata.append("avatar1", userInfo1.file);

    axios.post("http://localhost:8000/imageupload", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  return (
    <>
      <div className="bg-up">
        <div className="container-up">
          <h1>Upload Documents</h1>
          <p className="upload-disclam">Upload Your all documents here in one pdf: <br />
          Photo <br />
          Signature <br />
          Vehicle Photos <br />
          Vehicle Insurance <br />
          Photo of Number Plate <br />
          Vehicle Document <br />
          Addhar Card or Pan Card <br />
        </p>
          <label>File</label>
          <input type="file" name="Photo" onChange={handleInputChange1} />
          <br />
          <input type="submit" name="Submit1" onClick={() => submit1()} />
        </div>
      </div>
    </>
  );
}

export default Upload;
