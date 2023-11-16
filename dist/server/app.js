"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_route_1 = require("../routes/get.route");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 4000;
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
//middlewares
app.use((0, cors_1.default)(options));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//routes
app.use('/', get_route_1.router);
app.use('/rule', get_route_1.router);
app.use('/userRelationships', get_route_1.router);
app.use('/userRelationships/:userId', get_route_1.router);
app.use('/timesheet', get_route_1.router);
app.use('/matched-timesheet', get_route_1.router);
app.use('/precepted-notification/:userId', get_route_1.router);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map