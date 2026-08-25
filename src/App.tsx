import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Sidebar
        onNewChat={() => {
          console.log("New chat clicked");
        }}
      />

      <div className="main-area">
        <Header onToggleTheme={toggleTheme} isDark={isDark} />

        <main className="content-area">
          <section className="page-header">
            <div>
              <h1>AI data assistant.....</h1>

              <p className="text-muted">Semantic model overview</p>
            </div>
          </section>

          <section className="summary-grid">
            <div className="summary-card">
              <strong>6</strong>
              <span>Tables</span>
            </div>

            <div className="summary-card">
              <strong>38</strong>
              <span>Columns</span>
            </div>

            <div className="summary-card">
              <strong>20</strong>
              <span>Measures</span>
            </div>

            <div className="summary-card">
              <strong>6</strong>
              <span>Joins</span>
            </div>
          </section>

          <section className="content-section">
            <h2>WHAT WAS NOT READ OR RESOLVED</h2>

            <p>
              Everything this adapter understands was read, and every reference
              in the model resolved to an object that exists.
            </p>
          </section>

          <section className="content-section">
            <h2>AWAITING CONFIRMATION</h2>

            <p>Items requiring review will appear here.</p>
          </section>

          <ChatWindow
            onSendMessage={(message) => {
              //backend todo: send users msg....backend api here.
              console.log("users message:", message);
            }}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
