export const formatTicket = (ticketDoc, tutorDoc) => ({
  _id: ticketDoc._id,
  protocol_Id: ticketDoc.protocol_Id,
  gift_id: ticketDoc.gift_id,
  quantity: ticketDoc.quantity,
  packageBox: ticketDoc.packageBox,
  tracking_code: ticketDoc.tracking_code,
  tutor: {
    _id: tutorDoc._id,
    name: tutorDoc.name,
    email: tutorDoc.email,
    phone: tutorDoc.phone,
    date: tutorDoc.date,
    address: tutorDoc.address,
    data_animal: tutorDoc.data_animal,
  },
});
