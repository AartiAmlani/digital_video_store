import { useContext } from 'react';
import Movie from "./Movie";
import MovieContext from "../context/MovieContext";

const MovieList = () => {

    const { movies,setMovies } = useContext(MovieContext);

    return (

        <section id="section-movie-list">
            <div className='container'>
                <h1>Featured Movies</h1>
                <div className="grid grid-gap-1 grid-col-4">

                    {movies.map(
                        ((movie,index) => {
                            if (movie.featured == true)
                                return (
                                    <Movie key={movie.id}
                                        id={movie.id} title={movie.title} poster={movie.poster}  />)
                        })
                    )}
                </div>
            </div>
        </section>

    )
}

export default MovieList
