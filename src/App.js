import './App.css';
import Navigation from "./components/Navigation/Navigation";
import BurgerMenu from "./components/Navigation/BurgerMenu/BurgerMenu";
import SideMenu from "./components/Navigation/SideMenu/SideMenu";
import React, {useRef, useState} from "react";
import useOutside from "./hooks/useOutside";


function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const burgerMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const menu = useRef()

    useOutside(menu, () => setIsMenuOpen(false))

    return (
    <div className="App">
        <Navigation>
            <div ref={menu}>
                <BurgerMenu open={burgerMenuToggle}/>
                <SideMenu close={burgerMenuToggle} isOpen={isMenuOpen}/>
            </div>
        </Navigation>
    </div>
  );
}

export default App;
