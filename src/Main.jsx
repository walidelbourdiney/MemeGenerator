import { useState, useEffect } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "On e does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [memeFetched, setMemeFetched] = useState([]);

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemeFetched(data.data.memes))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * memeFetched.length);
    const newMemeUrl = memeFetched[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: newMemeUrl,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
