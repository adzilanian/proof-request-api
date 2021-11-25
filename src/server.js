const express = require("express")
const axios = require('axios')
const app = express()
const dotenv = require('dotenv')
const proofRequestPayload = require('./proofRequestPayload')
const cors = require('cors')


// Load ENV data
dotenv.config()

const EXPRESS_PORT = process.env.EXPRESS_PORT || 5009
const API_CONTROLLER_KEY = process.env.API_CONTROLLER_KEY
const API_CONTROLLER = process.env.API_CONTROLLER


app.listen(EXPRESS_PORT, function () {
    console.log(`Express API on.........PORT : ${EXPRESS_PORT}`)
})
app.use(cors())
app.use(express.json())


/**
 * --------------------------------------------------
 * Proof Request API
 * --------------------------------------------------
 */


app.get("/sendproof", async function (req, res) {

    let config = {
        method: 'post',
        url: `${API_CONTROLLER}/present-proof/send-request`,
        headers: {
            'X-API-Key': API_CONTROLLER_KEY,
            'Content-Type': 'application/json'
        },
        data : proofRequestPayload.getPayload()
    };
    console.log("request start")
    axios(config)
        .then(function (response) {
            let result = response.data

            let presentation_exchange_id = "725014dd-13a1-4539-8aaf-c1edc560d42f"//response.data.presentation_exchange_id
            console.log(presentation_exchange_id)
            setTimeout(function(){

                //payload request triggerd from here
                let configRes = {
                    method: 'get',
                    url: `https://railchain-agent-ice-api.beta.de.com/present-proof/records/${presentation_exchange_id}`,
                    headers: {
                        'X-API-Key': 'drom'
                    }
                };

                axios(configRes)
                    .then(function (response) {
                        console.log("results")
                        console.log(response.data)
                        let verified = response.data.verified
                        res.status(200).send(verified)
                    })
                    .catch(function (error) {
                        console.log(error);
                        res.status(404).send(error)
                    });
            }, 3000);

        })
        .catch(function (error) {
            console.log(error);
            res.status(404).send(error)
        });

});
