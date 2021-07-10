import { useContext } from 'react';
import { useEffect, useState } from 'react';
import TvShowContext from "../context/TvShowContext";
// import TvShowContext from "../context/MovieContext";
import TvShow from './TvShow';

const TvShowList = () => {
    const [tvshows, setTvShows] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/tvshows")
          .then(res => res.json())
          .then((data) => {
            setTvShows(data);
          })
          .catch(err => console.log(`Error ${err}`));
    
      }, [])

   // const { tvshows } = useContext(TvShowContext);

    return (

        <section id="section-tvshow-list">

            <div className='container'>
                <h1> Featured Tv shows</h1>
                <div className="grid grid-gap-1 grid-col-4">
               


                    {tvshows.map(
                       ( Tvshow =>{
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
