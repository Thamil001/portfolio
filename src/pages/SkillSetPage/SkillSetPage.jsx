import { ReactLogo,JsLogo,JavaLogo,Spring,MySql,Ts,TailwindCss,Git} from "../../assets/images"
import Cart from "./components/Card"
import { pictureData } from "../../data/data"
import { useState,useEffect,useRef } from "react";
export default function SkillSetPage() {
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
        <div className={`bg-cover bg-center min-h-screen cursor-pointer`}>
            <div className={`flex flex-col pt-12 lg:pt-42 items-center gap-2`}>
                <span className="text-white text-4xl text-center font-bold" style={{ "fontFamily": "Inter" }}>What Is My Skill Set?</span>
            </div>
            <span className="max-lg:hidden h-4"><br/></span>
            <div ref={ref} className={`flex flex-row flex-wrap items-center justify-center gap-6 mt-2 ${animate?"lg:animate-slideLeftToRight":""}`}>
                {
                    pictureData.map((pic, index) => {
                        return (
                            <Cart key={index} picture={pic.url} name={pic.name} stackUrl={pic.stackUrl}/>
                        )
                    })
                }
            </div>
        </div>
    )
}