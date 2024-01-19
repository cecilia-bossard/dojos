import { isAfter } from "date-fns";

export class Food {
  expirationDate: Date;
  approvedForConsumption: Boolean;
  inspectorUuid: String;

  constructor(
    expirationDate: Date,
    approvedForConsumption: Boolean,
    inspectorUuid: String
  ) {
    this.expirationDate = expirationDate;
    this.approvedForConsumption = approvedForConsumption;
    this.inspectorUuid = inspectorUuid;
  }

  isEdible(date: Date): Boolean {
    return (
      this.isExpired(date) &&
      this.isApprovedForConsumption() &&
      this.hasBeenInspected()
    );
  }

  private hasBeenInspected(): Boolean {
    return this.inspectorUuid != null;
  }

  private isExpired(date: Date): Boolean {
    return isAfter(this.expirationDate, date);
  }

  private isApprovedForConsumption(): Boolean {
    return this.approvedForConsumption;
  }
}
