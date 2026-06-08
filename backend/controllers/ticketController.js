import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  try {
    const { customerName, customerEmail, subject, description } = req.body;
    const count = await Ticket.countDocuments();
    const ticketID = `TKT-${String(count + 1).padStart(3, "0")}`;

    const ticket = await Ticket.create({
      ticketID,
      customerName,
      customerEmail,
      subject,
      description,
    });

    res.status(201).json(ticket);
  } catch (error) {
    // console.log(error)
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllTickets = async (req, res) => {
  try {
    const { search, status } = req.query;
    let query = {};
    if (search) {
      query.$or = [
        {
          customerName: {
            $regex: search,
            $options: "i",
          },
        },
        {
          customerEmail: {
            $regex: search,
            $options: "i",
          },
        },
        {
          subject: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
        {
          ticketID: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    if (status) {
      query.status = status;
    }

    const tickets = await Ticket.find(query).sort({ createdAt: -1 });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findOne({
            ticketID: req.params.ticketID
        });
        if (!ticket) {
            return res.status(404).json({
                message: "Ticket Not Found!"
            })
        }
        res.status(200).json(ticket)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const updateTicket = async (req, res) => {
  try {
    const {status, note} = req.body;
    const ticket = await Ticket.findOne({
      ticketID: req.params.ticketID
    })
    if (!ticket) {
      return res.status(404).json({
        message: "Ticket Not Found!"
      })
    }

    const validStatuses = [
      "Open", "Closed", "In Progress"
    ]
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        message: "Invalid Status"
      })
      ticket.status = status
    }

    if (note) {
      ticket.notes.push({
        text: note
      })
    }
    await ticket.save();
    res.status(200).json({
        success: true,
        updatedAt: ticket.updatedAt,
        ticket, 
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}