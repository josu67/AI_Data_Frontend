type HeaderProps={
    onToggleTheme:()=>void;
    isDark:boolean;
};
function Header({onToggleTheme, isDark}: HeaderProps){   
  return (
    <header className="header">

      {/* Application name */}
      <div className="header-left">
        <span className="header-logo">✦</span>

        <div>
          <div className="header-title">
            title
          </div>

          <div className="header-subtitle">
            Subtitle
          </div>
        </div>
      </div>


      {/* =====================================================
          HEADER INFORMATION
          ===================================================== */}

      <div className="header-right">

        <span className="header-stat">
          20 measures
        </span>

        <span className="header-stat">
          6 joins
        </span>

        <button className="copilot-badge">
          copilot
        </button>

        <button className="theme-button" onClick={onToggleTheme}>{isDark?"light":"dark"}
        </button>

        {/*
         * BACKEND TODO:
         * -----------------------------------------------
         * The numbers above are currently placeholders.
         *
         * Later they should come from the backend model
         * information.
         *
         * Example:
         *
         * model.measures.length
         * model.joins.length
         */}
      </div>

    </header>
  );
}

export default Header;