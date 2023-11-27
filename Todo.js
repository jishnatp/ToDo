import "./Style.css";
import { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";


let nextId = 0;

export default function Todo() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  const [desc, setDesc] = useState("");
  const [description, setDescription] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [prevAvatars, setPrevAvatars] = useState([]);
  

  const handleAdd = () => {
    if (name.trim() !== "") {
      const firstLetter = name.trim()[0].toUpperCase();
      setAvatar(firstLetter);
    }

    setArtists([...artists, { id: nextId++, name: name }]);

    setDescription([...description, { id: nextId++, desc: desc }]);

    setPrevAvatars([...prevAvatars, { id: nextId++, avatar: avatar }]);

    setName("");
    setDesc("");
  };

  const handleDelete = (id) => {
    setArtists(artists.filter((artist) => artist.id !== id));
    setDescription(description.filter((item) => item.id !== id));
    setPrevAvatars(prevAvatars.filter((item) => item.id !== id));
  };

  


  return (
    <div className="main">
      <h2 className="heading-one">My ToDo List</h2>
      <div className="section-one">
        <div className="div-title">
          <label htmlFor="" className="lab-title">
            Title
          </label>
          <input
            type="text"
            className="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="div-desc">
          <label htmlFor="" className="lab-title">
            Description
          </label>
          <textarea
            name=""
            id=""
            cols="25"
            rows="5"
            className="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <button className="add-btn" onClick={handleAdd}>
          ADD
        </button>
      </div>
      <div className="list-items">
        {artists.map((artist, index) => (
          <div key={artist.id} className="list-item3">
            {avatar && <div className="avatar">{avatar}</div>}
            <div>
            <div className="list-item">{artist.name}</div>
            <div className="list-item2">{description[index].desc}</div>
            </div>
            <div>
              <button
                className="btn-delete"
                onClick={() => {
                  handleDelete(artist.id);

                  setName("");
                  setDesc("");
                }}
              >
                <RiDeleteBin5Fill/>
              </button>
            </div>
            <div>
              <button className="btn-edit"><MdEditSquare /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}