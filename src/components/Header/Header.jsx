import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">JobTracker</h1>
        <nav className="nav">
          <div className="nav-link active">Dashboard</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
