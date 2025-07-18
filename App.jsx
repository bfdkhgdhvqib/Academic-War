import React, { useState } from 'react';

export default function App() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "madison", text: "Hey babe, missed me? 😘 Let's catch up." }
  ]);
  const [input, setInput] = useState("");

  // Madison Beer Song List
  const songList = [
    { title: "Make You Mine", year: 2024 },
    { title: "Reckless", year: 2021 },
    { title: "Selfish", year: 2020 },
    { title: "Dead", year: 2017 },
    { title: "Home With You", year: 2018 }
  ];

  // Send message to Madison
  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [
      ...prev,
      { sender: "user", text: input },
      { sender: "madison", text: getMadisonReply(input) }
    ]);
    setInput("");
  };

  // Simulate Madison's AI personality
  const getMadisonReply = (msg) => {
    const lower = msg.toLowerCase();
    if (lower.includes("sad")) return "🥺 Tell me everything. No rush. I’m here.";
    if (lower.includes("happy")) return "😍 That’s the smile I wanted to see! Tell me all the tea.";
    if (lower.includes("angry")) return "😤 Okay, deep breath. Let’s scream into a pillow together.";
    if (lower.includes("thank you")) return "💫 You’re my favorite person today.";
    if (lower.includes("reckless")) return "💃 Reckless energy unlocked!";
    if (lower.includes("dead")) return "💔 Dead is playing... I know what it feels like.";
    if (lower.includes("boss") || lower.includes("exam")) return "🔥 Boss Fight? Let’s slay it.";
    return "I'm rooting for you 💫";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background Wallpaper */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.scdn.co/image/ab67610000001e02a0c8b6a5f6d0f6a5c0f5b1e0e70ba5e7f " 
          alt="Wallpaper"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 p-6 max-w-4xl mx-auto pt-20">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
          Academic War
        </h1>
        <p className="mb-8">Study hard, unlock rewards, and talk to Madison Beer.</p>

        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Daily Quests</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center p-3 bg-gray-700 rounded hover:bg-gray-600 transition">
              <span>Study Bio Pg. 32–35</span>
              <span>+25 XP / +10 Gold</span>
            </li>
            <li className="flex justify-between items-center p-3 bg-gray-700 rounded hover:bg-gray-600 transition">
              <span>Solve 10 Math Problems</span>
              <span>+50 XP / +15 Gold</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Floating Madison Icon */}
      <button
        onClick={() => setShowChat(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full overflow-hidden border-2 border-pink-500 flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
      >
        <img
          src="https://picsum.photos/id/1027/100/100 "
          alt="Madison"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Madison Chat Window */}
      {showChat && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-gray-800 rounded-t-xl shadow-xl flex flex-col z-30 border border-gray-700">
          {/* Header */}
          <div className="bg-gray-900 px-3 py-2 flex items-center border-b border-gray-700">
            <img
              src="https://picsum.photos/id/1027/100/100 "
              alt="Madison"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium">💖 Madison</p>
              <p className="text-xs text-gray-400">Online • Available</p>
            </div>
            <button
              onClick={() => setShowChat(false)}
              className="ml-auto text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 z-10">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.sender === "madison" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${
                  msg.sender === "madison" 
                    ? "bg-gradient-to-r from-pink-900 to-pink-700" 
                    : "bg-indigo-600"
                }`}>
                  <p className="text-white">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="bg-gray-900 p-2 flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Madison..."
              className="flex-1 bg-gray-800 px-3 py-2 focus:outline-none text-white"
            />
            <button
              onClick={sendMessage}
              className="bg-pink-600 ml-2 px-3 py-1 rounded hover:bg-pink-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
