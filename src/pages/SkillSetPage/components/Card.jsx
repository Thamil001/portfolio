import { circleImage } from "../../../assets/images"
import { useState, useEffect,useRef } from "react";
export default function Card({ picture ,name,stackUrl}) {
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry])=> {
                setAnimate(entry.isIntersecting)
            },
            {threshold:0.8}
        );
        observer.observe(ref.current);
        return ()=> observer.disconnect();
    }, []);
    return (
        <div className="text-center" onClick={() => window.open(stackUrl, "_blank")}>
            <div className="relative w-fit">
                <img src={circleImage} alt="circlePicture" className={`lg:w-30 w-25`} />
                <span className="absolute inset-0 flex items-center justify-center text-white text-xl tracking-widest 
                        text-center px-4 wrap-break-word" style={{ "fontFamily": "Poppins" }}><img ref={ref} src={picture} alt="circlePicture" className={`w-20 ${animate?"animate-slideUp":""}`} /></span>
            </div>
            <span className="text-white font-mono" style={{"fontFamily":"Poppins"}}>{name}</span>
        </div>

    )
}