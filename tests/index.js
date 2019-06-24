require("regenerator-runtime/runtime")

const { assert } = require("chai")
const attempt = require("@assertchris/attempt-promise")
const { Client } = require("../build")

describe("Client", () => {
    let client = undefined
    let lead = undefined

    before(() => {
        client = new Client()
    })

    it("should create leads", async () => {
        const [error, response] = await attempt(client.createLead({ last_name: "tester", keyword: "testing" }))

        assert.isUndefined(error)
        assert.isNumber(response.lead.id)

        lead = response.lead.id
    })

    it("should update leads", async () => {
        const [error, response] = await attempt(client.updateLead(lead, { last_name: "tester-updated" }))

        assert.isUndefined(error)
        assert.equal(response.lead.last_name, "tester-updated")
    })

    it("should get leads", async () => {
        const [error, response] = await attempt(client.viewLead(lead))

        assert.isUndefined(error)
        assert.equal(response.lead.last_name, "tester-updated")
    })

    it("should delete leads", async () => {
        await client.deleteLead(lead)
    })
})
