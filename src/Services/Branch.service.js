import { branchModel } from "../Modules/Branch.module.js";
import { CustomError } from "../Utils/CustomError.js";


 export class BranchService{
    constructor() {}

    static async AddBranch(payload) {
      
      let branch = await branchModel.create(payload)
      return branch
    }
    static async changeBranch(id, update) {
          if (!id) {
            throw new CustomError(400, "Xato !")
          }
          const updatedUser = await branchModel.findByIdAndUpdate(id, update, { new: true })
          return updatedUser;
      
  }

  static async DeleteBranch(id) {
     if (!id) {
      throw new CustomError(404, "Id is ruquired!")
     }                                                
    const deletedBranch = await branchModel.findByIdAndDelete(id);

    if (!deletedBranch) {
      throw new CustomError(400, 'Branch not found');
    }
    
    return deletedBranch;
  }
  
  static async GetBranches() {
    let allBranches = await branchModel.find()
    if (!allBranches) throw new CustomError(404, "There is no Branches")
    return allBranches
  }

  static async GetBranchById(id) {
     if (!id) {
      throw new CustomError(400, "Id is required!")
     }

    const branch = await branchModel.findById(id);

    if (!branch) {
      throw new CustomError(404, 'Branch not found');
    }

    return branch;
  }
 }