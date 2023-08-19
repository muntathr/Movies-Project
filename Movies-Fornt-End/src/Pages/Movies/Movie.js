import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo';
export const Movie = () => {

    // get param from URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const mediaType = searchParams.get('media_type');
    const id = searchParams.get('id');
    useEffect(() => {
        console.log(id);
        console.log(mediaType);
    }, [mediaType, id])

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

    return (
        <div>
            <MovieInfo media_type={mediaType} id={id} />
        </div>
    )
}
