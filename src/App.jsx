import "./css/App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import Navbar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer></ItemListContainer>
    </>
  );
}

export default App;
