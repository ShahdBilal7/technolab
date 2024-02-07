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
    mode: "onChange",
  });
  const validatePrices = (data) => {
    for (let i = 1; i < 4; i++) {
      const currentPrice = parseFloat(data[`price${i}`]);
      const previousPrice = parseFloat(data[`price${i - 1}`]);

      if (currentPrice === 0) {
        // If the current price is not provided, set it to the value of the previous price
        setValue(`price${i}`, previousPrice);
      } else if (currentPrice > previousPrice) {
        setError(`price${i}`, {
          type: "manual",
          message: `* Price should be less than or equal to the previous prices.`,
        });
        return false;
      }
    }
    return true;
  };

  const onSubmit = (data) => {
    if (validatePrices(data)) console.log("Form data:", data);
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
