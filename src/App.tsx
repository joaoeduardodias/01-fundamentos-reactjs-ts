import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import "./global.css";


  
const posts = [
  {
    id:1,
    author: {
      avatarUrl:"https://github.com/joaoeduardodias.png",
      name: "João Dias",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: ' <a href="">jane.design/doctorcare</a>'},
  
    ],
    publishedAt: new Date('2022-11-03 07:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl:"https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: ' <a href="">jane.design/doctorcare</a>'},
  
    ],
    publishedAt: new Date('2022-11-02 21:00:00')
  },
]


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
         {posts.map(post => (
          <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
         ))}
        </main>
      </div>
    </div>
  );
}
