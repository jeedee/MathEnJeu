import { StatusState } from "../../../../communication/race/PlayerState";
import Status from "./Status";
import StatusFactory from "./StatusFactory";
import { StatusType } from "./StatusType";

export default class NormalStatus extends Status {
	constructor() {
		super();
	}

	public update(): void {}

	public updateFromState(statusState: StatusState): void {
		switch (statusState.statusType) {
			case StatusType.NormalStatus:
				break;
			case StatusType.BananaStatus:
				this.context.transitionTo(StatusFactory.create(StatusType.BananaStatus, statusState.statusTimestamp));
				break;
			case StatusType.BrainiacStatus:
				this.context.transitionTo(StatusFactory.create(StatusType.BrainiacStatus, statusState.statusTimestamp));
				break;
		}
	}

	public activateBananaStatus(): void {
		this.context.transitionTo(StatusFactory.create(StatusType.BananaStatus));
	}

	public activateBrainiacStatus(): void {
		this.context.transitionTo(StatusFactory.create(StatusType.BrainiacStatus));
	}

	public getRemainingTime(): number {
		return 0;
	}

	public getCurrentStatus(): StatusType {
		return StatusType.NormalStatus;
	}
}
