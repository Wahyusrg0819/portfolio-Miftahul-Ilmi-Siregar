"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/yourusername",
      color: "from-pink-400 to-purple-400",
      hoverColor: "from-pink-500 to-purple-500"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/yourusername",
      color: "from-blue-400 to-cyan-400",
      hoverColor: "from-blue-500 to-cyan-500"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/yourusername",
      color: "from-sky-400 to-indigo-400",
      hoverColor: "from-sky-500 to-indigo-500"
    }
  ];

  return (
    <main className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Image
          src="/images/sakura-pattern.svg"
          alt="Sakura Pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-24">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-block bg-pink-100 px-4 py-2 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-pink-600">✨ Mari Terhubung</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">お問い合わせ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Anda dapat menghubungi saya melalui platform media sosial berikut ini untuk diskusi atau kolaborasi
          </p>
        </motion.div>

        {/* Social Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-gradient-to-r ${social.color} p-px rounded-2xl group hover:shadow-xl transition-all duration-500`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white rounded-2xl p-8 h-full">
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    className="w-20 h-20 flex items-center justify-center bg-gradient-to-r from-pink-50 to-purple-50 rounded-full group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-4xl">{social.icon}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {social.name}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Hubungi via {social.name}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
} 