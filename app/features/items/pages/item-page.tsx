import type { Route } from "./+types/item-page";

export function meta({ params }: Route.MetaArgs) {
  const { itemId } = params;
  return [
    { title: `아이템 상세 - 햄스터 케이지 시뮬레이터` },
    { name: "description", content: "케이지 아이템의 상세 정보를 확인하세요." },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { itemId } = params;
  
  // TODO: 아이템 상세 정보를 가져오는 로직 구현
  return {
    item: {
      id: itemId,
      name: "햄스터 휠",
      description: "햄스터가 운동할 수 있는 휠입니다.",
      category: "운동용품",
      size: { width: 20, height: 20, depth: 5 },
      image: null,
      specifications: {
        material: "플라스틱",
        color: "다양한 색상",
        weight: "200g",
      },
    },
  };
}

export default function ItemPage({ ...props }: Route.ComponentProps) {
  const { item } = props.loaderData;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 아이템 이미지 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-500">
              <svg className="mx-auto h-24 w-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>아이템 이미지</p>
            </div>
          </div>
        </div>

        {/* 아이템 정보 */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
            <p className="text-gray-600 mb-4">{item.description}</p>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                {item.category}
              </span>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">크기 정보</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{item.size.width}cm</div>
                  <div className="text-sm text-gray-600">너비</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{item.size.height}cm</div>
                  <div className="text-sm text-gray-600">높이</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{item.size.depth}cm</div>
                  <div className="text-sm text-gray-600">깊이</div>
                </div>
              </div>
            </div>
          </div>

          {/* 상세 사양 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">상세 사양</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">재질</span>
                <span className="font-medium">{item.specifications.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">색상</span>
                <span className="font-medium">{item.specifications.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">무게</span>
                <span className="font-medium">{item.specifications.weight}</span>
              </div>
            </div>
          </div>

          {/* 액션 버튼 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">액션</h3>
            <div className="space-y-3">
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                레이아웃에 추가
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
                즐겨찾기
              </button>
              <button className="w-full bg-gray-100 text-gray-700 py-2 rounded hover:bg-gray-200">
                공유하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
