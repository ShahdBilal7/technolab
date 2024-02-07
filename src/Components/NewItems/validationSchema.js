import * as yup from "yup";

const validationSchema = yup.object().shape({
  productName: yup.string().required("* Product name is required."),
  subcategories: yup
    .array()
    .required("* Please select at least one category.")
    .min(1, "* Please select at least one category."),
});

export default validationSchema;
