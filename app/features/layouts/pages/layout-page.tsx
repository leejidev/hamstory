import type { Route } from "./+types/layout-page";

export function meta({ params }: Route.MetaArgs) {
  return [
    { title: `레이아웃 상세 - 햄스터 케이지 시뮬레이터` },
    { name: "description", content: "햄스터 케이지 레이아웃을 자세히 살펴보세요." },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { layoutId } = params;
  
  // TODO: 레이아웃 상세 정보를 가져오는 로직 구현
  return {
    layout: {
      id: layoutId,
      title: "샘플 레이아웃",
      description: "햄스터를 위한 완벽한 케이지 레이아웃입니다.",
      author: "사용자명",
      createdAt: "2024-01-15",
      isPublic: true,
      items: [], // 배치된 아이템들
      cageSize: { width: 60, height: 40 },
    },
  };
}

export default function LayoutPage({ Component, ...props }: Route.ComponentProps) {
  const { layout } = props.loaderData;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{layout.title}</h1>
            <p className="text-gray-600 mb-4">{layout.description}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>by {layout.author}</span>
              <span>•</span>
              <span>{layout.createdAt}</span>
              <span>•</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                공개
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
              공유
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              복사하기
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 케이지 시뮬레이터 */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">케이지 레이아웃</h2>
            <div className="bg-gray-100 rounded-lg p-8 text-center min-h-[400px]">
              {/* TODO: 실제 케이지 시뮬레이터 컴포넌트 구현 */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <p className="text-gray-500 mb-4">케이지 시뮬레이터</p>
                <p className="text-sm text-gray-400">
                  크기: {layout.cageSize.width}cm × {layout.cageSize.height}cm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 사이드바 정보 */}
        <div className="space-y-6">
          {/* 케이지 정보 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">케이지 정보</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">크기</span>
                <span className="font-medium">{layout.cageSize.width} × {layout.cageSize.height}cm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">아이템 수</span>
                <span className="font-medium">{layout.items.length}개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">상태</span>
                <span className="font-medium text-green-600">공개</span>
              </div>
            </div>
          </div>

          {/* 사용된 아이템 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">사용된 아이템</h3>
            <div className="space-y-3">
              {/* TODO: 아이템 목록 구현 */}
              <div className="text-center text-gray-500 py-8">
                <p>아직 배치된 아이템이 없습니다.</p>
              </div>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">액션</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                내 레이아웃으로 복사
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
                공유하기
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
                즐겨찾기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
