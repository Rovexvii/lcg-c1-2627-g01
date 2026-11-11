import { morte, crea_morte, frena} from "./morte.js";

export const Y_TERRENO = 592;
const TERRA = "0xB96E54";
const ROSSO = "0xFF0000";
const GIALLO = "0xFFFF00";
const BLU = "0x0000FF";

const L_LIVELLO = 5000;

const A_LIVELLO = 2500;

const ALTEZZA = 720;
const LARGHEZZA = 1280;
const L_CANTIERE = 2000;
const A_CANTIERE = 3000;

const A_MURO = 2570;
const L_MURO = 60;

const A_MULETTO = 180;
const L_MULETTO = 300; 


const A_PIATTAFORMA = 50;
const L_PIATTAFORMA = 280;

const A_PIANO = 50;
const L_PIANO = 1400;



const A_CASSA = 80;
const L_CASSA = 80;

const A_CASSAFISSA = 240;
const L_CASSAFISSA = 80;

const A_TERRENO = 170;

const ANTICIPO_CAMERA = 100;

export let terreno;
export let cassa;
export let cantiere;
export let murosx;
export let murodx;
export let piattaforma;
export let muletto;
export let piano;
export let cassafissa

export function crea_layer(s, img) {
    let layer = PP.assets.tilesprite.add(s, img, 0,0, LARGHEZZA, ALTEZZA, 0, 0);
    layer.tile_geometry.scroll_factor_x = 0;
    layer.tile_geometry.scroll_factor_y = 0;
    return layer;
}

export function crea_muletto(s) {
    muletto = PP.shapes.rectangle_add(s, 3020, Y_TERRENO - A_MULETTO / 2, L_MULETTO, A_MULETTO, GIALLO, 1);
    PP.physics.add(s, muletto, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, muletto);
}

export function crea_cantiere(s) {
    cantiere = PP. shapes.rectangle_add(s, L_CANTIERE * 1.1, Y_TERRENO - A_CANTIERE / 2, L_CANTIERE, A_CANTIERE, TERRA, 0.5);
}

export function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s, L_LIVELLO / 2, Y_TERRENO + A_TERRENO / 2, L_LIVELLO, A_TERRENO, TERRA, 1);
    PP.physics.add(s, terreno, PP.physics.type.STATIC);
}

export function muro_sx(s) {
    murosx = PP. shapes.rectangle_add(s, L_CANTIERE * 0.6, Y_TERRENO - A_CANTIERE / 2, L_MURO, A_MURO, ROSSO, 1);
    PP.physics.add(s, murosx, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, murosx);
}

export function muro_dx(s) {
    murodx = PP. shapes.rectangle_add(s, L_CANTIERE * 1.6, Y_TERRENO - A_CANTIERE / 2, L_MURO, A_MURO + 430, ROSSO, 1);
    PP.physics.add(s, murodx, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, murodx);
}

export function crea_piattaforma(s, x_piattaforma, y_piattaforma) {
    piattaforma = [];
    for (let i = 0; i < x_piattaforma.length; i++) {
        let p = PP.shapes.rectangle_add(s, x_piattaforma[i], y_piattaforma[i], L_PIATTAFORMA, A_PIATTAFORMA, ROSSO, 1);
        piattaforma.push(p);
    }
    for (let i = 0; i < piattaforma.length; i++) {
        PP.physics.add(s, piattaforma[i], PP.physics.type.STATIC);
        PP.physics.add_collider(s, morte, piattaforma[i]);
    }
}

export function crea_piano(s, x_piano, y_piano) {
    piano = [];
    for (let i = 0; i < x_piano.length; i++) {
        let k = PP.shapes.rectangle_add(s, x_piano[i], y_piano[i], L_PIANO, A_PIANO, BLU, 1);
        piano.push(k);
    }
    for (let i = 0; i < piano.length; i++) {
        PP.physics.add(s, piano[i], PP.physics.type.STATIC);
        PP.physics.add_collider(s, morte, piano[i]);
    }
}

export function crea_cassafissa(s, x_cassafissa, y_cassafissa) {
    cassafissa = []
    for (let i = 0; i < x_cassafissa.length; i++) {
        let f = PP.shapes.rectangle_add(s, x_cassafissa[i], y_cassafissa[i], L_CASSAFISSA, A_CASSAFISSA, GIALLO, 1)
        cassafissa.push(f)
    }
    for (let i = 0; i < cassafissa.length; i++) {
        PP.physics.add(s, cassafissa[i], PP.physics.type.STATIC);
        PP.physics.add_collider(s, morte, cassafissa[0]);
        PP.physics.add_collider(s, cassa[0], cassafissa[0]);


    }
}

export function crea_cassa(s, x_cassa, y_cassa) {
    cassa = [];
    for (let i = 0; i < x_cassa.length; i++) {
        let c = PP.shapes.rectangle_add(s, x_cassa[i], y_cassa[i], L_CASSA, A_CASSA, GIALLO, 1);
        cassa.push(c);

    }
    for (let i = 0; i < cassa.length; i++) {
        PP.physics.add(s, cassa[i], PP.physics.type.DYNAMIC);
        PP.physics.add_collider(s, morte, cassa[0]);
        PP.physics.add_collider(s, cassa[0], piano[0]);
        PP.physics.add_collider(s, murodx, cassa[0]);
        PP.physics.add_collider(s, murosx, cassa[0]);
        PP.physics.add_collider(s, terreno, cassa[0]);
        PP.physics.add_collider(s, piattaforma[2], cassa[0]);    }
}

export function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, -ALTEZZA, L_LIVELLO, ALTEZZA * 3);
    PP.camera.set_bounds(s, 0, -ALTEZZA, L_LIVELLO, ALTEZZA * 2);
    PP.camera.start_follow(s, morte, 0, 0);
    /*
    PP.camera.set_deadzone(s, 0, 300);*/
}

export function crea_attrito (s, attrito) {
    for ( let i = 0; i < terreno.length; i++) {PP.physics.add_collider_f(s, morte, terreno [i], attrito);}
}