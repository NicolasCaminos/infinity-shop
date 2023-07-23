import "./css/App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer parrafo="Bienvenido" />
    </>
  );
}

export default App;
