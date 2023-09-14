import { createContext, useState, useEffect } from "react";

export const DentistasContext = createContext();

export const DentistasProvider = ({ children }) => {
	const [dentistas, setDentistas] = useState([]);
	const [loading, setLoading] = useState(true);
	const URL_DENTISTAS = "https://jsonplaceholder.typicode.com/users";

	async function getDentistas() {
		const response = await fetch(URL_DENTISTAS);
		const data = await response.json();
		setDentistas(data);
		setLoading(false);
	}

	useEffect(() => {
		getDentistas();
	}, []);

	const value = { dentistas, loading };

	return (
		<DentistasContext.Provider value={value}>
			{children}
		</DentistasContext.Provider>
	);
};
