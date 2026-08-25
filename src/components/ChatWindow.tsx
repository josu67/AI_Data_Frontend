interface ChatWindowProps {
  onSendMessage: (message: string) => void
}

function ChatWindow({ onSendMessage }: ChatWindowProps) {
  const handleSend = () => {
    const message = 'Test question'

    /*
      BACKEND INT

      React
        ↓
      send user's question
        ↓
      Python backend API
        ↓
      AI Agent
        ↓
      Snowflake / Databricks / Power BI
        ↓
      Python backend returns result
        ↓
      React displays the answer
    */

    onSendMessage(message)
  }

  return (
    <section className="chat-window">

      <div className="chat-messages">

        <div className="welcome-message">
          <h2>Ask your data anything</h2>

          <p>
            Ask questions about your business data
            in natural language.
          </p>
        </div>

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Ask a question about your data..."
        />

        <button
          className="btn btn-primary"
          onClick={handleSend}
        >
          Send
        </button>

      </div>

    </section>
  )
}

export default ChatWindow