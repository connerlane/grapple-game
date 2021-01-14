"use strict";

var canvas;
var ctx;
var hud;
var hudctx;
var game;

class Game {
  constructor() {
    this.controller = new Controller();
    this.player = new Player(this.controller);
    this.camera = new Camera(this.player);
    this.hud = new Hud(this.player);
    this.setupLevel(LEVEL_1);

    // this.level.setDefaultValues();
    this.renderer = new Renderer(this.level, ctx, this.camera);
    window.addEventListener('mousedown', (event) => this.controller.handleMouseDown(event));
    window.addEventListener('mouseup', (event) => this.controller.handleMouseUp(event));
    window.addEventListener('mousemove', (event) => this.controller.updateMousePos(event));
    window.addEventListener('keydown', (event) => this.controller.handleKeyDown(event));
    window.addEventListener('keyup', (event) => this.controller.handleKeyUp(event));
    window.addEventListener('contextmenu', (event) => this.controller.preventRightClickMenu(event));
  }

  setupLevel(level) {
    this.level = level;
    this.level.camera = this.camera;
    this.level.controller = this.controller;
    this.level.player = this.player;
    this.player.x = this.level.playerStartX;
    this.player.y = this.level.playerStartY;
    this.level.actors.push(this.player);
  }
}

window.onload = function init() {
  canvas = document.getElementById('canvas');
  hud = document.getElementById('hud');
  ctx = canvas.getContext('2d');
  hudctx = hud.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  hud.width = canvas.width;
  hud.height = canvas.height;
  game = new Game();
  window.requestAnimationFrame(loop);
}

function loop() {
  game.level.update();
  game.renderer.render();
  game.hud.maybeUpdate();
  window.requestAnimationFrame(loop);
}