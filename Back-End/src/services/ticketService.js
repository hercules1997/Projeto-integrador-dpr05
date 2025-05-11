import CreateTicket from '../models/CreateTicket.js';

export async function createTicketService(data) {
  const ticket = new CreateTicket(data);
  return await ticket.save();
}

export async function getTicketsService() {
  return await CreateTicket.find().sort({ createdAt: -1 });
}
