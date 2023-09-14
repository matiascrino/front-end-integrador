import { useState, useContext, useEffect } from "react";
import Form from "../components/Form";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "./Routes.module.css";

function Contacto() {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");

	const { theme } = useContext(ThemeContext);

	useEffect(() => {}, [theme]);


	const handleSubmit = (nombre, email) => {
		console.log("En handle submit", nombre, email);
		setUserName(nombre);
		setUserEmail(email);
	};


    if(userName !== "" && userEmail !== ""){
        return (
            <div className={theme === "claro" ? styles.main : styles.mainDark}>
                <h3>Gracias por contactarnos {userName}!</h3>
            </div>
        );
    }

	return (
		<div className={theme === "claro" ? styles.main : styles.mainDark}>
			<Form onSubmit={handleSubmit} />
		</div>
	);
}

export default Contacto;
