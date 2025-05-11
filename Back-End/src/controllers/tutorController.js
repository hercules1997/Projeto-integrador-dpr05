import tutorValidationSchema from '../middlewares/schemas/tutorValidationSchema.js';
import DataTutor from '../models/DataTutor.js';
import * as yup from 'yup';

//* Função para criar um tutor

const createTutor = async (req, res) => {
  try {
    // Validação com yup
    await tutorValidationSchema.validate(req.body, { abortEarly: false });

    // Criar o novo tutor com os dados enviados (protocol_Id será gerado automaticamente)
    const tutor = new DataTutor(req.body);
    await tutor.save();

    // Responder com o tutor recém-criado (incluindo o protocol_Id gerado)
    res.status(201).json(tutor);
  } catch (error) {
    if (error instanceof yup.ValidationError) {
      const errorMessages = error.inner.map((err) => ({
        field: err.path,
        message: err.message,
      }));
      return res.status(400).json({ errors: errorMessages });
    }

    console.error(error);
    res
      .status(500)
      .json({ message: 'Erro ao criar tutor', error: error.message });
  }
};

//* Função para buscar todos os tutores com paginação
const getTutors = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const tutors = await DataTutor.find()
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await DataTutor.countDocuments();
    const totalPages = Math.ceil(total / limit);

    res.json({
      tutors,
      page: Number(page),
      totalPages,
      total,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Erro ao buscar tutores', error: error.message });
  }
};

//* Função para buscar tutor por protocol_Id
const getTutorByProtocolId = async (req, res) => {
  try {
    const protocolId = parseInt(req.params.protocol_Id);

    if (isNaN(protocolId)) {
      return res.status(400).json({ message: 'protocol_Id inválido' });
    }

    const tutor = await DataTutor.findOne({ protocol_Id: protocolId });

    if (!tutor) {
      return res.status(404).json({ message: 'Tutor não encontrado' });
    }

    res.status(200).json(tutor);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Erro ao buscar tutor', error: error.message });
  }
};

//* Função para atualizar tutor por protocol_Id
const updateTutorByProtocolId = async (req, res) => {
  try {
    const protocolId = parseInt(req.params.protocol_Id);

    if (isNaN(protocolId)) {
      return res.status(400).json({ message: 'protocol_Id inválido' });
    }

    const updatedTutor = await DataTutor.findOneAndUpdate(
      { protocol_Id: protocolId },
      req.body,
      { new: true, runValidators: true },
    );

    if (!updatedTutor) {
      return res.status(404).json({ message: 'Tutor não encontrado' });
    }

    res.status(200).json({
      message: 'Tutotr alterado com sucesso!!',
      tutorModificado: updatedTutor,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Erro ao atualizar tutor', error: error.message });
  }
};

//* Função para deletar tutor por protocol_Id
const deleteTutorByProtocolId = async (req, res) => {
  try {
    const protocolId = parseInt(req.params.protocol_Id);

    if (isNaN(protocolId)) {
      return res.status(400).json({ message: 'protocol_Id inválido' });
    }

    const deletedTutor = await DataTutor.findOneAndDelete({
      protocol_Id: protocolId,
    });

    if (!deletedTutor) {
      return res.status(404).json({ message: 'Tutor não encontrado' });
    }

    res.status(200).json({ message: 'Tutor deletado com sucesso' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Erro ao deletar tutor', error: error.message });
  }
};

export {
  createTutor,
  getTutors,
  getTutorByProtocolId,
  updateTutorByProtocolId,
  deleteTutorByProtocolId,
};
