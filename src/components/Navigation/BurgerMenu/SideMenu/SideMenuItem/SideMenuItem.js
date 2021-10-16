import './SideMenuItem.css'

const SideMenuItem = props => {
    return (
        <li onClick={()=>props.changeMenu()} className={props.className}>
            <a href="#" className={props.isSectionTitle ? 'side-menu__item side-menu__section-link-title' : 'side-menu__item side-menu__section-link'}>
                {!props.isAbout && <div
                    className={props.isSectionTitle ? 'arrow side-menu__link-title-arrow' : 'arrow side-menu__link-arrow'}/>}
                 <span className="side-menu__item-name">{props.item}</span>
            </a>
        </li>
    )
}

export default SideMenuItem
