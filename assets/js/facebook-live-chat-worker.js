// Handle incoming messages
async function handleMessages(request) {
  try {
    const payload = await request.json();
    const { entry } = payload;

    for (const entryItem of entry) {
      const { messaging } = entryItem;
      for (const event of messaging) {
        if (event.message) {
          const { sender, message } = event;
          const { id: senderId } = sender;
          const { text } = message;

          console.log(`Received message from sender ID ${senderId}: ${text}`);

          // You can add your custom logic here to process the received message
        }
      }
    }
  } catch (error) {
    console.error("Error handling incoming message:", error);
  }

  return new Response("OK", { status: 200 });
}

// Handle incoming requests
addEventListener("fetch", event => {
  if (event.request.method === "POST") {
    event.respondWith(handleMessages(event.request));
  } else {
    event.respondWith(new Response("Method Not Allowed", { status: 405 }));
  }
});
