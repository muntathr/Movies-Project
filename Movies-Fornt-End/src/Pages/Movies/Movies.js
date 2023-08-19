import axios from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Genres from "../../components/Genres/Genres";
import CardMovie from "../../components/CardMovie";
import useGenre from "../../hooks/useGenre";
import CustomPagination from "../../components/CustomPagination";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Movies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);

  const windowScroll = () => {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 0 ||
      document.documentElement.scrollTop >= 0
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  };

  useEffect(() => {
    windowScroll();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.addEventListener("scroll", windowScroll);
    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const title_1 = useRef();
  const title_2 = useRef();


  useLayoutEffect(() => {
    // Initialize GSAP and ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // animation title
    const element_title_1 = title_1.current;
    gsap.set(element_title_1, { height: 0, opacity: 0 });
    const animation_titile = gsap.to(element_title_1, {
      height: "100%",
      opacity: 1,
      duration: 0.75,
    });
    ScrollTrigger.create({
      trigger: element_title_1,
      start: "top 80%",
      animation: animation_titile,
      toggleActions: "play none none none",
    });

    const element_title_2 = title_2.current;
    gsap.set(element_title_2, { height: 0, opacity: 0 });
    const animation_titile_2 = gsap.to(element_title_2, {
      height: "100%",
      opacity: 1,
      duration: 1,
    });
    ScrollTrigger.create({
      trigger: element_title_2,
      start: "top 80%",
      animation: animation_titile_2,
      toggleActions: "play none none none",
    });

  }, []);

  // console.log(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${'dae823b702b0ffabaa31a8c0bf3c6c95'}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  return (
    <section className="container section mt-3" id="movie">
      <div>
        <h1 className="h2 text-center col-12" ref={title_1}>
        All films according to their categories
        </h1>
        <div className="row mt-3 mb-3">
          <div className="col-2"></div>
          <p className="h6 text-mute text-center col-8" ref={title_2}>
          All films according to their categories All films according to their categories All films according to their categories.
          </p>
        </div>
      </div>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="trending row">
        {content &&
          content.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <CardMovie
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type="movie"
                vote_average={item.vote_average}
              />
            </div>
          ))}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </section>
  );
};

export default Movies;
