'use client'
import { useState } from 'react'
import Link from 'next/link'

const quizData = [
  {
    question: 'Apa nama Kepala Sekolah SDN Petukangan Selatan 02 saat ini?',
    options: ['Drs. H. M. Sutisna, M.Pd.', 'Hj. Siti Aminah, S.Pd.', 'Dr. Ahmad Fauzi, M.Pd.', 'Dra. Rina Marlina, M.Si.'],
    correct: 0,
  },
  {
    question: 'Apa predikat yang disandang oleh SDN Petukangan Selatan 02?',
    options: ['Sekolah Adiwiyata', 'Sekolah Ramah Anak', 'Sekolah Unggulan', 'Sekolah Digital'],
    correct: 1,
  },
  {
    question: 'Di mana lokasi SDN Petukangan Selatan 02?',
    options: ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Timur', 'Jakarta Barat'],
    correct: 1,
  },
  {
    question: 'Apa visi dari SDN Petukangan Selatan 02?',
    options: ['Membentuk Karakter, Merancang Masa Depan', 'Membangun Generasi Cerdas', 'Menuju Sekolah Digital', 'Akreditasi A'],
    correct: 0,
  },
  {
    question: 'Fasilitas apa yang tersedia di SDN Petukangan Selatan 02?',
    options: ['Laboratorium Komputer', 'Perpustakaan Digital', 'Lapangan Olahraga', 'Semua benar'],
    correct: 3,
  },
]

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answered, setAnswered] = useState(false)

  const handleOptionClick = (index: number) => {
    if (answered) return
    setSelectedOption(index)
    setAnswered(true)
    if (index === quizData[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setAnswered(false)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
    setAnswered(false)
  }

  if (showResult) {
    return (
      <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 text-center animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-900 mb-6">Hasil Quiz</h1>
          <div className="text-7xl font-bold text-blue-600 mb-4">{score} / {quizData.length}</div>
          <p className="text-xl text-gray-600 mb-8">
            {score === quizData.length ? '🎉 Sempurna! Anda sangat mengenal sekolah ini!' :
             score >= quizData.length * 0.6 ? '👍 Bagus! Terus pelajari lebih dalam tentang sekolah kita.' :
             '📖 Ayo baca lebih banyak tentang sekolah kita di halaman Profil.'}
          </p>
          <button
            onClick={resetQuiz}
            className="btn-primary inline-block"
          >
            Ulangi Quiz
          </button>
          <div className="mt-4">
            <Link href="/" className="text-blue-600 hover:text-blue-800 transition">
              ← Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const current = quizData[currentQuestion]

  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-2xl mx-auto glass-card p-8 md:p-12 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm font-medium text-blue-600">Pertanyaan {currentQuestion + 1} dari {quizData.length}</span>
          <span className="text-sm font-medium text-gray-500">Skor: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{current.question}</h2>
        <div className="space-y-3">
          {current.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedOption === index
                  ? index === current.correct
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-red-500 bg-red-50 text-red-700'
                  : selectedOption !== null && index === current.correct
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50/50'
              }`}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>
        {answered && (
          <button
            onClick={handleNext}
            className="mt-6 w-full btn-primary text-center"
          >
            {currentQuestion < quizData.length - 1 ? 'Soal Berikutnya →' : 'Lihat Hasil'}
          </button>
        )}
      </div>
    </div>
  )
}
