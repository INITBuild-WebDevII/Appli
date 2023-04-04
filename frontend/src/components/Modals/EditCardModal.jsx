import "./EditCardModal.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import moment from "moment" 

const EditCardModal = ({ closeModal, column, card, User3}) => {

  var User2;
  var token2;
  var user_id2;
  if (JSON.parse(localStorage.getItem('user')) === null) {
    User2 = JSON.parse(sessionStorage.getItem('user'))
    user_id2 = User2.id
    token2 = User2.token
  } else {
    User2 = JSON.parse(localStorage.getItem('user')) 
    user_id2 = User2.id
    token2 = User2.token
  }

function GETS() {
  axios.post("/api/cards/GETO", {
    user_ID: user_id2,
    cardID: card.id
  }, {
    headers: {
      Authorization : `Bearer ${token2}`
    }
  })
  .then ((response) => {
    if (response.data[0].responseDate === undefined) {
      var response_date = undefined
    } else {
      response_date = moment.parseZone(response.data[0].responseDate).format('YYYY-MM-DD');
    }
    if (response.data[0].dateApplied === undefined) {
      var apply_date = undefined
    } else {
      apply_date = moment.parseZone(response.data[0].dateApplied).format('YYYY-MM-DD');
    }
    if (response.data[0].dueDate === undefined) {
      var due_date = undefined
    } else {
      due_date = moment.parseZone(response.data[0].dueDate).format('YYYY-MM-DD');
    }
    
    
    card.name = response.data[0].companyName
    card.role = response.data[0].positionTitle
    card.link = response.data[0].applicationLink
    card.Notes = response.data[0].Notes
    card.dateApplied = apply_date
    card.dueDate = due_date
    card.responseDate = response_date

    setApplyDate(apply_date)
    setDueDate(due_date)
    setResponseDate(response_date)
    setNotes(card.Notes)


  })
} 

useEffect(() => {
  let ignore = false;
  if (!ignore) {
    GETS()
  }
  return () => { ignore = true; }
  },[]);

  if (card.responseDate === undefined) {
    var response_date = undefined
  } else {
    response_date = moment.parseZone(card.responseDate).format('YYYY-MM-DD');
  }
  if (card.dateApplied === undefined) {
    var apply_date = undefined
  } else {
    apply_date = moment.parseZone(card.dateApplied).format('YYYY-MM-DD');
  }
  if (card.dueDate === undefined) {
    var due_date = undefined
  } else {
    due_date = moment.parseZone(card.dueDate).format('YYYY-MM-DD');
  }

  const [company, setCompany] = useState(card.name);
  const [position, setPosition] = useState(card.role);
  const [applyLink, setApplyLink] = useState(card.link);
  const [applyDate, setApplyDate] = useState(apply_date);
  const [responseDate, setResponseDate] = useState(response_date);
  const [dueDate, setDueDate] = useState(due_date);
  const [notes, setNotes] = useState(card.Notes);
  
// changes card's properties
card.name = company;
card.role = position;
card.link = applyLink
card.applyDate = applyDate
card.responseDate = responseDate
card.dueDate = dueDate
card.notes = notes 

//Another step to not make the cards appear weird
card.dateApplied = applyDate
card.dueDate = dueDate
card.responseDate = responseDate
card.Notes = notes

  //console.log(columns);
  //console.log(typeof setColumns);
  //console.log(typeof closeModal);

  let myRef;

  // useEffect(() => {
  //   console.log(JSON.stringify(column));
  //   console.log(JSON.stringify(card));
  //   console.log(card.id);
  // }, []);


  const closeEditCardModal = (e) => {
    if (myRef && myRef.contains(e.target)) {
      closeModal();
    }
  };
  function deleteCard() {
    //alert(column.name)
    // index position of card in column
    //alert(index)
    var User;
    var token;
    if (JSON.parse(localStorage.getItem('user')) === null) {
      User = JSON.parse(sessionStorage.getItem('user'))
      token = User.token
    } else {
      User = JSON.parse(localStorage.getItem('user')) 
      token = User.token
    }

    column.items.forEach(function (arrayItem) {
        if (arrayItem.id === card.id) {
        axios.patch("/api/cards/", {
          cardID: card.id
        }, {
              headers: {
                Authorization : `Bearer ${token}`
              }
        })  
        let ind = column.items.indexOf(arrayItem)
        column.items.splice(ind, 1);       
        }
    })
  }

  const handleSubmit = (e) => {
    var User;
    var token;
    if (JSON.parse(localStorage.getItem('user')) === null) {
      User = JSON.parse(sessionStorage.getItem('user'))
      token = User.token
    } else {
      User = JSON.parse(localStorage.getItem('user')) 
      token = User.token
    }  

    // changes card's properties
    // card.name = company;
    // card.role = position;
    // card.link = applyLink
    // card.applyDate = applyDate
    // card.responseDate = responseDate
    // card.dueDate = dueDate
    // card.notes = notes
   
    axios.patch("/api/cards/UP", {
    companyName: card.name,
    positionTitle: card.role,
    applicationLink: card.link,
    dateApplied: card.applyDate,
    responseDate: card.responseDate,
    dueDate: card.dueDate,
    Notes: card.notes,
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
          <h1 className="form-title">{company} - {position}</h1>
          <div className="company-input">
            <h4>Company Name</h4>

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
            <h4>Position Title</h4>

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
