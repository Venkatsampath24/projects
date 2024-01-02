import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
// import WatchList from "./WatchList";
// import WatchList from "./WatchList";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchList, setWatchList] = useState([]);
  const [hovered, setHovered] = useState("");

  //   Pagination Methods.

  const handlePrevPage = () => {
    if (pageNum === 1) {
      return
    } else {
      setPageNum(pageNum - 1);
    }
  };

  const handleNextPage = () => {
    setPageNum(pageNum + 1);
  };

  //   WatchList Handlers.

  // Add to WatchList.
  const addToWatchList = (movie) => {
    const newWatchList = [...watchList, movie];
    setWatchList(newWatchList);
  
    localStorage.setItem('imdb', JSON.stringify(newWatchList))
  };

  //   Remove from WatchList

  // Remove from WatchList
  const removeFromWatchList = (movie) => {
    const filterWatchList = watchList.filter((m) => {
      return m.id !== movie.id;
    });

  setWatchList(filterWatchList);

  localStorage.setItem('imdb', JSON.stringify(filterWatchList));
};



 

  const showButton = (id) => {
    setHovered(id);
  };

  const hideButton = () => {
    setHovered("");
  };


  useEffect(() => {
    console.log(watchList);
  }, [watchList]);
  
  



  useEffect(() => {

    // IIFE function for immediate invoked functions expression.
    (function () {

      const localStorageMovies = JSON.parse(localStorage.getItem('imdb')) || [];
      setWatchList(localStorageMovies);

      // Api calls
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=75d09200b83a4bd06c158dab326d0368&page=${pageNum}}`
        )
        .then((res) => {
          setMovies(res.data.results); // passing array details to useState hook.
          console.log(res.data.results);
        });
    })();
  }, [pageNum]);

  //   console.log(movies);

  return (
    <div>
      {/*Movie Card */}
      <h1 className="font-bold text-center pt-10 text-2xl text-white w-[100vw] pt-5 bg-black">
        Trending Movies
      </h1>
      <div className="flex flex-wrap justify-center pt-5 bg-black">
        {movies.map((movie) => {
          return (
            <div
              onMouseOver={() => showButton(movie.id)}
              onMouseLeave={() => hideButton()}
              key={movie.id}
              className=" w-[180px] h-[40vh] bg-center bg-cover pl-10 rounded-xl m-8 md:h[40vh] md:w[180px] hover:scale-110 duration:400 flex flex-end relative"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
            >

            {/*Emoji Hovering Effect*/}
              <div
                className="ml-[6.5rem]  text-xl rounded-xl opacity-95 bg-black absolute p-1 mt-1 top-0"
                style={{
                  display: hovered === movie.id ? "block" : "none",
                }}
              >
                {/*Adding the WatchList*/}

                {!watchList.some((m) => m.id === movie.id) ? (
                  <div onClick={() => addToWatchList(movie)}>😍</div>
                ) : (
                  <div onClick={() => removeFromWatchList(movie)}>❌</div>
                )}
                
              </div>
              <div className="bg-black p-4 text-white text-center rounded-xl opacity-80 font-bold absolute bottom-0 left-0 right-0">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>

      <Pagination
        previousPage={handlePrevPage}
        nextPage={handleNextPage}
        pageNumber={pageNum}
      />
    </div>
  );
}

export default Movies;
