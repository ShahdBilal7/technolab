import { productStatus } from "./constants.js";
import { categories } from "../../Constants.js";
import Select from "react-select";
import "./NewItems.css";
import { useState } from "react";
const GeneralSection = ({
  register,
  setError,
  errors,
  setValue,
  handleKeyPress,
}) => {
  const productStatusOption = productStatus.map((status, index) => ({
    value: index,
    label: status,
  }));

  const handleSubcategoryChange = (selectedOptions) => {
    const selectedSubcategories = selectedOptions.map((option) => ({
      subcategory: option.label,
      category: option.category,
    }));

    if (selectedSubcategories.length < 1) {
      setError("subcategories", {
        type: "manual",
        message: "* Please select at least one category.",
      });
    } else {
      setError("subcategories", null);
    }
    setValue("subcategories", selectedSubcategories);
  };
  const handleProductStatusChange = (selectedOption) => {
    setValue("productStatus", selectedOption.label);
  };
  return (
    <div>
      <div className="headline">
        <h2>General Information</h2>
      </div>
      <div className="row generalInformation">
        <div className="col-md-8 mb-4 form-group">
          <label className="form-label" htmlFor="productName">
            Product Name:
          </label>
          <input
            className="form-control"
            id="productName"
            {...register("productName")}
            onKeyPress={handleKeyPress}
          />
          <p className="text-danger error-message">
            {errors.productName?.message}
          </p>
        </div>

        <div className="col-md-4 mb-4 form-group">
          <label className="form-label" htmlFor="productStatus">
            Product state
          </label>
          <Select
            className="custom-select"
            options={productStatusOption}
            defaultValue={productStatusOption[0]}
            {...register("productStatus")}
            onChange={handleProductStatusChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="col-md-6 mb-4 form-group">
          <label className="form-label" htmlFor="productBarcode">
            Main Barcode
          </label>
          <input
            style={{ backgroundColor: "#eee" }}
            className="form-control"
            id="productBarcode"
            {...register("productBarcode")}
            readOnly
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="col-md-6 mb-4 form-group">
          <label className="form-label" htmlFor="productSecondBarcode">
            Secondary Barcode:
          </label>
          <input
            className="form-control"
            id="productSecondBarcode"
            {...register("productSecondBarcode")}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="col-md-6 mb-4 form-group subcategories ">
          <label className="form-label" htmlFor="subcategories">
            Categories
          </label>
          <Select
            isMulti
            id="subcategories"
            className="custom-select"
            options={categories.flatMap((category) => [
              {
                label: category.name,
                options: category.subcategories.map((subcategory, index) => ({
                  value: index,
                  label: subcategory,
                  category: category.name,
                })),
              },
            ])}
            {...register("subcategories")}
            onChange={handleSubcategoryChange}
            placeholder="Select Subcategories"
            onKeyPress={handleKeyPress}
          />

          <p className="text-danger error-message">
            {errors.subcategories?.message}
          </p>
        </div>
        <div className="col-md-6 mb-4 form-group">
          <label className=" form-label " htmlFor="productAvailabilityDate">
            Product availability date
          </label>
          <em> if the product not available</em>
          <input
            className="form-control"
            type="date"
            id="productAvailabilityDate"
            min={new Date().toISOString().slice(0, 10)}
            {...register("productAvailabilityDate")}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralSection;
