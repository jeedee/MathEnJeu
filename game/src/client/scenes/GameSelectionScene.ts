import { CST } from "../CST";
import { joinRoom } from "../services/RoomService";
import BaseSocketScene from "./BaseSocketScene";

export default class GameSelection extends BaseSocketScene {
	private createRoomButton: Phaser.GameObjects.Text;
	private publicRoomsButton: Phaser.GameObjects.Text;
	private joinPrivateRoomButton: Phaser.GameObjects.Text;
	private backButton: Phaser.GameObjects.Text;

	private privateRoomCodeInput: Phaser.GameObjects.DOMElement;

	constructor() {
		const sceneConfig = { key: CST.SCENES.GAME_SELECTION };
		super(sceneConfig);
	}

	init(data: any) {
		super.init(data);
	}

	create() {
		this.privateRoomCodeInput = this.add.dom(this.game.renderer.width * 0.4, this.game.renderer.height * 0.7).createFromCache(CST.HTML.ROOM_INPUT);

		this.add.tileSprite(0, 0, Number(this.game.config.width), Number(this.game.config.height), CST.IMAGES.BACKGROUD).setOrigin(0).setDepth(0);

		this.createRoomButton = this.add
			.text(this.game.renderer.width * 0.38, this.game.renderer.height * 0.2, "Create Room", {
				fontFamily: "Courier",
				fontSize: "64px",
				align: "center",
				color: "#FDFFB5",
				fontStyle: "bold",
			})
			.setInteractive({ useHandCursor: true });

		this.publicRoomsButton = this.add
			.text(this.game.renderer.width * 0.38, this.game.renderer.height * 0.4, "Public Rooms", {
				fontFamily: "Courier",
				fontSize: "64px",
				align: "center",
				color: "#FDFFB5",
				fontStyle: "bold",
			})
			.setInteractive({ useHandCursor: true });

		this.joinPrivateRoomButton = this.add
			.text(this.game.renderer.width * 0.6, this.game.renderer.height * 0.66, "Join Room", {
				fontFamily: "Courier",
				fontSize: "64px",
				align: "center",
				color: "#FDFFB5",
				fontStyle: "bold",
			})
			.setInteractive({ useHandCursor: true });

		this.backButton = this.add
			.text(10, 10, "<- back", {
				fontFamily: "Courier",
				fontSize: "32px",
				align: "center",
				color: "#FDFFB5",
				fontStyle: "bold",
			})
			.setInteractive({ useHandCursor: true });

		this.createRoomButton.on("pointerover", () => {
			this.createRoomButton.setTint(0xffff66);
		});

		this.createRoomButton.on("pointerout", () => {
			this.createRoomButton.clearTint();
		});

		this.createRoomButton.on("pointerdown", () => {
			this.createRoomButton.setTint(0x86bfda);
		});

		this.createRoomButton.on("pointerup", () => {
			this.createRoomButton.clearTint();
			this.scene.start(CST.SCENES.ROOM_CREATION);
		});

		this.publicRoomsButton.on("pointerover", () => {
			this.publicRoomsButton.setTint(0xffff66);
		});

		this.publicRoomsButton.on("pointerout", () => {
			this.publicRoomsButton.clearTint();
		});

		this.publicRoomsButton.on("pointerdown", () => {
			this.publicRoomsButton.setTint(0x86bfda);
		});

		this.publicRoomsButton.on("pointerup", () => {
			this.publicRoomsButton.clearTint();
			this.scene.start(CST.SCENES.ROOM_SELECTION);
		});

		this.joinPrivateRoomButton.on("pointerover", () => {
			this.joinPrivateRoomButton.setTint(0xffff66);
		});

		this.joinPrivateRoomButton.on("pointerout", () => {
			this.joinPrivateRoomButton.clearTint();
		});

		this.joinPrivateRoomButton.on("pointerdown", () => {
			this.joinPrivateRoomButton.setTint(0x86bfda);
		});

		this.joinPrivateRoomButton.on("pointerup", () => {
			this.joinPrivateRoomButton.clearTint();
			const roomId = (<HTMLInputElement>this.privateRoomCodeInput.getChildByName("roomField")).value;
			joinRoom(this.gameSocket, roomId);
		});

		this.backButton.on("pointerover", () => {
			this.backButton.setTint(0xffff66);
		});

		this.backButton.on("pointerout", () => {
			this.backButton.clearTint();
		});

		this.backButton.on("pointerdown", () => {
			this.backButton.setTint(0x86bfda);
		});

		this.backButton.on("pointerup", () => {
			this.backButton.clearTint();
			this.scene.start(CST.SCENES.USERS_SETTING);
		});
	}

	update() {}
}
