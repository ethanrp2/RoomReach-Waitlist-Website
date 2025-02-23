const { Client } = require('pg')

exports.handler = async (event) => {
  try {
    // 1. Parse the incoming data (the email) from the request body
    const data = JSON.parse(event.body)
    const email = data.email

    // 2. Create a new PG client using your environment variable
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Some providers require SSL
      },
    })

    // 3. Connect, insert, then close
    await client.connect()
    await client.query(
      'INSERT INTO waitlist_emails (email) VALUES ($1)',
      [email]
    )
    await client.end()

    // 4. Return a success response
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email saved successfully!' }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save email' }),
    }
  }
}