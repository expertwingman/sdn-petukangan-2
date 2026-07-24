"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, Trophy, FlaskConical, Atom, Award, CheckCircle2, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function LabPage() {
  const [activeTab, setActiveTab] = useState<"kuis" | "simulasi">("kuis");
  
  // State untuk Kuis Sains
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // State untuk Simulasi Lab (Suhu Air)
  const [suhu, setSuhu] = useState(25);
  const [wujud, setWujud] = useState("Cair (Normal)");

  const questions = [
    {
      question: "Apa wujud air jika didinginkan hingga suhu di bawah 0 derajat Celsius?",
      options: ["Uap Gas", "Es Padat", "Minyak", "Plasma"],
      correct: 1
    },
    {
      question: "Planet manakah yang berada paling dekat dengan matahari dalam tata surya kita?",
      options: ["Venus", "Mars", "Merkurius", "Jupiter"],
      correct: 2
    },
    {
      question: "Bagian tumbuhan yang berfungsi menyerap air dan zat hara dari dalam tanah adalah?",
      options: ["Daun", "Batang", "Bunga", "Akar"],
      correct: 3
    }
  ];

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 25);
    }
  };

  const nextQuestion = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizFinished(false);
  };

  const handleSuhuChange = (val: number) => {
    setSuhu(val);
    if (val <= 0) {
      setWujud("Membeku (Es Padat)");
    } else if (val >= 100) {
      setWujud("Mendidih (Uap Gas)");
    } else {
      setWujud("Cair (Normal)");
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans pb-24 selection:bg-blue-500 selection:text-white">
      {/* Navbar Simple */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl z-50 border-b border-slate-200/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-[#0052CC] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium text-sm">Kembali ke Beranda</span>
          </Link>
          <div className="font-semibold text-lg tracking-tight text-slate-800">
            Laboratorium & Simulasi Edukatif
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 shadow-sm"
        >
          <Atom className="w-4 h-4 text-[#0052CC]" />
          <span>Pembelajaran Interaktif Berbasis Game</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Virtual Lab & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-[#00A854]">
            Kuis Sains Gamifikasi
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-slate-500 leading-relaxed mb-8"
        >
          Eksperimen sains digital dan asah pengetahuan sains dasar secara seru dan menyenangkan bagi peserta didik.
        </motion.p>

        {/* Tab Switcher */}
        <div className="inline-flex bg-slate-200/60 p-1.5 rounded-2xl gap-2">
          <button 
            onClick={() => setActiveTab("kuis")}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === "kuis" ? "bg-white text-[#0052CC] shadow-md" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Trophy className="w-4 h-4" /> Kuis Sains Interaktif
          </button>
          <button 
            onClick={() => setActiveTab("simulasi")}
            className={`px-6 py-2.5 rounded-xl font-medium text-sm transition-all flex items-center gap-2 ${
              activeTab === "simulasi" ? "bg-white text-[#0052CC] shadow-md" : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <FlaskConical className="w-4 h-4" /> Simulasi Suhu Air
          </button>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="px-6 max-w-3xl mx-auto mt-6">
        {activeTab === "kuis" ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100 relative overflow-hidden"
          >
            {!quizFinished ? (
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0052CC] uppercase tracking-wider">
                    Soal {currentQuestion + 1} dari {questions.length}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                    Skor: {score} Poin
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-6 leading-relaxed">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3 mb-8">
                  {questions[currentQuestion].options.map((opt, idx) => {
                    let btnStyle = "bg-slate-50 border-slate-200 text-slate-700 hover:border-[#0052CC]";
                    if (isAnswered) {
                      if (idx === questions[currentQuestion].correct) {
                        btnStyle = "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold";
                      } else if (idx === selectedOption) {
                        btnStyle = "bg-rose-50 border-rose-500 text-rose-800";
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        disabled={isAnswered}
                        className={`w-full text-left p-4 rounded-2xl border transition-all text-base ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {isAnswered && (
                  <div className="flex justify-end">
                    <button
                      onClick={nextQuestion}
                      className="bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20"
                    >
                      {currentQuestion + 1 < questions.length ? "Soal Berikutnya" : "Lihat Hasil Akhir"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-[#00A854]" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">Kuis Selesai!</h3>
                <p className="text-slate-500 text-base mb-6">Hebat sekali! Anda berhasil menyelesaikan kuis sains dengan total perolehan skor:</p>
                <div className="text-4xl font-extrabold text-[#0052CC] mb-8">{score} Poin</div>
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center gap-2 bg-[#0052CC] hover:bg-blue-700 text-white px-8 py-3.5 rounded-2xl font-medium transition-all shadow-lg shadow-blue-500/20"
                >
                  <RotateCcw className="w-4 h-4" /> Ulangi Kuis
                </button>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0052CC]">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Laboratorium Suhu Air Digital</h3>
                <p className="text-xs text-slate-400">Geser tuas suhu untuk melihat perubahan wujud air secara real-time</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                <div className="text-xs text-slate-400 font-medium mb-1">Suhu Saat Ini</div>
                <div className="text-5xl font-extrabold text-[#0052CC] mb-2">{suhu} &deg;C</div>
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full font-bold text-sm">
                  {wujud}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-2 font-semibold">
                  <span>-20°C (Beku)</span>
                  <span>50°C (Hangat)</span>
                  <span>100°C (Mendidih)</span>
                </div>
                <input 
                  type="range" 
                  min="-20" 
                  max="120" 
                  value={suhu}
                  onChange={(e) => handleSuhuChange(Number(e.target.value))}
                  className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0052CC]"
                />
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-800 text-sm leading-relaxed">
                Catatan Lab: Pada tekanan 1 atm, air murni membeku pada suhu 0°C dan mendidih menjadi uap pada suhu 100°C.
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
