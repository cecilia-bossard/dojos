import { Project } from "./dependencies/Project";

const SUCCESS = "success";

const TEST_FAILED = "Tests failed";
const EMAIL_DISABLED = "Email disabled";
const SENDING_EMAIL = "Sending email";
const NO_TESTS = "No tests";
const TESTS_PASSED = "Tests passed";

const DEPLOYMENT_COMPLETED_SUCCESSFULLY = "Deployment completed successfully";
const DEPLOYMENT_SUCCESSFUL = "Deployment successful";
const DEPLOYMENT_FAILED = "Deployment failed";
export class Pipeline {
  config: Config;
  emailer: Emailer;
  log: Logger;

  constructor(init?: Partial<Pipeline>) {
    Object.assign(this, init);
  }

  run(project: Project) {
     const testsPassed = this.runTests(project);
    if (!testsPassed) {
      this.sendMail(TEST_FAILED);
      return;
    }
    if (!this.isDeploySuccessfull(project)) {
      this.sendMail(DEPLOYMENT_FAILED);
      return;
    }
    this.sendMail(DEPLOYMENT_COMPLETED_SUCCESSFULLY);
  }

  private runTests(project: Project): boolean {
    if (!project.hasTests()) {
      this.log.info(NO_TESTS);
      return true;
    }
    if (SUCCESS === project.runTests()) {
      this.log.info(TESTS_PASSED);
      return true;
    }
    this.log.error(TEST_FAILED);
    return false;
  }

  private isDeploySuccessfull(project: Project): boolean {
    if (SUCCESS === project.deploy()) {
      this.log.info(DEPLOYMENT_SUCCESSFUL);
      return true;
    }
    this.log.error(DEPLOYMENT_FAILED);
    return false;
  }

  private sendMail(message: string) {
    if (this.config.sendEmailSummary()) {
      this.log.info(SENDING_EMAIL);
      this.emailer.send(message);
    } else {
      this.log.info(EMAIL_DISABLED);
    }
  }
}
