function checkFieldsPost(req, res, next) {
    const { TicketNumber, TicketPrice}  = req.body
	
	
    if(TicketNumber && TicketPrice) {
        next()
    } else {
        res.status(400).json({ message: 'fields are not good' })
    }
}

module.exports = {
   
    checkFieldsPost
}