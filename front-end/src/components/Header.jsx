import mushroomHeader from '../assets/mushroom-header.png'

export default function Header() {

    return (
        <>
        <div className="header">
            <img src={mushroomHeader} alt="mushroom" />
        <h1>The Toxic Shrooms Directory</h1>
        </div>
        </>
    )
}