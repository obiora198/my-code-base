const notFound = (req,res) => {
    res.status(401).json({msg: 'This route does not exist'})
}

module.exports = notFound