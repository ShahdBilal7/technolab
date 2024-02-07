import DropZone from "./DropZone";
const ImagesSection = ({ register, setValue, errors, handleKeyPress }) => {
  return (
    <div>
      <div className="headline">
        <h2>Images Section</h2>
      </div>
      <div className="row imageSection">
        <div className="col-xl-6  mb-4 form-group">
          <label className="form-label" htmlFor="productBarcode">
            Main Image
          </label>
          <DropZone
            tit="Drag & drop Main product Image here"
            multiple={false}
            register={register("mainImage")} // Register the mainImage input
            handleKeyPress={handleKeyPress}
            setValue={setValue}
          />
          <p className="text-danger error-message">
            {errors.mainImage?.message}
          </p>
        </div>
        <div className="col-xl-6  mb-4 form-group">
          <label className="form-label" htmlFor="productBarcode">
            secondary Images
          </label>
          <DropZone
            tit="Drag & drop Secondary product Images here"
            multiple={true}
            register={register("secondaryImages")} // Register the secondaryImages input
            handleKeyPress={handleKeyPress}
            setValue={setValue}
          />
          <p className="text-danger error-message">
            {errors.secondaryImages?.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagesSection;
