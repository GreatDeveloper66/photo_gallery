import mongoose from 'mongoose';

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const PicSchema = new Schema({
  picId: ObjectId,
  url: String
})

export default PicSchema