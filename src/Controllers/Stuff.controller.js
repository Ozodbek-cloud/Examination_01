import logger from "../Log/Logger.js";
import { StuffService } from "../Services/Stuff.service.js";


class StuffController {
    constructor() {}

    async createStuff(req, res, next) {
        try {
            const newStuff = await StuffService.addStuff(req.body);
            
            logger.info(`New stuff created: ${newStuff}`);
            
            res.status(201).json({
                message: "success",
                data: newStuff,
                success: true
            });
        } catch(error) {
            logger.error(`Create stuff error: ${error.message}`);
            next(error);
        }
    }

    async Loginstuff(req, res, next) {
        try{
           const result = await StuffService.login(req.body)
           
           logger.info(`New stuff created: ${result}`);

           res.status(200).json({
            message: "success",
            data: result,
            success: true
           })

        } catch(error) {
            logger.error(`Create stuff error: ${error.message}`);
            next(error)
        }
    }

    async changeStuff(req, res, next) {
        try {
            const { id } = req.params;
            const { password, gender } = req.body;

            const updateData = { password, gender };
            const updated = await StuffService.changeStuff(id, updateData);
            
            logger.info(`Stuff updated: ${id}`);
            
            res.status(200).json({
                message: "Successfully updated",
                data: updated,
                success: true
            });
        } catch(error) {
            logger.error(`Change stuff error: ${error.message}`);
            next(error);
        }
    }
    
    async DeleteStuff(req, res, next) {

        try{
           const { id } = req.params
           const deleted = await StuffService.Deletestuff(id)
           res.status(200).json({
            message: "Successfully Deleted",
            data: deleted,
            success: true
        });
        } catch(error) {
            logger.error(`Change stuff error: ${error.message}`);
            next(error)
        }
    }

    async getProfile(req, res, next) {
        try {
            const { token } = req.headers;
            
            if (!token) {
                res.status(400).json("Token is Invalid")
            }

            const stuff = await StuffService.getProfileById(token);
            
            res.status(200).json({ 
                success: true, 
                data: stuff 
            });
        } catch (err) {
            logger.error(`Get profile error: ${err.message}`);
            next(err);
        }
    }
}

const stuffController = new StuffController();
export default stuffController;