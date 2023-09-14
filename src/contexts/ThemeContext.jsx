import React, { createContext, useReducer } from "react";


export const ThemeContext = createContext();



function themeReducer(state, action) {
	switch (action.type) {
		case "claro":
			return "claro"
        case "oscuro":
            return "oscuro"
		default:
			return state;
	}
};



export const ThemeProvider = ({ children }) => {
	const [theme, dispatch] = useReducer(themeReducer, "claro"); 

    const value = { theme, dispatch };  

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};



