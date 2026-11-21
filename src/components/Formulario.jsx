import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { esquemaPersonaje } from "../schemas/personaje";




export default function Formulario(){

    const{
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(esquemaPersonaje),        //Conectamos con el esquema, ahora valida Zod
        defaultValues: {nombre:"", edad:"", tripulacion:"", rol:"", recompensa:"", fruta:""}
    });

    function onSubmit(datos){
        console.log(datos);
    }
    
    return(
        //handleSubmit(onSubmit) - Hace que valide Zod
        //noValidate - Quita la validacion del navegador para que solo valide Zod
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/*Parte del Nombre*/}
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" {...register("nombre")} />
            {errors.nombre && <p className="error">{errors.nombre.message}</p>}

            {/*Parte de la Edad*/}
            <label htmlFor="edad">Edad</label>
            <input id="edad" {...register("edad")} type="number"/>
            {errors.edad && <p className="error">{errors.edad.message}</p>}
                    
            {/*Parte de la Tripulacion*/}
            <label htmlFor="tripulacion">Tripulacion</label>
            <input id="tripulacion" {...register("tripulacion")}/>
            {errors.tripulacion && <p className="error">{errors.tripulacion.message}</p>}
                    
            {/*Parte de la Rol*/}
            <label htmlFor="rol">Rol</label>
            <input id="rol" {...register("rol")}/>
            {errors.rol && <p className="error">{errors.rol.message}</p>}
                    
            {/*Parte de la Recompensa*/}
            <label htmlFor="recompensa">Recompensa</label>
            <input id="recompensa" {...register("recompensa")} type="number"/>
            {errors.recompensa && <p className="error">{errors.recompensa.message}</p>}
                    
            {/*Parte de la Fruta*/}
            <label htmlFor="fruta">Fruta</label>
            <input id="fruta" {...register("fruta")}/>
            {errors.fruta && <p className="error">{errors.fruta.message}</p>}

            {/*Parte del Boton*/}
            <button type="submit">Añadir personaje</button>
        </form>
    )
}