import React, { useState } from "react";

export default function EDOSmartApp() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    interests: "",
    goals: "",
    skills: ""
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateRecommendation = () => {
    const { specialty, interests, goals } = formData;
    let profession = "Junior Specialist";
    let course = "General Skill Course";
    let path = "Стажёр → Джуниор → Миддл → Сеньор";

    if (specialty.toLowerCase().includes("айти") || interests.includes("программирование")) {
      profession = "Frontend Developer";
      course = "HTML, CSS, JavaScript, React (Stepik / Udemy)";
      path = "Intern → Junior Frontend → Middle → Senior Dev";
    } else if (interests.toLowerCase().includes("маркетинг")) {
      profession = "Digital Marketer";
      course = "SMM, Google Ads, Targeting (Coursera / Skillbox)";
      path = "SMM-специалист → Digital Manager → Team Lead";
    }

    setResult({ profession, course, path });
    setStep(3);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 rounded-2xl shadow-xl bg-white text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">EDOSmart: AI-наставник по карьере</h1>

      {step === 1 && (
        <div className="space-y-4">
          <input className="w-full border p-2 rounded" placeholder="Имя" name="name" onChange={handleChange} />
          <input className="w-full border p-2 rounded" placeholder="Специальность / факультет" name="specialty" onChange={handleChange} />
          <input className="w-full border p-2 rounded" placeholder="Интересы (например: дизайн, IT, маркетинг)" name="interests" onChange={handleChange} />
          <input className="w-full border p-2 rounded" placeholder="Цели (например: стартап, удалёнка, госслужба)" name="goals" onChange={handleChange} />
          <input className="w-full border p-2 rounded" placeholder="Навыки (например: Excel, Python, Canva)" name="skills" onChange={handleChange} />

          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full" onClick={() => setStep(2)}>Далее</button>
        </div>
      )}

      {step === 2 && (
        <div className="text-center space-y-4">
          <p>Спасибо! Мы анализируем твой профиль...</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={generateRecommendation}>Показать рекомендации</button>
        </div>
      )}

      {step === 3 && result && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">🔍 Твои рекомендации:</h2>
          <p><strong>Профессия:</strong> {result.profession}</p>
          <p><strong>Курсы:</strong> {result.course}</p>
          <p><strong>Карьерный путь:</strong> {result.path}</p>
          <button className="mt-4 bg-gray-300 px-4 py-2 rounded" onClick={() => setStep(1)}>Пройти заново</button>
        </div>
      )}
    </div>
  );
}