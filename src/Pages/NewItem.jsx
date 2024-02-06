import {
  useParams,
  useState,
  useFormik,
  useSelector,
  Yup,
  categories,
  isLoginUser,
  user,
} from "../Constants";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DropZone from "../Components/NewItems/DropZone";
import { ToastContainer, toast } from "react-toastify";
import {
  storeDetailsHeader,
  storeDetailsData,
  priceQuantityRange,
  productStatus,
} from "../Components/NewItems/constants";
import Editor from "../Components/NewItems/Editor";
import MoveQtyForm from "../Components/NewItems/MoveQtyForm";
import Error404 from "./Error404";
import GeneralSection from "../Components/NewItems/GeneralSection";
import PriceSection from "../Components/NewItems/PriceSection";
import ImagesSection from "../Components/NewItems/ImagesSection";
import StoreSection from "../Components/NewItems/StoreSection";
import DescriptionSection from "../Components/NewItems/DescriptionSection";
const NewItem = ({ isUpdatepage }) => {
  const { id } = useParams(); //if Update
  const isLogin = useSelector(isLoginUser);
  const userInfo = useSelector(user);
  const [showMoveQtyForm, setShowMoveQtyForm] = useState(false);
  const handleMoveQtyFormShow = () => setShowMoveQtyForm(true);
  const handleMoveQtyFormClose = () => setShowMoveQtyForm(false);
  const [onSale, setOnSale] = useState(false);

  // console.log(userInfo);
  // *****************************************
  const { register, handleSubmit, setValue, formState } = useForm({
    defaultValues: {
      productStatus: productStatus[0],
    },
  });
  const onSubmit = (data) => {
    console.log("Form data:", data);
  };
  return (
    <div className="container newItem">
      {true ? (
        <div className="row my-4">
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)}>
            <GeneralSection
              register={register}
              formState={formState}
              setValue={setValue}
            />
            <div className="headline">
              <h2>Price Information</h2>
            </div>
            <div className="row priceInformation">
              <div className="col-lg-6 mb-2 form-group">
                <h5>Ordinary Price</h5>
                <div className="table-responsive">
                  <table
                    style={{ textAlign: "center", fontSize: "18px" }}
                    className="table table-striped table-bordered table-hover"
                  >
                    <thead
                      style={{
                        textAlign: "center",
                        fontSize: "18px",
                        fontWeight: "bold",
                      }}
                    >
                      <tr>
                        <td>Quantity</td>
                        <td>Price</td>
                      </tr>
                    </thead>
                    <tbody>
                      {priceQuantityRange?.map((rowData, index) => (
                        <tr key={index}>
                          <td> {rowData}</td>
                          <td>
                            <input
                              min="0"
                              defaultValue={0}
                              step="0.1"
                              className="quantity-group "
                              type="number"
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-lg-6 mb-2 form-group">
                <h5>Discount Price</h5>
                <div className="saleSection row ">
                  <div className=" mb-2 form-group d-flex ">
                    <label>Do You Need Add Discount</label>
                    <input
                      className="custom mx-2"
                      type="checkbox"
                      checked={onSale}
                      onChange={(e) => setOnSale(e.target.checked)}
                    />
                  </div>

                  {onSale && (
                    <>
                      <div className="form-group  mb-4">
                        <label
                          className="form-label "
                          htmlFor="priceAfterDiscount"
                        >
                          Price After Discount
                        </label>
                        <input
                          className="form-control"
                          id="priceAfterDiscount"
                          type="number"
                          defaultValue={null}
                          min="0"
                          step="0.1"
                          onWheel={(e) => e.currentTarget.blur()}
                        />
                        <p className="text-danger error-message"></p>
                      </div>
                      <div className="form-group  mb-4">
                        <label className=" form-label ">
                          {" "}
                          Discount end date
                        </label>
                        <input className="form-control" type="date"></input>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className=" mb-4 col-lg-6 form-group">
                <div className="form-control hide">
                  <label>Hide price for public </label>
                  <input className="custom mx-2" type="checkbox" />
                </div>
              </div>
            </div>
            <PriceSection />
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
                />
                <p className="text-danger error-message"></p>
              </div>
              <div className="col-xl-6  mb-4 form-group">
                <label className="form-label" htmlFor="productBarcode">
                  secondary Images
                </label>
                <DropZone
                  tit="Drag & drop Secondary product Images here"
                  multiple={true}
                />
                <p className="text-danger error-message"></p>
              </div>
            </div>
            <ImagesSection />
            <div className="headline">
              <h2>Store Details</h2>
            </div>
            <div className="table-responsive mb-4">
              <table
                style={{ textAlign: "center" }}
                className="table table-striped table-bordered table-hover"
              >
                <thead>
                  <tr>
                    {isUpdatepage && <th>Add To Stock</th>}
                    {storeDetailsHeader?.map((item, index) => (
                      <th key={index}>{item?.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {storeDetailsData?.map((rowData, index) => (
                    <tr key={index}>
                      {isUpdatepage && (
                        <td>
                          <div className="d-flex  flex-start ">
                            <input
                              name="addToStock"
                              type="number"
                              className="quantity-group me-2 "
                            />
                            <button type="button" className="btn btn-secondary">
                              Add
                            </button>
                          </div>
                        </td>
                      )}
                      <td> {rowData.storeName}</td>
                      <td>
                        <input
                          defaultValue={0}
                          min="0"
                          className="quantity-group"
                          type="number"
                        />
                      </td>
                      <td>
                        <input
                          defaultValue={0}
                          min="0"
                          className="quantity-group"
                          type="number"
                        />
                      </td>
                      <td>
                        <input className="quantity-group" type="text" />
                      </td>
                      <td>
                        <input className="quantity-group" type="text" />
                      </td>
                      <td>
                        <input className="quantity-group" type="text" />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    {isUpdatepage && <td></td>}
                    <td>
                      <div className="d-flex">Quantity Total : {0}</div>
                    </td>
                    <td>
                      <div className="d-flex">Threshold Total : {0}</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {isUpdatepage && (
                <div className="d-flex">
                  <button
                    className="btn btn-secondary w-100"
                    type="button"
                    onClick={handleMoveQtyFormShow}
                  >
                    Move between stores
                  </button>
                </div>
              )}
            </div>
            <StoreSection />

            <div className="headline">
              <h2>Description Details</h2>
            </div>
            <div className="row mb-4">
              <Editor />
            </div>
            <DescriptionSection />
            <button type="submit" className="submit mb-4">
              SAVE
            </button>
          </form>
          <MoveQtyForm
            show={showMoveQtyForm}
            handleClose={handleMoveQtyFormClose}
          />
        </div>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default NewItem;
