import "./App.css";
import trollFaceIcon from "./images/troll-face.svg";
import generatedImagePlaceholder from "./images/generated-image-placeholder.svg";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar__title">
          <img
            src={trollFaceIcon}
            alt="title logo"
            className="navbar__title-image"
          ></img>
          <h1 className="navbar__title-text">Meme Generator</h1>
        </div>
      </nav>

      <main>
        <form>
          <div className="input-field">
            <div className="input-field__group">
              <label for="top-text">Top text</label>
              <input type="text" id="top-text" placeholder="Shut up"></input>
            </div>

            <div className="input-field__group">
              <label for="bottom-text">Bottom text</label>
              <input
                type="text"
                id="bottom-text"
                placeholder="And take my money"
              ></input>
            </div>
          </div>

          <input
            type="submit"
            value="Get a new meme image  🖼"
            className="input-field__submit"
          ></input>
        </form>

        <div className="generated-image-panel">
          <img
            src={generatedImagePlaceholder}
            alt="generated meme"
            className="generated-image-panel__image"
          ></img>
        </div>
      </main>
    </div>
  );
}

export default App;
