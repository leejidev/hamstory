import type { Route } from "./+types/new-layout-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "새 레이아웃 생성 - 햄스터 케이지 시뮬레이터" },
    { name: "description", content: "햄스터 케이지에 맞는 새로운 레이아웃을 만들어보세요." },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  // 새 레이아웃 생성 페이지는 기본 데이터만 필요
  return {
    mode: 'create' as const,
    layout: null,
  };
}

export async function action({ request }: Route.ActionArgs) {
  // TODO: 새 레이아웃 생성 로직 구현
  const formData = await request.formData();
  
  // 레이아웃 생성
  return { success: true, message: "레이아웃이 생성되었습니다." };
}

export default function NewLayoutPage({ ...props }: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">새 레이아웃 생성</h1>
        <p className="text-gray-600">
          햄스터 케이지에 맞는 새로운 레이아웃을 만들어보세요.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form method="post" className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              레이아웃 제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="레이아웃 제목을 입력하세요"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              설명
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="레이아웃에 대한 설명을 입력하세요"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              케이지 크기
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="width" className="block text-xs text-gray-600 mb-1">너비 (cm)</label>
                <input
                  type="number"
                  id="width"
                  name="width"
                  min="30"
                  max="200"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="60"
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-xs text-gray-600 mb-1">높이 (cm)</label>
                <input
                  type="number"
                  id="height"
                  name="height"
                  min="20"
                  max="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="40"
                />
              </div>
            </div>
          </div>

          {/* 케이지 시뮬레이터 */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <p className="text-gray-500 mb-4">케이지 시뮬레이터 영역</p>
            <p className="text-sm text-gray-400">여기에 드래그 앤 드롭으로 아이템을 배치할 수 있는 시뮬레이터가 들어갑니다.</p>
          </div>

          <div className="flex justify-end space-x-4">
            <a
              href="/layouts/mine"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              취소
            </a>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              생성하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
