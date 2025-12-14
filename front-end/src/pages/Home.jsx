import pilz from "../assets/gelblicher-knollenblaetterpilz-cropped.png"

export default function Home() {

    return(
        <>
        <div className="welcome">
            <h1>Welcome!</h1>
            <div>
            <h3 > This is a passion project aimed at helping mushroom enthusiasts to not die.</h3> 
        <div>
            The goal of this site is to help you familiarize yourself with all of the mushrooms you should definitely leave in the woods.
        </div>
        <div>
            The site is very much still under construction – in the future, learning tools such a such as quizzes will be added, as well as the ability to make an account and comment on as well as upload your own photos of the respective toxic shrooms.
        </div>
            </div>
        </div>

        <div className="mushroom-div">
            <img src={pilz} alt="" />
            <div className="mushroom-poisoning">
                <h2 style={{color: "#aa8303ff"}}>Mushroom poisoning</h2>
                <h5><i>From Wikipedia, the free encyclopedia</i></h5>
                <div>
                    <b>" Mushroom poisoning</b> is poisoning resulting from the ingestion of mushrooms that contain toxic substances. Symptoms can vary from slight gastrointestinal discomfort to death in about 10 days. Mushroom toxins are secondary metabolites produced by the fungus.
                </div>
                <div>
                    Mushroom poisoning is usually the result of ingestion of wild mushrooms after misidentification of a toxic mushroom as an edible species. The most common reason for this misidentification is a close resemblance in terms of color and general morphology of the toxic mushrooms species with edible species. To prevent mushroom poisoning, mushroom gatherers familiarize themselves with the mushrooms they intend to collect, as well as with any similar-looking toxic species. The safety of eating wild mushrooms may depend on methods of preparation for cooking. Some toxins, such as amatoxins, are thermostable and mushrooms containing such toxins will not be rendered safe to eat by cooking.<b>"</b>
                </div>
            </div>
        </div>

       
        </>
    )
}