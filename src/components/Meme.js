import memesData from "../memesData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: memesData.data.memes[0].url,
  });

  const [allMemesData, setAllMemesData] = useState(memesData);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomMemeImage() {
    const memes = allMemesData.data.memes;
    const url = memes[getRandomNumber(0, memes.length)].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        {/* <label htmlFor="topText" className="form__label">
          Top text
        </label> */}
        <input
          type="text"
          placeholder="Shut up"
          className="form__input"
          name="topText"
          id="topText"
          onChange={handleChange}
          value={meme.topText}
        ></input>
        {/* <label htmlFor="bottomText" className="form__label">
          Bottom text
        </label> */}
        <input
          type="text"
          placeholder="And take my money"
          className="form__input"
          name="bottomText"
          id="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        ></input>
        <button onClick={getRandomMemeImage} className="form__button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="generated-meme">
        <img
          src={meme.randomImage}
          alt="generated meme"
          className="generated-meme__image"
        ></img>
        <h2 className="generated-meme__text top">{meme.topText}</h2>
        <h2 className="generated-meme__text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
