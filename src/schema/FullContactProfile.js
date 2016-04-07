import mongoose from "mongoose";

export default ()=> {
    mongoose.model("FullContactProfile", {
        "email"        : String,
        "lastImported" : Date
    }
};
