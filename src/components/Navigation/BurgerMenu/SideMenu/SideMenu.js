import './SideMenu.css'
import SideMenuItem from "./SideMenuItem/SideMenuItem";
import SideMenuSubitem from "./SideMenuItem/SideMenuSubitem";
import {CSSTransition} from "react-transition-group";
import CloseMenu from '@material-ui/icons/Close'
import React, {useContext, useState} from 'react'
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";
import translations from '../../../../store/translations'
import LocalizedStrings from 'react-localization'
import LangContext from "../../../LangContext/LangContext";

const SideMenu = props => {
    const [currentMenu, setCurrentMenu] = useState('Main')

    const language = useContext(LangContext)

    const submenus = new LocalizedStrings(translations)
    submenus.setLanguage(language.language)

    const currentMenuHandler = (title) => {
        setCurrentMenu(title)
    }

    console.log(submenus.data)

    return (
        <div className="side-menu">
            <header className="side-menu__header">
                <LanguageSwitcher changeMenu={() => currentMenuHandler('Main')}/>
                <div><button className="side-menu__close-button"><CloseMenu/></button></div>
            </header>
            <ul className="side-menu__body">
                <CSSTransition
                    in={currentMenu === 'Main'}
                    timeout={0}
                    unmountOnExit>
                    <div className="side-menu__items">
                        {submenus.data.map(item => item.title !== '' && <SideMenuItem item={item.title} changeMenu={() => currentMenuHandler(item.title)} className="side-menu__link"/>)}
                    </div>
                </CSSTransition>

                {submenus.data.map(menuTitle => (
                    <div>
                        {menuTitle.title !== 'null' && <CSSTransition
                            in={currentMenu === menuTitle.title}
                            timeout={0}
                            unmountOnExit>
                            <ul className="side-menu__section">
                                <SideMenuItem isSectionTitle={true} className="side-menu__link"
                                              classNameArrow="side-menu__title-arrow" item={menuTitle.title}
                                              changeMenu={() => currentMenuHandler('Main')}/>
                                <div className="side-menu__items">
                                    {menuTitle.menuData.map(item => (
                                       item.subtitle !== '' && <SideMenuItem isAbout={menuTitle.id === 'about'} isSectionTitle={false}
                                                      className="side-menu__section-item" item={item.subtitle}
                                                      changeMenu={() => currentMenuHandler(item.subtitle)}/>))}
                                </div>
                            </ul>
                        </CSSTransition>}

                        {menuTitle.menuData.map (subitem => (
                            subitem.subtitle !== '' && <CSSTransition
                                in={currentMenu === subitem.subtitle}
                                timeout={0}
                                unmountOnExit>
                                <ul className="side-menu__subitems">
                                    <SideMenuItem isSectionTitle={true} className="side-menu__link" item={subitem.subtitle} changeMenu={() => currentMenuHandler(menuTitle.title)}/>
                                        <div className="side-menu__subitem_separator"/>
                                    {subitem.info.map (s => ( <SideMenuSubitem name={s.name} info={s.info} />))}
                                </ul>
                            </CSSTransition>
                        ))}
                    </div>
                ))}
            </ul>
            {currentMenu === 'Main' && (
                <div className="side-menu__footer">
                    <div className="side-menu__footer-items">
                        <a target="_blank" href="https://itglobal.com/ru-kz/company/contacts/" className="side-menu__footer-link">{submenus.footer.contacts}</a>
                        <div>{submenus.footer.search}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SideMenu
