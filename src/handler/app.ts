import express from "express";
import {ErrorCommon} from "./errors/error-common";

export class App {
    private app: express.Express;

    constructor() {
        this.app = express();
    }

    run(): express.Application {
        this.app.get("/", (req, res, next) => {
            return res.status(200).json({
                message: "Hello from root!",
            });
        });

        this.app.get("/hello", (req, res, next) => {
            return res.status(200).json({
                message: "Hello from path!",
            });
        });

        this.app.use("/lost", ErrorCommon.route());

        return this.app
    }
}
