# AI Content Creation App

This is a full-stack AI-powered content creation application using Flask (Python) for the backend and React (Vite + TypeScript) for the frontend. It uses Hugging Face's inference API for text generation.

---

## Features

- User registration and login
- Secure JWT authentication
- AI-powered content generation (via Hugging Face)
- Modern, responsive UI

---

## Prerequisites

- **Python 3.8+**
- **Node.js 16+** and **npm**
- A Hugging Face account and API token ([get one here](https://huggingface.co/settings/tokens))

---

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## 2. Backend Setup

```bash
cd backend
```

### a. Create a virtual environment (recommended)

```bash
python -m venv venv
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate
```

### b. Install dependencies

```bash
pip install -r requirements.txt
```

### c. Create a `.env` file

Create a file named `.env` in the `backend` folder with the following content:

```
HUGGINGFACE_API_TOKEN=your_huggingface_token_here
SECRET_KEY=your_flask_secret_key
JWT_SECRET_KEY=your_jwt_secret_key
```

### d. Run the backend server

```bash
python run.py
```

The backend will start on [http://localhost:5000](http://localhost:5000).

---

## 3. Frontend Setup

Open a new terminal window/tab, then:

```bash
cd frontend
```

### a. Install dependencies

```bash
npm install
```

### b. Start the frontend development server

```bash
npm run dev
```

The frontend will start on [http://localhost:5173](http://localhost:5173).

---

## 4. Usage

- Register a new user or log in.
- Use the dashboard to generate AI-powered content.
- If you encounter errors, check the "Service Status" page for troubleshooting tips.

---

## 5. Troubleshooting

- **Model Not Found / 404 Error:**  
  The default model (`MBZUAI/LaMini-T5-738M`) may have been discontinued.  
  You can change the model in `backend/app/utils/content_gen.py` to another available Hugging Face model.

- **API Token Issues:**  
  Ensure your Hugging Face API token is correct and has the necessary permissions.

- **Port Conflicts:**  
  Make sure nothing else is running on ports 5000 (backend) or 5173 (frontend).

- **Environment Variables:**  
  Never commit your `.env` files or API tokens to GitHub.

---

## 6. Customization

- To use a different Hugging Face model, update the model URL in `backend/app/utils/content_gen.py`.
- For more configuration options, see the comments in the code and the project structure.

---

## 7. Project Structure

```
root/
│
├── backend/
│   ├── app/
│   ├── .env
│   ├── requirements.txt
│   └── run.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## 8. License

MIT License

---

## 9. Contact

For questions or support, open an issue or contact the maintainer. 