import { useState } from "react";
import { useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemesData, setAllMemesData] = useState([]);

  const apiUrl = "https://api.imgflip.com/get_memes";

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function getRandomMemeImage() {
    const url = allMemesData[getRandomNumber(0, allMemesData.length)].url;
    setMeme((prevMeme) => ({ ...prevMeme, randomImage: url }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  useEffect(() => {
    async function getMemes() {
      const res = await fetch(`${apiUrl}`);
      const data = await res.json();
      setAllMemesData(data.data.memes);
    }
    getMemes();
  }, []);

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Shut up"
          className="form__input"
          name="topText"
          id="topText"
          onChange={handleChange}
          value={meme.topText}
        ></input>
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
