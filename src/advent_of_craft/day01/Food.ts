import { isAfter } from 'date-fns';

export class Food {
    expirationDate: Date;
    approvedForConsumption: Boolean;
    inspectorId: String;

    constructor(expirationDate: Date, approvedForConsumption: Boolean, inspectorId: String) {
        this.expirationDate= expirationDate;
        this.approvedForConsumption = approvedForConsumption;
        this.inspectorId = inspectorId;
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