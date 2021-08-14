import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import MovieContext from "../context/MovieContext";
import MovieDecription from "../pages/MovieDescription";
import TvShowContext from "../context/TvShowContext";
import TvShowDecription from "../pages/TvShowDescription";
import '../assets/css/App.css'
import '../assets/css/movie.css'
import '../assets/css/tvshow.css'
import "../assets/css/utilities.css"
import MovieAllList from  "./MovieAllList.js"
import TvShowAllList from  "./TvShowAllList.js"
import Login from  "./Login.js"
import Registration from "./Registration.js"

const App = () => {

  const [movies, setMovies] = useState([]);
  const [tvshows, setTvShows] = useState([]);

  useEffect(() => {
    console.log("Inside movies"+movies);
     fetch("http://localhost:5000/movies")
     
    //fetch("/movies")
      .then(res => res.json())
      .then((data) => {
        setMovies((previousState) => {
          previousState = data;
          return previousState

        });

        console.log(movies);
      })
      .catch(err => console.log(`Error ${err}`));
  }, [])

  

  // useEffect(() => {

  //   fetch("http://localhost:5001/tvshows")
  //     .then(res => res.json())
  //     .then((data) => {
  //       setTvShows(data);
  //     })
  //     .catch(err => console.log(`Error ${err}`));
  // }, [])


  console.log("App")

  return (
    <div>
      <div>
    <MovieContext.Provider value={{movies,setMovies}}>
      <Router>
        <Switch>
          <Route  exact path="/"><Home/></Route>
          <Route exact path="/Login"><Login/></Route>
          <Route exact path="/Registration"><Registration/></Route>
          <Route exact path="/MovieAllList"><MovieAllList/></Route>
          <Route exact path="/TvShowAllList"><TvShowAllList/></Route>
          <Route  path="/movies/:id"><MovieDecription/></Route>
          <Route  path="/tvshows/:id"><TvShowDecription /></Route>
         
        </Switch>
      </Router>
    </MovieContext.Provider>
    </div>
        
    </div >
  )
}

export default App
