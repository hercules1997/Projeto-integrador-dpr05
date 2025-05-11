
import DataTutor from '../models/DataTutor.js';


export async function createTutorService(data) {
  const tutor = new DataTutor(data);
  return await tutor.save();
}

export async function getTutorsService() {
  return await DataTutor.find().sort({ createdAt: -1 });
}
