"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientErrorHandler = exports.errorLogger = void 0;
const errorLogger = (err, req, res, next) => {
    console.error(err);
    next(err);
};
exports.errorLogger = errorLogger;
const clientErrorHandler = (err, req, res, next) => {
    return res
        .status(500)
        .json({ error: true, msg: "Something went wrong on the server" });
};
exports.clientErrorHandler = clientErrorHandler;
//# sourceMappingURL=errorHandler.js.map