---

# ChatGPT Clone - AI Chat App  

🚀 A **React Native** chat application powered by **Google Gemini API**, providing AI-generated responses in real time.  

## ✨ Features  
✅ User authentication (Login, Registration)  
✅ AI-powered chatbot using **Gemini API**  
✅ Smooth chat UI with message history  
✅ AI-generated image responses (if integrated)  
✅ Firebase integration for backend services  

## 📌 Technologies Used  
- **React Native (Expo)**  
- **Google Gemini API** (for AI responses)  
- **Firebase** (for authentication & backend)  
- **Axios** (for API calls)  

## ⚙️ Setup Instructions  

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Install Dependencies  
```sh
npm install
```

### 3️⃣ Set Up Environment Variables  
Create a **.env** file in the project root and add:  
```env
GEMINI_API_KEY=your_actual_api_key
```
Also, make sure `.env` is added to `.gitignore` to keep your key safe.  

### 4️⃣ Run the App  
```sh
npm start
```
or  
```sh
expo start
```

## 📜 API Usage  
This project uses **Google Gemini API** for AI-powered chat responses.  
Ensure you have:  
✅ **Enabled the API in Google Cloud Console**  
✅ **Generated a valid API key**  

API endpoint used:  
```plaintext
https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY
```

## 💡 Future Improvements  
- UI enhancements  
- Support for voice-based interactions  
- Integration with cloud storage for chat history  

---
