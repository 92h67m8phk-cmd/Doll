const STORE_KEY = "dollshelf-mvp-state-v1";
const OWNER_ACCESS_KEY = "dollshelf-owner-access-v1";
const HERO_IMAGE = "./assets/collector-shelf.png";
const SUPABASE_URL = "https://aqpmkmlrukvwmqmctqxw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_v5BirRwb1zU_GPuKriW7gQ_8UwzEWZ-";
const ADMIN_USER_ID = "u-me";

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

function compactTagValue(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function buildToyTag(type, canonical, ru, uk, aliases = []) {
  const labels = {
    en: canonical,
    ru: ru || canonical,
    uk: uk || ru || canonical,
  };
  const searchable = [...new Set([canonical, labels.ru, labels.uk, ...aliases].map(compactTagValue).filter(Boolean))];
  return { type, canonical, labels, aliases: searchable };
}

const TOY_BRANDS = [
  buildToyTag("brand", "Barbie", "Барби", "Барбі"),
  buildToyTag("brand", "Monster High", "Монстер Хай", "Монстер Хай"),
  buildToyTag("brand", "Ever After High", "Эвер Афтер Хай", "Евер Афтер Хай"),
  buildToyTag("brand", "Bratz", "Братц", "Братц"),
  buildToyTag("brand", "Bratzillaz", "Братзиллаз", "Братзіллаз"),
  buildToyTag("brand", "Rainbow High", "Рейнбоу Хай", "Рейнбоу Хай"),
  buildToyTag("brand", "Shadow High", "Шэдоу Хай", "Шедоу Хай"),
  buildToyTag("brand", "Pullip", "Пуллип", "Пулліп"),
  buildToyTag("brand", "Blythe", "Блайз", "Блайз"),
  buildToyTag("brand", "BJD", "БЖД", "БЖД"),
  buildToyTag("brand", "LOL OMG", "ЛОЛ ОМГ", "ЛОЛ ОМГ"),
  buildToyTag("brand", "My Scene", "Май Син", "Май Сін"),
  buildToyTag("brand", "Enchantimals", "Энчантималс", "Енчантімалс"),
];

const TOY_CHARACTERS = [
  buildToyTag("character", 'Barbie "Malibu" Roberts', 'Барби "Малибу" Робертс', 'Барбі "Малібу" Робертс', ["malibu roberts"]),
  buildToyTag("character", 'Barbie "Brooklyn" Roberts', 'Барби "Бруклин" Робертс', 'Барбі "Бруклін" Робертс', ["brooklyn roberts"]),
  buildToyTag("character", "Ken", "Кен", "Кен"),
  buildToyTag("character", "Skipper", "Скиппер", "Скіппер"),
  buildToyTag("character", "Chelsea", "Челси", "Челсі"),
  buildToyTag("character", "Stacie", "Стейси", "Стейсі"),
  buildToyTag("character", "Teresa", "Тереза", "Тереза"),
  buildToyTag("character", "Christie", "Кристи", "Крісті"),
  buildToyTag("character", "Midge", "Мидж", "Мідж"),
  buildToyTag("character", "Raquelle", "Ракель", "Ракель"),
  buildToyTag("character", "Nikki", "Никки", "Ніккі"),
  buildToyTag("character", "Summer", "Саммер", "Саммер"),
  buildToyTag("character", "Teresa Rivera", "Тереза Ривера", "Тереза Рівера"),
  buildToyTag("character", "Frankie Stein", "Фрэнки Штейн", "Френкі Штейн"),
  buildToyTag("character", "Draculaura", "Дракулаура", "Дракулаура"),
  buildToyTag("character", "Clawdeen Wolf", "Клодин Вульф", "Клодін Вульф"),
  buildToyTag("character", "Cleo de Nile", "Клео де Нил", "Клео де Ніл"),
  buildToyTag("character", "Lagoona Blue", "Лагуна Блю", "Лагуна Блю"),
  buildToyTag("character", "Ghoulia Yelps", "Гулия Йелпс", "Гулія Єлпс"),
  buildToyTag("character", "Abbey Bominable", "Эбби Боминейбл", "Еббі Бомінейбл"),
  buildToyTag("character", "Deuce Gorgon", "Дьюс Горгон", "Дьюс Горгон"),
  buildToyTag("character", "Venus McFlytrap", "Венус Макфлайтрап", "Венус Макфлайтрап"),
  buildToyTag("character", "Toralei Stripe", "Торалей Страйп", "Торалей Страйп"),
  buildToyTag("character", "Spectra Vondergeist", "Спектра Вондергейст", "Спектра Вондергайст"),
  buildToyTag("character", "Operetta", "Оперетта", "Оперетта"),
  buildToyTag("character", "Robecca Steam", "Робекка Стим", "Робекка Стім"),
  buildToyTag("character", "Twyla", "Твайла", "Твайла"),
  buildToyTag("character", "Catty Noir", "Кэтти Нуар", "Кетті Нуар"),
  buildToyTag("character", "Howleen Wolf", "Хоулин Вульф", "Говлін Вульф"),
  buildToyTag("character", "Clawd Wolf", "Клод Вульф", "Клод Вульф"),
  buildToyTag("character", "Heath Burns", "Хит Бёрнс", "Гіт Бернс"),
  buildToyTag("character", "Manny Taur", "Мэнни Таур", "Менні Таур"),
  buildToyTag("character", "Iris Clops", "Айрис Клопс", "Айріс Клопс"),
  buildToyTag("character", "Catrine DeMew", "Катрин ДеМяу", "Катрін ДеМяу"),
  buildToyTag("character", "Gigi Grant", "Джиджи Грант", "ДжіДжі Грант"),
  buildToyTag("character", "Whisp Grant", "Висп Грант", "Вісп Грант"),
  buildToyTag("character", "Sirena Von Boo", "Сирена Вон Бу", "Сірена Вон Бу"),
  buildToyTag("character", "Bonita Femur", "Бонита Фемур", "Боніта Фемур"),
  buildToyTag("character", "Avea Trotter", "Авеа Троттер", "Авеа Троттер"),
  buildToyTag("character", "Kala Mer'ri", "Кала Мерри", "Кала Меррі", ["kala merri"]),
  buildToyTag("character", "Peri and Pearl Serpentine", "Пери и Перл Серпентин", "Пері та Перл Серпентін"),
  buildToyTag("character", "Moanica D'Kay", "Моника Д'Кей", "Моніка Д'Кей"),
  buildToyTag("character", "Ari Hauntington", "Ари Хонтингтон", "Арі Гонтінгтон"),
  buildToyTag("character", "Silvi Timberwolf", "Сильви Тимбервульф", "Сільві Тімбервульф"),
  buildToyTag("character", "Dayna Treasura Jones", "Дэйна Трежера Джонс", "Дейна Трежера Джонс"),
  buildToyTag("character", "Posea Reef", "Посеа Риф", "Посеа Ріф"),
  buildToyTag("character", "Rochelle Goyle", "Рошель Гойл", "Рошель Гойл"),
  buildToyTag("character", "Jane Boolittle", "Джейн Булиттл", "Джейн Булітл"),
  buildToyTag("character", "Elissabat", "Эллисабэт", "Еллісабет"),
  buildToyTag("character", "Honey Swamp", "Хани Свомп", "Гані Свомп"),
  buildToyTag("character", "Viperine Gorgon", "Вайперин Горгон", "Вайперін Горгон"),
  buildToyTag("character", "Isi Dawndancer", "Иси Даунденсер", "Ісі Даунденсер"),
  buildToyTag("character", "Kjersti Trollson", "Кьерсти Троллсон", "К'єрсті Троллсон"),
  buildToyTag("character", "Amanita Nightshade", "Аманита Найтшейд", "Аманіта Найтшейд"),
  buildToyTag("character", "Astranova", "Астронова", "Астронова"),
  buildToyTag("character", "Nefera de Nile", "Нефера де Нил", "Нефера де Ніл"),
  buildToyTag("character", "C.A. Cupid", "Си Эй Кьюпид", "Сі Ей К'юпід", ["ca cupid", "c.a. cupid"]),
  buildToyTag("character", "Apple White", "Эппл Уайт", "Еппл Вайт"),
  buildToyTag("character", "Raven Queen", "Рэйвен Квин", "Рейвен Квін"),
  buildToyTag("character", "Briar Beauty", "Браер Бьюти", "Браєр Б'юті"),
  buildToyTag("character", "Ashlynn Ella", "Эшлин Элла", "Ешлін Елла"),
  buildToyTag("character", "Cerise Hood", "Сериз Худ", "Серіз Худ"),
  buildToyTag("character", "Darling Charming", "Дарлинг Чарминг", "Дарлінг Чармінг"),
  buildToyTag("character", "Kitty Cheshire", "Китти Чешир", "Кітті Чешир"),
  buildToyTag("character", "Madeline Hatter", "Мэдлин Хэттер", "Медлін Геттер"),
  buildToyTag("character", "Lizzie Hearts", "Лиззи Хартс", "Ліззі Гартс"),
  buildToyTag("character", "Rosabella Beauty", "Розабелла Бьюти", "Розабелла Б'юті"),
  buildToyTag("character", "Cedar Wood", "Сидар Вуд", "Сідар Вуд"),
  buildToyTag("character", "Holly O'Hair", "Холли О'Хэйр", "Голлі О'Гейр"),
  buildToyTag("character", "Poppy O'Hair", "Поппи О'Хэйр", "Поппі О'Гейр"),
  buildToyTag("character", "Ruby Anderson", "Руби Андерсон", "Рубі Андерсон"),
  buildToyTag("character", "Poppy Rowan", "Поппи Роуэн", "Поппі Ровен"),
  buildToyTag("character", "Sunny Madison", "Санни Мэдисон", "Санні Медісон"),
  buildToyTag("character", "Jade Hunter", "Джейд Хантер", "Джейд Гантер"),
  buildToyTag("character", "Skyler Bradshaw", "Скайлер Брэдшоу", "Скайлер Бредшоу"),
  buildToyTag("character", "Violet Willow", "Вайолет Уиллоу", "Вайолет Віллоу"),
  buildToyTag("character", "Avery Styles", "Эйвери Стайлз", "Ейвері Стайлз"),
  buildToyTag("character", "Bella Parker", "Белла Паркер", "Белла Паркер"),
  buildToyTag("character", "Amaya Raine", "Амайя Рейн", "Амайя Рейн"),
  buildToyTag("character", "Delilah Fields", "Делайла Филдс", "Делайла Філдс"),
  buildToyTag("character", "Shanelle Onyx", "Шанель Оникс", "Шанель Онікс"),
  buildToyTag("character", "Natasha Zima", "Наташа Зима", "Наташа Зима"),
  buildToyTag("character", "Cloe", "Клое", "Клое"),
  buildToyTag("character", "Yasmin", "Ясмин", "Ясмін"),
  buildToyTag("character", "Jade", "Джейд", "Джейд"),
  buildToyTag("character", "Sasha", "Саша", "Саша"),
  buildToyTag("character", "Meygan", "Мейган", "Мейган"),
  buildToyTag("character", "Raya", "Райя", "Рая"),
  buildToyTag("character", "Nevra", "Невра", "Невра"),
  buildToyTag("character", "Fianna", "Фианна", "Фіанна"),
  buildToyTag("character", "Dana", "Дана", "Дана"),
  buildToyTag("character", "Kumi", "Куми", "Кумі"),
  buildToyTag("character", "Roxxi", "Рокси", "Роксі"),
  buildToyTag("character", "Phoebe", "Фиби", "Фібі"),
  buildToyTag("character", "Roxxi and Phoebe", "Рокси и Фиби", "Роксі та Фібі", ["roxxi & phoebe"]),
  buildToyTag("character", "Felicia", "Фелиция", "Фелісія"),
  buildToyTag("character", "Tiana", "Тиана", "Тіана"),
  buildToyTag("character", "Kiana", "Киана", "Кіана"),
  buildToyTag("character", "Dylan", "Дилан", "Ділан"),
  buildToyTag("character", "Cameron", "Кэмерон", "Кемерон"),
  buildToyTag("character", "Eitan", "Эйтан", "Ейтан"),
  buildToyTag("character", "Pullip", "Пуллип", "Пулліп"),
  buildToyTag("character", "Taeyang", "Тэянг", "Теянг"),
  buildToyTag("character", "Dal", "Дал", "Дал"),
  buildToyTag("character", "Byul", "Бюл", "Бюл"),
  buildToyTag("character", "Isul", "Исуль", "Ісуль"),
  buildToyTag("character", "Yeolume", "Ёлуме", "Йолуме"),
  buildToyTag("character", "Namu", "Наму", "Наму"),
];

const TOY_COLLECTIONS = [
  buildToyTag("collection", "Fashionistas", "Фэшенистас", "Фешеністаc"),
  buildToyTag("collection", "Totally Hair", "Тоталли Хэир", "Тоталлі Хеєр"),
  buildToyTag("collection", "Color Reveal", "Колор Ривил", "Колор Рівіл"),
  buildToyTag("collection", "Extra", "Экстра", "Екстра"),
  buildToyTag("collection", "Looks", "Лукс", "Лукс"),
  buildToyTag("collection", "Signature", "Сигнатур", "Сігнатур"),
  buildToyTag("collection", "Collector", "Коллектор", "Колектор"),
  buildToyTag("collection", "BMR1959", "Би-Эм-Ар 1959", "Бі-Ем-Ар 1959"),
  buildToyTag("collection", "Made to Move", "Мейд ту Мув", "Мейд ту Мув"),
  buildToyTag("collection", "Cutie Reveal", "Кьюти Ривил", "К'юті Рівіл"),
  buildToyTag("collection", "Extra Fancy", "Экстра Фэнси", "Екстра Фенсі"),
  buildToyTag("collection", "Rewind", "Ривайнд", "Рівайнд"),
  buildToyTag("collection", "Dreamhouse Adventures", "Приключения в Дримхаусе", "Пригоди в Дрімгаусі", ["dream house adventures"]),
  buildToyTag("collection", "Generation Girl", "Дженерейшн Герл", "Дженерейшн Герл"),
  buildToyTag("collection", "Happy Family", "Хэппи Фэмили", "Хеппі Фемілі"),
  buildToyTag("collection", "I Can Be", "Ай Кэн Би", "Ай Кен Бі"),
  buildToyTag("collection", "Kelly Club", "Келли Клаб", "Келлі Клаб"),
  buildToyTag("collection", "So In Style", "Со Ин Стайл", "Со Ін Стайл"),
  buildToyTag("collection", "My Scene", "Май Син", "Май Сін"),
  buildToyTag("collection", "Haunt Couture", "Хонт Кутюр", "Гонт Кутюр"),
  buildToyTag("collection", "Boo-riginal Creeproductions", "Бу-ригинал Крипродакшнс", "Бу-ригінал Кріпродакшнс"),
  buildToyTag("collection", "Creeproductions", "Крипродакшнс", "Кріпродакшнс"),
  buildToyTag("collection", "Skullector", "Скуллектор", "Скуллектор"),
  buildToyTag("collection", "Monster Fest", "Монстер Фест", "Монстер Фест"),
  buildToyTag("collection", "Sweet Screams", "Свит Скримс", "Світ Скрімс"),
  buildToyTag("collection", "Sweet 1600", "Свит 1600", "Світ 1600"),
  buildToyTag("collection", "13 Wishes", "13 Желаний", "13 Бажань"),
  buildToyTag("collection", "Haunted", "Хонтед", "Гонтед"),
  buildToyTag("collection", "Scaris", "Скарис", "Скаріс"),
  buildToyTag("collection", "Ghouls Rule", "Гулс Рул", "Гулс Рул"),
  buildToyTag("collection", "Dawn of the Dance", "Доун оф зе Дэнс", "Доун оф зе Денс"),
  buildToyTag("collection", "Dead Tired", "Дэд Тайрд", "Дед Тайрд"),
  buildToyTag("collection", "Picture Day", "Пикчер Дэй", "Пікчер Дей"),
  buildToyTag("collection", "Freak du Chic", "Фрик дю Шик", "Фрік дю Шик"),
  buildToyTag("collection", "Freaky Fusion", "Фрики Фьюжн", "Фрікі Ф'южн"),
  buildToyTag("collection", "Boo York Boo York", "Бу Йорк Бу Йорк", "Бу Йорк Бу Йорк"),
  buildToyTag("collection", "Great Scarrier Reef", "Грейт Скарьер Риф", "Грейт Скар'єр Ріф"),
  buildToyTag("collection", "Art Class", "Арт Класс", "Арт Клас"),
  buildToyTag("collection", "Music Festival", "Мьюзик Фестиваль", "М'юзік Фестиваль"),
  buildToyTag("collection", "Monster Exchange", "Монстер Эксэндж", "Монстер Ексчендж"),
  buildToyTag("collection", "New Scaremester", "Нью Скэреместер", "Нью Скейреместер"),
  buildToyTag("collection", "Skulltimate Secrets", "Скултимейт Сикретс", "Скалтимейт Сікретс"),
  buildToyTag("collection", "Monster Ball", "Монстер Болл", "Монстер Бол"),
  buildToyTag("collection", "Fearidescent", "Фиридесент", "Фіридесент"),
  buildToyTag("collection", "Garden Ghouls", "Гарден Гулс", "Гарден Гулз"),
  buildToyTag("collection", "Shriekwrecked", "Шрикрект", "Шрікрект"),
  buildToyTag("collection", "Electrified", "Электрифайд", "Електрифайд"),
  buildToyTag("collection", "Welcome to Monster High", "Добро пожаловать в Монстер Хай", "Ласкаво просимо до Монстер Хай"),
  buildToyTag("collection", "Party Ghouls", "Пати Гулс", "Паті Гулз"),
  buildToyTag("collection", "Ghoul's Beast Pet", "Гулс Бист Пет", "Гулз Біст Пет"),
  buildToyTag("collection", "Frights Camera Action", "Фрайтс Кэмера Экшн", "Фрайтс Камера Екшн"),
  buildToyTag("collection", "Geek Shriek", "Гик Шрик", "Гік Шрік"),
  buildToyTag("collection", "I Heart Fashion", "Ай Харт Фэшн", "Ай Гарт Фешн"),
  buildToyTag("collection", "Coffin Bean", "Коффин Бин", "Коффін Бін"),
  buildToyTag("collection", "Dot Dead Gorgeous", "Дот Дэд Горджес", "Дот Дед Горджес"),
  buildToyTag("collection", "School's Out", "Скулз Аут", "Скулз Аут"),
  buildToyTag("collection", "Classroom", "Классрум", "Класрум"),
  buildToyTag("collection", "Create-a-Monster", "Криейт-а-Монстер", "Кріейт-а-Монстер"),
  buildToyTag("collection", "Dance Class", "Дэнс Класс", "Денс Клас"),
  buildToyTag("collection", "Die-ner", "Дай-нер", "Дай-нер"),
  buildToyTag("collection", "Getting Ghostly", "Геттинг Гостли", "Геттінг Гостлі"),
  buildToyTag("collection", "Ghoulebrities in Londoom", "Гулебритиз ин Лондум", "Гулебрітіс у Лондумі"),
  buildToyTag("collection", "Gloom and Bloom", "Глум энд Блум", "Глум енд Блум"),
  buildToyTag("collection", "Maul Monsteristas", "Мол Монстеристас", "Мол Монстерістас"),
  buildToyTag("collection", "Power Ghouls", "Пауэр Гулс", "Пауер Гулз"),
  buildToyTag("collection", "Scarnival", "Скарнивал", "Скарнівал"),
  buildToyTag("collection", "Student Disembody Council", "Студент Дисэмбоди Каунсил", "Студент Дісембоді Каунсіл"),
  buildToyTag("collection", "Swim Class", "Суим Класс", "Свім Клас"),
  buildToyTag("collection", "Zombie Shake", "Зомби Шейк", "Зомбі Шейк"),
  buildToyTag("collection", "Photo Booth Ghouls", "Фото Бут Гулс", "Фото Бут Гулз"),
  buildToyTag("collection", "Ghoul Spirit", "Гул Спирит", "Гул Спіріт"),
  buildToyTag("collection", "Friday Night Frights", "Фрайдей Найт Фрайтс", "Фрайдей Найт Фрайтс"),
  buildToyTag("collection", "Home Ick", "Хоум Ик", "Гоум Ік"),
  buildToyTag("collection", "Monsteristas", "Монстеристас", "Монстерістас"),
  buildToyTag("collection", "Faboolous Pets", "Фабулус Петс", "Фабулус Петс"),
  buildToyTag("collection", "Bite in the Park", "Байт ин зе Парк", "Байт ін зе Парк"),
  buildToyTag("collection", "Skulltimate Roller Maze", "Скултимейт Роллер Мейз", "Скалтимейт Роллер Мейз"),
  buildToyTag("collection", "Monsteristas Secrets", "Монстеристас Сикретс", "Монстерістас Сікретс"),
  buildToyTag("collection", "Series 1", "Серия 1", "Серія 1"),
  buildToyTag("collection", "Series 2", "Серия 2", "Серія 2"),
  buildToyTag("collection", "Series 3", "Серия 3", "Серія 3"),
  buildToyTag("collection", "Series 4", "Серия 4", "Серія 4"),
  buildToyTag("collection", "Series 5", "Серия 5", "Серія 5"),
  buildToyTag("collection", "Junior High", "Джуниор Хай", "Джуніор Хай"),
  buildToyTag("collection", "Pacific Coast", "Пасифик Кост", "Пасифік Кост"),
  buildToyTag("collection", "Rainbow Vision", "Рейнбоу Вижн", "Рейнбоу Віжн"),
  buildToyTag("collection", "Fantastic Fashion", "Фантастик Фэшн", "Фантастік Фешн"),
  buildToyTag("collection", "Costume Ball", "Костюм Болл", "Костюм Бол"),
  buildToyTag("collection", "Slumber Party", "Сламбер Пати", "Сламбер Паті"),
  buildToyTag("collection", "Winter Break", "Винтер Брейк", "Вінтер Брейк"),
  buildToyTag("collection", "Littles", "Литлс", "Літлз"),
  buildToyTag("collection", "Shadow High Series 1", "Шэдоу Хай Серия 1", "Шедоу Хай Серія 1"),
  buildToyTag("collection", "Shadow High Series 2", "Шэдоу Хай Серия 2", "Шедоу Хай Серія 2"),
  buildToyTag("collection", "Shadow High Series 3", "Шэдоу Хай Серия 3", "Шедоу Хай Серія 3"),
  buildToyTag("collection", "Rock Angelz", "Рок Энджелз", "Рок Енджелз"),
  buildToyTag("collection", "Pretty 'N' Punk", "Претти энд Панк", "Претті енд Панк"),
  buildToyTag("collection", "Girls Nite Out", "Гёрлз Найт Аут", "Гьорлз Найт Аут"),
  buildToyTag("collection", "Formal Funk", "Формал Фанк", "Формал Фанк"),
  buildToyTag("collection", "Tokyo A Go-Go", "Токио А Гоу-Гоу", "Токіо А Гоу-Гоу"),
  buildToyTag("collection", "Treasures", "Трежерс", "Трежерс"),
  buildToyTag("collection", "Midnight Dance", "Миднайт Дэнс", "Міднайт Денс"),
  buildToyTag("collection", "Genie Magic", "Джинни Мэджик", "Джині Меджик"),
  buildToyTag("collection", "Passion 4 Fashion", "Пэшн фор Фэшн", "Пешн фор Фешн"),
  buildToyTag("collection", "Passion 4 Fashion Diamondz", "Пэшн фор Фэшн Даймондз", "Пешн фор Фешн Даймондз"),
  buildToyTag("collection", "Wild Wild West", "Вайлд Вайлд Вест", "Вайлд Вайлд Вест"),
  buildToyTag("collection", "Wintertime Wonderland", "Винтертайм Вандерленд", "Вінтертайм Вандерленд"),
  buildToyTag("collection", "Hollywood Style", "Голливуд Стайл", "Голлівуд Стайл"),
  buildToyTag("collection", "Princess", "Принцесс", "Принцес"),
  buildToyTag("collection", "Sweet Dreamz", "Свит Дримз", "Світ Дрімз"),
  buildToyTag("collection", "Play Sportz", "Плэй Спортз", "Плей Спортз"),
  buildToyTag("collection", "Ice Champions", "Айс Чемпионс", "Айс Чемпіонс"),
  buildToyTag("collection", "Step Out", "Степ Аут", "Степ Аут"),
  buildToyTag("collection", "Alwayz Bratz", "Олвейз Братц", "Олвейз Братц"),
  buildToyTag("collection", "Bratz Babyz", "Братц Бэбиз", "Братц Бебіз"),
  buildToyTag("collection", "Bratz Kidz", "Братц Кидз", "Братц Кідз"),
  buildToyTag("collection", "Bratz Boyz", "Братц Бойз", "Братц Бойз"),
  buildToyTag("collection", "Bratz Collector", "Братц Коллектор", "Братц Колектор"),
  buildToyTag("collection", "Another Alice", "Аназер Элис", "Аназер Еліс"),
  buildToyTag("collection", "Rozen Maiden", "Розен Мэйден", "Розен Мейден"),
  buildToyTag("collection", "Little Pullip", "Литл Пуллип", "Літл Пулліп"),
  buildToyTag("collection", "Neo Blythe", "Нео Блайз", "Нео Блайз"),
  buildToyTag("collection", "Middie Blythe", "Мидди Блайз", "Мідді Блайз"),
  buildToyTag("collection", "Petite Blythe", "Петит Блайз", "Петі Блайз"),
];

const TOY_TAG_DICTIONARY = [...TOY_BRANDS, ...TOY_CHARACTERS, ...TOY_COLLECTIONS];
const POST_TAG_CATALOG = TOY_TAG_DICTIONARY.map((entry) => entry.canonical);
const PROFILE_SHELF_SECTIONS = ["collection", "wishlist"];
const PROFILE_SHELF_COLUMN_OPTIONS = [2, 3];
const PROFILE_SHELF_THEMES = {
  rose: ["#f8dceb", "#d98bb6", "#6e3b5d"],
  moon: ["#e2e6ff", "#92a2f3", "#394585"],
  sage: ["#efe2f3", "#b68fd3", "#5c3f71"],
  ink: ["#e5e3f6", "#9b92d9", "#453e72"],
  mint: ["#e2ebff", "#83a8f2", "#325295"],
  noir: ["#eadff0", "#ab87bc", "#533764"],
  sunset: ["#f6deef", "#d38eb8", "#74466b"],
  porcelain: ["#f8edf8", "#cab1df", "#6f5b85"],
};
const WISHLIST_CREATE_FIELD_LIMIT = 3;
const PROFILE_SHELF_SORT_OPTIONS = [
  { value: "recent", label: "Сначала новые" },
  { value: "brand", label: "По бренду" },
  { value: "collection", label: "По серии" },
  { value: "purchaseDate", label: "По дате покупки" },
];
const PROFILE_SHELF_FILTER_OPTIONS = [
  { value: "all", label: "Вся коллекция" },
  { value: "collection", label: "В коллекции" },
  { value: "sale", label: "На продаже" },
  { value: "sold", label: "Продана" },
  { value: "trade", label: "В обмен" },
];
const COLLECTION_STATUS_OPTIONS = [
  { value: "collection", label: "В коллекции" },
  { value: "sale", label: "На продаже" },
  { value: "sold", label: "Продана" },
  { value: "trade", label: "В обмен" },
];
const COLLECTION_CONDITION_OPTIONS = [
  { value: "nrfb", label: "NRFB" },
  { value: "opened", label: "Открыта" },
  { value: "used", label: "Б/у" },
  { value: "incomplete", label: "Некомплект" },
  { value: "damaged", label: "С дефектом" },
];
const COLLECTION_COMPLETENESS_OPTIONS = [
  { value: "full", label: "Полный комплект" },
  { value: "no-box", label: "Без коробки" },
  { value: "no-accessories", label: "Без аксессуаров" },
];
const COLLECTION_CUSTOMIZATION_OPTIONS = [
  { value: "original", label: "Оригинал" },
  { value: "partial-custom", label: "Частичный кастом" },
  { value: "full-custom", label: "Полный кастом" },
];

const DEFAULT_STATE = {
  currentUserId: null,
  profileShelfColumns: 2,
  profileShelfSort: "recent",
  profileShelfFilter: "all",
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
      collectionDolls: [
        {
          id: "shelf-me-1",
          name: "Minifee Chloe",
          line: "fairy wardrobe",
          note: "face-up restored and back on display",
          accent: "display favorite",
          palette: "moon",
        },
        {
          id: "shelf-me-2",
          name: "Vintage Barbie",
          line: "silk evening set",
          note: "original jewelry and stand kept together",
          accent: "1970s shelf",
          palette: "rose",
        },
        {
          id: "shelf-me-3",
          name: "Barbie Looks 13",
          line: "silver city styling",
          note: "restyled for photo corners and feed shots",
          accent: "photo ready",
          palette: "ink",
        },
        {
          id: "shelf-me-4",
          name: "Unoa Lusis",
          line: "lace study",
          note: "custom wig 1/4 and soft ivory layers",
          accent: "work in progress",
          palette: "sage",
        },
      ],
      wishlistDolls: [
        {
          id: "wish-me-1",
          name: "Pullip Classical Alice",
          brand: "Pullip",
          collectionName: "Classical Alice",
          line: "dream grail",
          note: "still waiting for a clean complete set",
          estimatedPrice: 410,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "porcelain",
        },
        {
          id: "wish-me-2",
          name: "Blythe Prima Dolly",
          brand: "Neo Blythe",
          collectionName: "Prima Dolly",
          line: "soft retro shelf",
          note: "already found through a trusted collector",
          estimatedPrice: 185,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: true,
          palette: "mint",
        },
        {
          id: "wish-me-3",
          name: "Monster High Elissabat",
          brand: "Monster High",
          collectionName: "Signature / G1",
          line: "boxed first wave",
          note: "watching listings and saving price history",
          estimatedPrice: 240,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "noir",
        },
        {
          id: "wish-me-4",
          name: "Barbie BMR1959 Midge",
          brand: "Barbie",
          collectionName: "BMR1959",
          line: "display pairing",
          note: "reserved, just waiting to arrive home",
          estimatedPrice: 95,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: true,
          palette: "sunset",
        },
      ],
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
      collectionDolls: [
        {
          id: "shelf-lina-1",
          name: "Pullip Alice du Jardin",
          line: "pastel tea shelf",
          note: "styled with tiny glasses and ribbon socks",
          accent: "main shelf",
          palette: "mint",
        },
        {
          id: "shelf-lina-2",
          name: "Neo Blythe Coco",
          line: "strawberry room",
          note: "kept near handmade knit cardigans",
          accent: "mini studio",
          palette: "rose",
        },
        {
          id: "shelf-lina-3",
          name: "Dal Pixie",
          line: "soft lilac display",
          note: "tiny baskets and paper florals included",
          accent: "storybook",
          palette: "porcelain",
        },
        {
          id: "shelf-lina-4",
          name: "Petite Blythe",
          line: "travel shelf",
          note: "smallest shelf friend for bag photos",
          accent: "carry favorite",
          palette: "sunset",
        },
      ],
      wishlistDolls: [
        {
          id: "wish-lina-1",
          name: "Pullip Bonita",
          brand: "Pullip",
          collectionName: "Bonita",
          line: "soft gothic contrast",
          note: "looking for complete outfit and stand",
          estimatedPrice: 290,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "noir",
        },
        {
          id: "wish-lina-2",
          name: "Middie Blythe Sugar",
          brand: "Middie Blythe",
          collectionName: "Sugar",
          line: "tiny shelf color",
          note: "already secured from a local meetup",
          estimatedPrice: 145,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: true,
          palette: "mint",
        },
        {
          id: "wish-lina-3",
          name: "Pullip Alice in Steampunk",
          brand: "Pullip",
          collectionName: "Alice in Steampunk World",
          line: "cabinet grail",
          note: "tracking restocks and collector groups",
          estimatedPrice: 350,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "ink",
        },
      ],
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
      collectionDolls: [
        {
          id: "shelf-marta-1",
          name: "Draculaura Sweet 1600",
          line: "velvet display",
          note: "posed with black lace and chrome stand",
          accent: "gothic shelf",
          palette: "noir",
        },
        {
          id: "shelf-marta-2",
          name: "Frankie Stein G1",
          line: "storm cabinet",
          note: "repaired joints and softer lip repaint",
          accent: "restored",
          palette: "moon",
        },
        {
          id: "shelf-marta-3",
          name: "Elissabat",
          line: "dark cinema corner",
          note: "displayed with mirror props and dim lights",
          accent: "night setup",
          palette: "rose",
        },
        {
          id: "shelf-marta-4",
          name: "Rochelle Goyle",
          line: "stone lace mix",
          note: "paired with antique frames and silver chain",
          accent: "contrast piece",
          palette: "ink",
        },
      ],
      wishlistDolls: [
        {
          id: "wish-marta-1",
          name: "Draculaura Haunt Couture",
          brand: "Monster High",
          collectionName: "Haunt Couture",
          line: "boxed collector grail",
          note: "monitoring only trusted seller circles",
          estimatedPrice: 380,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "rose",
        },
        {
          id: "wish-marta-2",
          name: "Cleo de Nile First Wave",
          brand: "Monster High",
          collectionName: "First Wave / G1",
          line: "restoration candidate",
          note: "already found, waiting for delivery photos",
          estimatedPrice: 210,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: true,
          palette: "sunset",
        },
        {
          id: "wish-marta-3",
          name: "Operetta Dot Dead Gorgeous",
          brand: "Monster High",
          collectionName: "Dot Dead Gorgeous",
          line: "vinyl shelf dream",
          note: "still hunting with box in fair condition",
          estimatedPrice: 165,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "noir",
        },
      ],
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
      collectionDolls: [
        {
          id: "shelf-orion-1",
          name: "Doll Chateau Colin",
          line: "forest resin study",
          note: "matte face-up with moss green eyes",
          accent: "atelier favorite",
          palette: "sage",
        },
        {
          id: "shelf-orion-2",
          name: "Volks MSD F-18",
          line: "gray tailoring",
          note: "joint repair finished this spring",
          accent: "restored",
          palette: "ink",
        },
        {
          id: "shelf-orion-3",
          name: "Unoa Chibi",
          line: "soft fantasy pose",
          note: "kept for lighting and wig tests",
          accent: "studio helper",
          palette: "moon",
        },
      ],
      wishlistDolls: [
        {
          id: "wish-orion-1",
          name: "Switch Milhwa",
          brand: "Switch",
          collectionName: "Milhwa",
          line: "face-up project",
          note: "still collecting references before buying",
          estimatedPrice: 560,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "porcelain",
        },
        {
          id: "wish-orion-2",
          name: "Volks SDGr body",
          brand: "Volks",
          collectionName: "SDGr",
          line: "hybrid build",
          note: "found from a local trade circle",
          estimatedPrice: 420,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: true,
          palette: "sage",
        },
        {
          id: "wish-orion-3",
          name: "Luts Kid Delf",
          brand: "Luts",
          collectionName: "Kid Delf",
          line: "cold fantasy setup",
          note: "watching for neutral resin match",
          estimatedPrice: 330,
          currency: "$",
          priceUpdatedAt: "2026-06-18T00:15:00.000Z",
          purchased: false,
          palette: "moon",
        },
      ],
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
    {
      id: "p-4",
      userId: "u-me",
      text: "Зібрала вечірню мініполичку для BJD: холодне світло, мереживо і срібні дрібнички. Як вам настрій кадру?",
      tags: ["BJD", "fantasy", "shelf"],
      images: [HERO_IMAGE],
      createdAt: "2026-06-07T19:20:00.000Z",
      likes: ["u-lina", "u-marta"],
      comments: [
        {
          id: "c-3",
          userId: "u-orion",
          text: "Дуже влучне світло. Я б ще додав трохи прозорого скла на передній план.",
          createdAt: "2026-06-07T20:05:00.000Z",
        },
        {
          id: "c-4",
          userId: "u-lina",
          text: "Мені подобається, як мереживо пом'якшує весь кадр. Дуже атмосферно.",
          createdAt: "2026-06-07T21:18:00.000Z",
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
    {
      id: "d-4",
      userId: "u-me",
      title: "Покажете свої міні-куточки для BJD фотоісторій?",
      text: "Хочу зібрати ідеї для маленьких сцен: тканини, світло, підставки, фони і будь-які дрібниці, що працюють у кадрі.",
      tags: ["BJD", "photo setup", "advice"],
      createdAt: "2026-06-07T18:15:00.000Z",
      likes: ["u-lina"],
      replies: [
        {
          id: "r-4",
          userId: "u-marta",
          text: "Я часто беру темне дерево і теплі лампочки збоку. Навіть проста сцена одразу стає глибшою.",
          createdAt: "2026-06-07T19:02:00.000Z",
        },
        {
          id: "r-5",
          userId: "u-orion",
          text: "Спробуй матовий акрил як фон, він не дає зайвих відблисків і добре тримає холодний настрій.",
          createdAt: "2026-06-07T20:24:00.000Z",
        },
      ],
    },
  ],
  notifications: [
    {
      id: "n-1",
      type: "post-like",
      recipientUserId: "u-me",
      actorUserId: "u-lina",
      postId: "p-4",
      createdAt: "2026-06-07T19:52:00.000Z",
    },
    {
      id: "n-2",
      type: "post-like",
      recipientUserId: "u-me",
      actorUserId: "u-marta",
      postId: "p-4",
      createdAt: "2026-06-07T20:11:00.000Z",
    },
    {
      id: "n-3",
      type: "post-comment",
      recipientUserId: "u-me",
      actorUserId: "u-orion",
      postId: "p-4",
      commentId: "c-3",
      previewText: "Дуже влучне світло. Я б ще додав трохи прозорого скла на передній план.",
      createdAt: "2026-06-07T20:05:00.000Z",
    },
    {
      id: "n-4",
      type: "post-comment",
      recipientUserId: "u-me",
      actorUserId: "u-lina",
      postId: "p-4",
      commentId: "c-4",
      previewText: "Мені подобається, як мереживо пом'якшує весь кадр. Дуже атмосферно.",
      createdAt: "2026-06-07T21:18:00.000Z",
    },
    {
      id: "n-5",
      type: "discussion-like",
      recipientUserId: "u-me",
      actorUserId: "u-lina",
      discussionId: "d-4",
      createdAt: "2026-06-07T18:44:00.000Z",
    },
    {
      id: "n-6",
      type: "discussion-reply",
      recipientUserId: "u-me",
      actorUserId: "u-marta",
      discussionId: "d-4",
      replyId: "r-4",
      previewText: "Я часто беру темне дерево і теплі лампочки збоку. Навіть проста сцена одразу стає глибшою.",
      createdAt: "2026-06-07T19:02:00.000Z",
    },
    {
      id: "n-7",
      type: "discussion-reply",
      recipientUserId: "u-me",
      actorUserId: "u-orion",
      discussionId: "d-4",
      replyId: "r-5",
      previewText: "Спробуй матовий акрил як фон, він не дає зайвих відблисків і добре тримає холодний настрій.",
      createdAt: "2026-06-07T20:24:00.000Z",
    },
  ],
};

let state = loadState();
let createCameraStream = null;
let createSelectedMediaItems = [];
let createActiveMediaIndex = 0;
let createCropDrag = null;
let createSelectedTags = [];
let createTagQuery = "";
let createTagError = "";
let createTagLocale = "uk";
let discussionSelectedTags = [];
let discussionTagQuery = "";
let discussionTagError = "";
let discussionTagLocale = "uk";
const DEFAULT_CROP = { x: 50, y: 50, scale: 1 };
let lastMobileNavIndex = null;
let didInitialRender = false;
let remoteDiscussionsLoaded = false;
let remoteDiscussionsError = "";
let wishlistCreateDraft = emptyWishlistDraft();
let collectionCreateDraft = emptyCollectionDraft();
let collectionCreateStep = 1;
let collectionChoiceOpenField = "";
let collectionStorageOpen = false;
let profileShelfActionOpen = "";
let collectionImagePinch = null;
let collectionThumbDrag = null;
let suppressCollectionThumbClick = false;

function emptyWishlistDraft() {
  return {
    image: "",
    brand: "",
    collectionName: "",
    name: "",
    note: "",
    condition: "used",
  };
}

function emptyCollectionDraft() {
  return {
    images: [],
    activeImageIndex: 0,
    zoom: 1,
    brand: "",
    collectionName: "",
    name: "",
    memory: "",
    purchasePrice: "",
    currency: "$",
    status: "collection",
    condition: "opened",
    completeness: "full",
    customization: "original",
    purchaseDate: "",
    storageRoom: "",
    storageCabinet: "",
    storageShelf: "",
    storageBox: "",
  };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function mergeSeedCollection(defaultItems = [], savedItems = []) {
  const savedMap = new Map((savedItems || []).map((item) => [item.id, item]));
  const mergedDefaults = defaultItems.map((item) =>
    savedMap.has(item.id) ? { ...clone(item), ...clone(savedMap.get(item.id)) } : clone(item),
  );
  const extraSavedItems = (savedItems || [])
    .filter((item) => !defaultItems.some((seed) => seed.id === item.id))
    .map((item) => clone(item));
  return [...mergedDefaults, ...extraSavedItems];
}

function loadState() {
  const saved = localStorage.getItem(STORE_KEY);
  if (!saved) return clone(DEFAULT_STATE);
  try {
    const parsed = JSON.parse(saved);
    const savedAdminUser = (parsed.users || []).find((user) => user.id === ADMIN_USER_ID);
    if (parsed.currentUserId === ADMIN_USER_ID && savedAdminUser?.isAdmin) {
      localStorage.setItem(OWNER_ACCESS_KEY, "granted");
    }
    return {
      ...clone(DEFAULT_STATE),
      ...parsed,
      users: mergeSeedCollection(DEFAULT_STATE.users, parsed.users),
      posts: mergeSeedCollection(DEFAULT_STATE.posts, parsed.posts),
      discussions: mergeSeedCollection(DEFAULT_STATE.discussions, parsed.discussions),
      notifications: mergeSeedCollection(DEFAULT_STATE.notifications, parsed.notifications),
    };
  } catch {
    return clone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function hasOwnerAccess() {
  return localStorage.getItem(OWNER_ACCESS_KEY) === "granted";
}

function canAccessAdmin(user = currentUser()) {
  return Boolean(user && user.id === ADMIN_USER_ID && user.isAdmin && hasOwnerAccess());
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

function shortenText(value = "", limit = 92) {
  const source = String(value || "").trim();
  if (source.length <= limit) return source;
  return `${source.slice(0, Math.max(0, limit - 1)).trimEnd()}…`;
}

function createNotification({
  type,
  recipientUserId,
  actorUserId,
  postId = "",
  discussionId = "",
  commentId = "",
  replyId = "",
  previewText = "",
  createdAt = new Date().toISOString(),
}) {
  if (!type || !recipientUserId || !actorUserId || recipientUserId === actorUserId) return;
  state.notifications.unshift({
    id: `n-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    recipientUserId,
    actorUserId,
    postId,
    discussionId,
    commentId,
    replyId,
    previewText,
    createdAt,
  });
}

function removeNotifications(match) {
  state.notifications = (state.notifications || []).filter((notification) => !match(notification));
}

function notificationHref(notification) {
  if (notification.postId) {
    const commentQuery = notification.commentId ? `?comment=${encodeURIComponent(notification.commentId)}` : "";
    return `#/post/${notification.postId}${commentQuery}`;
  }
  if (notification.discussionId) {
    const replyQuery = notification.replyId ? `?reply=${encodeURIComponent(notification.replyId)}&from=notifications` : "?from=notifications";
    return `#/thread/${notification.discussionId}${replyQuery}`;
  }
  return "#/notifications";
}

function visibleNotifications(userId) {
  return (state.notifications || [])
    .filter((notification) => notification.recipientUserId === userId)
    .filter((notification) => {
      const actor = findUser(notification.actorUserId);
      if (!actor || actor.blocked) return false;
      if (notification.postId && !findPost(notification.postId)) return false;
      if (notification.discussionId && !findDiscussion(notification.discussionId)) return false;
      return true;
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

function notificationCount(user) {
  if (!user) return 0;
  return visibleNotifications(user.id).length;
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

function normalizeProfileSection(value = "") {
  return PROFILE_SHELF_SECTIONS.includes(value) ? value : "collection";
}

function normalizeProfileShelfColumns(value = 2) {
  const numeric = Number(value);
  return PROFILE_SHELF_COLUMN_OPTIONS.includes(numeric) ? numeric : 2;
}

function normalizeProfileShelfSort(value = "recent") {
  return PROFILE_SHELF_SORT_OPTIONS.some((option) => option.value === value) ? value : "recent";
}

function normalizeProfileShelfFilter(value = "all") {
  return PROFILE_SHELF_FILTER_OPTIONS.some((option) => option.value === value) ? value : "all";
}

function currentProfileShelfColumns() {
  return normalizeProfileShelfColumns(state.profileShelfColumns);
}

function currentProfileShelfSort() {
  return normalizeProfileShelfSort(state.profileShelfSort);
}

function currentProfileShelfFilter() {
  return normalizeProfileShelfFilter(state.profileShelfFilter);
}

function profileShelfHref(userId, section = "collection", params = {}) {
  const query = new URLSearchParams(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== ""),
  ).toString();
  const base = `#/profile/${userId}/${normalizeProfileSection(section)}`;
  return query ? `${base}?${query}` : base;
}

function shelfSectionIndex(section = "collection") {
  return PROFILE_SHELF_SECTIONS.indexOf(normalizeProfileSection(section));
}

function wishlistItemHref(userId, itemId) {
  return profileShelfHref(userId, "wishlist", { wish: itemId });
}

function wishlistCreateHref(userId) {
  return profileShelfHref(userId, "wishlist", { create: "wishlist" });
}

function collectionCreateHref(userId) {
  return profileShelfHref(userId, "collection", { create: "collection" });
}

function openWishlistItem(userId, itemId) {
  if (!userId || !itemId) return;
  routeTo(wishlistItemHref(userId, itemId));
}

function openWishlistCreate(userId) {
  if (!userId) return;
  wishlistCreateDraft = emptyWishlistDraft();
  routeTo(wishlistCreateHref(userId));
}

function openCollectionCreate(userId) {
  if (!userId) return;
  collectionCreateDraft = emptyCollectionDraft();
  collectionCreateStep = 1;
  collectionChoiceOpenField = "";
  collectionStorageOpen = false;
  collectionImagePinch = null;
  routeTo(collectionCreateHref(userId));
}

function closeWishlistCreate(userId) {
  if (!userId) return;
  wishlistCreateDraft = emptyWishlistDraft();
  routeTo(profileShelfHref(userId, "wishlist"));
}

function closeCollectionCreate(userId) {
  if (!userId) return;
  collectionCreateDraft = emptyCollectionDraft();
  collectionCreateStep = 1;
  collectionChoiceOpenField = "";
  collectionStorageOpen = false;
  collectionImagePinch = null;
  routeTo(profileShelfHref(userId, "collection"));
}

function optionLabel(options, value, fallback = "") {
  return options.find((option) => option.value === value)?.label || fallback || "Не обрано";
}

function collectionStatusValue(item = {}) {
  return item.status || "collection";
}

function collectionConditionValue(item = {}) {
  return item.condition || "opened";
}

function collectionCompletenessValue(item = {}) {
  return item.completeness || "full";
}

function collectionCustomizationValue(item = {}) {
  return item.customization || "original";
}

function collectionStorageSummary(item = {}) {
  return [item.storageRoom, item.storageCabinet, item.storageShelf, item.storageBox].filter(Boolean).join(" · ");
}

function collectionMetaChips(item = {}) {
  const chips = [
    optionLabel(COLLECTION_STATUS_OPTIONS, collectionStatusValue(item), "В коллекции"),
    optionLabel(COLLECTION_CONDITION_OPTIONS, collectionConditionValue(item), "Открыта"),
    optionLabel(COLLECTION_COMPLETENESS_OPTIONS, collectionCompletenessValue(item), "Полный комплект"),
  ];
  if (item.customization && item.customization !== "original") {
    chips.push(optionLabel(COLLECTION_CUSTOMIZATION_OPTIONS, collectionCustomizationValue(item)));
  }
  return chips.filter(Boolean).slice(0, 3);
}

function collectionStorageLabel() {
  return collectionStorageSummary(collectionCreateDraft) || "Выбрать место хранения";
}

function collectionMatchesFilter(item = {}, filter = "all") {
  const status = collectionStatusValue(item);
  if (filter === "all") return true;
  return status === filter;
}

function compareNullableDates(left = "", right = "") {
  const leftTime = left ? new Date(left).getTime() : 0;
  const rightTime = right ? new Date(right).getTime() : 0;
  return rightTime - leftTime;
}

function sortCollectionItems(items = [], sort = "recent") {
  return [...items].sort((a, b) => {
    if (sort === "brand") {
      return (a.brand || "").localeCompare(b.brand || "") || (a.collectionName || "").localeCompare(b.collectionName || "") || (a.name || "").localeCompare(b.name || "");
    }
    if (sort === "collection") {
      return (a.collectionName || "").localeCompare(b.collectionName || "") || (a.name || "").localeCompare(b.name || "");
    }
    if (sort === "purchaseDate") {
      const dateDiff = compareNullableDates(a.purchaseDate, b.purchaseDate);
      if (dateDiff !== 0) return dateDiff;
    }
    const createdDiff = compareNullableDates(a.createdAt, b.createdAt);
    if (createdDiff !== 0) return createdDiff;
    return (a.name || "").localeCompare(b.name || "");
  });
}

function currentProfileShelfAction() {
  return profileShelfActionOpen;
}

function toggleProfileShelfAction(action = "") {
  const normalized = action === "sort" || action === "filter" ? action : "";
  profileShelfActionOpen = profileShelfActionOpen === normalized ? "" : normalized;
  render();
}

function shelfMonogram(label = "") {
  return String(label || "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "DS";
}

function shelfArtDataUrl(item = {}) {
  const [soft, vivid, deep] = PROFILE_SHELF_THEMES[item.palette] || PROFILE_SHELF_THEMES.rose;
  const monogram = shelfMonogram(item.name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 900" role="img" aria-label="${monogram}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${soft}" />
          <stop offset="55%" stop-color="${vivid}" />
          <stop offset="100%" stop-color="${deep}" />
        </linearGradient>
        <radialGradient id="glowA" cx="28%" cy="18%" r="62%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.78)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
        <radialGradient id="glowB" cx="78%" cy="78%" r="45%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.5)" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="720" height="900" rx="72" fill="url(#bg)" />
      <circle cx="220" cy="180" r="220" fill="url(#glowA)" />
      <circle cx="610" cy="720" r="170" fill="url(#glowB)" />
      <circle cx="555" cy="165" r="110" fill="rgba(255,255,255,0.16)" />
      <circle cx="165" cy="670" r="130" fill="rgba(255,255,255,0.12)" />
      <path d="M118 620 C 248 438 436 352 606 268" fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="14" stroke-linecap="round"/>
      <path d="M138 720 C 278 538 430 458 580 388" fill="none" stroke="rgba(255,255,255,0.17)" stroke-width="8" stroke-linecap="round"/>
      <text x="74" y="786" fill="rgba(255,255,255,0.66)" font-family="Georgia, serif" font-size="206" font-weight="700">${monogram}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function marketplaceSiteQueryUrl(domain, query) {
  return `https://www.google.com/search?q=${encodeURIComponent(`site:${domain} ${query}`)}`;
}

function wishlistSearchQuery(item = {}) {
  return [item.brand, item.collectionName, item.name].filter(Boolean).join(" ").trim() || item.name || "doll";
}

function marketplaceSuggestions(user, item) {
  const query = wishlistSearchQuery(item);
  const country = compactTagValue(user?.country || "");
  const presets = {
    "україна": [
      ["OLX", marketplaceSiteQueryUrl("olx.ua", query)],
      ["Prom", marketplaceSiteQueryUrl("prom.ua", query)],
      ["Etsy", `https://www.etsy.com/search?q=${encodeURIComponent(query)}`],
    ],
    "украина": [
      ["OLX", marketplaceSiteQueryUrl("olx.ua", query)],
      ["Prom", marketplaceSiteQueryUrl("prom.ua", query)],
      ["Etsy", `https://www.etsy.com/search?q=${encodeURIComponent(query)}`],
    ],
    "польща": [
      ["Allegro", marketplaceSiteQueryUrl("allegro.pl", query)],
      ["OLX Polska", marketplaceSiteQueryUrl("olx.pl", query)],
      ["Etsy", `https://www.etsy.com/search?q=${encodeURIComponent(query)}`],
    ],
    "польша": [
      ["Allegro", marketplaceSiteQueryUrl("allegro.pl", query)],
      ["OLX Polska", marketplaceSiteQueryUrl("olx.pl", query)],
      ["Etsy", `https://www.etsy.com/search?q=${encodeURIComponent(query)}`],
    ],
    "німеччина": [
      ["Kleinanzeigen", marketplaceSiteQueryUrl("kleinanzeigen.de", query)],
      ["eBay DE", `https://www.ebay.de/sch/i.html?_nkw=${encodeURIComponent(query)}`],
      ["Vinted", marketplaceSiteQueryUrl("vinted.de", query)],
    ],
    "германия": [
      ["Kleinanzeigen", marketplaceSiteQueryUrl("kleinanzeigen.de", query)],
      ["eBay DE", `https://www.ebay.de/sch/i.html?_nkw=${encodeURIComponent(query)}`],
      ["Vinted", marketplaceSiteQueryUrl("vinted.de", query)],
    ],
  };
  return (presets[country] || [
    ["eBay", `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`],
    ["Etsy", `https://www.etsy.com/search?q=${encodeURIComponent(query)}`],
    ["Mercari", marketplaceSiteQueryUrl("mercari.com", query)],
  ]).map(([label, url]) => ({ label, url }));
}

function estimateWishlistPriceRange(item = {}) {
  const query = wishlistSearchQuery(item).toLowerCase();
  const condition = item.condition || "used";
  const ranges = {
    pullip: condition === "new" ? [340, 390] : [280, 330],
    blythe: condition === "new" ? [180, 220] : [140, 175],
    "monster high": condition === "new" ? [170, 210] : [120, 160],
    barbie: condition === "new" ? [95, 135] : [70, 105],
    bjd: condition === "new" ? [420, 520] : [300, 390],
  };
  if (query.includes("pullip")) return { min: ranges.pullip[0], max: ranges.pullip[1], currency: "$" };
  if (query.includes("blythe")) return { min: ranges.blythe[0], max: ranges.blythe[1], currency: "$" };
  if (query.includes("monster high")) return { min: ranges["monster high"][0], max: ranges["monster high"][1], currency: "$" };
  if (query.includes("barbie")) return { min: ranges.barbie[0], max: ranges.barbie[1], currency: "$" };
  if (query.includes("bjd") || query.includes("volks") || query.includes("luts") || query.includes("switch")) {
    return { min: ranges.bjd[0], max: ranges.bjd[1], currency: "$" };
  }
  return condition === "new" ? { min: 180, max: 220, currency: "$" } : { min: 150, max: 180, currency: "$" };
}

function formatWishlistRange(item = {}) {
  if (item.priceRangeLabel) return item.priceRangeLabel;
  if (item.priceMin && item.priceMax && item.currency) return `${item.priceMin}-${item.priceMax}${item.currency}`;
  return "Coming soon";
}

function buildWishlistDraftItem(user) {
  const range = estimateWishlistPriceRange(wishlistCreateDraft);
  return {
    id: `wish-${Date.now()}`,
    name: wishlistCreateDraft.name.trim(),
    brand: wishlistCreateDraft.brand.trim(),
    collectionName: wishlistCreateDraft.collectionName.trim(),
    line: wishlistCreateDraft.collectionName.trim() || "wishlist entry",
    note: wishlistCreateDraft.note.trim(),
    condition: wishlistCreateDraft.condition,
    purchased: false,
    palette: "rose",
    image: wishlistCreateDraft.image,
    priceMin: range.min,
    priceMax: range.max,
    currency: range.currency,
    priceRangeLabel: `${range.min}-${range.max}${range.currency}`,
    priceUpdatedAt: new Date().toISOString(),
    marketLinks: marketplaceSuggestions(user, wishlistCreateDraft),
  };
}

function buildCollectionDraftItem() {
  return {
    id: `shelf-${Date.now()}`,
    createdAt: new Date().toISOString(),
    name: collectionCreateDraft.name.trim(),
    brand: collectionCreateDraft.brand.trim(),
    collectionName: collectionCreateDraft.collectionName.trim(),
    line: collectionCreateDraft.collectionName.trim() || "collection entry",
    note: collectionCreateDraft.memory.trim(),
    memory: collectionCreateDraft.memory.trim(),
    purchasePrice: collectionCreateDraft.purchasePrice.trim(),
    currency: collectionCreateDraft.currency || "$",
    status: collectionCreateDraft.status,
    condition: collectionCreateDraft.condition,
    completeness: collectionCreateDraft.completeness,
    customization: collectionCreateDraft.customization,
    purchaseDate: collectionCreateDraft.purchaseDate,
    storageRoom: collectionCreateDraft.storageRoom.trim(),
    storageCabinet: collectionCreateDraft.storageCabinet.trim(),
    storageShelf: collectionCreateDraft.storageShelf.trim(),
    storageBox: collectionCreateDraft.storageBox.trim(),
    image: collectionCreateDraft.images[0] || "",
    images: [...collectionCreateDraft.images],
    accent: collectionCreateDraft.purchasePrice.trim()
      ? `bought for ${collectionCreateDraft.currency || "$"}${collectionCreateDraft.purchasePrice.trim()}`
      : "personal shelf",
    palette: "moon",
  };
}

function wishlistCreateReady() {
  return Boolean(
    wishlistCreateDraft.image &&
      wishlistCreateDraft.brand.trim() &&
      wishlistCreateDraft.collectionName.trim() &&
      wishlistCreateDraft.name.trim(),
  );
}

function collectionCreateReady() {
  return Boolean(
    collectionCreateDraft.images.length &&
      collectionCreateDraft.brand.trim() &&
      collectionCreateDraft.collectionName.trim() &&
      collectionCreateDraft.name.trim(),
  );
}

function wishlistConditionLabel(value = "used") {
  return value === "new" ? "Нова" : "Б/У";
}

function toySuggestionsByType(type, value = "") {
  const query = compactTagValue(value);
  if (!query) return [];
  const mappedType = type === "collectionName" ? "collection" : type;
  const source = TOY_TAG_DICTIONARY.filter((entry) => entry.type === mappedType);
  return source
    .map((entry) => ({ entry, score: tagSuggestionScore(entry.canonical, query) }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.entry.canonical.localeCompare(b.entry.canonical))
    .slice(0, WISHLIST_CREATE_FIELD_LIMIT)
    .map(({ entry }) => ({
      value: entry.canonical,
      label: displayTagLabel(entry.canonical, detectTagLanguage(value || entry.canonical)),
    }));
}

function renderWishlistCreateSuggestions(field) {
  const container = document.querySelector(`[data-wishlist-suggestions="${field}"]`);
  if (!container) return;
  if (!wishlistCreateDraft[field].trim()) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }
  const matched = toySuggestionsByType(field === "name" ? "character" : field, wishlistCreateDraft[field]);
  container.innerHTML = matched
    .map(
      (item) => `
        <button class="tag-composer__suggestion" type="button" onclick="App.applyWishlistSuggestion('${field}', '${encodeURIComponent(item.value)}')">
          ${escapeHtml(item.label)}
        </button>
      `,
    )
    .join("");
  container.classList.toggle("hidden", !matched.length);
}

function renderWishlistMarketLinks(user, item) {
  const links = (item.marketLinks?.length ? item.marketLinks : marketplaceSuggestions(user, item)).slice(0, 3);
  return links
    .map(
      ({ label, url }) => `
        <a class="wishlist-market-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer">
          <strong>${escapeHtml(label)}</strong>
          <span>${escapeHtml(user?.country || "Marketplace search")}</span>
        </a>
      `,
    )
    .join("");
}

function renderWishlistFocusModal(user, item) {
  if (!item) return "";
  const closeHref = profileShelfHref(user.id, "wishlist");
  const imageSrc = item.image || shelfArtDataUrl(item);
  const priceLabel =
    item.estimatedPrice && item.currency ? `${item.currency}${item.estimatedPrice}` : formatWishlistRange(item);
  const updatedLabel = item.priceUpdatedAt ? formatDate(item.priceUpdatedAt) : "market snapshot pending";
  return `
    <div class="wishlist-focus-sheet is-open" role="dialog" aria-modal="true" aria-labelledby="wishlistFocusTitle">
      <a class="wishlist-focus-backdrop" href="${closeHref}" aria-label="Закрити картку"></a>
      <section class="wishlist-focus-card">
        <div class="wishlist-focus-head">
          <div>
            <span class="wishlist-focus-kicker">Wish List Focus</span>
            <h2 id="wishlistFocusTitle">${escapeHtml(item.name || "Wish List item")}</h2>
          </div>
          <a class="ghost-button small" href="${closeHref}" aria-label="Закрити">Закрити</a>
        </div>
        <div class="wishlist-focus-layout">
          <div class="wishlist-focus-visual">
            <img src="${imageSrc}" alt="${escapeHtml(item.name || "Doll wish")}" />
            <button
              class="wishlist-status-switch ${item.purchased ? "is-found" : "is-hunting"}"
              type="button"
              onclick="App.toggleWishlistStatus('${user.id}', '${item.id}')"
              aria-pressed="${item.purchased ? "true" : "false"}"
              aria-label="${item.purchased ? "Позначити як ще в пошуку" : "Позначити як знайдено"}"
            >
              <span class="wishlist-status-switch-track">
                <span class="wishlist-status-switch-thumb" aria-hidden="true"></span>
              </span>
            </button>
          </div>
          <div class="wishlist-focus-content">
            <div class="wishlist-focus-fields">
              <div class="wishlist-focus-field">
                <span>Бренд</span>
                <strong>${escapeHtml(item.brand || "Unknown")}</strong>
              </div>
              <div class="wishlist-focus-field">
                <span>Колекція</span>
                <strong>${escapeHtml(item.collectionName || item.line || "Unknown")}</strong>
              </div>
              <div class="wishlist-focus-field">
                <span>Ім'я</span>
                <strong>${escapeHtml(item.name || "Unknown")}</strong>
              </div>
              <div class="wishlist-focus-field">
                <span>Стан</span>
                <strong>${escapeHtml(wishlistConditionLabel(item.condition))}</strong>
              </div>
            </div>
            <div class="wishlist-focus-price-card">
              <span>Орієнтовна вартість</span>
              <strong>${escapeHtml(priceLabel)}</strong>
              <p>Останній snapshot: ${escapeHtml(updatedLabel)}</p>
            </div>
            <div class="wishlist-focus-note">
              <p>${escapeHtml(item.note || "Поки що без додаткових нотаток.")}</p>
            </div>
            <div class="wishlist-market-block">
              <div class="wishlist-market-head">
                <h3>Де шукати</h3>
                <p>Три швидкі переходи по маркетплейсах для країни профілю.</p>
              </div>
              <div class="wishlist-market-list">
                ${renderWishlistMarketLinks(user, item)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderWishlistCreateModal(user) {
  return `
    <div class="wishlist-focus-sheet wishlist-create-page is-open" role="dialog" aria-modal="true" aria-labelledby="wishlistCreateTitle">
      <section class="wishlist-focus-card wishlist-create-card wishlist-create-card-full">
        <div class="wishlist-focus-head">
          <div>
            <span class="wishlist-focus-kicker">New Wish</span>
            <h2 id="wishlistCreateTitle">Нова картка Wish List</h2>
          </div>
          <button class="ghost-button small" type="button" onclick="App.closeWishlistCreate('${user.id}')">Закрити</button>
        </div>
        <form class="wishlist-create-form" onsubmit="App.publishWishlistItem(event, '${user.id}')">
          <div class="wishlist-create-preview">
            <label class="wishlist-create-image-slot" for="wishlistCreateImage">
              ${
                wishlistCreateDraft.image
                  ? `<img src="${wishlistCreateDraft.image}" alt="Нове фото wish list" />`
                  : `
                    <span class="wishlist-create-image-placeholder">
                      <span class="wishlist-create-image-plus">${navIcon("plus")}</span>
                      <strong>Додати фото</strong>
                      <span>одне фото з галереї</span>
                    </span>
                  `
              }
            </label>
            <input id="wishlistCreateImage" class="hidden-file" type="file" accept="image/*" onchange="App.pickWishlistImage(event)" />
          </div>
          <div class="wishlist-create-fields">
            <label class="field">
              Бренд
              <input name="brand" value="${escapeHtml(wishlistCreateDraft.brand)}" autocomplete="off" oninput="App.updateWishlistDraftField('brand', this.value)" />
              <div data-wishlist-suggestions="brand" class="tag-composer__suggestions hidden"></div>
            </label>
            <label class="field">
              Колекція
              <input name="collectionName" value="${escapeHtml(wishlistCreateDraft.collectionName)}" autocomplete="off" oninput="App.updateWishlistDraftField('collectionName', this.value)" />
              <div data-wishlist-suggestions="collectionName" class="tag-composer__suggestions hidden"></div>
            </label>
            <label class="field">
              Ім'я
              <input name="name" value="${escapeHtml(wishlistCreateDraft.name)}" autocomplete="off" oninput="App.updateWishlistDraftField('name', this.value)" />
              <div data-wishlist-suggestions="name" class="tag-composer__suggestions hidden"></div>
            </label>
            <div class="wishlist-condition-row">
              <span class="wishlist-condition-label">Стан</span>
              <button class="wishlist-condition-toggle ${wishlistCreateDraft.condition === "new" ? "is-new" : "is-used"}" type="button" onclick="App.toggleWishlistCondition(event)">
                <span>${escapeHtml(wishlistConditionLabel(wishlistCreateDraft.condition))}</span>
              </button>
            </div>
            <label class="field full">
              Особистий коментар
              <textarea name="note" placeholder="Що саме ти шукаєш, стан, комплектність, особливості..." oninput="App.updateWishlistDraftField('note', this.value)">${escapeHtml(wishlistCreateDraft.note)}</textarea>
            </label>
          </div>
          <button class="button wishlist-create-submit ${wishlistCreateReady() ? "" : "is-disabled"}" type="submit" ${wishlistCreateReady() ? "" : "disabled"}>
            Опублікувати
          </button>
        </form>
      </section>
    </div>
  `;
}

function renderCollectionCreateModal(user) {
  const activeImage = collectionCreateDraft.images[collectionCreateDraft.activeImageIndex] || collectionCreateDraft.images[0] || "";
  const isFirstStep = collectionCreateStep === 1;
  return `
    <div class="wishlist-focus-sheet wishlist-create-page is-open" role="dialog" aria-modal="true" aria-labelledby="collectionCreateTitle">
      <section class="wishlist-focus-card wishlist-create-card wishlist-create-card-full">
        <div class="wishlist-focus-head">
          <div>
            <span class="wishlist-focus-kicker">Collection Entry</span>
            <h2 id="collectionCreateTitle">Нова картка Collection</h2>
            <p class="collection-create-step-copy">${isFirstStep ? "Шаг 1 из 2: фото, имя и базовая информация." : "Шаг 2 из 2: статус, состояние и хранение."}</p>
          </div>
          <button class="ghost-button small" type="button" onclick="App.closeCollectionCreate('${user.id}')">Закрити</button>
        </div>
        <form class="wishlist-create-form" onsubmit="App.publishCollectionItem(event, '${user.id}')">
          <div class="collection-create-steps">
            <span class="collection-create-step ${isFirstStep ? "is-active" : "is-done"}">1</span>
            <span class="collection-create-step-line"></span>
            <span class="collection-create-step ${!isFirstStep ? "is-active" : ""}">2</span>
          </div>
          ${
            isFirstStep
              ? `
                <div class="wishlist-create-preview">
                  <label
                    class="wishlist-create-image-slot collection-create-image-slot ${collectionCreateDraft.images.length ? "has-image" : ""}"
                    for="collectionCreateImage"
                    ontouchstart="App.handleCollectionImageTouchStart(event)"
                    ontouchmove="App.handleCollectionImageTouchMove(event)"
                    ontouchend="App.handleCollectionImageTouchEnd(event)"
                    ontouchcancel="App.handleCollectionImageTouchEnd(event)"
                  >
                    ${
                      activeImage
                        ? `<img src="${activeImage}" alt="Нове фото collection" style="transform: scale(${collectionCreateDraft.zoom || 1})" />`
                        : `
                          <span class="wishlist-create-image-placeholder">
                            <span class="wishlist-create-image-plus">${navIcon("plus")}</span>
                            <strong>Додати фото</strong>
                            <span>до 3 фото з галереї</span>
                          </span>
                        `
                    }
                  </label>
                  <input id="collectionCreateImage" class="hidden-file" type="file" accept="image/*" multiple onchange="App.pickCollectionImages(event)" />
                  ${
                    collectionCreateDraft.images.length
                      ? `
                        <div class="collection-create-carousel">
                          <div class="collection-create-thumbs">
                            ${collectionCreateDraft.images
                              .map(
                                (image, index) => `
                                  <button
                                    class="collection-create-thumb ${index === collectionCreateDraft.activeImageIndex ? "is-active" : ""}"
                                    type="button"
                                    data-thumb-index="${index}"
                                    onclick="App.selectCollectionImage(${index})"
                                    onpointerdown="App.startCollectionThumbReorder(event, ${index})"
                                    onpointermove="App.moveCollectionThumbReorder(event, ${index})"
                                    onpointerup="App.endCollectionThumbReorder(event, ${index})"
                                    onpointercancel="App.cancelCollectionThumbReorder()"
                                    aria-label="Фото ${index + 1}"
                                  >
                                    <img src="${image}" alt="Фото ${index + 1}" />
                                  </button>
                                `,
                              )
                              .join("")}
                            ${
                              collectionCreateDraft.images.length < 3
                                ? `
                                  <label class="collection-create-thumb collection-create-thumb-add" for="collectionCreateImage" aria-label="Додати ще фото">
                                    ${navIcon("plus")}
                                  </label>
                                `
                                : ""
                            }
                          </div>
                        </div>
                      `
                      : ""
                  }
                </div>
                <div class="wishlist-create-fields">
                  <label class="field">
                    Бренд
                    <input name="brand" value="${escapeHtml(collectionCreateDraft.brand)}" autocomplete="off" oninput="App.updateCollectionDraftField('brand', this.value)" />
                    <div data-collection-suggestions="brand" class="tag-composer__suggestions hidden"></div>
                  </label>
                  <label class="field">
                    Колекція
                    <input name="collectionName" value="${escapeHtml(collectionCreateDraft.collectionName)}" autocomplete="off" oninput="App.updateCollectionDraftField('collectionName', this.value)" />
                    <div data-collection-suggestions="collectionName" class="tag-composer__suggestions hidden"></div>
                  </label>
                  <label class="field">
                    Ім'я
                    <input name="name" value="${escapeHtml(collectionCreateDraft.name)}" autocomplete="off" oninput="App.updateCollectionDraftField('name', this.value)" />
                    <div data-collection-suggestions="name" class="tag-composer__suggestions hidden"></div>
                  </label>
                  <label class="field">
                    Ціна покупки
                    <input name="purchasePrice" inputmode="decimal" placeholder="120" value="${escapeHtml(collectionCreateDraft.purchasePrice)}" oninput="App.updateCollectionDraftField('purchasePrice', this.value.replace(/[^0-9.,]/g, ''))" />
                  </label>
                  <label class="field full">
                    Memory
                    <textarea name="memory" placeholder="Приємний спогад про цю ляльку, історія покупки, чому вона особлива..." oninput="App.updateCollectionDraftField('memory', this.value)">${escapeHtml(collectionCreateDraft.memory)}</textarea>
                  </label>
                </div>
                <div class="collection-create-footer">
                  <button class="ghost-button" type="button" onclick="App.closeCollectionCreate('${user.id}')">Отмена</button>
                  <button class="button wishlist-create-submit ${collectionCreateReady() ? "" : "is-disabled"}" type="button" onclick="App.goToCollectionCreateStep(2)" ${collectionCreateReady() ? "" : "disabled"}>
                    Следующий шаг
                  </button>
                </div>
              `
              : `
                <div class="collection-step-layout">
                  <div class="collection-step-card">
                    ${renderCollectionChoiceField({
                      label: "Статус",
                      field: "status",
                      value: collectionCreateDraft.status,
                      options: COLLECTION_STATUS_OPTIONS,
                    })}
                    ${renderCollectionChoiceField({
                      label: "Состояние",
                      field: "condition",
                      value: collectionCreateDraft.condition,
                      options: COLLECTION_CONDITION_OPTIONS,
                    })}
                    ${renderCollectionChoiceField({
                      label: "Комплектность",
                      field: "completeness",
                      value: collectionCreateDraft.completeness,
                      options: COLLECTION_COMPLETENESS_OPTIONS,
                    })}
                    ${renderCollectionChoiceField({
                      label: "Кастомизация",
                      field: "customization",
                      value: collectionCreateDraft.customization,
                      options: COLLECTION_CUSTOMIZATION_OPTIONS,
                    })}
                  </div>
                  <div class="collection-step-card">
                    <label class="field">
                      Дата покупки
                      <input name="purchaseDate" type="date" value="${escapeHtml(collectionCreateDraft.purchaseDate)}" oninput="App.updateCollectionDraftField('purchaseDate', this.value)" />
                    </label>
                    <div class="collection-storage-block">
                      <span class="collection-choice-label">Место хранения</span>
                      <div class="collection-choice-select ${collectionStorageOpen ? "is-open" : ""}">
                        <button class="collection-choice-trigger" type="button" onclick="App.toggleCollectionStorage()">
                          <span>${escapeHtml(collectionStorageLabel())}</span>
                        </button>
                        <div class="collection-choice-options collection-storage-options ${collectionStorageOpen ? "is-open" : ""}">
                          <label class="field">
                            <span class="collection-storage-label">Комната</span>
                            <input name="storageRoom" placeholder="Гостиная" value="${escapeHtml(collectionCreateDraft.storageRoom)}" oninput="App.updateCollectionDraftField('storageRoom', this.value)" />
                          </label>
                          <label class="field">
                            <span class="collection-storage-label">Шкаф</span>
                            <input name="storageCabinet" placeholder="Шкаф 2" value="${escapeHtml(collectionCreateDraft.storageCabinet)}" oninput="App.updateCollectionDraftField('storageCabinet', this.value)" />
                          </label>
                          <label class="field">
                            <span class="collection-storage-label">Полка</span>
                            <input name="storageShelf" placeholder="Полка B" value="${escapeHtml(collectionCreateDraft.storageShelf)}" oninput="App.updateCollectionDraftField('storageShelf', this.value)" />
                          </label>
                          <label class="field">
                            <span class="collection-storage-label">Коробка</span>
                            <input name="storageBox" placeholder="Box Winter" value="${escapeHtml(collectionCreateDraft.storageBox)}" oninput="App.updateCollectionDraftField('storageBox', this.value)" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="collection-create-footer">
                  <button class="ghost-button" type="button" onclick="App.goToCollectionCreateStep(1)">Назад</button>
                  <button class="button wishlist-create-submit ${collectionCreateReady() ? "" : "is-disabled"}" type="submit" ${collectionCreateReady() ? "" : "disabled"}>
                    Опубликовать
                  </button>
                </div>
              `
          }
        </form>
      </section>
    </div>
  `;
}

function tagList(tags = [], tone = "") {
  return `<div class="tags">${tags
    .map((tag) => `<span class="tag ${tone}">${escapeHtml(tag)}</span>`)
    .join("")}</div>`;
}

function getToyTagEntry(canonical) {
  return TOY_TAG_DICTIONARY.find((entry) => entry.canonical === canonical) || null;
}

function normalizePostTag(tag) {
  const normalized = compactTagValue(tag);
  if (!normalized) return "";
  return TOY_TAG_DICTIONARY.find((entry) => entry.aliases.includes(normalized))?.canonical || "";
}

function searchableTagText(tag) {
  return compactTagValue(String(tag || "").replace(/[^a-z0-9а-яіїєґ"'&+\- ]/gi, " "));
}

function detectTagLanguage(value = "", fallbackLocale = "uk") {
  const source = String(value || "");
  if (/[a-z]/i.test(source) && !/[а-яіїєґёыэъ]/i.test(source)) return "en";
  if (/[іїєґ]/i.test(source)) return "uk";
  if (/[ёыэъ]/i.test(source)) return "ru";
  if (/[а-я]/i.test(source)) return fallbackLocale === "en" ? "uk" : fallbackLocale;
  return fallbackLocale || "uk";
}

function displayTagLabel(tag, locale = "uk") {
  const entry = getToyTagEntry(tag);
  if (!entry) return tag;
  return entry.labels[locale] || entry.labels.uk || entry.labels.ru || entry.labels.en || tag;
}

function tagSuggestionScore(tag, query) {
  const value = compactTagValue(tag);
  const words = value.split(" ").filter(Boolean);
  if (value === query) return 500;
  if (value.startsWith(query)) return 400 - value.length;
  if (words.some((word) => word.startsWith(query))) return 320 - value.length;
  if (value.includes(query)) return 220 - value.indexOf(query);
  if (words.some((word) => word.includes(query))) return 140;
  return -1;
}

function tagSuggestionsFor(query = "", selectedTags = [], currentLocale = "uk") {
  const needle = searchableTagText(query);
  if (!needle) return [];
  const locale = detectTagLanguage(query, currentLocale);
  return TOY_TAG_DICTIONARY.filter((entry) => !selectedTags.includes(entry.canonical))
    .map((entry) => ({
      canonical: entry.canonical,
      label: entry.labels[locale] || entry.labels.en,
      score: Math.max(...entry.aliases.map((alias) => tagSuggestionScore(alias, needle))),
    }))
    .filter((item) => item.score >= 0)
    .sort((a, b) => b.score - a.score || a.label.localeCompare(b.label))
    .slice(0, 3)
    .map((item) => ({ canonical: item.canonical, label: item.label }));
}

function createTagSuggestions(query = "") {
  return tagSuggestionsFor(query, createSelectedTags, createTagLocale);
}

function discussionTagSuggestions(query = "") {
  return tagSuggestionsFor(query, discussionSelectedTags, discussionTagLocale);
}

function normalizeTerm(value = "") {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function uniqueNormalizedTerms(values = []) {
  return [...new Set(values.map(normalizeTerm).filter(Boolean))];
}

function countTermMatches(sourceTerms = [], targetTerms = []) {
  if (!sourceTerms.length || !targetTerms.length) return 0;
  const targetSet = new Set(targetTerms);
  return sourceTerms.reduce((total, term) => total + (targetSet.has(term) ? 1 : 0), 0);
}

function collectUserBehaviorTags(user) {
  const counts = new Map();
  const bump = (tag, weight = 1) => {
    const normalized = normalizeTerm(tag);
    if (!normalized) return;
    counts.set(normalized, (counts.get(normalized) || 0) + weight);
  };

  state.posts.forEach((post) => {
    if (post.likes.includes(user.id)) {
      (post.tags || []).forEach((tag) => bump(tag, 2));
    }
    if ((post.comments || []).some((comment) => comment.userId === user.id)) {
      (post.tags || []).forEach((tag) => bump(tag, 1));
    }
  });

  state.users
    .filter((candidate) => user.following.includes(candidate.id))
    .forEach((candidate) => {
      (candidate.interests || []).forEach((tag) => bump(tag, 1));
      (candidate.aesthetics || []).forEach((tag) => bump(tag, 1));
    });

  return counts;
}

function buildRecommendationContext(user) {
  return {
    user,
    followingIds: new Set(user.following || []),
    interestTerms: uniqueNormalizedTerms(user.interests || []),
    aestheticTerms: uniqueNormalizedTerms(user.aesthetics || []),
    behaviorTags: collectUserBehaviorTags(user),
  };
}

function recommendationFreshnessScore(createdAt) {
  const ageHours = Math.max(0, (Date.now() - new Date(createdAt).getTime()) / 36e5);
  if (ageHours <= 24) return 14;
  if (ageHours <= 72) return 10;
  if (ageHours <= 168) return 6;
  if (ageHours <= 336) return 3;
  return 1;
}

function recommendationPopularityScore(post) {
  return Math.min(12, (post.likes.length || 0) * 2 + (post.comments?.length || 0) * 3);
}

function recommendationScore(post, context) {
  const { user, followingIds, interestTerms, aestheticTerms, behaviorTags } = context;
  const author = findUser(post.userId);
  if (!author || author.blocked) return Number.NEGATIVE_INFINITY;

  const postTerms = uniqueNormalizedTerms([
    ...(post.tags || []),
    ...(author.interests || []),
    ...(author.aesthetics || []),
  ]);
  const authorInterestTerms = uniqueNormalizedTerms(author.interests || []);
  const authorAestheticTerms = uniqueNormalizedTerms(author.aesthetics || []);

  let score = 0;
  if (post.userId === user.id) score += 8;
  if (followingIds.has(post.userId)) score += 34;

  score += countTermMatches(interestTerms, postTerms) * 18;
  score += countTermMatches(aestheticTerms, postTerms) * 14;
  score += countTermMatches(interestTerms, authorInterestTerms) * 8;
  score += countTermMatches(aestheticTerms, authorAestheticTerms) * 6;

  postTerms.forEach((term) => {
    score += Math.min(behaviorTags.get(term) || 0, 4) * 5;
  });

  if (!followingIds.has(post.userId) && countTermMatches([...interestTerms, ...aestheticTerms], postTerms) > 0) {
    score += 6;
  }

  score += recommendationPopularityScore(post);
  score += recommendationFreshnessScore(post.createdAt);
  return score;
}

function collectUserDiscussionBehaviorTags(user) {
  const counts = new Map();
  const bump = (tag, weight = 1) => {
    const normalized = normalizeTerm(tag);
    if (!normalized) return;
    counts.set(normalized, (counts.get(normalized) || 0) + weight);
  };

  state.discussions.forEach((discussion) => {
    if ((discussion.likes || []).includes(user.id)) {
      (discussion.tags || []).forEach((tag) => bump(tag, 2));
    }
    if ((discussion.replies || []).some((reply) => reply.userId === user.id)) {
      (discussion.tags || []).forEach((tag) => bump(tag, 2));
    }
  });

  state.users
    .filter((candidate) => user.following.includes(candidate.id))
    .forEach((candidate) => {
      (candidate.interests || []).forEach((tag) => bump(tag, 1));
    });

  return counts;
}

function buildDiscussionRecommendationContext(user) {
  return {
    user,
    followingIds: new Set(user.following || []),
    interestTerms: uniqueNormalizedTerms(user.interests || []),
    discussionBehaviorTags: collectUserDiscussionBehaviorTags(user),
  };
}

function discussionRecommendationScore(discussion, context) {
  const { user, followingIds, interestTerms, discussionBehaviorTags } = context;
  const author = discussionAuthor(discussion);
  if (!author || author.blocked) return Number.NEGATIVE_INFINITY;

  const discussionTerms = uniqueNormalizedTerms([
    ...(discussion.tags || []),
    ...(author.interests || []),
    discussion.title,
  ]);
  let score = 0;
  if (discussion.userId === user.id) score += 8;
  if (followingIds.has(discussion.userId)) score += 28;
  score += countTermMatches(interestTerms, discussionTerms) * 18;

  discussionTerms.forEach((term) => {
    score += Math.min(discussionBehaviorTags.get(term) || 0, 4) * 5;
  });

  score += Math.min((discussion.likes?.length || 0) * 2 + (discussion.replies?.length || 0) * 3, 14);
  score += recommendationFreshnessScore(discussion.createdAt);
  return score;
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
  const toneClass = user?.isPremium ? "is-premium" : "is-default";
  if (user?.avatar) {
    return `<span class="avatar ${size} ${toneClass}"><img src="${user.avatar}" alt="${escapeHtml(user.nickname)}" /></span>`;
  }
  return `<span class="avatar ${size} ${toneClass}">${escapeHtml(initials(user))}</span>`;
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

function getHashQueryParams() {
  const [, query = ""] = getHash().split("?");
  return new URLSearchParams(query);
}

function routeTo(hash) {
  window.location.hash = hash;
}

function navLink(hash, label) {
  const active = getHash().startsWith(hash) ? "active" : "";
  return `<a href="${hash}" class="${active}">${label}</a>`;
}

function navIcon(name, badgeCount = 0) {
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
    heart: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.435 4.582a5.94 5.94 0 0 0-8.39 0L12 5.626l-1.046-1.044a5.94 5.94 0 1 0-8.39 8.39l1.046 1.045L12 22.414l8.389-8.398 1.046-1.045a5.94 5.94 0 0 0 0-8.389Z"></path>
      </svg>
    `,
    more: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="5.7" cy="12" r="1.35"></circle>
        <circle cx="12" cy="12" r="1.35"></circle>
        <circle cx="18.3" cy="12" r="1.35"></circle>
      </svg>
    `,
    grid2: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.5" y="5.2" width="6.3" height="13.6" rx="1.8"></rect>
        <rect x="13.2" y="5.2" width="6.3" height="13.6" rx="1.8"></rect>
      </svg>
    `,
    grid3: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4.2" y="5.2" width="4.3" height="13.6" rx="1.5"></rect>
        <rect x="9.85" y="5.2" width="4.3" height="13.6" rx="1.5"></rect>
        <rect x="15.5" y="5.2" width="4.3" height="13.6" rx="1.5"></rect>
      </svg>
    `,
    sort: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 7.2h12"></path>
        <path d="M8.6 12h6.8"></path>
        <path d="M11.2 16.8h1.6"></path>
      </svg>
    `,
    filter: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.2 7.2h13.6"></path>
        <circle cx="9" cy="7.2" r="1.5"></circle>
        <path d="M5.2 12h13.6"></path>
        <circle cx="15" cy="12" r="1.5"></circle>
        <path d="M5.2 16.8h13.6"></path>
        <circle cx="11.4" cy="16.8" r="1.5"></circle>
      </svg>
    `,
  };
  return `
    <span class="tab-icon-wrap">
      <span class="tab-icon">${icons[name]}</span>
      ${badgeCount ? `<span class="tab-badge">${escapeHtml(badgeCount > 99 ? "99+" : String(badgeCount))}</span>` : ""}
    </span>
  `;
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
  if (hash === "#/notifications") return current === "#/notifications" || current.startsWith("#/thread");
  if (hash === "#/admin") return current === "#/admin";
  return current === hash || current.startsWith(`${hash}/`);
}

function buildMobileNav(user) {
  const alerts = notificationCount(user);
  const items = user
    ? [
        { hash: "#/feed", label: "Головна", icon: navIcon("home") },
        { hash: "#/search", label: "Пошук", icon: navIcon("people") },
        { hash: "#/create-post", label: "Створити", icon: navIcon("plus") },
        { hash: "#/notifications", label: "Сповіщення", icon: navIcon("heart", alerts) },
        { hash: `#/profile/${user.id}`, label: "Профіль", icon: tabAvatar(user) },
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
          <path d="M21.435 4.582a5.94 5.94 0 0 0-8.39 0L12 5.626l-1.046-1.044a5.94 5.94 0 1 0-8.39 8.39l1.046 1.045L12 22.414l8.389-8.398 1.046-1.045a5.94 5.94 0 0 0 0-8.389Z"></path>
        </svg>
        <svg class="like-heart like-heart--fill" viewBox="0 0 24 24" focusable="false">
          <path d="M21.435 4.582a5.94 5.94 0 0 0-8.39 0L12 5.626l-1.046-1.044a5.94 5.94 0 1 0-8.39 8.39l1.046 1.045L12 22.414l8.389-8.398 1.046-1.045a5.94 5.94 0 0 0 0-8.389Z"></path>
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
          <p>У демо вже є кілька колекціонерів, теги, коментарі, лайки, підписки та окремий центр сповіщень.</p>
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
  const visibleProfiles = state.users.filter((user) => user.id !== ADMIN_USER_ID || hasOwnerAccess());
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
              ${visibleProfiles.map((user) => `<option value="${escapeHtml(user.nickname)}"></option>`).join("")}
            </datalist>
          </label>
        </div>
        <p class="notice">Можна увійти в готовий демо-профіль або створити новий, щоб перевірити стрічку, пости і сповіщення.</p>
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

  const recommendationContext = buildRecommendationContext(user);
  const sortedPosts = state.posts
    .filter((post) => !findUser(post.userId)?.blocked)
    .slice()
    .sort((a, b) => {
      const scoreDifference = recommendationScore(b, recommendationContext) - recommendationScore(a, recommendationContext);
      if (scoreDifference !== 0) return scoreDifference;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  renderShell(`
    <section class="grid two">
      <div class="grid">
        <div class="toolbar">
          <div>
            <span class="eyebrow">Головна стрічка</span>
            <h2>Рекомендації для вас</h2>
            <p class="muted">Пости ранжуються за підписками, інтересами, естетиками та схожими лайками.</p>
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

function renderCollectionActionToggle({ action, label, icon }) {
  const isActive = currentProfileShelfAction() === action;
  return `
    <button
      class="profile-shelf-action-toggle ${isActive ? "is-active" : ""}"
      type="button"
      onclick="App.toggleProfileShelfAction('${action}')"
      aria-pressed="${isActive ? "true" : "false"}"
      aria-label="${escapeHtml(label)}"
    >
      ${navIcon(icon)}
      <span class="profile-shelf-action-label">${escapeHtml(label)}</span>
    </button>
  `;
}

function renderCollectionActionOptions({ options, value, action }) {
  return `
    <div class="profile-shelf-action-options">
      ${options
        .map(
          (option) => `
            <button
              class="profile-shelf-toolbar-option ${option.value === value ? "is-active" : ""}"
              type="button"
              onclick="${action}('${option.value}')"
            >
              ${escapeHtml(option.label)}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCollectionChoiceField({ label, field, value, options, summary, action = "App.updateCollectionDraftField" }) {
  const isOpen = collectionChoiceOpenField === field;
  return `
    <div class="collection-choice-field">
      <span class="collection-choice-label">${escapeHtml(label)}</span>
      <div class="collection-choice-select ${isOpen ? "is-open" : ""}">
        <button class="collection-choice-trigger" type="button" onclick="App.toggleCollectionChoiceField('${field}')">
          <span>${escapeHtml(summary || optionLabel(options, value))}</span>
        </button>
        <div class="collection-choice-options ${isOpen ? "is-open" : ""}">
          ${options
            .map(
              (option) => `
                <button
                  class="collection-choice-option ${option.value === value ? "is-active" : ""}"
                  type="button"
                  onclick="App.selectCollectionChoice('${field}', '${option.value}', '${action}')"
                >
                  ${escapeHtml(option.label)}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderShelfCard(item, section = "collection", userId = "", viewMode = "gallery") {
  const isWishlist = section === "wishlist";
  const cardMarkup = `
    <article class="profile-shelf-card ${isWishlist ? "is-wishlist" : ""} ${!isWishlist ? `is-${viewMode}` : ""}">
      <div class="profile-shelf-card-visual">
        <img src="${escapeHtml(item.image || shelfArtDataUrl(item))}" alt="${escapeHtml(item.name || "Doll card")}" />
        ${
          isWishlist
            ? `
              <span class="profile-shelf-card-badge wishlist-indicator ${item.purchased ? "is-purchased" : "is-wanted"}">
                <span class="profile-shelf-card-dot" aria-hidden="true"></span>
                ${item.purchased ? "Found" : "Hunting"}
              </span>
            `
            : ""
        }
      </div>
      <div class="profile-shelf-card-body">
        <p class="profile-shelf-card-line">${escapeHtml(item.line || (isWishlist ? "wishlist note" : "collection note"))}</p>
        <h3>${escapeHtml(item.name || "Untitled doll")}</h3>
      </div>
    </article>
  `;
  if (isWishlist && userId) {
    return `
      <button
        class="profile-shelf-card-link"
        type="button"
        onclick="App.openWishlistItem('${userId}', '${item.id}')"
        aria-label="Відкрити ${escapeHtml(item.name || "Wish List item")}"
      >
        ${cardMarkup}
      </button>
    `;
  }
  return cardMarkup;
}

function renderShelfPanel({ user, section, activeSection, items }) {
  const isWishlist = section === "wishlist";
  const wishlistTotal = user.wishlistDolls?.length || 0;
  const foundCount = (user.wishlistDolls || []).filter((item) => item.purchased).length;
  const waitingCount = Math.max(wishlistTotal - foundCount, 0);
  const shelfColumns = currentProfileShelfColumns();
  const shelfSort = currentProfileShelfSort();
  const shelfFilter = currentProfileShelfFilter();
  const headline = isWishlist ? "Wish List" : "Collection";
  const description = isWishlist
    ? "Те, що ще шукається, і те, що вже вдалося знайти."
    : "Спокійна вітрина профілю: тільки твоя колекція, без зайвого шуму.";
  const visibleItems = isWishlist
    ? items
    : sortCollectionItems(items.filter((item) => collectionMatchesFilter(item, shelfFilter)), shelfSort);
  const summary = isWishlist
    ? `${foundCount} з ${wishlistTotal} знайдено`
    : `${visibleItems.length} на полці`;
  return `
    <section class="profile-shelf-panel ${activeSection === section ? "is-active" : ""}" aria-label="${headline}">
      <div class="profile-shelf-panel-head">
        <div class="profile-shelf-panel-copy">
          <span class="profile-shelf-kicker">${isWishlist ? "Collector hunt" : "Collector shelf"}</span>
          <h2>${headline}</h2>
          <p>${description}</p>
        </div>
        ${
          isWishlist
            ? `<button class="profile-shelf-add-button" type="button" onclick="App.openWishlistCreate('${user.id}')" aria-label="Додати в wish list">${navIcon("plus")}</button>`
            : `<button class="profile-shelf-add-button" type="button" onclick="App.openCollectionCreate('${user.id}')" aria-label="Додати в collection">${navIcon("plus")}</button>`
        }
      </div>
      <div class="profile-shelf-panel-actions">
        ${isWishlist ? `<span class="profile-shelf-panel-count">${escapeHtml(summary)}</span>` : ""}
        <div class="profile-shelf-controls" aria-label="Вид сетки">
          ${PROFILE_SHELF_COLUMN_OPTIONS.map(
            (columns) => `
              <button
                class="profile-shelf-layout-option ${shelfColumns === columns ? "is-active" : ""}"
                type="button"
                onclick="App.setProfileShelfColumns(${columns})"
                aria-pressed="${shelfColumns === columns ? "true" : "false"}"
                aria-label="${columns} карточки в ряд"
              >
                ${navIcon(columns === 2 ? "grid2" : "grid3")}
              </button>
            `,
          ).join("")}
        </div>
        ${
          !isWishlist
            ? `
              ${renderCollectionActionToggle({ action: "sort", label: "Сортировка", icon: "sort" })}
              ${renderCollectionActionToggle({ action: "filter", label: "Фильтр", icon: "filter" })}
            `
            : ""
        }
      </div>
      ${
        !isWishlist && currentProfileShelfAction()
          ? `
            <div class="profile-shelf-toolbar">
              ${
                currentProfileShelfAction() === "sort"
                  ? renderCollectionActionOptions({
                      value: shelfSort,
                      options: PROFILE_SHELF_SORT_OPTIONS,
                      action: "App.setProfileShelfSort",
                    })
                  : renderCollectionActionOptions({
                      value: shelfFilter,
                      options: PROFILE_SHELF_FILTER_OPTIONS,
                      action: "App.setProfileShelfFilter",
                    })
              }
            </div>
          `
          : ""
      }
      ${
        isWishlist
          ? `
            <div class="wishlist-progress" aria-label="Прогрес wish list">
              <div class="wishlist-progress-bar">
                <span style="width: ${(foundCount / Math.max(wishlistTotal, 1)) * 100}%"></span>
              </div>
              <p><strong>${foundCount}</strong> знайдено, <strong>${waitingCount}</strong> ще шукаються.</p>
            </div>
          `
          : ``
      }
      ${
        visibleItems.length
          ? `<div class="profile-shelf-grid is-${isWishlist ? "wishlist" : "gallery"}" style="--mobile-shelf-columns:${shelfColumns}">${visibleItems
              .map((item) => renderShelfCard(item, section, user.id, "gallery"))
              .join("")}</div>`
          : emptyState(
              isWishlist
                ? "Wish List ще порожній."
                : items.length
                  ? "За цим фільтром поки нічого не знайдено."
                  : "Колекція ще не заповнена.",
            )
      }
    </section>
  `;
}

function setProfileShelfColumns(columns) {
  state.profileShelfColumns = normalizeProfileShelfColumns(columns);
  saveState();
  render();
}

function setProfileShelfSort(value) {
  state.profileShelfSort = normalizeProfileShelfSort(value);
  saveState();
  render();
}

function setProfileShelfFilter(value) {
  state.profileShelfFilter = normalizeProfileShelfFilter(value);
  saveState();
  render();
}

function toggleWishlistStatus(userId, itemId) {
  const user = findUser(userId);
  const item = user?.wishlistDolls?.find((entry) => entry.id === itemId);
  if (!user || !item) return;
  item.purchased = !item.purchased;
  item.priceUpdatedAt = new Date().toISOString();
  saveState();
  render();
}

function updateWishlistDraftField(field, value) {
  wishlistCreateDraft[field] = String(value || "");
  renderWishlistCreateSuggestions(field);
  const submit = document.querySelector(".wishlist-create-submit");
  if (submit) {
    submit.disabled = !wishlistCreateReady();
    submit.classList.toggle("is-disabled", !wishlistCreateReady());
  }
}

function renderCollectionCreateSuggestions(field) {
  const container = document.querySelector(`[data-collection-suggestions="${field}"]`);
  if (!container) return;
  if (!collectionCreateDraft[field].trim()) {
    container.innerHTML = "";
    container.classList.add("hidden");
    return;
  }
  const matched = toySuggestionsByType(field === "name" ? "character" : field, collectionCreateDraft[field]);
  container.innerHTML = matched
    .map(
      (item) => `
        <button class="tag-composer__suggestion" type="button" onclick="App.applyCollectionSuggestion('${field}', '${encodeURIComponent(item.value)}')">
          ${escapeHtml(item.label)}
        </button>
      `,
    )
    .join("");
  container.classList.toggle("hidden", !matched.length);
}

function updateCollectionDraftField(field, value) {
  collectionCreateDraft[field] = String(value || "");
  if (field === "brand" || field === "collectionName" || field === "name") {
    renderCollectionCreateSuggestions(field);
  }
  const submit = document.querySelector(".wishlist-create-submit");
  if (submit) {
    submit.disabled = !collectionCreateReady();
    submit.classList.toggle("is-disabled", !collectionCreateReady());
  }
}

function goToCollectionCreateStep(step) {
  const nextStep = Math.max(1, Math.min(2, Number(step) || 1));
  if (nextStep === 2 && !collectionCreateReady()) return;
  collectionChoiceOpenField = "";
  collectionStorageOpen = false;
  collectionCreateStep = nextStep;
  render();
}

function toggleCollectionChoiceField(field) {
  collectionChoiceOpenField = collectionChoiceOpenField === field ? "" : String(field || "");
  render();
}

function selectCollectionChoice(field, value, action = "App.updateCollectionDraftField") {
  const handler = String(action || "");
  if (handler === "App.updateCollectionDraftField") {
    updateCollectionDraftField(field, value);
  }
  collectionChoiceOpenField = "";
  render();
}

function toggleCollectionStorage() {
  collectionStorageOpen = !collectionStorageOpen;
  render();
}

function applyWishlistSuggestion(field, value) {
  const decoded = decodeURIComponent(String(value || ""));
  wishlistCreateDraft[field] = decoded;
  const input = document.querySelector(`.wishlist-create-form [name="${field}"]`);
  if (input) input.value = decoded;
  const container = document.querySelector(`[data-wishlist-suggestions="${field}"]`);
  if (container) {
    container.innerHTML = "";
    container.classList.add("hidden");
  }
  const submit = document.querySelector(".wishlist-create-submit");
  if (submit) {
    submit.disabled = !wishlistCreateReady();
    submit.classList.toggle("is-disabled", !wishlistCreateReady());
  }
}

function applyCollectionSuggestion(field, value) {
  const decoded = decodeURIComponent(String(value || ""));
  collectionCreateDraft[field] = decoded;
  const input = document.querySelector(`.wishlist-create-form [name="${field}"]`);
  if (input) input.value = decoded;
  const container = document.querySelector(`[data-collection-suggestions="${field}"]`);
  if (container) {
    container.innerHTML = "";
    container.classList.add("hidden");
  }
  const submit = document.querySelector(".wishlist-create-submit");
  if (submit) {
    submit.disabled = !collectionCreateReady();
    submit.classList.toggle("is-disabled", !collectionCreateReady());
  }
}

function toggleWishlistCondition(event) {
  event?.preventDefault?.();
  wishlistCreateDraft.condition = wishlistCreateDraft.condition === "used" ? "new" : "used";
  const toggle = document.querySelector(".wishlist-condition-toggle");
  if (toggle) {
    toggle.classList.toggle("is-new", wishlistCreateDraft.condition === "new");
    toggle.classList.toggle("is-used", wishlistCreateDraft.condition !== "new");
    const label = toggle.querySelector("span");
    if (label) label.textContent = wishlistConditionLabel(wishlistCreateDraft.condition);
  }
}

async function pickWishlistImage(event) {
  const file = event.currentTarget.files?.[0];
  if (!file) return;
  wishlistCreateDraft.image = await fileToDataUrl(file);
  render();
}

async function pickCollectionImages(event) {
  const files = Array.from(event.currentTarget.files || []).slice(0, 3);
  if (!files.length) return;
  const nextImages = await Promise.all(files.map((file) => fileToDataUrl(file)));
  collectionCreateDraft.images = [...collectionCreateDraft.images, ...nextImages].slice(0, 3);
  collectionCreateDraft.activeImageIndex = Math.min(
    collectionCreateDraft.activeImageIndex,
    Math.max(collectionCreateDraft.images.length - 1, 0),
  );
  collectionCreateDraft.zoom = 1;
  render();
}

function selectCollectionImage(index) {
  if (suppressCollectionThumbClick) {
    suppressCollectionThumbClick = false;
    return;
  }
  if (index < 0 || index >= collectionCreateDraft.images.length) return;
  collectionCreateDraft.activeImageIndex = index;
  collectionCreateDraft.zoom = 1;
  render();
}

function collectionTouchDistance(touches) {
  if (!touches || touches.length < 2) return 0;
  const [a, b] = touches;
  return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
}

function handleCollectionImageTouchStart(event) {
  if (event.touches?.length === 2) {
    collectionImagePinch = {
      startDistance: collectionTouchDistance(event.touches),
      startZoom: collectionCreateDraft.zoom || 1,
    };
  }
}

function handleCollectionImageTouchMove(event) {
  if (event.touches?.length !== 2 || !collectionImagePinch) return;
  event.preventDefault();
  const distance = collectionTouchDistance(event.touches);
  if (!distance || !collectionImagePinch.startDistance) return;
  const nextZoom = Math.min(3, Math.max(1, (collectionImagePinch.startZoom * distance) / collectionImagePinch.startDistance));
  collectionCreateDraft.zoom = Number(nextZoom.toFixed(2));
  const image = document.querySelector(".collection-create-image-slot img");
  if (image) image.style.transform = `scale(${collectionCreateDraft.zoom})`;
}

function handleCollectionImageTouchEnd() {
  if (collectionImagePinch && (collectionCreateDraft.zoom || 1) < 1.02) {
    collectionCreateDraft.zoom = 1;
    const image = document.querySelector(".collection-create-image-slot img");
    if (image) image.style.transform = "scale(1)";
  }
  collectionImagePinch = null;
}

function startCollectionThumbReorder(event, index) {
  const target = event.currentTarget;
  if (!target) return;
  const container = target.parentElement;
  if (!container) return;
  collectionThumbDrag = {
    pointerId: event.pointerId,
    index,
    moved: false,
    target,
    container,
    startX: event.clientX,
    startY: event.clientY,
    offsetX: 0,
    offsetY: 0,
  };
  target.classList.add("is-dragging");
  target.setPointerCapture?.(event.pointerId);
}

function moveCollectionThumbReorder(event) {
  if (!collectionThumbDrag || collectionThumbDrag.pointerId !== event.pointerId) return;
  const drag = collectionThumbDrag;
  drag.offsetX = event.clientX - drag.startX;
  drag.offsetY = event.clientY - drag.startY;
  if (Math.abs(drag.offsetX) > 3 || Math.abs(drag.offsetY) > 3) drag.moved = true;
  drag.target.style.transform = `translate(${drag.offsetX}px, ${drag.offsetY}px) scale(1.06)`;
  const hovered = document.elementFromPoint(event.clientX, event.clientY)?.closest?.(".collection-create-thumb:not(.is-dragging)");
  if (!hovered || hovered === drag.target || !drag.container.contains(hovered)) return;
  const allThumbs = [...drag.container.querySelectorAll(".collection-create-thumb:not(.collection-create-thumb-add)")];
  const draggedIndex = allThumbs.indexOf(drag.target);
  const hoveredIndex = allThumbs.indexOf(hovered);
  if (draggedIndex < 0 || hoveredIndex < 0 || draggedIndex === hoveredIndex) return;
  if (draggedIndex < hoveredIndex) {
    drag.container.insertBefore(drag.target, hovered.nextSibling);
  } else {
    drag.container.insertBefore(drag.target, hovered);
  }
}

function endCollectionThumbReorder(event) {
  if (!collectionThumbDrag || collectionThumbDrag.pointerId !== event.pointerId) return;
  const drag = collectionThumbDrag;
  drag.target.releasePointerCapture?.(event.pointerId);
  drag.target.classList.remove("is-dragging");
  drag.target.style.transform = "";
  if (drag.moved) {
    suppressCollectionThumbClick = true;
    const orderedSources = [...drag.container.querySelectorAll(".collection-create-thumb img")].map((image) => image.getAttribute("src") || "");
    collectionCreateDraft.images = orderedSources.filter(Boolean);
    const activeSrc = drag.target.querySelector("img")?.getAttribute("src") || "";
    collectionCreateDraft.activeImageIndex = Math.max(0, collectionCreateDraft.images.indexOf(activeSrc));
    render();
    setTimeout(() => {
      suppressCollectionThumbClick = false;
    }, 120);
  }
  collectionThumbDrag = null;
}

function cancelCollectionThumbReorder() {
  if (!collectionThumbDrag) return;
  collectionThumbDrag.target.classList.remove("is-dragging");
  collectionThumbDrag.target.style.transform = "";
  collectionThumbDrag = null;
}

function publishWishlistItem(event, userId) {
  event.preventDefault();
  const user = findUser(userId);
  if (!user || !wishlistCreateReady()) return;
  const nextItem = buildWishlistDraftItem(user);
  user.wishlistDolls = [nextItem, ...(user.wishlistDolls || [])];
  saveState();
  wishlistCreateDraft = emptyWishlistDraft();
  routeTo(wishlistItemHref(userId, nextItem.id));
}

function publishCollectionItem(event, userId) {
  event.preventDefault();
  const user = findUser(userId);
  if (!user || !collectionCreateReady()) return;
  const nextItem = buildCollectionDraftItem();
  user.collectionDolls = [nextItem, ...(user.collectionDolls || [])];
  saveState();
  collectionCreateDraft = emptyCollectionDraft();
  collectionCreateStep = 1;
  collectionChoiceOpenField = "";
  collectionStorageOpen = false;
  routeTo(profileShelfHref(userId, "collection"));
}

function renderProfile(id, section = "collection", activeWishId = "", createMode = "") {
  const user = findUser(id);
  const me = currentUser();
  if (!user || user.blocked) {
    document.body.classList.remove("has-modal");
    renderShell(emptyState("Цей профіль недоступний."));
    return;
  }

  const activeSection = normalizeProfileSection(section);
  const activeIndex = shelfSectionIndex(activeSection);
  const own = me?.id === user.id;
  const isFollowing = me?.following.includes(user.id);
  const posts = state.posts
    .filter((post) => post.userId === user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const location = [user.country, user.city].filter(Boolean).join(", ");
  const collectionDolls = user.collectionDolls || [];
  const wishlistDolls = user.wishlistDolls || [];
  const foundWishlist = wishlistDolls.filter((item) => item.purchased).length;
  const shelfStatus = `${collectionDolls.length} на полці • ${wishlistDolls.length - foundWishlist} ще шукаються`;
  const activeWishItem =
    activeSection === "wishlist" ? wishlistDolls.find((item) => item.id === activeWishId) || null : null;
  const creatingCollection = activeSection === "collection" && createMode === "collection";
  const creatingWishlist = activeSection === "wishlist" && createMode === "wishlist";
  document.body.classList.toggle("has-modal", Boolean(activeWishItem || creatingWishlist || creatingCollection));

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
        <div class="profile-avatar-wrap ${user.isPremium ? "is-premium" : "is-default"}">${avatar(user, "large")}</div>
        <div class="profile-card-body">
          <p class="profile-location">${escapeHtml(location || "Колекціонер")}</p>
          <h1>${escapeHtml(user.nickname)}</h1>
          <p class="profile-bio">${escapeHtml(user.bio || "Поки без опису.")}</p>
          <p class="profile-collector-signal">${escapeHtml(shelfStatus)}</p>
          <div class="stats profile-stats">
            <span class="stat"><strong>${collectionDolls.length}</strong><span class="muted">На полке</span></span>
            <span class="stat"><strong>${wishlistDolls.length}</strong><span class="muted">В wishlist</span></span>
            <span class="stat"><strong>${foundWishlist}</strong><span class="muted">Найдено</span></span>
            <span class="stat"><strong>${user.followers.length}</strong><span class="muted">Подписчики</span></span>
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
              <div class="profile-info-item">
                <h3>Пости та shelf stories</h3>
                <p>${posts.length ? `${posts.length} публікацій уже прив'язані до цього профілю.` : "Поки що без публікацій, але профіль уже працює як особиста колекційна вітрина."}</p>
              </div>
            </div>
          </details>
        </div>

        <div class="profile-shelf-shell">
          <div class="profile-shelf-nav">
            <div class="profile-shelf-tabs" role="tablist" aria-label="Profile shelf sections">
              ${PROFILE_SHELF_SECTIONS.map((panel) => {
                const active = panel === activeSection ? "active" : "";
                const label = panel === "wishlist" ? "Wish List" : "Collection";
                return `<a class="profile-shelf-tab ${active}" href="${profileShelfHref(user.id, panel)}" role="tab" aria-selected="${panel === activeSection ? "true" : "false"}">${label}</a>`;
              }).join("")}
            </div>
            <div class="profile-shelf-swipe-note">
              <span class="profile-shelf-swipe-dot" aria-hidden="true"></span>
              однією рукою: просто свайпни
            </div>
          </div>

          <div
            class="profile-shelf-stage"
            data-user-id="${user.id}"
            data-index="${activeIndex}"
            onpointerdown="App.startProfileShelfSwipe(event)"
            onpointermove="App.moveProfileShelfSwipe(event)"
            onpointerup="App.endProfileShelfSwipe(event)"
            onpointercancel="App.cancelProfileShelfSwipe(event)"
          >
            <div class="profile-shelf-track" style="transform: translateX(calc(-${activeIndex * 100}% + var(--profile-swipe-offset, 0px)));">
              ${renderShelfPanel({ user, section: "collection", activeSection, items: collectionDolls })}
              ${renderShelfPanel({ user, section: "wishlist", activeSection, items: wishlistDolls })}
            </div>
          </div>

          <div class="profile-shelf-pager" aria-hidden="true">
            ${PROFILE_SHELF_SECTIONS.map((panel) => `<span class="profile-shelf-pager-dot ${panel === activeSection ? "active" : ""}"></span>`).join("")}
          </div>
        </div>
      </div>
    </section>
    ${renderWishlistFocusModal(user, activeWishItem)}
    ${creatingCollection ? renderCollectionCreateModal(user) : ""}
    ${creatingWishlist ? renderWishlistCreateModal(user) : ""}
  `);
  if (creatingCollection) {
    renderCollectionCreateSuggestions("brand");
    renderCollectionCreateSuggestions("collectionName");
    renderCollectionCreateSuggestions("name");
  }
  if (creatingWishlist) {
    renderWishlistCreateSuggestions("brand");
    renderWishlistCreateSuggestions("collectionName");
    renderWishlistCreateSuggestions("name");
  }
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
  createSelectedTags = [];
  createTagQuery = "";
  createTagError = "";
  createTagLocale = "uk";
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
                  <input id="createTagsValue" name="tags" type="hidden" />
                  <div id="createTagComposer" class="tag-composer" aria-live="polite">
                    <div id="createTagSelection" class="tag-composer__chips"></div>
                    <div class="tag-composer__entry">
                      <input
                        id="createTagInput"
                        class="tag-composer__input"
                        type="text"
                        placeholder="Бренд, персонаж або колекція"
                        autocomplete="off"
                        oninput="App.handleCreateTagInput(this.value)"
                        onkeydown="App.handleCreateTagKeydown(event)"
                      />
                      <span id="createTagCounter" class="tag-composer__counter">0/5</span>
                    </div>
                    <div id="createTagSuggestions" class="tag-composer__suggestions hidden"></div>
                  </div>
                  <span id="createTagError" class="field-error hidden"></span>
                </label>
                <button class="button" type="submit">Опублікувати</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  `);
  window.setTimeout(() => {
    initCreateStudio();
    initCreateTagComposer();
  }, 0);
}

function renderPostPage(id) {
  const post = findPost(id);
  const me = currentUser();
  const highlightedCommentId = new URLSearchParams(location.hash.split("?")[1] || "").get("comment") || "";
  if (!post) {
    renderShell(emptyState("Пост не знайдено."));
    return;
  }
  const user = findUser(post.userId);
  const comments = post.comments
    .map((comment) => {
      const author = findUser(comment.userId);
      const canDelete = me && (me.id === comment.userId || canAccessAdmin(me));
      return `
        <div class="comment-row ${comment.id === highlightedCommentId ? "is-highlighted" : ""}">
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
  if (highlightedCommentId) {
    window.setTimeout(() => {
      document.querySelector(".comment-row.is-highlighted")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 90);
  }
}

function renderSearch() {
  const user = currentUser();
  if (!user) return renderLogin();
  const filters = Object.fromEntries(new URLSearchParams(location.hash.split("?")[1] || ""));
  const query = String(filters.q || "").trim().toLowerCase();
  const showComposer = filters.compose === "1";
  if (showComposer) {
    discussionSelectedTags = [];
    discussionTagQuery = "";
    discussionTagError = "";
    discussionTagLocale = "uk";
  }
  const discussionRecommendationContext = buildDiscussionRecommendationContext(user);
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
    .sort((a, b) => {
      const scoreDifference = discussionRecommendationScore(b, discussionRecommendationContext) - discussionRecommendationScore(a, discussionRecommendationContext);
      if (scoreDifference !== 0) return scoreDifference;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

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
        <p class="muted">Ветки ранжируются по подпискам, интересам и скрытым тегам коллекций, брендов и персонажей.</p>
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
                <input id="discussionTagsValue" name="tags" type="hidden" />
                <div id="discussionTagComposer" class="tag-composer" aria-live="polite">
                  <div id="discussionTagSelection" class="tag-composer__chips"></div>
                  <div class="tag-composer__entry">
                    <input
                      id="discussionTagInput"
                      class="tag-composer__input"
                      type="text"
                      placeholder="Бренд, персонаж або колекція"
                      autocomplete="off"
                      oninput="App.handleDiscussionTagInput(this.value)"
                      onkeydown="App.handleDiscussionTagKeydown(event)"
                    />
                    <span id="discussionTagCounter" class="tag-composer__counter">0/5</span>
                  </div>
                  <div id="discussionTagSuggestions" class="tag-composer__suggestions hidden"></div>
                </div>
                <span id="discussionTagError" class="field-error hidden"></span>
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
  if (showComposer) window.setTimeout(initDiscussionTagComposer, 0);
}

function renderNotificationsPage() {
  const user = currentUser();
  if (!user) return renderLogin();
  const notifications = visibleNotifications(user.id);
  renderShell(`
    <section class="notification-page">
      ${
        notifications.length
          ? `<div class="notification-list">${notifications.map(renderNotificationCard).join("")}</div>`
          : emptyState("Поки тихо. Нові лайки, коментарі та відповіді з'являться тут.")
      }
    </section>
  `);
}

function renderNotificationCard(notification) {
  const actor = findUser(notification.actorUserId);
  const post = notification.postId ? findPost(notification.postId) : null;
  const discussion = notification.discussionId ? findDiscussion(notification.discussionId) : null;
  if (!actor || (!post && !discussion)) return "";

  const kinds = {
    "post-like": {
      pill: "Лайк",
      title: `${actor.nickname} вподобав(ла) вашу публікацію`,
      preview: shortenText(post?.text || "", 96),
    },
    "post-comment": {
      pill: "Коментар",
      title: `${actor.nickname} залишив(ла) коментар до вашої публікації`,
      preview: notification.previewText || shortenText(post?.text || "", 96),
    },
    "discussion-like": {
      pill: "Лайк у клубі",
      title: `${actor.nickname} вподобав(ла) вашу ветку кукольного клуба`,
      preview: shortenText(discussion?.title || "", 96),
    },
    "discussion-reply": {
      pill: "Відповідь у клубі",
      title: `${actor.nickname} відповів(ла) у ветке кукольного клуба`,
      preview: notification.previewText || shortenText(discussion?.text || "", 96),
    },
  };
  const copy = kinds[notification.type];
  return `
    <a class="notification-card ${post ? "notification-card--with-post" : ""}" href="${notificationHref(notification)}">
      <span class="notification-avatar">${avatar(actor, "small")}</span>
      <div class="notification-copy">
        <div class="notification-meta">
          <span class="notification-pill">${escapeHtml(copy.pill)}</span>
          <span class="muted">${formatDate(notification.createdAt)}</span>
        </div>
        <strong>${escapeHtml(copy.title)}</strong>
        <p>${escapeHtml(copy.preview)}</p>
      </div>
      ${post ? renderNotificationPostThumb(post) : ""}
    </a>
  `;
}

function renderNotificationPostThumb(post) {
  return `
    <span class="notification-thumb">
      ${renderMedia(post.images?.[0] || HERO_IMAGE, "notification-thumb-media", "Мініатюра посту", post.crops?.[0])}
    </span>
  `;
}

function renderDiscussionCard(discussion, options = {}) {
  const { openComments = false, highlightReplyId = "" } = options;
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
      <details class="thread-comments" ${openComments ? "open" : ""}>
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
                      <div class="thread-reply ${reply.id === highlightReplyId ? "is-highlighted" : ""}">
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

function renderThreadPage(id) {
  const discussion = findDiscussion(id);
  const params = new URLSearchParams(location.hash.split("?")[1] || "");
  const highlightedReplyId = params.get("reply") || "";
  const fromNotifications = params.get("from") === "notifications";
  if (!discussion) {
    renderShell(emptyState("Ветку не знайдено."));
    return;
  }
  renderShell(`
    <section class="discussion-page thread-detail-page">
      <div class="discussion-topbar notification-topbar">
        <a class="ghost-button small" href="${fromNotifications ? "#/notifications" : "#/search"}">Назад</a>
        <div>
          <span class="eyebrow">Кукольний клуб</span>
          <h2>${escapeHtml(discussion.title)}</h2>
        </div>
      </div>
      <div class="discussion-feed">
        ${renderDiscussionCard(discussion, { openComments: true, highlightReplyId: highlightedReplyId })}
      </div>
    </section>
  `);
  if (highlightedReplyId) {
    window.setTimeout(() => {
      document.querySelector(".thread-reply.is-highlighted")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 90);
  }
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
  if (!canAccessAdmin(me)) {
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

function renderCreateTagComposer() {
  const valueInput = document.querySelector("#createTagsValue");
  const input = document.querySelector("#createTagInput");
  const selection = document.querySelector("#createTagSelection");
  const counter = document.querySelector("#createTagCounter");
  const suggestions = document.querySelector("#createTagSuggestions");
  const error = document.querySelector("#createTagError");
  const composer = document.querySelector("#createTagComposer");
  if (!input || !selection || !counter || !suggestions || !error || !composer) return;
  const displayLocale = createTagQuery.trim() ? detectTagLanguage(createTagQuery) : createTagLocale;

  if (valueInput) valueInput.value = createSelectedTags.join(", ");

  selection.innerHTML = createSelectedTags.length
    ? createSelectedTags
        .map(
          (tag) => `
            <button class="tag-composer__chip" type="button" onclick="App.removeCreateTag('${encodeURIComponent(tag)}')" aria-label="Прибрати тег ${escapeHtml(displayTagLabel(tag, displayLocale))}">
              <span>${escapeHtml(displayTagLabel(tag, displayLocale))}</span>
              <span aria-hidden="true">×</span>
            </button>
          `,
        )
        .join("")
    : `<span class="tag-composer__empty">Оберіть до 5 тегів: бренд, персонажа або колекцію</span>`;

  input.value = createTagQuery;
  input.disabled = createSelectedTags.length >= 5;
  input.placeholder = createSelectedTags.length >= 5 ? "Ліміт тегів досягнуто" : "Бренд, персонаж або колекція";
  counter.textContent = `${createSelectedTags.length}/5`;

  const matched = createSelectedTags.length >= 5 ? [] : createTagSuggestions(createTagQuery);
  suggestions.innerHTML = matched
    .map(
      (item) => `
        <button class="tag-composer__suggestion" type="button" onclick="App.addCreateTag('${encodeURIComponent(item.canonical)}')">
          ${escapeHtml(item.label)}
        </button>
      `,
    )
    .join("");
  suggestions.classList.toggle("hidden", !matched.length);

  const hasError = Boolean(createTagError);
  composer.classList.toggle("is-invalid", hasError);
  error.textContent = createTagError;
  error.classList.toggle("hidden", !hasError);
}

function initCreateTagComposer() {
  renderCreateTagComposer();
}

function handleCreateTagInput(value) {
  createTagQuery = String(value || "").replace(/^\s+/, "");
  if (createTagQuery.trim()) createTagLocale = detectTagLanguage(createTagQuery);
  createTagError = "";
  renderCreateTagComposer();
}

function addCreateTag(tag) {
  const normalized = normalizePostTag(decodeURIComponent(String(tag || "")));
  if (!normalized) {
    createTagError = "Оберіть тег зі списку підказок.";
    renderCreateTagComposer();
    return;
  }
  if (createSelectedTags.includes(normalized)) {
    createTagError = "Цей тег уже доданий.";
    renderCreateTagComposer();
    return;
  }
  if (createSelectedTags.length >= 5) {
    createTagError = "Можна додати максимум 5 тегів.";
    renderCreateTagComposer();
    return;
  }
  createSelectedTags.push(normalized);
  createTagQuery = "";
  createTagError = "";
  renderCreateTagComposer();
  document.querySelector("#createTagInput")?.focus();
}

function removeCreateTag(tag) {
  const normalized = decodeURIComponent(String(tag || ""));
  createSelectedTags = createSelectedTags.filter((item) => item !== normalized);
  createTagError = "";
  renderCreateTagComposer();
  document.querySelector("#createTagInput")?.focus();
}

function handleCreateTagKeydown(event) {
  if (event.key === "Backspace" && !createTagQuery && createSelectedTags.length) {
    event.preventDefault();
    removeCreateTag(createSelectedTags[createSelectedTags.length - 1]);
    return;
  }

  if (event.key !== "Enter" && event.key !== ",") return;
  event.preventDefault();

  const exact = normalizePostTag(createTagQuery);
  const nextTag = exact || createTagSuggestions(createTagQuery)[0]?.canonical;
  if (nextTag) {
    addCreateTag(nextTag);
    return;
  }

  createTagError = "Оберіть тег зі списку підказок.";
  renderCreateTagComposer();
}

function validateCreateTags(options = {}) {
  const { focus = false } = options;
  if (createTagQuery.trim()) {
    createTagError = "Додайте вибраний тег зі списку або очистьте поле.";
    renderCreateTagComposer();
    if (focus) document.querySelector("#createTagInput")?.focus();
    return false;
  }
  if (!createSelectedTags.length) {
    createTagError = "Додайте хоча б один тег перед публікацією.";
    renderCreateTagComposer();
    if (focus) document.querySelector("#createTagInput")?.focus();
    return false;
  }
  createTagError = "";
  renderCreateTagComposer();
  return true;
}

function renderDiscussionTagComposer() {
  const valueInput = document.querySelector("#discussionTagsValue");
  const input = document.querySelector("#discussionTagInput");
  const selection = document.querySelector("#discussionTagSelection");
  const counter = document.querySelector("#discussionTagCounter");
  const suggestions = document.querySelector("#discussionTagSuggestions");
  const error = document.querySelector("#discussionTagError");
  const composer = document.querySelector("#discussionTagComposer");
  if (!input || !selection || !counter || !suggestions || !error || !composer) return;
  const displayLocale = discussionTagQuery.trim() ? detectTagLanguage(discussionTagQuery, discussionTagLocale) : discussionTagLocale;

  if (valueInput) valueInput.value = discussionSelectedTags.join(", ");

  selection.innerHTML = discussionSelectedTags.length
    ? discussionSelectedTags
        .map(
          (tag) => `
            <button class="tag-composer__chip" type="button" onclick="App.removeDiscussionTag('${encodeURIComponent(tag)}')" aria-label="Прибрати тег ${escapeHtml(displayTagLabel(tag, displayLocale))}">
              <span>${escapeHtml(displayTagLabel(tag, displayLocale))}</span>
              <span aria-hidden="true">×</span>
            </button>
          `,
        )
        .join("")
    : `<span class="tag-composer__empty">Оберіть до 5 тегів: бренд, персонажа або колекцію</span>`;

  input.value = discussionTagQuery;
  input.disabled = discussionSelectedTags.length >= 5;
  input.placeholder = discussionSelectedTags.length >= 5 ? "Ліміт тегів досягнуто" : "Бренд, персонаж або колекція";
  counter.textContent = `${discussionSelectedTags.length}/5`;

  const matched = discussionSelectedTags.length >= 5 ? [] : discussionTagSuggestions(discussionTagQuery);
  suggestions.innerHTML = matched
    .map(
      (item) => `
        <button class="tag-composer__suggestion" type="button" onclick="App.addDiscussionTag('${encodeURIComponent(item.canonical)}')">
          ${escapeHtml(item.label)}
        </button>
      `,
    )
    .join("");
  suggestions.classList.toggle("hidden", !matched.length);

  const hasError = Boolean(discussionTagError);
  composer.classList.toggle("is-invalid", hasError);
  error.textContent = discussionTagError;
  error.classList.toggle("hidden", !hasError);
}

function initDiscussionTagComposer() {
  renderDiscussionTagComposer();
}

function handleDiscussionTagInput(value) {
  discussionTagQuery = String(value || "").replace(/^\s+/, "");
  if (discussionTagQuery.trim()) discussionTagLocale = detectTagLanguage(discussionTagQuery, discussionTagLocale);
  discussionTagError = "";
  renderDiscussionTagComposer();
}

function addDiscussionTag(tag) {
  const normalized = normalizePostTag(decodeURIComponent(String(tag || "")));
  if (!normalized) {
    discussionTagError = "Оберіть тег зі списку підказок.";
    renderDiscussionTagComposer();
    return;
  }
  if (discussionSelectedTags.includes(normalized)) {
    discussionTagError = "Цей тег уже доданий.";
    renderDiscussionTagComposer();
    return;
  }
  if (discussionSelectedTags.length >= 5) {
    discussionTagError = "Можна додати максимум 5 тегів.";
    renderDiscussionTagComposer();
    return;
  }
  discussionSelectedTags.push(normalized);
  discussionTagQuery = "";
  discussionTagError = "";
  renderDiscussionTagComposer();
  document.querySelector("#discussionTagInput")?.focus();
}

function removeDiscussionTag(tag) {
  const normalized = decodeURIComponent(String(tag || ""));
  discussionSelectedTags = discussionSelectedTags.filter((item) => item !== normalized);
  discussionTagError = "";
  renderDiscussionTagComposer();
  document.querySelector("#discussionTagInput")?.focus();
}

function handleDiscussionTagKeydown(event) {
  if (event.key === "Backspace" && !discussionTagQuery && discussionSelectedTags.length) {
    event.preventDefault();
    removeDiscussionTag(discussionSelectedTags[discussionSelectedTags.length - 1]);
    return;
  }

  if (event.key !== "Enter" && event.key !== ",") return;
  event.preventDefault();

  const exact = normalizePostTag(discussionTagQuery);
  const nextTag = exact || discussionTagSuggestions(discussionTagQuery)[0]?.canonical;
  if (nextTag) {
    addDiscussionTag(nextTag);
    return;
  }

  discussionTagError = "Оберіть тег зі списку підказок.";
  renderDiscussionTagComposer();
}

function validateDiscussionTags(options = {}) {
  const { focus = false } = options;
  if (discussionTagQuery.trim()) {
    discussionTagError = "Додайте вибраний тег зі списку або очистьте поле.";
    renderDiscussionTagComposer();
    if (focus) document.querySelector("#discussionTagInput")?.focus();
    return false;
  }
  if (!discussionSelectedTags.length) {
    discussionTagError = "Додайте хоча б один тег перед публікацією.";
    renderDiscussionTagComposer();
    if (focus) document.querySelector("#discussionTagInput")?.focus();
    return false;
  }
  discussionTagError = "";
  renderDiscussionTagComposer();
  return true;
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
    alert("Профіль не знайдено. Спробуйте інший нікнейм або створіть новий профіль.");
    return;
  }
  if (user.id === ADMIN_USER_ID && !hasOwnerAccess()) {
    alert("Цей службовий профіль прихований і недоступний для звичайного входу.");
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
  const liked = post.likes.includes(me.id);
  post.likes = liked ? post.likes.filter((id) => id !== me.id) : [...post.likes, me.id];
  if (liked) {
    removeNotifications(
      (notification) =>
        notification.type === "post-like" &&
        notification.postId === post.id &&
        notification.actorUserId === me.id &&
        notification.recipientUserId === post.userId,
    );
  } else {
    createNotification({
      type: "post-like",
      recipientUserId: post.userId,
      actorUserId: me.id,
      postId: post.id,
    });
  }
  saveState();
  render();
}

async function createPost(event) {
  event.preventDefault();
  const me = currentUser();
  if (!me) return;
  if (!validateCreateTags({ focus: true })) return;
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
  const tags = createSelectedTags.slice(0, 5);
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
  const comment = {
    id: `c-${Date.now()}`,
    userId: me.id,
    text,
    createdAt: new Date().toISOString(),
  };
  post.comments.push(comment);
  createNotification({
    type: "post-comment",
    recipientUserId: post.userId,
    actorUserId: me.id,
    postId: post.id,
    commentId: comment.id,
    previewText: text,
    createdAt: comment.createdAt,
  });
  saveState();
  render();
}

async function createDiscussion(event) {
  event.preventDefault();
  const me = currentUser();
  if (!me) return;
  if (!validateDiscussionTags({ focus: true })) return;
  const data = new FormData(event.currentTarget);
  const title = String(data.get("title") || "").trim();
  const text = String(data.get("text") || "").trim();
  const tags = discussionSelectedTags.slice(0, 5);
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
  const recipients = new Set([discussion.userId, ...discussion.replies.map((item) => item.userId)]);
  recipients.delete(me.id);
  recipients.forEach((recipientUserId) => {
    createNotification({
      type: "discussion-reply",
      recipientUserId,
      actorUserId: me.id,
      discussionId: discussion.id,
      replyId: reply.id,
      previewText: text,
      createdAt: reply.createdAt,
    });
  });
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
  const liked = discussion.likes.includes(me.id);
  discussion.likes = liked ? discussion.likes.filter((id) => id !== me.id) : [...discussion.likes, me.id];
  if (liked) {
    removeNotifications(
      (notification) =>
        notification.type === "discussion-like" &&
        notification.discussionId === discussion.id &&
        notification.actorUserId === me.id &&
        notification.recipientUserId === discussion.userId,
    );
  } else {
    createNotification({
      type: "discussion-like",
      recipientUserId: discussion.userId,
      actorUserId: me.id,
      discussionId: discussion.id,
    });
  }
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
    const canDelete = me.id === comment.userId || canAccessAdmin(me);
    return !(comment.id === commentId && canDelete);
  });
  removeNotifications((notification) => notification.commentId === commentId);
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
  if (!canAccessAdmin(me)) return;
  state.posts = state.posts.filter((post) => post.id !== postId);
  removeNotifications((notification) => notification.postId === postId);
  saveState();
  renderAdmin();
}

function toggleBlockUser(userId) {
  const me = currentUser();
  const user = findUser(userId);
  if (!canAccessAdmin(me) || !user || user.id === me.id) return;
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

function swipeEventPoint(event) {
  const touch = event.touches?.[0] || event.changedTouches?.[0];
  return {
    x: touch?.clientX ?? event.clientX ?? 0,
    y: touch?.clientY ?? event.clientY ?? 0,
  };
}

function startProfileShelfSwipe(event) {
  const stage = event.currentTarget;
  const point = swipeEventPoint(event);
  stage.dataset.startX = String(point.x);
  stage.dataset.startY = String(point.y);
  stage.dataset.lock = "";
  stage.dataset.dragged = "false";
  stage.classList.add("is-swiping");
}

function moveProfileShelfSwipe(event) {
  const stage = event.currentTarget;
  if (!stage.dataset.startX || !stage.dataset.startY) return;
  const point = swipeEventPoint(event);
  const deltaX = point.x - Number(stage.dataset.startX);
  const deltaY = point.y - Number(stage.dataset.startY);
  if (!stage.dataset.lock) {
    if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return;
    stage.dataset.lock = Math.abs(deltaX) > Math.abs(deltaY) ? "x" : "y";
  }
  if (stage.dataset.lock !== "x") return;
  stage.dataset.dragged = Math.abs(deltaX) > 12 ? "true" : "false";
  const currentIndex = Number(stage.dataset.index || 0);
  const isFirst = currentIndex === 0 && deltaX > 0;
  const isLast = currentIndex === PROFILE_SHELF_SECTIONS.length - 1 && deltaX < 0;
  const offset = isFirst || isLast ? deltaX * 0.32 : deltaX;
  stage.style.setProperty("--profile-swipe-offset", `${offset}px`);
  if (event.cancelable) event.preventDefault();
}

function endProfileShelfSwipe(event) {
  const stage = event.currentTarget;
  const point = swipeEventPoint(event);
  const startX = Number(stage.dataset.startX || point.x);
  const deltaX = point.x - startX;
  const currentIndex = Number(stage.dataset.index || 0);
  let nextIndex = currentIndex;

  if (stage.dataset.lock === "x" && Math.abs(deltaX) > 64) {
    nextIndex = Math.max(0, Math.min(PROFILE_SHELF_SECTIONS.length - 1, currentIndex + (deltaX < 0 ? 1 : -1)));
  }

  stage.classList.remove("is-swiping");
  stage.style.setProperty("--profile-swipe-offset", "0px");

  const userId = stage.dataset.userId;
  window.setTimeout(() => {
    delete stage.dataset.startX;
    delete stage.dataset.startY;
    delete stage.dataset.lock;
    delete stage.dataset.dragged;
  }, 0);

  if (userId && nextIndex !== currentIndex) {
    routeTo(profileShelfHref(userId, PROFILE_SHELF_SECTIONS[nextIndex]));
  }
}

function cancelProfileShelfSwipe(event) {
  const stage = event.currentTarget;
  stage.classList.remove("is-swiping");
  stage.style.setProperty("--profile-swipe-offset", "0px");
  delete stage.dataset.startX;
  delete stage.dataset.startY;
  delete stage.dataset.lock;
  delete stage.dataset.dragged;
}

function render() {
  const hash = getHash();
  const [path] = hash.split("?");
  const params = getHashQueryParams();
  const parts = path.replace("#/", "").split("/");
  const screen = parts[0] || "feed";
  const id = parts[1];
  const section = parts[2];
  document.body.classList.remove("has-modal");

  if (screen !== "create-post") stopCreateCamera();

  if (screen === "login") return renderLogin();
  if (screen === "register") return renderRegister();
  if (screen === "onboarding") return renderOnboarding();
  if (screen === "profile") return renderProfile(id, section, params.get("wish") || "", params.get("create") || "");
  if (screen === "edit-profile") return renderEditProfile();
  if (screen === "create-post") return renderCreatePost();
  if (screen === "post") return renderPostPage(id);
  if (screen === "search") return renderSearch();
  if (screen === "notifications") return renderNotificationsPage();
  if (screen === "thread") return renderThreadPage(id);
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
  addDiscussionTag,
  handleCreateTagInput,
  handleCreateTagKeydown,
  handleDiscussionTagInput,
  handleDiscussionTagKeydown,
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
  startProfileShelfSwipe,
  moveDrawerPull,
  moveProfileShelfSwipe,
  endDrawerPull,
  endProfileShelfSwipe,
  cancelDrawerPull,
  cancelProfileShelfSwipe,
  handleDrawerClick,
  moveCreateCropDrag,
  addCreateTag,
  openCreateCapture,
  openCreateGallery,
  openCreateDetails,
  openWishlistItem,
  openCollectionCreate,
  openWishlistCreate,
  closeCollectionCreate,
  closeWishlistCreate,
  setProfileShelfColumns,
  setProfileShelfSort,
  setProfileShelfFilter,
  toggleProfileShelfAction,
  toggleCollectionChoiceField,
  selectCollectionChoice,
  toggleCollectionStorage,
  previewCreateMedia,
  pickWishlistImage,
  pickCollectionImages,
  selectCollectionImage,
  handleCollectionImageTouchStart,
  handleCollectionImageTouchMove,
  handleCollectionImageTouchEnd,
  startCollectionThumbReorder,
  moveCollectionThumbReorder,
  endCollectionThumbReorder,
  cancelCollectionThumbReorder,
  updateWishlistDraftField,
  updateCollectionDraftField,
  goToCollectionCreateStep,
  applyWishlistSuggestion,
  applyCollectionSuggestion,
  toggleWishlistCondition,
  publishCollectionItem,
  publishWishlistItem,
  drawerEventY,
  removeDiscussionTag,
  removeCreateTag,
  selectCreateMedia,
  selectCreatePreview,
  startCreateCropDrag,
  setCreateMode,
  toggleBlockUser,
  toggleDiscussionLike,
  toggleFollow,
  toggleLike,
  toggleWishlistStatus,
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
