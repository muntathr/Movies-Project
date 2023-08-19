import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import TrendingMove from "../../components/TrendingMove";
import ServicesInfo from "../../components/ServicesInfo";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [contentSlider, setContentSlider] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${'dae823b702b0ffabaa31a8c0bf3c6c95'}&page=${page}`
    );

    setContent(data.results);
    const dataSlider = data.results.slice(0, 4)
    console.log("dataSlider", dataSlider)
    setContentSlider(dataSlider)
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <div>
      <Slider data={contentSlider} />
      <TrendingMove data={content} />
      <ServicesInfo />
    </div>
  );
};

export default Trending;
