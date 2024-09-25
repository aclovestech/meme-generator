import trollFaceIcon from "../images/troll-face.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        src={trollFaceIcon}
        alt="header logo"
        className="header__image"
      ></img>
      <h2 className="header__title">Meme Generator</h2>
    </header>
  );
}
