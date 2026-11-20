//Me traigo la url de la api desde .env
const API_URL = import.meta.env.VITE_API_URL;


export async function obtenerPersonajes(){
    const respuesta = await fetch(API_URL);

    if(!respuesta.ok){
        throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    //Parseamos el cuerpo JSON
    const datos = await respuesta.json(); 
    return datos;
}


export async function crearPersonaje(nuevo){
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(nuevo), //Enviamos el JSON, el cuerpo es un string
    });

    if(!respuesta.ok){
        throw new Error(`Error al crear: ${respuesta.status}`)
    }
    return respuesta.json();
}