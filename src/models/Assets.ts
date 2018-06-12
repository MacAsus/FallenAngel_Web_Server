import mongoose from "mongoose";

export type AssetsModel = mongoose.Document & {
    fileName: string,
    fileUrl: string,
    userEmail: string,
    job: string,
    type: string
};

const assetsSchema = new mongoose.Schema({
    fileName: String,
    fileUrl: String,
    userEmail: String,
    job: String,
    type: String
}, { timestamps: true });

const Assets = mongoose.model("Assets", assetsSchema);
export default Assets;