import {animation} from "../../data/data.js"

export default function Logo() {
  return (
    <video
      src={animation.url}
      autoPlay
      muted
      playsInline
      preload="auto"
      style={{ width: "60px", height: "60px" }}
    />
  );
}