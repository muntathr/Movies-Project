import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Movie } from "./Pages/Movies/Movie";
import Footer from "./components/Footer";
import Autrhantication from "./components/Autrhantication";
import axios from "axios";
import { CheckAuth } from "./components/CheckAuth";
import { useEffect } from "react";

function App() {
  const token = localStorage.getItem('token');
  //Base URL
  axios.defaults.baseURL = 'http://localhost:5001/api';
  //defult header
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  useEffect(()=>{
    const config = {
      method: "get",
      url: `/users/current`,
      headers: {
        ["Authorization"]: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios(config)
      .then((res) => {
        console.log("user info: ", res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[token])
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Switch>
          <Route path="/" component={Trending} exact />
          <Route path="/movies" component={Movies} />
          <Route path="/movie" component={Movie} exact />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
        <Autrhantication />
      </div>
      <Footer />
      <CheckAuth />
    </BrowserRouter>
  );
}

export default App;
