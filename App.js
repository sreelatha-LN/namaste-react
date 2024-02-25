const heading= React.createElement("div",{id:"heading"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Im a H1 tag"),React.createElement("h2",{},"Im a H2 tag")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Im a H1 tag"),React.createElement("h2",{},"Im a H2 tag")])])
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);