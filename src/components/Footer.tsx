"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { href: "/", label: "Beranda" },
    { href: "/about", label: "Tentang" },
    { href: "/portfolio", label: "Portofolio" },
    { href: "/contact", label: "Kontak" }
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/yourusername",
      color: "hover:bg-gradient-to-r hover:from-pink-400 hover:to-purple-400"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com/in/yourusername",
      color: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-cyan-400"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/yourusername",
      color: "hover:bg-gradient-to-r hover:from-sky-400 hover:to-indigo-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  if (!mounted) {
    // Render versi statis untuk server-side
    return (
      <footer className="bg-white/90 backdrop-blur-md shadow-lg mt-auto relative overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Static content */}
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-pink-600 mb-4 block">
                  ポートフォリオ
                </span>
              </Link>
              <p className="text-gray-600 leading-relaxed">
                Portfolio Miftahul Ilmi Siregar, mahasiswi semester 8 Sastra Bahasa Jepang
                Universitas Negeri Padang yang bersemangat dalam mempelajari bahasa dan
                budaya Jepang.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white/90 backdrop-blur-md shadow-lg mt-auto relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20" />
        <div className="absolute -bottom-12 -right-12 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20" />
      </div>

      <motion.div 
        className="container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo dan Deskripsi */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            variants={itemVariants}
          >
            <Link href="/" className="inline-block group">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                ポートフォリオ
              </motion.span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Portfolio Miftahul Ilmi Siregar, mahasiswi semester 8 Sastra Bahasa Jepang
              Universitas Negeri Padang yang bersemangat dalam mempelajari bahasa dan
              budaya Jepang.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Menu
            </h3>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <motion.li key={item.href} whileHover={{ x: 5 }}>
                  <Link 
                    href={item.href} 
                    className="text-gray-600 hover:text-pink-500 transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Media Sosial
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className={`w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-50 to-purple-50 ${social.color} transition-all duration-300`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <span className="text-2xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-pink-100 mt-12 pt-8 text-center"
          variants={itemVariants}
        >
          <p className="text-gray-600">
            © {new Date().getFullYear()} Miftahul Ilmi Siregar. Dibuat dengan 
            <motion.span
              className="inline-block mx-1"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              💖
            </motion.span>
          </p>
          <motion.div 
            className="mt-4 flex justify-center space-x-4"
            variants={containerVariants}
          >
            {["🌸", "🎌", "⛩️"].map((emoji, index) => (
              <motion.span
                key={index}
                className="text-2xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
                role="img"
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer; 