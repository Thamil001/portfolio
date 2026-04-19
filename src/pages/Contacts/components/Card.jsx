import { useState, useEffect, useRef } from "react";
export default function Card({ picture, picName, url }) {
    const ref = useRef(null);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting)
            },
            { threshold: 0.8 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (

        <div onClick={() => window.open(url)}
            ref={ref} 
            className={`gap-1 bg-white/8 backdrop-blur-none border border-white/8 flex flex-col items-center rounded-tr-2xl rounded-bl-2xl m-4 p-4 cursor-pointer ${animate ? "animate-slideUp md:animate-none" : ""}`}>
            <img ref={ref} src={picture} alt={picName} className={`lg:w-20 w-16 ${animate ? "animate-slideLeftToRight" : ""}`} />
            <span className="text-white" style={{"fontFamily":"Poppins"}}>{picName}</span>
        </div>

    )
}