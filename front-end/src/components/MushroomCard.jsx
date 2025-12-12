import { Link } from "react-router-dom"
import placeholderImg from "../assets/ai-shrooms-Photoroom.png"

export default function MushroomCard({shroom}) {
    return (
        <Link className="no-underline" to={`/directory/${shroom.id}`}>
        <div className="card">
        { shroom.img ? <img src={shroom.img} alt={shroom.name} /> : <img src={placeholderImg} /> }
        <div className=""><i>{shroom.name}</i></div>
        <div><b>{shroom.commonname}</b></div>
        </div>
        </Link>
    )
}