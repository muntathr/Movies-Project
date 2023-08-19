import React, { useLayoutEffect, useRef } from "react";
import { Badge } from "@material-ui/core";
import { img_500, unavailable } from "../config/config";
import ContentModal from "./MovieInfo";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Corrected import
import LikeButton from "./likeButton";
import { Link } from "react-router-dom";

const CardMovie = ({
  index,
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  des
}) => {
  const cardRef = useRef(); // Renamed card_1 to cardRef

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elementCard = cardRef.current; // Renamed element_card_1 to elementCard
    gsap.set(elementCard, { y: 100, opacity: 0 });

    const animation = gsap.to(elementCard, {
      y: 0,
      opacity: 1,
      duration: .75,
      delay: (index - 0.99) * 0.05, // Simplified delay calculation
    });

    ScrollTrigger.create({
      trigger: elementCard,
      start: "top 80%",
      animation: animation,
      toggleActions: "play none none none",
    });
  }, [index]);

  return (
    <div ref={cardRef}> {/* Wrapped with a div for the ScrollTrigger */}
      <div class="card my-3">
        <Link to={`/movie?media_type=${media_type}&id=${id}`}>
          <img src={poster ? `${img_500}${poster}` : unavailable} class="card__image" alt="" />
        </Link>
        <div class="card__overlay card__bg">
          <div class="card__header px-3 py-4">
            <Link to={`/movie?media_type=${media_type}&id=${id}`}>
              <div class="card__header-text">
                <h3 class="card__title h3">{title}</h3>
                <span class="card__status h6">{date}</span>
              </div>
            </Link>
            <div>
              <LikeButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovie;
