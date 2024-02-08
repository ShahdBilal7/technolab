import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { productStatus } from "../Components/NewItems/constants";
import Error404 from "./Error404";
import GeneralSection from "../Components/NewItems/GeneralSection";
import PriceSection from "../Components/NewItems/PriceSection";
import ImagesSection from "../Components/NewItems/ImagesSection";
import StoreSection from "../Components/NewItems/StoreSection";
import DescriptionSection from "../Components/NewItems/DescriptionSection";
import { useParams, useSelector, isLoginUser } from "../Constants";
import validationSchema from "../Components/NewItems/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
const NewItem = ({ isUpdatepage }) => {
  const { id } = useParams();
  const isLogin = true;
  // *****************************************
  const {
    register,
    handleSubmit,
    setValue,
    control,
    setError,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      productStatus: productStatus[0],
      subcategories: [],
    },
    resolver: yupResolver(validationSchema),
    mode: "all",
  });
  const validatePrices = () => {
    for (let i = 1; i < 4; i++) {
      const currentPrice = parseFloat(watch(`price${i}`));
      const previousPrice = parseFloat(watch(`price${i - 1}`));
      if (currentPrice > previousPrice) {
        setError(`price${i}`, {
          type: "manual",
          message: `* Price should be less than or equal to the previous prices.`,
        });
        return false;
      }
    }
    return true;
  };
  const validateDiscountPrices = (data, setValue) => {
    const discount = parseFloat(watch(`priceAfterDiscount`));
    const updatedData = { ...data };

    if (discount > 0) {
      for (let i = 0; i < 4; i++) {
        const currentPrice = parseFloat(watch(`price${i}`));
        setValue(`priceAfter${i}`, Math.min(discount, currentPrice));
        updatedData[`priceAfter${i}`] = Math.min(discount, currentPrice);
      }
    }

    return updatedData;
  };

  const handleEndDate = () => {
    const discount = parseFloat(watch(`priceAfterDiscount`));
    const saleEndDate = watch("saleEndDate");

    if (discount > 0 && !saleEndDate) {
      setError("saleEndDate", {
        type: "manual",
        message: "* Sale End Date is required",
      });
      return false;
    } else {
      setError("saleEndDate", null);
    }

    if (saleEndDate && isNaN(new Date(saleEndDate))) {
      setError("saleEndDate", {
        type: "manual",
        message: "* Invalid date format",
      });
      return false;
    } else {
      setError("saleEndDate", null);
    }
    return true;
  };

  const validateStokQty = () => {
    for (let i = 0; i < 4; i++) {
      const stockQty = parseFloat(watch(`itemStoreDetailsList[${i}].stockQty`));
      const unit = watch(`itemStoreDetailsList[${i}].unit`);
      const positionX = watch(`itemStoreDetailsList[${i}].positionX`);
      const positionY = watch(`itemStoreDetailsList[${i}].positionY`);
      console.log(stockQty);
      if (stockQty > 0 && (!unit || !positionX || !positionY)) {
        setError(`itemStoreDetailsList[${i}].unit`, {
          type: "manual",
          message: "* Unit is required ",
        });

        setError(`itemStoreDetailsList[${i}].positionX`, {
          type: "manual",
          message: "* Position-X is required  ",
        });

        setError(`itemStoreDetailsList[${i}].positionY`, {
          type: "manual",
          message: "* Position-Y is required ",
        });

        return false;
      }
    }
    return true;
  };

  const onSubmit = (data) => {
    if (!data["mainImage"]) {
      data["mainImage"] = "../assets/logo.png";
    }

    const updatedData = validateDiscountPrices(data, setValue);

    if (validatePrices(data) && validateStokQty() && handleEndDate(data)) {
      console.log("Form data:", updatedData);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="container newItem">
      {isLogin ? (
        <div className="row my-4">
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)}>
            <GeneralSection
              register={register}
              errors={errors}
              control={control}
              setError={setError}
              setValue={setValue}
              handleKeyPress={handleKeyPress}
            />
            <PriceSection
              register={register}
              errors={errors}
              control={control}
              setValue={setValue}
              setError={setError}
              watch={watch}
              handleKeyPress={handleKeyPress}
            />
            <ImagesSection
              register={register}
              errors={errors}
              setValue={setValue}
              handleKeyPress={handleKeyPress}
            />

            <StoreSection
              register={register}
              errors={errors}
              setValue={setValue}
              handleKeyPress={handleKeyPress}
              control={control}
              watch={watch}
              isUpdatepage={isUpdatepage}
              id={id}
              reset={reset}
            />

            <DescriptionSection control={control} />
            <button type="submit" className="submit mb-4">
              SAVE
            </button>
          </form>
        </div>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default NewItem;
