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

const itemsFromBackend = [
  { id: uuidv4(), name: "Intel" },
  { id: uuidv4(), name: "Apple" },
  { id: uuidv4(), name: "Tesla" },
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
      { id: uuidv4(), name: "Amazon" },
      { id: uuidv4(), name: "Google" },
      { id: uuidv4(), name: "Microsoft" },
      { id: uuidv4(), name: "UKG" },
      { id: uuidv4(), name: "Kaseya" },
      { id: uuidv4(), name: "Twitter" },
      { id: uuidv4(), name: "Oracle" },
      { id: uuidv4(), name: "Cisco" },
      { id: uuidv4(), name: "Capital One" },
    ],
    color: "#54bb5a",
  },
  [uuidv4()]: {
    name: "In Progress",
    icon: <RiStackLine color="white" size={"0.75em"} />,
    items: [{ id: uuidv4(), name: "Meta" }],
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
                      <p>{column.name}</p>
                      <button
                        className="category-btn"
                        type="submit"
                        onClick={() =>
                          createNewCard(column, columns, setColumns)
                        }
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
                                          onClick={() =>
                                            console(index + "," + item.name)
                                          }
                                        >
                                          {item.name}
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
