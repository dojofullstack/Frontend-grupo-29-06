import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {

    const articulos = ["aprende react", "aprende python"];

    const articulos2 = ["aprende aws", "aprende serverless"];


  return (
    <>
      <Header props={articulos} data={articulos2} />

        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, perspiciatis?</p>
        </div>

      <Footer />
    </>
  );
};



export default Home;