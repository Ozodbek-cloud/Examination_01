import express from "express"
import "dotenv/config"
import { connectDB } from "./Config/Database.js"
import MainRoutes from "./Routes/Main.routes.js"
import logger from "./Log/Logger.js"
import fileUpload from "express-fileupload"
const app = express()

app.use(express.json())
app.use(fileUpload())
await connectDB()

const port = process.env.PORT || 4000

app.use(MainRoutes.UserRouter)
app.use(MainRoutes.BranchRouter)
app.use(MainRoutes.StuffRouter)
app.use(MainRoutes.TranportRouter)
app.use(MainRoutes.AdminRouter)
app.use(MainRoutes.AdminPermRoutes)
app.use(MainRoutes.PermissionRouter)

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error";

  if (status < 500) {
    return res.status(status).json({
      status,
      message
    });
  }

  logger.error(error); 

  res.status(500).json({
    status: 500,
    message: "Internal server error"
  });
});





app.listen(port, () => {
    console.log("Server is running on 4545 - port!")
})