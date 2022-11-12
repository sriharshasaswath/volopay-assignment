import { Component } from "react";
import VirtualCard from "../VirtualCard";
import FilterNav from "../FilterNav";
import { AiFillWarning } from "react-icons/ai";

import "./index.css";

const categoryOptions = [
  { item: "Your", id: "1" },
  { item: "All", id: "0" },
  { item: "Blocked", id: "2" },
];

const sortbyOptions = [
  {
    optionId: "all",
    displayText: "all",
  },
  {
    optionId: "subscription",
    displayText: "subscription",
  },
  {
    optionId: "burner",
    displayText: "burner",
  },
];

class Home extends Component {
  state = {
    cardsList: [],
    activeCategoryId: "0",
    searchInput: "",
    activeOptionId: sortbyOptions[0].optionId,
  };

  componentDidMount() {
    this.getCardsList();
  }

  getCardsList = async () => {
    const { activeCategoryId, searchInput, activeOptionId } = this.state;
    console.log(activeCategoryId);
    const apiUrl =
      searchInput.length === 0
        ? activeCategoryId === "0"
          ? activeOptionId === "all"
            ? `http://localhost:4000/`
            : `http://localhost:4000?card_type=${activeOptionId}`
          : `http://localhost:4000?owner_id=${activeCategoryId}`
        : `http://localhost:4000?name=${searchInput}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options, { mode: "cors" });
    if (response.ok) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.map((each) => ({
        id: each.id,
        name: each.name,
        budgetName: each.budget_name,
        ownerId: each.owner_id,
        spent: each.spent,
        availableToSpend: each.available_to_spend,
        cardType: each.card_type,
        expiry: each.expiry,
        limit: each.limit,
        status: each.status,
      }));
      console.log(updatedData);
      this.setState({
        cardsList: updatedData,
      });
    } else {
      console.log("error");
    }
  };

  enterSearchInput = () => {
    this.getCardsList();
  };

  changeSearchInput = (searchInput) => {
    this.setState({ searchInput });
  };

  changeCategory = (activeCategoryId) => {
    this.setState({ activeCategoryId }, this.getCardsList);
  };

  changeSortby = (activeOptionId) => {
    this.setState({ activeOptionId }, this.getCardsList);
  };

  clearFilters = () => {
    this.setState(
      {
        searchInput: "",
        activeCategoryId: "0",
      },
      this.getCardsList
    );
  };

  render() {
    const { cardsList, searchInput, activeCategoryId, activeOptionId } =
      this.state;
    return (
      <div className="all-cards-section">
        <FilterNav
          searchInput={searchInput}
          changeSearchInput={this.changeSearchInput}
          enterSearchInput={this.enterSearchInput}
          categoryOptions={categoryOptions}
          changeCategory={this.changeCategory}
          activeCategoryId={activeCategoryId}
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
          clearFilters={this.clearFilters}
        />
        <ul className="cards-list">
          {cardsList.length === 0 ? (
            <div>
              <p>No Virtual Cards Found</p>
              <div className="warning-container">
                <AiFillWarning className="warning" />
                <p>
                  Try with <strong>CASE SENSITIVE</strong>
                </p>
              </div>
            </div>
          ) : null}
          {cardsList.map((each) => (
            <VirtualCard cardData={each} key={each.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
