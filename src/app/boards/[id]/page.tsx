"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "메시, 바르셀로나 복귀설",
    content: "메시가 바르셀로나로 복귀할 가능성이 있다는 소식입니다.",
    author: "축구왕 메시",
    date: "2023-10-01",
  },
  {
    id: 2,
    title: "호날두, 새로운 팀 찾기?",
    content: "호날두가 새로운 팀을 찾고 있다는 소문이 돌고 있습니다.",
    author: "호날두 팬",
    date: "2023-10-02",
  },
  {
    id: 3,
    title: "손흥민, EPL 득점왕 도전",
    content: "손흥민이 이번 시즌 EPL 득점왕에 도전합니다.",
    author: "손세이셔널",
    date: "2023-10-03",
  },
  {
    id: 4,
    title: "네이마르, PSG 떠날까?",
    content: "네이마르가 PSG를 떠날 가능성이 있다는 소식입니다.",
    author: "네이마르 팬클럽",
    date: "2023-10-04",
  },
  {
    id: 5,
    title: "레알 마드리드, 새로운 감독 영입?",
    content: "레알 마드리드가 새로운 감독을 영입할 가능성이 있습니다.",
    author: "레알 매니아",
    date: "2023-10-05",
  },
  {
    id: 6,
    title: "맨체스터 유나이티드, 챔피언스 리그 우승 가능성",
    content:
      "맨체스터 유나이티드가 챔피언스 리그에서 우승할 가능성이 높아지고 있습니다.",
    author: "맨유 서포터",
    date: "2023-10-06",
  },
  {
    id: 7,
    title: "첼시, 새로운 스타 플레이어 영입",
    content: "첼시가 새로운 스타 플레이어를 영입할 계획입니다.",
    author: "첼시 블루스",
    date: "2023-10-07",
  },
  {
    id: 8,
    title: "리버풀, 이번 시즌 우승 가능성",
    content: "리버풀이 이번 시즌 우승할 가능성이 높아지고 있습니다.",
    author: "리버풀 레드",
    date: "2023-10-08",
  },
  {
    id: 9,
    title: "맨체스터 시티, 새로운 전술 도입",
    content: "맨체스터 시티가 새로운 전술을 도입할 계획입니다.",
    author: "시티즌",
    date: "2023-10-09",
  },
  {
    id: 10,
    title: "아스널, 유망주 선수 발굴",
    content: "아스널이 유망주 선수를 발굴하고 있다는 소식입니다.",
    author: "아스널 건너",
    date: "2023-10-10",
  },
];

const initialComments = [
  {
    postId: 1,
    author: "축구팬1",
    content: "정말 기대되네요!",
    date: "2023-10-01",
  },
  {
    postId: 1,
    author: "축구팬2",
    content: "메시 복귀하면 대박!",
    date: "2023-10-02",
  },
  {
    postId: 2,
    author: "축구팬3",
    content: "호날두는 어디로 갈까요?",
    date: "2023-10-03",
  },
  {
    postId: 3,
    author: "축구팬4",
    content: "손흥민 화이팅!",
    date: "2023-10-04",
  },
  {
    postId: 4,
    author: "축구팬5",
    content: "네이마르 떠나면 PSG는?",
    date: "2023-10-05",
  },
];

export default function Post() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const post = posts.find((post) => post.id === Number(id));
  const [comments, setComments] = useState(
    initialComments.filter((comment) => comment.postId === Number(id))
  );
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newCommentData = {
      postId: Number(id),
      author: commentAuthor || "익명",
      content: newComment,
      date: new Date().toISOString().split("T")[0],
    };
    setComments([...comments, newCommentData]);
    setNewComment("");
    setCommentAuthor("");
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
      >
        <FaArrowLeft />
      </button>
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">작성자: {post.author}</p>
      <p className="text-gray-600 mb-4">작성일: {post.date}</p>
      <div className="border-t pt-4 mb-4">{post.content}</div>
      <h2 className="text-xl font-semibold mb-4">댓글</h2>
      <div className="space-y-4 mb-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg bg-gray-100 shadow-md"
          >
            <p className="text-gray-800 mb-2">{comment.content}</p>
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>작성자: {comment.author}</span>
              <span>작성일: {comment.date}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleCommentSubmit} className="space-y-4">
        <input
          type="text"
          value={commentAuthor}
          onChange={(e) => setCommentAuthor(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="작성자 이름"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="댓글을 입력하세요..."
          rows={4}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            댓글 작성
          </button>
        </div>
      </form>
    </div>
  );
}
