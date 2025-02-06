import funnyLogo from "../public/meme.png";

const Header = () => {
  return (
    <header className="header">
      <img src={funnyLogo} alt="Funny Logo" />
      <h1>Meme Generator</h1>
    </header>
  );
};

export default Header;
