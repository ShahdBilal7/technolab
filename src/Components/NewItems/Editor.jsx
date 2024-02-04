import React, { useState } from "react";
import "jodit";
import JoditEditor from "jodit-react";

const Editor = () => {
  const [data, setData] = useState("");

  const editorConfig = {
    uploader: {
      insertImageAsBase64URI: true
    },
    
  };

  const handleEditorChange = (value) => {
    setData(value);
  };

  return (
    <div>
      <JoditEditor
        value={data}
        config={editorConfig}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Editor;
