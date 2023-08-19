import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {
  img_500,
  unavailable,
} from "../config/config";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function MovieInfo({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${'dae823b702b0ffabaa31a8c0bf3c6c95'}&language=en-US`
    );

    setContent(data);
    console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${'dae823b702b0ffabaa31a8c0bf3c6c95'}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, [media_type, id]);

  return (
    <section className="section container">
      {content && (
        <div className="move-info row">
          <div className=" col-12 col-md-4">
            <img
              src={
                content.poster_path
                  ? `${img_500}/${content.poster_path}`
                  : unavailable
              }
              alt={content.name || content.title}
              className="move-info__portrait"
            />
          </div>
          <div className="move-info__about col-12 col-md-8">
            <h2 className="slid-slide_heading">
              <div className="text-dark p-title h1">
                <span>{content.original_title}</span>
              </div>
            </h2>
            <p className="h6 mb-4">
              <div className="text-dark h6">
                <span>{content.overview}</span>
              </div>
            </p>
            {content.tagline && (
              <i className="tagline mb-4">{content.tagline}</i>
            )}
            <br />
            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              color="secondary"
              target="__blank"
              href={`https://www.youtube.com/watch?v=${video}`}
              className="mt-4"
            >
              Watch the Trailer
            </Button>
          </div>
          <div className="col-12">
            <Carousel id={id} media_type={media_type} />
          </div>
        </div>
      )}
    </section>
  );
}
