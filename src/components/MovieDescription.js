import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"
import Movie from "./Movie";
import {useContext} from 'react';
import MovieContext from "../context/MovieContext";
const MoiveDescription = ()=> {
    
    const {id} = useParams();
    const [movies,setMovies] = useState([]);
    
  useEffect(() => {

    fetch("http://localhost:5000/movies")
      .then(res => res.json())
      .then((data) => {

        setMovies((previousState) => {

          previousState = data;
          return previousState
        });


      })
      .catch(err => console.log(`Error ${err}`));

  }, [])
  

//     useEffect(()=>{

//     console.log(id)
//       fetch("http://localhost:5000/movies/"+id)
//    // fetch("/movies/"+id)
//      .then(res=>res.json())
//      .then((data1)=>{
//        console.log(data1);
//        setMovie((previousState) => {
//         previousState = data1;
//         return previousState

//       });

//       console.log("movie desc movies id "+ movie[id]);
//     })
//     .catch(err => console.log(`Error ${err}`));
// }, [])

       

   //const {movies} = useContext(MovieContext);

    // return (

    //     <section id="movie-description-section">
    //         <div className="moviedesc">
    //         {/* {movies.map(movie=>(<Movie key={movie.id} title={movie.title} poster={movie.poster} dateReleased={movie.dateReleased}/>))}     */}

    //             <img className="" src={'/img/'+ movie.poster} alt=""/>
            
    //             <div className="movie-description-content-area">
    //                 <h1>{movie.title}</h1>
    //                <h2>Released On :</h2> <h1>  {movie.dateReleased}</h1>
    //                  <h2>Details</h2>
    //                  <h1>{movie.description}</h1>
    //                  <h2>Buy @ just:<p> {movie.buy} </p></h2>
    //                  <h2>Rent @ just:<p>{movie.rent}</p></h2>
    //             </div>
    //         </div>

    //     </section>
    // )
    return (
      <main>
        {movies.map((movie => {
          if (movie.id == id)
            return (
              <section id="movie-description-section">
            <div className="moviedesc">
             {/* {movies.map(movie=>(<Movie key={movie.id} title={movie.title} poster={movie.poster} dateReleased={movie.dateReleased}/>))}     */}

                 <img className="" src={'/img/'+ movie.poster} alt=""/>
            
                 <div className="movie-description-content-area">
                     <h1>{movie.title}</h1>
                    <h2>Released On :</h2> <h1>  {movie.dateReleased}</h1>
                      <h2>Details</h2>
                      <h1>{movie.description}</h1>
                      <h2>Buy @ just:<p> {movie.buy} </p></h2>
                      <h2>Rent @ just:<p>{movie.rent}</p></h2>
                 </div>
             </div>

         </section>
              
            )


              }))}

      </main>)
}

export default MoiveDescription
