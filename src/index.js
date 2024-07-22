import "./styles/style.scss";

import Page from "./js/page.js";
/**
 * Variables
 */
const board = document.querySelector(".board");
const initiateButton = document.querySelector(".initiate-game-btn");
const mondaBox = document.querySelector(".modal-box");
const landingButton = document.querySelector(".landing-btn");
const story1Button = document.querySelector(".story1-next-btn");
const story2Button = document.querySelector(".story2-next-btn");
const story3Button = document.querySelector(".story3-next-btn");
const startButton = document.querySelector(".start-game-btn");
const restartButton = document.querySelector(".restart-game-btn");
const closetDoors = document.querySelector(".monster-closet");

let page = new Page();
