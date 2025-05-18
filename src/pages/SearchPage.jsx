// pages/SearchPage.jsx (улучшенная версия с подробной карточкой)
import { useState } from "react";

const people = [
  { id: "daniil", name: "Данил С.", role: "Дизайнер", goal: "Ищу IT-команду", more: "UI/UX, 3 хакатона, Figma и Protopie. Доступен к подписанию NDA.", contact: "@daniildsgn" },
  { id: "masha", name: "Маша Б.", role: "Маркетолог", goal: "Присоединюсь к стартапу", more: "SMM, таргет, лендинги. Работаю на результат.", contact: "@mashamarket" },
  { id: "sergey", name: "Сергей К.", role: "Продуктолог", goal: "Ищу сооснователя", more: "Опыт с EdTech-проектами, аналитика, гипотезы, PMF.", contact: "@productsergey" },
  { id: "alya", name: "Аля Р.", role: "Разработчик", goal: "В стартап на Go", more: "Пишу на Go, Rust. Учусь в МФТИ. Хочу пилить core-backend.", contact: "@alya_dev" },
  { id: "andrey", name: "Андрей Т.", role: "Финансист", goal: "В стартап как CFO", more: "Финмодели, гранты, венчур, Unit-экономика — моё всё.", contact: "@finandreyt" }
];

const startups = [
  { id: "edu", name: "EduFinance", role: "Финтех", goal: "Ищем CTO", more: "MVP на Flutter, нужен backend Node.js. Работа с финансами школьников.", contact: "@edufounder" },
  { id: "skill", name: "SkillBattle", role: "Gamification", goal: "Ищем дизайнеров", more: "Игра-подготовка к ЕГЭ. 3 основателя, есть первые пользователи.", contact: "@skillbattle" },
  { id: "bookswap", name: "BookSwap", role: "Маркетплейс", goal: "Ищем продакт-менеджера", more: "Обмен книгами между студентами. Сделан frontend, нужно собрать MVP. Мы из СПбГУ.", contact: "@bookteam" }
];

function DetailCard({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white max-w-md w-full p-6 rounded-xl shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl">×</button>
        <h2 className="text-xl font-bold mb-2">{item.name}</h2>
        <p className="text-gray-600 mb-1">{item.role} — {item.goal}</p>
        <p className="mb-3 text-gray-800 text-sm">{item.more}</p>
        <a
          href={`https://t.me/${item.contact.replace("@", "")}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Написать в Telegram
        </a>
      </div>
    </div>
  );
}

export default function SearchPage() {
  const [tab, setTab] = useState("people");
  const [selected, setSelected] = useState(null);
  const list = tab === "people" ? people : startups;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">🔍 Поиск партнёров и стартапов</h1>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setTab("people")} className={`px-4 py-2 rounded ${tab === 'people' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Люди</button>
        <button onClick={() => setTab("startups")} className={`px-4 py-2 rounded ${tab === 'startups' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Стартапы</button>
      </div>

      <div className="grid gap-4">
        {list.map(item => (
          <div
            key={item.id}
            onClick={() => setSelected(item)}
            className="p-4 bg-white rounded shadow cursor-pointer hover:bg-gray-50"
          >
            <h4 className="text-lg font-bold">{item.name}</h4>
            <p className="text-sm text-gray-600">{item.role} — {item.goal}</p>
          </div>
        ))}
      </div>

      {selected && <DetailCard item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
// // pages/SearchPage.jsx
// import { useState } from "react";

// const people = [
//   {
//     id: "daniil",
//     name: "Данил С.",
//     role: "Дизайнер",
//     goal: "Ищу IT-команду",
//     more: "UI/UX, 3 хакатона, Figma и Protopie. Хочу прокачать портфолио. Доступен к переговорам и готов к подписанию NDA.",
//     contact: "@daniildsgn"
//   },
//   {
//     id: "masha",
//     name: "Маша Б.",
//     role: "Маркетолог",
//     goal: "Присоединюсь к стартапу",
//     more: "SMM, таргет, лендинги. Ищу команду, где нужна упаковка и лидогенерация.",
//     contact: "@mashamarket"
//   }
// ];

// const startups = [
//   {
//     id: "edu",
//     name: "EduFinance",
//     role: "Финтех-платформа",
//     goal: "Ищем CTO",
//     more: "Проект для школьников: учёт финансов, цели, аналитика. Есть MVP на Flutter, нужен backend на Node.",
//     contact: "@edufounder"
//   },
//   {
//     id: "skill",
//     name: "SkillBattle",
//     role: "Gamified Learning",
//     goal: "Ищем дизайнеров",
//     more: "Мини-игры по подготовке к ЕГЭ. Команда из 3х человек. Нужен UI-дизайнер и иллюстратор.",
//     contact: "@skillbattle"
//   }
// ];

// function CandidateCard({ name, role, goal, more, contact }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="p-4 bg-white rounded shadow mb-3">
//       <div className="flex justify-between items-center">
//         <div>
//           <h4 className="text-lg font-bold">{name}</h4>
//           <p className="text-sm text-gray-600">{role} — {goal}</p>
//         </div>
//         <button onClick={() => setOpen(!open)} className="text-blue-500 text-sm">
//           {open ? 'Скрыть' : 'Подробнее'}
//         </button>
//       </div>
//       {open && (
//         <div className="mt-2 text-sm text-gray-700">
//           <p>{more}</p>
//           <p className="mt-2">📬 Контакт: <span className="font-medium">{contact}</span></p>
//           <a
//             href={`https://t.me/${contact.replace("@", "")}`}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-700 rounded"
//           >
//             Написать в Telegram
//           </a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default function SearchPage() {
//   const [tab, setTab] = useState("people");
//   const list = tab === "people" ? people : startups;

//   return (
//     <div className="max-w-4xl mx-auto py-8 px-4">
//       <h1 className="text-3xl font-bold mb-6">🔍 Поиск партнёров и стартапов</h1>

//       <div className="flex space-x-4 mb-6">
//         <button onClick={() => setTab("people")} className={`px-4 py-2 rounded ${tab === 'people' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Люди</button>
//         <button onClick={() => setTab("startups")} className={`px-4 py-2 rounded ${tab === 'startups' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Стартапы</button>
//       </div>

//       {list.map((item) => (
//         <CandidateCard
//           key={item.id}
//           name={item.name}
//           role={item.role}
//           goal={item.goal}
//           more={item.more}
//           contact={item.contact}
//         />
//       ))}
//     </div>
//   );
// }
