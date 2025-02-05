import { useEffect, useState } from "react";
import Breed from "../breed/Breed";

const Search = (props) => {

    const [breeds, setBreeds] = useState([])

    const handleInput = (e) => {
        props.onSearch(e.target.value)
    }

    useEffect(()=> {
        try {
            fetch(`https://api.thecatapi.com/v1/breeds`)
            .then(response => response.json())
            .then(data => setBreeds(data)) // setBreeds(data) - priskiria breeds duomenis
        } catch (message) {
            console.log(message)
        }
    }, [])
    // console.log(breeds)
    return (

        <>
        <form className="form">
            <div className="form-group">
                <label>Pasirinkti veisle: </label>
                <input list="breeds"onChange={handleInput}  />
                <datalist id="breeds">
                    {breeds?.map((breed) => 
                    // Cia yra child componentas Search componento atzvilgiu
                        <Breed 
                        id={breed.id}
                        name={breed.name}
                        
                        />
                    )}
                </datalist>
            </div>
        </form>
        </>

    )

}

export default Search;