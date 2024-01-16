import { categories, useState, products, FontAwesomeIcon } from '../Constants.js';
import Hero from '../Components/Hero/Hero.jsx';
import ProductCard from '../Components/ProductCard/ProductCard.js';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Product = () => {
  const [openSubcategories, setOpenSubcategories] = useState({});

  const handleCategoryClick = (categoryName) => {
    setOpenSubcategories((prevOpenSubcategories) => ({
      ...prevOpenSubcategories,
      [categoryName]: !prevOpenSubcategories[categoryName],
    }));
  };

  return (
    <>
      <Hero />
      <div className="products container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-4 col-sm-12 ">
            <div className=' categories-list coll'>
              <h3>Categories</h3>
              <ul>
                {categories.map((category, index) => (
                  <li key={index} className='mb-4'>
                    <h6 className='cat' onClick={() => handleCategoryClick(category.name)}>
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
          <div className="col-lg-9 col-md-8 col-sm-12  products-list coll">
            <div className='mb-3 d-flex justify-content-between'>
              <ul className="breadcrumb">
                <li> Categories<span className="divider p-1">/ </span></li>
                <li> SupCategory<span className="divider p-1">/ </span></li>
                <li className="active"> Data</li>
              </ul>
              <DropdownButton id="dropdown-item-button" title="Sort By : Best Sales ">
                <Dropdown.Item as="button">&gt; Best Sales</Dropdown.Item>
                <Dropdown.Item as="button">&gt; New Item</Dropdown.Item>
                <Dropdown.Item as="button">&gt; Sale Item</Dropdown.Item>
                <Dropdown.Item as="button">&gt; Price (High First)</Dropdown.Item>
                <Dropdown.Item as="button">&gt; Price (Low First)</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className='row'>
              {products.map((product) => (
                <div key={product.id} className=" col-lg-4 col-md-6 col-sm-12 mb-3">
                  <ProductCard product={product} flagSale={true} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;