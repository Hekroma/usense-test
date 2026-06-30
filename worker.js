export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith('/serpapi/')) {
      const path = url.pathname.replace('/serpapi', '');
      const target = `https://serpapi.com${path}${url.search}`;
      const response = await fetch(target);
      const body = await response.text();
      return new Response(body, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    try {
      const assetResponse = await env.ASSETS.fetch(request);
      if (assetResponse.status !== 404) {
        return assetResponse;
      }
    } catch {
      // asset not found — fall through to SPA fallback
    }

    return env.ASSETS.fetch(new Request(`${url.origin}/index.html`));
  },
};
