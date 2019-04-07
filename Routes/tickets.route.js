const express = require('express')
const router = express.Router()
const tickets = require('../Model/Ticket.Model')

const m = require('../HelperMethods/Middlewares')

module.exports = router


router.get('/list' , async(req, res)=> {
			await tickets.getTickets()
			.then(ticket => res.json(ticket))
			.catch(err=> {
			if(err.status) {
			res.status(err.status).json({message: err.message})	
			
			}
			else {
			res.status(500).json({message: err.message})
			}
			})
			})
			
			

router.get('/tickets/:id' , async(req, res) => {
		
         const id = req.params.id
			await tickets.getTicket(id)
			.then(ticket=>res.json(ticket))
			.catch(err=> {
			if(err.status) {
			res.status(err.status).json({message:err.message})
			}
			else {
			res.status(500).json({message:err.message})
			}
			})
				
			})
			

			
router.post('/tickets', async (req, res) => {
		await tickets.createTicket(req.body)
		.then(tickets => res.status(201).json({
		message: 'the post #${post.id} has been created',
		content: tickets
		}))
		.catch(err => res.status(500).json({ message: err.message }))
		})

			