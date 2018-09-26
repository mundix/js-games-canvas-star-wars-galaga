// Canvas and Context
const c = document.getElementById("screen");
const ctx = c.getContext("2d");

const stageWidth = c.width;
const stageHeight = c.height;

const borderOffset = 10;

let speed = 5;

// RequestAnimateFreame FPS

let dropCounter = 0;
let dropInterval = 500; //milliseconds
let lastTime = 0;

//Collections for animate and check collisions

let collectionShoots = [];
let collectionAliens = [];
let collection = [];