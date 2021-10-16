import classes from './Navigation.module.css'

const Navigation = props => {
    return (
        <nav className={classes.nav}>
            {props.children}
        </nav>
    )
}

export default Navigation
