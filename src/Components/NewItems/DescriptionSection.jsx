import React from "react";
import Editor from "./Editor";
const DescriptionSection = ({ control }) => {
  return (
    <div>
      <div className="headline">
        <h2>Description Details</h2>
      </div>
      <div className="row mb-4">
        <Editor control={control} name="description" />
      </div>
    </div>
  );
};

export default DescriptionSection;
