import "./AddCardModal.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";


const AddCardModal = ({ closeModal, column, columns, setColumns }) => {
  const [company, setCompany] = useState();
  const [position, setPosition] = useState();
  const [applyLink, setApplyLink] = useState();

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
    const local_user  = JSON.parse(localStorage.getItem('user'))
    const user_ID = local_user.id
   
    const Items_id = uuidv4()
    column.items.push({ id: Items_id, name: company, role: position });

const token = local_user.token
    axios.post("/api/cards", {
      companyName: company,
      positionTitle: position,
      user_ID: user_ID,
      columnLocation: column.name,
      cardID: Items_id
    }, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })

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
