import cv2
import socket
import time
import threading
import webbrowser
from flask import Flask, Response, render_template_string

app = Flask(__name__)

# ================= CAMERA SETUP =================
camera = cv2.VideoCapture(0)
start_time = time.time()
fps = 0
frame_count = 0
lock = threading.Lock()

# ================= GET LOCAL IP =================
def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip

LOCAL_IP = get_local_ip()

# ================= FRAME GENERATOR =================
def generate_frames():
    global fps, frame_count
    prev_time = time.time()

    while True:
        success, frame = camera.read()
        if not success:
            break

        # FPS calculation
        frame_count += 1
        current_time = time.time()
        if current_time - prev_time >= 1:
            fps = frame_count
            frame_count = 0
            prev_time = current_time

        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()

        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')

# ================= ROUTES =================

@app.route('/')
def dashboard():
    return render_template_string(f"""
<!DOCTYPE html>
<html>
<head>
<title>Smart Lobby Monitoring Dashboard</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Poppins:wght@400;600&display=swap" rel="stylesheet">

<style>
body {{
    margin: 0;
    background: linear-gradient(135deg, #280C49, #4B2B83);
    font-family: 'Poppins', sans-serif;
    color: white;
    text-align: center;
}}

.header {{
    padding: 18px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 2px;
    background: #4B2B83;
    border-bottom: 3px solid #DCB477;
}}

.container {{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 30px 40px;
}}

.card {{
    background: #3A175C;
    padding: 25px;
    border-radius: 15px;
    width: 240px;
    text-align: left;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);
}}

.card h3 {{
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: #DCB477;
    margin-bottom: 15px;
}}

.video-container {{
    position: relative;
    border: 4px solid #DCB477;
    border-radius: 15px;
    overflow: hidden;
}}

.video-container img {{
    width: 640px;
    height: auto;
    display: block;
}}

.footer {{
    margin-top: 15px;
}}

.copy-btn {{
    background: #A37930;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
}}

.copy-btn:hover {{
    background: #DCB477;
}}

.url-display {{
    margin-top: 10px;
    font-size: 14px;
    color: #DCB477;
}}

.status-live {{
    color: #00FF9D;
    font-weight: 600;
}}
</style>
</head>

<body>

<div class="header">SMART LOBBY MONITORING DASHBOARD</div>

<div class="container">

    <div class="card">
        <h3>Session Info</h3>
        <p><b>Device:</b> Laptop Camera</p>
        <p><b>Status:</b> <span class="status-live">Live</span></p>
        <p><b>FPS:</b> <span id="fps">{fps}</span></p>
        <p><b>Session Time:</b> <span id="timer">0 sec</span></p>
    </div>

    <div>
        <div class="video-container">
            <img src="/video">
        </div>

        <div class="footer">
            <button class="copy-btn" onclick="copyURL()">Copy Dashboard URL</button>
            <div class="url-display" id="urlText">
                http://{LOCAL_IP}:5000
            </div>
        </div>
    </div>

    <div class="card">
        <h3>Network Info</h3>
        <p><b>IP Address:</b> {LOCAL_IP}</p>
        <p><b>Port:</b> 5000</p>
        <p><b>Mode:</b> Development</p>
        <p><b>System:</b> Ready</p>
    </div>

</div>

<script>
// Timer
let startTime = Date.now();
setInterval(() => {{
    let seconds = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById("timer").innerText = seconds + " sec";
}}, 1000);

// Reliable Copy (works on HTTP)
function copyURL() {{
    const text = "http://{LOCAL_IP}:5000";
    
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Dashboard URL Copied!");
}}
</script>

</body>
</html>
""")

@app.route('/video')
def video():
    return Response(generate_frames(),
                    mimetype='multipart/x-mixed-replace; boundary=frame')

# ================= AUTO OPEN BROWSER =================
def open_browser():
    webbrowser.open(f"http://{LOCAL_IP}:5000")

if __name__ == "__main__":
    print("Dashboard running at:")
    print(f"http://{LOCAL_IP}:5000")
    threading.Timer(1.5, open_browser).start()
    app.run(host="0.0.0.0", port=5000, debug=False)













