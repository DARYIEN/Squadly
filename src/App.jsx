// App.jsx — основной компонент с навигацией и роутингом
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import EventDetails from "./pages/EventDetails";
import SearchPage from "./pages/SearchPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// function LandingPage() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col justify-between min-h-screen bg-gradient-to-br from-blue-100 to-white">
//       <div className="p-8 text-center">
//         <img
//           src="/logo-squadly.png"
//           alt="Squadly logo"
//           className="w-32 mx-auto mb-4"
//         />
//         <h1 className="text-5xl font-bold mb-4">Squadly</h1>
//         <p className="text-xl mb-6 max-w-xl mx-auto">
//           Платформа для быстрого и безопасного поиска сооснователей и команд для стартапов среди молодёжи.
//         </p>
//         <img
//           src="/team-illustration.png"
//           alt="Иллюстрация команды"
//           className="max-w-xl mx-auto mb-6 rounded-lg shadow"
//         />

//         <div className="grid gap-4 max-w-3xl mx-auto text-left">
//           <div>
//             <h2 className="text-2xl font-semibold mb-2">🚀 Наши ценности</h2>
//             <ul className="list-disc pl-5 text-lg">
//               <li>Доверие и безопасность в сотрудничестве</li>
//               <li>Честность, прозрачность и репутация участников</li>
//               <li>Вовлечённость, энергия и реальные цели</li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-2xl font-semibold mb-2">💡 Почему Squadly?</h2>
//             <ul className="list-disc pl-5 text-lg">
//               <li>Лучше, чем Telegram: нет фейков, есть репутация и фильтры</li>
//               <li>Лучше, чем LinkedIn: заточено под молодёжь и стартапы</li>
//               <li>Прямо внутри — документы, бейджи, партнёрства</li>
//             </ul>
//           </div>
//         </div>

//         <button
//           onClick={() => navigate("/app")}
//           className="mt-8 bg-blue-600 text-white text-lg px-6 py-3 rounded-xl hover:bg-blue-700 transition"
//         >
//           Войти в личный кабинет
//         </button>
//       </div>

//       <footer className="bg-white border-t mt-10 py-4 text-center text-sm text-gray-600">
//         <p>© Squadly, 2024. Все права защищены.</p>
//         <p>📧 hello@squadly.ru | ☎️ +7 (999) 123-45-67</p>
//       </footer>
//     </div>
//   );
// }

// function EventCard({ title, date, details, paid }) {
//   return (
//     <div className="p-4 bg-white rounded shadow hover:shadow-lg transition cursor-pointer">
//       <h3 className="text-xl font-semibold mb-1">{title}</h3>
//       <p className="text-sm text-gray-600">🗓 {date} | {details} | 💰 {paid ? paid : 'Бесплатно'}</p>
//     </div>
//   );
// }

// function CandidateCard({ name, role, goal, more }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="p-4 bg-white rounded shadow mb-3">
//       <div className="flex justify-between items-center">
//         <div>
//           <h4 className="text-lg font-bold">{name}</h4>
//           <p className="text-sm text-gray-600">{role} — {goal}</p>
//         </div>
//         <button
//           onClick={() => setOpen(!open)}
//           className="text-blue-500 text-sm"
//         >
//           {open ? 'Скрыть' : 'Подробнее'}
//         </button>
//       </div>
//       {open && <p className="mt-2 text-sm text-gray-700">{more}</p>}
//     </div>
//   );
// }

// function Dashboard() {
//   const [tab, setTab] = useState("events");
//   const [searchTab, setSearchTab] = useState("people");
//   const [form, setForm] = useState({ name: "", role: "", project: "", time: "", portfolio: "", contact: "" });
//   const [submitted, setSubmitted] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <h1 className="text-3xl font-bold mb-6">👋 Добро пожаловать в Squadly</h1>
//       <div className="flex gap-4 mb-6">
//         <button onClick={() => setTab("events")} className="bg-blue-500 text-white px-4 py-2 rounded">📅 Ивенты</button>
//         <button onClick={() => setTab("search")} className="bg-blue-500 text-white px-4 py-2 rounded">🔍 Поиск</button>
//         <button onClick={() => setTab("profile")} className="bg-blue-500 text-white px-4 py-2 rounded">👤 Профиль</button>
//       </div>

//       {tab === "events" && (
//         <div className="grid gap-4">
//           <EventCard title="Pitch-сессия 'Идея за 3 минуты'" date="25 мая, 18:00" details="Спикеры: Иван Новиков, Алина Старк" paid={false} />
//           <EventCard title="Спид-нетворкинг: найди CTO за 30 минут" date="30 мая, 17:00" details="Открыт всем" paid={false} />
//           <EventCard title="Workshop: как подписать партнёрский договор" date="2 июня, 16:00" details="Для зарегистрированных" paid="199₽" />
//         </div>
//       )}

//       {tab === "search" && (
//         <div>
//           <div className="mb-4">
//             <button onClick={() => setSearchTab("people")} className={`px-4 py-2 mr-2 rounded ${searchTab === 'people' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Люди</button>
//             <button onClick={() => setSearchTab("startups")} className={`px-4 py-2 rounded ${searchTab === 'startups' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Стартапы</button>
//           </div>

//           {searchTab === "people" && (
//             <div>
//               <CandidateCard name="Данил С." role="Дизайнер" goal="Ищу IT-команду" more="Есть опыт в UI/UX, участвовал в 3 хакатонах, умею в Figma и Protopie." />
//               <CandidateCard name="Маша Б." role="Маркетолог" goal="Присоединюсь к стартапу" more="Работала в SMM, запускала рекламу. Хочу найти команду, где нужна упаковка и лидогенерация." />
//             </div>
//           )}

//           {searchTab === "startups" && (
//             <div>
//               <CandidateCard name="EduFinance" role="Финтех-платформа" goal="Ищем CTO" more="Проект для школьников: учёт личных финансов, траты, цели. Есть MVP, нужен бэкендер на Node.js." />
//               <CandidateCard name="SkillBattle" role="Gamified Learning" goal="Ищем дизайнеров" more="Хочем сделать мини-игры по подготовке к ЕГЭ. Команда из 3х человек, нужен UI-дизайнер." />
//             </div>
//           )}
//         </div>
//       )}

//       {tab === "profile" && (
//         <div className="space-y-4">
//           {!submitted ? (
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 setSubmitted(true);
//               }}
//               className="space-y-3"
//             >
//               <input placeholder="Имя" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="border p-2 rounded w-full" />
//               <input placeholder="Ваша роль (дизайнер, разработчик...)" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="border p-2 rounded w-full" />
//               <textarea placeholder="Опишите вашу идею / проект / интерес" value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} className="border p-2 rounded w-full" />
//               <input placeholder="Сколько времени готовы уделять (в часах/нед)" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="border p-2 rounded w-full" />
//               <input placeholder="Портфолио / GitHub / Telegram" value={form.portfolio} onChange={(e) => setForm({ ...form, portfolio: e.target.value })} className="border p-2 rounded w-full" />
//               <input placeholder="Контакты для связи" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} className="border p-2 rounded w-full" />
//               <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Сохранить профиль</button>
//             </form>
//           ) : (
//             <div className="space-y-2 text-gray-700">
//               <p>✅ Профиль сохранён!</p>
//               <p><strong>{form.name}</strong> — {form.role}</p>
//               <p>Проект: {form.project}</p>
//               <p>Вовлечённость: {form.time} в неделю</p>
//               <p>Контакты: {form.portfolio} / {form.contact}</p>
//             </div>
//           )}
//         </div>
//       )}

//       <footer className="mt-12 border-t pt-4 text-center text-sm text-gray-500">
//         <p>© Squadly, 2024. Все права защищены.</p>
//         <p>📧 hello@squadly.ru | ☎️ +7 (999) 123-45-67</p>
//       </footer>
//     </div>
//   );
// }

// export default function SquadlyApp() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/app" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }