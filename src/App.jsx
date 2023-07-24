import "./css/App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import Navbar from "./components/Navbar/NavBar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Infinity" />
    </>
  );
}

export default App;
