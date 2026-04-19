import Card from "./components/Card"
import {contactsPicData} from "../../data/data"
import { useState, useEffect,useRef } from "react";
export default function ContactPage() {
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
        <div className="bg-cover bg-center min-h-screen">
            <div className="flex flex-col pt-12 lg:pt-42 items-center gap-2">
                <span className="text-white text-4xl text-center font-bold" style={{ "fontFamily": "Inter" }}>How To Contact Me?</span>
            </div>
            <div ref={ref} className={`flex flex-row flex-wrap justify-center items-center mt-4 gap-2 ${animate?"lg:animate-slideLeftToRight":""}`}>
                {
                    contactsPicData.map((data,index)=>{
                        return(
                            <Card key={index} picture={data.picture} picName={data.name} url={data.url}/>
                        )
                    })
                }
            </div>
        </div>
    )
}