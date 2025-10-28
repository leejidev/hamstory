import type { Route } from "./+types/explore-layouts-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "레이아웃 탐색 - 햄스터 케이지 시뮬레이터" },
    { name: "description", content: "다른 사용자들이 공유한 햄스터 케이지 레이아웃을 탐색해보세요." },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  // TODO: 공유된 레이아웃 목록을 가져오는 로직 구현
  return {
    layouts: [],
    totalCount: 0,
  };
}

export default function ExploreLayoutsPage({ Component, ...props }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">레이아웃 탐색</h1>
        <p className="text-gray-600">다른 사용자들이 공유한 햄스터 케이지 레이아웃을 탐색해보세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* TODO: 레이아웃 카드 컴포넌트 구현 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">샘플 레이아웃</h3>
          <p className="text-gray-600 mb-4">햄스터를 위한 완벽한 케이지 레이아웃입니다.</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">by 사용자명</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
