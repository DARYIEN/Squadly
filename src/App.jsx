import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-blue-100 to-white">
      <div className="p-8 text-center">
        <img
          src="/logo-squadly.png"
          alt="Squadly logo"
          className="w-32 mx-auto mb-4"
        />
        <h1 className="text-5xl font-bold mb-4">Squadly</h1>
        <p className="text-xl mb-6 max-w-xl mx-auto">
          Платформа для быстрого и безопасного поиска сооснователей и команд для стартапов среди молодёжи.
        </p>
        <img
          src="/team-illustration.png"
          alt="Иллюстрация команды"
          className="max-w-xl mx-auto mb-6 rounded-lg shadow"
        />

        <div className="grid gap-4 max-w-3xl mx-auto text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🚀 Наши ценности</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Доверие и безопасность в сотрудничестве</li>
              <li>Честность, прозрачность и репутация участников</li>
              <li>Вовлечённость, энергия и реальные цели</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 Почему Squadly?</h2>
            <ul className="list-disc pl-5 text-lg">
              <li>Лучше, чем Telegram: нет фейков, есть репутация и фильтры</li>
              <li>Лучше, чем LinkedIn: заточено под молодёжь и стартапы</li>
              <li>Прямо внутри — документы, бейджи, партнёрства</li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => navigate("/app")}
          className="mt-8 bg-blue-600 text-white text-lg px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Войти в личный кабинет
        </button>
      </div>

      <footer className="bg-white border-t mt-10 py-4 text-center text-sm text-gray-600">
        <p>© Squadly, 2024. Все права защищены.</p>
        <p>📧 hello@squadly.ru | ☎️ +7 (999) 123-45-67</p>
      </footer>
    </div>
  );
}

function Dashboard() {
  const [tab, setTab] = useState("events");
  const [form, setForm] = useState({ name: "", role: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">👋 Добро пожаловать в Squadly</h1>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setTab("events")} className="bg-blue-500 text-white px-4 py-2 rounded">📅 Ивенты</button>
        <button onClick={() => setTab("search")} className="bg-blue-500 text-white px-4 py-2 rounded">🔍 Поиск</button>
        <button onClick={() => setTab("profile")} className="bg-blue-500 text-white px-4 py-2 rounded">👤 Профиль</button>
      </div>

      {tab === "events" && (
        <div className="grid gap-4">
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Pitch-сессия "Идея за 3 минуты"</h3>
            <p className="text-sm text-gray-600">🗓 25 мая, 18:00 | 👥 Спикеры: Иван Новиков, Алина Старк | 💰 Бесплатно</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Спид-нетворкинг: найди CTO за 30 минут</h3>
            <p className="text-sm text-gray-600">🗓 30 мая, 17:00 | 👥 Открыт всем | 💰 Бесплатно</p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-xl font-semibold">Workshop: как правильно подписать партнёрский договор</h3>
            <p className="text-sm text-gray-600">🗓 2 июня, 16:00 | 💼 Только для зарегистрированных | 💰 199₽</p>
          </div>
        </div>
      )}

      {tab === "search" && (
        <div>
          <div className="mb-4">
            <button className="px-4 py-2 mr-2 bg-gray-200 rounded">Люди</button>
            <button className="px-4 py-2 bg-gray-200 rounded">Стартапы</button>
          </div>
          <div className="text-gray-600">🔍 Поиск партнёров пока в разработке. Скоро будет красиво 😎</div>
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

      <footer className="mt-12 border-t pt-4 text-center text-sm text-gray-500">
        <p>© Squadly, 2024. Все права защищены.</p>
        <p>📧 hello@squadly.ru | ☎️ +7 (999) 123-45-67</p>
      </footer>
    </div>
  );
}

export default function SquadlyApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}