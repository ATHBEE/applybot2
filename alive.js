var http = require("http");

function startServer() {
    http.createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/html" });
        var htmlContent = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Replit Project</title>
                    <style>
                        body {
                            margin: 0;
                            padding: 0;
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            background-color: #1FF0000;
                            color: #fff;
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            transition: background-color 0.3s;
                        }
                        .container {
                            text-align: center;
                            background-color: #FF0000;
                            padding: 50px;
                            border-radius: 15px;
                            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
                            max-width: 600px;
                            animation: fadeIn 1s ease-in-out;
                        }
                        @keyframes fadeIn {
                            from { opacity: 0; transform: translateY(-20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        h1 {
                            color: #FF0000;
                            margin-bottom: 20px;
                        }
                        p {
                            color: #adb5bd;
                            line-height: 1.6;
                        }
                        .button {
                            background-color: #FF0000;
                            color: white;
                            border: none;
                            padding: 12px 25px;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 16px;
                            margin: 10px;
                            cursor: pointer;
                            border-radius: 5px;
                            transition: background-color 0.3s ease, transform 0.2s ease;
                        }
                        .button:hover {
                            background-color: #FF0000;
                            transform: translateY(-3px);
                            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                        }
                        .button.youtube { background-color: #FF0000; }
                        .button.youtube:hover { background-color: #FF0000; }
                        .button.discord { background-color: #FF0000; }
                        .button.discord:hover { background-color: #FF0000; }
                        .button.github { background-color: #FF0000; }
                        .button.github:hover { background-color: #FF0000; }
                        .button.copy {
                            background-color: #FF0000;
                        }
                        .button.copy:hover {
                            background-color: #FF0000;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Welcome to Wick Studio!</h1>
                        <p>You can reach us through the links provided in the buttons below</p>
                        <a href="https://www.youtube.com/@wick_studio" target="_blank" class="button youtube">YouTube</a>
                        <a href="https://discord.gg/wicks" target="_blank" class="button discord">Discord</a>
                        <a href="https://github.com/wickstudio" target="_blank" class="button github">GitHub</a>
                        <button class="button copy" onclick="copyLink()">Copy Link</button>
                    </div>
                    <script>
                        function copyLink() {
                            const el = document.createElement('textarea');
                            el.value = window.location.href;
                            document.body.appendChild(el);
                            el.select();
                            document.execCommand('copy');
                            document.body.removeChild(el);
                            alert('Link copied to clipboard!');
                        }
                    </script>
                </body>
            </html>
        `;

        // Send the HTML content
        res.write(htmlContent);
        res.end();
    }).listen(8080, () =>
        console.log("HTTP server running on http://localhost:8080"),
    );
}

module.exports = { startServer };
