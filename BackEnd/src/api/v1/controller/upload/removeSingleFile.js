const removeFileFromFirebase = require('../../../../helper/removeFileFromFirebase')

module.exports = async (request, response) => {
    try {
        await removeFileFromFirebase(request.body.filename)
        return response.status(200).json({
            code: 200,
            status: 'success',
            message: 'deleted file from firebase'
        }) 
    } catch (error) {
        return response.status(500).json({
            code: 500,
            status: 'failed',
            message: error
        }) 
    }
}