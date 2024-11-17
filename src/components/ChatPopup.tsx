import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaComments } from "react-icons/fa";

const fakeMessages = [
  { author: "사용자1", content: "안녕하세요!" },
  { author: "사용자2", content: "경기 정말 재밌네요!" },
  { author: "사용자3", content: "메시 복귀하면 대박이겠죠?" },
  { author: "사용자4", content: "호날두는 어디로 갈까요?" },
  { author: "사용자5", content: "손흥민 화이팅!" },
  { author: "사용자6", content: "네이마르 떠나면 PSG는 어떻게 될까요?" },
  { author: "사용자7", content: "레알 마드리드의 새로운 감독은 누구일까요?" },
  {
    author: "사용자8",
    content: "맨유가 챔피언스 리그에서 우승할 수 있을까요?",
  },
  { author: "사용자9", content: "첼시의 새로운 스타 플레이어는 누구일까요?" },
  { author: "사용자10", content: "리버풀이 이번 시즌 우승할 수 있을까요?" },
];

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(fakeMessages);
  const [newMessage, setNewMessage] = useState("");
  const [participants, setParticipants] = useState(fakeMessages.length);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        fakeMessages[Math.floor(Math.random() * fakeMessages.length)];
      const newFakeMessage = {
        author: `사용자${participants + 1}`,
        content: randomMessage.content,
      };
      setMessages((prevMessages) => [...prevMessages, newFakeMessage]);
      setParticipants((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [participants]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    const newChatMessage = {
      author: "나",
      content: newMessage,
    };
    setMessages((prevMessages) => [...prevMessages, newChatMessage]);
    setNewMessage("");
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <FaComments size={24} />
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="flex justify-between items-center p-4 border-b border-gray-300">
            <h2 className="text-lg font-semibold">실시간 채팅</h2>
            <button onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                <span className="font-semibold">{message.author}:</span>{" "}
                <span>{message.content}</span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 border-t border-gray-300">
            <form onSubmit={handleSendMessage} className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-grow p-2 border rounded"
                placeholder="메시지를 입력하세요..."
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                전송
              </button>
            </form>
          </div>
          <div className="p-2 text-sm text-gray-600 text-right">
            참여자 수: {participants}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;
