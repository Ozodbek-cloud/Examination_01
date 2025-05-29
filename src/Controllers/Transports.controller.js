import logger from "../Log/Logger.js";
import { TransportService } from "../Services/Transport.service.js";
import { CustomError } from "../Utils/CustomError.js";

class TransportController{
    constructor() {}
        
 
    async CreateTransport(req, res, next) {
        try{
          let newTransport = await TransportService.AddTransport(req.body, req.files.img)
          res.status(201).json({
            message: "success",
            data: newTransport,
            success: true
          })
        } catch(error) {
            logger.error(`Create Transport error: ${error.message}`);
            next(error)
        }
    }
    async DeleteTransport(req, res, next)  {
        try{
           const { id } = req.params

           const deelle = await TransportService.deletetransport(id)

           res.status(200).json({
            message: "success",
            data: deelle,
            success: true
           })

        } catch(error) {
            logger.error(`Delete Transport error: ${error.message}`);
            next(error)
        }
    }
    async UpdatedTransport(req, res, next ){
        try{
           const { id } = req.params;
           const { model, color, price } = req.body

           const updatedData = { model, color, price }

           const data_one = await TransportService.updatetransport(id, updatedData)

           logger.info(`Updated Transport Successfully!`)

           res.status(200).json({
            message: "success",
            data: data_one,
            success: true // --> Azizbek ustoz ni usuli!
           })

        } catch(error) {
            logger.error(`Update Transport error: ${req.name}`)
            next(error)
        }
    }
    async Search(req, res, next) {
        try{
              const { model } = req.query
              const name_of_tr = { model  }

              if(!name_of_tr) {
                throw new CustomError(400, "Error at name")
              }

              const transport = await TransportService.search(name_of_tr)
             
            logger.info(`Successfully find name of transport!`)

            res.status(200).json({
                message: "success",
                data: transport,
                success: true
            })

        } catch(error) {
            logger.error(`Seach Transport error: ${error.message}`)
            next(error)
        }
    }
    async FindAll(req, res, next) {
        try{
           const result = await TransportService.find()
           
           res.status(200).json({
            message: "success",
            data: result,
            success: true
        })

        } catch(error) {
            logger.error(`FInd Transport error: ${error.message}`)
            next(error)
        }
    }
}

const Tranport = new TransportController()

export default Tranport