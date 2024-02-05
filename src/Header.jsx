import reactImg from "./assets/react-core-concepts.png";
const Header = () => {
  const reactDescription = ["Core", "Crucial", "Fundementail"];
  function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const description = reactDescription[getRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
};
export default Header;
