import {
  categories,
  useState,
  products,
  FontAwesomeIcon,
  ProductCard,
  Dropdown,
  DropdownButton,
} from "../Constants";
const Product = () => {
  const [openSubcategories, setOpenSubcategories] = useState({});
  const handleCategoryClick = (categoryName) => {
    setOpenSubcategories((prevOpenSubcategories) => ({
      ...prevOpenSubcategories,
      [categoryName]: !prevOpenSubcategories[categoryName],
    }));
  };

  return (
    <div className="products container">
      <div className="  products-page">
        <div className=" filter">
          <div className=" categories-list coll">
            <h3>Categories</h3>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-4">
                  <h6
                    className="cat"
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.name + " "}
                    <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                  </h6>
                  {openSubcategories[category.name] && (
                    <ul>
                      {category.subcategories.map((subcategory, index) => (
                        <label key={index} htmlFor={subcategory}>
                          <input type="checkbox" id={subcategory} />
                          <span className="lab">{subcategory} </span>
                        </label>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" products-list coll">
          <div className="mb-3 d-flex justify-content-end">
            {
              //<Breadcrumb Category={"Shop"} CategoryLink="/products" SubCategory={"All"} Data={"All"} />
            }
            <DropdownButton
              id="dropdown-item-button"
              title="Sort By : Name (A-Z) "
            >
              <Dropdown.Item as="button">&gt; Name (A-Z)</Dropdown.Item>
              <Dropdown.Item as="button">&gt; Sale Item</Dropdown.Item>
              <Dropdown.Item as="button">&gt; New Item</Dropdown.Item>
              <Dropdown.Item as="button">&gt; Price (High First)</Dropdown.Item>
              <Dropdown.Item as="button">&gt; Price (Low First)</Dropdown.Item>
            </DropdownButton>
          </div>
          <div className="row">
            {products.map((product) => (
              <div
                key={product.id}
                className="col-lg-3 col-md-6 col-sm-12 mb-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
