import { Link } from "react-scroll"
export default function NavList({ onClick, name, destination, active, setActive }) {
    return (
        <li className="cursor-pointer"><Link onClick={onClick} to={destination} smooth={true} duration={500} spy={true} className={active === destination ? "text-yellow-400" : "text-white"} onSetActive={() => setActive(destination)}>{name}</Link></li>
    )
}