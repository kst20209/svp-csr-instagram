// ============================================
// 이 파일을 편집하여 프로필 데이터를 관리하세요!
// ============================================

// 프로필 정보 — 김지우 (jiwo0_o)
const PROFILE = {
  username: "jiwo0_o",
  displayName: "지우 🖤",
  profileImage: "assets/profile.png",
  bio: '2008.05.12 / 🎧🖤\n"아무도 모르게 사라지고 싶은 밤"',
  postsCount: 5,
  followersCount: 127,
  followingCount: 0,
  isFollowing: false,
};

// 게시물 목록 (최신순 — 프로필 그리드 좌상단이 최신)
const POSTS = [
  // ① 가장 최신 — "갑작스러운 평온함"
  {
    id: 1,
    username: "jiwo0_o",
    userImage: PROFILE.profileImage,
    images: [
      "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=1080&h=1350&fit=crop&q=80",
    ],
    caption: "이제 다 괜찮아\n\n진짜 오랜만에 마음이 편하다\n그동안 고마웠어 다들\n\n.",
    likes: 12,
    likedBy: "soo_a.02",
    likedByImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80",
    time: "오늘",
    isMultiple: false,
    isVideo: false,
    comments: [],
  },
  // ② — "아끼던 물건 정리 + 죽음의 간접적 언급"
  {
    id: 2,
    username: "jiwo0_o",
    userImage: PROFILE.profileImage,
    images: [
      "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=1080&h=1350&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1080&h=1350&fit=crop&q=80",
    ],
    caption: "이거 가지고 싶은 사람 있으면 DM 줘\n포카도 키링도 다 줄게 나한텐 이제 필요 없을 것 같아\n\n요즘 이 노래만 반복 재생하는 중\n이대로 그냥 깨지 않는 잠이 오면 좋겠다\n\n.",
    likes: 8,
    likedBy: "eun.seo_03",
    likedByImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=80",
    time: "5일 전",
    isMultiple: true,
    isVideo: false,
    comments: [
      { username: "soo_a.02", profileImage: "assets/commenter-sooa.png", text: "지우야 무슨 일 있어..?" },
    ],
  },
  // ③ — "사회적 고립 + 짐이 된다는 느낌"
  {
    id: 3,
    username: "jiwo0_o",
    userImage: PROFILE.profileImage,
    images: [
      "https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?w=1080&h=1350&fit=crop&q=80",
    ],
    caption: "다들 너무 바쁜 것 같아서 나만 연락 안 했는데\n아무도 먼저 연락 안 하네 ㅎ\n\n단톡방 다 나왔다\n나 없는 게 다들 편할 듯\n\n.",
    likes: 5,
    likedBy: "eun.seo_03",
    likedByImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=80",
    time: "3주 전",
    isMultiple: false,
    isVideo: false,
    comments: [],
  },
  // ④ — "수면 장애 & 에너지 고갈"
  {
    id: 4,
    username: "jiwo0_o",
    userImage: PROFILE.profileImage,
    images: [
      "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1080&h=1350&fit=crop&q=80",
    ],
    caption: "3일째 한 숨도 못 잤다\n머리가 안 돌아가\n밥도 안 먹었는데 배고프지도 않음\n\n.",
    likes: 7,
    likedBy: "soo_a.02",
    likedByImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80",
    time: "2개월 전",
    isMultiple: false,
    isVideo: false,
    comments: [
      { username: "eun.seo_03", profileImage: "assets/commenter-eunseo.png", text: "지우야 괜찮아? ㅠㅠ 밥 좀 먹어" },
    ],
  },
  // ⑤ 가장 오래된 — "평범한 일상"
  {
    id: 5,
    username: "jiwo0_o",
    userImage: PROFILE.profileImage,
    images: [
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1080&h=1350&fit=crop&q=80",
    ],
    caption: "시험 끝나고 드디어 숨 쉬는 중 🫧\n카페 신메뉴 존맛 ㅋㅋㅋ 수아 은서 사랑해 💗\n\n#시험끝 #카페스타그램 #고2일상 #드디어자유",
    likes: 43,
    likedBy: "soo_a.02",
    likedByImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=80",
    time: "3개월 전",
    isMultiple: false,
    isVideo: false,
    comments: [
      { username: "soo_a.02", profileImage: "assets/commenter-sooa.png", text: "우리 지우 최고 💗💗" },
      { username: "eun.seo_03", profileImage: "assets/commenter-eunseo.png", text: "ㅋㅋㅋ 신메뉴 진짜 맛있었어!!" },
      { username: "minjun_04", profileImage: "assets/commenter-minjun.png", text: "나도 끼워줘 ㅠㅠ" },
    ],
  },
];
