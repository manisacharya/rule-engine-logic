"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
//importing modules
const express_1 = __importDefault(require("express"));
const get_contoller_1 = require("../controllers/get.contoller");
//initiating the router
exports.router = express_1.default.Router();
exports.router.get('/', get_contoller_1.RuleController.getDefaultRoute);
exports.router.get('/rule', get_contoller_1.RuleController.getRuleConfig);
exports.router.get('/userRelationships', get_contoller_1.RuleController.getAllUserRelationship);
exports.router.get('/userRelationships/:userId', get_contoller_1.RuleController.getSpecificUserRelationship);
exports.router.get('/timesheet', get_contoller_1.RuleController.getTimesheetData);
exports.router.get('/matched-timesheet', get_contoller_1.RuleController.getMatchedTimesheetData);
exports.router.get('/precepted-notification/:userId', get_contoller_1.RuleController.getPreceptedNotification);
// //add post route
// router.post('/',PostController.addpost)
// //get posts
// router.get('/', PostController.getPosts)
// //get single post
// router.get('/:id', PostController.getAPost)
// //update a post
// router.put('/:id', PostController.updatePost)
// //delete a post
// router.delete('/:id', PostController.deletePost)
// router.get('/', (req, res) => {
//     let ruleConfig = {
//       "property": "precepted",
//       "threshold": 10,
//       "operator": ">",
//       "time": 30
//     };
//     console.log(`Follow up on team members who have ${ruleConfig.property} ${ruleConfig.operator} ${ruleConfig.threshold} times in past ${ruleConfig.time} days`);
//     res.send('Hello World!');
//   });
//# sourceMappingURL=get.route.js.map