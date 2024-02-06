import { priceQuantityRange } from "./constants.js";
const PriceSection = ({ register, formState, handleKeyPress }) => {
  const { errors } = formState;
  return (
    <div>
      <div className="headline">
        <h2>Price Information</h2>
      </div>
      <div className="row priceInformation">
        <div className="col-lg-6 mb-4 form-group">
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
                        className="quantity-group"
                        type="number"
                        {...register(`price${index + 1}`)}
                        onKeyPress={handleKeyPress}
                      />
                      <p style={{ textAlign: "left" }} className="text-danger">
                        {errors[`price${index + 1}`]?.message}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-6 mb-4 form-group">
          <h5>Discount Price</h5>
          <div className="saleSection row ">
            <div className="form-group">
              <label className="form-label " htmlFor="priceAfterDiscount">
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
                {...register("priceAfterDiscount")}
                onKeyPress={handleKeyPress}
              />
              <p className="text-danger error-message">
                {errors.priceAfterDiscount?.message}
              </p>
            </div>
            <div className="form-group">
              <label className=" form-label " htmlFor="saleEndDate">
                Discount end date
              </label>
              <input
                className="form-control"
                id="saleEndDate"
                type="date"
                min={new Date().toISOString().slice(0, 10)}
                {...register("saleEndDate")}
                onKeyPress={handleKeyPress}
              />
              <p className="text-danger error-message">
                {errors.saleEndDate?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 mb-4 form-group">
          <div className="form-control hide">
            <label htmlFor="hidePrice">Hide price for public </label>
            <input
              id="hidePrice"
              className="custom mx-2"
              type="checkbox"
              {...register("hidePrice")}
              onKeyPress={handleKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceSection;
