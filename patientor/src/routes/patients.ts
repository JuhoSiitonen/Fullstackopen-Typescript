import express from 'express';
import patientService from '../services/patientService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getNonSensitivePatients());
});

router.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender, occupation } = req.body;

  const addedPatient = patientService.addPatient(
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  );
  console.log("postaus toimii");
  res.json(addedPatient);
});

export default router;