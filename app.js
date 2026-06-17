const STORE_KEY = "dollshelf-mvp-state-v1";
const HERO_IMAGE = "./assets/collector-shelf.png";
const SUPABASE_URL = "https://aqpmkmlrukvwmqmctqxw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_v5BirRwb1zU_GPuKriW7gQ_8UwzEWZ-";

const INTERESTS = [
  "Barbie",
  "Monster High",
  "BJD",
  "Blythe",
  "Pullip",
  "Rainbow High",
  "vintage",
  "handmade",
  "custom",
  "restoration",
];

const AESTHETICS = [
  "gothic",
  "pastel",
  "retro",
  "kawaii",
  "fantasy",
  "realistic",
  "cottage",
  "minimal",
];

const DEFAULT_STATE = {
  currentUserId: "u-me",
  users: [
    {
      id: "u-me",
      nickname: "NikaShelf",
      name: "Ніка",
      country: "Україна",
      city: "Київ",
      bio: "Збираю fashion dolls, люблю реставрації та маленькі історії з полиць.",
      collectingSince: "2017",
      lookingFor: "BJD wig 1/4, vintage Barbie accessories",
      interests: ["Barbie", "BJD", "restoration"],
      aesthetics: ["retro", "realistic", "pastel"],
      instagram: "https://instagram.com/nikashelf",
      tiktok: "",
      etsy: "",
      avatar: "",
      cover: "",
      following: ["u-lina", "u-marta"],
      followers: ["u-lina", "u-orion"],
      blocked: false,
      isAdmin: true,
    },
    {
      id: "u-lina",
      nickname: "PastelPullip",
      name: "Ліна",
      country: "Польща",
      city: "Краків",
      bio: "Pullip, Blythe, мініатюрний одяг і пастельні shelf stories.",
      collectingSince: "2020",
      lookingFor: "крихітні окуляри та handmade кардигани",
      interests: ["Pullip", "Blythe", "handmade"],
      aesthetics: ["pastel", "kawaii"],
      instagram: "https://instagram.com/pastelpullip",
      tiktok: "",
      etsy: "https://etsy.com/shop/pastelpullip",
      avatar: "",
      cover: "",
      following: ["u-me"],
      followers: ["u-me", "u-marta"],
      blocked: false,
      isAdmin: false,
    },
    {
      id: "u-marta",
      nickname: "GothicGhoulShelf",
      name: "Марта",
      country: "Німеччина",
      city: "Берлін",
      bio: "Monster High, repaint, темні образи без зайвої драми.",
      collectingSince: "2013",
      lookingFor: "підставки для Monster High першої хвилі",
      interests: ["Monster High", "custom", "restoration"],
      aesthetics: ["gothic", "fantasy"],
      instagram: "",
      tiktok: "https://tiktok.com/@gothicghoulshelf",
      etsy: "",
      avatar: "",
      cover: "",
      following: ["u-lina"],
      followers: ["u-me"],
      blocked: false,
      isAdmin: false,
    },
    {
      id: "u-orion",
      nickname: "BJDAtelier",
      name: "Орест",
      country: "Україна",
      city: "Львів",
      bio: "BJD кастоми, face-up, ремонт шарнірів і багато терпіння.",
      collectingSince: "2019",
      lookingFor: "очі 12 мм у теплих сірих тонах",
      interests: ["BJD", "custom", "handmade"],
      aesthetics: ["fantasy", "realistic", "minimal"],
      instagram: "https://instagram.com/bjdatelier",
      tiktok: "",
      etsy: "https://etsy.com/shop/bjdatelier",
      avatar: "",
      cover: "",
      following: ["u-me"],
      followers: [],
      blocked: false,
      isAdmin: false,
    },
  ],
  posts: [
    {
      id: "p-1",
      userId: "u-lina",
      text: "Моя нова поличка нарешті виглядає як маленький альбом. Пастель, тканина, три Pullip і одна дуже серйозна чашка чаю.",
      tags: ["Pullip", "pastel", "shelf"],
      images: [HERO_IMAGE],
      createdAt: "2026-06-03T14:22:00.000Z",
      likes: ["u-me", "u-marta"],
      comments: [
        {
          id: "c-1",
          userId: "u-me",
          text: "Це дуже затишно. Особливо тканини на фоні.",
          createdAt: "2026-06-03T15:12:00.000Z",
        },
      ],
      reports: [],
    },
    {
      id: "p-2",
      userId: "u-marta",
      text: "Реставрація до і після: повернула шарнірам рух, а макіяж зробила м'якшим. Тепер вона знову схожа на себе.",
      tags: ["Monster High", "restoration", "before after"],
      images: [HERO_IMAGE],
      createdAt: "2026-06-02T10:12:00.000Z",
      likes: ["u-lina"],
      comments: [],
      reports: [],
    },
    {
      id: "p-3",
      userId: "u-orion",
      text: "Шукаю поради: які очі краще підійдуть для fantasy BJD з холодним face-up?",
      tags: ["BJD", "fantasy", "advice"],
      images: [HERO_IMAGE],
      createdAt: "2026-06-01T18:42:00.000Z",
      likes: ["u-me"],
      comments: [
        {
          id: "c-2",
          userId: "u-lina",
          text: "Я б спробувала сіро-блакитні, але не надто прозорі.",
          createdAt: "2026-06-01T19:05:00.000Z",
        },
      ],
      reports: [],
    },
  ],
  discussions: [
    {
      id: "d-1",
      userId: "u-marta",
      title: "Новий реліз Monster High: хто вже дивився фото?",
      text: "Мені подобається силует і взуття, але обличчя на промо здається трохи пласким. Цікаво, це світло таке чи реально інший друк?",
      tags: ["Monster High", "release", "news"],
      createdAt: "2026-06-06T09:30:00.000Z",
      likes: ["u-me", "u-lina"],
      replies: [
        {
          id: "r-1",
          userId: "u-me",
          text: "Я теж помітила друк. Чекаю живі фото від перших покупців, промо часто обманює.",
          createdAt: "2026-06-06T10:12:00.000Z",
        },
        {
          id: "r-2",
          userId: "u-lina",
          text: "Одяг виглядає краще, ніж я очікувала. Якщо волосся буде нормальне, можливо візьму.",
          createdAt: "2026-06-06T11:04:00.000Z",
        },
      ],
    },
    {
      id: "d-2",
      userId: "u-orion",
      title: "BJD очі 12 мм: скло чи уретан для холодного face-up?",
      text: "Потрібна порада для персонажа з сірим мейком. Скло дає класну глибину, але уретан іноді виглядає живіше на фото.",
      tags: ["BJD", "custom", "advice"],
      createdAt: "2026-06-05T16:20:00.000Z",
      likes: ["u-me"],
      replies: [
        {
          id: "r-3",
          userId: "u-lina",
          text: "Для холодного образу я б брала скло, але не надто прозоре, щоб не було порожнього погляду.",
          createdAt: "2026-06-05T17:02:00.000Z",
        },
      ],
    },
    {
      id: "d-3",
      userId: "u-lina",
      title: "Де зараз зручніше відстежувати маленькі релізи Pullip?",
      text: "Офіційні анонси бачу не завжди, а в інстаграмі все губиться. Може, у когось є список магазинів або акаунтів, які постять швидко?",
      tags: ["Pullip", "shops", "release"],
      createdAt: "2026-06-04T13:05:00.000Z",
      likes: ["u-marta"],
      replies: [],
    },
  ],
};

let state = loadState();
let createCameraStream = null;
let createSelectedMediaItems = [];
let createActiveMediaIndex = 0;
let createCropDrag = null;
const DEFAULT_CROP = { x: 50, y: 50, scale: 1 };
let lastMobileNavIndex = null;
let didInitialRender = false;
let remoteDiscussionsLoaded = false;
let remoteDiscussionsError = "";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const saved = localStorage.getItem(STORE_KEY);
  if (!saved) return clone(DEFAULT_STATE);
  try {
    const parsed = JSON.parse(saved);
    return {
      ...clone(DEFAULT_STATE),
      ...parsed,
      users: parsed.users || clone(DEFAULT_STATE.users),
      posts: parsed.posts || clone(DEFAULT_STATE.posts),
      discussions: parsed.discussions || clone(DEFAULT_STATE.discussions),
    };
  } catch {
    return clone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function resetState() {
  state = clone(DEFAULT_STATE);
  saveState();
  routeTo("#/feed");
}

function currentUser() {
  return state.users.find((user) => user.id === state.currentUserId) || null;
}

function visibleUsers() {
  return state.users.filter((user) => !user.blocked);
}

function findUser(id) {
  return state.users.find((user) => user.id === id);
}

function findPost(id) {
  return state.posts.find((post) => post.id === id);
}

function findDiscussion(id) {
  return state.discussions.find((discussion) => discussion.id === id);
}

function supabaseHeaders(extra = {}) {
  return {
    apikey: SUPABASE_PUBLISHABLE_KEY,
    Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
    "Content-Type": "application/json",
    ...extra,
  };
}

async function supabaseRequest(path, options = {}) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...options,
    headers: supabaseHeaders(options.headers),
  });
  if (!response.ok) {
    let message = `${response.status} ${response.statusText}`;
    try {
      const error = await response.json();
      message = error.message || error.error || message;
    } catch {}
    throw new Error(message);
  }
  if (response.status === 204) return null;
  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

function authorSnapshot(user) {
  return {
    authorNickname: user?.nickname || "Користувач",
    authorAvatar: user?.avatar || "",
  };
}

function discussionAuthor(discussion) {
  return (
    findUser(discussion.userId) || {
      nickname: discussion.authorNickname || "Користувач",
      name: discussion.authorNickname || "Користувач",
      avatar: discussion.authorAvatar || "",
    }
  );
}

function discussionReplyAuthor(reply) {
  return (
    findUser(reply.userId) || {
      nickname: reply.authorNickname || "Користувач",
      name: reply.authorNickname || "Користувач",
      avatar: reply.authorAvatar || "",
    }
  );
}

function discussionToRemoteRow(discussion) {
  return {
    id: discussion.id,
    user_id: discussion.userId,
    author_nickname: discussion.authorNickname || discussionAuthor(discussion).nickname,
    author_avatar: discussion.authorAvatar || "",
    title: discussion.title,
    body: discussion.text,
    tags: discussion.tags || [],
    likes: discussion.likes || [],
    created_at: discussion.createdAt,
  };
}

function replyToRemoteRow(reply, discussionId) {
  return {
    id: reply.id,
    discussion_id: discussionId,
    user_id: reply.userId,
    author_nickname: reply.authorNickname || discussionReplyAuthor(reply).nickname,
    author_avatar: reply.authorAvatar || "",
    body: reply.text,
    created_at: reply.createdAt,
  };
}

function discussionFromRemoteRow(row) {
  const replies = row.discussion_replies || [];
  return {
    id: row.id,
    userId: row.user_id,
    authorNickname: row.author_nickname || "Користувач",
    authorAvatar: row.author_avatar || "",
    title: row.title,
    text: row.body,
    tags: row.tags || [],
    likes: row.likes || [],
    createdAt: row.created_at,
    replies: replies
      .map((reply) => ({
        id: reply.id,
        userId: reply.user_id,
        authorNickname: reply.author_nickname || "Користувач",
        authorAvatar: reply.author_avatar || "",
        text: reply.body,
        createdAt: reply.created_at,
      }))
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)),
  };
}

async function loadRemoteDiscussions() {
  try {
    const rows = await supabaseRequest("discussions?select=*,discussion_replies(*)&order=created_at.desc");
    if (Array.isArray(rows)) {
      state.discussions = rows.map(discussionFromRemoteRow);
      saveState();
      remoteDiscussionsLoaded = true;
      remoteDiscussionsError = "";
    }
  } catch (error) {
    remoteDiscussionsLoaded = false;
    remoteDiscussionsError = error.message || "Не вдалося підключити онлайн-памʼять.";
    console.warn("Supabase discussions are not ready yet:", error);
  }
}

async function saveRemoteDiscussion(discussion) {
  return supabaseRequest("discussions?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify([discussionToRemoteRow(discussion)]),
  });
}

async function saveRemoteReply(reply, discussionId) {
  return supabaseRequest("discussion_replies?on_conflict=id", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
    body: JSON.stringify([replyToRemoteRow(reply, discussionId)]),
  });
}

async function saveRemoteDiscussionLikes(discussion) {
  return supabaseRequest(`discussions?id=eq.${encodeURIComponent(discussion.id)}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ likes: discussion.likes || [] }),
  });
}

function initials(user) {
  const source = user?.name || user?.nickname || "?";
  return source.trim().slice(0, 2).toUpperCase();
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tagList(tags = [], tone = "") {
  return `<div class="tags">${tags
    .map((tag) => `<span class="tag ${tone}">${escapeHtml(tag)}</span>`)
    .join("")}</div>`;
}

function isVideoMedia(src = "") {
  return String(src).startsWith("data:video/");
}

function mediaCropStyle(crop = DEFAULT_CROP) {
  const x = Number(crop.x ?? DEFAULT_CROP.x);
  const y = Number(crop.y ?? DEFAULT_CROP.y);
  const scale = Number(crop.scale ?? DEFAULT_CROP.scale);
  return `object-position: ${x}% ${y}%; transform: scale(${scale}); transform-origin: ${x}% ${y}%;`;
}

function renderMedia(src, className, alt = "Медіа посту", crop = DEFAULT_CROP) {
  const safeSrc = escapeHtml(src || HERO_IMAGE);
  const style = mediaCropStyle(crop);
  if (isVideoMedia(safeSrc)) {
    return `<video class="${className}" src="${safeSrc}" style="${style}" muted playsinline controls></video>`;
  }
  return `<img class="${className}" src="${safeSrc}" alt="${escapeHtml(alt)}" style="${style}" />`;
}

function renderMediaThumb(src, index) {
  const safeSrc = escapeHtml(src);
  if (isVideoMedia(safeSrc)) {
    return `<span class="media-thumb-wrap media-thumb-video"><span>Відео</span></span>`;
  }
  return `<img src="${safeSrc}" alt="Вибране фото ${index + 1}" />`;
}

function setMediaPreview(container, src, className, alt = "Медіа посту", crop = DEFAULT_CROP) {
  if (!container) return;
  container.innerHTML = "";
  if (!src) {
    container.innerHTML = `<div class="details-empty-preview">Оберіть фото або відео</div>`;
    return;
  }
  const media = document.createElement(isVideoMedia(src) ? "video" : "img");
  media.className = className;
  media.src = src;
  media.setAttribute("style", mediaCropStyle(crop));
  if (media.tagName === "VIDEO") {
    media.muted = true;
    media.playsInline = true;
    media.controls = true;
  } else {
    media.alt = alt;
  }
  container.appendChild(media);
}

function avatar(user, size = "") {
  if (user?.avatar) {
    return `<span class="avatar ${size}"><img src="${user.avatar}" alt="${escapeHtml(user.nickname)}" /></span>`;
  }
  return `<span class="avatar ${size}">${escapeHtml(initials(user))}</span>`;
}

function formatDate(value) {
  return new Intl.DateTimeFormat("uk-UA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function pluralPeople(count) {
  if (count === 1) return "людина";
  if (count > 1 && count < 5) return "людини";
  return "людей";
}

function getHash() {
  return window.location.hash || "#/feed";
}

function routeTo(hash) {
  window.location.hash = hash;
}

function navLink(hash, label) {
  const active = getHash().startsWith(hash) ? "active" : "";
  return `<a href="${hash}" class="${active}">${label}</a>`;
}

function navIcon(name) {
  const icons = {
    home: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.4 10.4 12 4.2l7.6 6.2"></path>
        <path d="M6.7 9.1v10.1h10.6V9.1"></path>
        <path d="M9.7 19.2v-5.1h4.6v5.1"></path>
      </svg>
    `,
    people: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9.2" cy="7.8" r="2.7"></circle>
        <circle cx="16.2" cy="8.6" r="2.25"></circle>
        <path d="M3.8 19.2c.5-3.35 2.4-5 5.4-5s4.9 1.65 5.4 5"></path>
        <path d="M13.1 14.5c.75-.45 1.75-.62 3.1-.48 2.45.28 3.9 1.96 4.15 5.18"></path>
      </svg>
    `,
    plus: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5.3v13.4"></path>
        <path d="M5.3 12h13.4"></path>
      </svg>
    `,
    more: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="5.7" cy="12" r="1.35"></circle>
        <circle cx="12" cy="12" r="1.35"></circle>
        <circle cx="18.3" cy="12" r="1.35"></circle>
      </svg>
    `,
  };
  return `<span class="tab-icon">${icons[name]}</span>`;
}

function tabAvatar(user) {
  if (user?.avatar) {
    return `
      <span class="tab-avatar">
        <img src="${escapeHtml(user.avatar)}" alt="${escapeHtml(user.nickname)}" />
      </span>
    `;
  }
  return `<span class="tab-avatar tab-avatar-fallback">${escapeHtml(initials(user))}</span>`;
}

function mobileNavMatches(hash) {
  const current = getHash().split("?")[0] || "#/feed";
  if (hash === "#/feed") return current === "#/feed" || current === "#/";
  if (hash === "#/search") return current === "#/search";
  if (hash === "#/create-post") return current === "#/create-post";
  if (hash === "#/admin") return current === "#/admin";
  return current === hash || current.startsWith(`${hash}/`);
}

function buildMobileNav(user) {
  const items = user
    ? [
        { hash: "#/feed", label: "Головна", icon: navIcon("home") },
        { hash: "#/search", label: "Пошук", icon: navIcon("people") },
        { hash: "#/create-post", label: "Створити", icon: navIcon("plus") },
        { hash: `#/profile/${user.id}`, label: "Профіль", icon: tabAvatar(user) },
        ...(user.isAdmin ? [{ hash: "#/admin", label: "Адмін", icon: navIcon("more") }] : []),
      ]
    : [
        { hash: "#/login", label: "Вхід", icon: navIcon("home") },
        { hash: "#/register", label: "Реєстрація", icon: navIcon("plus") },
      ];

  const activeIndex = Math.max(0, items.findIndex((item) => mobileNavMatches(item.hash)));
  const fromIndex = lastMobileNavIndex ?? activeIndex;
  lastMobileNavIndex = activeIndex;
  return {
    activeIndex,
    count: items.length,
    fromIndex,
    activeOffset: `${activeIndex * 100}%`,
    fromOffset: `${fromIndex * 100}%`,
    midOffset: `${(fromIndex + (activeIndex - fromIndex) * 0.55) * 100}%`,
    html: `
      <span class="tabbar-liquid" aria-hidden="true"></span>
      ${items
        .map((item, index) => {
          const active = index === activeIndex ? "active" : "";
          return `
            <a href="${item.hash}" class="${active}" aria-label="${escapeHtml(item.label)}" title="${escapeHtml(item.label)}">
              ${item.icon}
              <span class="sr-only">${escapeHtml(item.label)}</span>
            </a>
          `;
        })
        .join("")}
    `,
  };
}

function renderShell(content) {
  const user = currentUser();
  const screen = getHash().split("?")[0].replace("#/", "") || "feed";
  const screenClass = `screen-${screen.replace(/[^a-z0-9-]/gi, "")}`;
  const mobileNav = buildMobileNav(user);

  document.querySelector("#app").innerHTML = `
    <div class="app-shell ${screenClass}">
      <main class="main ${screenClass}-main">${content}</main>
      <nav
        class="mobile-tabbar"
        style="--tab-count: ${mobileNav.count}; --active-offset: ${mobileNav.activeOffset}; --from-offset: ${mobileNav.fromOffset}; --mid-offset: ${mobileNav.midOffset};"
        aria-label="Мобільна навігація"
      >${mobileNav.html}</nav>
    </div>
  `;
}

function renderLikeButton({ liked, count, onclick, label }) {
  return `
    <button
      class="like-button ${liked ? "liked" : ""}"
      type="button"
      onclick="${onclick}"
      aria-pressed="${liked ? "true" : "false"}"
      aria-label="${escapeHtml(label)}"
    >
      <span class="like-button__icon" aria-hidden="true">
        <svg class="like-heart like-heart--outline" viewBox="0 0 24 24" focusable="false">
          <path d="M12 20.25c-.3 0-.59-.11-.81-.33L5.78 14.9A5.56 5.56 0 0 1 4 10.83c0-1.53.59-2.96 1.68-4.04A5.67 5.67 0 0 1 9.75 5.1c.84 0 1.67.18 2.25.92.58-.74 1.41-.92 2.25-.92a5.67 5.67 0 0 1 4.07 1.69A5.67 5.67 0 0 1 20 10.83c0 1.54-.63 3-1.78 4.07l-5.41 5.02c-.22.22-.51.33-.81.33Z"></path>
        </svg>
        <svg class="like-heart like-heart--fill" viewBox="0 0 24 24" focusable="false">
          <path d="M12 20.25c-.3 0-.59-.11-.81-.33L5.78 14.9A5.56 5.56 0 0 1 4 10.83c0-1.53.59-2.96 1.68-4.04A5.67 5.67 0 0 1 9.75 5.1c.84 0 1.67.18 2.25.92.58-.74 1.41-.92 2.25-.92a5.67 5.67 0 0 1 4.07 1.69A5.67 5.67 0 0 1 20 10.83c0 1.54-.63 3-1.78 4.07l-5.41 5.02c-.22.22-.51.33-.81.33Z"></path>
        </svg>
      </span>
      <span class="like-button__count">${count}</span>
    </button>
  `;
}

function renderWelcome() {
  const members = visibleUsers().slice(0, 3);
  return `
    <section class="hero">
      <div class="hero-copy">
        <span class="eyebrow">MVP прототип</span>
        <h1>DollShelf Club</h1>
        <p>Місце, де колекціонери ляльок показують свій стиль, публікують історії з полиць, знаходять людей за інтересами та підписуються одне на одного.</p>
        <div class="hero-actions">
          <a class="button" href="#/register">Створити профіль</a>
          <a class="ghost-button" href="#/login">Увійти в демо</a>
        </div>
      </div>
      <aside class="side-panel">
        <div>
          <span class="eyebrow">Жива спільнота</span>
          <h2>Профілі, пости, пошук</h2>
          <p>У демо вже є кілька колекціонерів, теги, коментарі, лайки, підписки та мінімальна адмінка.</p>
        </div>
        <div class="grid">
          ${members.map((user) => miniProfile(user)).join("")}
        </div>
      </aside>
    </section>
  `;
}

function miniProfile(user) {
  return `
    <a class="profile-mini" href="#/profile/${user.id}">
      ${avatar(user)}
      <span>
        <strong>${escapeHtml(user.nickname)}</strong>
        <span class="muted">${escapeHtml(user.country || "Без країни")} - ${user.interests
          .slice(0, 2)
          .map(escapeHtml)
          .join(", ")}</span>
      </span>
    </a>
  `;
}

function renderLogin() {
  renderShell(`
    ${renderWelcome()}
    <section class="form-card">
      <span class="eyebrow">Вхід</span>
      <h2>Увійти в демо-профіль</h2>
      <p>Для MVP це легка демо-авторизація: оберіть існуючий профіль або введіть нікнейм.</p>
      <form onsubmit="App.login(event)">
        <div class="form-grid">
          <label class="field full">
            Нікнейм
            <input name="nickname" list="known-users" placeholder="Наприклад, NikaShelf" required />
            <datalist id="known-users">
              ${state.users.map((user) => `<option value="${escapeHtml(user.nickname)}"></option>`).join("")}
            </datalist>
          </label>
        </div>
        <p class="notice">Швидкий старт: введіть <strong>NikaShelf</strong>, щоб відкрити профіль адміністратора і протестувати всі екрани.</p>
        <button class="button" type="submit">Увійти</button>
      </form>
    </section>
  `);
}

function renderRegister() {
  renderShell(`
    ${renderWelcome()}
    <section class="form-card">
      <span class="eyebrow">Реєстрація</span>
      <h2>Створіть профіль колекціонера</h2>
      <form onsubmit="App.register(event)">
        <div class="form-grid">
          <label class="field">
            Нікнейм
            <input name="nickname" placeholder="ShelfName" required />
          </label>
          <label class="field">
            Ім'я
            <input name="name" placeholder="Як до вас звертатися" />
          </label>
          <label class="field">
            Країна
            <input name="country" placeholder="Україна" />
          </label>
          <label class="field">
            Місто
            <input name="city" placeholder="Київ" />
          </label>
          <label class="field full">
            Коротке біо
            <textarea name="bio" placeholder="Що ви колекціонуєте, який у вас стиль, що зараз шукаєте"></textarea>
          </label>
        </div>
        <button class="button" type="submit">Продовжити</button>
      </form>
    </section>
  `);
}

function renderOnboarding() {
  const user = currentUser();
  if (!user) return renderLogin();
  renderShell(`
    <section class="form-card">
      <span class="eyebrow">Створення профілю</span>
      <h2>Покажіть себе як колекціонера</h2>
      <p>Заповніть ключові поля. Їх потім можна змінити в редагуванні профілю.</p>
      ${profileForm(user, "App.saveOnboarding(event)", "Створити публічний профіль")}
    </section>
  `);
}

function renderFeed() {
  const user = currentUser();
  if (!user) {
    renderShell(renderWelcome());
    return;
  }

  const followingPosts = state.posts.filter((post) => user.following.includes(post.userId));
  const posts = followingPosts.length ? followingPosts : state.posts;
  const sortedPosts = posts
    .filter((post) => !findUser(post.userId)?.blocked)
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  renderShell(`
    <section class="grid two">
      <div class="grid">
        <div class="toolbar">
          <div>
            <span class="eyebrow">Головна стрічка</span>
            <h2>${followingPosts.length ? "Пости ваших підписок" : "Нові пости спільноти"}</h2>
          </div>
          <a class="button" href="#/create-post">Створити пост</a>
        </div>
        ${sortedPosts.length ? sortedPosts.map(renderPostCard).join("") : emptyState("У стрічці поки немає постів.")}
      </div>
      <aside class="grid">
        <section class="card">
          <span class="eyebrow">Ваш профіль</span>
          ${miniProfile(user)}
          <div class="stats">
            <span class="stat"><strong>${user.followers.length}</strong><span class="muted">підписників</span></span>
            <span class="stat"><strong>${user.following.length}</strong><span class="muted">підписок</span></span>
          </div>
        </section>
        <section class="card">
          <span class="eyebrow">Знайти своїх</span>
          <h3>Пошук за тегами</h3>
          <p>Monster High, BJD, vintage, gothic, pastel - усе вже працює у простому пошуку.</p>
          <a class="ghost-button" href="#/search">Відкрити пошук</a>
        </section>
      </aside>
    </section>
  `);
}

function renderPostCard(post) {
  const user = findUser(post.userId);
  if (!user) return "";
  const me = currentUser();
  const liked = me ? post.likes.includes(me.id) : false;
  const kindLabel = post.postType === "story" ? `<span class="post-kind">Історія</span>` : "";
  return `
    <article class="post-card">
      <div class="post-head">
        <a class="post-author" href="#/profile/${user.id}">
          ${avatar(user)}
          <span>
            <strong>${escapeHtml(user.nickname)}</strong>
            <span class="muted">${formatDate(post.createdAt)}</span>
          </span>
        </a>
        <button class="ghost-button small" onclick="App.reportPost('${post.id}')">Поскаржитися</button>
      </div>
      <a href="#/post/${post.id}">
        ${renderMedia(post.images[0] || HERO_IMAGE, "post-image", `Фото посту ${user.nickname}`, post.crops?.[0])}
      </a>
      <div class="post-body">
        ${kindLabel}
        <p>${escapeHtml(post.text)}</p>
        ${tagList(post.tags)}
      </div>
      <div class="post-actions">
        <div>
          ${renderLikeButton({
            liked,
            count: post.likes.length,
            onclick: `App.toggleLike('${post.id}')`,
            label: liked ? "Прибрати вподобання" : "Поставити вподобання",
          })}
          <a class="ghost-button small" href="#/post/${post.id}">Коментарі: ${post.comments.length}</a>
        </div>
      </div>
    </article>
  `;
}

function renderProfile(id) {
  const user = findUser(id);
  const me = currentUser();
  if (!user || user.blocked) {
    renderShell(emptyState("Цей профіль недоступний."));
    return;
  }

  const own = me?.id === user.id;
  const isFollowing = me?.following.includes(user.id);
  const posts = state.posts
    .filter((post) => post.userId === user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const totalLikes = posts.reduce((sum, post) => sum + post.likes.length, 0);
  const location = [user.country, user.city].filter(Boolean).join(", ");

  renderShell(`
    <section class="profile-page">
      <div class="profile-card">
        <div class="profile-cover" style="${user.cover ? `background-image: url('${user.cover}')` : ""}">
          ${
            own
              ? `<a class="profile-plus profile-edit-fab" href="#/edit-profile" aria-label="Редактировать профиль" title="Редактировать профиль">${editIcon()}</a>`
              : `<button class="profile-plus" onclick="App.toggleFollow('${user.id}')" aria-label="${isFollowing ? "Відписатися" : "Підписатися"}">${isFollowing ? "✓" : "+"}</button>`
          }
        </div>
        <div class="profile-avatar-wrap">${avatar(user, "large")}</div>
        <div class="profile-card-body">
          <p class="profile-location">${escapeHtml(location || "Колекціонер")}</p>
          <h1>${escapeHtml(user.nickname)}</h1>
          <p class="profile-bio">${escapeHtml(user.bio || "Поки без опису.")}</p>
          <div class="stats profile-stats">
            <span class="stat"><strong>${totalLikes}</strong><span class="muted">Likes</span></span>
            <span class="stat"><strong>${posts.length}</strong><span class="muted">Posts</span></span>
            <span class="stat"><strong>${user.followers.length}</strong><span class="muted">Followers</span></span>
          </div>
          <div class="profile-socials">
            ${profileSocialLinks(user)}
          </div>
          ${
            own
              ? ""
              : `<div class="profile-actions"><button class="button" onclick="App.toggleFollow('${user.id}')">${isFollowing ? "Отписаться" : "Подписаться"}</button></div>`
          }
          <details class="profile-drawer">
            <summary class="profile-drawer-summary" onclick="App.handleDrawerClick(event)" onpointerdown="App.startDrawerPull(event)" onpointermove="App.moveDrawerPull(event)" onpointerup="App.endDrawerPull(event)" onpointercancel="App.cancelDrawerPull(event)" onmousedown="App.startDrawerPull(event)" onmousemove="App.moveDrawerPull(event)" onmouseup="App.endDrawerPull(event)" onmouseleave="App.cancelDrawerPull(event)" ontouchstart="App.startDrawerPull(event)" ontouchmove="App.moveDrawerPull(event)" ontouchend="App.endDrawerPull(event)" ontouchcancel="App.cancelDrawerPull(event)">
              <span class="profile-drawer-handle" aria-hidden="true"></span>
              <span class="profile-drawer-label">подробнее</span>
            </summary>
            <div class="profile-drawer-content">
              <div class="profile-info-item">
                <h3>Коллекционирую с</h3>
                <p>${escapeHtml(user.collectingSince || "Не указано")}</p>
              </div>
              <div class="profile-info-item">
                <h3>Сейчас ищу</h3>
                <p>${escapeHtml(user.lookingFor || "Не указано")}</p>
              </div>
              <div class="profile-info-item">
                <h3>Интересы</h3>
                ${tagList(user.interests)}
              </div>
            </div>
          </details>
        </div>
      </div>

      <div class="profile-posts">
        ${
          posts.length
            ? `<div class="post-grid">${posts.map(renderPostTile).join("")}</div>`
            : emptyState("Тут пока нет публикаций.")
        }
      </div>
    </section>
  `);
}

function socialLinks(user) {
  const links = [
    ["Instagram", user.instagram],
    ["TikTok", user.tiktok],
    ["Etsy", user.etsy],
  ].filter(([, url]) => url);

  if (!links.length) return `<p class="muted">Посилань ще немає.</p>`;
  return links
    .map(
      ([label, url]) =>
        `<p><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${label}</a></p>`,
    )
    .join("");
}

function profileSocialLinks(user) {
  const links = [
    ["IG", user.instagram],
    ["TT", user.tiktok],
    ["ET", user.etsy],
  ].filter(([, url]) => url);

  if (!links.length) return `<span class="profile-social muted">no links</span>`;
  return links
    .map(
      ([label, url]) =>
        `<a class="profile-social" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${label}</a>`,
    )
    .join("");
}

function editIcon() {
  return `
    <svg class="edit-icon" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M7 25 9.2 17.6 21.8 5a4 4 0 0 1 5.7 5.7L14.9 23.3 7 25Z"></path>
      <path d="M9.2 17.6 14.9 23.3"></path>
      <path d="M20.1 6.7 25.8 12.4"></path>
      <path d="M8.2 21.1 10.9 23.8"></path>
    </svg>
  `;
}

function renderPostTile(post) {
  const src = post.images[0] || HERO_IMAGE;
  const safeSrc = escapeHtml(src);
  const style = mediaCropStyle(post.crops?.[0]);
  return `
    <a class="post-tile" href="#/post/${post.id}">
      ${
        isVideoMedia(src)
          ? `<video src="${safeSrc}" style="${style}" muted playsinline></video>`
          : `<img src="${safeSrc}" alt="Фото посту" style="${style}" />`
      }
    </a>
  `;
}

function renderEditProfile() {
  const user = currentUser();
  if (!user) return renderLogin();
  renderShell(`
    <section class="form-card">
      <span class="eyebrow">Редагування</span>
      <h2>Оновіть профіль</h2>
      ${profileForm(user, "App.saveProfile(event)", "Зберегти зміни", true)}
    </section>
  `);
}

function profileForm(user, handler, submitLabel, includeMedia = false) {
  return `
    <form onsubmit="${handler}">
      <div class="form-grid">
        <label class="field">
          Нікнейм
          <input name="nickname" value="${escapeHtml(user.nickname || "")}" required />
        </label>
        <label class="field">
          Ім'я
          <input name="name" value="${escapeHtml(user.name || "")}" />
        </label>
        <label class="field">
          Країна
          <input name="country" value="${escapeHtml(user.country || "")}" />
        </label>
        <label class="field">
          Місто
          <input name="city" value="${escapeHtml(user.city || "")}" />
        </label>
        <label class="field">
          Колекціоную з...
          <input name="collectingSince" value="${escapeHtml(user.collectingSince || "")}" placeholder="2019" />
        </label>
        <label class="field">
          Зараз цікавлюсь
          <input name="lookingFor" value="${escapeHtml(user.lookingFor || "")}" />
        </label>
        <label class="field full">
          Коротке біо
          <textarea name="bio">${escapeHtml(user.bio || "")}</textarea>
        </label>
        ${includeMedia ? mediaInputs() : ""}
        <label class="field full">
          Улюблені напрями
          ${checkboxList("interests", INTERESTS, user.interests)}
        </label>
        <label class="field">
          Instagram
          <input name="instagram" value="${escapeHtml(user.instagram || "")}" placeholder="https://instagram.com/..." />
        </label>
        <label class="field">
          TikTok
          <input name="tiktok" value="${escapeHtml(user.tiktok || "")}" placeholder="https://tiktok.com/@..." />
        </label>
        <label class="field">
          Etsy
          <input name="etsy" value="${escapeHtml(user.etsy || "")}" placeholder="https://etsy.com/shop/..." />
        </label>
      </div>
      <button class="button" type="submit">${submitLabel}</button>
    </form>
  `;
}

function mediaInputs() {
  return `
    <label class="field">
      Аватар
      <input name="avatarFile" type="file" accept="image/*" />
    </label>
    <label class="field">
      Обкладинка
      <input name="coverFile" type="file" accept="image/*" />
    </label>
  `;
}

function checkboxList(name, items, selected = []) {
  return `
    <div class="check-list">
      ${items
        .map(
          (item) => `
            <label class="chip-check">
              <input type="checkbox" name="${name}" value="${escapeHtml(item)}" ${selected.includes(item) ? "checked" : ""} />
              <span>${escapeHtml(item)}</span>
            </label>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCreatePost() {
  const user = currentUser();
  if (!user) return renderLogin();
  createSelectedMediaItems = [];
  createActiveMediaIndex = 0;
  renderShell(`
    <section class="create-studio" aria-label="Створення посту або історії">
      <form class="create-camera-form" onsubmit="App.createPost(event)">
        <input id="createImages" class="hidden-file" name="images" type="file" accept="image/*,video/*" multiple onchange="App.previewCreateMedia(event)" />
        <input id="createCapture" class="hidden-file" type="file" accept="image/*,video/*" capture="environment" onchange="App.previewCreateMedia(event)" />
        <input name="capturedImage" type="hidden" />

        <div class="camera-frame">
          <video id="createCameraVideo" class="camera-video" autoplay muted playsinline></video>
          <img id="createCameraPreview" class="camera-preview hidden" alt="Вибране фото для публікації" />
          <video id="createMediaPreviewVideo" class="camera-preview hidden" muted playsinline controls></video>
          <div id="cameraFallback" class="camera-fallback">
            <span class="eyebrow">Камера</span>
            <h2>Відкрийте камеру або оберіть фото з галереї</h2>
            <p>Якщо браузер попросить доступ до камери, дозвольте його для швидкого знімка.</p>
          </div>
          <div class="camera-topbar">
            <a class="camera-close" href="#/feed" aria-label="Закрити створення">×</a>
            <span id="cameraStatus" class="camera-status">Підключаємо камеру...</span>
            <label class="gallery-pill" for="createImages">Галерея</label>
          </div>
          <div class="capture-strip" aria-label="Вибір формату">
            <label class="mode-pill" onclick="App.setCreateMode('post')">
              <input type="radio" name="postType" value="post" checked />
              <span>Публікація</span>
            </label>
            <label class="mode-pill" onclick="App.setCreateMode('story')">
              <input type="radio" name="postType" value="story" />
              <span>Історія</span>
            </label>
          </div>
          <div id="selectedMediaStrip" class="selected-media-strip" aria-live="polite"></div>
          <div class="camera-actions">
            <button class="camera-side-action" type="button" onclick="App.openCreateGallery()">Медіа</button>
            <button class="shutter-button" type="button" onclick="App.captureCreatePhoto()" aria-label="Зробити фото"></button>
            <button class="camera-side-action" type="button" onclick="App.openCreateDetails()">Далі</button>
          </div>
        </div>

        <div id="createDetailsSheet" class="create-details-sheet" aria-hidden="true">
          <div class="create-details-dialog" role="dialog" aria-modal="true" aria-labelledby="createDetailsTitle">
            <div class="details-head">
              <button class="ghost-button small" type="button" onclick="App.closeCreateDetails()">Назад</button>
              <div>
                <span class="eyebrow">Перед публікацією</span>
                <h2 id="createDetailsTitle">Підпис, теги і превю</h2>
              </div>
            </div>
            <div class="details-layout">
              <div>
                <div
                  id="detailsPreview"
                  class="details-preview"
                  onpointerdown="App.startCreateCropDrag(event)"
                  onpointermove="App.moveCreateCropDrag(event)"
                  onpointerup="App.endCreateCropDrag(event)"
                  onpointercancel="App.endCreateCropDrag(event)"
                ></div>
                <div id="detailsThumbs" class="details-thumbs"></div>
                <div class="crop-tools" aria-label="Кадрування 3:4">
                  <div>
                    <span class="eyebrow">Кадр 3:4</span>
                    <p>Зсуньте фото або відео так, щоб у пості залишилась потрібна частина.</p>
                  </div>
                  <div class="crop-pad">
                    <button class="ghost-button small" type="button" onclick="App.adjustCreateCrop(0, -8)">Вгору</button>
                    <div>
                      <button class="ghost-button small" type="button" onclick="App.adjustCreateCrop(-8, 0)">Вліво</button>
                      <button class="ghost-button small" type="button" onclick="App.adjustCreateCrop(8, 0)">Вправо</button>
                    </div>
                    <button class="ghost-button small" type="button" onclick="App.adjustCreateCrop(0, 8)">Вниз</button>
                  </div>
                  <label class="field">
                    Масштаб
                    <input id="cropZoom" type="range" min="1" max="2.4" step="0.05" value="1" oninput="App.setCreateCropScale(this.value)" />
                  </label>
                  <button class="ghost-button small" type="button" onclick="App.resetCreateCrop()">Скинути кадр</button>
                </div>
              </div>
              <div class="create-caption-panel">
                <label class="field">
                  Підпис
                  <textarea name="text" placeholder="Що сьогодні на вашій полиці?" required></textarea>
                </label>
                <label class="field">
                  Теги
                  <input name="tags" placeholder="Monster High, restoration, advice" />
                </label>
                <button class="button" type="submit">Опублікувати</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  `);
  window.setTimeout(initCreateStudio, 0);
}

function renderPostPage(id) {
  const post = findPost(id);
  const me = currentUser();
  if (!post) {
    renderShell(emptyState("Пост не знайдено."));
    return;
  }
  const user = findUser(post.userId);
  const comments = post.comments
    .map((comment) => {
      const author = findUser(comment.userId);
      const canDelete = me && (me.id === comment.userId || me.isAdmin);
      return `
        <div class="comment-row">
          <div class="comment-meta">
            <strong>${escapeHtml(author?.nickname || "Користувач")}</strong>
            <span class="muted">${formatDate(comment.createdAt)}</span>
          </div>
          <p>${escapeHtml(comment.text)}</p>
          ${canDelete ? `<button class="ghost-button small" onclick="App.deleteComment('${post.id}', '${comment.id}')">Видалити</button>` : ""}
        </div>
      `;
    })
    .join("");

  renderShell(`
    <section class="grid two">
      <div class="grid">
        ${renderPostCard(post)}
        <section class="card">
          <h3>Коментарі</h3>
          ${comments || `<p class="muted">Коментарів поки немає.</p>`}
          ${
            me
              ? `
                <form onsubmit="App.addComment(event, '${post.id}')">
                  <label class="field">
                    Додати коментар
                    <textarea name="comment" required></textarea>
                  </label>
                  <button class="button small" type="submit">Надіслати</button>
                </form>
              `
              : `<p class="notice">Увійдіть, щоб коментувати.</p>`
          }
        </section>
      </div>
      <aside class="grid">
        <section class="card">
          <span class="eyebrow">Автор</span>
          ${user ? miniProfile(user) : ""}
        </section>
        <section class="card">
          <h3>Дії MVP</h3>
          <p>Лайки, коментарі, скарги та видалення власних коментарів уже доступні в прототипі.</p>
        </section>
      </aside>
    </section>
  `);
}

function renderSearch() {
  const filters = Object.fromEntries(new URLSearchParams(location.hash.split("?")[1] || ""));
  const query = String(filters.q || "").trim().toLowerCase();
  const showComposer = filters.compose === "1";
  const discussions = state.discussions
    .filter((discussion) => !findUser(discussion.userId)?.blocked)
    .filter((discussion) => {
      if (!query) return true;
      const author = discussionAuthor(discussion);
      return [
        discussion.title,
        discussion.text,
        discussion.tags?.join(" "),
        author?.nickname,
        ...(discussion.replies || []).map((reply) => reply.text),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  renderShell(`
    <section class="discussion-page">
      <div class="discussion-topbar">
        <form class="thread-search" onsubmit="App.search(event)" role="search">
          <button type="submit" aria-label="Найти ветку" title="Найти ветку">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.2"></circle>
              <path d="m16 16 4 4"></path>
            </svg>
          </button>
          <input name="q" value="${escapeHtml(filters.q || "")}" placeholder="Найти ветку" />
        </form>
        <a class="thread-create-button" href="#/search?compose=1" aria-label="Создать ветку" title="Создать ветку">+</a>
      </div>

      <div class="discussion-title">
        <span class="eyebrow">Обсуждения</span>
        <h2>Лента веток кукольного клуба</h2>
        <p>Новости, релизы, вопросы по кастомам и находки сообщества в одном месте.</p>
        ${
          remoteDiscussionsLoaded
            ? `<p class="online-memory online">Онлайн-память подключена.</p>`
            : `<p class="online-memory">Онлайн-память пока ждёт таблицы в Supabase.</p>`
        }
      </div>

      ${
        showComposer
          ? `
            <form class="thread-composer" onsubmit="App.createDiscussion(event)">
              <div class="composer-head">
                <div>
                  <span class="eyebrow">Новая ветка</span>
                  <h3>Начните обсуждение</h3>
                </div>
                <a class="ghost-button small" href="#/search">Закрыть</a>
              </div>
              <label class="field">
                Заголовок
                <input name="title" placeholder="Например: новый релиз, кто что думает?" required />
              </label>
              <label class="field">
                Основной текст
                <textarea name="text" placeholder="Расскажите новость, задайте вопрос или начните разбор..." required></textarea>
              </label>
              <label class="field">
                Теги
                <input name="tags" placeholder="Monster High, BJD, release" />
              </label>
              <button class="button" type="submit">Опубликовать ветку</button>
            </form>
          `
          : ""
      }

      <div class="discussion-feed">
        ${discussions.length ? discussions.map(renderDiscussionCard).join("") : emptyState("Таких веток пока нет. Создайте первую.")}
      </div>
    </section>
  `);
}

function renderDiscussionCard(discussion) {
  const author = discussionAuthor(discussion);
  const me = currentUser();
  const liked = me ? discussion.likes.includes(me.id) : false;
  const replies = discussion.replies || [];
  return `
    <article class="thread-card">
      <div class="thread-preview">
        <div class="thread-card-main">
          <div class="thread-author">
            ${avatar(author)}
            <span>
              <strong>${escapeHtml(author?.nickname || "Користувач")}</strong>
              <span class="muted">${formatDate(discussion.createdAt)}</span>
            </span>
          </div>
          <h3>${escapeHtml(discussion.title)}</h3>
          <p>${escapeHtml(discussion.text)}</p>
          ${tagList(discussion.tags || [])}
        </div>
        <div class="thread-actions">
          ${renderLikeButton({
            liked,
            count: discussion.likes.length,
            onclick: `App.toggleDiscussionLike('${discussion.id}')`,
            label: liked ? "Убрать лайк" : "Поставить лайк",
          })}
        </div>
      </div>
      <details class="thread-comments">
        <summary>
          <span>Комментарии: ${replies.length}</span>
          <span class="thread-open-label">Открыть ветку</span>
        </summary>
        <div class="thread-replies">
          ${
            replies.length
              ? replies
                  .map((reply) => {
                    const replyAuthor = discussionReplyAuthor(reply);
                    return `
                      <div class="thread-reply">
                        ${avatar(replyAuthor, "small")}
                        <div>
                          <div class="comment-meta">
                            <strong>${escapeHtml(replyAuthor?.nickname || "Користувач")}</strong>
                            <span class="muted">${formatDate(reply.createdAt)}</span>
                          </div>
                          <p>${escapeHtml(reply.text)}</p>
                        </div>
                      </div>
                    `;
                  })
                  .join("")
              : `<p class="muted">Ответов пока нет. Можно начать первым.</p>`
          }
          ${
            me
              ? `
                <form class="reply-form" onsubmit="App.addDiscussionReply(event, '${discussion.id}')">
                  <label class="field">
                    Ответить в ветке
                    <textarea name="reply" required placeholder="Ваш ответ..."></textarea>
                  </label>
                  <button class="button small" type="submit">Ответить</button>
                </form>
              `
              : `<p class="notice">Увійдіть, щоб відповідати.</p>`
          }
        </div>
      </details>
    </article>
  `;
}

function renderUserResult(user) {
  const me = currentUser();
  const isFollowing = me?.following.includes(user.id);
  const own = me?.id === user.id;
  return `
    <article class="user-result">
      ${avatar(user)}
      <div>
        <h3>${escapeHtml(user.nickname)}</h3>
        <p>${escapeHtml(user.bio || "")}</p>
        ${tagList(user.interests)}
      </div>
      <div>
        <a class="ghost-button small" href="#/profile/${user.id}">Профіль</a>
        ${me && !own ? `<button class="button small" onclick="App.toggleFollow('${user.id}')">${isFollowing ? "Відписатися" : "Підписатися"}</button>` : ""}
      </div>
    </article>
  `;
}

function renderAdmin() {
  const me = currentUser();
  if (!me) return renderLogin();
  if (!me.isAdmin) {
    renderShell(emptyState("Адмін-сторінка доступна лише адміністратору."));
    return;
  }

  const reportedPosts = state.posts.filter((post) => post.reports.length);
  renderShell(`
    <section class="grid">
      <div class="toolbar">
        <div>
          <span class="eyebrow">Мінімальна адмінка</span>
          <h2>Користувачі, пости, скарги</h2>
        </div>
        <button class="ghost-button" onclick="App.resetState()">Скинути демо</button>
      </div>
      <section class="card">
        <h3>Користувачі</h3>
        <table class="admin-table">
          <thead><tr><th>Профіль</th><th>Статус</th><th>Дія</th></tr></thead>
          <tbody>
            ${state.users
              .map(
                (user) => `
                  <tr>
                    <td><a href="#/profile/${user.id}">${escapeHtml(user.nickname)}</a><br><span class="muted">${escapeHtml(user.country || "")}</span></td>
                    <td>${user.blocked ? "Заблоковано" : "Активний"}</td>
                    <td>${user.id === me.id ? "Поточний адміністратор" : `<button class="ghost-button small" onclick="App.toggleBlockUser('${user.id}')">${user.blocked ? "Розблокувати" : "Заблокувати"}</button>`}</td>
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </section>
      <section class="card">
        <h3>Пости</h3>
        <table class="admin-table">
          <thead><tr><th>Пост</th><th>Автор</th><th>Дія</th></tr></thead>
          <tbody>
            ${state.posts
              .map((post) => {
                const author = findUser(post.userId);
                return `
                  <tr>
                    <td><a href="#/post/${post.id}">${escapeHtml(post.text.slice(0, 92))}</a></td>
                    <td>${escapeHtml(author?.nickname || "Невідомо")}</td>
                    <td><button class="button danger small" onclick="App.deletePost('${post.id}')">Видалити</button></td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      </section>
      <section class="card">
        <h3>Скарги</h3>
        ${
          reportedPosts.length
            ? reportedPosts
                .map((post) => `<p><a href="#/post/${post.id}">${escapeHtml(post.text.slice(0, 80))}</a> - ${post.reports.length} скарг</p>`)
                .join("")
            : `<p class="muted">Скарг поки немає.</p>`
        }
      </section>
    </section>
  `);
}

function emptyState(text) {
  return `<div class="empty"><p>${escapeHtml(text)}</p></div>`;
}

async function fileToDataUrl(file) {
  if (!file) return "";
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function stopCreateCamera() {
  if (!createCameraStream) return;
  createCameraStream.getTracks().forEach((track) => track.stop());
  createCameraStream = null;
}

async function initCreateStudio() {
  const video = document.querySelector("#createCameraVideo");
  const status = document.querySelector("#cameraStatus");
  const fallback = document.querySelector("#cameraFallback");
  if (!video) return;

  stopCreateCamera();

  if (!navigator.mediaDevices?.getUserMedia) {
    if (status) status.textContent = "Камера недоступна";
    fallback?.classList.add("is-visible");
    return;
  }

  let cameraAnswered = false;
  const pendingTimer = window.setTimeout(() => {
    if (cameraAnswered) return;
    if (status) status.textContent = "Дозвольте камеру або відкрийте галерею";
    fallback?.classList.add("is-visible");
  }, 2200);

  try {
    createCameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: "environment" } },
      audio: false,
    });
    cameraAnswered = true;
    window.clearTimeout(pendingTimer);
    video.srcObject = createCameraStream;
    await video.play();
    video.classList.add("is-live");
    fallback?.classList.remove("is-visible");
    if (status) status.textContent = "Камера готова";
  } catch {
    cameraAnswered = true;
    window.clearTimeout(pendingTimer);
    if (status) status.textContent = "Оберіть з галереї";
    fallback?.classList.add("is-visible");
  }
}

function openCreateGallery() {
  document.querySelector("#createImages")?.click();
}

function openCreateCapture() {
  document.querySelector("#createCapture")?.click();
}

function createMediaLimit() {
  const mode = document.querySelector('input[name="postType"]:checked')?.value || "post";
  return mode === "story" ? 1 : 5;
}

function createMediaSources() {
  return createSelectedMediaItems.map((item) => item.src).filter(Boolean);
}

function createMediaCrops() {
  return createSelectedMediaItems.map((item) => item.crop || { ...DEFAULT_CROP });
}

function clampCropValue(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function activeCreateMedia() {
  return createSelectedMediaItems[createActiveMediaIndex] || null;
}

function applyCropControls() {
  const active = activeCreateMedia();
  const zoom = document.querySelector("#cropZoom");
  if (zoom && active?.crop) zoom.value = String(active.crop.scale);
}

function renderSelectedMedia(items) {
  const strip = document.querySelector("#selectedMediaStrip");
  const imagePreview = document.querySelector("#createCameraPreview");
  const videoPreview = document.querySelector("#createMediaPreviewVideo");
  if (!strip) return;

  if (!items.length) {
    strip.innerHTML = "";
    strip.classList.remove("is-visible");
    imagePreview?.classList.add("hidden");
    videoPreview?.classList.add("hidden");
    videoPreview?.pause?.();
    return;
  }

  if (createActiveMediaIndex >= items.length) createActiveMediaIndex = 0;
  strip.innerHTML = items
    .slice(0, 5)
    .map(
      (item, index) => `
        <button class="selected-media-button ${index === createActiveMediaIndex ? "is-active" : ""}" type="button" onclick="App.selectCreateMedia(${index})" aria-label="Показати медіа ${index + 1}">
          ${renderMediaThumb(item.src || item, index)}
        </button>
      `,
    )
    .join("");
  strip.classList.toggle("is-visible", items.length > 0);
  selectCreateMedia(createActiveMediaIndex, { skipStripRender: true });
}

function selectCreateMedia(index, options = {}) {
  const item = createSelectedMediaItems[index];
  const imagePreview = document.querySelector("#createCameraPreview");
  const videoPreview = document.querySelector("#createMediaPreviewVideo");
  if (!item?.src || !imagePreview || !videoPreview) return;

  createActiveMediaIndex = index;
  imagePreview?.classList.add("hidden");
  videoPreview?.classList.add("hidden");
  videoPreview.pause?.();

  if (isVideoMedia(item.src)) {
    videoPreview.src = item.src;
    videoPreview.classList.remove("hidden");
  } else {
    imagePreview.src = item.src;
    imagePreview.classList.remove("hidden");
  }

  if (!options.skipStripRender) renderSelectedMedia(createSelectedMediaItems);
}

async function previewCreateMedia(event) {
  const limit = createMediaLimit();
  const allFiles = Array.from(event.currentTarget.files || []);
  const files = allFiles.slice(0, limit);
  const hiddenCapture = event.currentTarget.form?.capturedImage;
  if (hiddenCapture) hiddenCapture.value = "";
  if (!files.length) {
    createSelectedMediaItems = [];
    createActiveMediaIndex = 0;
    renderSelectedMedia([]);
    return;
  }
  const dataUrls = await Promise.all(files.map(fileToDataUrl));
  createSelectedMediaItems = dataUrls.map((src, index) => ({
    src,
    type: files[index]?.type?.startsWith("video/") ? "video" : "image",
    crop: { ...DEFAULT_CROP },
  }));
  createActiveMediaIndex = 0;
  renderSelectedMedia(createSelectedMediaItems);
  const status = document.querySelector("#cameraStatus");
  if (status) {
    const suffix = limit === 1 ? "" : ` / ${limit}`;
    status.textContent =
      allFiles.length > limit
        ? `Взято перші ${limit} медіа`
        : `${files.length}${suffix} медіа вибрано`;
  }
}

function captureCreatePhoto() {
  const video = document.querySelector("#createCameraVideo");
  const form = document.querySelector(".create-camera-form");
  const status = document.querySelector("#cameraStatus");
  if (!video || !form || !video.videoWidth) {
    if (window.matchMedia?.("(pointer: coarse)").matches) openCreateCapture();
    else openCreateGallery();
    return;
  }

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const context = canvas.getContext("2d");
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
  form.capturedImage.value = dataUrl;
  if (form.images) form.images.value = "";
  createSelectedMediaItems = [{ src: dataUrl, type: "image", crop: { ...DEFAULT_CROP } }];
  createActiveMediaIndex = 0;
  renderSelectedMedia(createSelectedMediaItems);
  if (status) status.textContent = "Знімок готовий";
}

function renderCreateDetailsPreview() {
  const sources = createMediaSources();
  const crops = createMediaCrops();
  const preview = document.querySelector("#detailsPreview");
  const thumbs = document.querySelector("#detailsThumbs");
  if (!preview || !thumbs) return;
  const activeSource = sources[createActiveMediaIndex] || sources[0];
  const activeCrop = crops[createActiveMediaIndex] || crops[0] || DEFAULT_CROP;

  setMediaPreview(preview, activeSource, "details-preview-media", "Превю публікації", activeCrop);
  thumbs.innerHTML = sources
    .map((src, index) => `<button class="details-thumb-button ${index === createActiveMediaIndex ? "is-active" : ""}" type="button" onclick="App.selectCreatePreview(${index})">${renderMediaThumb(src, index)}</button>`)
    .join("");
  thumbs.classList.toggle("hidden", sources.length < 2);
  applyCropControls();
}

function selectCreatePreview(index) {
  const sources = createMediaSources();
  const crops = createMediaCrops();
  const preview = document.querySelector("#detailsPreview");
  if (!preview || !sources[index]) return;
  createActiveMediaIndex = index;
  setMediaPreview(preview, sources[index], "details-preview-media", "Превю публікації", crops[index]);
  document.querySelectorAll(".details-thumb-button").forEach((button, buttonIndex) => {
    button.classList.toggle("is-active", buttonIndex === index);
  });
  renderSelectedMedia(createSelectedMediaItems);
  applyCropControls();
}

function updateCreateCropPreview() {
  const sources = createMediaSources();
  const crops = createMediaCrops();
  const preview = document.querySelector("#detailsPreview");
  if (preview && sources[createActiveMediaIndex]) {
    setMediaPreview(
      preview,
      sources[createActiveMediaIndex],
      "details-preview-media",
      "Превю публікації",
      crops[createActiveMediaIndex],
    );
  }
  applyCropControls();
}

function adjustCreateCrop(deltaX, deltaY) {
  const active = activeCreateMedia();
  if (!active) return;
  active.crop = active.crop || { ...DEFAULT_CROP };
  active.crop.x = clampCropValue(Number(active.crop.x) + deltaX, 0, 100);
  active.crop.y = clampCropValue(Number(active.crop.y) + deltaY, 0, 100);
  updateCreateCropPreview();
}

function setCreateCropScale(value) {
  const active = activeCreateMedia();
  if (!active) return;
  active.crop = active.crop || { ...DEFAULT_CROP };
  active.crop.scale = clampCropValue(Number(value) || 1, 1, 2.4);
  updateCreateCropPreview();
}

function resetCreateCrop() {
  const active = activeCreateMedia();
  if (!active) return;
  active.crop = { ...DEFAULT_CROP };
  updateCreateCropPreview();
}

function startCreateCropDrag(event) {
  const active = activeCreateMedia();
  const target = event.currentTarget;
  if (!active || !target) return;
  active.crop = active.crop || { ...DEFAULT_CROP };
  createCropDrag = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    cropX: Number(active.crop.x),
    cropY: Number(active.crop.y),
    width: target.clientWidth || 1,
    height: target.clientHeight || 1,
  };
  target.classList.add("is-dragging");
  target.setPointerCapture?.(event.pointerId);
  if (event.cancelable) event.preventDefault();
}

function moveCreateCropDrag(event) {
  if (!createCropDrag || createCropDrag.pointerId !== event.pointerId) return;
  const active = activeCreateMedia();
  if (!active) return;
  const deltaX = ((event.clientX - createCropDrag.startX) / createCropDrag.width) * 100;
  const deltaY = ((event.clientY - createCropDrag.startY) / createCropDrag.height) * 100;
  active.crop = active.crop || { ...DEFAULT_CROP };
  active.crop.x = clampCropValue(createCropDrag.cropX - deltaX, 0, 100);
  active.crop.y = clampCropValue(createCropDrag.cropY - deltaY, 0, 100);
  updateCreateCropPreview();
  if (event.cancelable) event.preventDefault();
}

function endCreateCropDrag(event) {
  event.currentTarget?.classList.remove("is-dragging");
  try {
    event.currentTarget?.releasePointerCapture?.(event.pointerId);
  } catch {}
  createCropDrag = null;
}

function openCreateDetails() {
  const status = document.querySelector("#cameraStatus");
  if (!createSelectedMediaItems.length) {
    if (status) status.textContent = "Спочатку оберіть фото або відео";
    return;
  }

  const sheet = document.querySelector("#createDetailsSheet");
  renderCreateDetailsPreview();
  sheet?.classList.add("is-open");
  sheet?.setAttribute("aria-hidden", "false");
  window.setTimeout(() => document.querySelector('.create-caption-panel textarea[name="text"]')?.focus(), 120);
}

function closeCreateDetails() {
  const sheet = document.querySelector("#createDetailsSheet");
  sheet?.classList.remove("is-open");
  sheet?.setAttribute("aria-hidden", "true");
}

function setCreateMode(value) {
  const radio = document.querySelector(`input[name="postType"][value="${value}"]`);
  if (radio) radio.checked = true;
  const limit = createMediaLimit();
  if (createSelectedMediaItems.length > limit) {
    createSelectedMediaItems = createSelectedMediaItems.slice(0, limit);
    createActiveMediaIndex = 0;
    renderSelectedMedia(createSelectedMediaItems);
    renderCreateDetailsPreview();
  }
  const input = document.querySelector("#createImages");
  if (input) input.multiple = limit > 1;
}

function formValues(form) {
  const data = new FormData(form);
  return {
    nickname: String(data.get("nickname") || "").trim(),
    name: String(data.get("name") || "").trim(),
    country: String(data.get("country") || "").trim(),
    city: String(data.get("city") || "").trim(),
    bio: String(data.get("bio") || "").trim(),
    collectingSince: String(data.get("collectingSince") || "").trim(),
    lookingFor: String(data.get("lookingFor") || "").trim(),
    instagram: String(data.get("instagram") || "").trim(),
    tiktok: String(data.get("tiktok") || "").trim(),
    etsy: String(data.get("etsy") || "").trim(),
    interests: data.getAll("interests").map(String),
    aesthetics: data.getAll("aesthetics").map(String),
  };
}

async function updateUserFromForm(event) {
  event.preventDefault();
  const user = currentUser();
  const values = formValues(event.currentTarget);
  const avatarFile = event.currentTarget.avatarFile?.files?.[0];
  const coverFile = event.currentTarget.coverFile?.files?.[0];

  Object.assign(user, values);
  if (avatarFile) user.avatar = await fileToDataUrl(avatarFile);
  if (coverFile) user.cover = await fileToDataUrl(coverFile);
  saveState();
  routeTo(`#/profile/${user.id}`);
}

function login(event) {
  event.preventDefault();
  const nickname = new FormData(event.currentTarget).get("nickname").trim().toLowerCase();
  const user = state.users.find((item) => item.nickname.toLowerCase() === nickname);
  if (!user) {
    alert("Профіль не знайдено. Спробуйте NikaShelf або створіть новий профіль.");
    return;
  }
  state.currentUserId = user.id;
  saveState();
  routeTo("#/feed");
}

function logout() {
  state.currentUserId = null;
  saveState();
  routeTo("#/login");
}

function register(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nickname = String(data.get("nickname") || "").trim();
  if (state.users.some((user) => user.nickname.toLowerCase() === nickname.toLowerCase())) {
    alert("Такий нікнейм уже є.");
    return;
  }
  const user = {
    id: `u-${Date.now()}`,
    nickname,
    name: String(data.get("name") || "").trim(),
    country: String(data.get("country") || "").trim(),
    city: String(data.get("city") || "").trim(),
    bio: String(data.get("bio") || "").trim(),
    collectingSince: "",
    lookingFor: "",
    interests: [],
    aesthetics: [],
    instagram: "",
    tiktok: "",
    etsy: "",
    avatar: "",
    cover: "",
    following: [],
    followers: [],
    blocked: false,
    isAdmin: false,
  };
  state.users.push(user);
  state.currentUserId = user.id;
  saveState();
  routeTo("#/onboarding");
}

function saveOnboarding(event) {
  updateUserFromForm(event);
}

function saveProfile(event) {
  updateUserFromForm(event);
}

function toggleFollow(targetId) {
  const me = currentUser();
  const target = findUser(targetId);
  if (!me || !target || me.id === target.id) return;
  const isFollowing = me.following.includes(target.id);
  if (isFollowing) {
    me.following = me.following.filter((id) => id !== target.id);
    target.followers = target.followers.filter((id) => id !== me.id);
  } else {
    me.following.push(target.id);
    target.followers.push(me.id);
  }
  saveState();
  render();
}

function toggleLike(postId) {
  const me = currentUser();
  const post = findPost(postId);
  if (!me || !post) return;
  post.likes = post.likes.includes(me.id)
    ? post.likes.filter((id) => id !== me.id)
    : [...post.likes, me.id];
  saveState();
  render();
}

async function createPost(event) {
  event.preventDefault();
  const me = currentUser();
  if (!me) return;
  const form = event.currentTarget;
  const data = new FormData(form);
  const capturedImage = String(data.get("capturedImage") || "");
  const postType = String(data.get("postType") || "post");
  const limit = postType === "story" ? 1 : 5;
  const files = Array.from(form.images.files || []).slice(0, limit);
  const uploadedImages =
    createSelectedMediaItems.length || !files.length
      ? []
      : await Promise.all(files.map(fileToDataUrl));
  const selectedImages = createMediaSources();
  const images = (selectedImages.length ? selectedImages : [capturedImage, ...uploadedImages].filter(Boolean)).slice(0, limit);
  const crops = createMediaCrops().slice(0, limit);
  const tags = String(data.get("tags") || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  if (postType === "story" && !tags.some((tag) => tag.toLowerCase() === "story")) tags.unshift("story");
  const post = {
    id: `p-${Date.now()}`,
    userId: me.id,
    text: String(data.get("text") || "").trim(),
    tags,
    images: images.length ? images : [HERO_IMAGE],
    crops: crops.length ? crops : [{ ...DEFAULT_CROP }],
    postType,
    createdAt: new Date().toISOString(),
    likes: [],
    comments: [],
    reports: [],
  };
  state.posts.unshift(post);
  saveState();
  stopCreateCamera();
  createSelectedMediaItems = [];
  routeTo(`#/post/${post.id}`);
}

function addComment(event, postId) {
  event.preventDefault();
  const me = currentUser();
  const post = findPost(postId);
  if (!me || !post) return;
  const text = new FormData(event.currentTarget).get("comment").trim();
  if (!text) return;
  post.comments.push({
    id: `c-${Date.now()}`,
    userId: me.id,
    text,
    createdAt: new Date().toISOString(),
  });
  saveState();
  render();
}

async function createDiscussion(event) {
  event.preventDefault();
  const me = currentUser();
  if (!me) return;
  const data = new FormData(event.currentTarget);
  const title = String(data.get("title") || "").trim();
  const text = String(data.get("text") || "").trim();
  const tags = String(data.get("tags") || "")
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  if (!title || !text) return;
  const discussion = {
    id: `d-${Date.now()}`,
    userId: me.id,
    ...authorSnapshot(me),
    title,
    text,
    tags,
    createdAt: new Date().toISOString(),
    likes: [],
    replies: [],
  };
  state.discussions.unshift(discussion);
  saveState();
  routeTo("#/search");
  try {
    await saveRemoteDiscussion(discussion);
    await loadRemoteDiscussions();
    render();
  } catch (error) {
    remoteDiscussionsError = error.message || "Не вдалося зберегти ветку онлайн.";
    console.warn("Could not save discussion online:", error);
  }
}

async function addDiscussionReply(event, discussionId) {
  event.preventDefault();
  const me = currentUser();
  const discussion = findDiscussion(discussionId);
  if (!me || !discussion) return;
  const text = String(new FormData(event.currentTarget).get("reply") || "").trim();
  if (!text) return;
  const reply = {
    id: `r-${Date.now()}`,
    userId: me.id,
    ...authorSnapshot(me),
    text,
    createdAt: new Date().toISOString(),
  };
  discussion.replies.push(reply);
  saveState();
  render();
  try {
    await saveRemoteReply(reply, discussionId);
    await loadRemoteDiscussions();
    render();
  } catch (error) {
    remoteDiscussionsError = error.message || "Не вдалося зберегти відповідь онлайн.";
    console.warn("Could not save reply online:", error);
  }
}

async function toggleDiscussionLike(discussionId) {
  const me = currentUser();
  const discussion = findDiscussion(discussionId);
  if (!me || !discussion) return;
  discussion.likes = discussion.likes.includes(me.id)
    ? discussion.likes.filter((id) => id !== me.id)
    : [...discussion.likes, me.id];
  saveState();
  render();
  try {
    await saveRemoteDiscussionLikes(discussion);
  } catch (error) {
    remoteDiscussionsError = error.message || "Не вдалося зберегти лайк онлайн.";
    console.warn("Could not save like online:", error);
  }
}

function deleteComment(postId, commentId) {
  const me = currentUser();
  const post = findPost(postId);
  if (!me || !post) return;
  post.comments = post.comments.filter((comment) => {
    const canDelete = me.id === comment.userId || me.isAdmin;
    return !(comment.id === commentId && canDelete);
  });
  saveState();
  render();
}

function reportPost(postId) {
  const me = currentUser();
  const post = findPost(postId);
  if (!me || !post) return;
  if (!post.reports.includes(me.id)) post.reports.push(me.id);
  saveState();
  alert("Скаргу збережено для перегляду адміністратором.");
  render();
}

function deletePost(postId) {
  const me = currentUser();
  if (!me?.isAdmin) return;
  state.posts = state.posts.filter((post) => post.id !== postId);
  saveState();
  renderAdmin();
}

function toggleBlockUser(userId) {
  const me = currentUser();
  const user = findUser(userId);
  if (!me?.isAdmin || !user || user.id === me.id) return;
  user.blocked = !user.blocked;
  saveState();
  renderAdmin();
}

function search(event) {
  event.preventDefault();
  const params = new URLSearchParams(new FormData(event.currentTarget));
  routeTo(`#/search?${params.toString()}`);
}

function drawerEventY(event) {
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  return touch?.clientY ?? event.clientY ?? Number(event.currentTarget.dataset.lastY || 0);
}

function startDrawerPull(event) {
  const summary = event.currentTarget;
  const y = drawerEventY(event);
  summary.dataset.startY = String(y);
  summary.dataset.lastY = String(y);
  summary.dataset.dragged = "false";
  summary.classList.add("is-pulling");
  try {
    if (event.pointerId !== undefined) summary.setPointerCapture?.(event.pointerId);
  } catch {}
}

function moveDrawerPull(event) {
  const summary = event.currentTarget;
  const details = summary.closest(".profile-drawer");
  if (!summary.dataset.startY || !details) return;
  const startY = Number(summary.dataset.startY);
  const y = drawerEventY(event);
  const delta = y - startY;
  const pull = details.open
    ? Math.min(0, Math.max(delta, -132))
    : Math.max(0, Math.min(delta, 132));
  if (Math.abs(delta) > 3) summary.dataset.dragged = "true";
  summary.dataset.lastY = String(y);
  summary.style.setProperty("--drawer-pull", `${pull}px`);
  if (Math.abs(delta) > 3 && event.cancelable) event.preventDefault();
}

function endDrawerPull(event) {
  const summary = event.currentTarget;
  const y = drawerEventY(event);
  const startY = Number(summary.dataset.startY || y);
  const details = summary.closest(".profile-drawer");
  const delta = y - startY;
  summary.classList.remove("is-pulling");
  try {
    if (event.pointerId !== undefined) summary.releasePointerCapture?.(event.pointerId);
  } catch {}
  if (details?.open && delta < -42) details.open = false;
  if (details && !details.open && delta > 42) details.open = true;
  summary.style.setProperty("--drawer-pull", "0px");
  window.setTimeout(() => {
    delete summary.dataset.startY;
    delete summary.dataset.lastY;
    delete summary.dataset.dragged;
  }, 0);
}

function cancelDrawerPull(event) {
  const summary = event.currentTarget;
  summary.classList.remove("is-pulling");
  summary.style.setProperty("--drawer-pull", "0px");
  try {
    if (event.pointerId !== undefined) summary.releasePointerCapture?.(event.pointerId);
  } catch {}
  delete summary.dataset.startY;
  delete summary.dataset.lastY;
  delete summary.dataset.dragged;
}

function handleDrawerClick(event) {
  const summary = event.currentTarget;
  if (summary.dataset.dragged === "true") event.preventDefault();
}

function render() {
  const hash = getHash();
  const [path] = hash.split("?");
  const parts = path.replace("#/", "").split("/");
  const screen = parts[0] || "feed";
  const id = parts[1];

  if (screen !== "create-post") stopCreateCamera();

  if (screen === "login") return renderLogin();
  if (screen === "register") return renderRegister();
  if (screen === "onboarding") return renderOnboarding();
  if (screen === "profile") return renderProfile(id);
  if (screen === "edit-profile") return renderEditProfile();
  if (screen === "create-post") return renderCreatePost();
  if (screen === "post") return renderPostPage(id);
  if (screen === "search") return renderSearch();
  if (screen === "admin") return renderAdmin();
  return renderFeed();
}

window.App = {
  addComment,
  addDiscussionReply,
  adjustCreateCrop,
  captureCreatePhoto,
  closeCreateDetails,
  createDiscussion,
  createPost,
  deleteComment,
  deletePost,
  endCreateCropDrag,
  login,
  logout,
  register,
  reportPost,
  resetState,
  resetCreateCrop,
  saveOnboarding,
  saveProfile,
  search,
  setCreateCropScale,
  startDrawerPull,
  moveDrawerPull,
  endDrawerPull,
  cancelDrawerPull,
  handleDrawerClick,
  moveCreateCropDrag,
  openCreateCapture,
  openCreateGallery,
  openCreateDetails,
  previewCreateMedia,
  drawerEventY,
  selectCreateMedia,
  selectCreatePreview,
  startCreateCropDrag,
  setCreateMode,
  toggleBlockUser,
  toggleDiscussionLike,
  toggleFollow,
  toggleLike,
};

function renderWithTransition() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!didInitialRender || reduceMotion || !document.startViewTransition) {
    render();
    didInitialRender = true;
    return;
  }
  document.startViewTransition(() => render());
}

async function initializeApp() {
  await loadRemoteDiscussions();
  renderWithTransition();
}

window.addEventListener("hashchange", renderWithTransition);
window.addEventListener("DOMContentLoaded", initializeApp);
