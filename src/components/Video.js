import React from "react";
import video from "../video.mp4";

function Video() {
  return (
    <video
      className="fixed z-[-1] w-full h-full object-cover"
      autoPlay
      muted
      loop
      id="video-background"
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Video;
