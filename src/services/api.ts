const API_BASE_URL = 'http://localhost:8000'  //example 


export async function sendChatMessage(message: string) {


  console.log('Sending message to backend:', message)

  return {
    answer: 'Backend here',
  }
}