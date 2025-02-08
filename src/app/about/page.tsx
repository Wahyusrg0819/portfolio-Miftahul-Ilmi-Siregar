"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

// Import Tilt dengan dynamic import untuk menghindari SSR
const Tilt = dynamic(() => import('react-parallax-tilt'), {
  ssr: false,
});

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

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

      <div className="container mx-auto max-w-6xl px-4 py-24">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-block bg-pink-100 px-4 py-2 rounded-full mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <span className="text-pink-600">✨ Tentang Saya</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-pink-600 mb-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            私について
          </motion.h1>
        </motion.div>

        {/* Profile Section */}
        <motion.div 
          className="bg-white rounded-3xl shadow-lg p-8 mb-12 hover:shadow-xl transition-all duration-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          whileHover={{ y: -5 }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} className="relative">
              <Tilt
                tiltReverse={false}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={1000}
                scale={1}
                transitionSpeed={1000}
                gyroscope={true}
                tiltEnable={true}
              >
                <div className="w-64 h-64 mx-auto relative">
                  {/* Dekorasi Border dengan Gradient */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-pink-300 p-1 animate-spin-slow">
                    <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                  </div>
                  
                  {/* Foto Profil */}
                  <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/images/profile-photo.jpg"
                      alt="Foto Profil"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Sakura Decorations */}
                  {[
                    { top: '10%', left: '10%' },
                    { top: '20%', left: '80%' },
                    { top: '70%', left: '15%' }
                  ].map((position, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-6 h-6 text-pink-400`}
                      style={{
                        top: position.top,
                        left: position.left,
                      }}
                      animate={{
                        y: [0, 15, 0],
                        rotate: 360,
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    >
                      <Image
                        src="/images/sakura-pattern.svg"
                        alt="Sakura"
                        width={24}
                        height={24}
                        className="opacity-50"
                      />
                    </motion.div>
                  ))}
                </div>
              </Tilt>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-r from-pink-200 to-purple-200 p-px rounded-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <h2 className="text-2xl font-bold text-pink-600 mb-4">Profil Singkat</h2>
                  <p className="text-gray-600 mb-6">
                    Saya adalah mahasiswa Sastra Bahasa Jepang yang memiliki passion dalam mempelajari
                    bahasa dan budaya Jepang. Dengan kemampuan JLPT N3, saya aktif dalam kegiatan
                    terjemahan dan pengajaran bahasa Jepang.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Universitas:</span> Universitas Negeri Padang
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Jurusan:</span> Sastra Bahasa Jepang
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <p className="text-gray-600">
                        <span className="font-semibold">Semester:</span> 8
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 group hover:shadow-xl transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              <h2 className="text-2xl font-bold text-pink-600 mb-6 group-hover:text-pink-500 transition-colors duration-300">Kemampuan Bahasa</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gray-600">JLPT N3</span>
                    <span className="text-pink-500 group-hover:text-pink-600 transition-colors duration-300">85%</span>
                  </div>
                  <div className="h-2 bg-pink-100 rounded-full overflow-hidden group-hover:bg-pink-50 transition-colors duration-300">
                    <motion.div 
                      className="h-full bg-pink-500 rounded-full group-hover:bg-pink-600 transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gray-600">Conversation</span>
                    <span className="text-pink-500 group-hover:text-pink-600 transition-colors duration-300">90%</span>
                  </div>
                  <div className="h-2 bg-pink-100 rounded-full overflow-hidden group-hover:bg-pink-50 transition-colors duration-300">
                    <motion.div 
                      className="h-full bg-pink-500 rounded-full group-hover:bg-pink-600 transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gray-600">Reading</span>
                    <span className="text-pink-500 group-hover:text-pink-600 transition-colors duration-300">80%</span>
                  </div>
                  <div className="h-2 bg-pink-100 rounded-full overflow-hidden group-hover:bg-pink-50 transition-colors duration-300">
                    <motion.div 
                      className="h-full bg-pink-500 rounded-full group-hover:bg-pink-600 transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-3xl shadow-lg p-8 group hover:shadow-xl transition-all duration-500"
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
            >
              <h2 className="text-2xl font-bold text-pink-600 mb-6 group-hover:text-pink-500 transition-colors duration-300">Minat & Hobi</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🎌", text: "Budaya Jepang" },
                  { icon: "📚", text: "Manga & Anime" },
                  { icon: "✍️", text: "Kaligrafi" },
                  { icon: "🎤", text: "J-Pop" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl text-center group/item hover:from-pink-100 hover:to-purple-100 transition-all duration-500"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                  >
                    <span className="text-4xl mb-2 block transform group-hover/item:scale-110 transition-transform duration-300">{item.icon}</span>
                    <p className="text-gray-600 group-hover/item:text-gray-800 transition-colors duration-300">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Education Timeline */}
        <motion.div
          className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <h2 className="text-2xl font-bold text-pink-600 mb-8 text-center">Pendidikan</h2>
          <div className="space-y-8">
            {[
              {
                period: "2020 - Sekarang",
                school: "Universitas Negeri Padang",
                major: "Jurusan Sastra Bahasa Jepang"
              },
              {
                period: "2017 - 2020",
                school: "SMA Negeri 1 PadangSidimpuan",
                major: "Jurusan IPA"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 border-l-2 border-pink-200 group hover:pl-10 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ x: 5 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-400 rounded-full group-hover:scale-125 group-hover:bg-pink-500 transition-all duration-300" />
                <div className="mb-1 text-pink-500 font-semibold group-hover:text-pink-600 transition-colors duration-300">{edu.period}</div>
                <div className="text-gray-800 font-medium group-hover:text-gray-900 transition-colors duration-300">{edu.school}</div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{edu.major}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 