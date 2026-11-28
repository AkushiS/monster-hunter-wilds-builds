import { useEffect, useState } from "react";

const videos = [
  "EWvjrwfYztQ",
  "heSRpk4mHhc",
  "Y8FOt75mbng",
  "lg4PKvNNzhs",
  "GVBVzD4rQ0k",
  "FQoa254KrUw",
  "7IjsVOHAu3M",
  "koLaCDXgRpc",
  "xo9ARLlma2A",
  "FkvR6YEmg-w",
  "hDCkcfSeW1Y",
  "KcIAo8wMaqM",
  "xOHl2ghGRLc",
  "tSVkaP2Kjh0",
  "8rDtL7XuvxQ",
  "J2JtgrGpBWE",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isPlaying, setIsPlaying] = useState(false);

  const [loadedVideo, setLoadedVideo] = useState(null);

  const nextVideo = () => {
    setLoadedVideo(null);
    setIsPlaying(false);

    setCurrentIndex((previousIndex) => (previousIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setLoadedVideo(null);
    setIsPlaying(false);

    setCurrentIndex(
      (previousIndex) => (previousIndex - 1 + videos.length) % videos.length,
    );
  };

  useEffect(() => {
    if (isPlaying) {
      return;
    }

    const autoSlide = setInterval(() => {
      setLoadedVideo(null);

      setCurrentIndex((previousIndex) => (previousIndex + 1) % videos.length);
    }, 5000);

    return () => {
      clearInterval(autoSlide);
    };
  }, [isPlaying, currentIndex]);

  useEffect(() => {
    const handleYouTubeMessage = (event) => {
      if (
        event.origin !== "https://www.youtube.com" &&
        event.origin !== "https://www.youtube-nocookie.com"
      ) {
        return;
      }

      let data;

      try {
        data =
          typeof event.data === "string" ? JSON.parse(event.data) : event.data;
      } catch {
        return;
      }

      if (data?.event !== "onStateChange") {
        return;
      }

      const activeIframe = document.querySelector(`.video-slide.active iframe`);

      if (event.source !== activeIframe?.contentWindow) {
        return;
      }

      if (data.info === 1) {
        setIsPlaying(true);
      } else if (data.info === 2 || data.info === 0) {
        setIsPlaying(false);
      }
    };

    window.addEventListener("message", handleYouTubeMessage);

    return () => {
      window.removeEventListener("message", handleYouTubeMessage);
    };
  }, []);

  useEffect(() => {
    const iframes = document.querySelectorAll(".video-slide iframe");

    const subscribe = (iframe) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "listening",
          id: iframe.dataset.videoId,
          channel: "widget",
        }),
        "https://www.youtube.com",
      );

      iframe.contentWindow?.postMessage(
        JSON.stringify({
          event: "command",
          func: "addEventListener",
          args: ["onStateChange"],
        }),
        "https://www.youtube.com",
      );
    };

    const listeners = [];

    iframes.forEach((iframe) => {
      const handleLoad = () => subscribe(iframe);

      iframe.addEventListener("load", handleLoad);

      listeners.push({ iframe, handleLoad });

      subscribe(iframe);
    });

    return () => {
      listeners.forEach(({ iframe, handleLoad }) => {
        iframe.removeEventListener("load", handleLoad);
      });
    };
  }, [loadedVideo]);

  return (
    <div className="video-carousel">
      <button
        className="video-button video-button--prev"
        aria-label="Vidéo précédente"
        type="button"
        onClick={prevVideo}
      >
        ❮
      </button>

      <div className="video-track">
        {videos.map((video, index) => {
          const totalVideos = videos.length;

          let position = index - currentIndex;

          if (position > totalVideos / 2) {
            position -= totalVideos;
          }

          if (position < -totalVideos / 2) {
            position += totalVideos;
          }

          return (
            <div
              key={video}
              className={`video-slide ${
                position === 0
                  ? "active"
                  : position === -1
                    ? "previous"
                    : position === 1
                      ? "next"
                      : position < -1
                        ? "hidden-left"
                        : "hidden-right"
              }`}
            >
              {loadedVideo === video && position === 0 ? (
                <iframe
                  data-video-id={video}
                  src={`https://www.youtube.com/embed/${video}?autoplay=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`}
                  title={`Vidéo Monster Hunter Wilds ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="video-thumbnail"
                  tabIndex={position === 0 ? 0 : -1}
                  aria-label={`Lire la vidéo ${index + 1}`}
                  onClick={() => {
                    if (position === 0) {
                      setLoadedVideo(video);
                      setIsPlaying(true);
                    }
                  }}
                >
                  <img
                    src={`https://i.ytimg.com/vi/${video}/hqdefault.jpg`}
                    alt={`Vidéo Monster Hunter Wilds ${index + 1}`}
                  />

                  <span className="video-play"></span>
                </button>
              )}

              {position !== 0 && Math.abs(position) === 1 && (
                <button
                  type="button"
                  className="video-overlay"
                  aria-label={`Sélectionner la vidéo ${index + 1}`}
                  onClick={() => {
                    setLoadedVideo(null);
                    setIsPlaying(false);
                    setCurrentIndex(index);
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      <button
        className="video-button video-button--next"
        aria-label="Vidéo suivante"
        type="button"
        onClick={nextVideo}
      >
        ❯
      </button>
    </div>
  );
}

export default Carousel;
