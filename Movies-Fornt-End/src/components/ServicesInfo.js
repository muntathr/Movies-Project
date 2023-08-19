import React, { useLayoutEffect } from "react";

import ServicesTowMember from "./ServicesTowMember";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

const ServicesInfo = () => {

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


    return (
        <section className="section pt-0 container" id="service2">
            <div>
                <h1 className="h2 text-center col-12" ref={title_1}>
                General stats about movies
                </h1>
                <div className="row mt-3">
                    <div className="col-2"></div>
                    <p className="h6 text-mute text-center col-8" ref={title_2}>
                    General stats about movies General stats about movies General stats about movies General stats about movies
                    </p>
                </div>
            </div>
            <div className="mt-5"><ServicesTowMember /></div>
        </section>
    );
};

export default ServicesInfo;
