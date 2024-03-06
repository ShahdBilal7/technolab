import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { removeAllPos } from "../../store/posSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropZone from "../NewItems/DropZone";

const InfoForm = ({ totalPriceWithTax }) => {
  const pos = useSelector((state) => state.pos);

  const orderStatus = [
    "OnCash",
    "OnDelivery",
    "Debit",
    "PendingOrder",
    "Visa",
    "Bank transfer",
  ];
  const customers = [
    { name: "New Client", phone: "", address: "" },
    { name: "شهد", phone: "0592424185", address: "طولكرم-كفرصور" },
  ];
  const customersOption = customers.map((status, index) => ({
    value: index,
    label: status.name,
  }));
  const orderStatusOption = orderStatus.map((status, index) => ({
    value: index,
    label: status,
  }));
  const handleOrderStatusChange = (selectedOption) => {
    if (
      selectedOption.label === "PendingOrder" ||
      selectedOption.label === "OnDelivery"
    )
      setValue("amountPaid", 0);

    if (selectedOption.label === "Debit")
      setValue("amountPaid", totalPriceWithTax);

    setValue("orderStatus", selectedOption.label);
    clearErrors("orderStatus");
  };
  const handleCustomerNameChange = (selectedOption) => {
    console.log(selectedOption);

    if (selectedOption.value === 0) {
      setShowCustomInput(true);
      setValue("customerName", "");
    } else {
      setValue("customerName", selectedOption.label);

      clearErrors("customerName");
      setShowCustomInput(false);
    }
    setValue("customerPhone", customers[selectedOption.value].phone);
    setValue("customerAddress", customers[selectedOption.value].address);
  };

  const dispatch = useDispatch();
  const schema = yup.object().shape({
    customerName: yup.string().required("* Customer name is required."),
    orderStatus: yup.string().required("* Order Status is required."),

    customerPhone: yup.string().when("orderStatus", {
      is: (orderStatus) => orderStatus === "OnDelivery",
      then: () =>
        yup
          .string()
          .matches(/^[0-9+]{10,}$/, "* Please enter correct number")
          .required("* Phone number is required "),
      otherwise: () =>
        yup
          .string()
          .matches(/^[0-9+]{10,}$/, "* Please enter correct number")
          .notRequired(),
    }),
    customerAddress: yup.string().when("orderStatus", {
      is: (orderStatus) => orderStatus === "OnDelivery",
      then: () => yup.string().required("* Address is required "),
      otherwise: () => yup.string().notRequired(),
    }),
    receipt: yup.mixed().when("orderStatus", {
      is: (orderStatus) => ["Visa", "Bank transfer"].includes(orderStatus),
      then: () =>
        yup
          .mixed()
          .required(
            "* Receipt image is required when using Visa or Bank transfer"
          ),
      otherwise: () => yup.mixed().notRequired(),
    }),
  });

  const {
    register,
    setValue,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: "",
      orderStatus: "",
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const [showCustomInput, setShowCustomInput] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const onSubmit = (data) => {
    const hasZeroQuantity = pos.posItems.some((item) => item?.qty === 0);
    if (hasZeroQuantity) {
      toast.error("Quantity must be greater than 0 for all items.");
      return;
    }

    console.log(data);
  };
  useEffect(() => {
    // handleAmountPaid(totalPriceWithTax);
    setValue("amountPaid", totalPriceWithTax);
    console.log(totalPriceWithTax);
  }, [totalPriceWithTax, setValue]);

  return (
    <form
      className="pos-col py-4"
      style={{ borderRadius: 0 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        {!showCustomInput && (
          <div className="form-group col-md-4 mb-2">
            <label className="form-label " htmlFor="customerName">
              Choose a client:
            </label>

            <Select
              className="custom-select"
              options={customersOption}
              placeholder="name of client..."
              onChange={handleCustomerNameChange}
            />

            <p className="text-danger error-message">
              {errors.customerName?.message}
            </p>
          </div>
        )}
        {showCustomInput && (
          <div className="form-group col-md-4 mb-2">
            <FontAwesomeIcon
              style={{ color: "var(--main-color", paddingRight: "7px" }}
              className="link"
              icon="fa-solid fa-angles-left"
              onClick={() => setShowCustomInput(false)}
            />
            <label className="form-label" htmlFor="customerName">
              Enter client name:
            </label>

            <input
              type="text"
              className="form-control "
              {...register("customerName")}
            />
            <p className="text-danger error-message mt-1">
              {errors.customerName?.message}
            </p>
          </div>
        )}

        <div className="form-group col-md-4  mb-2">
          <label className="form-label " htmlFor="customerPhone">
            Phone:
          </label>

          <input
            type="text"
            className="form-control "
            placeholder="Client phone number ..."
            {...register("customerPhone")}
          />
          <p className="text-danger error-message mt-1">
            {errors.customerPhone?.message}
          </p>
        </div>
        <div className="form-group col-md-4  mb-2">
          <label className="form-label" htmlFor="customerAddress">
            Address:
          </label>

          <input
            type="address"
            className="form-control "
            placeholder="Client Address ..."
            {...register("customerAddress")}
          />
          <p className="text-danger error-message mt-1">
            {errors.customerAddress?.message}
          </p>
        </div>
      </div>
      <hr style={{ color: "green" }} className="mb-4" />
      <div className="form-group row mb-4">
        <label className="form-label col-md-2" htmlFor="orderStatus">
          Order Status:
        </label>
        <div className="col-md-10">
          <Select
            className="custom-select"
            options={orderStatusOption}
            placeholder="type of order..."
            onChange={handleOrderStatusChange}
          />

          <p className="text-danger error-message">
            {errors.orderStatus?.message}
          </p>
        </div>
      </div>
      {(watch("orderStatus") === "Debit" ||
        watch("orderStatus") === "OnDelivery" ||
        watch("orderStatus") === "PendingOrder") && (
        <div className="row mb-2">
          <div className="form-group col-md-6  mb-4">
            <label className="form-label " htmlFor="amountPaid">
              amount paid:
            </label>

            <input
              id="amountPaid"
              type="number"
              defaultValue={totalPriceWithTax}
              className="form-control"
              {...register("amountPaid")}
            />
          </div>
          <div className="form-group col-md-6  mb-4">
            <label className="form-label " htmlFor="remaining">
              remaining amount
            </label>
            <input
              id="remaining"
              type="number"
              readOnly
              value={totalPriceWithTax - watch("amountPaid")}
              {...register("remaining")}
              className="form-control"
            />
          </div>
          <hr />
        </div>
      )}
      {(watch("orderStatus") === "Visa" ||
        watch("orderStatus") === "Bank transfer") && (
        <div className="row mb-2">
          <div className="form-group col-md-12  mb-4">
            <label className="form-label mb-2 " htmlFor="receipt">
              receipt image :
            </label>
            <DropZone
              tit="Drag & drop Image here"
              multiple={false}
              register={register("receipt")}
              handleKeyPress={handleKeyPress}
              setValue={setValue}
            />
            <p className="text-danger error-message mt-1">
              {errors.receipt?.message}
            </p>
          </div>
          <hr />
        </div>
      )}
      <div className="form-group row mb-4">
        <label className="form-label col-md-2" htmlFor="notes">
          Notes:
        </label>
        <div className="col-md-10">
          <textarea className="form-control" {...register("notes")} />
        </div>
      </div>
      <div className="d-flex gap-4">
        <Button
          onClick={() => dispatch(removeAllPos())}
          variant="danger"
          className="w-50"
          style={{ fontWeight: "bold", fontSize: "large" }}
        >
          Cancel
        </Button>
        <Button
          variant="success"
          type="submit"
          className="w-50"
          style={{ fontWeight: "bold", fontSize: "large" }}
        >
          Check Out
        </Button>
      </div>
    </form>
  );
};

export default InfoForm;
