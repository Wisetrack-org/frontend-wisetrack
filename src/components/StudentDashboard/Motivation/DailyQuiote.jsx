import { useState, useEffect } from "react";
import {
  Heart,
  Share2,
  RefreshCw,
  Volume2,
  PlusCircle,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";

const defaultQuotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama",
  },
];

const DailyQuotesPage = () => {
  const [quotes, setQuotes] = useState(defaultQuotes);
  const [quote, setQuote] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [newQuote, setNewQuote] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const today = new Date().getDate();
    setQuote(quotes[today % quotes.length]);
  }, [quotes]);

  const refreshQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const addToFavorites = () => {
    if (!favorites.find((fav) => fav.text === quote.text)) {
      setFavorites([...favorites, quote]);
    }
  };

  const shareQuote = () => {
    navigator.share({
      title: "Daily Quote",
      text: `${quote.text} - ${quote.author}`,
    });
  };

  const speakQuote = () => {
    const speech = new SpeechSynthesisUtterance(
      `${quote.text} by ${quote.author}`
    );
    speechSynthesis.speak(speech);
  };

  const addNewQuote = () => {
    if (newQuote.trim() && newAuthor.trim()) {
      setQuotes([...quotes, { text: newQuote, author: newAuthor }]);
      setNewQuote("");
      setNewAuthor("");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 text-white"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <motion.div
        className="max-w-xl text-center p-6 bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl font-bold mb-4">Daily Motivation</h1>
        <p className="text-xl italic mb-2">&quot;{quote.text}&quot;</p>
        <p className="text-sm text-gray-400">- {quote.author}</p>
        <div className="flex gap-4 mt-4 justify-center">
          <button
            onClick={refreshQuote}
            className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transition"
          >
            <RefreshCw size={24} />
          </button>
          <button
            onClick={speakQuote}
            className="p-3 bg-yellow-600 rounded-full hover:bg-yellow-500 transition"
          >
            <Volume2 size={24} />
          </button>
          <button
            onClick={addToFavorites}
            className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transition"
          >
            <Heart size={24} />
          </button>
          <button
            onClick={shareQuote}
            className="p-3 bg-green-600 rounded-full hover:bg-green-500 transition"
          >
            <Share2 size={24} />
          </button>
        </div>
      </motion.div>

      {favorites.length > 0 && (
        <motion.div
          className="mt-8 p-4 w-full max-w-xl bg-gray-800 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-bold mb-2">Saved Quotes</h2>
          <ul className="list-disc pl-5">
            {favorites.map((fav, index) => (
              <li key={index} className="text-gray-300">
                `{fav.text}`` - {fav.author}
              </li>
            ))}
          </ul>
        </motion.div>
      )}

      <motion.div
        className="mt-8 p-4 w-full max-w-xl bg-gray-800 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-bold mb-2">Add Your Own Quote</h2>
        <input
          type="text"
          placeholder="Enter quote"
          value={newQuote}
          onChange={(e) => setNewQuote(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white mb-2"
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white mb-2"
        />
        <button
          onClick={addNewQuote}
          className="w-full p-3 bg-blue-600 rounded hover:bg-blue-500 transition flex items-center justify-center gap-2"
        >
          <PlusCircle size={20} /> Add Quote
        </button>
      </motion.div>
    </div>
  );
};

export default DailyQuotesPage;
