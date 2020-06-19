import RaceGameState from "../../GameCore/Race/RaceGameState";
import { CST } from "../CST";
import ClientRaceGameController from "../Race/ClientRaceGameController";
import RaceGameView from "../Race/raceGameView";

export default class LoopTestScene extends Phaser.Scene {
	//Loops
	lag: number;
	physTimestep: number;
	//Sockets
	socket: SocketIOClient.Socket;
	//Visual
	raceGameView: RaceGameView;
	//GameCore
	raceGame: ClientRaceGameController;
	//Buffer
	gameState: RaceGameState;

	constructor() {
		const sceneConfig = { key: CST.SCENES.LOOPTEST };
		super(sceneConfig);
	}

	init() {
		this.raceGame = new ClientRaceGameController();
		this.lag = 0;
		this.physTimestep = 15; //physics checks every 15ms (~66 times/sec - framerate is generally 60 fps)
		this.gameState = { players: [], items: [] };
		this.raceGameView = { players: [], items: [] };
		//this.initializeSocket();
	}

	create() {
		let starfield = this.add.tileSprite(0, 0, Number(this.game.config.width), Number(this.game.config.height), CST.IMAGES.BACKGROUD).setOrigin(0);
	}

	phys(currentframe: number) {
		//Server update
		if (this.gameState != null) {
			this.raceGame.setGameState(this.gameState);
			this.gameState = null;
		}

		//Prediction
		this.raceGame.update();
	}

	render() {}

	update(timestamp: number, elapsed: number) {
		//(i.e time, delta)
		this.lag += elapsed;
		while (this.lag >= this.physTimestep) {
			this.phys(this.physTimestep);
			this.lag -= this.physTimestep;
		}
		this.render();
	}

	//Socket initialization is temporarly here for loop tests.
	/*
	initializeSocket() {
		this.socket = io();
		this.socket.on("connect", () => {
			this.loopTestGame.addPlayer(this.socket.id);
		});
		this.socket.on("clientUpdate", (serverState) => {
			this.serverState = serverState;
			//console.log(serverState);
		});
	}*/
}
