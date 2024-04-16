import React from "react";
import "./Form.css";

function Form({ meme, setMeme, getMemeImage }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div className="form">
      <h2>Make your Meme</h2>
      <form action="">
        <div className="input-wrapper" aria-label="Top and Bottom Text">
          <input
            type="text"
            placeholder="Top Text"
            value={meme.topText}
            onChange={handleChange}
            name="topText"
          />
          <input
            type="text"
            placeholder="Bottom Text"
            value={meme.bottomText}
            name="bottomText"
            onChange={handleChange}
          />
        </div>
      </form>

      <div className="img-wrapper">
        <p className="top-text">{meme.topText}</p>
        <img src={meme.randomImage} alt="" />
        <p className="bottom-text">{meme.bottomText}</p>
      </div>

      <button onClick={getMemeImage}>Get a new meme image</button>
    </div>
  );
}

export default Form;
