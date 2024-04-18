import './HeaderImage.css';

function HeaderImage() {
  return (
    <>
      <div className="container">
        <div className="izquierda">
          <img className="HeaderImage" src="src/images/founder.jpg" />
        </div>
        <div className="derecha">
          <h1>Quality of work</h1>
          <p>From WhiteRock we assure you the best conditions and facilities for you to get the house of your dreams.</p>
        </div>
      </div>
    </>
  )
}

export default HeaderImage;