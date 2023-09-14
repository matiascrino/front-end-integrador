import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './main.css'
import { FavoritosProvider } from './contexts/FavoritosContext.jsx'
import { DentistasProvider } from './contexts/DentistasContext.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<DentistasProvider>
			<FavoritosProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</FavoritosProvider>
		</DentistasProvider>
	</ThemeProvider>
);
