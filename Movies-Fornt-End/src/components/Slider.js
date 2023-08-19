import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { img_1280, unavailable } from "../config/config";

export const Slider = ({ data }) => {
    const dataSlider = data;

    useEffect(() => {
        setTimeout(() => {

            function selectAll(selector, context) {
                var context = context || document;
                var elements = context.querySelectorAll(selector);
                return Array.prototype.slice.call(elements);
            }

            function _slidSliderInit(slider, options) {
                var prefix = ".slid-";
                var slidesContainer = slider.querySelector(prefix + "slider_slides");
                var slides = selectAll(prefix + "slide", slider);
                var controls = selectAll(prefix + "nav_control", slider);
                var controlsBgs = selectAll(prefix + "nav_bg", slider);
                var progressAS = selectAll(prefix + "nav_control-progress", slider);
                var numOfSlides = slides.length;
                var curSlide = 1;
                var sliding = false;
                var slidingAT =
                    +parseFloat(getComputedStyle(slidesContainer)["transition-duration"]) *
                    1000;
                var slidingDelay =
                    +parseFloat(getComputedStyle(slidesContainer)["transition-delay"]) *
                    1000;
                var autoSlidingActive = false;
                var autoSlidingTO;
                var autoSlidingDelay = 5000; // default autosliding delay value
                var autoSlidingBlocked = false;
                var activeSlide;
                var activeControlsBg;
                var prevControl;

                function setIDs() {
                    slides.forEach(function (slide, index) {
                        slide.classList.add("slid-slide-" + (index + 1));
                    });
                    controls.forEach(function (control, index) {
                        control.setAttribute("data-slide", index + 1);
                        control.classList.add("slid-nav_control-" + (index + 1));
                    });
                    controlsBgs.forEach(function (bg, index) {
                        bg.classList.add("slid-nav_bg-" + (index + 1));
                    });
                }

                setIDs();

                function afterSlidingHandler() {
                    slider
                        ?.querySelector(".m-previous-slide")
                        ?.classList.remove("m-active-slide", "m-previous-slide");
                    slider
                        ?.querySelector(".m-previous-nav-bg")
                        ?.classList.remove("m-active-nav-bg", "m-previous-nav-bg");
                    activeSlide?.classList.remove("m-before-sliding");
                    activeControlsBg?.classList.remove("m-nav-bg-before");
                    prevControl?.classList.remove("m-prev-control");
                    prevControl?.classList.add("m-reset-progress");
                    prevControl?.classList.remove("m-reset-progress");
                    sliding = false;
                    if (autoSlidingActive && !autoSlidingBlocked) {
                        setAutoslidingTO();
                    }
                }

                function performSliding(slideID) {
                    if (sliding) return;
                    sliding = true;
                    window.clearTimeout(autoSlidingTO);
                    curSlide = slideID;
                    prevControl = slider.querySelector(".m-active-control");
                    prevControl?.classList.remove("m-active-control");
                    prevControl?.classList.add("m-prev-control");
                    slider
                        ?.querySelector(prefix + "nav_control-" + slideID)
                        ?.classList.add("m-active-control");
                    activeSlide = slider.querySelector(prefix + "slide-" + slideID);
                    activeControlsBg = slider.querySelector(prefix + "nav_bg-" + slideID);
                    slider
                        ?.querySelector(".m-active-slide")
                        ?.classList.add("m-previous-slide");
                    slider
                        ?.querySelector(".m-active-nav-bg")
                        ?.classList.add("m-previous-nav-bg");
                    activeSlide?.classList?.add("m-before-sliding");
                    activeControlsBg?.classList?.add("m-nav-bg-before");
                    var layoutTrigger = activeSlide?.offsetTop;

                    activeSlide?.classList.add("m-active-slide");
                    activeControlsBg?.classList.add("m-active-nav-bg");

                    setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
                }

                function controlClickHandler() {
                    if (sliding) return;
                    if (this.classList.contains("m-active-control")) return;
                    if (options.blockASafterClick) {
                        autoSlidingBlocked = true;
                        slider.classList.add("m-autosliding-blocked");
                    }

                    var slideID = +this.getAttribute("data-slide");

                    performSliding(slideID);
                }

                controls.forEach(function (control) {
                    control.addEventListener("click", controlClickHandler);
                });

                function setAutoslidingTO() {
                    window.clearTimeout(autoSlidingTO);
                    var delay = +options.autoSlidingDelay || autoSlidingDelay;
                    curSlide++;
                    if (curSlide > numOfSlides) curSlide = 1;

                    autoSlidingTO = setTimeout(function () {
                        performSliding(curSlide);
                    }, delay);
                }

                if (+options.autoSlidingDelay > 0) {
                    autoSlidingActive = true;
                    setAutoslidingTO();

                    slider.classList.add("m-with-autosliding");
                    var triggerLayout = slider.offsetTop;

                    var delay = +options.autoSlidingDelay || autoSlidingDelay;
                    delay += slidingDelay + slidingAT;

                    progressAS.forEach(function (progress) {
                        progress.style.transition = "transform " + delay / 1000 + "s";
                    });
                }

                slider?.querySelector(".slid-nav_control:first-child")
                    ?.classList.add("m-active-control");
            }

            function slidSlider(sliderSelector, options) {
                var sliders = document.querySelectorAll(sliderSelector);

                sliders.forEach(function (slider) {
                    _slidSliderInit(slider, options);
                });
            }

            slidSlider(".example-slider", { autoSlidingDelay: 2500 });

            var demoCont = document.querySelector(".demo-cont");

            Array.prototype.slice
                .call(document.querySelectorAll(".slid-slide_action-btn"))
                .forEach(function (btn) {
                    btn.addEventListener("click", function () {
                        demoCont.classList.toggle("credits-active");
                    });
                });
        }, 2000);

    }, []);

    return (
        <section className="d-table w-100" id="home">
            <div
                className="demo-cont"
            >
                <div className="slid-slider example-slider">
                    <div className="slid-slider_slides">
                        {dataSlider.map((slide, index) => (
                            <div
                                key={index}
                                className={`slid-slide ${index === 0 ? " m-active-slide" : ""}`}
                                style={{ backgroundImage: `url(${img_1280 + slide?.backdrop_path})` }}
                            >
                                <div className="slid-slide_inner container">
                                    <div className="slid-slide_mask">
                                        <div className="slid-slide_mask-inner"></div>
                                    </div>
                                    <div className="slid-slide_content">
                                        <h5 className="slid-slide_heading">
                                            <div className="slid-slide_heading-line h5 p-head">
                                                <span>Best articles</span>
                                            </div>
                                        </h5>
                                        <h2 className="slid-slide_heading">
                                            <div className="slid-slide_heading-line p-title h1">
                                                <span>{slide.original_title}</span>
                                            </div>
                                        </h2>
                                        <p className="slid-slide_des mb-4">
                                            <div className="slid-slide_des-line p-des">
                                                <span>{slide.overview.split(0, 40)}</span>
                                            </div>
                                        </p>
                                        <Link
                                            to={`/blog-details/?id=${slide.name}&slider=true`}
                                            className="slid-slide_heading-btn"
                                        >
                                            Read More
                                            <span className="ml-1">
                                                <svg
                                                    className="ml-1"
                                                    fill="#ffffff"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 -960 960 960"
                                                >
                                                    <path d="m561-242-43-42 168-168H160v-60h526L517-681l43-42 241 241-240 240Z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav className="slid-nav container">
                        <div className="fac-nav-scroll">
                        </div>
                        <div className="fac-nav-btns">
                            <div className="slid-nav_bgs">
                                {dataSlider.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`slid-nav_bg${index === 0 ? " m-active-nav-bg" : ""
                                            }`}
                                    ></div>
                                ))}
                            </div>
                            <div className="slid-nav_controls">
                                {dataSlider.map((slide, index) => (
                                    <button
                                        key={index}
                                        className={`slid-nav_control${index === 0 ? " m-active-control" : ""
                                            }`}
                                    >
                                        <span className="slid-nav_control-progress"></span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Slider;
