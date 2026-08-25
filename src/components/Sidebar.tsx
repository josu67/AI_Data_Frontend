interface SidebarProps {
  onNewChat: () => void;
}

function Sidebar({ onNewChat }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">AI Data Assistant</div>

      <button className="new-chat-button" onClick={onNewChat}>
        + New Chat
      </button>

      <div className="sidebar-section">
        <div className="sidebar-title">Workspace</div>

        <button className="sidebar-item">📊 Dashboard</button>

        <button className="sidebar-item">💬 Conversations</button>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-title">Data Sources</div>

        <button className="sidebar-item">❄️ Snowflake</button>

        <button className="sidebar-item">🔷 Databricks</button>

        <button className="sidebar-item">📊 Power BI</button>
      </div>
    </aside>
  );
}

export default Sidebar;
