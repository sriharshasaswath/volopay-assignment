import { Component } from "react";
import VirtualCard from "../VirtualCard";

import "./index.css";

class Home extends Component {
  state = {
    cardsList: [],
  };

  componentDidMount() {
    this.getCardsList();
  }

  getCardsList = async () => {
    const apiUrl = `http://localhost:4000/`;
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

  render() {
    const { cardsList } = this.state;
    return (
      <div className="all-cards-section">
        <ul className="cards-list">
          {cardsList.map((each) => (
            <VirtualCard cardData={each} key={each.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
