import { useContext, useEffect } from "react";
import { FavoritosContext } from "../contexts/FavoritosContext";
import styles from "./DentistCard.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

const DentistCard = (props) => {
	const { toggleFavoritos, isFavorito } = useContext(FavoritosContext);

    const handleFavoritos = () => {
        toggleFavoritos(props.id);
    }

	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<h2>{props.name}</h2>
				<h3>{props.userName}</h3>
			</div>
			<div className={styles.img}>
				<img src="imgs/doctor.jpg" alt="" />
			</div>
			<div className={styles.footer}>
				<button className={styles.button} onClick={handleFavoritos}>
                    {isFavorito(props.id) ? <FontAwesomeIcon icon={solidStar} /> : <FontAwesomeIcon icon={regularStar} />}
				</button>
				<Link className={styles.button} to={`/dentist/${props.id}`}>
					Ver Detalles
				</Link>
			</div>
		</div>
	);
};

export default DentistCard;
