import { isAfter } from 'date-fns';

export class Food {
    expirationDate: Date;
    approvedForConsumption: Boolean;
    inspectorId: String;

    constructor(init?:Partial<Food>) {
        Object.assign(this, init);
    };

    isEdible(now: Date): Boolean {
        if (isAfter(this.expirationDate, now) &&
            this.approvedForConsumption &&
            this.inspectorId != null) {
            return true;
        } else {
            return false;
        }
    };

}