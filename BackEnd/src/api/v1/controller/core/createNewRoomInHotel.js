module.exports = async (request, response) => {
    try {
        return response.status(200).json('haha')
    } catch (error) {
        console.log(error)
        return response.status(500).json({
            status: 500,
            message: error
        }) 
    }
}