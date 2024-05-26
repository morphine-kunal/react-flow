# React Flow Pannel

React Flow Pannel is a web application built with React and React Flow library for visualizing and editing flow diagrams.
Product is live on <a href="https://frontend-assignment-kunal.vercel.app/" target="blank">Frontend Assignment Kunal</a>

## Features

- Add and edit nodes in the flow diagram
- Connect nodes to create edges
- Save and load the flow diagram
- Pop-up messages for feedback

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd react-flow-pannel
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Click on the "Message" button in the sidebar to add a new node to the flow diagram.
- Double click on a node to edit its label.
- Connect nodes by dragging from one node's handle to another node's handle.
- Click on the "Save Changes" button in the header to save the flow diagram. A pop-up message will appear indicating whether the save was successful or not.

## Customization

- You can customize the appearance of nodes and edges by modifying the `CustomNode` and `CustomEdge` components in the `src/components` directory.

## Dependencies

- React
- React Flow
- PopUp

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvement, please open an issue or submit a pull request.
