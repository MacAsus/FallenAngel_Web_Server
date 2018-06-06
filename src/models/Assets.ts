import mongoose from "mongoose";

export type AssetsModel = mongoose.Document & {
    fileName: string,
    fileUrl: string,
    userEmail: string,
};

const assetsSchema = new mongoose.Schema({
    fileName: String,
    fileUrl: String,
    userEmail: String,
}, { timestamps: true });

const Assets = mongoose.model("Assets", assetsSchema);
export default Assets;