import React, { createContext, useState, useContext } from 'react'

const ViewCounterContext = createContext()

export const useViewCounter = () => useContext(ViewCounterContext)

export const ViewCounterContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
        <ViewCounterContext.Provider value={{ count, setCount }}>
            {children}
        </ViewCounterContext.Provider>
    )
}
