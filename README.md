# 📁 WhatsApp-Driven Google Drive Assistant

This project allows users to interact with their Google Drive via WhatsApp. Using Twilio's WhatsApp API, users can send commands like `LIST`, `UPLOAD`, and `DELETE` to manage their Drive contents in real-time.

## ✅ Features

- 📂 List files from Google Drive
- ⬆️ Upload files to Google Drive
- 🗑️ Delete specific files by name
- 🔒 .env based credential management
- 🌐 Exposed using ngrok for secure tunneling

---

## 🚀 Demo Preview

| Screenshot | Description |
|------------|-------------|
| ![](./assets/whatsapp_chat.png) | WhatsApp command `LIST` and Drive file response |
| ![](./assets/ngrok_tunnel.png) | Exposed local server via ngrok |
| ![](./assets/twilio_webhook.png) | Webhook configured in Twilio |
| ![](./assets/google_drive_upload.png) | Uploaded file visible in Drive |
| ![](./assets/terminal_log.png) | Server log for webhook hit |

🎥 Watch the full working [demo video](./assets/demo_video.mp4)

---

## 🛠 Tech Stack

- **Node.js** – Backend server
- **Express.js** – REST APIs
- **Twilio API** – WhatsApp messaging
- **Google Drive API** – File handling
- **Ngrok** – Public URL tunnel
- **dotenv** – Secrets & Config

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/whatsapp-drive-assistant.git
cd whatsapp-drive-assistant
npm install
