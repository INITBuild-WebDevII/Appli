import "./AddCardModal.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddCardModal = ({ closeModal, column, columns, setColumns }) => {
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [applyLink, setApplyLink] = useState();

  //console.log(columns);
  //console.log(typeof setColumns);
  //console.log(typeof closeModal);

  let myRef;

  useEffect(() => {
    console.log(JSON.stringify(column.name));
    console.log(JSON.stringify(column));
  }, []);

  const closeAddCardModal = (e) => {
    if (myRef && myRef.contains(e.target)) {
      closeModal();
    }
  };

  const handleSubmit = (e) => {
    console.log(position);
    console.log(company);

    column.items.push({ id: uuidv4(), name: company, role: position });

    setColumns({
      ...columns,
    });

    e.preventDefault();

    closeModal();
  };

  return (
    <div className="modal">
      <form
        className="modal-form"
        ref={(node) => (myRef = node)}
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">{column.name}</h1>
        <h2>Company Name</h2>
        <div className="form-group">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={company}
            required
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <h2>Position Title</h2>
        <div className="form-group">
          <input
            type="text"
            name="position"
            placeholder="Position Title"
            value={position}
            required
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button className="modal-btn" id="save">
            Save
          </button>
          <button className="modal-btn" id="cancel" onClick={closeAddCardModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCardModal;
