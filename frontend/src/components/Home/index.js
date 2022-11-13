import { useEffect, useState } from "react";
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

function Home() {
  const rows = 10;
  const [cardsList, setcardsList] = useState([]);
  const [activeCategoryId, setactiveCategoryId] = useState("0");
  const [searchInput, setsearchInput] = useState("");
  const [activeOptionId, setactiveOptionId] = useState(
    sortbyOptions[0].optionId
  );
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getCardsList();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    });
  }, []);

  useEffect(() => {
    setPost([...cardsList.slice(0, page * rows)]);
    console.log(post);
  }, [page]);

  const getCardsList = async () => {
    console.log(activeCategoryId);
    console.log(activeOptionId);
    const apiUrl =
      searchInput.length === 0
        ? activeCategoryId === "0"
          ? activeOptionId === "all"
            ? `https://volopay-assignment.herokuapp.com//`
            : `https://volopay-assignment.herokuapp.com/?card_type=${activeOptionId}`
          : `https://volopay-assignment.herokuapp.com/?owner_id=${activeCategoryId}`
        : `https://volopay-assignment.herokuapp.com/?name=${searchInput}`;
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
      setcardsList(updatedData);
      setPost([...updatedData.slice(0, 10)]);
    } else {
      console.log("error");
    }
  };

  const enterSearchInput = () => {
    getCardsList();
  };

  const changeSearchInput = (searchInput) => {
    setsearchInput(searchInput);
  };

  const changeCategory = (activeCategoryId) => {
    setactiveCategoryId(activeCategoryId);
  };

  const changeSortby = (activeOptionId) => {
    console.log(activeOptionId);
    setactiveOptionId(activeOptionId);
  };

  useEffect(() => {
    getCardsList();
  }, [activeOptionId]);

  useEffect(() => {
    getCardsList();
  }, [activeCategoryId]);

  useEffect(() => {
    getCardsList();
  }, [searchInput]);

  const clearFilters = () => {
    setsearchInput("");
    setactiveCategoryId("0");
  };
  console.log(post);

  return (
    <div className="all-cards-section">
      <FilterNav
        searchInput={searchInput}
        changeSearchInput={changeSearchInput}
        enterSearchInput={enterSearchInput}
        categoryOptions={categoryOptions}
        changeCategory={changeCategory}
        activeCategoryId={activeCategoryId}
        activeOptionId={activeOptionId}
        sortbyOptions={sortbyOptions}
        changeSortby={changeSortby}
        clearFilters={clearFilters}
      />
      <ul className="cards-list">
        {post.length === 0 ? (
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
        {post.map((each) => (
          <VirtualCard cardData={each} key={each.id} />
        ))}
      </ul>
    </div>
  );
}

export default Home;
