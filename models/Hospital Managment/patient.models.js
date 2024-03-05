import mongoose from 'mongoose';
import { Hospital } from '../Hospital Managment/hospital.models';

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagosedWidth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Hospital,
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model('Patient', patientSchema);
