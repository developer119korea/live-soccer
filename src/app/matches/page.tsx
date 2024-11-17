"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaClock, FaFutbol } from "react-icons/fa";

const matches = [
  {
    id: 1,
    league: "프리미어 리그",
    startTime: "2024-11-16 20:30",
    status: "전반 45:00",
    homeTeam: "맨체스터 시티",
    homeScore: 2,
    awayTeam: "리버풀",
    awayScore: 1,
  },
  {
    id: 2,
    league: "프리미어 리그",
    startTime: "2024-11-17 18:00",
    status: "후반 90:00",
    homeTeam: "첼시",
    homeScore: 1,
    awayTeam: "아스널",
    awayScore: 1,
  },
  {
    id: 3,
    league: "라 리가",
    startTime: "2024-11-18 21:00",
    status: "전반 30:00",
    homeTeam: "레알 마드리드",
    homeScore: 1,
    awayTeam: "바르셀로나",
    awayScore: 0,
  },
  {
    id: 4,
    league: "세리에 A",
    startTime: "2024-11-19 19:30",
    status: "후반 60:00",
    homeTeam: "유벤투스",
    homeScore: 2,
    awayTeam: "인터 밀란",
    awayScore: 2,
  },
  {
    id: 5,
    league: "분데스리가",
    startTime: "2024-11-20 20:45",
    status: "전반 15:00",
    homeTeam: "바이에른 뮌헨",
    homeScore: 0,
    awayTeam: "도르트문트",
    awayScore: 1,
  },
  {
    id: 6,
    league: "리그 1",
    startTime: "2024-11-21 22:00",
    status: "후반 75:00",
    homeTeam: "파리 생제르맹",
    homeScore: 3,
    awayTeam: "올림피크 리옹",
    awayScore: 1,
  },
  {
    id: 7,
    league: "프리미어 리그",
    startTime: "2024-11-22 17:00",
    status: "전반 40:00",
    homeTeam: "토트넘",
    homeScore: 1,
    awayTeam: "맨체스터 유나이티드",
    awayScore: 1,
  },
  {
    id: 8,
    league: "라 리가",
    startTime: "2024-11-23 19:00",
    status: "후반 85:00",
    homeTeam: "아틀레티코 마드리드",
    homeScore: 2,
    awayTeam: "세비야",
    awayScore: 2,
  },
  {
    id: 9,
    league: "세리에 A",
    startTime: "2024-11-24 20:00",
    status: "전반 20:00",
    homeTeam: "AC 밀란",
    homeScore: 0,
    awayTeam: "나폴리",
    awayScore: 0,
  },
  {
    id: 10,
    league: "분데스리가",
    startTime: "2024-11-25 18:30",
    status: "후반 70:00",
    homeTeam: "RB 라이프치히",
    homeScore: 1,
    awayTeam: "레버쿠젠",
    awayScore: 1,
  },
];

const Matches = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">경기 목록</h1>
      <ul className="space-y-4">
        {matches.map((match) => (
          <li
            key={match.id}
            className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link
              href={`/matches/${match.id}`}
              className="flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-600">
                  {match.league}
                </h2>
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>{match.startTime}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaFutbol className="mr-2" />
                  <span>{match.status}</span>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-lg font-semibold text-gray-800">
                  {match.homeTeam}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  {match.homeScore} - {match.awayScore}
                </p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {match.awayTeam}
                </h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Matches;
