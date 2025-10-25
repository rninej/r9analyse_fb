import * as cdk from "aws-cdk-lib";
import { AppStack } from "./app-stack";

const app = new cdk.App();

new AppStack(app, "FreechessWebapp", {
  // TODO: Replace with your AWS account number
  env: { region: "eu-west-3", account: "123456789012" },
  domainName: "chesskit.org",
  pagePaths: ["play", "database", "review"],
});
