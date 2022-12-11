import Display from "./Display";

function App() {
  return (
    <div className="container">
      <h1>Crossword Helper</h1>
      <h2>Enter letters to find anagrams.</h2>
      <h2>Or enter an incomplete word (use '?' for unknown letters).</h2>
      <Display />
    </div>
  );
}

export default App;
