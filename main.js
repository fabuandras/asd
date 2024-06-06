import { tesztvalaszokLISTA } from "./adat.js";
import { kartyaOsszeallit, megjelenites } from "./fuggvenyek.js";

init(tesztvalaszokLISTA);

export function init(lista){
    const txt = kartyaOsszeallit(lista);
    megjelenites(txt);
}