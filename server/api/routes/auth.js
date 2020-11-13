/**
 * Module to authenticate user sign in
 * @module api/routes/auth
 * @requires express
 * @exports router - express router to handle api calls to /api
 */
const express = require('express')
const router = express.Router()
const UserAuth = require('../../services/userAuth')

/**
 * Router method to handle post requests to /api/tokensignin
 * @function
 * @async
 */
router.post('/tokensignin', async (request, response) => {
    try {
        response.set({
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        })

        const userAuthInstance = new UserAuth()
        const result = await userAuthInstance.signIn(request.body.id_token)
        response.json(result)
    } catch (error) {
        response.status(400).send(error)
    }
})

module.exports = router
