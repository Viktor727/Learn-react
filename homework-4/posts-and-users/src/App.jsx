// Задача: Створити додаток зі списком posts і select з userName. ✅

// 🖥 Демо-відео додаю. ✅

// Структура додатку: складається з двох компонентів: ✅
// 1. Перший компонент – список постів. ✅
// Дані отримуємо з API. ✅
// Кожен елемент списку – title/userName поста і кнопка Delete. ✅
// При натисканні на кнопку Delete – елемент видаляється зі списку. ✅
// Також, userName поточного поста має видалитись з select з userName. ✅


// 2. Другий компонент – select з userName. ✅
// Дані отримуємо з того ж API. ✅
// Перший option – All. Всі наступні option – поле userName. ✅
// При виборі All: в списку posts відображаються всі отримані пости. ✅
// При виборі будь-якого userName: в списку posts відображається лише той пост, юзер якого був обраний. (Примітка: в базі у кожного юзера лише по одному посту) ✅


// Реалізація: ✅
// В папці src/store створюємо папку для сутності posts з файлами reducer.js і actions.js. ✅
// initialState сутності posts має складатись з масиву posts і рядка selectedUser. ✅
// Доступні actions для сутності posts: ✅
// setPostsAction – для збереження списку постів отриманих з API. ✅
// deletePostAction – для видалення поста зі списку posts. ✅
// setUserAction – для збереження ім'я вибраного в select userName/All. ✅
// В папці src/context створюємо файл PostsContext.js, в якому за допомогою функції createContext створюємо контекст PostsContext. ✅
// В компоненті App.jsx:✅
// За допомогою хука userRudecer створюємо const [state, dispatch] = useReducer(reducer, initialState), де reducer, initialState – імпортуємо з src/store/posts/reducer.js ✅
// Дочірні компоненти Posts і UserFilter огортаємо в PostsContext.Provider. Об'єкт value в провайдері містить властивості state, dispatch, створені в попередньому пункті хуком useReducer. ✅
// В компоненті Posts.jsx список з постами і userName/All беремо зі state сутності posts за допомогою хука useContext(PostsContext). Отримуємо/модифікуємо state.posts за допомогою ф-ії dispatch() відповідного action (setPostsAction, deletePostAction). ✅
// В компоненті UserFilter.jsx дані для select з userName беремо зі state сутності posts за допомогою хука useContext(PostsContext). Встановлюємо в state.selectedUser за допомогою ф-ії dispatch() відповідного action (setUserAction). ✅

// https://65a040c2600f49256fafc441.mockapi.io/posts ✅



import PostList from "./components/PostList/PostList";
import Select from "./components/Select";
import PostsContext from "./context/PostsContext";
import { useReducer } from "react";
import { INITIAL_STATE } from "./store/posts/reduce";
import reducer from "./store/posts/reduce";
// import { PostListProps } from "./interfaces/interface";
// import reducer from "./store/posts/reduce";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <>
      <PostsContext.Provider value={{ state, dispatch }}>
        <Select></Select>
        <PostList></PostList>
      </PostsContext.Provider>
    </>
  );
}

export default App
