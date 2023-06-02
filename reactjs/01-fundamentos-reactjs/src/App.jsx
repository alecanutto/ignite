import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Alessandra Canuto"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos culpa quod ad sequi pariatur eveniet in laudantium perspiciatis ut libero commodi quam sit, reprehenderit doloribus odio veritatis unde illo. Perferendis."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
