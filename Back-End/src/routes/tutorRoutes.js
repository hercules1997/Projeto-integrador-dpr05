import express from 'express';
import {
  createTutor,
  getTutors,
  getTutorByProtocolId,
  updateTutorByProtocolId,
  deleteTutorByProtocolId,
} from '../controllers/tutorController.js';

import { validateTutor } from '../middlewares/validateTutorYup.js'; // middleware yup

export const tutorRouter = express.Router();

tutorRouter.post('/', validateTutor, createTutor);

tutorRouter.get('/', getTutors);
tutorRouter.get('/:protocol_Id', getTutorByProtocolId);

tutorRouter.put('/:protocol_Id', updateTutorByProtocolId);

tutorRouter.delete('/:protocol_Id', deleteTutorByProtocolId);
