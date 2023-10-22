import patientData from '../data/patients';
import { Patient, NonSensitivePatient } from '../types';
import { v1 as uuid } from 'uuid';

const getPatients = (): Patient[] => {
    return patientData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientData.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = ( 
    name: string, dateOfBirth: string, ssn: string, gender: string, occupation: string 
    ) : Patient => {
    const newPatient = {
        id: uuid(),
        name,
        dateOfBirth,
        ssn,
        gender,
        occupation
    }
  patientData.push(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient
};