addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const VERIFY_TOKEN = "6f138653b4276842863935f2a97f0aacsssfdss";

async function handleRequest(request) {
  // Verify the request method
  if (request.method === "GET") {
    const url = new URL(request.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    // Verify the token
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return new Response(challenge, { status: 200 });
    } else {
      return new Response("Verification Failed", { status: 403 });
    }
  } else if (request.method === "POST") {
    // Verify the request headers
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response("Invalid Content Type", { status: 400 });
    }

    // Verify the request body
    const body = await request.json();
    if (!body || !body.entry || !body.entry.length) {
      return new Response("Invalid Request Body", { status: 400 });
    }

    // Process the request body
    for (const entry of body.entry) {
      if (entry.messaging) {
        for (const event of entry.messaging) {
          // Handle each event in the entry.messaging array
          // Add your custom logic here to process each Facebook Messenger event
          // You can access the event data from the `event` object
        }
      }
    }

    // Return a response
    return new Response("OK", { status: 200 });
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}
