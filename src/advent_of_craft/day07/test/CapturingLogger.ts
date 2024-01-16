export class CapturingLogger implements Logger {
    lines: Array<string> = [];
    
    info(message: string) {
        this.lines.push("INFO: " + message);
    }

    error(message: string) {
        this.lines.push("ERROR: " + message);
    }

    getLoggedLines(): Array<string> {
        return this.lines;
    }

    clear() {
        this.lines = [];
    }
}