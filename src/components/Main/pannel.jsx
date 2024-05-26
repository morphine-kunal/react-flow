import { useState, useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import Header from "../Header/header";
import PopUp from "../popUp";
import CustomNode from "./customNode";

//initializing two dummy nodes

const initialNodes = [
  {
    id: "1",
    data: { label: "test message 1" },
    position: { x: 80, y: 100 },
    type: "custom",
  },
  {
    id: "2",
    data: { label: "test message 2" },
    position: { x: 250, y: 100 },
    type: "custom",
  },
];

const initialEdges = [];
const edgeType = {};

const nodeTypes = {
  custom: CustomNode, // Registering  the custom node
};

const Pannel = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [label, setLabel] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  // changing nodes position
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  //updating the edges
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );
  // connecting the nodes
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  // adding new node
  const addNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: "custom",
    };
    setNodes((nds) => nds.concat(newNode));
  };

  //showing the form to update the label of the node on Double Clicking
  const onNodeDoubleClick = (event, node) => {
    setSelectedNode(node);
    setLabel(node.data.label);
  };

  //updating the label of the node
  const handleLabelChange = (event) => {
    setLabel(event.target.value);
  };

  const handleLabelUpdate = () => {
    if (selectedNode) {
      setNodes((nds) =>
        nds.map((n) =>
          n.id === selectedNode.id
            ? { ...n, data: { ...n.data, label: label } }
            : n
        )
      );
      setSelectedNode(null);
      setLabel("");
    }
  };

  //saving the flow
  const handleSave = () => {
    const nodesWithEmptyTargetHandles = nodes.filter((node) => {
      return !edges.some((edge) => edge.target === node.id);
    });

    if (nodes.length > 1 && nodesWithEmptyTargetHandles.length > 1) {
      setPopupMessage("Cannot save Flow");
      setPopupType("error");
      console.log("error");
    } else {
      setPopupMessage("Flow saved");
      setPopupType("success");
      console.log("saved");
    }
  };

  return (
    <div className="h-screen w-full flex">
      <Header onSave={handleSave} />
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeDoubleClick={onNodeDoubleClick}
        fitView
        style={{
          background: "#FFFFFF",
        }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeType}
      >
        <Background />
        <Controls />
      </ReactFlow>

      {/* creating a side bar with a message button, on cliking that button a new node will be created on the pannel with name =  node +{ count of the node}  */}
      <aside className="border w-[300px] pt-20 px-5">
        {!selectedNode && (
          <button
            className="border-2 border-blue-700 p-4 w-[180px] rounded flex justify-center items-center"
            onClick={addNode}
          >
            <div className="flex justify-center items-center flex-col">
              <div className="w-[30px] h-[30px]">
                <img
                  src="https://img.icons8.com/?size=100&id=118377&format=png&color=000000"
                  alt="img"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-blue-700">Message</p>
            </div>
          </button>
        )}

        {/* shwoing the form to update the label */}
        {selectedNode && (
          <div>
            <header>
              <p className="flex items-center gap-3">
                {" "}
                <span
                  onClick={() => setSelectedNode(null)}
                  className="cursor-pointer"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=1806&format=png&color=000000"
                    alt="back"
                    className="w-5 h-5"
                  />
                </span>
                Message
              </p>
            </header>
            <div className="mt-4">
              <input
                type="text"
                value={label}
                onChange={handleLabelChange}
                className="border p-2 w-full"
              />
              <button
                onClick={handleLabelUpdate}
                className="mt-2 border-2 border-blue-700 p-2 w-full rounded"
              >
                Update Label
              </button>
            </div>
          </div>
        )}
      </aside>
      {/* on clickng the save button the popUp will show with the message in it... */}
      {popupMessage && <PopUp message={popupMessage} type={popupType} />}
    </div>
  );
};

export default Pannel;
