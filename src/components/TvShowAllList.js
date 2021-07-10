import { useContext } from 'react';
import { useEffect, useState } from 'react';
import TvShowContext from "../context/TvShowContext";
// import TvShowContext from "../context/MovieContext";
import TvShow from './TvShow';
import Header from "../components/Header";
import Footer from "../components/Footer";

const TvShowAllList = () => {
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
            <Header />
            <div className='container'>
                <h1>Tv shows</h1>
                <div className="grid grid-gap-1 grid-col-4">



                    {tvshows.map(
                        (Tvshow => {

                            return (
                                <TvShow key={Tvshow.id}
                                    id={Tvshow.id} title={Tvshow.title} poster={Tvshow.poster}  />)
                        })
                    )}

                </div>
            </div>
            <Footer />
        </section>



    )
}

export default TvShowAllList
