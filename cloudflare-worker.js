export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);

    const targetUrl = `https://serpapi.com/search.json${incomingUrl.search}`;

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
    });

    const newResponse = new Response(response.body, response);
    newResponse.headers.set("Access-Control-Allow-Origin", "*");
    return newResponse;
  },
};
