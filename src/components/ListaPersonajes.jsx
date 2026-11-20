import { useQuery } from "@tanstack/react-query";
import { obtenerPersonajes } from "../services/personajes";
import Tarjeta from "./Tarjeta";

export default function ListaPersonajes(){
    const {data, isPending, isError, error} = useQuery({
        queryKey: ["personajes"],
        queryFn: obtenerPersonajes,
    });

    if(isPending){
        return(<p>Cargando personajes...</p>);
    }

    if(isError){
        return(<p>Hay un error: {error.message}</p>)
    }

    if(data.length === 0){
        return(<p>Todavia no hay personajes</p>);
    }

    return(
        <div className="lista">
            {data.map((p) => (<Tarjeta key = {p.id} personaje={p}/>))}
        </div>        
    )
}