import {z} from "zod";

//Esquema para establecer que reglas va a tener cada campo del formulario
export const esquemaPersonaje = z.object({
    nombre: z.string().trim().min(2, "El nombre debe de tener por lo menos 2 caracteres"),
    edad: z.coerce.number().int("La edad debe ser un número").min(1, "El personaje debe tener una edad superior a 0"),
    tripulacion: z.string().trim().min(1, "La tripulacion es obligatoria"),
    rol: z.string().trim().min(1, "El personaje debe de tener un rol en la tripulación"),
    recompensa: z.coerce.number().int("La recompensa debe ser un numero").min(0, "La recompensa no puede ser negativa"),
    //Hacemos que si no hay nada escrito en fruta, devuelva ninguna
    fruta: z.string().trim().transform((valor) => valor === "" ? "Ninguna" : valor),
})