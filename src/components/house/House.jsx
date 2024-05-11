import "./House.css";

function House({ house }) {
  return (
    <div className="house-item">


      <div className="house-item-img-wrapper">
        <img src={`${house.src}`} alt="fotodeunCasoplon" />
      </div>

      {/* <div className="house-name">
        <p>{house.name}</p>
        <p>See details</p>
      </div> */}
    </div>
  )
}

export default House;