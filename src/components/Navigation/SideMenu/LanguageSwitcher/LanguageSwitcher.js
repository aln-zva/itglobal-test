import './LanguageSwitcher.scss'
import RU from '../../../../assets/RU.svg'
import EN from '../../../../assets/EN.svg'
import KZ from '../../../../assets/KZ.svg'
import NL from '../../../../assets/NL.svg'
import BY from '../../../../assets/BY.svg'
import TR from '../../../../assets/TR.svg'
import check from '../../../../assets/check.svg'
import LangContext from "../../../LangContext/LangContext";
import useOutside from "../../../../hooks/useOutside";

import React, {useContext, useState, useRef, useEffect} from "react";


const LanguageSwitcher = props => {
    const context = useContext(LangContext)

    const switcher = useRef()

    const langs = [
        {value: 'en', name: 'United States', img: EN, label: 'Us'},
        {value: 'nl', name: 'Netherlands', img: NL, label: 'NL'},
        {value: 'by', name: 'Беларусь', img: BY, label: 'By'},
        {value: 'ru', name: 'Россия', img: RU, label: 'Ru'},
        {value: 'kz', name: 'Казахстан', img: KZ, label: 'Kz'},
        {value: 'tr', name: 'Türkiye', img: TR, label: 'Tr'},
    ]

    const [currentLang, setCurrentLang] = useState(
        {value: 'ru', name: 'Россия', img: RU, label: 'Ru'},
    )
    const [showSwitch, setShowSwitch] = useState(false)

    useEffect(() => {
        const storedLanguageInformation = localStorage.getItem('currentLang')
        const activeLang = langs.find(lang => lang.value === storedLanguageInformation)
        if(activeLang) {
            setCurrentLang (activeLang)
        }
    }, [])

    const languageSwitcherToggle = () => {
        setShowSwitch(!showSwitch)
    }

    const switchHandler = (value) => {
        const activeLang = langs.find(lang => lang.value === value)
        setCurrentLang (activeLang)
        setShowSwitch(false)
        context.changeLanguage(value)
        props.changeMenu('Main')
        localStorage.setItem('currentLang', activeLang.value)
    }

    useOutside(switcher, () => setShowSwitch(false))

    return (
        <div ref={switcher}>
            <div onClick={languageSwitcherToggle} className={showSwitch ? "switch-language switch-language_active" : "switch-language"}>
                <img src={currentLang.img} alt="" className="switch-language__current-icon"/>
                <span>{currentLang.label}</span>
                <span className="switch-language__arrow"/>
            </div>
            {showSwitch &&
            <div className="switch-language__menu">
                <span className="switch-language__title">Страна</span>
                {langs.map(lang => (
                    <div
                        onClick={() => switchHandler (lang.value)}
                        className={lang.value === currentLang.value ? 'switch-language__option switch-language__option_active' : 'switch-language__option'}
                    >
                        <div className="switch-language__option-items">
                            <img src={lang.img} alt="" className="switch-language__option-icon"/>
                            <span>{lang.name}</span>
                        </div>
                        <div>{lang.value === currentLang.value && <img src={check} alt="" className="switch-language__check"/>}</div>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default LanguageSwitcher
