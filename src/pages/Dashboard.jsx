// pages/Dashboard.jsx (ивенты + новый календарь)
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const eventList = [
  {
    id: "pitch",
    title: "Pitch-сессия: Идея за 3 минуты",
    date: "25 мая, 18:00",
    details: "Онлайн, ZOOM, обратная связь от экспертов",
    description: "Выступи с идеей и получи фидбек от основателей, менторов и других студентов. Открытый микрофон."
  },
  {
    id: "speed-networking",
    title: "Speed-networking: Найди CTO за 30 минут",
    date: "30 мая, 17:00",
    details: "Онлайн, 5-минутные раунды",
    description: "Знакомства и поиск сооснователей в формате speed-dating для стартапов."
  },
  {
    id: "marketing",
    title: "Как продвигать стартап без бюджета",
    date: "3 июня, 18:30",
    details: "Разбор кейсов и воркшоп от студентов",
    description: "Маркетолог из ВШЭ расскажет, как привлёк 500+ пользователей без бюджета. Шаблоны, чек-листы и Q&A."
  }
];

const calendarDays = [
  { day: 20 }, { day: 21 }, { day: 22 }, { day: 23 }, { day: 24 },
  { day: 25, event: { id: "pitch", title: "Pitch-сессия" } },
  { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 },
  { day: 30, event: { id: "speed-networking", title: "Speed-networking" } },
  { day: 31 }, { day: 1 }, { day: 2 },
  { day: 3, event: { id: "marketing", title: "Маркетинг" } },
  { day: 4 }
];

export default function Dashboard() {
  const [tab, setTab] = useState("list");
  const [registered, setRegistered] = useState([]);
  const navigate = useNavigate();

  const register = (id) => {
    setRegistered([...new Set([...registered, id])]);
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">🎤 События Squadly</h1>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setTab("list")} className={`px-4 py-2 rounded ${tab === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Ивенты</button>
        <button onClick={() => setTab("calendar")} className={`px-4 py-2 rounded ${tab === 'calendar' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Календарь</button>
      </div>

      {tab === "list" && (
        <div className="grid gap-6">
          {eventList.map(event => (
            <div key={event.id} className="bg-white rounded shadow p-6">
              <h2 className="text-xl font-bold mb-1">{event.title}</h2>
              <p className="text-sm text-gray-600 mb-2">🗓 {event.date} | {event.details}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <button
                disabled={registered.includes(event.id)}
                onClick={() => register(event.id)}
                className={`px-4 py-2 rounded ${registered.includes(event.id) ? 'bg-green-100 text-green-600 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                {registered.includes(event.id) ? '✅ Вы зарегистрированы' : 'Зарегистрироваться'}
              </button>
            </div>
          ))}
        </div>
      )}

      {tab === "calendar" && (
        <div className="bg-white rounded p-6 shadow text-center">
          <h2 className="text-xl font-bold mb-4">📅 Календарь</h2>
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((cell, i) => (
              <div
                key={i}
                className={`rounded p-2 border h-24 relative ${cell.event ? 'bg-blue-50 cursor-pointer hover:bg-blue-100' : 'bg-gray-50'}`}
                onClick={() => cell.event && navigate(`/events/${cell.event.id}`)}
              >
                <div className="text-sm font-semibold text-gray-600">{cell.day}</div>
                {cell.event && (
                  <div className="absolute bottom-2 left-2 right-2 text-xs text-blue-800 font-medium truncate">
                    {cell.event.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}