import {useState, createContext, useEffect} from 'react';

export const FavoritosContext = createContext();

export const FavoritosProvider = ({ children }) => {

    const [favoritos, setFavoritos] = useState(localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : []);


    const toggleFavoritos = (id) => {

        if(favoritos.includes(id)){
            setFavoritos(favoritos.filter((item) => item !== id));
        }else{
            setFavoritos([...favoritos, id]);
        }

    }

    useEffect(() => {   
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }, [favoritos]);


    const isFavorito = (id) => {
        return favoritos.includes(id);
    }



    const value = { favoritos, toggleFavoritos, isFavorito };

    return(
        <FavoritosContext.Provider value={value}>
            {children}
        </FavoritosContext.Provider>
    )











}