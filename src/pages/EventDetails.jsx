// pages/EventDetails.jsx
import { useParams, Link } from "react-router-dom";

const eventInfo = {
  pitch: {
    title: "Pitch-сессия: Идея за 3 минуты",
    date: "25 мая, 18:00",
    details: "Онлайн, ZOOM, обратная связь от экспертов",
    description: "Выступи с идеей и получи фидбек от основателей, менторов и других студентов. Доступен открытый микрофон.",
    speakers: ["Анна Соколова (МТС StartUp Hub)", "Илья Дьяков (HSE Inc.)"]
  },
  marketing: {
    title: "Как продвигать стартап без бюджета",
    date: "3 июня, 18:30",
    details: "Онлайн, воркшоп + сессия вопросов",
    description: "Маркетолог из ВШЭ покажет, как он привлёк 500+ юзеров без затрат. Вы получите таблицы, шаблоны и фреймворки.",
    speakers: ["Алексей Гончаров (GoPractice)", "Мария Сивирина (фрилансер, СММ)"]
  }
};

export default function EventDetails() {
  const { id } = useParams();
  const data = eventInfo[id] || {
    title: "Событие не найдено",
    description: "Проверьте ссылку или вернитесь на главную.",
    date: "—",
    details: "—",
    speakers: []
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-2">📌 {data.title}</h1>
      <p className="text-gray-600 mb-4">🗓 {data.date} — {data.details}</p>

      <p className="text-gray-800 mb-6">{data.description}</p>

      {data.speakers.length > 0 && (
        <div className="mb-6">
          <h2 className="font-semibold mb-2">🎙 Спикеры</h2>
          <ul className="list-disc pl-5 text-gray-700">
            {data.speakers.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}

      <Link
        to="/app"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        ← Назад к событиям
      </Link>
    </div>
  );
}