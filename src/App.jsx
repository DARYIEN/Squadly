import { useState } from "react";

export default function App() {
  const [tab, setTab] = useState("find");
  const [form, setForm] = useState({ name: "", role: "", project: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-4">ConnectUp MVP</h1>

      <div className="mb-4 space-x-2">
        <button onClick={() => setTab("find")} className="bg-blue-500 text-white px-4 py-2 rounded">🔍 Найти партнёра</button>
        <button onClick={() => setTab("events")} className="bg-blue-500 text-white px-4 py-2 rounded">📅 Ивенты</button>
        <button onClick={() => setTab("profile")} className="bg-blue-500 text-white px-4 py-2 rounded">👤 Профиль</button>
      </div>

      {tab === "find" && (
        <div className="space-y-2">
          <p>Здесь появятся рекомендованные партнёры. Пока заглушка.</p>
          <button disabled className="bg-gray-300 px-3 py-1 rounded">Ищу CTO</button>
          <button disabled className="bg-gray-300 px-3 py-1 rounded">Ищу дизайнера</button>
        </div>
      )}

      {tab === "events" && (
        <div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Pitch-сессия: 25 мая, 18:00</li>
            <li>Спид-нетворкинг: 30 мая, 17:00</li>
          </ul>
          <button disabled className="mt-2 bg-gray-300 px-3 py-1 rounded">Зарегистрироваться</button>
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
