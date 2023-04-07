import Field from "../models/Field.js";
import Room from "../models/Room.js";

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

export const getFields = async (req, res, next) => {
  // tambahkan req.query dan cek if featured true api
  // tambahkan query limit untuk featured true
  const { min, max, limit, ...others } = req.query;
  try {
    const fields = await Field.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(+limit);
    res.status(200).json(fields);
  } catch (err) {
    next(err);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Field.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const fieldCount = await Field.countDocuments({ type: "field" });
    const sevenCount = await Field.countDocuments({ type: "sevenSoccer" });
    const futsalCount = await Field.countDocuments({ type: "futsal" });

    res.status(200).json([
      { type: "field", count: fieldCount },
      { type: "sevenSoccer", count: sevenCount },
      { type: "futsal", count: futsalCount },
    ]);
  } catch (err) {
    next(err);
  }
};

export const getFieldRooms = async (req, res, next) => {
  try {
    const field = await Field.findById(req.params.id);
    const list = await Promise.all(
      field.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};
