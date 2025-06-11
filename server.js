const WebSocket = require('ws');

const PORT = 8080;

// Start WebSocket server
const wss = new WebSocket.Server({ port: PORT }, () => {
  console.log(`✅ WebSocket server started at ws://localhost:${PORT}`);
});

// Helper to broadcast messages to all connected clients
function broadcast(data, sender = null) {
  const payload = JSON.stringify(data);
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  });
}

// Handle connections
wss.on('connection', (ws) => {
  console.log("👤 New client connected");

  // Send welcome message to this client only
  ws.send(JSON.stringify({
    username: "Server",
    text: "👋 Welcome to the chat!",
    time: new Date().toLocaleTimeString()
  }));

  // Message handler
  ws.on('message', (data) => {
    let msg;
    try {
      msg = JSON.parse(data);
      msg.time = new Date().toLocaleTimeString();

      console.log(`💬 ${msg.username}: ${msg.text}`);

      // Broadcast to all including sender
      broadcast(msg);

    } catch (err) {
      console.error("❌ Invalid message format:", err.message);
      ws.send(JSON.stringify({
        username: "Server",
        text: "⚠️ Message format error.",
        time: new Date().toLocaleTimeString()
      }));
    }
  });

  ws.on('close', () => {
    console.log("👋 Client disconnected");
  });

  ws.on('error', (err) => {
    console.error("⚠️ WebSocket error:", err.message);
  });
});
