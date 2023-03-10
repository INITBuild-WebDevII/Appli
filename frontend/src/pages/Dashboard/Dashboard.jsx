import DashNavbar from "../../components/Dashboard/DashNavbar";
import Column from "../../components/Dashboard/Column";
import "./Dashboard.css";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const itemsFromBackend = [
  { id: uuidv4(), name: "Intel" },
  { id: uuidv4(), name: "Apple" },
  { id: uuidv4(), name: "Tesla" },
];

const columnsFromBackend = {
  [uuidv4()]: {
    name: "To Apply",
    items: itemsFromBackend,
    color: "#66b6ff",
  },
  [uuidv4()]: {
    name: "Applied",
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
    items: [{ id: uuidv4(), name: "Meta" }],
    color: "#f4b870",
  },
  [uuidv4()]: {
    name: "Accepted",
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

function Dashboard() {
  const [columns, setColumns] = useState(columnsFromBackend);

  return (
    <div className="dashboard">
      <DashNavbar />
      <div className="main-contain">
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
                    <h1>{column.items.length}</h1>
                  </div>
                  <div className="category-contain">
                    <Droppable droppableId={id} key={id}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightgrey"
                                : "",
                              padding: 4,
                              width: 250,
                              borderRadius: 9,
                            }}
                            className="items-container"
                          >
                            <p>{column.name}</p>
                            <button className="category-btn" type="submit">
                              +
                            </button>
                            <hr />
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
                                      >
                                        {item.name}
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
  );
}

export default Dashboard;
