"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleController = void 0;
//import modules
const get_service_1 = require("../services/get.service");
// import {PostschemaValidate} from '../Models/posts'
class ruleController {
    constructor() {
        // //add post controller
        // addpost = async (req: Request, res: Response) => {
        //     //data to be saved in database
        //     const data = {
        //         title: req.body.title,
        //         author: req.body.author,
        //         description: req.body.description,
        //         published: req.body.published
        //     }
        //     //validating the request
        //     const {error, value} = PostschemaValidate.validate(data)
        //     if(error){
        //         res.send(error.message)
        //     }else{
        //         //call the create post function in the service and pass the data from the request
        //         const post = await postServices.createPost(value)
        //         res.status(201).send(post)          
        //     }
        // }
        this.getDefaultRoute = (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send('Hello World!');
        });
        this.getRuleConfig = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const ruleConfig = get_service_1.ruleServices.getRuleConfig();
            res.send(ruleConfig);
        });
        this.getAllUserRelationship = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const allUserRelationship = get_service_1.ruleServices.getAllUserRelationshipConfig();
            res.send(allUserRelationship);
        });
        this.getSpecificUserRelationship = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            const specificUserRelationship = get_service_1.ruleServices.getSpecificUserRelationshipConfig(userId);
            res.send(specificUserRelationship);
        });
        this.getTimesheetData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // res.set('Access-Control-Allow-Origin', '*');
            // res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
            // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            const timesheetData = get_service_1.ruleServices.getTimesheetData();
            res.send(timesheetData);
        });
        this.getMatchedTimesheetData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const matchedTimesheetData = get_service_1.ruleServices.getMatchedTimesheetData();
            res.send(matchedTimesheetData);
        });
        this.getPreceptedNotification = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const userId = req.params.userId;
            const preceptedData = get_service_1.ruleServices.getPreceptedNotification(userId);
            res.send(preceptedData);
        });
    }
}
//export class
exports.RuleController = new ruleController();
//# sourceMappingURL=get.contoller.js.map