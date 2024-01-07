import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {

  return (
    <div className="search container">
      <div className="categories">
        <FontAwesomeIcon icon="fa-solid fa-table-cells-large" />
        <p>Categories</p>
        <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
      </div>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          id="inputModalSearch"
          placeholder="Search By product name ..."
        />
        <button className="btnSearch">
          <FontAwesomeIcon icon="fa fa-search" />
        </button>
      </div>
      
    </div>
  );
};

export default Search;
