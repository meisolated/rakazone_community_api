import mongoose from "mongoose"
import config from "../config"
export default connection = mongoose.createConnection(config.mongoUri)


