import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import MovieList from "../components/MovieList";
import TvShowList from "../components/TvShowList";
import Slider from "../components/Slider";

// import Login from "../components/Login";

const Home = () => {
    return (
    <>

        <Header/>
        <Slider/>
         {/* <Login/> */}
        <MovieList/>
        <TvShowList/>
        <Content/>
        
        <Footer/>
      </>
    )
}

export default Home
