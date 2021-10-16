import {useState} from 'react'
import classes from './BurgerMenu.module.css'
import SideMenu from "./SideMenu/SideMenu";

const BurgerMenu = props => {
    const [isOpen, setIsOpen] = useState(false)

    const burgerMenuToggle = (props) => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
    return (
        <div className={classes.menu}>
            <a href="#" onClick={burgerMenuToggle}>{props.openIcon}</a>
            {isOpen && (<SideMenu/>)}
        </div>
    )
}

export default BurgerMenu
