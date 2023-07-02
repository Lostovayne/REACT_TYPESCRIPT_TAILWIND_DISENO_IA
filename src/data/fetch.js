const ApiEndpoint = import.meta.env.VITE_API_ENDPOINT
const token = import.meta.env.VITE_API_TOKEN

async function getFetchingData(text) {
  const response = await fetch(ApiEndpoint, {
    method: 'POST',
    headers: {
      'Accept-Encoding': 'gzip, deflate',
      Connection: 'keep-alive',
      'Content-Type': 'application/json',
      'User-Agent': 'python-requests/2.28.1',
      accept: 'application/json',
      token: token
    },
    body: JSON.stringify({ question: text, chat_history: [] })
  })

  const data = await response.json()

  // console.log(data[0].data.answer)
  return data
}

export default getFetchingData
