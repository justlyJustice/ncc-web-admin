const DashoardContent = ({ children }) => {
  return (
    <div className="content">
      <div className="top-container">
        <div className="flex top-content">
          <div className="search-form">
            <input
              className="search-input"
              type="text"
              placeholder="Search Here"
            />

            <button>
              <i className="bx bx-search"></i>
            </button>
          </div>

          <div className="flex icons">
            <div className="flex circle-icon">
              <i className="bx bx-bell"></i>
            </div>

            <div className="flex circle-icon bg-primary-900">
              <i className="bx bx-log-out-circle"></i>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="text">
          <h2>Admin</h2>
          <p>Welcome to the NCC Admin Dashboard.</p>
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashoardContent;
