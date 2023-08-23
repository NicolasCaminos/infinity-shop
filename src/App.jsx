import ItemListContainer from './components/ItemList/ItemListContainer'
import Navbar from './components/Navbar/NavBar'

function App() {

    return (
        <>
            <Navbar />
            <ItemListContainer defaultCategory={"MLA1652"} />
        </>
    )

}

export default App
