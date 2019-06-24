import fetch from "isomorphic-fetch"

class Client {
    key = undefined
    base = undefined

    constructor(key, domain) {
        if (!key || !domain) {
            try {
                require("dotenv").config()
            } catch (e) {
                // This can fail for a couple reasons:
                // 1. This is being called on the front-end
                // 2. There's no .env file to load
            }
        }

        if (!key) {
            key = process.env.FRESHSALES_KEY
        }

        if (!domain) {
            domain = process.env.FRESHSALES_DOMAIN
        }

        this.key = key
        this.base = `https://${domain}.freshsales.io`
    }

    async request(method, endpoint, data = {}) {
        const options = {
            method,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Token token=${this.key}`,
            },
        }

        if (data) {
            options.body = JSON.stringify(data)
        }

        const response = await fetch(endpoint, options)
        const json = await response.json()

        if (json.errors) {
            throw json
        }

        return json
    }

    async createLead(data) {
        return await this.request("POST", `${this.base}/api/leads`, data)
    }

    async updateLead(id, data) {
        return await this.request("PUT", `${this.base}/api/leads/${id}`, data)
    }

    async viewLead(id) {
        return await this.request("GET", `${this.base}/api/leads/${id}`)
    }

    async deleteLead(id) {
        return await this.request("DELETE", `${this.base}/api/leads/${id}`)
    }
}

export { Client }
