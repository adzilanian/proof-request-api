// tools.js
// ========
module.exports = {
    getPayload: function () {
        let payload = JSON.stringify({
            "comment": "RailChain Demofahrt - Positiv Test 3",
            "connection_id": "82c1751c-a0bc-4c23-9b20-e97ed988aee7",
            "proof_request": {
                "name": "Proof of RailChain Demofahrt - Positiv Test 3",
                "version": "1.0",
                "nonce": "1",
                "requested_attributes": {
                    "0_start_date": {
                        "name": "start_date",
                        "restrictions": [
                            {
                                "cred_def_id": "BkwZxdsmgM9cYGw4J4UqY2:3:CL:8429:RailChain-ICE-Internal-Sensor-Access Ver. 1.1"
                            }
                        ]
                    },
                    "1_expire_date": {
                        "name": "expire_date",
                        "restrictions": [
                            {
                                "cred_def_id": "BkwZxdsmgM9cYGw4J4UqY2:3:CL:8429:RailChain-ICE-Internal-Sensor-Access Ver. 1.1"
                            }
                        ]
                    }
                },
                "3_label": {
                    "name": "label",
                    "restrictions": [
                        {
                            "cred_def_id": "BkwZxdsmgM9cYGw4J4UqY2:3:CL:8429:RailChain-ICE-Internal-Sensor-Access Ver. 1.1"
                        }
                    ]
                }
            },
            "requested_predicates": {
                "0_security_class": {
                    "name": "security_class",
                    "p_type": "<=",
                    "p_value": 999,
                    "restrictions": [
                        {
                            "cred_def_id": "BkwZxdsmgM9cYGw4J4UqY2:3:CL:8429:RailChain-ICE-Internal-Sensor-Access Ver. 1.1"
                        }
                    ]
                }
            }
        });
        return payload;
    },
    sleep: function (ms) {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

};
