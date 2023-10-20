
export interface Diagnosis {
    code: String;
    name: String;
    latin?: String;
}

export interface Patient {
    id: Number;
    name: String;
    dateOfBirth: String;
    ssn: String;
    gender: String;
    occupation: String;
}