const Thead = ({ handleSelectAllContacts, selectAll }) => {
  return (
    <div className="thead flex">
      {/* <div>
        <input
          type="checkbox"
          // checked={selectAll}
          onChange={handleSelectAllContacts}
        />
      </div> */}

      <div>
        <p>Caller</p>
      </div>

      <div>
        <p>Caller Location</p>
      </div>

      <div>
        <p>Status</p>
      </div>

      <div>
        <p>Date and Time</p>
      </div>

      <div>
        <p>Receiver</p>
      </div>

      <div>
        <p>Receiver{`'`}s Location</p>
      </div>
    </div>
  );
};

export default Thead;
