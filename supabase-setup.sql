create table if not exists public.discussions (
  id text primary key,
  user_id text not null,
  author_nickname text not null default 'Користувач',
  author_avatar text not null default '',
  title text not null,
  body text not null,
  tags text[] not null default '{}',
  likes text[] not null default '{}',
  created_at timestamptz not null default now()
);

create table if not exists public.discussion_replies (
  id text primary key,
  discussion_id text not null references public.discussions(id) on delete cascade,
  user_id text not null,
  author_nickname text not null default 'Користувач',
  author_avatar text not null default '',
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.discussions enable row level security;
alter table public.discussion_replies enable row level security;

drop policy if exists "Anyone can read discussions" on public.discussions;
drop policy if exists "Anyone can create discussions" on public.discussions;
drop policy if exists "Anyone can update discussion likes" on public.discussions;
drop policy if exists "Anyone can read discussion replies" on public.discussion_replies;
drop policy if exists "Anyone can create discussion replies" on public.discussion_replies;

create policy "Anyone can read discussions"
on public.discussions for select
using (true);

create policy "Anyone can create discussions"
on public.discussions for insert
with check (true);

create policy "Anyone can update discussion likes"
on public.discussions for update
using (true)
with check (true);

create policy "Anyone can read discussion replies"
on public.discussion_replies for select
using (true);

create policy "Anyone can create discussion replies"
on public.discussion_replies for insert
with check (true);

insert into public.discussions
  (id, user_id, author_nickname, title, body, tags, likes, created_at)
values
  (
    'd-1',
    'u-marta',
    'GothicGhoulShelf',
    'Новий реліз Monster High: хто вже дивився фото?',
    'Мені подобається силует і взуття, але обличчя на промо здається трохи пласким. Цікаво, це світло таке чи реально інший друк?',
    array['Monster High', 'release', 'news'],
    array['u-me', 'u-lina'],
    '2026-06-06T09:30:00.000Z'
  ),
  (
    'd-2',
    'u-orion',
    'BJDAtelier',
    'BJD очі 12 мм: скло чи уретан для холодного face-up?',
    'Потрібна порада для персонажа з сірим мейком. Скло дає класну глибину, але уретан іноді виглядає живіше на фото.',
    array['BJD', 'custom', 'advice'],
    array['u-me'],
    '2026-06-05T16:20:00.000Z'
  ),
  (
    'd-3',
    'u-lina',
    'PastelPullip',
    'Де зараз зручніше відстежувати маленькі релізи Pullip?',
    'Офіційні анонси бачу не завжди, а в інстаграмі все губиться. Може, у когось є список магазинів або акаунтів, які постять швидко?',
    array['Pullip', 'shops', 'release'],
    array['u-marta'],
    '2026-06-04T13:05:00.000Z'
  )
on conflict (id) do nothing;

insert into public.discussion_replies
  (id, discussion_id, user_id, author_nickname, body, created_at)
values
  (
    'r-1',
    'd-1',
    'u-me',
    'NikaShelf',
    'Я теж помітила друк. Чекаю живі фото від перших покупців, промо часто обманює.',
    '2026-06-06T10:12:00.000Z'
  ),
  (
    'r-2',
    'd-1',
    'u-lina',
    'PastelPullip',
    'Одяг виглядає краще, ніж я очікувала. Якщо волосся буде нормальне, можливо візьму.',
    '2026-06-06T11:04:00.000Z'
  ),
  (
    'r-3',
    'd-2',
    'u-lina',
    'PastelPullip',
    'Для холодного образу я б брала скло, але не надто прозоре, щоб не було порожнього погляду.',
    '2026-06-05T17:02:00.000Z'
  )
on conflict (id) do nothing;
