import React, { createContext, useContext, useState } from 'react'

const TranslateContext = createContext();

export const TranslateProvider = ({children}) => {
    const [isTranslate, setTranslate] = useState(true);
    const toggleTranslate = () => {
        setTranslate(prev => !prev);
    }
  return (
    <TranslateContext.Provider value={{ isTranslate , toggleTranslate}}>
        {children}
    </TranslateContext.Provider>
  )
}

export const useTranslate = () => useContext(TranslateContext);