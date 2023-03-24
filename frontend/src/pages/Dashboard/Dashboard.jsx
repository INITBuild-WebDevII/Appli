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
import { useLogout } from "../../hooks/useLogout";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


let itemsFromBackend1 =[]
let itemsFromBackend2 = []
let itemsFromBackend3 =[]
let itemsFromBackend4 = []

function Company() {
  itemsFromBackend1.length = 0
  itemsFromBackend2.length = 0
  itemsFromBackend3.length = 0
  itemsFromBackend4.length = 0
  const User = JSON.parse(localStorage.getItem('user'))
  const user_id = User.id

 const token = User.token

  // useEffect(() => {
      axios.post("/api/cards/GET", {
        user_ID: user_id
    }, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    })
    .then((response) => {
        const myArray = response.data

        myArray.forEach(function (arrayItem) {
          if (arrayItem.columnLocation === "To Apply") {
            itemsFromBackend1.push({id: arrayItem.cardID, name: arrayItem.companyName, role: arrayItem.positionTitle})
          } else if (arrayItem.columnLocation === "Applied") {
            itemsFromBackend2.push({id: arrayItem.cardID, name: arrayItem.companyName, role: arrayItem.positionTitle})
          } else if (arrayItem.columnLocation === "In Progress") {
            itemsFromBackend3.push({id: arrayItem.cardID, name: arrayItem.companyName, role: arrayItem.positionTitle})
          } else if (arrayItem.columnLocation === "Accepted") {
            itemsFromBackend4.push({id: arrayItem.cardID, name: arrayItem.companyName, role: arrayItem.positionTitle})
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
    const local_Card_Name  = JSON.parse(sessionStorage.getItem('card'))
   // const user_local = JSON.parse(localStorage.getItem('user'))
    //const user_local_id = user_local.id
    const User = JSON.parse(localStorage.getItem('user'))
    const token = User.token

    axios.patch("/api/cards/Test", {
      columnLocation: local_Card_Name,
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
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function createNewCard(column, columns, setColumns) {
  //alert(column.name);
  console.log(JSON.stringify(column));

  column.items.push({ id: uuidv4(), name: "New" });

  setColumns({
    ...columns,
  });
}

function deleteCard(column, index, columns, setColumns) {
  //alert(column.name)
  // index position of card in column
  //alert(index)

  const User = JSON.parse(localStorage.getItem('user'))
  const token = User.token
  console.log(column.items[index].id)
  axios.patch("/api/cards/", {
    cardID: column.items[index].id
  }, {
        headers: {
          Authorization : `Bearer ${token}`
        }
      })

  column.items.splice(index, 1);

  setColumns({
    ...columns,
  });
}

function Dashboard() {
  //const {logout} = useLogout()
  const [columns, setColumns] = useState(columnsFromBackend);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeColumn, setActiveColumn] = useState(); // the column the user selected to add

  useEffect(() => {
    let ignore = false;
    
    if (!ignore) {
      Company() 
    }
    return () => { ignore = true; }
    },[]);
  
  // handles displaying Modal
  const handleShowModal = (column) => {
    // track which column was selected
    setActiveColumn(column);

    // make modal appear
    setShowModal(true);
  };

  // handle closing the Modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="dashboard">
      {loading ? (
        <div className="loader-container">
          <BeatLoader
            color={"#b156f2"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="main-contain">
          <DashNavbar />
          {showModal && (
            <AddCardModal
              closeModal={handleCloseModal}
              column={activeColumn}
              columns={columns}
              setColumns={setColumns}
            />
          )}
         
          <div className="heading">
            <h1 className="heading middle">My Applications</h1>
            <a className="heading right" href="/Profile">
              <img className="profile-img" src="" alt="" />
              Username
            </a>
          </div>

          {/*<h1 className="greeting">Hello, User</h1>*/}

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
                        onClick={() => handleShowModal(column)}
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
                                        
                                          onClick={() =>
                                            console.log(index + "," + item.name + item.id)
                                          }
                                          onDragStart={(e)=>{e.preventDefault()}}
                                        >
                                          <p>{item.name}</p>
                                          <p style={{ fontSize: "13px" }}>
                                            {item.role}
                                          </p>

                                          <button
                                            onClick={() =>
                                              deleteCard(
                                                column,
                                                index,
                                                columns,
                                                setColumns
                                              )
                                            }
                                            style={{ float: "right" }}
                                          >
                                            Delete
                                          </button>
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
      )}
    </div>

  );
}

export default Dashboard;

