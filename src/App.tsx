import Header from "./components/Header/Header";
import SeminarList from "./components/SeminarsList/SeminarsList";

function App() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <h1>Seminars</h1>
        <SeminarList />
      </div>
    </>
  );
}

export default App;
