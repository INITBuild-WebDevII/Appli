import "./AddCardModal.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const AddCardModal = ({ closeModal, column, columns, setColumns }) => {
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [applyLink, setApplyLink] = useState();
  const [applyDate, setApplyDate] = useState();
  const [responseDate, setResponseDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [notes, setNotes] = useState();

  //console.log(columns);
  //console.log(JSON.stringify(column));
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
    console.log(applyDate);

    var local_user;
    var user_ID;
    if (JSON.parse(localStorage.getItem("user")) === null) {
      local_user = JSON.parse(sessionStorage.getItem("user"));
      user_ID = local_user.id;
    } else {
      local_user = JSON.parse(localStorage.getItem("user"));
      user_ID = local_user.id;
    }

    const Items_id = uuidv4();
    column.items.push({
      id: Items_id,
      name: company,
      role: position,
      link: applyLink,
      dateApplied: applyDate,
      dueDate: dueDate,
      responseDate: responseDate,
      Notes: notes,
    });

    const token = local_user.token;
    axios.post(
      "/api/cards",
      {
        companyName: company,
        positionTitle: position,
        user_ID: user_ID,
        columnLocation: column.name,
        cardID: Items_id,
        applicationLink: applyLink,
        dateApplied: applyDate,
        dueDate: dueDate,
        responseDate: responseDate,
        Notes: notes,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
        <div className="form-group">
          <h1 className="form-title">{column.name}</h1>

          <div className="company-input">
            <h4>Company</h4>

            <input
              type="text"
              name="company"
              placeholder="Company"
              value={company}
              required
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="position-input">
            <h4>Position</h4>

            <input
              type="text"
              name="position"
              placeholder="Position"
              value={position}
              required
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>

          <div className="link-input">
            <h4>Application Link</h4>

            <input
              type="text"
              name="position"
              placeholder="Application Link"
              value={applyLink}
              onChange={(e) => setApplyLink(e.target.value)}
            />
          </div>

          <div className="apply-date-input">
            <h4>Date Applied</h4>

            <input
              type="date"
              className="date-applied input"
              onChange={(e) => setApplyDate(e.target.value)}
              value={applyDate}
            />
          </div>

          <div className="apply-date-input">
            <h4>Due Date</h4>

            <input
              type="date"
              className="due-date input"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
          </div>

          <div className="heard-back-date-input">
            <h4>Response Date</h4>

            <input
              type="date"
              className="date-heard-back input"
              onChange={(e) => setResponseDate(e.target.value)}
              value={responseDate}
            />
          </div>

          <div className="notes-input">
            <h4 className="content">Notes</h4>
            <textarea
              id="notes"
              name="notes"
              rows="8"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
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