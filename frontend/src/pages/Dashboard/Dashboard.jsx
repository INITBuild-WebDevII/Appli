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

const itemsFromBackend = [
  {
    id: uuidv4(),
    name: "Intel",
    role: "Technology Analyist Intern",
    link: "www.intel.com",
    applyDate: "2023-03-10",
    dueDate: "2023-03-10",
    responseDate: "2023-03-10",
    notes: "Location: NY"
  },
  { id: uuidv4(), name: "Apple", role: "PM Intern" },
  { id: uuidv4(), name: "Tesla", role: "SWE New Grad" },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "To Apply",
    icon: <AiOutlineStar color="white" size={"0.75em"} />,
    items: itemsFromBackend,
    color: "#66b6ff",
  },
  [uuidv4()]: {
    name: "Applied",
    icon: <AiOutlineCheck color="white" size={"0.75em"} />,
    items: [
      {
        id: uuidv4(),
        name: "Amazon",
        role: "SWE Intern Summer 2022",
        link: "",
      },
      { id: uuidv4(), name: "Google", role: "SWE Intern" },
      { id: uuidv4(), name: "Microsoft", role: "SWE Intern" },
      { id: uuidv4(), name: "UKG", role: "SWE Intern" },
      { id: uuidv4(), name: "Kaseya", role: "Data Scientist" },
      { id: uuidv4(), name: "Twitter", role: "Product Manager" },
      { id: uuidv4(), name: "Oracle", role: "Data Engineer" },
      { id: uuidv4(), name: "Cisco", role: "Backend Engineer" },
      { id: uuidv4(), name: "Capital One", role: "Full Stack Engineer" },
    ],
    color: "#54bb5a",
  },
  [uuidv4()]: {
    name: "In Progress",
    icon: <RiStackLine color="white" size={"0.75em"} />,
    items: [{ id: uuidv4(), name: "Meta", role: "SWE Intern" }],
    color: "#f4b870",
  },
  [uuidv4()]: {
    name: "Accepted",
    icon: <BsTrophy color="white" size={"0.7em"} />,
    items: [],
    color: "#ff6798",
  },
};

const onDragEnd = (result, columns, setColumns) => {
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
  console.log(JSON.stringify(column));

  column.items.splice(index, 1);

  setColumns({
    ...columns,
  });
}

function Dashboard() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [loading, setLoading] = useState(false);
  const [showAddCardModal, setshowAddCardModal] = useState(false);
  const [showEditCardModal, setshowEditCardModal] = useState(false);
  const [activeColumn, setActiveColumn] = useState(); // the column the user selected to add
  const [activeCard, setActiveCard] = useState(); // the card the user selected to edit

  // handles displaying the add card Modal
  const handleshowAddCardModal = (column) => {
    // tracks which column was selected
    setActiveColumn(column);

    // make modal appear
    setshowAddCardModal(true);
  };

  // handles displaying edit cardModal
  const handleshowEditCardModal = (column, card) => {
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
            <h1 className="heading middle">My Applications</h1>
            <a className="heading right" href="/Profile">
                <img className="profile-img" src="" alt="" />
                
              <div className="userInfo" >
                <p1 className="userN-headingright"> username </p1>
                <br />
                <p1 className="userE-headingright"> useremail@gmail.com </p1>
                <br/>
                <p1 className="bell-headingright"><AiOutlineBell size={35}/></p1>
              </div>
              <div/>
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
