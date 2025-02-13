import funnyLogo from "../public/meme.png";

const Header = () => {
  return (
    <header className="header flex items-center h-[75px] bg-[linear-gradient(135deg,_#b5ead7_0%,_#c7f2e4_100%)] text-[#6b6b6b] p-[20px] [box-shadow:0_2px_10px_rgba(0,_0,_0,_0.1)]">
      <img
        src={funnyLogo}
        alt="Funny Logo"
        className="h-10 mr-[10px]
"
      />
      <h1>Meme Generator</h1>
    </header>
  );
};

export default Header;
