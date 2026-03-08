import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Server, Cpu, Github, Send, Gamepad2, Menu, X, ChevronRight, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Главная', href: '#home' },
  { name: 'Обо мне', href: '#about' },
  { name: 'Навыки', href: '#skills' },
  { name: 'Контакты', href: '#contact' },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-slate-950/80 backdrop-blur-md border-slate-800 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tighter">
            Portfo<span className="text-sky-400">lio</span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <ul className="flex flex-col gap-6 text-xl">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-300 hover:text-sky-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Привет, я <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                  Рамазан
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 font-mono text-sm mb-6">
                <span className="inline-block w-2 h-2 rounded-full bg-sky-400 mr-2 animate-pulse"></span>
                Junior Developer & IT-энтузиаст
              </div>
              <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                Занимаюсь программированием, настройкой игровых серверов и отлично разбираюсь в компьютерном железе.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] flex items-center gap-2"
              >
                Связаться со мной <ChevronRight size={18} />
              </a>
              <a
                href="#about"
                className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700"
              >
                Узнать больше
              </a>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 bg-slate-900/50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Обо мне</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6 text-slate-300 text-lg leading-relaxed"
              >
                <p>
                  Мне 15 лет, я живу в Теренколе. Сейчас заканчиваю 9 класс и активно готовлюсь к поступлению в колледж на специальности, связанные с кибербезопасностью или разработкой программного обеспечения.
                </p>
                <p>
                  Я не просто пишу код, но и понимаю, как работают технологии изнутри: от сборки правильной конфигурации ПК до тонкой настройки выделенных серверов для игр.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-sky-500/10 transition-colors" />
                  <Terminal className="w-16 h-16 text-sky-400 mb-6 opacity-50" />
                  <div className="font-mono text-sm text-slate-400 space-y-2">
                    <p><span className="text-sky-400">const</span> <span className="text-blue-300">developer</span> = {'{'}</p>
                    <p className="pl-4">name: <span className="text-emerald-400">'Рамазан'</span>,</p>
                    <p className="pl-4">age: <span className="text-orange-400">15</span>,</p>
                    <p className="pl-4">location: <span className="text-emerald-400">'Теренколь'</span>,</p>
                    <p className="pl-4">passion: <span className="text-emerald-400">'IT & Hardware'</span></p>
                    <p>{'}'};</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Что я умею</h2>
              <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code2 className="w-8 h-8 text-sky-400" />,
                  title: 'Программирование',
                  desc: 'Python для создания ботов и скриптов, Luau для Roblox, а также базовый SourcePawn / C++.',
                },
                {
                  icon: <Server className="w-8 h-8 text-sky-400" />,
                  title: 'Администрирование',
                  desc: "Создание, настройка и управление серверами Garry's Mod и Minecraft (Paper, плагины).",
                },
                {
                  icon: <Cpu className="w-8 h-8 text-sky-400" />,
                  title: 'Hardware',
                  desc: 'Сборка ПК, подбор комплектующих на совместимость, понимание архитектуры и базовый траблшутинг железа.',
                },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-100">{skill.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Связь со мной</h2>
              <p className="text-xl text-slate-400 mb-12">
                Открыт к интересным проектам и сотрудничеству.
              </p>

              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="https://t.me/FolkVenusO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Send className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                  <span className="font-medium">Telegram</span>
                </a>
                <a
                  href="https://github.com/FolkVenusO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Github className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://steamcommunity.com/id/Derpy_The_Mailmare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-sky-500/50 rounded-xl transition-all hover:-translate-y-1 group"
                >
                  <Gamepad2 className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                  <span className="font-medium">Steam</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Рамазан. Все права защищены.</p>
      </footer>
    </div>
  );
}
