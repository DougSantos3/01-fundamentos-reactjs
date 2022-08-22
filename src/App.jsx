import { Header } from './components/Header'
import { Post }  from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       
        <Sidebar />
        <main>
          <Post 
          author="Douglas Martins"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsam vitae iusto, dolores, laboriosam dicta quos, animi reprehenderit earum repudiandae laborum quod rerum. Odit sapiente eveniet veritatis enim dicta ea."
        />
          <Post
            author="Monise Martins"
            content="My wife"
          />
        </main>
      </div>
  
    </div>
  )
}

