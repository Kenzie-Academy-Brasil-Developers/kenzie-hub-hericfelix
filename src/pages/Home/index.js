import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = ({ isAutenticated }) => {
  return (
    <div>
      <Header isAutenticated={isAutenticated} />
      <Footer />
    </div>
  );
};

export default Home;
