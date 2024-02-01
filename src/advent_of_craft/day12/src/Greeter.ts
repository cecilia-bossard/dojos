export class Greeter {
  formality: string;

  greet(): string {
    if (this.formality == null) {
      return "Hello.";
    }

    if (this.formality === "formal") {
      return "Good evening, sir.";
    } else if (this.formality === "casual") {
      return "Sup bro?";
    } else if (this.formality === "intimate") {
      return "Hello Darling!";
    } else {
      return "Hello.";
    }
  }

  setFormality(formality: string) {
    this.formality = formality;
  }
}
