import Carousel from 'react-bootstrap/Carousel';
import { useState , useEffect } from 'react';
import axios from 'axios';
function CarouselComp({searchTerm}) {
  let tmdbapikey = "a9db203a7f7cec0368e0d7c1f2a26bcc";
  let omdbapikey = "165db7f3";
  let type = "movie";
  const [movies, setMovies] = useState([]);
  const [command, setCommand] = useState(["/movie/top_rated"])
  useEffect(() => {
    async function fetchData() {
      
      //const response = await axios.get(`http://www.omdbapi.com/?apikey=${omdbapikey}&type=movie&plot=short&r=json&tomatoes=true&sort=imdbRating&order=desc`);
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${omdbapikey}&s=${searchTerm}`);
      //const response = await axios.get(`https://api.themoviedb.org/3${command}?apikey=${tmdbapikey}`);

      if (response.status === 200) {
        const data = response.data;
        console.log(response.data);
        if (data.Search === undefined || data.Search.length === 0 ) {
          console.log("No movies found");
        } else {
          setMovies(data.Search);
        }
      } else {
        console.error(`Error: ${response.status}`);
      }
    }
    fetchData();
    }, [searchTerm]);

    let CarouselItems = movies.map(movie => (
      <Carousel.Item interval={5000} >
        <div>
          <img
            className="d-block"
            style={{height: 500 , marginTop: 30}}
            src={movie.Poster}
            alt="First slide"
          />
        </div>  
          <div className="captions" style={{  marginTop:100}}>
            <Carousel.Caption >
              <h3>{movie.Title}</h3>
            </Carousel.Caption>
          </div>
          </Carousel.Item>
     ))
    return (
      <Carousel>
       {CarouselItems}
      </Carousel>
  );
}

export default CarouselComp;