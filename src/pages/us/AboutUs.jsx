import Actuality from "../../components/about-us/actuality/Actuality";
import Brother from "../../components/about-us/brother/Brother";
import Founder from "../../components/about-us/foundator/Foundator";
import History from "../../components/about-us/history/History";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";


function AboutUs() {
  return (
    <>
      <Header />
      <Founder />
      <History />
      <Brother/>
      <Actuality/>
      <Footer />
    </>
  );
}

export default AboutUs;