import express from 'express'
import { createTicket, deleteById, getAllTickets, getTicketById, updateTicket } from '../controllers/ticketController.js';

const router = express.Router();

router.post('/createTicket', createTicket);
router.get('/getAllTickets', getAllTickets)
router.get('/:ticketID', getTicketById)
router.put('/:ticketID', updateTicket)
router.delete('/:ticketID', deleteById)

export default router;