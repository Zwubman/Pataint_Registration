import mongoose from "mongoose";
import express from "express";
import Pataint from "../Models/pataintModel.js";
import bcrypt from "bcryptjs";
import ExcelJS from "exceljs";

// Register Patient
export const registerPataint = async (req, res) => {
  const {
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
  } = req.body;
  const registerdBy = req.user.id;

  try {
    const isExist = await Pataint.findOne({ No });
    if (isExist) {
      return res.status(409).json({ error: "Patient already exists" });
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
      registerdBy,
    });

    await patient.save();
    res.status(200).json({ message: "Patient registered successfully" });
  } catch (error) {
    console.error("Unable to register the patient", error);
    res.status(500).json({ error: "Cannot register patient" });
  }
};

// Get All Patients Registered by Logged-in User
export const getAllPataints = async (req, res) => {
  const registerdBy = req.user.id;

  try {
    const patients = await Pataint.find({ registerdBy });

    if (!patients || patients.length === 0) {
      return res
        .status(404)
        .json({ message: "There are no registered patients here" });
    }

    res.status(200).json(patients);
  } catch (error) {
    console.error("Unable to fetch patients", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Download Excel for user's patients only
export const downloadPatientsExcel = async (req, res) => {
  const registerdBy = req.user.id;

  try {
    // Only fetch patients registered by the current user
    const patients = await Pataint.find({ registerdBy });

    if (!patients || patients.length === 0) {
      return res
        .status(404)
        .json({ message: "No patients found for download" });
    }

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Patients");

    // Define columns
    worksheet.columns = [
      { header: "No", key: "No", width: 10 },
      { header: "Name", key: "Name", width: 20 },
      { header: "MRN", key: "MRN", width: 15 },
      { header: "Age", key: "Age", width: 10 },
      { header: "Sex", key: "Sex", width: 10 },
      {
        header: "Clinical Presentation",
        key: "ClinicalPresentation",
        width: 30,
      },
      { header: "Diagnosis", key: "Diagnosis", width: 30 },
      { header: "Imaging Finding", key: "ImagingFinding", width: 30 },
      { header: "Surgeon", key: "Surgeon", width: 20 },
      { header: "Assistant", key: "Asistant", width: 20 },
      { header: "Anesthesia", key: "Ansthesia", width: 20 },
      { header: "Nurse", key: "Nurse", width: 20 },
      { header: "Duration of Surgery", key: "DurationOfSurgery", width: 20 },
      {
        header: "Duration of Anesthesia",
        key: "DurationOfAnsthesia",
        width: 20,
      },
      { header: "Outcome of Patient", key: "OutcomeOfPatient", width: 30 },
      { header: "Remark", key: "Remark", width: 30 },
    ];

    // Style the header row
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" },
    };

    // Add data rows
    patients.forEach((patient) => {
      worksheet.addRow(patient);
    });

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
      column.width = Math.max(column.width, 12);
    });

    // Set response headers
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=patients-${Date.now()}.xlsx`
    );

    // Write to response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error("Error generating Excel file:", error);
    res.status(500).json({ error: "Failed to generate Excel file" });
  }
};
