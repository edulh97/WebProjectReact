import "./House.css";

function House({ house }) {
  return (
    <div className="house-item">
      <p>{house.name}</p>
      <div className="house-item-img-wrapper">
        <img src={`${house.src}`} alt="fotodeunCasoplon" />
      </div>
    </div>
  )
}

export default House;