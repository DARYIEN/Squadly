import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-white p-8 text-center">
      <h1 className="text-5xl font-bold mb-6">ConnectUp</h1>
      <p className="text-xl mb-8 max-w-xl">
        Первая молодёжная платформа для быстрого и безопасного поиска партнёров для стартапов
      </p>
      <button
        onClick={() => navigate("/app")}
        className="bg-blue-600 text-white text-lg px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Войти в личный кабинет
      </button>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState("events");
  const [form, setForm] = useState({ name: "", role: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">Личный кабинет</h1>
      <div className="mb-4 space-x-2">
        <button onClick={() => setTab("events")} className="bg-blue-500 text-white px-4 py-2 rounded">📅 Ивенты</button>
        <button onClick={() => setTab("search")} className="bg-blue-500 text-white px-4 py-2 rounded">🔍 Поиск</button>
        <button onClick={() => setTab("profile")} className="bg-blue-500 text-white px-4 py-2 rounded">👤 Профиль</button>
      </div>

      {tab === "events" && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Ближайшие события</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Pitch-сессия: 25 мая, 18:00</li>
            <li>Спид-нетворкинг: 30 мая, 17:00</li>
          </ul>
        </div>
      )}

      {tab === "search" && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Поиск партнёров</h2>
          <p className="mb-2">Здесь в будущем будет умный подбор по ролям, навыкам и целям.</p>
          <button disabled className="bg-gray-300 px-3 py-1 rounded">Ищу CTO</button>
          <button disabled className="bg-gray-300 px-3 py-1 rounded ml-2">Найти команду</button>
        </div>
      )}

      {tab === "profile" && (
        <div className="space-y-4">
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <input
                placeholder="Имя"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <input
                placeholder="Ваша роль (дизайнер, разработчик...)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <textarea
                placeholder="Кратко опишите вашу идею или интерес"
                value={form.project}
                onChange={(e) => setForm({ ...form, project: e.target.value })}
                className="border p-2 rounded w-full"
              />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Сохранить профиль</button>
            </form>
          ) : (
            <div className="space-y-2">
              <p>✅ Профиль сохранён!</p>
              <p><strong>{form.name}</strong>, роль: {form.role}</p>
              <p>Проект: {form.project}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ConnectUpApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}