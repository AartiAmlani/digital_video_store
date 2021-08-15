import { useContext } from 'react';
import { useEffect, useState } from 'react';
import TvShowContext from "../context/TvShowContext";
import MovieContext from "../context/MovieContext";

// import TvShowContext from "../context/MovieContext";
import TvShow from './TvShow';

const TvShowList = () => {
    const [tvshows, setTvShows] = useState([]);
  // const { tvshows,setTvShows } = useContext(TvShowContext);


    useEffect(() => {

        //fetch("/tvshows")
         fetch("http://localhost:5000/tvshows")
          .then(res => res.json())
          .then((d) => {
            setTvShows((previousState) => {
                previousState = d;
                return previousState
      
              });
              console.log("tvshowlist  "+ tvshows[0]);
            })
          .catch(err => console.log(`Error ${err}`));
    
      }, [])


    return (

        <section id="section-tvshow-list">

            <div className='container'>
                <h1> Featured Tv shows</h1>
                <div className="grid grid-gap-1 grid-col-4">
               


                    {tvshows.map(
                       ( (Tvshow,index) =>{
                           if(Tvshow.featured == true)
                        return (
                        <TvShow key={Tvshow.id} 
                        id={Tvshow.id} title={Tvshow.title} poster={Tvshow.poster}  />)
                        })
                    )}

                </div>
               </div>

        </section>



    )
}

export default TvShowList
