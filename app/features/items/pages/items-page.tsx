import type { Route } from "./+types/items-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "케이지 아이템 - 햄스터 케이지 시뮬레이터" },
    { name: "description", content: "햄스터 케이지에 사용할 수 있는 다양한 아이템들을 확인하고 관리하세요." },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  // TODO: 아이템 목록을 가져오는 로직 구현
  return {
    items: [],
    categories: [],
    totalCount: 0,
  };
}

export default function ItemsPage({ ...props }: Route.ComponentProps) {
  const { items, categories, totalCount } = props.loaderData;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">케이지 아이템</h1>
        <p className="text-gray-600">햄스터 케이지에 사용할 수 있는 다양한 아이템들을 확인하세요.</p>
      </div>

      {/* 카테고리 필터 */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            전체
          </button>
          {/* TODO: 카테고리 버튼들 동적 생성 */}
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
            장난감
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
            집
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
            휠
          </button>
        </div>
      </div>

      {/* 아이템 그리드 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* TODO: 실제 아이템 카드 컴포넌트로 교체 */}
        <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-3"></div>
          <h3 className="font-semibold text-sm mb-1">햄스터 휠</h3>
          <p className="text-xs text-gray-500 mb-2">20cm</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
            상세보기
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-3"></div>
          <h3 className="font-semibold text-sm mb-1">햄스터 집</h3>
          <p className="text-xs text-gray-500 mb-2">15cm</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
            상세보기
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-3"></div>
          <h3 className="font-semibold text-sm mb-1">먹이 그릇</h3>
          <p className="text-xs text-gray-500 mb-2">8cm</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
            상세보기
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow">
          <div className="w-16 h-16 bg-gray-300 rounded mx-auto mb-3"></div>
          <h3 className="font-semibold text-sm mb-1">물병</h3>
          <p className="text-xs text-gray-500 mb-2">12cm</p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600">
            상세보기
          </button>
        </div>
      </div>

      {/* 빈 상태 */}
      {items.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">아이템이 없습니다</h3>
          <p className="text-gray-500">아직 등록된 아이템이 없습니다.</p>
        </div>
      )}
    </div>
  );
}
