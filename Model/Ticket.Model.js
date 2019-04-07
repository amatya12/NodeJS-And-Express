const filename = '../Tickets.json'
let tickets = require(filename)

const helper = require('../HelperMethods/Helper.js')

function getTickets() {
	return new Promise((resolve, reject)=> {
		if(tickets.length=== 0) {
			reject({
				message: 'no tickets available' ,
				status :202
			})
		}
	resolve(tickets)
	})
	
}
function getTicket(id) {
	return new Promise((resolve, reject) => {
	helper.mustBeInArray(tickets, id)
	.then(ticket => resolve(ticket))
	.catch(err=>reject(err))

})	
	
}


 function createTicket(newTicket) {
	 return new Promise((resolve, reject)=> {
	 const id = {id: helper.getNewId(tickets)}
	 const date = {
		 createdAt: helper.newDate(),
		 updatedAt: helper.newDate()
	 }
		 
		 

	 newTicket = { ...id,...date, ...newTicket}

	 tickets.push(newTicket)
	helper.writeJsonFile(filename, tickets)
    resolve(newTicket)
	
	 })

}

module.exports={
	createTicket,
	getTicket,
	getTickets,
	
}