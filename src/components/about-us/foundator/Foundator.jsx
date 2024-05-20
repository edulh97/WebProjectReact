import './foundator.css';

function Founder() {
  return (
    <>
      <div className='founder-container' >
        <div>
          <h1>The Founder</h1>
          <h2>Mr. Wallace Junior</h2>
        </div>
        <div className="Founder-image-container">
          <img src="original-founder.jpg" alt="Founder" className='Founder-image' />
          <p>With Kiwi roots and an early passion for woodworking, Wallace Junior has carved his way into the world of creating with wood. From his earliest days, his ability to transform simple pieces of wood into works of art has been evident. However, his vision transcended the borders of his native country.</p>
        </div>
      </div>
    </>
  )
}

export default Founder;