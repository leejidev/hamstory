-- seed 데이터를 데이터베이스에 삽입하기 전에 데이터베이스를 초기화
TRUNCATE TABLE
  public.notifications,
  public.messages,
  public.message_room_members,
  public.message_rooms,
  public.follows,
  public.layout_items,
  public.shared_layouts,
  public.layouts,
  public.items,
  public.profiles
RESTART IDENTITY CASCADE;

---- insert queries --------------------------------------------------------------------------------
INSERT INTO public.profiles (
  profile_id,
  avatar,
  name,
  username,
  headline,
  bio,
  role,
  stats,
  views,
  created_at,
  updated_at
)
VALUES (
  '8f9392d9-aad0-4060-9089-53eb793f1e76',
  'https://example.com/images/profile-avatar.png',
  '햄스터 케어 매니저',
  'hamstory_manager',
  '안락한 햄스터 하우징 전문가',
  '햄스터 환경 최적화를 연구하고 공유합니다.',
  'user',
  '{"followers": 120, "following": 80}'::jsonb,
  '{"weekly": 45, "monthly": 320}'::jsonb,
  now(),
  now()
);

INSERT INTO public.items (
  item_id,
  name,
  description,
  category,
  width_mm,
  depth_mm,
  height_mm,
  weight_g,
  image_url,
  purchase_url,
  purchase_price,
  is_active,
  created_at,
  updated_at
) OVERRIDING SYSTEM VALUE
VALUES
  (
    1,
    '모듈형 케이지',
    '확장 가능한 모듈형 케이지 시스템',
    'cage',
    1200,
    600,
    500,
    8200,
    'https://example.com/images/item-cage.png',
    'https://shop.example.com/items/modular-cage',
    '189.90',
    true,
    now(),
    now()
  ),
  (
    2,
    '방음 하우스',
    '조용하고 어두운 은신처',
    'hideout',
    220,
    180,
    160,
    540,
    'https://example.com/images/item-hideout.png',
    'https://shop.example.com/items/silent-hideout',
    '24.50',
    true,
    now(),
    now()
  ),
  (
    3,
    '탄소 휠',
    '저소음 탄소 섬유 러닝 휠',
    'wheel',
    300,
    150,
    340,
    780,
    'https://example.com/images/item-wheel.png',
    'https://shop.example.com/items/carbon-wheel',
    '54.90',
    true,
    now(),
    now()
  ),
  (
    4,
    '비옥한 베딩',
    '흡수력이 뛰어난 천연 베딩',
    'bedding',
    400,
    320,
    150,
    2150,
    'https://example.com/images/item-bedding.png',
    'https://shop.example.com/items/premium-bedding',
    '14.20',
    true,
    now(),
    now()
  ),
  (
    5,
    '피더 스테이션',
    '사료와 물을 함께 제공하는 통합 피더',
    'feeder',
    260,
    220,
    200,
    940,
    'https://example.com/images/item-feeder.png',
    'https://shop.example.com/items/feeder-station',
    '32.10',
    true,
    now(),
    now()
  );

INSERT INTO public.layouts (
  layout_id,
  profile_id,
  name,
  layout_width_mm,
  layout_depth_mm,
  layout_height_mm,
  is_shared,
  share_slug,
  created_at,
  updated_at
) OVERRIDING SYSTEM VALUE
VALUES
  (
    1,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '아침 활동 구역',
    1500,
    800,
    600,
    true,
    'morning-activity-zone',
    now(),
    now()
  ),
  (
    2,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '포근한 휴식 공간',
    1400,
    750,
    550,
    true,
    'cozy-rest-lounge',
    now(),
    now()
  ),
  (
    3,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '탐험 터널 존',
    1600,
    900,
    620,
    false,
    NULL,
    now(),
    now()
  ),
  (
    4,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '야간 휴식 구획',
    1300,
    700,
    520,
    false,
    NULL,
    now(),
    now()
  ),
  (
    5,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '활동-휴식 하이브리드',
    1550,
    820,
    610,
    true,
    'hybrid-active-rest',
    now(),
    now()
  );

INSERT INTO public.shared_layouts (
  shared_layout_id,
  layout_id,
  profile_id,
  description,
  likes,
  comments_enabled,
  created_at,
  updated_at
) OVERRIDING SYSTEM VALUE
VALUES
  (
    1,
    1,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '활발한 아침을 위한 최적 구성',
    128,
    true,
    now(),
    now()
  ),
  (
    2,
    2,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '휴식과 스트레스 완화를 위한 레이아웃',
    212,
    true,
    now(),
    now()
  ),
  (
    3,
    3,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '탐험 본능을 자극하는 미로형 구성',
    87,
    false,
    now(),
    now()
  ),
  (
    4,
    4,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '야간 휴식에 최적화된 조명 및 동선',
    64,
    true,
    now(),
    now()
  ),
  (
    5,
    5,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '활동과 휴식을 균형 있게 배치',
    175,
    true,
    now(),
    now()
  );

INSERT INTO public.layout_items (
  layout_item_id,
  layout_id,
  item_id,
  x_position_mm,
  y_position_mm,
  z_position_mm,
  rotation_degree,
  z_index,
  instance_label,
  created_at,
  updated_at
) OVERRIDING SYSTEM VALUE
VALUES
  (
    1,
    1,
    1,
    120,
    80,
    0,
    0,
    1,
    '기본 케이지',
    now(),
    now()
  ),
  (
    2,
    1,
    3,
    420,
    140,
    0,
    45,
    2,
    '러닝 휠',
    now(),
    now()
  ),
  (
    3,
    2,
    2,
    200,
    260,
    0,
    0,
    1,
    '은신처',
    now(),
    now()
  ),
  (
    4,
    4,
    4,
    360,
    180,
    0,
    90,
    3,
    '프리미엄 베딩',
    now(),
    now()
  ),
  (
    5,
    5,
    5,
    640,
    220,
    0,
    0,
    2,
    '통합 피더',
    now(),
    now()
  );


-- 아직 실행하지 않음 --------------------------------------------------------------
INSERT INTO public.message_rooms (
  message_room_id,
  created_at
) OVERRIDING SYSTEM VALUE
VALUES
  (1, now()),
  (2, now()),
  (3, now()),
  (4, now()),
  (5, now());

INSERT INTO public.message_room_members (
  message_room_id,
  profile_id,
  created_at
) VALUES (
  1,
  '8f9392d9-aad0-4060-9089-53eb793f1e76',
  now()
);

INSERT INTO public.messages (
  message_id,
  message_room_id,
  sender_id,
  content,
  created_at
) OVERRIDING SYSTEM VALUE
VALUES
  (
    1,
    1,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '오늘 아침 레이아웃 점검 완료했습니다.',
    now()
  ),
  (
    2,
    1,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '케이지 환기구 위치 조정이 필요해요.',
    now() - interval '2 hours'
  ),
  (
    3,
    2,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '다음 주에 새로운 베딩을 테스트할 예정입니다.',
    now() - interval '1 day'
  ),
  (
    4,
    3,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '탐험 터널에 센서를 추가해보세요.',
    now() - interval '2 days'
  ),
  (
    5,
    5,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '하이브리드 동선이 좋아 보입니다!',
    now() - interval '3 days'
  );

INSERT INTO public.notifications (
  notification_id,
  source_id,
  layout_id,
  target_id,
  type,
  created_at
) OVERRIDING SYSTEM VALUE
VALUES
  (
    1,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    1,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    'review',
    now()
  ),
  (
    2,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    2,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    'follow',
    now() - interval '6 hours'
  ),
  (
    3,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    3,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    'reply',
    now() - interval '12 hours'
  ),
  (
    4,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    4,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    'mention',
    now() - interval '1 day'
  ),
  (
    5,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    5,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    'review',
    now() - interval '2 days'
  );

  INSERT INTO public.follows (
  follower_id,
  following_id,
  created_at
) VALUES
  (
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    now()
  ),
  (
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    NULL,
    now() - interval '1 day'
  ),
  (
    NULL,
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    now() - interval '2 days'
  ),
  (
    NULL,
    NULL,
    now() - interval '3 days'
  ),
  (
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    '8f9392d9-aad0-4060-9089-53eb793f1e76',
    now() - interval '4 days'
  );