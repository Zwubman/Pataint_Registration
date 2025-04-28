import mongoose from "mongoose";


const PataintsSchema = new mongoose.Schema({
     No:{
            type: Number,
            allowNull: true,
            primaryKey: true,
            unique: true,
    
        },
        Name: {
            type:String,
            allowNull: false,
    
        },
        MRN: {
            type: String,
            allowNull: false
        },
        Age: {
            type: Number,
            allowNull:false
        },
        Sex: {
            type: String,
            enum: ['Male', 'Female'],
            allowNull: false
        },
        ClinicalPresentation:{
            type: String,
            allowNull: false
        },
        Diagnosis: {
            type: String,
            allowNull: false
        },
        ImagingFinding:{
            type: String,
            allowNull: false
        },
        Surgeon: {
            type: String,
            allowNull: false
        },
        Asistant: {
            type: String,
            allowNull: false
        },
        Ansthesia: {
            type: String,
            allowNull: false
        },
        Nurse: {
            type: String,
            allowNull: false
        },
        DurationOfSurgery: {
            type: Date,
            allowNull: false
        },
        DurationOfAnsthesia: {
            type: Date,
            allowNull: false
        },
        OutcomeOfPatient: {
            type: String,
            allowNull: false
        },
        Remark: {
            type: String,
            allowNull: false
        },
        // Add foreign key to relate to User
        registerdBy: {
            type: mongoose.Schema.Types.ObjectId,
            allowNull: false,
            references: {
                model: 'Users',  
                key: '_id'
            }
        }
});


const Pataint = mongoose.model("Pataint", PataintsSchema);
export default Pataint;