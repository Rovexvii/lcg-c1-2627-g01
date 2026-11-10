import { crea_morte, muovi_morte, frena } from "../morte.js";
import { Y_TERRENO, crea_terreno, crea_camera, crea_cantiere, muro_sx, muro_dx, crea_piattaforma, crea_muletto} from "../livello.js";

const X_PIATTAFORMA = [2600, 2000];
const Y_PIATTAFORMA = [280, 100];

function preload(s) {}

 function create(s) {
    crea_terreno(s); 
    crea_cantiere(s);
    crea_morte(s); 
    crea_camera(s);
    muro_sx(s);
    muro_dx(s);
    crea_piattaforma(s, X_PIATTAFORMA, Y_PIATTAFORMA);
    crea_muletto(s);

}

function update(s) {
    muovi_morte(s);
}


function destroy(s) {}

PP.scenes.add ("cantiere", preload, create, update, destroy);