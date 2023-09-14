import { useContext, useEffect } from "react";
import { DentistasContext } from "../contexts/DentistasContext";
import { FavoritosContext } from "../contexts/FavoritosContext";
import DentistCard from "./../components/DentistCard";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "./Routes.module.css";





function Favoritos() {

	const {dentistas} = useContext(DentistasContext);
	const {favoritos} = useContext(FavoritosContext);

	const { theme } = useContext(ThemeContext);

	useEffect(() => {

	}, [theme]);

	const favoritosDentistas = dentistas.filter((dentista) => favoritos.includes(dentista.id));

	
	if(favoritosDentistas.length === 0){
		return (
			<div className={theme === "claro" ? styles.main : styles.mainDark}>
				<h3>No hay dentistas favoritos aún</h3>
			</div>
		);
	}

	return (
		<div className={theme === "claro" ? styles.main : styles.mainDark}>
			{favoritosDentistas.map((dentist) => (
				<DentistCard
					key={dentist.id}
					id={dentist.id}
					name={dentist.name}
					userName={dentist.username}></DentistCard>
			))}
		</div>
	);
}

export default Favoritos;