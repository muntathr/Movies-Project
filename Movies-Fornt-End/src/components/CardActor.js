import React, { useLayoutEffect, useRef } from "react";
import { img_300, unavailable } from "../config/config";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Corrected import

const CardActor = ({
  index,
  poster,
  title,
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
        <div class="card-actor my-3">
          <img src={poster ? `${img_300}${poster}` : unavailable} class="card-actor__image" alt="" />
          <div class="card-actor__overlay card-actor__bg">
            <div class="card-actor__header px-3 py-1">
              <div class="card-actor__header-text">
                <h3 class="card-actor__title h5">{title}</h3>
                <span class="card-actor__status h6">{'Actor'}</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CardActor;
