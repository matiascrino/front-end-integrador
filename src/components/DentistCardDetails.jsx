import styles from "./DentistCardDetails.module.css"


const DentistCardDetails = (props) => {

	return (
		<div className={styles.cardDetails}>
			<img src="../../public/imgs/doctor.jpg" alt="" />
			<h2>{props.name}</h2>
			<p>
				UserName: <span>{props.userName}</span>
			</p>
			<p>
				Email: <span>{props.email}</span>
			</p>
			<p>
				Teléfono: <span>{props.phone}</span>
			</p>
			<p>
				Website: <a>{props.website}</a>
			</p>
            <p>
                {props.favorito
                ? <span> El medico se encuentra en favoritos </span>
                : <span> El medico no se encuentra en favoritos </span> }
            </p>
		</div>
	);
};

export default DentistCardDetails;
