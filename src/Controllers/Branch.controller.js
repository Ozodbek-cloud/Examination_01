import logger from "../Log/Logger.js";
import { BranchService } from "../Services/Branch.service.js";

class BranchController{
    constructor() {}

    async CreateBranch(req, res, next) {
        try{
             let newBranch = BranchService.AddBranch(req.body)

             logger.info(`New Branch created!`);

             res.status(201).json({
             status: 201,
             message: "success",
             data: newBranch,
             success:true
             })

        } catch(error) {
            logger.error(`Create Branch error: ${error.message}`)
            next(error)
        }
    }
    async ChangeBranch(req, res, next) {
        try{
            const { id } = req.params
            const { name, address} = req.body
            
            const change = { name, address}

          const ChangedBranch =  await BranchService.changeBranch(id, change)

           logger.info(`Branch updated: ${name}`);

           res.status(202).json({
            message: "success",
            data: ChangedBranch,
            success: true
           })

        } catch(error) {
            logger.error(`Change Branch error: ${error.message}`)
            next(error)
        }
    }
     async DeleteBranch(req, res, next) {
        try {
            const { id } = req.params
         
          const deletedBranch = await BranchService.DeleteBranch(id);

          logger.info(`Branch deleted: ${id}!`);

          return res.status(200).json({
            message: 'success',
            data: deletedBranch,
            success: true
          });

        } catch (error) {
          logger.error(` Delete Branch error: ${error.message}`)
          next(error)
        }
      }
      async AllBranches(req, res, next) {
        try {
          const all = await BranchService.GetBranches();

          logger.info(`All Branches are Get`);

          res.status(200).json({
            message: "success",
            data: all,
            success: true
          });
        } catch (error) {
          console.log(`Get branches error: ${error.message}`);
          next(error);
        }
      }
        async GetBranchById(req, res, next) {
            try {
            const { id } = req.params
            if (!id) {
              res.status(200).json({
                message: "Invalid id",
                success: false
              })
            }
            const branch = await BranchService.GetBranchById(id);
            
            logger.info(`Branch get One SuccessFully ${id}`)

            return res.status(200).json({
                message: 'success',
                data: branch,
                success: true
            });

            } catch (error) {
            logger.error(`GetById Branch Error: ${id}`);
            next(error);
            }
        }   
}
let BranchContr = new BranchController()

export default BranchContr