import './App.css';
import Navigation from "./components/Navigation/Navigation";
import BurgerMenu from "./components/Navigation/BurgerMenu/BurgerMenu";
import MenuIcon from '@material-ui/icons/Menu'
import CloseMenu from '@material-ui/icons/Close'
import SideMenu from "./components/Navigation/BurgerMenu/SideMenu/SideMenu";
import React from "react";

function App() {
  return (
    <div className="App">
        <SideMenu/>
        {/*<Navigation>*/}
        {/*    <BurgerMenu openIcon={<MenuIcon/>} closeIcon={<CloseMenu/>}/>*/}
        {/*</Navigation>*/}
    </div>
  );
}

export default App;
