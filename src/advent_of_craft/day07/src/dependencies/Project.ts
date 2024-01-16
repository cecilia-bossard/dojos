import { TestStatus } from "./TestStatus";

export class Project {
    buildsSuccessfully: boolean;
    testStatus: TestStatus;

    constructor(buildsSuccessfully: boolean, testStatus: TestStatus) {
        this.buildsSuccessfully = buildsSuccessfully;
        this.testStatus = testStatus;
    }

    static builder(): ProjectBuilder {
        return new ProjectBuilder();
    }

    hasTests(): boolean {
        return this.testStatus != TestStatus.NO_TESTS;
    }

    runTests(): string {
        return this.testStatus == TestStatus.PASSING_TESTS ? "success" : "failure";
    }

    deploy(): string {
        return this.buildsSuccessfully ? "success" : "failure";
    }
}

class ProjectBuilder {
    buildsSuccessfully: boolean;
    testStatus: TestStatus;

    setTestStatus(testStatus: TestStatus): ProjectBuilder {
        this.testStatus = testStatus;
        return this;
    }

    setDeploysSuccessfully(buildsSuccessfully: boolean): ProjectBuilder {
        this.buildsSuccessfully = buildsSuccessfully;
        return this;
    }

    build(): Project {
        return new Project(this.buildsSuccessfully, this.testStatus);
    }
}