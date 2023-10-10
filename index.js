// import tool from pg library
//import { Client } from 'pg'
import pg from 'pg'
const {Client} = pg

// import connections string from credentials / secrets file
import { connectionURI } from './creds.js'

// create client connection to database
const client = new Client({
    connectionString: connectionURI,
})
//open connection 
await client.connect()

// run query 
const time = await client.query( ' SELECT NOW() ' )
console.log (time)
// close connection 
client.end()