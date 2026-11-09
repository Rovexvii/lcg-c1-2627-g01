import { crea_morte, muovi_morte, frena } from "../morte.js";
import { Y_TERRENO, crea_terreno, crea_camera, crea_cantiere, muro_sx, muro_dx, crea_piattaforma} from "../livello.js";

function preload(s) {}

 function create(s) {
    crea_terreno(s); 
    crea_morte(s); 
    crea_camera(s);
    crea_cantiere(s);
    muro_sx(s);
    muro_dx(s);
    crea_piattaforma(s);
}

function update(s) {
    muovi_morte(s);
}


function destroy(s) {}

PP.scenes.add ("cantiere", preload, create, update, destroy);