import { morte, crea_morte, frena} from "./morte.js";

export const Y_TERRENO = 592;
const TERRA = "0xB96E54";
const ROSSO = "0xFF0000";

const L_LIVELLO = 5000;
/*
const A_LIVELLO = 2500;
*/
const ALTEZZA = 720;
const LARGHEZZA = 1280;
const L_CANTIERE = 2000;
const A_CANTIERE = 3000;
const A_MURO = 2570;
const L_MURO = 60;
const A_PIATTAFORMA = 30;
const L_PIATTAFORMA = 335;


const A_CASSA = 80;
const L_CASSA = 80;

const A_TERRENO = 128;

const ANTICIPO_CAMERA = 200;

export let terreno;
export let cassa;
export let cantiere;
export let muro;
export let piattaforma;

export function crea_layer(s, img) {
    let layer = PP.assets.tilesprite.add(s, img, 0,0, LARGHEZZA, ALTEZZA, 0, 0);
    layer.tile_geometry.scroll_factor_x = 0;
    layer.tile_geometry.scroll_factor_y = 0;
    return layer;
}

export function crea_cantiere(s) {
    cantiere = PP. shapes.rectangle_add(s, L_CANTIERE * 1.1, Y_TERRENO - A_CANTIERE / 2, L_CANTIERE, A_CANTIERE, TERRA, 0.5);
}

export function crea_terreno(s) {
    terreno = PP.shapes.rectangle_add(s, L_LIVELLO / 2, Y_TERRENO + A_TERRENO / 2, L_LIVELLO, A_TERRENO, TERRA, 1);
    PP.physics.add(s, terreno, PP.physics.type.STATIC);
}

export function muro_sx(s) {
    muro = PP. shapes.rectangle_add(s, L_CANTIERE * 0.6, Y_TERRENO - A_CANTIERE / 2, L_MURO, A_MURO, ROSSO, 1);
    PP.physics.add(s, muro, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, muro);
}

export function muro_dx(s) {
    muro = PP. shapes.rectangle_add(s, L_CANTIERE * 1.6, Y_TERRENO - A_CANTIERE / 2, L_MURO, A_MURO + 430, ROSSO, 1);
    PP.physics.add(s, muro, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, muro);
}

export function crea_piattaforma(s) {
    piattaforma = PP.shapes.rectangle_add(s, L_CANTIERE, 340, L_PIATTAFORMA, A_PIATTAFORMA, ROSSO, 1);
    PP.physics.add(s, piattaforma, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, piattaforma);
}

export function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.set_bounds(s, 0, 0, L_LIVELLO, ALTEZZA);
    PP.camera.start_follow(s, morte, -ANTICIPO_CAMERA, 0);
}

export function crea_attrito (s, attrito) {
    for ( let i = 0; i < terreno.length; i++) {PP.physics.add_collider_f(s, morte, terreno [i], attrito);}
}