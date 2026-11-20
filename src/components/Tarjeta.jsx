export default function Tarjeta({personaje}){
    return(
        <article className="tarjeta">
            <img className="tarjeta-foto" src={personaje.poster} alt={personaje.nombre}></img>
            <div className="tarjeta-datos">
                <h2>Nombre: {personaje.nombre}</h2>
                <p><b>Edad:</b> {personaje.edad}</p>
                <p><b>Tripulación: </b> {personaje.tripulacion}</p>
                <p><b>Rol: </b>{personaje.rol}</p>
                <p><b>Recompensa: </b>{personaje. recompensa}</p>
                <p><b>Fruta del diablo: </b>{personaje.fruta}</p>
            </div>
        </article>
    );
}