import Link from "next/link";
import {
  FaUser,
  FaEye,
  FaThumbsUp,
  FaCalendarAlt,
  FaHeart,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "메시, 바르셀로나 복귀설",
    author: "축구왕 메시",
    follow: 10,
    date: "2023-10-01",
    views: 100,
    likes: 5,
  },
  {
    id: 2,
    title: "호날두, 새로운 팀 찾기?",
    author: "호날두 팬",
    follow: 20,
    date: "2023-10-02",
    views: 200,
    likes: 15,
  },
  {
    id: 3,
    title: "손흥민, EPL 득점왕 도전",
    author: "손세이셔널",
    follow: 30,
    date: "2023-10-03",
    views: 300,
    likes: 25,
  },
  {
    id: 4,
    title: "네이마르, PSG 떠날까?",
    author: "네이마르 팬클럽",
    follow: 40,
    date: "2023-10-04",
    views: 400,
    likes: 35,
  },
  {
    id: 5,
    title: "레알 마드리드, 새로운 감독 영입?",
    author: "레알 매니아",
    follow: 50,
    date: "2023-10-05",
    views: 500,
    likes: 45,
  },
  {
    id: 6,
    title: "맨체스터 유나이티드, 챔피언스 리그 우승 가능성",
    author: "맨유 서포터",
    follow: 60,
    date: "2023-10-06",
    views: 600,
    likes: 55,
  },
  {
    id: 7,
    title: "첼시, 새로운 스타 플레이어 영입",
    author: "첼시 블루스",
    follow: 70,
    date: "2023-10-07",
    views: 700,
    likes: 65,
  },
  {
    id: 8,
    title: "리버풀, 이번 시즌 우승 가능성",
    author: "리버풀 레드",
    follow: 80,
    date: "2023-10-08",
    views: 800,
    likes: 75,
  },
  {
    id: 9,
    title: "맨체스터 시티, 새로운 전술 도입",
    author: "시티즌",
    follow: 90,
    date: "2023-10-09",
    views: 900,
    likes: 85,
  },
  {
    id: 10,
    title: "아스널, 유망주 선수 발굴",
    author: "아스널 건너",
    follow: 100,
    date: "2023-10-10",
    views: 1000,
    likes: 95,
  },
];

export default function Board() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">게시판 목록</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.id} href={`/boards/${post.id}`}>
            <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <h2 className="text-lg font-semibold text-blue-600 mb-2">
                {post.title}
              </h2>
              <div className="flex items-center text-gray-600 mb-1">
                <FaUser className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center text-gray-600 mb-1">
                <FaCalendarAlt className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-gray-600 space-x-4">
                <div className="flex items-center">
                  <FaHeart className="mr-1" />
                  <span>{post.follow}</span>
                </div>
                <div className="flex items-center">
                  <FaEye className="mr-1" />
                  <span>{post.views}</span>
                </div>
                <div className="flex items-center">
                  <FaThumbsUp className="mr-1" />
                  <span>{post.likes}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
