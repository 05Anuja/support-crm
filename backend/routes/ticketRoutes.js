import express from 'express'
import { createTicket, getAllTickets, getTicketById, updateTicket } from '../controllers/ticketController.js';

const router = express.Router();

router.post('/createTicket', createTicket);
router.get('/getAllTickets', getAllTickets)
// router.get('/:ticketID', getTicketById)
router.route('/:ticketID')
    .get(getTicketById)
    .put(updateTicket)

export default router;