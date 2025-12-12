import { useEffect, useState } from 'react';
import MushroomCard from '../components/MushroomCard'

export default function Directory({API}) {

    const [mushrooms, setMushrooms] = useState([])

    useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setMushrooms(data)
    })
  }, []);

    console.log(mushrooms)
    return(
        <>
        <div className="dir-parent">
            <section className="dir-cards">
             {mushrooms.map((shroom) => {
                    return (
                        <MushroomCard key={shroom.id} shroom={shroom}/>
                    )
                })}
            </section>
        </div>
        </>
    )
}