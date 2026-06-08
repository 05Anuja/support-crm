import mongoose, { mongo } from "mongoose";

const ticketSchema = new mongoose.Schema({
    ticketID: {
        type: String,
        unique: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Open", "In Progress", "Closed"],
        default: "Open"
    },
    notes: [
        {
            text: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]
},
{
    timestamps: true
})

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default Ticket;