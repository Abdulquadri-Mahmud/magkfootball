import { RiVipCrownFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const providers = [
  {
    name: 'Bet9ja',
    route: '/bet9ja-betslips',
    color: 'text-red-600',
    highlight: 'text-green-600',
  },
  {
    name: 'SportyBet',
    route: '/sporty-betslips',
  },
  {
    name: 'BetKing',
    route: '/betking-betslips',
    customName: (
      <span className="flex items-center justify-center text-4xl font-medium">
        Bet<span className="relative">
          <RiVipCrownFill className="absolute -top-4 left-0 text-yellow-400 text-[22px]" />
          <span>K</span>
        </span>ing
      </span>
    ),
  },
  {
    name: '1XBET',
    route: '/xbet-betslips',
    customName: <span className="text-4xl font-bold">1X<span className="text-cyan-400">BET</span></span>,
  },
  {
    name: 'BETANO',
    route: '/batano-betslips',
  },
  {
    name: 'MSport',
    route: '/msport-betslips',
    customName: <span className="text-4xl font-bold">MSp<span className="text-yellow-400">ort</span></span>,
  },
  {
    name: 'Parimatch',
    route: '/parimatch-betslips',
    className: 'bg-yellow-300 text-black',
  },
  {
    name: '22Bet',
    route: '/22bet-betslips',
    className: 'bg-[#003366]',
  },
];

const BetslipCard = ({ name, route, customName, className = '', color, highlight }) => (
  <Link to={route}>
    <div className={`w-full md:w-[300px] h-[220px] bg-gray-800 hover:shadow-lg rounded-xl transition-transform transform hover:-translate-y-1 flex justify-center items-center text-white ${className}`}>
      <div className="text-center px-4">
        <h1 className={`text-3xl font-semibold`}>
          {customName ? customName : (
            <span className={`${color}`}>
              {name.split(/(?=[A-Z])/).map((part, i) =>
                i === 1 && highlight ? <span key={i} className={`${highlight}`}>{part}</span> : part
              )}
            </span>
          )}
        </h1>
        <p className="mt-4 font-medium">Click To See Available <br /> Betslip</p>
      </div>
    </div>
  </Link>
);

const BetHero = () => (
  <section className="bg-blue-900 text-white py-20 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Bet Smarter with MAGKK
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Get expert predictions, high-odds curated slips, and smart betting insights—all in one place.
        </p>
        <Link to="#tips" className="inline-block bg-white text-blue-800 font-bold px-6 py-3 rounded-lg shadow hover:bg-gray-200 transition">
          View Today's Tips
        </Link>
      </div>
      <div className="md:w-1/2">
        <img src="/bet.png" alt="Betting Visual" className="w-full max-h-96 object-contain drop-shadow-lg" />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
    <section className="py-16 px-6 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-4">Join our Telegram or reach out via WhatsApp or Email.</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Join Telegram</a>
        <a href="#" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">WhatsApp</a>
      </div>
    </section>
  );

export default function BetPage() {
  return (
    <div className="bg-slate-100" id="tips">
      <BetHero />
      <div className="bg-white py-16">
        <div className="text-center">
          <h1 className="font-semibold text-4xl pb-2">BETSLIPS</h1>
          <p className="text-gray-500 text-sm">We have provided the best and the most accurate betslip for you</p>
          <p className="text-gray-500 text-sm">Click on the link and get started</p>
        </div>

        <div className="mt-12 px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {providers.map((provider, index) => (
            <BetslipCard key={index} {...provider} />
          ))}
        </div>
      </div>
        <ContactSection />
    </div>
  );
}
