import Field from "../models/Field.js";

export const createField = async (req, res, next) => {
  const newField = new Field(req.body);

  try {
    const savedField = await newField.save();
    res.status(200).json(savedField);
  } catch (err) {
    next(err);
  }
};

export const updateField = async (req, res, next) => {
  try {
    const updateField = await Field.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateField);
  } catch (err) {
    next(err);
  }
};

export const deleteField = async (req, res, next) => {
  try {
    await Field.findByIdAndDelete(req.params.id);
    res.status(200).json("Field has been delete");
  } catch (err) {
    next(err);
  }
};

export const getField = async (req, res, next) => {
  try {
    const field = await Field.findById(req.params.id);
    res.status(200).json(field);
  } catch (err) {
    next(err);
  }
};

export const getAllFields = async (req, res, next) => {
  try {
    const fields = await Field.find();
    res.status(200).json(fields);
  } catch (err) {
    next(err);
  }
};
