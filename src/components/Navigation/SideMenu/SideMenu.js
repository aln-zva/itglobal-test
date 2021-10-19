import './SideMenu.scss'
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import SideMenuSubitem from "./SideMenuItem/SideMenuSubitem";
import {CSSTransition} from "react-transition-group";
import CloseMenu from '@material-ui/icons/Close'
import React, {useContext, useState} from 'react'
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import translations from '../../../translations/translations'
import LocalizedStrings from 'react-localization'
import LangContext from "../../LangContext/LangContext";

const SideMenu = props => {
    const [currentMenu, setCurrentMenu] = useState('Main')
    const [currentSubMenu, setCurrentSubMenu] = useState('Services')


    const language = useContext(LangContext)

    const submenus = new LocalizedStrings(translations)
    submenus.setLanguage(language.language)
    const [secondLevel, setSecondLevel] = useState(submenus.data[0].id)


    const currentMenuHandler = (title) => {
        setCurrentMenu(title)
        setCurrentSubMenu(title)
    }

    const subMenuHandler = (subtitle, secondLevelId) => {
        setCurrentSubMenu(subtitle)
        setCurrentMenu(subtitle)
        setSecondLevel(secondLevelId)
    }

    return (
        <div className={props.isOpen ? 'side-menu active' : 'side-menu'}>
            <header className="side-menu__header">
                <LanguageSwitcher changeMenu={() => currentMenuHandler('Main')}/>
                <div className="header-button" onClick={props.close}><button className="side-menu__close-button"><CloseMenu/></button></div>
            </header>
            <div className="side-menu__body">
                <CSSTransition
                    in={currentMenu === 'Main'}
                    timeout={500}
                    unmountOnExit
                    classNames="main-menu"
                >
                    <ul className="side-menu__items">
                        {submenus.data.map(item => item.title !== '' &&
                            <SideMenuItem item={item.title}
                                          changeMenu={() => currentMenuHandler(item.id)}
                                          className="side-menu__link"/>)}
                    </ul>
                </CSSTransition>

                {submenus.data.map(menuTitle => (
                        menuTitle.title !== 'null' && <CSSTransition
                            in={currentMenu === menuTitle.id}
                            timeout={500}
                            unmountOnExit
                            classNames="menu-secondary"
                    >
                            <ul className="side-menu__section">
                                <SideMenuItem isSectionTitle={true} className="side-menu__link"
                                              item={menuTitle.title}
                                              changeMenu={() => currentMenuHandler('Main')}/>
                                <div className="side-menu__items">
                                    {menuTitle.menuData.map(item => (
                                       item.subtitle !== '' && <SideMenuItem isAbout={menuTitle.id === 'about'} isSectionTitle={false}
                                                      className="side-menu__section-item" item={item.subtitle}
                                                      changeMenu={() => subMenuHandler(item.subtitle, menuTitle.id)}/>))}
                                </div>
                            </ul>
                        </CSSTransition>))}


                {submenus.data.find (function (item) {
                    return item.id === secondLevel
                }).menuData.map (subitem => (
                            subitem.subtitle !== '' && <CSSTransition
                                in={currentSubMenu === subitem.subtitle && currentMenu === subitem.subtitle}
                                timeout={500}
                                classNames="submenu"
                                unmountOnExit>
                                <div className="side-menu__subitems-block">
                                    <SideMenuItem isSectionTitle={true} className="side-menu__link" item={subitem.subtitle} changeMenu={() => currentMenuHandler(secondLevel)}/>
                                    <div className="side-menu__subitem_separator"/>
                                    <ul className="side-menu__subitems">
                                            {subitem.info.map (s => ( <SideMenuSubitem name={s.name} info={s.info} />))}
                                    </ul>
                                    </div>
                            </CSSTransition>
                        ))}
            </div>
            {currentMenu === 'Main' && (
                <div className="side-menu__footer">
                    <div className="side-menu__footer-items">
                        <a target="_blank" href="https://itglobal.com/ru-kz/company/contacts/" className="side-menu__footer-link">{submenus.footer.contacts}</a>
                        <span className="side-menu__footer-link">{submenus.footer.search}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SideMenu
