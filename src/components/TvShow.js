import {Link} from "react-router-dom";
const TvShow = ({id,title,poster,dateReleased}) => {


    const alt= `${title} Poster `;

    const source = `/img/${poster}`;
    return (
        <div className="tvshow-card">
            
           <Link to = {"/tvshows/"+id}>
                <img src={source} alt={alt}/>   
            </Link> 

            <div className="tvshowContent">
                <h3>{title}</h3>
                <p>{dateReleased}</p>
            </div>
        </div>
    )
}

export default TvShow
