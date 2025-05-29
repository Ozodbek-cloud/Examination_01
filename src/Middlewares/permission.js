import { CustomError } from "../Utils/CustomError.js";
import { TransportModel } from "../Modules/Transport.module.js";
import { PermissionModel } from "../Modules/Permission.module.js";
import { StuffModel } from "../Modules/Stuff.module.js";

export default async (req, res, next) => {
    try {
        const action = {
            GET: "read",
            POST: "write",
            PUT: "update",
            DELETE: "delete"
        };

        const { role, _id } = req.user;

        
        let branch_id = req.body.branch_id || req.params.id || req.query.branch_id;
        const transport_id = req.body.transport_id || req.query.transport_id;
        const stuff_id = req.body.stuff_id || req.query.stuff_id;

        
        if (role === "SuperAdmin") {
            return next();
        }

        
        const permissionName = req.url.split("/").at(-1);

        
        if (transport_id) {
            const transport = await TransportModel.findById(transport_id);
            if (transport) {
                branch_id = transport.branch_id;
            }
        }

        if (stuff_id) {
            const stuff = await StuffModel.findById(stuff_id);
            if (stuff) {
                branch_id = stuff.branch_id;
            }
        }

        if (!branch_id) {
            throw new CustomError(400, "branch_id is required and could not be determined.");
        }

        const userPermission = await PermissionModel.findOne({
            user_id: _id,
            permissionModel: permissionName,
            branch_id: branch_id
        });

        if (!userPermission || !userPermission.actions.includes(action[req.method])) {
            throw new CustomError(403, "You are not allowed!!");
        }

        next();
    } catch (error) {
        next(error);
    }
};
