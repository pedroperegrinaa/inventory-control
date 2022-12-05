import { Schema, model, Document } from 'mongoose'

interface Drink extends Document {
    name: string
    price: number
    amount: number
    // image: string
}

const DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  amount: {
    type: Number,
    required: false
  }
}, {
  timestamps: true
})

export default model<Drink>('Drink', DrinkSchema)
