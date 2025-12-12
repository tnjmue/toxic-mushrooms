import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddMushroom({API}) {

    const [name, setName] = useState("")
    const [commonname, setCommonname] = useState("")
    const [genus, setGenus] = useState("")
    const [agent, setAgent] = useState("")
    const [distribution, setDistribution] = useState([])
    const [img, setImg] = useState("")
    const [type, setType] = useState("")
    const [introduction, setIntroduction] = useState("")
    const [description, setDescription] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMushroom = {
            name,
            commonname,
            genus,
            agent,
            distribution: distribution.split(",").map(d => d.trim()),
            img,
            type,
            introduction,
            description
        };

        try {
            const response = await axios.post(API, newMushroom);
            const createdMushroom = response.data;

            navigate(`/directory`);
            } catch (err) {
            console.error("Error creating mushroom:", err);
            }
    };

    return (
        <>
        <h1>Add New Mushroom</h1>
        <div className="AddMushroom">  
            <form onSubmit={handleSubmit}>
                <label>name:</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
               
                <label>commonname:</label>
                <input
                    type="text"
                    name="commonname"
                    value={commonname}
                    onChange={(e) => setCommonname(e.target.value)}
                />
        
                <label>genus:</label>
                <input
                    type="text"
                    name="genus"
                    value={genus}
                    onChange={(e) => setGenus(e.target.value)}
                />

                <label>agent:</label>
                <input
                    type="text"
                    name="agent"
                    value={agent}
                    onChange={(e) => setAgent(e.target.value)}
                />

                <label>distribution:</label>
                <input
                    type="text"
                    name="distribution"
                    value={distribution}
                    onChange={(e) => setDistribution(e.target.value)}
                    required
                />

                <label>image:</label>
                <input
                    type="text"
                    name="img"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />

                <label>type:</label>
                <select
                     name="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                >
                    <option value="">Select Type</option>
                    <option value="poisonous">Poisonous</option>
                    <option value="deadly">Deadly</option>
                    <option value="unsure">Unsure</option>
                </select>

                <label>introduction:</label>
                <textarea
                    type="text"
                    name="introduction"
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                />

                <label>description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="buttons">
                    <button type="submit">Add mushroom</button>
                    <button type="button" onClick={() => navigate(`/directory`)}>Cancel</button>
                </div>
            </form>
        </div>
        </>

  );

}