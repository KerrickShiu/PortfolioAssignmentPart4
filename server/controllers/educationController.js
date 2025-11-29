import Education from '../models/educationmodel.js';

export const getAllQualifications = async (req, res) => {
  const qualifications = await Education.find();
  res.json(qualifications);
};

export const getQualificationById = async (req, res) => {
  const qualification = await Education.findById(req.params.id);
  res.json(qualification);
};

export const createQualification = async (req, res) => {
  const qualification = new Education(req.body);
  await qualification.save();
  res.status(201).json(qualification);
};

export const updateQualification = async (req, res) => {
  const qualification = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(qualification);
};

export const deleteQualification = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'Qualification deleted' });
};

export const deleteAllQualifications = async (req, res) => {
  await Education.deleteMany({});
  res.json({ message: 'All qualifications deleted' });
};