
const LARGHEZZA = 1280;
const ALTEZZA = 720;
const FONT = "Press Start";

const config = {
  canvas_width: LARGHEZZA,
  canvas_height: ALTEZZA,
  canvas_id: "area_gioco",
  background_color: 0x000000,
  gravity_value: 2000,
  debug_mode: true,
};

function avvia() {
  PP.game.create(config);
}

document.fonts.load("16px " + FONT).then(avvia);


