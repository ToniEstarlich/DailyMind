# DailyMind

DailyMind is a **mobile-first diary app** that allows users to record their thoughts and automatically analyze their mood. It helps track daily emotions and provides an easy-to-use interface to view entries along with mood analysis.

---

## 🚀 Features

- **Add Entries**: Write how you feel and save your entries to the database.  
- **Mood Analysis**: Automatically detect if the text is positive, negative, or neutral.  
- **View Entries**: Home screen displays all entries with an emoji representing the mood.  
- **Cross-platform**: Works on mobile and web (React Native Web + Expo).  

---

## 🛠 Tech Stack

- **Frontend**: React Native, Expo, TypeScript, React Navigation  
- **Backend**: Django, Django REST Framework  
- **Database**: PostgreSQL  
- **API**: REST endpoints for entries and mood analysis  
- **Deployment**: Local development (mobile emulator or web)  

---

## 📦 Installation

### Prerequisites
- Node.js >= 18  
- Expo CLI  
- Python >= 3.11  
- PostgreSQL  
- Git  

### Backend (Django)
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
### Frontend (React Native / Expo)
```bash
cd frontend/daily-mind-app
npm install
npm start
```
## 🗂 Project Structure

```bash
daily-mind/
├─ backend/         # Django backend
│  ├─ entries/      # Models, views, serializers
│  └─ venv/
└─ frontend/daily-mind-app/  # React Native / Expo frontend
   ├─ app/
   │  ├─ _layout.tsx
   │  ├─ index.tsx        # Home
   │  ├─ add-entry.tsx    # Add new entry
   │  └─ analyze-entry.tsx
   ├─ components/
   │  ├─ EntryCard.tsx
   │  └─ AnalyzeEntry.tsx
   └─ utils/
      └─ api.ts           # Axios configuration for backend
```
## 🧠 How Mood Analysis Works

1. User types an entry in **Add Entry**.  
2. Press **Analyze** → sends `POST /entries/analyze/` to backend.  
3. Backend runs `simple_mood_analysis`:
   - Counts positive words (good, happy, love, etc.)  
   - Counts negative words (bad, sad, angry, etc.)  
   - Returns **positive**, **negative**, or **neutral** based on counts  
4. Mood result is immediately shown on screen.  

---

## 📸 Screenshots
in next time...
- Home screen showing all entries  
- Add Entry screen with mood analysis  
- Mood emoji per entry  

---

## 🤝 Contributing

1. Fork the repository  
2. Create a branch: `feature/your-feature`  
3. Submit a pull request with your improvements
