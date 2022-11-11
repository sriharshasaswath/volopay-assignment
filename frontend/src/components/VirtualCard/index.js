import { GoPrimitiveDot } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { TiArrowRepeat } from "react-icons/ti";
import "./index.css";

const VirtualCard = (props) => {
  const { cardData } = props;
  const {
    name,
    budgetName,
    ownerId,
    spent,
    availableToSpend,
    cardType,
    expiry,
    limit,
    status,
  } = cardData;

  return (
    <div className="card-item">
      <div className="card-container">
        <div className="product-details">
          <p className="name">{name}</p>
          <p className="budgetName">{budgetName}</p>
          <p className="cardType">{cardType}</p>
        </div>
        <div className="icon-container">
          {cardType == "burner" ? (
            <AiFillFire className="fire" />
          ) : (
            <TiArrowRepeat className="arrow" />
          )}
          <p className="expires">Expires: {expiry}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="spent-container">
        <div className="sub-spent">
          <GoPrimitiveDot className="red-dot" />
          <p className="spent">spent</p>
        </div>
        <p className="spent">
          {spent.value} {spent.currency}
        </p>
      </div>
      <div className="availableToSpend-container">
        <div className="sub-spent">
          <GoPrimitiveDot className="green-dot s" />
          <p className="spent s">available to spend</p>
        </div>
        <p className="spent s">
          <strong>
            {availableToSpend.value} {availableToSpend.currency}
          </strong>
        </p>
      </div>
    </div>
  );
};
export default VirtualCard;
