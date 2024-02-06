import React from "react";
import { storeDetailsHeader, storeDetailsData } from "./constants.js";
import MoveQtyForm from "./MoveQtyForm";
import { useState } from "../../Constants.js";
const StoreSection = ({
  register,
  formState,
  setValue,
  handleKeyPress,
  isUpdatepage,
}) => {
  const { errors } = formState;
  const [showMoveQtyForm, setShowMoveQtyForm] = useState(false);
  const handleMoveQtyFormShow = () => setShowMoveQtyForm(true);
  const handleMoveQtyFormClose = () => setShowMoveQtyForm(false);
  return (
    <div className="storeDetails">
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
                <th key={index} style={{ color: item.color }}>
                  {item?.name}
                </th>
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
                  <input className="quantity-group" type="text" />
                </td>
                <td>
                  <input className="quantity-group" type="text" />
                </td>
                <td>
                  <input className="quantity-group" type="text" />
                </td>
                <td>
                  <input
                    defaultValue={0}
                    min="0"
                    className="quantity-group"
                    type="number"
                  />
                </td>
              </tr>
            ))}
            <tr>
              <td></td>
              {isUpdatepage && <td></td>}
              <td style={{ color: "#6118b5" }}>Quantity Total : {0}</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Threshold Total : {0}</td>
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
      <MoveQtyForm
        show={showMoveQtyForm}
        handleClose={handleMoveQtyFormClose}
      />
    </div>
  );
};

export default StoreSection;
