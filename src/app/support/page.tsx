"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "서비스 이용 방법은 어떻게 되나요?",
    answer:
      "회원가입 후 로그인하여 다양한 축구 경기 중계와 분석 기능을 이용할 수 있습니다.",
  },
  {
    question: "경기 중계는 실시간으로 제공되나요?",
    answer: "네, 모든 경기는 실시간으로 중계됩니다.",
  },
  {
    question: "분석 기능은 어떤 데이터를 제공하나요?",
    answer: "경기 통계, 선수별 기록, 팀별 분석 등 다양한 데이터를 제공합니다.",
  },
  {
    question: "문의는 어떻게 하나요?",
    answer: "아래 문의하기 폼을 통해 문의하실 수 있습니다.",
  },
];

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 문의 내용 처리 로직 추가
    console.log("문의 내용:", formData);
    alert("문의가 접수되었습니다. 감사합니다.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">고객센터</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">자주 묻는 질문</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border p-4 rounded-lg bg-gray-100">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">문의하기</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              문의 내용
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            문의하기
          </button>
        </form>
      </section>
    </div>
  );
};

export default SupportPage;
