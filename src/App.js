import './App.css';
import Navigation from "./components/Navigation/Navigation";
import BurgerMenu from "./components/Navigation/BurgerMenu/BurgerMenu";
import SideMenu from "./components/Navigation/SideMenu/SideMenu";
import React, {useState} from "react";


function App() {
    const [isOpen, setIsOpen] = useState(false)

    const burgerMenuToggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className="App">
        <Navigation>
            <BurgerMenu isOpen={isOpen} open={burgerMenuToggle}/>
            <SideMenu close={burgerMenuToggle} isOpen={isOpen}/>
        </Navigation>
    </div>
  );
}

export default App;
