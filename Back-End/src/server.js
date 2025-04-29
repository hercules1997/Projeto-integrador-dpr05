// const express = require('express')
// // const mongoose = require('mongoose')
// const cors = require('cors')

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect('mongodb://localhost:27017/sistema_sac', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// const TicketSchema = new mongoose.Schema({
//   usuario: String,
//   descricao: String,
//   status: { type: String, default: 'pendente' },
//   dataCriacao: { type: Date, default: Date.now }
// })

// const ProdutoSchema = new mongoose.Schema({
//   descricao: String,
//   quantidade: Number,
//   status: { type: String, default: 'em estoque' }
// })

// const EnvioSchema = new mongoose.Schema({
//   ticketId: String,
//   codigoRastreamento: String,
//   status: { type: String, default: 'enviado' }
// })

// const Ticket = mongoose.model('Ticket', TicketSchema)
// const Produto = mongoose.model('Produto', ProdutoSchema)
// const Envio = mongoose.model('Envio', EnvioSchema)
