import React, { createContext, useState } from 'react';
import { TranslateProvider } from './Translate';

// Importar tus contextos existentes

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({
        // Incluir el estado de los contextos individuales si es necesario
    });

    return (
        <GlobalContext.Provider value={globalState}>
                <TranslateProvider>
                    {children}
                </TranslateProvider>
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext };
