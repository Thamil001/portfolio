import { ReactLogo, p1 } from "../../../assets/images"
import { useEffect,useRef,useState } from "react"
export default function Card({ projectTitle, techStacks, projectLogo, description, isOpenSource, url }) {
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
        <div ref={ref} className={`flex flex-col w-full sm:w-4/12 h-4/12 border-white/10 border-2 shadow-sm rounded-2xl p-4 m-2 cursor-pointer ${animate?"lg:animate-slideRightToLeft":""} ${animate?"animate-slideUp":""} `} onClick={() => window.location.href = url}>
            <div className="h-2/12 w-full flex flex-row justify-between">
                <span className="text-white font-bold flex items-center justify-between">
                    {projectTitle}
                </span>
                <div ref={ref} className={`flex flex-row gap-2 ${animate?"lg:animate-slideLeftToRight":""}`}>

                    {
                        techStacks.map((tech, index) => (
                            <span key={index}><img src={tech} alt="react" width={"20px"} /></span>
                        ))

                    }
                </div>
            </div>
            <div className="flex flex-row w-full h-full mt-1">
                <div className="flex flex-col w-5/12  items-center justify-center">
                    <span><img src={projectLogo} alt="Image" /></span>
                </div>
                <div className="flex flex-col w-7/12 flex-wrap justify-center">
                    <span className="text-white text-[12px] text-left text-base/5" style={{ "fontFamily": "Poppins" }}>
                        {<span>{isOpenSource ? <span className="bg-purple-600 px-1 rounded text-[12px] font-bold">Open-Source</span> : ""}{description}</span>}
                    </span>
                </div>
            </div>
        </div>
    )
}