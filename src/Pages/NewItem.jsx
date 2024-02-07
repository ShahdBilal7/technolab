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
const NewItem = ({ isUpdatepage }) => {
  const { id } = useParams();
  const isLogin = true;
  // *****************************************
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      productStatus: productStatus[0],
    },
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("Form data:", data);
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
              setValue={setValue}
              handleKeyPress={handleKeyPress}
            />
            <PriceSection
              register={register}
              errors={errors}
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
