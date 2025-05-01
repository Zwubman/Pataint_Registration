import mongoose from 'mongoose';
import express from 'express';
import Pataint from '../Models/pataintModel.js';
import bcrypt from 'bcryptjs';

// Register Patient
export const registerPataint = async (req, res) => {
    const {
        No, Name, MRN, Age, Sex, ClinicalPresentation,
        Diagnosis, ImagingFinding, Surgeon, Asistant,
        Ansthesia, Nurse, DurationOfSurgery, DurationOfAnsthesia,
        OutcomeOfPatient, Remark
    } = req.body;
    const registerdBy = req.user._id;

    try {
        const isExist = await Pataint.findOne({ No });
        if (isExist) {
            return res.status(409).json({ error: 'Patient already exists' });
        }

        const patient = new Pataint({
            No,
            Name,
            MRN,
            Age,
            Sex,
            ClinicalPresentation,
            Diagnosis,
            ImagingFinding,
            Surgeon,
            Asistant,
            Ansthesia,
            Nurse,
            DurationOfSurgery,
            DurationOfAnsthesia,
            OutcomeOfPatient,
            Remark,
            registerdBy
        });

        await patient.save();
        res.status(200).json({ message: 'Patient registered successfully' });
    } catch (error) {
        console.error('Unable to register the patient', error);
        res.status(500).json({ error: 'Cannot register patient' });
    }
}

// Get All Patients Registered by Logged-in User
export const getAllPataints = async (req, res) => {
    const registerdBy = req.user._id;  

    try {
        const patients = await Pataint.find({ registerdBy });

        if (!patients || patients.length === 0) {
            return res.status(404).json({ message: 'There are no registered patients here' });
        }

        res.status(200).json(patients);
    } catch (error) {
        console.error('Unable to fetch patients', error);
        res.status(500).json({ error: 'Server error' });
    }
}

