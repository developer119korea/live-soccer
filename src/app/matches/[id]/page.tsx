"use client";

import React, { useState, ReactNode } from "react";
import Image from "next/image"; // next/image에서 Image 컴포넌트 가져오기
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";
import { Clock, MapPin, Users, Trophy, Timer } from "lucide-react";

const MatchDashboard = () => {
  const [activeTab, setActiveTab] = useState("statistics");

  const match = {
    homeTeam: {
      name: "맨체스터 시티",
      score: 2,
      logo: "https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg",
      scorers: ["홀란드 (32')", "데 브라위너 (67')"],
      possession: 58,
      shots: 15,
      shotsOnTarget: 7,
      corners: 8,
      fouls: 10,
    },
    awayTeam: {
      name: "리버풀",
      score: 1,
      logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
      scorers: ["살라 (45')"],
      possession: 42,
      shots: 10,
      shotsOnTarget: 4,
      corners: 5,
      fouls: 12,
    },
    status: "진행중",
    currentTime: "78:24",
    stadium: "에티하드 스타디움",
    kickoff: "2024-11-16 20:30",
    attendance: "53,000",
    referee: "마이클 올리버",
    lineup: {
      home: {
        formation: "4-3-3",
        players: [
          { number: "31", name: "에데르송", position: "GK" },
          { number: "2", name: "워커", position: "DF" },
          { number: "5", name: "스톤스", position: "DF" },
          { number: "3", name: "디아스", position: "DF" },
          { number: "7", name: "아케", position: "DF" },
          { number: "16", name: "로드리", position: "MF" },
          { number: "17", name: "데 브라위너", position: "MF" },
          { number: "47", name: "포든", position: "MF" },
          { number: "20", name: "번나르두", position: "FW" },
          { number: "9", name: "홀란드", position: "FW" },
          { number: "10", name: "그릴리시", position: "FW" },
        ],
      },
      away: {
        formation: "4-3-3",
        players: [
          { number: "1", name: "알리송", position: "GK" },
          { number: "66", name: "알렉산더-아널드", position: "DF" },
          { number: "4", name: "반 다이크", position: "DF" },
          { number: "5", name: "콘나테", position: "DF" },
          { number: "26", name: "로버트슨", position: "DF" },
          { number: "3", name: "파비뉴", position: "MF" },
          { number: "8", name: "케이타", position: "MF" },
          { number: "6", name: "티아고", position: "MF" },
          { number: "11", name: "살라", position: "FW" },
          { number: "9", name: "누녜스", position: "FW" },
          { number: "20", name: "디오고 조타", position: "FW" },
        ],
      },
    },
    highlights: [
      { time: "78'", event: "경고", player: "반 다이크", team: "리버풀" },
      {
        time: "67'",
        event: "득점",
        player: "데 브라위너",
        team: "맨체스터 시티",
      },
      { time: "45'", event: "득점", player: "살라", team: "리버풀" },
      { time: "32'", event: "득점", player: "홀란드", team: "맨체스터 시티" },
    ],
  };

  const LiveTimer = () => (
    <div className="flex items-center space-x-2 text-red-500">
      <Timer className="w-4 h-4 animate-pulse" />
      <span className="font-mono">{match.currentTime}</span>
    </div>
  );

  const SectionTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
    <h2 className="text-xl font-semibold my-6 pb-2 border-b border-gray-200">
      {children}
    </h2>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h1 className="text-2xl font-bold mb-4">경기 상세</h1>
      <Card className="bg-white shadow-lg">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <Badge variant="secondary">프리미어 리그</Badge>
            <LiveTimer />
            <Badge variant="destructive">{match.status}</Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col items-start flex-1">
              <span className="font-semibold text-lg">
                {match.homeTeam.name}
              </span>
              <div className="flex items-center justify-between w-full mt-2">
                <Image
                  src={match.homeTeam.logo}
                  alt={match.homeTeam.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div className="text-sm text-gray-600">
                  {match.homeTeam.scorers.map((scorer, idx) => (
                    <div key={idx}>{scorer}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-4xl font-bold whitespace-nowrap mx-4">
              {match.homeTeam.score} - {match.awayTeam.score}
            </div>
            <div className="flex flex-col items-end flex-1">
              <span className="font-semibold text-lg">
                {match.awayTeam.name}
              </span>
              <div className="flex items-center justify-between w-full mt-2">
                <div className="text-sm text-gray-600 text-right">
                  {match.awayTeam.scorers.map((scorer, idx) => (
                    <div key={idx}>{scorer}</div>
                  ))}
                </div>
                <div className="flex items-center">
                  <Image
                    src={match.awayTeam.logo}
                    alt={match.awayTeam.name}
                    width={48}
                    height={48}
                    className="w-12 h-12"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>킥오프: {match.kickoff}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>경기장: {match.stadium}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>관중: {match.attendance}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4" />
              <span>심판: {match.referee}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex space-x-4">
            <button
              className={`px-4 py-2 ${
                activeTab === "statistics"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("statistics")}
            >
              경기 통계
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "lineup"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("lineup")}
            >
              라인업
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "highlights"
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("highlights")}
            >
              하이라이트
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === "statistics" && (
            <div className="space-y-6">
              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span>{match.homeTeam.possession}%</span>
                  <span className="font-medium">점유율</span>
                  <span>{match.awayTeam.possession}%</span>
                </div>
                <Progress value={match.homeTeam.possession} className="h-2" />
              </div>

              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span>{match.homeTeam.shots}</span>
                  <span className="font-medium">슈팅</span>
                  <span>{match.awayTeam.shots}</span>
                </div>
                <Progress
                  value={
                    (match.homeTeam.shots /
                      (match.homeTeam.shots + match.awayTeam.shots)) *
                    100
                  }
                  className="h-2"
                />
              </div>

              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span>{match.homeTeam.shotsOnTarget}</span>
                  <span className="font-medium">유효슈팅</span>
                  <span>{match.awayTeam.shotsOnTarget}</span>
                </div>
                <Progress
                  value={
                    (match.homeTeam.shotsOnTarget /
                      (match.homeTeam.shotsOnTarget +
                        match.awayTeam.shotsOnTarget)) *
                    100
                  }
                  className="h-2"
                />
              </div>

              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span>{match.homeTeam.corners}</span>
                  <span className="font-medium">코너킥</span>
                  <span>{match.awayTeam.corners}</span>
                </div>
                <Progress
                  value={
                    (match.homeTeam.corners /
                      (match.homeTeam.corners + match.awayTeam.corners)) *
                    100
                  }
                  className="h-2"
                />
              </div>

              <div className="stat-item">
                <div className="flex justify-between mb-2">
                  <span>{match.homeTeam.fouls}</span>
                  <span className="font-medium">파울</span>
                  <span>{match.awayTeam.fouls}</span>
                </div>
                <Progress
                  value={
                    (match.homeTeam.fouls /
                      (match.homeTeam.fouls + match.awayTeam.fouls)) *
                    100
                  }
                  className="h-2"
                />
              </div>
            </div>
          )}
          {activeTab === "lineup" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg">
                      {match.homeTeam.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Formation: {match.lineup.home.formation}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {match.lineup.home.players.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-8 text-center font-mono bg-gray-100 rounded">
                          {player.number}
                        </span>
                        <span className="flex-grow">{player.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {player.position}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg">
                      {match.awayTeam.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Formation: {match.lineup.away.formation}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {match.lineup.away.players.map((player) => (
                      <div
                        key={player.number}
                        className="flex items-center space-x-3"
                      >
                        <span className="w-8 text-center font-mono bg-gray-100 rounded">
                          {player.number}
                        </span>
                        <span className="flex-grow">{player.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {player.position}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "highlights" && (
            <div className="space-y-6">
              <div className="space-y-4">
                {match.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span className="font-mono text-sm min-w-[48px]">
                      {highlight.time}
                    </span>
                    <Badge
                      variant={
                        highlight.event === "득점"
                          ? "default"
                          : highlight.event === "교체"
                          ? "secondary"
                          : "outline"
                      }
                      className="min-w-[60px] justify-center"
                    >
                      {highlight.event}
                    </Badge>
                    <div>
                      <span className="font-medium">{highlight.player}</span>
                      <span className="text-sm text-gray-600 ml-2">
                        ({highlight.team})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchDashboard;
