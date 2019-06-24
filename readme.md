# Freshsales

This is a modest and ever-incomplete client, for the Freshsales API.

## Installation

```
npm i @assertchris/freshsales
```

## Usage

```js
import { Client } from "@assertchris/freshsales"

// You can define your API key and domain in a couple ways:
// 1. As the first and second parameters to the constructor
// 2. As FRESHSALES_KEY and FRESHSALES_DOMAIN environment variables
const client = new Client(/* FRESHSALES_KEY, FRESHSALES_DOMAIN */)

// creating a new lead
const { id } = await client.createLead({
    /* lead data */
})

// viewing an existing lead
const lead = await client.viewLead(id)

// deleting a lead
await client.deleteLead(id)
```

## Roadmap

1. Manage other entities: contacts, accounts, deals etc.
2. More advanced lead operations: bulk assignment, activities, conversion etc.
3. Decorated responses

## Feedback

You can reach out on [Twitter](https://twitter.com/assertchris) for questions and support.
