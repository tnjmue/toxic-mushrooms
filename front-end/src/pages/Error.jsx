import errShrooms from "../assets/pretty-shrooms.png";

export default function Error() {

    return(
        <div className="error">
        <h1 className="error-header">404 Page Not Found</h1>
        <img src={errShrooms} alt="" />
        </div>
    )
}