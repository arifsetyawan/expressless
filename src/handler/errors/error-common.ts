import express from 'express';

export class ErrorCommon {

    constructor() {
    }

    static route(): express.Router {
        let router = express.Router();
        router.use((req, res, next) => {
            return res.status(404).json({
                error: "Not Found",
            });
        });
        return router
    }

}
