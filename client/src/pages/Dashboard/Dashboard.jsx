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
import { AiOutlineBell } from "react-icons/ai";
import { ImExit } from "react-icons/im";
import { useLogout } from "../../hooks/useLogout";
import axios from "axios";
import { Link } from "react-router-dom";

let itemsFromBackend1 = [];
let itemsFromBackend2 = [];
let itemsFromBackend3 = [];
let itemsFromBackend4 = [];

function Company() {
  itemsFromBackend1.length = 0;
  itemsFromBackend2.length = 0;
  itemsFromBackend3.length = 0;
  itemsFromBackend4.length = 0;

  var User;
  var user_id;
  var token;
  if (JSON.parse(localStorage.getItem("user")) === null) {
    User = JSON.parse(sessionStorage.getItem("user"));
    user_id = User.id;
    token = User.token;
  } else {
    User = JSON.parse(localStorage.getItem("user"));
    user_id = User.id;
    token = User.token;
  }

  // useEffect(() => {
  axios
    .post(
      "/api/cards/GET",
      {
        user_ID: user_id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => {
      const myArray = response.data;
      console.log(response);
      myArray.forEach(function (arrayItem) {
        if (arrayItem.columnLocation === "To Apply") {
          itemsFromBackend1.push({
            id: arrayItem.cardID,
            name: arrayItem.companyName,
            role: arrayItem.positionTitle,
            link: arrayItem.applicationLink,
            dateApplied: arrayItem.dateApplied,
            dueDate: arrayItem.dueDate,
            responseDate: arrayItem.responseDate,
            Notes: arrayItem.Notes,
          });
        } else if (arrayItem.columnLocation === "Applied") {
          itemsFromBackend2.push({
            id: arrayItem.cardID,
            name: arrayItem.companyName,
            role: arrayItem.positionTitle,
            link: arrayItem.applicationLink,
            dateApplied: arrayItem.dateApplied,
            dueDate: arrayItem.dueDate,
            responseDate: arrayItem.responseDate,
            Notes: arrayItem.Notes,
          });
        } else if (arrayItem.columnLocation === "In Progress") {
          itemsFromBackend3.push({
            id: arrayItem.cardID,
            name: arrayItem.companyName,
            role: arrayItem.positionTitle,
            link: arrayItem.applicationLink,
            dateApplied: arrayItem.dateApplied,
            dueDate: arrayItem.dueDate,
            responseDate: arrayItem.responseDate,
            Notes: arrayItem.Notes,
          });
        } else if (arrayItem.columnLocation === "Accepted") {
          itemsFromBackend4.push({
            id: arrayItem.cardID,
            name: arrayItem.companyName,
            role: arrayItem.positionTitle,
            link: arrayItem.applicationLink,
            dateApplied: arrayItem.dateApplied,
            dueDate: arrayItem.dueDate,
            responseDate: arrayItem.responseDate,
            Notes: arrayItem.Notes,
          });
        }
      });
    });
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
    deleteCard();
    console.log(destination.index);
    sessionStorage.setItem("card", JSON.stringify(destColumn.name));
    sessionStorage.setItem("cardARR", JSON.stringify(destination.index));
    const local_Card_Name = JSON.parse(sessionStorage.getItem("card"));
    // const user_local = JSON.parse(localStorage.getItem('user'))
    //const user_local_id = user_local.id
    var User;

    var token;
    if (JSON.parse(localStorage.getItem("user")) === null) {
      User = JSON.parse(sessionStorage.getItem("user"));
      token = User.token;
    } else {
      User = JSON.parse(localStorage.getItem("user"));
      token = User.token;
    }

    axios.patch(
      "/api/cards/Test",
      {
        columnLocation: local_Card_Name,
        index: destination.index,
        id: result.draggableId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);

    sessionStorage.setItem("cardARR", JSON.stringify(destination.index));
    const User2 = JSON.parse(sessionStorage.getItem("cardARR"));
    var User;
    var token;
    if (JSON.parse(localStorage.getItem("user")) === null) {
      User = JSON.parse(sessionStorage.getItem("user"));
      token = User.token;
    } else {
      User = JSON.parse(localStorage.getItem("user"));
      token = User.token;
    }

    axios.patch(
      "/api/cards/Test",
      {
        index: destination.index,
        id: result.draggableId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

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
  var User;
  var token;
  if (JSON.parse(localStorage.getItem("user")) === null) {
    User = JSON.parse(sessionStorage.getItem("user"));
    token = User.token;
  } else {
    User = JSON.parse(localStorage.getItem("user"));
    token = User.token;
  }

  const User2 = JSON.parse(sessionStorage.getItem("cardARR"));
  console.log(User2 + "L");
}
function Dashboard() {
  //const {logout} = useLogout()
  const [columns, setColumns] = useState(columnsFromBackend);
  const [loading, setLoading] = useState(false);
  const [showAddCardModal, setshowAddCardModal] = useState(false);
  const [showEditCardModal, setshowEditCardModal] = useState(false);
  const [activeColumn, setActiveColumn] = useState(); // the column the user selected to add
  const [activeCard, setActiveCard] = useState(); // the card the user selected to edit
  const { logout } = useLogout();

  useEffect(() => {
    let ignore = false;

    if (!ignore) {
      Company();
    }
    return () => {
      ignore = true;
    };
  }, []);

  // handles displaying the add card Modal
  const handleshowAddCardModal = (column) => {
    // tracks which column was selected
    setActiveColumn(column);

    // make modal appear
    setshowAddCardModal(true);
  };

  // handles displaying Modal
  const handleshowEditCardModal = (column, card) => {
    console.log(card);
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

  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleLogout = () => {
    console.log("TEST");
    logout();
  };
  var User;
  var Id;
  var email;
  if (JSON.parse(localStorage.getItem("user")) === null) {
    User = JSON.parse(sessionStorage.getItem("user"));
    Id = User.id;
    email = User.email;
  } else {
    User = JSON.parse(localStorage.getItem("user"));
    Id = User.id;
    email = User.email;
  }

  axios
    .post("/api/users/look", {
      Uid: Id,
    })
    .then((response) => {
      console.log(response);
      sessionStorage.setItem(
        "username",
        JSON.stringify(response.data.Username)
      );
      // sessionStorage.setItem('userL', JSON.stringify(response.data.lastName))
      // console.log(response.data.firstName)
      // console.log(response.data.lastName)
    });

  const Username = JSON.parse(sessionStorage.getItem("username"));

  return (
    <div className="dashboard">
      {loading && (
        <div className="loader-container">
          <BeatLoader
            color={"#b156f2"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      {!loading && (
        <div>
          <DashNavbar />
          <div className="main-contain">
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
                  <div className="initial-container">
                    <p1 className="profile-initial"> {Username.charAt(0)} </p1>
                  </div>
                  <div className="userInfo">
                    <p1 className="userN-headingright"> {Username} </p1>
                    <br />
                    <p1 className="userE-headingright"> {email} </p1>
                  </div>
                  <br />
                  <p1 className="bell-headingright">
                    <AiOutlineBell size={30} />
                  </p1>
                  <Link to="/">
                    <div className="door-headingright" onClick={handleLogout}>
                      {" "}
                      <ImExit size={32} />
                    </div>{" "}
                  </Link>

                  <div />
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
                                              backgroundColor:
                                                snapshot.isDragging
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

                                            {/* <button
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
                                          </button> */}
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
        </div>
      )}
    </div>
  );
}

export default Dashboard;
