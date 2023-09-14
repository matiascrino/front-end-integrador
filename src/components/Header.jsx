import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faAddressBook, faSquareCheck as solidCheck, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck as regularCheck } from "@fortawesome/free-regular-svg-icons";
import styles from './Header.module.css'
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {

    const { theme, dispatch} = useContext(ThemeContext);
    const [classStyle, setClassStyle] = useState(theme)

    const cambiarTema = () => {
        if(theme === "claro"){
            dispatch({type: "oscuro"})
        }else{
            dispatch({type: "claro"})
        }
    }

    useEffect(() => {
        setClassStyle(theme)
    }, [theme])

	return (
		<div className={styles.header}>
			<Link className={styles.link} to="/home">
				<FontAwesomeIcon icon={faHouse} />
				<span>HOME</span>
			</Link>
			<Link className={styles.link} to="/contacto">
				<FontAwesomeIcon icon={faAddressBook} />
				<span>CONTACTO</span>
			</Link>
			<Link className={styles.link} to="/favs">
				<FontAwesomeIcon icon={solidStar} />
				<span>FAVORITOS</span>
			</Link>
			<button onClick={cambiarTema} className={styles.button}>
                CAMBIAR TEMA
				{theme === "claro" ? (
					<FontAwesomeIcon icon={regularCheck} />
				) : (
					<FontAwesomeIcon icon={solidCheck} />
				)}
			</button>
		</div>
	);
};


export default Header;