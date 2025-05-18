// pages/LandingPage.jsx
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-left max-w-xl">
            <h1 className="text-5xl font-bold mb-4">Squadly</h1>
            <p className="text-xl text-gray-700 mb-6">
              Платформа, объединяющая молодых предпринимателей, которые ищут окружение или сооснователей для запуска проектов.
            </p>
            <Link
              to="/app"
              className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Перейти к событиям
            </Link>
          </div>
          <div>
            <img
              src="/team-illustration.png"
              alt="Startup team illustration"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 text-left">
          <div>
            <h2 className="text-2xl font-semibold mb-2">🚀 Наши ценности</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Доверие и безопасность в сотрудничестве</li>
              <li>Честность, прозрачность и репутация участников</li>
              <li>Открытость к диалогу и развитию</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 Почему Squadly?</h2>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              <li>Лучше, чем Telegram: без фейков, с репутацией и фильтрами</li>
              <li>Актуальнее LinkedIn: заточено под молодёжь и стартапы</li>
              <li>Всё в одном месте — ивенты, поиск, документы</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 text-left">
          <div className="p-6 bg-white rounded-xl shadow border hover:shadow-md">
            <h3 className="text-xl font-bold mb-2">🎤 Бесплатные ивенты каждую неделю</h3>
            <p className="text-gray-600">
              Питчи, спид-нетворкинги, ментор-сессии. Мы приглашаем реальных практиков и создаём живое сообщество вокруг стартапов. Всё — онлайн и бесплатно.
            </p>
            <img src="/events-preview.png" alt="events preview" className="mt-4 rounded-md" />
          </div>
          <div className="p-6 bg-white rounded-xl shadow border hover:shadow-md">
            <h3 className="text-xl font-bold mb-2">🤖 Умный поиск партнёров</h3>
            <p className="text-gray-600">
              Ищешь CTO? Дизайнера? Просто собеседника? Наш алгоритм подбирает людей по ролям, целям и репутации.
            </p>
            <img src="/matchmaking-preview.png" alt="search preview" className="mt-4 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}