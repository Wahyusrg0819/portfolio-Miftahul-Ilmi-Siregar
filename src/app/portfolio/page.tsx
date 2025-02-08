"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Client Component untuk Portfolio Content
function PortfolioContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Magang di Jepang",
      description: "Pengalaman magang di Jepang sejak April 2024 hingga sekarang, memperdalam pemahaman bahasa dan budaya Jepang secara langsung.",
      image: "/images/portfolio/japan-internship.jpg",
      tags: ["Magang", "Pengalaman Kerja", "Budaya Jepang"],
      date: "April 2024 - Sekarang",
      isHighlight: true
    },
    {
      title: "Artikel Budaya Jepang",
      description: "Menulis artikel tentang festival-festival tradisional Jepang dan makna budayanya, berbagi pengetahuan dan pengalaman tentang keunikan budaya Jepang.",
      image: "/images/portfolio/japanese-culture.jpg",
      tags: ["Artikel", "Budaya", "Festival"],
      date: "2023"
    },
    {
      title: "Pengajaran Bahasa Jepang",
      description: "Mengajar bahasa Jepang dasar untuk pemula, fokus pada percakapan sehari-hari dan pemahaman budaya Jepang dalam konteks modern.",
      image: "/images/portfolio/teaching.jpg",
      tags: ["Pengajaran", "JLPT N3", "Conversation"],
      date: "2023"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Header */}
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
          <span className="text-pink-600 text-sm sm:text-base">✨ Portfolio & Pengalaman</span>
        </motion.div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4">ポートフォリオ</h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Koleksi proyek dan pengalaman saya dalam bidang bahasa dan budaya Jepang
        </p>
      </motion.div>

      {/* Highlight Section - Magang di Jepang */}
      <motion.div
        className="mb-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-4 sm:p-8 shadow-lg group hover:shadow-xl transition-all duration-500"
          whileHover={{ y: -5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              />
              <Image
                src="/images/portfolio/japan-internship.jpg"
                alt="Magang di Jepang"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <motion.span 
                className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm sm:text-base group-hover:bg-pink-200 transition-colors duration-300"
              >
                April 2024 - Sekarang
              </motion.span>
              <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 group-hover:text-pink-500 transition-colors duration-300">
                Magang di Jepang
              </h2>
              <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                Saat ini saya sedang menjalani program magang di Jepang, sebuah pengalaman
                yang memberikan kesempatan untuk mempraktikkan bahasa Jepang secara langsung
                dan memahami budaya kerja Jepang. Program ini memungkinkan saya untuk
                mengembangkan kemampuan bahasa dan soft skills dalam lingkungan profesional.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Magang", "Pengalaman Kerja", "Budaya Jepang"].map((tag, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm hover:bg-pink-200 hover:scale-105 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {projects.filter(project => !project.isHighlight).map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-500"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              />
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="text-sm text-pink-500 group-hover:text-pink-600 transition-colors duration-300">
                {project.date}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-3 py-1 bg-pink-50 text-pink-600 rounded-full text-sm hover:bg-pink-100 transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-20 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 sm:p-12 shadow-lg"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4">Tertarik Berkolaborasi?</h2>
          <p className="text-gray-600 text-sm sm:text-base mb-8 max-w-2xl mx-auto">
            Saya selalu terbuka untuk proyek baru dan kolaborasi menarik dalam bidang bahasa dan budaya Jepang!
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-500 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Hubungi Saya
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  );
}

// Main Portfolio Page Component
export default function Portfolio() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto max-w-6xl">
        <PortfolioContent />
      </div>
    </main>
  );
} 