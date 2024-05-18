import CommunityHouses from "../../components/comunity/community-Houses/CommunityHouses";
import Consult from "../../components/consult/Consult";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NextHouse from "../../components/next-house/NextHouse";
import './service.css';

function Services() {
  return (
    <>
      <div className="consult-container">
        <Header />
        <Consult />
        <div className="consult-prefooter">
        </div>
        <div className="consult-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Services;