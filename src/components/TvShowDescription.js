import {useEffect,useState} from 'react';
import {useParams} from "react-router-dom"

const TvShowDescription = ()=> {
    
    const {id} = useParams();
    const [tvshow,setTvShow] = useState({});

    useEffect(()=>{

    console.log(id)
     fetch("http://localhost:5000/tvshows/"+id)
     .then(res=>res.json())
     .then((tvshows)=>{
       console.log(tvshows);
       setTvShow(tvshows)
 
     })
     .catch(err=>console.log(`Error ${err}`));
 
   },[])


    return (

        <section id="tvshow-description-section">
            <div className="tvshowdesc">

                <img className="" src={'/img/'+tvshow.poster} alt=""/>
            
                <div className="tvshow-description-content-area">
                <h1>{tvshow.title}</h1>
                   <h2>Released On :</h2> <h1>  {tvshow.dateReleased}</h1>
                     <h2>Details</h2>
                     <h1>{tvshow.description}</h1>
                     <h2>Buy @ just:<p> {tvshow.buy} </p></h2>
                     <h2>Rent @ just:<p>{tvshow.rent}</p></h2>
                    
                </div>
            </div>

        </section>
    )
}

export default TvShowDescription
