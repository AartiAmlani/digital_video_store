import {Link} from "react-router-dom";
const Movie = ({id,title,poster,dateReleased}) => {


    const alt= `${title} Poster `;

    const source = `/img/${poster}`;
    return (
        <div className="movie-card">
            
           <Link to = {"/movies/"+id}>
                <img src={source} alt={alt}/>   
            </Link> 

            <div className="movieContent">
                <h3>{title}</h3>
                <p>{dateReleased}</p>
            </div>
        </div>
    )
}

export default Movie
