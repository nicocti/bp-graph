import "./App.scss"
import { DisplayGraph } from "./components/Graph"
import NavBar from "./components/NavBar"
import SideMenu from "./components/SideMenu"

function App() {
    return (
        <div className='bp4-dark'>
            <header className='app-header'>
                <NavBar />
            </header>
            <div className='app-container'>
                <SideMenu />
                <div className='app-content'>
                    <DisplayGraph></DisplayGraph>
                </div>
            </div>
        </div>
    )
}

export default App
