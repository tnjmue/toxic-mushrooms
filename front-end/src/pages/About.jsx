export default function About({mushrooms}) {

     return(
        <div >
          <div className="welcome">
             <h1>The Toxic Shrooms Origin Story</h1>
             <h3>
               People who pick mushrooms recreationally usually focus on identifying those, they actually want to pick: the edible ones. However, it is just as important, if not more, to be able to correctly identify the poisonous ones.
             </h3>
          </div>

             <div className="about-text">
               <section>
                    I got the idea because my mother is an passionate mushroom picker and she told me she’d like an app where she could make her own personal collection of mushrooms she can identify and be able to store her knowledge + the photos she took somewhere that’s customizable. To make her own digital, portable, expandable classification book, so to speak. But I am not currently at a skill level where I could have made something like that, so I thought I’d make a database-type website instead.
               </section>

               <section>
                    I originally wanted to make my own API with her together based on her knowledge, but the time given for this project didn’t allow that. I found out someone had already made an API of all the known toxic mushrooms, so I copied the data from there and expanded it a little.
               </section>

               <section className="about-links">
                    <a href="https://toxicshrooms.vercel.app/api/mushrooms"> It can be found here. </a>
                    <a href="https://github.com/ruidovacio/toxic-shroom-api">And this is the github repo of the original API. </a>
               </section>
              
               <section>
                    <p>
                         While working on the project, I found out that I really enjoy working with (scientific) data and I would like to continue explanding the API, as well as expand on my original idea with the following features:
                    </p>
                    <ul>
                         <li>User profiles</li>
                         <li>Users can favorite the mushrooms they want to study</li>
                         <li>Users can upload their own images and pin them to the respective existing mushroom for everyone to see</li>
                         <li>Users can discuss the mushrooms in a comment section under each entry</li>
                         <li>Automatically generated quizzes that help users study individual characteristics of mushrooms playfully</li>
                    </ul>
               </section>
             </div>

        </div>
        )
           
            }
        