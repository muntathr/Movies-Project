import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300 } from "../config/config";
import CardActor from "./CardActor";

const Gallery = ({ id, media_type }) => {
  const [credits, setCredits] = useState([]);


  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  const fetchCredits = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${'dae823b702b0ffabaa31a8c0bf3c6c95'}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="section pt-5">
      <div className="row justify-content-center">
        <div className="col-12 pb-2 mb-4">
          <div
            className="section-title overflow-hidden text-center"
          >
            <h4 className="title mb-3">
              Production and acting team
            </h4>
            <p
              className="text-mute p-des overflow-hidden mx-auto mb-0"
            >
              The movie has a great group of brilliant actors <br /> and producers
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        {credits.map((item, index) => (
          item.profile_path &&
          <div key={index} className="col-12 col-md-4 col-lg-3 col-xl-2">
            <CardActor title={item?.name} poster={`${img_300}/${item.profile_path}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
