import { crea_morte, muovi_morte, frena } from "../morte.js";
import { Y_TERRENO, crea_terreno, crea_camera, crea_cantiere, crea_muro} from "../livello.js";

function preload(s) {}

 function create(s) {
    crea_terreno(s); 
    crea_morte(s); 
    crea_camera(s);
    crea_cantiere(s);
    crea_muro(s);
}

function update(s) {
    muovi_morte(s);
}


function destroy(s) {}

PP.scenes.add ("cantiere", preload, create, update, destroy);