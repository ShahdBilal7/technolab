import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { productStatus } from "../Components/NewItems/constants";
import Editor from "../Components/NewItems/Editor";
import Error404 from "./Error404";
import GeneralSection from "../Components/NewItems/GeneralSection";
import PriceSection from "../Components/NewItems/PriceSection";
import ImagesSection from "../Components/NewItems/ImagesSection";
import StoreSection from "../Components/NewItems/StoreSection";
import DescriptionSection from "../Components/NewItems/DescriptionSection";
const NewItem = ({ isUpdatepage }) => {
  // const { id } = useParams(); //if Update
  // const isLogin = useSelector(isLoginUser);
  // const userInfo = useSelector(user);

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
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
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
              handleKeyPress={handleKeyPress}
            />
            <PriceSection
              register={register}
              formState={formState}
              handleKeyPress={handleKeyPress}
            />
            <ImagesSection
              register={register}
              formState={formState}
              setValue={setValue}
              handleKeyPress={handleKeyPress}
            />

            <StoreSection
              register={register}
              formState={formState}
              setValue={setValue}
              handleKeyPress={handleKeyPress}
              isUpdatepage={isUpdatepage}
            />

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
        </div>
      ) : (
        <Error404 />
      )}
    </div>
  );
};

export default NewItem;
