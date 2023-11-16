//importing modules
import express from "express";
import { RuleController } from '../controllers/get.contoller';

//initiating the router
export const router = express.Router()

router.get('/', RuleController.getDefaultRoute);

router.get('/rule', RuleController.getRuleConfig);
router.get('/userRelationships', RuleController.getAllUserRelationship);
router.get('/userRelationships/:userId', RuleController.getSpecificUserRelationship);
router.get('/timesheet', RuleController.getTimesheetData);
router.get('/matched-timesheet', RuleController.getMatchedTimesheetData);
router.get('/precepted-notification/:userId', RuleController.getPreceptedNotification);
  