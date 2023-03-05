import Game from "../Game";
import Header from "../Header";
import GuessForm from "../GuessForm/GuessForm";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game />
        <GuessForm />
      </div>
    </div>
  );
}

export default App;
