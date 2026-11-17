import { morte } from "./morte.js";

export const Y_TERRENO = 592;
const TERRA = "0xB96E54";
const ROSSO = "0xFF0000";
const GIALLO = "0xFFFF00";
const BLU = "0x0000FF";

const VEL_PIATTAFORMA = [120, 90];
const VEL_PIATTAFORMAX = [150, 100];
const ESCURSIONE = 130;
const ESCURSIONEX = 200;

const L_MORTE = 80;
const A_MORTE = 137;

const L_LIVELLO = 5000;

const A_LIVELLO = 500;

const ALTEZZA = 720;
const LARGHEZZA = 1280;
const L_CANTIERE = 1500;
const A_CANTIERE = 3000;

const A_MURO = 2570;
const L_MURO = 60;

const A_MULETTO = 180;
const L_MULETTO = 300;
const MULETTO_SOPRA = 119;

const A_PIATTAFORMA = 50;
const L_PIATTAFORMA = 280;

const A_PIANO = 50;
const L_PIANO = 1500;

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
export let cassafissa;
export let piattaformamobile;
export let y_partenza;
export let x_partenza;
export let piattaformamobilex;
export let mulettoalto;

export let img_cassa;
export let img_piattaforma;
export let img_cassafissa;
export let img_ruspa;
export let img_ruspaalto;
export let img_pedanamobile;

export let ss_morte;


export function crea_layer(s, img) {
    let layer = PP.assets.tilesprite.add(s, img, 0,0, LARGHEZZA, ALTEZZA, 0, 0);
    layer.tile_geometry.scroll_factor_x = 0;
    layer.tile_geometry.scroll_factor_y = 0;
    return layer;
}

export function crea_muletto(s) {
    muletto = PP.assets.image.add(s, img_ruspa, 2218, Y_TERRENO - A_MULETTO / 2, 0.5, 0.5);
    PP.physics.add(s, muletto, PP.physics.type.STATIC);
    PP.physics.add_collider(s, morte, muletto);
}

export function crea_mulettoalto(s) {
    mulettoalto = PP.assets.image.add(s, img_ruspaalto, 2220, Y_TERRENO - A_MULETTO / 2 - MULETTO_SOPRA, 0.5, 0.5);
    PP.physics.add(s, mulettoalto, PP.physics.type.STATIC);
    PP.physics.add_collider(s, murodx, mulettoalto);
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
        let p = PP.assets.image.add(s, img_piattaforma, x_piattaforma[i], y_piattaforma[i], 0.5, 0.5);
        piattaforma.push(p);
    }
    for (let i = 0; i < piattaforma.length; i++) {
        PP.physics.add(s, piattaforma[i], PP.physics.type.STATIC);
        PP.physics.add_collider(s, morte, piattaforma[i]);
    }
}

export function crea_piattaformamobile (s, x_piattaformamobile, y_piattaformamobile) {
      piattaformamobile = [];
  y_partenza = y_piattaformamobile;
  for (let i = 0; i < y_piattaformamobile.length; i++) {
    let b = PP.assets.image.add (s, img_pedanamobile,
      x_piattaformamobile[i], y_piattaformamobile[i], 0.5, 0.5);
    PP.physics.add(s, b, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(b, false);
    PP.physics.set_immovable(b, true);
    PP.physics.set_velocity_y(b, VEL_PIATTAFORMA[i]);
    PP.physics.add_collider(s, morte, b);
    piattaformamobile.push(b);
  }
}

 export function crea_piattaformamobilex (s, x_piattaformamobilex, y_piattaformamobilex) {
    piattaformamobilex=[];
  
    x_partenza = x_piattaformamobilex;
  for (let i = 0; i < x_piattaformamobilex.length; i++) {
    let m = PP.assets.image.add (s, img_pedanamobile, 
      x_piattaformamobilex[i], y_piattaformamobilex[i], 0.5, 0.5);
    PP.physics.add(s, m, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(m, false);
    PP.physics.set_immovable(m, true);
    PP.physics.set_velocity_x(m, VEL_PIATTAFORMAX[i]);
    PP.physics.add_collider(s, morte, m);
    piattaformamobilex.push(m);
  }
 }

 export function muovi_piattaformax() {
      for (let i = 0; i < piattaformamobilex.length; i++) {
    let m = piattaformamobilex[i];
    if (m.geometry.x > x_partenza[i] + ESCURSIONEX) {
      PP.physics.set_velocity_x(m, -VEL_PIATTAFORMAX[i]);
    }
    if (m.geometry.x < x_partenza[i] - ESCURSIONEX) {
      PP.physics.set_velocity_x(m, VEL_PIATTAFORMAX[i]);
    }
  }
}

export function muovi_piattaforma() {
      for (let i = 0; i < piattaformamobile.length; i++) {
    let b = piattaformamobile[i];
    if (b.geometry.y > y_partenza[i] + ESCURSIONE) {
      PP.physics.set_velocity_y(b, -VEL_PIATTAFORMA[i]);
    }
    if (b.geometry.y < y_partenza[i] - ESCURSIONE) {
      PP.physics.set_velocity_y(b, VEL_PIATTAFORMA[i]);
    }
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
        let f = PP.assets.image.add(s, img_cassafissa, x_cassafissa[i], y_cassafissa[i], 0.5, 0.5)
        cassafissa.push(f)
    }
    for (let i = 0; i < cassafissa.length; i++) {
        PP.physics.add(s, cassafissa[i], PP.physics.type.STATIC);
        PP.physics.add_collider(s, morte, cassafissa[0]);
        PP.physics.add_collider(s, cassa[i], cassafissa[0]);
    }
}

export function crea_cassa(s, x_cassa, y_cassa) {
    cassa = [];
    for (let i = 0; i < x_cassa.length; i++) {
        let c = PP.assets.image.add(s, img_cassa, x_cassa[i], y_cassa[i], 0.5, 0.5);
        cassa.push(c);
    }
    for (let i = 0; i < cassa.length; i++) {
        PP.physics.add(s, cassa[i], PP.physics.type.DYNAMIC);
        PP.physics.add_collider(s, morte, cassa[i]);
    
        PP.physics.add_collider(s, cassa[i], piano[0]);
        PP.physics.add_collider(s, murodx, cassa[i]);
        PP.physics.add_collider(s, murosx, cassa[i]);
        PP.physics.add_collider(s, terreno, cassa[i]);
        PP.physics.add_collider(s, piattaforma[2], cassa[i]);
        PP.physics.add_collider(s, piattaforma[3], cassa[i]);

    }
}

export function carica_livello(s) {
    img_cassa = PP.assets.image.load(s, "assets/images/cassa_colori.png");
    img_piattaforma = PP.assets.image.load(s, "assets/images/Sbarra di ferro.png")
    img_cassafissa = PP.assets.image.load(s, "assets/images/cassafissa.png")
    img_ruspa = PP.assets.image.load(s, "assets/images/muletto.png")
    img_ruspaalto = PP.assets.image.load(s, "assets/images/Ruspa_alto.png")
    img_pedanamobile = PP.assets.image.load (s, "assets/images/Pedana_mobile2.png")

    ss_morte = PP.assets.sprite.load_spritesheet (s, "assets/images/morte_spritesheet.png", L_MORTE, A_MORTE);
}

export function crea_camera(s) {
    PP.physics.set_world_bounds(s, 0, Y_TERRENO - A_CANTIERE, L_LIVELLO, A_CANTIERE + A_TERRENO);
    PP.camera.set_bounds(s, 0, Y_TERRENO - A_CANTIERE, L_LIVELLO, A_CANTIERE + A_TERRENO);
    PP.camera.start_follow(s, morte, 0, 0);
    /*
    PP.camera.set_deadzone(s, 0, 300);*/
}

export function crea_attrito (s, attrito) {
    for ( let i = 0; i < terreno.length; i++) {PP.physics.add_collider_f(s, morte, terreno [i], attrito);}
}