import { crea_morte, muovi_morte, frena } from "../morte.js";
import { Y_TERRENO, crea_terreno, crea_camera, crea_cantiere, muro_sx, muro_dx, 
    crea_piattaforma, crea_muletto, crea_piano, crea_cassa, crea_cassafissa} from "../livello.js";

const X_PIATTAFORMA = [2500, 1950, 1400];
const Y_PIATTAFORMA = [280, 120, -40];

const X_PIANO = [2470];
const Y_PIANO = [-200];

const X_CASSA = [2050];
const Y_CASSA = [-265];

const X_CASSAFISSA = [2800];
const Y_CASSAFISSA = [-345];

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
    crea_piano(s, X_PIANO, Y_PIANO);
    crea_cassa(s, X_CASSA, Y_CASSA);
    crea_cassafissa(s, X_CASSAFISSA, Y_CASSAFISSA)

}

function update(s) {
    muovi_morte(s);
}


function destroy(s) {}

PP.scenes.add ("cantiere", preload, create, update, destroy);