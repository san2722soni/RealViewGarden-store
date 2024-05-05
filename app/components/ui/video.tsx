"use client"
import Image from 'next/image';
import React, { useRef } from 'react';

const VideoPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const thumbnailRef = useRef<HTMLImageElement>(null);
  const playButtonRef = useRef<HTMLButtonElement>(null);

  const playVideo = () => {
    const video = videoRef.current;
    const thumbnail = thumbnailRef.current;
    const playButton = playButtonRef.current;

    if (video && thumbnail && playButton) {
      if (video.paused) {
        video.play();
        thumbnail.style.display = 'none';
        playButton.style.display = 'none';
      } else {
        video.pause();
        video.currentTime = 0;
        thumbnail.style.display = 'block';
        playButton.style.display = 'flex';
      }
    }
  };

  return (
    <>
    <div className="lg:w-3/4 md:w-3/4 sm:w-full relative m-auto cursor-pointer" onClick={playVideo}>
      <video ref={videoRef} className="w-full rounded-md" controls>
        <source src="/adver2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Image
        ref={thumbnailRef}
        src="/video-thumbnail.jpg"
        alt="Video Thumbnail"
        className="w-full rounded-md"
        fill
      />
      <button
        ref={playButtonRef}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-green-100 rounded-full w-16 h-16 flex justify-center items-center"
      >
        &#9658;
      </button>
    </div>
    </>
  );
};

export default VideoPlayer;
