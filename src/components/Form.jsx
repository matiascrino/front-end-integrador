import styles from "./Form.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBell
} from "@fortawesome/free-solid-svg-icons";

let idError = 0;

const Form = (props) => {
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		let newErrors = [];

		if (
			nombre.trim() === "" ||
			email.trim() === "" ||
			nombre.trim() !== nombre
		) {
			newErrors.push({
				id: idError++,
				message: "Ningun campo puede estar vacio o tener espacios al comienzo",
			});
		}
		if (nombre.length < 3) {
			newErrors.push({
				id: idError++,
				message: "El nombre no puede tener menos de 3 caracteres",
			});
		}
		if (email.length < 6) {
			newErrors.push({
				id: idError++,
				message: "El tema no puede tener menos de 6 caracteres",
			});
		}

		if (newErrors.length === 0) {
			props.onSubmit(nombre, email);
			setEmail("");
			setEmail("");
			setErrors([]);
		} else {
			setErrors(newErrors);
		}
	};

	return (
		<div className={styles.DivForm}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.titulo}>DATOS DE CONTACTO</h1>
				<br />
				<label className={styles.label}>
					<input
						className={styles.input}
						type="text"
						value={nombre}
						onChange={(event) => {
							setNombre(event.target.value), setErrors([]);
						}}
						placeholder="Introduce tu nombre aqui..."
					/>
				</label>
				<label className={styles.label}>
					<input
						className={styles.input}
						type="text"
						value={email}
						onChange={(event) => {
							setEmail(event.target.value), setErrors([]);
						}}
						placeholder="Introduce tu email aqui..."
					/>
				</label>
				<br />
				<button type="submit" className={styles.button}>
					ENVIAR
				</button>
			</form>
			{errors.length > 0 ? (
				<ul className={styles.errors}>
					<li>
						<FontAwesomeIcon icon={faBell} />{" "}
					</li>
					{errors.map((error) => (
						<li key={error.id}>{error.message}</li>
					))}
				</ul>
			) : (
				""
			)}
		</div>
	);
};

export default Form;
