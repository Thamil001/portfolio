import bg from "./Pictures/homeBackground.jpg"
import menu from "./Pictures/menuIconpng.png"
import close from "./Pictures/closeIcon.png"
import SkillSetPage from "../SkillSetPage/SkillSetPage";
import ContactPage from "../Contacts/ContactPage";
import MyProjectsPage from "../MyProjectsPage/MyProjectsPage";
import About from "../About/About"
import NavList from "./components/NavList"
import { useState, useRef, useEffect } from "react"
import Logo from "../../assets/animation/logo"
export default function HomePage() {
    const ref = useRef(null);
    const videoRef = useRef();
    const [animate, setAnimate] = useState(false);
    const [logoAnimation, setLogoAnimation] = useState(true);
    const handleClick = () => {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        setLogoAnimation(false);

        setTimeout(() => {
            setLogoAnimation(true);
        }, 2000);
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setAnimate(entry.isIntersecting)
            },
            { threshold: 0.6 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const [open, setOpen] = useState(false)
    const menuBar = () => {
        setOpen(prev => !prev)
    }
    const [active, setActive] = useState("home")
    const navList = [{ "name": "Home", "destination": "home" }, { "name": "Skill Set", "destination": "skillSet" }, { "name": "Projects", "destination": "projects" }, { "name": "Contacts", "destination": "contacts" }, { "name": "About", "destination": "about" }]
    return (
        <div className="overflow-y-scroll scrollbar-hide bg-cover bg-center min-h-screen scroll-smooth px-0.5" style={{ background: `url(${bg})` }}>
            <div onClick={handleClick} className={`cursor-pointer fixed left-1 top-1 z-4 ${logoAnimation ? "animate-ping-once" : ""}`}>
                <Logo ref={videoRef} />
            </div>
            <div ref={ref} className={`fixed top-4 right-2 z-2 lg:hidden animate-spin [animation-iteration-count:1]`}>
                {
                    !open ? <img src={menu} alt="menu" className="w-6 h-6" onClick={menuBar} /> : <img src={close} alt="close" className="w-5 h-5 animate-spin [animation-iteration-count:0.5]" onClick={menuBar} />
                }
            </div>
            <div className="hidden lg:flex flex-row z-3 fixed top-0 w-full justify-end items-center  p-6 text-white">
                <ul className="flex gap-6 font-medium" style={{ "fontFamily": "Poppins" }}>
                    {
                        navList.map((list, index) => {
                            return (
                                <NavList key={index} onClick={menuBar} name={list.name} destination={list.destination} active={active} setActive={setActive} />
                            )
                        })
                    }
                </ul>
            </div>
            <div className={`flex flex-row justify-center fixed z-1 top-0 right-0 h-full w-12/12 bg-black shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} lg:hidden`}>
                <ul className="p-12 space-y-6 text-white " style={{ "fontFamily": "Poppins" }}>
                    {
                        navList.map((list, index) => {
                            return (
                                <NavList key={index} onClick={menuBar} name={list.name} destination={list.destination} active={active} setActive={setActive} />
                            )
                        })
                    }
                </ul>
            </div>
            <div id="home" ref={ref} className={`flex flex-col h-screen justify-center items-center gap-2 ${animate ? "animate-slideUp [animation-delay:0.2s]" : ""}`}>
                <span className="inline-block text-white font-bold text-4xl" style={{ "fontFamily": "Inter" }}>Who Am I?</span>
                <span className="text-white font-normal text-2xl text-center" style={{ "fontFamily": "Poppins" }}>Hi, I'm <span className="text-yellow-400">Thamilthennarasu </span>Full Stack Developer.</span>
            </div>

            <div id="skillSet">
                <SkillSetPage />
            </div>


            <div id="projects">
                <MyProjectsPage />
            </div>

            <div id="contacts">
                <ContactPage />
            </div>

            <div id="about">
                <About />
            </div>

        </div>
    )
}