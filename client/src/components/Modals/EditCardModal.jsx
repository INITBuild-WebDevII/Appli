import "./EditCardModal.css";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const EditCardModal = ({ closeModal, column, card }) => {
  const [company, setCompany] = useState(card.companyName);
  const [position, setPosition] = useState(card.positionTitle);
  const [applyLink, setApplyLink] = useState(card.applicationLink);
  const [applyDate, setApplyDate] = useState(
    moment.parseZone(card.dateApplied).format("YYYY-MM-DD")
  );
  const [responseDate, setResponseDate] = useState(
    moment.parseZone(card.responseDate).format("YYYY-MM-DD")
  );
  const [dueDate, setDueDate] = useState(card.dueDate);
  const [notes, setNotes] = useState(card.notes);

  var User = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    console.log(JSON.stringify(column));
    console.log(card);
  }, []);

  let myRef;

  const closeEditCardModal = (e) => {
    if (myRef && myRef.contains(e.target)) {
      closeModal();
    }
  };

  // Function for handling card deletion
  function deleteCard() {
    // Traverse the column cards to find the card we want to delete
    column.items.forEach(function (arrayItem) {
      // Find the card by the card ID
      if (arrayItem._id === card._id) {
        // Delete card from the database
        axios.delete(`https://appli-server.onrender.com/api/cards/${card._id}`, {
            headers: {
              Authorization: `Bearer ${User.token}`,
            },
          })
          .then((response) => {
            console.log("Deleted card successfully");
            console.log(response.data);
          });

        // Visually delete the card from the dashboard
        let index = column.items.indexOf(arrayItem);
        column.items.splice(index, 1);
      }
    });
  }

  // Function for updating the card on submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // changes card's properties
    card.companyName = company;
    card.positionTitle = position;
    card.applicationLink = applyLink;
    card.dateApplied = applyDate;
    card.dueDate = dueDate;
    card.responseDate = responseDate;
    card.notes = notes;

    // Update the card in the database
    axios.put(
        `https://appli-server.onrender.com/api/cards/${card._id}`,
        {
          companyName: company,
          positionTitle: position,
          applicationLink: applyLink,
          dateApplied: applyDate,
          dueDate: dueDate,
          responseDate: responseDate,
          notes: notes,
        },
        {
          headers: {
            Authorization: `Bearer ${User.token}`,
          },
        }
      )
      .then((response) => {
        console.log("Updated card successfully");
        console.log(response.data);
      });

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
          <h1 className="form-title">{column.name} (Editing)</h1>
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
          <button
            className="modal-btn"
            id="delete"
            onClick={() => deleteCard()}
          >
            Delete
          </button>
          <button
            className="modal-btn"
            id="cancel"
            onClick={closeEditCardModal}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCardModal;
