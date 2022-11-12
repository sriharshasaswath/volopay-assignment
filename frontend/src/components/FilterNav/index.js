import { AiFillAppstore } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BsFilterRight } from "react-icons/bs";
import "./index.css";

const FilterNav = (props) => {
  const onEnterSearchInput = (event) => {
    const { enterSearchInput } = props;
    if (event.key === "Enter") {
      enterSearchInput();
    }
  };

  const onChangeSearchInput = (event) => {
    const { changeSearchInput } = props;
    changeSearchInput(event.target.value);
  };

  const ProductsHeader = () => {
    const { sortbyOptions, activeOptionId, clearFilters } = props;

    const onChangeSortby = (event) => {
      const { changeSortby } = props;
      changeSortby(event.target.value);
    };

    return (
      <div className="products-header">
        <div className="sort-by-container">
          <BsFilterRight className="sort-by-icon" />
          <p className="sort-by">Sort by</p>
          <select
            className="sort-by-select"
            value={activeOptionId}
            onChange={onChangeSortby}
          >
            {sortbyOptions.map((eachOption) => (
              <option
                key={eachOption.optionId}
                value={eachOption.optionId}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="clear-filters-btn"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>
    );
  };

  const renderSearchInput = () => {
    const { searchInput } = props;
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    );
  };

  const renderCategoriesList = () => {
    const { categoryOptions } = props;

    return categoryOptions.map((category) => {
      const { changeCategory, activeCategoryId } = props;
      const onClickCategoryItem = () => changeCategory(category.id);
      const isActive = category.id === activeCategoryId;
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`;

      return (
        <li
          className="nav-item"
          key={category.id}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.item}</p>
        </li>
      );
    });
  };

  return (
    <div className="filters-group-container">
      <div>
        <div className="filter-nav">
          <div className="items">{renderCategoriesList()}</div>
          <div>
            <AiFillAppstore />
            <AiOutlineMenu className="menu-icon" />
          </div>
        </div>
        <hr className="hr-line" />
      </div>
      <div className="filters-container">
        {renderSearchInput()}
        {ProductsHeader()}
      </div>
    </div>
  );
};

export default FilterNav;
