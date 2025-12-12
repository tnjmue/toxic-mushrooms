import { useParams } from "react-router-dom" 
import { useState, useEffect } from "react";

export default function MushroomDetails({API, handleDelete, handleEdit}) {

   const { mushroomId } = useParams()
   const [mushroom, setMushroom] =useState([])

   // fetch the right endpoint
   useEffect(() => {
       fetch(`${API}/${mushroomId}`)
       .then(res => res.json())
       .then(data => {
         //console.log(data)
         setMushroom(data)
       })
     }, [API, mushroomId]);


    return(
        <>
        <h2 className="">{mushroom.name}</h2>
        <h4><i>{mushroom.commonname}</i></h4>

        <div className="img-stats">
        { mushroom.img ? <img src={mushroom.img} alt="" /> : '' }

        <div className="stats">
          <div><b style={{color: "#aa8303ff"}}>genus:</b> {mushroom.genus}</div>
        <div><b style={{color: "#aa8303ff"}}>distribution:</b> {mushroom.distribution?.length > 0 ? mushroom.distribution.join(", ") : "Unknown"}</div>
        <div><b style={{color: "#aa8303ff"}}>agent:</b> {mushroom.agent}</div>
        <span> {mushroom.type === "poisonous" ? "⚠︎" : mushroom.type === "deadly" ? "☠️︎" : ""}{" "} {mushroom.type}</span>
        </div>
        </div>
    

        <article className="details-text">
        <h3 style={{color: "#aa8303ff"}}>introduction:</h3>
        <hr />
        <div className="details-intro">
        {mushroom.introduction}
        </div>
        <h3 style={{color: "#aa8303ff"}}>description:</h3>
        <hr />
        <div className="details-desc">
       {mushroom.description}
       </div>
       </article>

        <div className="buttons">
          <button className="buttons-symbol" onClick={ () => { handleDelete(mushroomId) }}>🗑</button>
          <button className="buttons-symbol" onClick={ () => { handleEdit(mushroomId) }}>🖋</button>
        </div>
        </>
    )
}