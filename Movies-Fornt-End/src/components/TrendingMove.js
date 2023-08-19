import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardMovie from "./CardMovie";

gsap.registerPlugin(ScrollTrigger);
const TrendingMove = ({ data }) => {

    const title_1 = useRef();
    const title_2 = useRef();
    const blog_1 = useRef();

    useLayoutEffect(() => {
        // Initialize GSAP and ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animation for title
        const element_title_1 = title_1.current;
        gsap.set(element_title_1, { height: 0, opacity: 0 });
        const animation = gsap.to(element_title_1, {
            height: "100%",
            opacity: 1,
            duration: 0.5,
        });
        ScrollTrigger.create({
            trigger: element_title_1,
            start: "top 80%",
            animation: animation,
            toggleActions: "play none none none",
        });

        // Animation for blog card
        const blog = gsap.context((self) => {
            const boxes = self.selector(".box-item-2");
            boxes.forEach((box, index) => {
                const element_blog = box;
                gsap.set(element_blog, { y: 100, opacity: 0 });
                const animation = gsap.to(element_blog, {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5 + index * 0.25,
                });
                ScrollTrigger.create({
                    trigger: element_blog,
                    start: "top 80%",
                    animation: animation,
                    toggleActions: "play none none none",
                });
            });
        }, blog_1.current);
        return () => blog.revert();
    }, []);

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
    return (
        <>
            {/* Start */}
            <section className="section" id="service">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 pb-2 mb-4">
                            <div
                                className="section-title overflow-hidden text-center"
                                ref={title_1}
                            >
                                <h4 className="title mb-3">
                                    Important TrendingMove for <br /> your success
                                </h4>
                                <p
                                    className="text-mute p-des overflow-hidden mx-auto mb-0"
                                    ref={title_2}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Nullam nec urna. Nulla ullamcorper tortor nec ex semper.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="row position-relative z-index-1" ref={blog_1}>
                        {data &&
                            data.map((item, index) => (
                                <div className="col-12 col-md-6 col-lg-4">
                                    <CardMovie
                                        index={index}
                                        key={item.id}
                                        id={item.id}
                                        poster={item.poster_path}
                                        title={item.title || item.name}
                                        date={item.first_air_date || item.release_date}
                                        media_type={item.media_type}
                                        vote_average={item.vote_average}
                                        des={item.overview}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </section >
        </>
    );
};

export default TrendingMove;
