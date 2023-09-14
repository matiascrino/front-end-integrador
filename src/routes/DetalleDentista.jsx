import { useEffect,useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { DentistCardDetails } from "../components/index";
import { FavoritosContext } from "../contexts/FavoritosContext";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from './Routes.module.css'


const URL_DETAILS_DENTIST = "https://jsonplaceholder.typicode.com/users/"


function DetalleDentista() {

    const [dentist, setDentist] = useState([]);
    const {id} = useParams();
    const {isFavorito} = useContext(FavoritosContext);

	const { theme } = useContext(ThemeContext);

	useEffect(() => {}, [theme]);    

    async function fetchDentist() {         
        const response = await fetch(`${URL_DETAILS_DENTIST}${id}`);
        const data = await response.json();
        setDentist(data);
    }

    useEffect(() => {
        fetchDentist();
    }, []);

    

	return (
		<div className={theme === "claro" ? styles.main : styles.mainDark}>
			<DentistCardDetails
				id={dentist.id}
				name={dentist.name}
				userName={dentist.username}
				email={dentist.email}
				phone={dentist.phone}
				website={dentist.website}
				favorito={isFavorito(dentist.id)}></DentistCardDetails>
		</div>
	);
    

}

export default DetalleDentista;