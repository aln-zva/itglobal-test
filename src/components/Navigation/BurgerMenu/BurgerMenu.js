import classes from './BurgerMenu.module.css'

const BurgerMenu = props => {

    return (
        <div className={classes.menu} onClick={props.open}>
            <div className={classes.burgerMenu}>
                <span/>
            </div>
        </div>
    )
}

export default BurgerMenu
