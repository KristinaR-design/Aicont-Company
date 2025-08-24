import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './App.css'



const navItems = [
  { path: '/', label: 'home',exact: true },
  { path: '/42-22', label: ' Коммунальные объекты'},
  { path: '/41-10', label: ' Проекты' },
  { path: '/41-20', label: ' Жилые и нежилые здания' },
  { path: '/42-11', label: ' Дороги и автомагистрали' },
  { path: '/42-12', label: ' Железные дороги и метро' },
  { path: '/42-21', label: ' Инженерные коммуникации' },
  { path: '/42-99', label: ' Прочие сооружения' },
]

// function Header() {
//   return (
//     <header className="header">
//       <div className="logo-block">
//         <img src={Logo} alt="Логотип" className="logo-placeholder" />
//         <span className="company-name">Бизнес-Строй</span>
//       </div>
//       <nav className="nav-menu">
//         {navItems.map(item => (
//           <NavLink
//             key={item.path}
//             to={item.path}
//             className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
//             end={item.exact}
//           >
//             {item.label}
//           </NavLink>
//         ))}
//       </nav>
//     </header>
//   )
// }

// function Main() {
//   return (
//     <main>
//       <Routes>
//         <Route path="/" element={<Page
//           title="42.22 — Строительство коммунальных объектов для обеспечения электроэнергией и телекоммуникациями"
//           description="Проектирование и строительство объектов для электроснабжения и телекоммуникаций."
//           advantages={['Современные технологии', 'Высокая надежность', 'Комплексный подход']}
//           bgClass="bg-electric"
//         />} />
//         <Route path="/41-10" element={<Page
//           title="41.10 — Разработка строительных проектов"
//           description="Профессиональная разработка строительных проектов любой сложности."
//           advantages={['Опытные проектировщики', 'Индивидуальный подход', 'Соблюдение сроков']}
//           bgClass="bg-projects"
//         />} />
//         <Route path="/41-20" element={<Page
//           title="41.20 — Строительство жилых и нежилых зданий"
//           description="Строительство современных жилых комплексов и коммерческих объектов."
//           advantages={['Качественные материалы', 'Гарантия на работы', 'Собственный парк техники']}
//           bgClass="bg-buildings"
//         />} />
//         <Route path="/42-11" element={<Page
//           title="42.11 — Строительство автомобильных дорог и автомагистралей"
//           description="Комплексное строительство и реконструкция дорог."
//           advantages={['Соблюдение стандартов', 'Скорость выполнения', 'Современная техника']}
//           bgClass="bg-roads"
//         />} />
//         <Route path="/42-12" element={<Page
//           title="42.12 — Строительство железных дорог и метро"
//           description="Проектирование и строительство железнодорожной инфраструктуры."
//           advantages={['Инновационные решения', 'Безопасность', 'Опытные специалисты']}
//           bgClass="bg-railways"
//         />} />
//         <Route path="/42-21" element={<Page
//           title="42.21 — Строительство инженерных коммуникаций для водоснабжения и водоотведения, газоснабжения"
//           description="Монтаж и обслуживание инженерных сетей."
//           advantages={['Комплексные решения', 'Сертифицированные материалы', 'Гарантия качества']}
//           bgClass="bg-utilities"
//         />} />
//         <Route path="/42-99" element={<Page
//           title="42.99 — Строительство прочих инженерных сооружений, не включенных в другие группировки"
//           description="Реализация уникальных инженерных проектов."
//           advantages={['Гибкость', 'Индивидуальные решения', 'Профессионализм']}
//           bgClass="bg-other"
//         />} />
//       </Routes>
//     </main>
//   )
// }

// function Footer() {
//   return (
//     <footer className="footer">
//       <div>© 2024 Бизнес-Строй</div>
//       <div>Тел: +7 (999) 123-45-67 | Email: info@bizstroy.ru</div>
//       <div>Адрес: г. Москва, ул. Примерная, д. 1</div>
//     </footer>
//   )
// }

// function Page({ title, description, advantages, bgClass }) {
//   return (
//     <section className={`page-section ${bgClass}`}>
//       <h1>{title}</h1>
//       <p className="desc">{description}</p>
//       <ul className="advantages">
//         {advantages.map((adv, i) => <li key={i}>{adv}</li>)}
//       </ul>
//     </section>
//   )
// }

export default function App() {
  return (
    <div className="layout">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
