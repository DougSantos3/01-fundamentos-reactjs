import { Header } from './components/Header'
import { Post }  from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'


const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/douglasmartins7.png',
      name: 'Douglas Martins',
      role: 'CEO/CTO @VRaptor Code'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerra 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no VR adventure, evento da VRaptor Code. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-25 08:31:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Maiki Brito',
      role: 'Educator @VRaptor Code'
    },
    content: [
      { type: 'paragraph', content: 'Fala galerra 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no VR adventure, evento da VRaptor Code. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-20 08:31:00'),
  },
]



export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
  
    </div>
  )
}