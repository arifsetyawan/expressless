import serverless from "serverless-http";
import {App} from "../handler/app";
const app = new App().run();
export const handler = serverless(app);
