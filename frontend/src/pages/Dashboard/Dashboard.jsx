import DashNavbar from "../../components/Dashboard/DashNavbar";
import Column from "../../components/Dashboard/Column";
import "./Dashboard.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { IconContext } from "react-icons";
import { AiOutlineStar, AiOutlineCheck } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";
import { BsTrophy } from "react-icons/bs";
import BeatLoader from "react-spinners/BeatLoader";
import { useAuthContext } from "../../hooks/useAuthContext";
import AddCardModal from "../../components/Modals/AddCardModal";
import EditCardModal from "../../components/Modals/EditCardModal";
import {AiOutlineBell} from "react-icons/ai"
import {MdExpandMore} from "react-icons/md"
import { useLogout } from "../../hooks/useLogout";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


//Holding the individual Cards in each Column
let itemsFromBackend1 =[]
let itemsFromBackend2 = []
let itemsFromBackend3 =[]
let itemsFromBackend4 = []

function Company() {
  //Needs the length to start at 0, to not have any repeats of Cards
  itemsFromBackend1.length = 0
  itemsFromBackend2.length = 0
  itemsFromBackend3.length = 0
  itemsFromBackend4.length = 0

  //To hold the User information onto the local/session storage
  var User;
  var user_id;
  var token;
  if (JSON.parse(localStorage.getItem('user')) === null) {
    User = JSON.parse(sessionStorage.getItem('user'))
    user_id = User.id
    token = User.token
  } else {
    User = JSON.parse(localStorage.getItem('user')) 
    user_id = User.id
    token = User.token
  }

  // To retreive all the cars that coressponds to the User
      axios.post("/api/cards/GET", {
        user_ID: user_id
    }, {
      //Needed to put the token on the header to authorize this process
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    .then((response) => {
      /*To check every individual card that user has and put it into the 
      corressponding column location */
        const myArray = response.data
        myArray.forEach(function (arrayItem) {
          if (arrayItem.columnLocation === "To Apply") {
            itemsFromBackend1.push({id: arrayItem.cardID, name: arrayItem.companyName, 
              role: arrayItem.positionTitle, link: arrayItem.applicationLink, dateApplied: arrayItem.dateApplied, 
              dueDate: arrayItem.dueDate, responseDate: arrayItem.responseDate,
              Notes: arrayItem.Notes})
          } else if (arrayItem.columnLocation === "Applied") {
            itemsFromBackend2.push({id: arrayItem.cardID, name: arrayItem.companyName, 
              role: arrayItem.positionTitle, link: arrayItem.applicationLink, dateApplied: arrayItem.dateApplied, 
              dueDate: arrayItem.dueDate, responseDate: arrayItem.responseDate,
              Notes: arrayItem.Notes})
          } else if (arrayItem.columnLocation === "In Progress") {
            itemsFromBackend3.push({id: arrayItem.cardID, name: arrayItem.companyName, 
              role: arrayItem.positionTitle, link: arrayItem.applicationLink, dateApplied: arrayItem.dateApplied, 
              dueDate: arrayItem.dueDate, responseDate: arrayItem.responseDate,
              Notes: arrayItem.Notes})
          } else if (arrayItem.columnLocation === "Accepted") {
            itemsFromBackend4.push({id: arrayItem.cardID, name: arrayItem.companyName, 
              role: arrayItem.positionTitle, link: arrayItem.applicationLink, dateApplied: arrayItem.dateApplied, 
              dueDate: arrayItem.dueDate, responseDate: arrayItem.responseDate,
              Notes: arrayItem.Notes})
          }  
        })
    })
}

const columnsFromBackend = {
  [uuidv4()]: {
    name: "To Apply",
    icon: <AiOutlineStar color="white" size={"0.75em"} />,
    items: itemsFromBackend1,
    color: "#66b6ff",
  },
  [uuidv4()]: {
    name: "Applied",
    icon: <AiOutlineCheck color="white" size={"0.75em"} />,
    items: itemsFromBackend2,
    color: "#54bb5a",
  },
  [uuidv4()]: {
    name: "In Progress",
    icon: <RiStackLine color="white" size={"0.75em"} />,
    items: itemsFromBackend3,
    color: "#f4b870",
  },
  [uuidv4()]: {
    name: "Accepted",
    icon: <BsTrophy color="white" size={"0.7em"} />,
    items: itemsFromBackend4,
    color: "#ff6798",
  },
};

//This drags the individual cards
const onDragEnd = (result, columns, setColumns, item) => {
  // nothing will happen if we drop card outside of column area
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        
        items: destItems,
      },
    });

    sessionStorage.setItem('card', JSON.stringify(destColumn.name))
    sessionStorage.setItem('cardARR', JSON.stringify(destination.index))
    const local_Card_Name  = JSON.parse(sessionStorage.getItem('card'))
   
    //To get the user token on the local/session storage
    var User;
    var token;
    if (JSON.parse(localStorage.getItem('user')) === null) {
      User = JSON.parse(sessionStorage.getItem('user'))
      token = User.token
    } else {
      User = JSON.parse(localStorage.getItem('user')) 
      token = User.token
    }

    //This uses card Drag Id to update the column location  
    axios.patch("/api/cards/Test", {
      columnLocation: local_Card_Name,
      index: destination.index,
      id: result.draggableId  
    }, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);

    //Put the card column location on the session storage
    sessionStorage.setItem('cardARR', JSON.stringify(destination.index))
    const User2 = JSON.parse(sessionStorage.getItem('cardARR'))
    
    //To get the user token on the local/session storage
    var User;
    var token;
    if (JSON.parse(localStorage.getItem('user')) === null) {
      User = JSON.parse(sessionStorage.getItem('user'))
      token = User.token
    } else {
      User = JSON.parse(localStorage.getItem('user')) 
      token = User.token
    }

    //This uses card Drag Id to update the column location
    axios.patch("/api/cards/Test", {
      index: destination.index,
      id: result.draggableId  
    }, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};


function Dashboard() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [loading, setLoading] = useState(false);
  const [showAddCardModal, setshowAddCardModal] = useState(false);
  const [showEditCardModal, setshowEditCardModal] = useState(false);
  const [activeColumn, setActiveColumn] = useState(); // the column the user selected to add
  const [activeCard, setActiveCard] = useState(); // the card the user selected to edit
 const {logout} = useLogout()

//Needed to run the function that puts the cards in the right columns only once
  useEffect(() => {
    let ignore = false;
    
    if (!ignore) {
      Company() 
    }
    return () => { ignore = true; }
    },[]);

  // handles displaying the add card Modal
  const handleshowAddCardModal = (column) => {
    // tracks which column was selected
    setActiveColumn(column);

    // make modal appear
    setshowAddCardModal(true);
  };
  
  // handles displaying Modal
  const handleshowEditCardModal = (column, card) => {
    console.log(card)
    // track which column was selected
    setActiveColumn(column);

    // tracks which card was selected
    setActiveCard(card);

    // make modal appear
    setshowEditCardModal(true);
  };

  // handle closing the add card Modal
  const handleCloseAddCardModal = () => {
    setshowAddCardModal(false);
  };

  // handle closing the edit card Modal
  const handleCloseEditCardModal = () => {
    setshowEditCardModal(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  //Connect to the useLogout in the hooks, to logout the user
  const handleLogout = () => {
    logout()
  } 
  
  //Used to got the information of the User from the local/session storage
  var User;
  var Id;
  var email;
  if (JSON.parse(localStorage.getItem('user')) === null) {
    User = JSON.parse(sessionStorage.getItem('user'))
    Id = User.id
    email = User.email
  } else {
    User = JSON.parse(localStorage.getItem('user')) 
    Id = User.id
    email = User.email
  }

  //Used to look up which ser this is and to get there Username
  axios.post("/api/user/lookUp", {
    Uid: Id
  })
  .then((response) => {
    console.log(response)
    sessionStorage.setItem('username', JSON.stringify(response.data.Username))
  })
  var Username = JSON.parse(sessionStorage.getItem('username'))


  return (
    <div className="dashboard">
      {loading && 
        <div className="loader-container">
          <BeatLoader
            color={"#b156f2"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }
      {!loading &&
        <div className="main-contain">
          <DashNavbar />
          {showAddCardModal && (
            <AddCardModal
              closeModal={handleCloseAddCardModal}
              column={activeColumn}
              columns={columns}
              setColumns={setColumns}
            />
          )}
          {showEditCardModal && (
            <EditCardModal
              closeModal={handleCloseEditCardModal}
              column={activeColumn}
              card={activeCard}
            />
          )}
          <div className="heading">
            <h1 className="middle">My Applications</h1>
            <div className="heading-right-container"> 
              <div className="right" href="/Profile">
                  <img className="profile-img" src="" alt="" />
                  
                <div className="userInfo" >
                  <p1 className="userN-headingright" >  {Username} </p1>
                  <br />
                  <p1 className="userE-headingright"> {email} </p1>
                  <br/>
                  <p1 className="bell-headingright"><AiOutlineBell size={30}/></p1>
                  <div className="expand-headingright" onClick={handleLogout}> <MdExpandMore size={35}/></div>
                </div>
                <div/>
              </div>
            </div>
          </div>

          <h1 className="greeting">Hello, {Username}</h1>

          <div className="board-columns">
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([id, column]) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: 10,
                    }}
                  >
                    {/**className="category-column" */}
                    <div
                      style={{ backgroundColor: column.color }}
                      className="category-heading"
                    >
                      <p>{column.name}</p>
                      <h1> {column.items.length}</h1>
                      <h1 className="icons-columns">{column.icon}</h1>
                    </div>
                    <div className="category-contain">
                      <p className="column-name">{column.name}</p>
                      
                      <button
                        className="category-btn"
                        type="submit"
                        title="Add new card"
                        onClick={() => handleshowAddCardModal(column)}
                      >
                        +
                      </button>
                      
                      <hr />
                      <Droppable droppableId={id} key={id}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                padding: 4,
                                width: 250,
                                borderRadius: 9,
                              }}
                              className="items-container"
                            >
                              {column.items.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: "none",
                                            padding: 8,
                                            backgroundColor: snapshot.isDragging
                                              ? "#263B4A"
                                              : "",
                                            ...provided.draggableProps.style,
                                          }}
                                          className="item"
                                          title={item.name + " " + item.role}
                                          onClick={() => {
                                            console.log(
                                              index + "," + item.name
                                            );
                                            handleshowEditCardModal(
                                              column,
                                              item
                                            );
                                          }}
                                        >
                                          <p>{item.name}</p>
                                          <p style={{ fontSize: "13px" }}>
                                            {item.role}
                                          </p>
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
          </div>
        </div>
      }
    </div>
  );
}

export default Dashboard;

