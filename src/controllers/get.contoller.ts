//import modules
import { ruleServices } from '../services/get.service'
import { Request, Response } from 'express'

// import {PostschemaValidate} from '../Models/posts'

class ruleController {
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


    getDefaultRoute = async (req: Request, res: Response) => {
        res.send('Hello World!');
    }

    getRuleConfig = async (req: Request, res: Response) => {
        const ruleConfig = ruleServices.getRuleConfig();
        res.send(ruleConfig);
    }

    getAllUserRelationship = async (req: Request, res: Response) => {
        const allUserRelationship = ruleServices.getAllUserRelationshipConfig();
        res.send(allUserRelationship);
    }

    getSpecificUserRelationship = async (req: Request, res: Response) => {
        const userId = req.params.userId;

        const specificUserRelationship = ruleServices.getSpecificUserRelationshipConfig(userId);
        res.send(specificUserRelationship);
    }
    
    getTimesheetData = async (req: Request, res: Response) => {
        const timesheetData = ruleServices.getTimesheetData();
        res.send(timesheetData);
    }

    getMatchedTimesheetData = async (req: Request, res: Response) => {
        const matchedTimesheetData = ruleServices.getMatchedTimesheetData();
        res.send(matchedTimesheetData);
    }

    getPreceptedNotification = async (req: Request, res: Response) => {
        const userId = req.params.userId;

        const preceptedData = ruleServices.getPreceptedNotification(userId);
        res.send(preceptedData);
    }
}

//export class
export const RuleController = new ruleController()