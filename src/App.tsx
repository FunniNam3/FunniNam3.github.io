import "./App.css";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Main from "./Main.tsx";

function App() {
  document.bgColor = "#FDF3E6";
  return (
    <div className="App">
      <Header />
      <div className="Main">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
