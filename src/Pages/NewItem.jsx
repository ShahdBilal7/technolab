import { useState, useFormik, Yup, categories } from '../Constants'
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DropZone from '../Components/NewItems/DropZone';

import {
  productStatus,
  storeDetailsHeader,
  storeDetailsData,
} from "../Components/NewItems/constants";
import Editor from '../Components/NewItems/Editor';
const NewItem = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const formik = useFormik({
    initialValues: {
      productName: '',
      productBarcode: '',
      selectedCategories: [],
      subcategories: [],
    },
    validationSchema: Yup.object({
      productName: Yup.string().required("Product name is required."),
      productBarcode: Yup.string().notRequired(),
      price: Yup
        .number()
        .required("Price is required")
        .positive("Price must be a positive number")
        .typeError("Price must be a number"),

    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const productStatusOption = productStatus.map((status, index) => ({
    value: index,
    label: status,
  }));
  const categoryOptions = categories.map((category, index) => ({
    value: index,
    label: category.name,
    subcategories: category.subcategories,
  }));
  const handleCategoryChange = (selectedCategories) => {
    formik.setFieldValue('selectedCategories', selectedCategories);

    if (selectedCategories.length > 0) {
      setSelectedCategoryIndex(selectedCategories[selectedCategories.length - 1].value);
      formik.setFieldValue('subcategories', []);
    } else {
      setSelectedCategoryIndex(null);
    }
  };

  const handleSubcategoryChange = (selectedSubcategories) => {
    formik.setFieldValue('subcategories', selectedSubcategories);
  };


  return (
    <div className='container newItem'>
      <div className="row my-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="headline">
            <h2>General Information</h2>
          </div>
          <div className='row generalInformation'>
            <div className='col-md-8 mb-4 form-group'>
              <label className="form-label" htmlFor="productName">  Product Name:</label>
              <input
                className="form-control"
                id="productName"
              />
              <p className="text-danger error-message"></p>
            </div>
            <div className='col-md-4 mb-4 form-group'>
              <label className="form-label" htmlFor="productName">Product state</label>
              <Select defaultValue={productStatusOption[0]} options={productStatusOption}>

              </Select>
            </div>
            <div className='col-md-6  mb-4 form-group'>
              <label className="form-label" htmlFor="productBarcode">
                Main Barcode
              </label>
              <input style={{ backgroundColor: "#eee" }}
                className="form-control"
                id="productBarcode"
                readOnly
              />
              <p className="text-danger error-message"></p>
            </div>
            <div className='col-md-6  mb-4 form-group'>
              <label className="form-label" htmlFor="productBarcode">
                Secondary Barcode:
              </label>
              <input
                className="form-control"
                id="productSecondBarcode"
              />
              <p className="text-danger error-message"></p>
            </div>

            <div className="col-md-6 mb-4 form-group">
              <label className="form-label" htmlFor="productBarcode">
                Categories
              </label>
              <Select

                isMulti
                options={categoryOptions}
                value={formik.values.selectedCategories}
                onChange={handleCategoryChange}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                placeholder="Select Categories"
              />
              <p className="text-danger error-message">{formik.errors.selectedCategories}</p>
            </div>
            {/* Subcategories based on the last selected category */}
            {selectedCategoryIndex !== null && (
              <div className="col-md-6 mb-4 form-group">
                <label className="form-label" htmlFor="subcategories">
                  Subcategories
                </label>
                <Select
                  isMulti
                  options={categoryOptions[selectedCategoryIndex].subcategories.map((subcategory) => ({
                    value: subcategory,
                    label: subcategory,
                  }))}
                  value={formik.values.subcategories}
                  onChange={handleSubcategoryChange}
                  getOptionLabel={(option) => option.label}
                  getOptionValue={(option) => option.value}
                  placeholder={`Select Subcategories for ${categoryOptions[selectedCategoryIndex].label}`}
                />
              </div>
            )}

          </div>

          <div className="headline">
            <h2>Price Information</h2>
          </div>
          <div></div>
          <div className="headline">
            <h2>Images Section</h2>
          </div>
          <div className='row imageSection'>
            <div className='col-xl-6  mb-4 form-group'>
              <label className="form-label" htmlFor="productBarcode">
                Main Image
              </label>
              <DropZone tit="Drag & drop Main product Image here" multiple={false} />
              <p className="text-danger error-message"></p>
            </div>
            <div className='col-xl-6  mb-4 form-group'>
              <label className="form-label" htmlFor="productBarcode">
                secondary Images
              </label>
              <DropZone tit="Drag & drop Secondary product Images here" multiple={true} />
              <p className="text-danger error-message"></p>
            </div>
          </div>
          <div className="headline">
            <h2>Store Details</h2>
          </div>
          <div className="table-responsive mb-4">
            <table style={{textAlign:"center"}} className="table table-striped table-bordered table-hover">
              <thead>
                <tr>
                  {storeDetailsHeader?.map((item, index) => (
                    <th key={index}>{item?.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody >
                {storeDetailsData?.map((rowData, index) => (
                  <tr key={index}>
                    <td> {rowData.storeName}</td>
                    <td><input min="0" className='quantity-group' type="number" /></td>
                    <td><input min="0" className='quantity-group' type="number" /></td>
                    <td><input  className='quantity-group' type="text" /></td>
                    <td><input  className='quantity-group' type="text" /></td>
                    <td><input  className='quantity-group' type="text" /></td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  {false && <td></td>}
                  <td>
                    <div className="d-flex">Quantity Total  : {0}</div>
                  </td>
                  <td>
                    <div className="d-flex">Threshold Total  : {0}</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="headline">
            <h2>Description Details</h2>
          </div>
          <div className='row mb-4'>
          <Editor/>
          </div>
          <button type='submit' className='submit mb-4'>SAVE</button>
        </form>
      </div>

    </div>
  )
}

export default NewItem