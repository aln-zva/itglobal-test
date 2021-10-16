import React, {useState} from 'react'

const LangContext = React.createContext({
    language: 'ru',
    changeLanguage: () => {}
})

export const LangContextProvider = (props) => {
    const [language, changeLanguage] = useState('ru')

    return (
        <LangContext.Provider value={{language, changeLanguage}}>
            {props.children}
        </LangContext.Provider>
    )
}

export default LangContext

