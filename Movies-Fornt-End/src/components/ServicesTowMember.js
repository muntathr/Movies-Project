import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const ServicesTowMember = () => {
  const card_1 = useRef();
  const card_2 = useRef();
  const card_3 = useRef();
  const card_4 = useRef();

  useLayoutEffect(() => {
    // animation card 1
    const element_card_1 = card_1.current;
    gsap.set(element_card_1, { y: 100, opacity: 0 });
    const animation_1 = gsap.to(element_card_1, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
    ScrollTrigger.create({
      trigger: element_card_1,
      start: "top 80%",
      animation: animation_1,
      toggleActions: "play none none none",
    });

    // animation card 1
    const element_card_2 = card_2.current;
    gsap.set(element_card_2, { y: 100, opacity: 0 });
    const animation_2 = gsap.to(element_card_2, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.7,
    });
    ScrollTrigger.create({
      trigger: element_card_2,
      start: "top 80%",
      animation: animation_2,
      toggleActions: "play none none none",
    });

    // animation card 3
    const element_card_3 = card_3.current;
    gsap.set(element_card_3, { y: 100, opacity: 0 });
    const animation_3 = gsap.to(element_card_3, {
      y: 0,
      opacity: 1,
      duration: 1,
    });
    ScrollTrigger.create({
      trigger: element_card_3,
      start: "top 70%",
      animation: animation_3,
      toggleActions: "play none none none",
    });

    // animation card 4
    const element_card_4 = card_4.current;
    gsap.set(element_card_4, { y: 100, opacity: 0 });
    const animation_4 = gsap.to(element_card_4, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
    });
    ScrollTrigger.create({
      trigger: element_card_4,
      start: "top 70%",
      animation: animation_4,
      toggleActions: "play none none none",
    });
  }, []);

  return (
    <div className="row">
      <div className="col-md-4 col-12 servicesTow-continer " ref={card_1}>
        <div className=" ps-3 servicesTow-ImgEeffect  servicesTow-horizontalCard-light bg-light rounded-4 ">
          <div className="">
            <h2 className="h2 px-3 ">Knowledge of movie ratings</h2>
            <h4 className="h6 px-3 mt-3">
              Knowledge of movie ratings Knowledge of movie ratings Knowledge of movie ratings.
            </h4>
            <div className="row">
              <div className="col-md-4 col-6 h-100 servicesTow-relative"></div>
              <div className="trringel"></div>
              <div className="circell"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8 col-12 servicesTow-continer  servicesTow-overflow pe-2 " ref={card_2}>
        <div className="bg-success rounded-4  servicesTow-horizontalCard-green pb-2 ps-3 servicesTow-ImgEeffect">
          <div className="">
            <div className="h-100">
              <h2 className="h2 ps-3 ">Get to know the movie actors</h2>
              <h4 className="h6 ps-3 mt-3">
                Get to know the movie actors <br /> Get to know the movie actors.
              </h4>
            </div>
            <div className="col-12  servicesTow-relative servicesTow-memberGreen">
              <div className="position-absolute rectangle-1 ImgT"></div>
              <div className="position-absolute rectangle-2 ImgL"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="row">
          <div className="col-md-8 col-12 servicesTow-continer servicesTow-overflow" ref={card_3}>
            <div className="servicesTow-color-purpel servicesTow-cardHight rounded-4 servicesTow-horizontalCard-purpel  servicesTow-ImgEeffect ">
              <div className=" row ">
                <div className=" col-6 my-auto pt-md-5 pt-0 ">
                  <h2 className="h2 ps-4  ms-2">Movie earnings</h2>
                  <h4 className="h6 ps-4 mt-3 ms-2 ">
                    Movie earnings Movie earnings Movie earnings Movie earnings Movie earnings Movie earnings.
                  </h4>
                </div>
                <div className="ps-3 mt-3 col-6 ">
                  <div className="shadow-lg circle"></div>
                  <div className="trringel"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12 servicesTow-continer-orang-member servicesTow-ImgEeffect servicesTow-orangeMemberImgE" ref={card_4}>
            <div className=" bg-primary rounded-4 servicesTow-cardHight h-100 w-100  servicesTow-horizontalCard-orange servicesTow-horizontalCard-orange-member">
              <div className="">
                <div className="position-absolute pt-md-4 mt-md-3 pt-4 mt-5 z-2">
                  <h2 className="h2  px-3 ms-4 text servicesTow-mtPhone ">
                  Production details
                  </h2>
                  <h5 className="h6 px-3 mt-3 ms-4 ">
                  Production details Production details <br /> Production details Production details.
                  </h5>
                </div>
                <div className="Img">
                  <div className="tringel"></div>
                  <div className="circle"></div>
                  <div className="tringel2"></div>
                  <div className="circle2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicesTowMember;
