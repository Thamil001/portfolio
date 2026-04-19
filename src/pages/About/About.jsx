import { astronet } from "../../assets/images"
import { useState, useEffect, useRef } from "react";
export default function About() {
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
        <div className="bg-cover min-h-screen bg-center overflow-hidden">
            <div ref={ref} className={`flex flex-col items-center lg:pt-16 pt-4 ${animate?"animate-float":""}`}>
                <img ref={ref} src={astronet} alt="astronet" className={`w-26 lg:w-40 `}/>
            </div>
             <div className="flex flex-col items-center">
                <span className="text-white text-4xl font-bold" style={{"fontFamily":"Inter"}}>About Me?</span> 
             </div>
            
            <div ref={ref} className={`flex flex-col justify-center items-center flex-wrap p-2 ${animate?"lg:animate-slideRightToLeft":""}`}>    
                <div className={`lg:w-[50%] text-justify p-2 bg-white/5 backdrop-blur-sm border border-white/8 rounded-2xl ${animate?"animate-slideUp":""}`}> 
                    <span className="text-yellow-500 font-bold text-xl" style={{"fontFamily":"Inter"}}>Hello, I'm thamilthennarasu Java Full Stack Developer</span>
                    <span className="text-white indent-8 block p-1" style={{ "fontFamily": "Inter" }}>
                        {
                            "Software Developer passionate about crafting clean, scalable, and interactive web applications. Experienced in React, JavaScript, HTML, CSS, and modern UI frameworks.I focus on writing maintainable code, building reusable components, and delivering smooth user experiences. I enjoy solving real-world problems and continuously learning new technologies to improve development efficiency."
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}