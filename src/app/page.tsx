"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

// Import Tilt dengan dynamic import untuk menghindari SSR
const Tilt = dynamic(() => import('react-parallax-tilt'), {
  ssr: false,
});

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <Image
          src="/images/sakura-pattern.svg"
          alt="Sakura Pattern"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="min-h-[calc(100vh-6rem)] flex items-center pt-16 pb-12 px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <motion.div
              className="flex-1 text-center md:text-left"
              variants={staggerContainer}
            >
              <motion.div
                className="inline-block bg-pink-100 px-4 py-2 rounded-full mb-6"
                variants={fadeInUp}
              >
                <span className="text-pink-600 text-sm md:text-base">✨ Selamat Datang di Portfolio Saya</span>
              </motion.div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pink-600 mb-4"
                variants={fadeInUp}
              >
                こんにちは！
              </motion.h1>
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4"
                variants={fadeInUp}
              >
                Miftahul Ilmi Siregar
              </motion.h2>
              <motion.div
                className="bg-gradient-to-r from-pink-200 to-purple-200 p-px rounded-lg mb-8"
                variants={fadeInUp}
              >
                <div className="bg-white rounded-lg p-4 sm:p-6">
                  <p className="text-base sm:text-lg text-gray-600">
                    Mahasiswi Semester 8 Sastra Bahasa Jepang
                  </p>
                  <p className="text-base sm:text-lg text-gray-600">
                    Universitas Negeri Padang
                  </p>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Link
                  href="/portfolio"
                  className="w-full sm:w-auto px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Lihat Portfolio
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition-all text-center"
                >
                  Tentang Saya
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 relative w-full max-w-[300px] md:max-w-none"
              variants={fadeInUp}
            >
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
                <div className="relative">
                  <motion.div
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full relative overflow-hidden mx-auto"
                    animate={floatingAnimation}
                  >
                    {/* Dekorasi Border dengan Gradient */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-300 via-purple-300 to-pink-300 p-1 animate-spin-slow">
                      <div className="absolute inset-0 rounded-full border-4 border-white"></div>
                    </div>
                    
                    {/* Foto Profil */}
                    <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white">
                      <Image
                        src="/images/profile-photo.jpg"
                        alt="Foto Profil Miftahul Ilmi Siregar"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 640px) 12rem, (max-width: 768px) 16rem, (max-width: 1024px) 18rem, 24rem"
                      />
                    </div>

                    {/* Floating Sakura Decorations */}
                    {[
                      { top: '10%', left: '10%' },
                      { top: '20%', left: '80%' },
                      { top: '70%', left: '15%' },
                      { top: '60%', left: '85%' },
                      { top: '40%', left: '50%' }
                    ].map((position, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 sm:w-8 sm:h-8 text-pink-400"
                        style={{
                          top: position.top,
                          left: position.left,
                        }}
                        animate={{
                          y: [0, 20, 0],
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
                          width={32}
                          height={32}
                          className="opacity-50"
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </Tilt>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-16 px-4 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden"
        >
          <div className="container mx-auto max-w-6xl">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mb-12"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Keahlian & Pengalaman
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Bahasa Jepang",
                  desc: "Penguasaan bahasa Jepang tingkat menengah dengan kemampuan JLPT N3",
                  icon: "🎌"
                },
                {
                  title: "Budaya Jepang",
                  desc: "Pemahaman mendalam tentang budaya dan adat istiadat Jepang",
                  icon: "⛩️"
                },
                {
                  title: "Penerjemahan",
                  desc: "Pengalaman dalam penerjemahan dokumen dan subtitle anime",
                  icon: "📝"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="text-3xl sm:text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-pink-600 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.section
        className="py-16 sm:py-24 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 to-purple-50 opacity-50" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <motion.div
            className="text-4xl sm:text-6xl mb-6 sm:mb-8 text-pink-300"
            variants={fadeInUp}
          >
            "
          </motion.div>
          <motion.blockquote
            className="text-lg sm:text-xl md:text-2xl text-gray-700 italic mb-6 sm:mb-8 px-4"
            variants={fadeInUp}
          >
            Belajar bahasa Jepang bukan hanya tentang kata-kata,
            tetapi juga tentang memahami keindahan budaya dan filosofi hidup.
          </motion.blockquote>
          <motion.div
            className="w-16 sm:w-20 h-1 bg-pink-300 mx-auto mb-4"
            variants={fadeInUp}
          />
          <motion.p
            className="text-base sm:text-lg text-pink-600 font-semibold"
            variants={fadeInUp}
          >
            - Miftahul Ilmi Siregar
          </motion.p>
        </div>
      </motion.section>
    </main>
  );
}
