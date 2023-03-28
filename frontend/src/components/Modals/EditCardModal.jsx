import "./EditCardModal.css";
import { useEffect, useState } from "react";
import axios from "axios";

const EditCardModal = ({ closeModal, column, card}) => {
  const [company, setCompany] = useState(card.name);
  const [position, setPosition] = useState(card.role);
  const [applyLink, setApplyLink] = useState(card.link);
  const [applyDate, setApplyDate] = useState(card.applyDate);
  const [responseDate, setResponseDate] = useState(card.responseDate);
  const [dueDate, setDueDate] = useState(card.dueDate);
  const [notes, setNotes] = useState(card.notes);

  //console.log(columns);
  //console.log(typeof setColumns);
  //console.log(typeof closeModal);

  let myRef;

  useEffect(() => {
    console.log(JSON.stringify(column));
    console.log(JSON.stringify(card));
    console.log(card.id);
  }, []);

  const closeEditCardModal = (e) => {
    if (myRef && myRef.contains(e.target)) {
      closeModal();
    }
  };
  function deleteCard() {
    //alert(column.name)
    // index position of card in column
    //alert(index)
  
    const User = JSON.parse(localStorage.getItem('user'))
    const token = User.token
    axios.patch("/api/cards/", {
      cardID: card.id
    }, {
          headers: {
            Authorization : `Bearer ${token}`
          }
    })
        
        console.log(card.id + "index")

  }

  const handleSubmit = (e) => {
    // console.log(company);
    // console.log(position);
    // console.log(applyLink);
    // console.log(applyDate);
    // console.log(responseDate);
    // console.log(dueDate);
    // console.log(notes);

    const User = JSON.parse(localStorage.getItem('user'))
    const token = User.token
    console.log(card.id)
    // changes card's properties
    card.name = company;
    card.role = position;
    card.link = applyLink
    card.applyDate = applyDate
    card.responseDate = responseDate
    card.dueDate = dueDate
    card.notes = notes

    console.log(card.name)
    axios.patch("/api/cards/UP", {
    companyName: card.name,
    positionTitle: card.role,
    applicationLink: card.link,
    dateApplied: card.applyDate,
    responseDate: card.responseDate,
    dueDate: card.dueDate,
    notes: card.notes,
    cardID: card.id
    }, {
          headers: {
            Authorization : `Bearer ${token}`
          }
    })

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
            <h3>Company Name</h3>

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={company}
              required
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div className="position-input">
            <h3>Position Title</h3>

            <input
              type="text"
              name="position"
              placeholder="Position Title"
              value={position}
              required
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>

          <div className="link-input">
            <h3>Application Link</h3>

            <input
              type="text"
              name="position"
              placeholder="Application Link"
              value={applyLink}
              required
              onChange={(e) => setApplyLink(e.target.value)}
            />
          </div>

          <div className="apply-date-input">
            <h3>Date Applied</h3>

            <input
              type="date"
              className="date-applied input"
              onChange={(e) => setApplyDate(e.target.value)}
              value={applyDate}
            />
          </div>

          <div className="apply-date-input">
            <h3>Due Date</h3>

            <input
              type="date"
              className="due-date input"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
          </div>

          <div className="heard-back-date-input">
            <h3>Response Date</h3>

            <input
              type="date"
              className="date-heard-back input"
              onChange={(e) => setResponseDate(e.target.value)}
              value={responseDate}
            />
          </div>

          <div className="notes-input">
            <h3 className="content">Notes</h3>
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
          <button className="modal-btn" id="delete" onClick={() =>
                deleteCard()
             }>
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
