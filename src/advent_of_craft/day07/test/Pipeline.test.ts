import { Pipeline } from "../src/Pipeline";
import { Project } from "../src/dependencies/Project";
import { TestStatus } from "../src/dependencies/TestStatus";
import { CapturingLogger } from "./CapturingLogger";

const sendEmailSummary = jest.fn();
const send = jest.fn();

describe("Pipeline tests", () => {

    const config: jest.Mocked<Config> = {
        sendEmailSummary
    };
    const emailer: jest.Mocked<Emailer> = {
        send
    };
    let log: CapturingLogger = new CapturingLogger();

    let pipeline: Pipeline;

    beforeAll(() => {
        pipeline = new Pipeline(config, emailer, log);
    });

    beforeEach(() => {
        jest.clearAllMocks();
        log.clear();
    });

    it('project with tests that deploys successfully with email notification', () => {
        sendEmailSummary.mockReturnValueOnce(true); 

        let project = Project.builder()
                .setTestStatus(TestStatus.PASSING_TESTS)
                .setDeploysSuccessfully(true)
                .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: Tests passed",
            "INFO: Deployment successful",
            "INFO: Sending email"
        ]);

        expect(send).toHaveBeenCalledWith("Deployment completed successfully");
    });



    it('project_with_tests_that_deploys_successfully_without_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(false); 

        let project = Project.builder()
            .setTestStatus(TestStatus.PASSING_TESTS)
            .setDeploysSuccessfully(true)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: Tests passed",
            "INFO: Deployment successful",
            "INFO: Email disabled"
        ]);

        expect(send).not.toHaveBeenCalled()
    });

    it('project_without_tests_that_deploys_successfully_with_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(true); 

        let project = Project.builder()
            .setTestStatus(TestStatus.NO_TESTS)
            .setDeploysSuccessfully(true)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: No tests",
            "INFO: Deployment successful",
            "INFO: Sending email"
        ]);

        expect(send).toHaveBeenCalledWith("Deployment completed successfully");
    });

    it('project_without_tests_that_deploys_successfully_without_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(false); 

        let project = Project.builder()
            .setTestStatus(TestStatus.NO_TESTS)
            .setDeploysSuccessfully(true)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: No tests",
            "INFO: Deployment successful",
            "INFO: Email disabled"
        ]);

        expect(send).not.toHaveBeenCalled()
    });

    it('project_with_tests_that_fail_with_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(true); 

        let project = Project.builder()
            .setTestStatus(TestStatus.FAILING_TESTS)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "ERROR: Tests failed",
            "INFO: Sending email"
        ]);

        expect(send).toHaveBeenCalledWith("Tests failed");
    });

    it('project_with_tests_that_fail_without_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(false); 

        let project = Project.builder()
            .setTestStatus(TestStatus.FAILING_TESTS)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "ERROR: Tests failed",
            "INFO: Email disabled"
        ]);

        expect(send).not.toHaveBeenCalled()
    });

    it('project_with_tests_and_failing_build_with_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(true); 

        let project = Project.builder()
            .setTestStatus(TestStatus.PASSING_TESTS)
            .setDeploysSuccessfully(false)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: Tests passed",
            "ERROR: Deployment failed",
            "INFO: Sending email"
        ]);

        expect(send).toHaveBeenCalledWith("Deployment failed");
    });

    it('project_with_tests_and_failing_build_without_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(false); 

        let project = Project.builder()
            .setTestStatus(TestStatus.PASSING_TESTS)
            .setDeploysSuccessfully(false)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: Tests passed",
            "ERROR: Deployment failed",
            "INFO: Email disabled"
        ]);

        expect(send).not.toHaveBeenCalled();
    });

    it('project_without_tests_and_failing_build_with_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(true); 

        let project = Project.builder()
            .setTestStatus(TestStatus.NO_TESTS)
            .setDeploysSuccessfully(false)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: No tests",
            "ERROR: Deployment failed",
            "INFO: Sending email"
        ]);

        expect(send).toHaveBeenCalledWith("Deployment failed");
    });

    it('project_without_tests_and_failing_build_without_email_notification', () => {
        sendEmailSummary.mockReturnValueOnce(false); 

        let project = Project.builder()
            .setTestStatus(TestStatus.NO_TESTS)
            .setDeploysSuccessfully(false)
            .build();

        pipeline.run(project);

        expect(log.getLoggedLines()).toStrictEqual([
            "INFO: No tests",
            "ERROR: Deployment failed",
            "INFO: Email disabled"
        ]);

        expect(send).not.toHaveBeenCalled();
    });
})