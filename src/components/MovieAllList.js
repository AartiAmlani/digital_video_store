import { useContext } from 'react';
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MovieAllList = () => {

    const { movies } = useContext(MovieContext);

    return (

        <section id="section-movie-list">
            <Header/>
            <div className='container'>
                
                <h1>Movies</h1>
                <div className="grid grid-gap-1 grid-col-4">

                    {movies.map(
                        (movie => {
                                return (
                                    <Movie key={movie.id}
                                        id={movie.id} title={movie.title} poster={movie.poster} />)
                        })
                    )}
                </div>
               
            </div>
            <Footer/>
        </section>

    )
}

export default MovieAllList
