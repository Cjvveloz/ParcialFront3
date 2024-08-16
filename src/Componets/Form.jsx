import React, { useState } from 'react';
import Card from './Card';

const Form = () => {
   
    const [animal, setAnimal] = useState({
        name: "",
        type: "",
        genero: "",
    });

    console.log(animal);

   
    const [show, setShow] = useState(false); 
    const [error, setError] = useState("");

   
    const handleChangeName = (event) => {
        setAnimal({ ...animal, name: event.target.value });
    };

    
    const handleChangeType = (event) => {
        setAnimal({ ...animal, type: event.target.value });
    };

    const handleChangeGenero = (event) => {
        setAnimal({ ...animal, genero: event.target.value });
    };

   
    const handleSubmit = (event) => {
        event.preventDefault(); 

        const name = animal.name.trim(); 
        const type = animal.type.trim();
        const genero = animal.genero.trim();

       
        const nameValido = name.length >= 3; 
        const typeValido = type.length >= 6; 
        const typeGenero = genero.length >= 6; 

      
        const nameSinEspacios = animal.name === name;

       
        if (nameValido && nameSinEspacios && typeValido && typeGenero) {
            setShow(true); 
            setError("");  
        } else {
            setShow(false); 
            setError("Por favor chequea que la información sea correcta."); 
        }
    };

    
    const reset = () => {
        setAnimal({
            name: "",
            type: "",
            genero: "",
        });
        setShow(false); 
        setError(""); 
    };

    return (
        <>
            
            
                
                    <h1>Formulario Tipo de Animales Parcial</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Nombre:</label>
                        <input
                            type='text'
                            value={animal.name}
                            onChange={handleChangeName}
                        />
                        <label>Tipo:</label>
                        <input
                            type='text'
                            value={animal.type}
                            onChange={handleChangeType}
                        />
                        <label>Genero:</label>
                        <input
                            type='text'
                            value={animal.genero}
                            onChange={handleChangeGenero}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                    <button onClick={reset}>Reset Form</button>
                
            
            {error && 
                <h4 style={{ color: "red" }}>{error}</h4> 
            }
            {show && <Card animal={animal} />}
        </>
    );
};

export default Form;

