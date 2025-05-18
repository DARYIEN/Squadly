 // pages/ProfilePage.jsx (улучшенная версия)
import { useState } from "react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    name: "",
    role: "",
    about: "",
    time: "",
    portfolio: "",
    contact: "",
    telegram: "",
    avatar: ""
  });
  const [preview, setPreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [registeredEvents] = useState(["Pitch-сессия", "Marketing Boost"]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">👤 Мой профиль</h1>
      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Фото профиля (загрузка)</label>
            <div className="w-24 h-24 rounded-full border-4 border-dashed border-blue-300 flex items-center justify-center overflow-hidden bg-gray-50">
              {preview ? (
                <img src={preview} alt="avatar preview" className="w-full h-full object-cover" />
              ) : (
                <span className="text-sm text-gray-400">Нет фото</span>
              )}
            </div>
            <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2" />
          </div>
          <input
            placeholder="Ваше имя"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Роль (например, разработчик, дизайнер...)"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <textarea
            rows={4}
            placeholder="О себе / Что ищу"
            value={form.about}
            onChange={(e) => setForm({ ...form, about: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Вовлечённость (часы в неделю)"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Портфолио / GitHub / Telegram-ссылка"
            value={form.portfolio}
            onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Telegram (@username)"
            value={form.telegram}
            onChange={(e) => setForm({ ...form, telegram: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            placeholder="Контакты (почта, телефон)"
            value={form.contact}
            onChange={(e) => setForm({ ...form, contact: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded shadow hover:bg-green-600">
            Сохранить профиль
          </button>
        </form>
      ) : (
        <div className="space-y-6 bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center space-x-4">
            {preview && <img src={preview} alt="avatar" className="w-20 h-20 rounded-full object-cover" />}
            <div>
              <h2 className="text-2xl font-bold">{form.name}</h2>
              <p className="text-gray-600">{form.role}</p>
            </div>
          </div>
          <div>
            <p className="whitespace-pre-line text-gray-800">{form.about}</p>
            <p className="mt-2 text-sm"><strong>⏱ Вовлечённость:</strong> {form.time} ч/нед</p>
            <p className="text-sm"><strong>📎 Портфолио:</strong> {form.portfolio}</p>
            {form.telegram && (
              <p className="text-sm">
                <strong>💬 Telegram:</strong>{" "}
                <a href={`https://t.me/${form.telegram.replace("@", "")}`} target="_blank" rel="noreferrer" className="text-blue-600 underline">
                  @{form.telegram.replace("@", "")}
                </a>
              </p>
            )}
            <p className="text-sm"><strong>📬 Контакты:</strong> {form.contact}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">🎟 Мои ивенты</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {registeredEvents.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}