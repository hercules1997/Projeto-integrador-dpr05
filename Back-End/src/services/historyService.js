
import History from '../models/History.js';

export async function createHistoryService(data) {
  const history = new History(data);
  return await history.save();
}

export async function getHistoryService() {
  return await History.find().sort({ createdAt: -1 });
}
