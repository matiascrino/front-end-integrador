import {useContext, useEffect } from "react";
import DentistCard from "./../components/DentistCard"
import styles from './Routes.module.css'
import { DentistasContext } from "../contexts/DentistasContext";
import { ThemeContext } from "../contexts/ThemeContext";





function Home() {
	const { dentistas, loading } = useContext(DentistasContext);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {

	}, [theme]);

	if (loading) {
		return <h1>Cargando...</h1>;
	}
	
	return (
		<div className={theme === "claro" ? styles.main : styles.mainDark }>
			{dentistas.map((dentist) => (
				<DentistCard
					key={dentist.id}
                    id={dentist.id}
					name={dentist.name}
					userName={dentist.username}>
				</DentistCard>
			))}
		</div>
	);
}


export default Home;