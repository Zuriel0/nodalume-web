import { useEffect, useRef } from "react";

export default function RecordedDemo({
  asset,
  label,
  descriptionId,
  paused,
  onFailure,
}) {
  const player = useRef(null);
  useEffect(() => {
    const video = player.current;
    const visibility = () => {
      if (document.hidden) video.pause();
    };
    const exclusive = () => {
      document.querySelectorAll("video.product-video").forEach((other) => {
        if (other !== video) other.pause();
      });
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (!video.poster) video.poster = asset.poster;
      } else video.pause();
    });
    observer.observe(video);
    document.addEventListener("visibilitychange", visibility);
    video.addEventListener("play", exclusive);
    return () => {
      video.pause();
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
      video.removeEventListener("play", exclusive);
    };
  }, [asset.poster]);
  useEffect(() => {
    if (paused) player.current?.pause();
  }, [paused]);
  return (
    <video
      ref={player}
      className="product-video"
      src={asset.src}
      width={asset.width}
      height={asset.height}
      controls
      playsInline
      preload="none"
      aria-label={label}
      aria-describedby={descriptionId}
      onError={onFailure}
    />
  );
}
