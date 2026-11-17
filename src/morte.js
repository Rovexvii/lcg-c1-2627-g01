const NERO = "0x000000";

const X_MORTE = 200;
const L_MORTE = 80;
const A_MORTE = 137;

const VEL_SALTO = 900;
const VEL_CORSA = 600;


const TASTO_SALTO = PP.key_codes.SPACE;
const TASTO_SX = PP.key_codes.LEFT;
const TASTO_DX = PP.key_codes.RIGHT;

const ATTRITO_FOGNE = 300;
const ATTRITO_NORMALE = 3000;

export let morte;

export let animazione;



export function crea_morte(s, ss_morte, terreno, Y_TERRENO) {
    
    morte = PP.assets.sprite.add(s, ss_morte, X_MORTE, Y_TERRENO - A_MORTE / 2, 0.5, 0.5);
    PP.physics.add (s, morte, PP.physics.type.DYNAMIC);
    /* PP.physics.set_collide_world_bounds(morte, true); */
    PP.physics.add_collider (s, morte, terreno);

    PP.assets.sprite.animation_add (morte, "fermo", 0, 0, 1, 0);
    PP.assets.sprite.animation_add (morte, "camminata", 1, 9, 12, -1);
    PP.assets.sprite.animation_add (morte, "salto", 10, 16, 12, -1);

    animazione = "fermo";
    PP.assets.sprite.animation_play (morte, animazione);
}

export function anima_morte () {
    let nuova = "fermo";
    if (!PP.physics.is_on_ground(morte)) {
        nuova = "salto";
    } else if (PP.physics.get_velocity_x(morte) !== 0) {
        nuova = "camminata";
    }
    if (nuova !== animazione) {
        animazione = nuova;
        PP.assets.sprite.animation_play(morte, animazione);
    }
}

export function muovi_morte(s) {
    cammina(s);
    salta(s);
}

function cammina(s) {
    if (PP.interactive.kb.is_key_down(s, TASTO_SX)) {
        PP.physics.set_velocity_x(morte, -VEL_CORSA);
        morte.geometry.flip_x = true;
    } else if (PP.interactive.kb.is_key_down(s, TASTO_DX)) {
        PP.physics.set_velocity_x(morte, VEL_CORSA);
        morte.geometry.flip_x = false;
    } else {
        PP.physics.set_velocity_x(morte, 0);
    }
}

function salta(s) {
    if (PP.interactive.kb.is_key_just_down(s, TASTO_SALTO) && PP.physics.is_on_ground(morte)) {
    PP.physics.set_velocity_y(morte, -VEL_SALTO);
    }
}

export function scivola (s, a, b) {
    PP.physics.set_drag_x (a, ATTRITO_FOGNE);
}

export function frena (s, a, b) {
    PP.physics.set_drag_x (a, ATTRITO_NORMALE);
}

