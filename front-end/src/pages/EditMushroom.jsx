import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditMushroom({ API }) {
  const { mushroomId } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: "",
    commonname: "",
    img: "",
    distribution: "",
    agent: "",
    type: "",
    introduction: "",
    description: ""
  });

  // Fetch existing mushroom data
  useEffect(() => {
    fetch(`${API}/${mushroomId}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
      })
      .catch(err => console.error("Failed to fetch mushroom:", err));
  }, [API, mushroomId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${API}/${mushroomId}`, formData);
      navigate(`/directory/${mushroomId}`);
    } catch (err) {
      console.error("Failed to update mushroom:", err);
    }
  };

  return (
    <div>
      <h2>Edit Mushroom</h2>
      <div className="AddMushroom">  
      <form onSubmit={handleSubmit}>
        <label>name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Scientific Name"
          required
        />

        <label>commonname:</label>
        <input
          type="text"
          name="commonname"
          value={formData.commonname}
          onChange={handleChange}
          placeholder="Common Name"
        />

        <label>image:</label>
        <input
          type="text"
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <label>distribution:</label>
        <input
          type="text"
          name="distribution"
          value={formData.distribution}
          onChange={handleChange}
          placeholder="Distribution"
        />

        <label>agent:</label>
        <input
          type="text"
          name="agent"
          value={formData.agent}
          onChange={handleChange}
          placeholder="Toxic Agent"
        />

        <label>type:</label>
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        >
          <option value="">Select Type</option>
          <option value="poisonous">Poisonous</option>
          <option value="deadly">Deadly</option>
          <option value="unsure">Unsure</option>
        </select>

        <label>introduction:</label>
        <textarea
          name="introduction"
          value={formData.introduction}
          onChange={handleChange}
          placeholder="Introduction"
        />

        <label>description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <div className="buttons">
        <button type="submit">Update Mushroom</button>
        <button type="button" onClick={() => navigate(`/directory/${mushroomId}`)}>
          Cancel
        </button>
        </div>
      </form>
    </div>
    </div>
  );
}