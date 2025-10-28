import type { Route } from "./+types/user-layouts-page";

export function meta({ params }: Route.MetaArgs) {
  const { username } = params;
  return [
    { title: `${username}의 레이아웃 - 햄스터 케이지 시뮬레이터` },
    { name: "description", content: `${username}님이 공유한 햄스터 케이지 레이아웃을 확인해보세요.` },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { username } = params;
  
  // TODO: 특정 사용자의 레이아웃 목록을 가져오는 로직 구현
  return {
    username,
    layouts: [],
    totalCount: 0,
    userInfo: {
      username,
      displayName: username,
      avatar: null,
      layoutCount: 0,
    },
  };
}

export default function UserLayoutsPage({ Component, ...props }: Route.ComponentProps) {
  const { username, layouts, userInfo } = props.loaderData;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-600">
              {userInfo.displayName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{userInfo.displayName}의 레이아웃</h1>
            <p className="text-gray-600">@{username}</p>
          </div>
        </div>
        <p className="text-gray-600">
          {userInfo.displayName}님이 공유한 햄스터 케이지 레이아웃 {layouts.length}개를 확인해보세요.
        </p>
      </div>

      {layouts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* TODO: 레이아웃 카드 컴포넌트 구현 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-2">샘플 레이아웃</h3>
            <p className="text-gray-600 mb-4">햄스터를 위한 완벽한 케이지 레이아웃입니다.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">2024.01.15</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                보기
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            아직 공유된 레이아웃이 없습니다
          </h3>
          <p className="text-gray-500">
            {userInfo.displayName}님이 아직 공유한 레이아웃이 없습니다.
          </p>
        </div>
      )}

      {/* 사용자 정보 카드 */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">사용자 정보</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{userInfo.layoutCount}</div>
            <div className="text-sm text-gray-600">레이아웃</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">0</div>
            <div className="text-sm text-gray-600">팔로워</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">0</div>
            <div className="text-sm text-gray-600">팔로잉</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">0</div>
            <div className="text-sm text-gray-600">좋아요</div>
          </div>
        </div>
      </div>
    </div>
  );
}
