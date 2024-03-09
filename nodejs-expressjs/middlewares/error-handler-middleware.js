const errorHandlerMidlleware = (err,req,res,next) => {
    res.status(500).json({msg:'Something went wrong'})
    console.log(err);
}

module.exports = errorHandlerMidlleware