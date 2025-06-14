# REAL-TIME-CHAT-APPLICATION

COMPANY: CODTECH IT SOLUTIONS

NAME: KONDAVARIPALLI RANADEEP REDDY

INTERN ID: CT04DM285

DOMAIN: FRONTEND WEB DEVELOPMENT

DURATION: 4 WEEKS

MENTOR: NEELA SANTOSH

DESCRIPTION: This task involves the design and implementation of a real-time chat application using React for the frontend and WebSocket (via Node.js and the 'ws' library) for the backend communication. The primary objective of this project is to enable multiple users to communicate with each other in real-time over a local or internet-connected environment using bidirectional data transfer facilitated by WebSockets. The application was developed on a local machine, using Visual Studio Code as the development environment, with the frontend client running on port 3001 and the backend WebSocket server listening on port 8080. Initially, the project setup began with creating the backend using Node.js where a WebSocket server was     initialized and configured to handle connections, broadcast messages to all connected clients, and manage errors and disconnections gracefully. The server code includes logic to handle new connections, parse incoming messages as JSON, assign timestamps, and broadcast the data back to all users including the sender. On the frontend side, React was used to build a modern, interactive user interface. React Hooks such as useState, useEffect, and useRef were utilized to manage application state and handle the lifecycle of the WebSocket connection. A key feature added was prompting users to enter their username before joining the chat, ensuring identification of each participant in the chat room. The application UI was enhanced using CSS, where the layout was made responsive and modern with the help of styled borders, padding, background colors, box shadows, and hover effects to improve user experience. Messages from the user and other participants were visually differentiated using color-coded chat bubbles and alignment, with timestamps displayed under each message. The frontend sends messages over the WebSocket connection, which are then received by the backend and relayed to all other clients in real-time. This bi-directional, event-driven communication makes the app suitable for scenarios requiring live updates such as messaging, customer support, multiplayer games, and collaborative workspaces. The application was also tested in multiple browser tabs, including incognito mode, to ensure that message broadcasting and UI rendering behaved consistently. The problem of duplicate message sending was debugged and resolved by avoiding pushing the same message twice from both client and server simultaneously. This task holds real-world applicability in any field where instant, real-time communication is required, including but not limited to enterprise internal chat systems, online education platforms, event-driven customer service systems, and healthcare for teleconsultation tools. By enabling seamless and immediate data exchange, it demonstrates the power of WebSockets over traditional polling mechanisms, reducing latency and server overhead. Moreover, such a project lays the foundation for more advanced implementations such as private chat rooms, file sharing, typing indicators, notifications, and even end-to-end encryption for secure messaging. In summary, the real-time chat application developed in this task is not just a demonstration of technical capability using JavaScript and WebSocket protocols, but also an example of how modern web technologies can be used to create engaging and highly interactive communication platforms applicable in a wide range of domains across industries.

OUTPUT

![Image](https://github.com/user-attachments/assets/89056241-d7b1-4383-9aa3-7d3060114390)

![Image](https://github.com/user-attachments/assets/57527ed2-fd8f-448b-9808-0312d58e79dc)

