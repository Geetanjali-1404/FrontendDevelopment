import http.server
import socketserver
import os
import webbrowser
import mimetypes

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

# Ensure robust MIME types on Windows
mimetypes.init()
mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('image/png', '.png')
mimetypes.add_type('image/jpeg', '.jpg')
mimetypes.add_type('image/jpeg', '.jpeg')
mimetypes.add_type('image/webp', '.webp')
mimetypes.add_type('text/css', '.css')
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/html', '.html')

class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = http.server.SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update({
        '.svg': 'image/svg+xml',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.webp': 'image/webp',
        '.css': 'text/css; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.html': 'text/html; charset=utf-8',
    })

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and disable restrictive caching during development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def start_server():
    port = PORT
    for attempt in range(5):
        try:
            ServerClass = getattr(http.server, 'ThreadingHTTPServer', socketserver.ThreadingTCPServer)
            with ServerClass(("", port), Handler) as httpd:
                print(f"==================================================", flush=True)
                print(f"   GOBEYOND TRAVELS - Multi-threaded Local Server", flush=True)
                print(f"   URL: http://localhost:{port}", flush=True)
                print(f"   Directory: {DIRECTORY}", flush=True)
                print(f"   Press Ctrl+C to stop the server", flush=True)
                print(f"==================================================", flush=True)
                try:
                    webbrowser.open(f"http://localhost:{port}")
                except Exception:
                    pass
                httpd.serve_forever()
                break
        except OSError:
            port += 1

if __name__ == "__main__":
    start_server()

