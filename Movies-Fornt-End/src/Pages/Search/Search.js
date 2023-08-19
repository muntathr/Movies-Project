import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/CustomPagination";
import CardMovie from "../../components/CardMovie";

const Search = () => {
  const [type, setType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();


  const fetchSearch = async (e) => {
    e?.preventDefault();
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${'dae823b702b0ffabaa31a8c0bf3c6c95'
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

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

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);

  return (
    <section className="container">
      <div className="row justify-content-center mt-5 pt-5">
        <div className="col-8 sub-form mt-4">
          <form className="mx-auto mb-4">
            <div className="form-group">
              <input
                type="text"
                placeholder="Search By Name Movie"
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary border-0"
                onClick={fetchSearch}
              >
                Search Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="trending row justify-content-start">
        {content ?
          content.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <CardMovie
                key={item.id}
                id={item.id}
                poster={item.poster_path}
                title={item.title || item.name}
                date={item.first_air_date || item.release_date}
                media_type={type ? "tv" : "movie"}
                vote_average={item.vote_average}
              />
            </div>
          ))
          :
          <h2 className="h2 text-center">Seatch Now</h2>
          }
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </section>
  );
};

export default Search;
