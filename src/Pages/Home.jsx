import Footer from "../components/Footer/footer";
import Promo from "../components/PromoBlock/promo";
import Teamb from "../components/TeamBuildBlock/teamb";
import Expirience from "../components/ExperienceBlock/expirience";
import Reviews from "../components/ReviewsBlock/reviews";

function Home() {
  return (
    <>
      <Promo />
      <Teamb />
      <Expirience />
      <Reviews />
      <Footer />
    </>
  );
}

export default Home;
