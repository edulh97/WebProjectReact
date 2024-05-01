import Footer from "../../components/footer/Footer";
import HeaderImage from "../../components/header-image/HeaderImage";
import Header from "../../components/header/Header";
import Message from "../../components/message/Message";
import PopupMessage from "../../components/popup/PopUpMessage";
import TextInput from "../../components/textInput/TextInput";

function Services() {
  return (
    <>
      <Header />
      <p>Services page</p>
      <HeaderImage />
      <Message />
      <TextInput/>
      <PopupMessage/>
      <Footer />
    </>
  );
}

export default Services;