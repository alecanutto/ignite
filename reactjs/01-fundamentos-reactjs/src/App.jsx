import { useState } from 'react';
import Post from './Post';

function App() {
  return <div>
    <Post
      author="Alessandra Canuto"
      content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat, excepturi officia unde veritatis, ad explicabo in dignissimos rem nobis eligendi nulla provident exercitationem neque libero natus accusamus? Sunt, commodi!"
    />
    <Post
      author="Anônimo"
      content="Post anônimo"
    />
  </div>
}

export default App;


