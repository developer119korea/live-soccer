import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          축구 경기 중계 플랫폼
        </h1>
        <p className="text-lg text-gray-700">
          실시간 경기 중계와 분석을 제공합니다.
        </p>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl mx-auto">
        <div
          className="relative w-full h-64 mb-8 bg-cover bg-center rounded-lg shadow-lg"
          style={{ backgroundImage: "url('/soccer-field.jpg')" }}
        ></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <Link href="/matches" legacyBehavior>
            <a
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-cover bg-center"
              style={{ backgroundImage: "url('/live-icon.jpg')" }}
            >
              <h2 className="text-xl font-semibold text-blue-600 bg-white bg-opacity-75 p-2 rounded">
                실시간 경기 중계
              </h2>
              <p className="text-gray-600 mt-2 bg-white bg-opacity-75 p-2 rounded">
                지금 바로 실시간 경기를 시청하세요.
              </p>
            </a>
          </Link>
          <Link href="/boards" legacyBehavior>
            <a
              className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-cover bg-center"
              style={{ backgroundImage: "url('/club-icon.jpg')" }}
            >
              <h2 className="text-xl font-semibold text-blue-600 bg-white bg-opacity-75 p-2 rounded">
                커뮤니티
              </h2>
              <p className="text-gray-600 mt-2 bg-white bg-opacity-75 p-2 rounded">
                다양한 사람들과 의견을 나누세요.
              </p>
            </a>
          </Link>
        </div>
      </main>
      <footer className="w-full max-w-4xl mx-auto text-center mt-8">
        <p className="text-gray-600">
          &copy; 2024 축구 경기 중계 플랫폼. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
