import { useEffect, useRef } from "react";

interface Props {
  webm: string;
  mp4: string;
  poster: string;
}

const SitePreviewVideo: React.FC<Props> = ({
  webm,
  mp4,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadSources(video, webm, mp4);
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0;
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [webm, mp4]);

  const handleMouseEnter = () => {
    const video = videoRef.current;
    if (!video) return;

    loadSources(video, webm, mp4);
    video.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  };

  return (
    <video
      ref={videoRef}
      className="site-preview"
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default SitePreviewVideo;

function loadSources(
  video: HTMLVideoElement,
  webm: string,
  mp4: string
) {
  if (video.dataset.loaded) return;

  const webmSource = document.createElement("source");
  webmSource.src = webm;
  webmSource.type = "video/webm";

  const mp4Source = document.createElement("source");
  mp4Source.src = mp4;
  mp4Source.type = "video/mp4";

  video.append(webmSource, mp4Source);
  video.dataset.loaded = "true";
}
