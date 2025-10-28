import type { Route } from "./+types/my-layouts-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "내 레이아웃 관리 - 햄스터 케이지 시뮬레이터" },
    { name: "description", content: "내가 만든 햄스터 케이지 레이아웃을 관리하세요." },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  // TODO: 현재 사용자의 레이아웃 목록을 가져오는 로직 구현
  return {
    layouts: [],
    totalCount: 0,
  };
}

export default function MyLayoutsPage({ Component, ...props }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">내 레이아웃 관리</h1>
            <p className="text-gray-600">내가 만든 햄스터 케이지 레이아웃을 관리하세요.</p>
          </div>
          <a
            href="/layouts/new"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            새 레이아웃 만들기
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* TODO: 레이아웃 카드 컴포넌트 구현 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold">샘플 레이아웃</h3>
            <div className="flex space-x-2">
              <button className="text-blue-500 hover:text-blue-700 text-sm">
                수정
              </button>
              <button className="text-red-500 hover:text-red-700 text-sm">
                삭제
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-4">햄스터를 위한 완벽한 케이지 레이아웃입니다.</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2024.01.15 생성</span>
            <div className="flex space-x-2">
              <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200">
                공개
              </button>
              <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                보기
              </button>
            </div>
          </div>
        </div>

        {/* 빈 상태 */}
        <div className="bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-gray-300 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">아직 레이아웃이 없습니다</h3>
          <p className="text-gray-500 mb-4">첫 번째 햄스터 케이지 레이아웃을 만들어보세요!</p>
          <a
            href="/layouts/new"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            레이아웃 만들기
          </a>
        </div>
      </div>
    </div>
  );
}
