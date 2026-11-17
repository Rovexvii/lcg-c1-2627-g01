import { morte, crea_morte, muovi_morte, frena } from "../morte.js";
import { Y_TERRENO, cassa, crea_terreno, crea_camera, crea_cantiere, muro_sx, muro_dx, 
    crea_piattaforma, crea_muletto, crea_piano, crea_cassa, crea_cassafissa, crea_piattaformamobile, muovi_piattaforma,
    crea_piattaformamobilex, muovi_piattaformax, carica_livello} from "../livello.js";

const X_PIATTAFORMA = [1700, 1200];
const Y_PIATTAFORMA = [280, 120];

const X_PIANO = [];
const Y_PIANO = [];

const X_CASSA = [2230];
const Y_CASSA = [-265];

const X_CASSAFISSA = [3130];
const Y_CASSAFISSA = [-345];

const X_PIATTAFORMAMOBILE = [2750, 1450];
const Y_PIATTAFORMAMOBILE = [-675, -925];

const X_PIATTAFORMAMOBILEX = [1900, 2400];
const Y_PIATTAFORMAMOBILEX = [-50, -150];

const FPS_FISICA = 300;

function preload(s) {
    carica_livello(s);
}

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
    /*
    crea_cassa(s, X_CASSA, Y_CASSA);
    crea_cassafissa(s, X_CASSAFISSA, Y_CASSAFISSA); */
    crea_piattaformamobile (s, X_PIATTAFORMAMOBILE, Y_PIATTAFORMAMOBILE);
    PP.game.set_physics_fps(s, FPS_FISICA);
    crea_piattaformamobilex(s, X_PIATTAFORMAMOBILEX, Y_PIATTAFORMAMOBILEX)
}

function update(s) {
    muovi_morte(s);
    muovi_piattaforma(s);
    muovi_piattaformax(s);
}


function destroy(s) {}

PP.scenes.add ("cantiere", preload, create, update, destroy);