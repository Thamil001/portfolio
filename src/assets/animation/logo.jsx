import { forwardRef, useRef, useImperativeHandle, useEffect } from "react";
import { animation } from "../../data/data.js";

const Logo = forwardRef((props, ref) => {
  const videoRef = useRef(null);
  const playedOnce = useRef(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      const video = videoRef.current;
      video.currentTime = 0;
      video.play();
    }
  }));

  // autoplay only first time
  useEffect(() => {
    const video = videoRef.current;

    if (!playedOnce.current) {
      video.currentTime = 0;
      video.play();
      playedOnce.current = true;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      src={animation.url}
      muted
      playsInline
      preload="auto"
      style={{ width: "60px", height: "60px" }}
    />
  );
});

export default Logo;