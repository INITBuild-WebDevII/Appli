import "./AddCardModal.css";
import { useEffect, useState } from "react";
import axios from "axios";

const AddCardModal = ({ closeModal, column, columns, setColumns }) => {
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [applyLink, setApplyLink] = useState();
  const [applyDate, setApplyDate] = useState();
  const [responseDate, setResponseDate] = useState();
  const [dueDate, setDueDate] = useState();
  const [notes, setNotes] = useState();

  let myRef;

  const closeAddCardModal = (e) => {
    if (myRef && myRef.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    console.log("The column the new card is going to be made in: " + JSON.stringify(column.name));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    var local_user = JSON.parse(sessionStorage.getItem("user"));

    const token = local_user.token;

    // Create new card to database
    axios.post(
        "/api/cards",
        {
          companyName: company,
          positionTitle: position,
          applicationLink: applyLink,
          dateApplied: applyDate,
          dueDate: dueDate,
          responseDate: responseDate,
          notes: notes,
          columnLocation: column.name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ).then(({ data }) => {
        // The newly created card data sent from the POST request
        const card = data;

        console.log(card);

        // Visually update the columns on the dashboard
        column.items.push(card);

        setColumns({
          ...columns,
        });

        closeModal();
      });
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
