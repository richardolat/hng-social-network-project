import React from "react";
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <div className="App">
      <header>
        <h1>HNG Interns Social Network</h1>
      </header>
      <main>
        <section>
          <h2>Users</h2>
          <UserList />
        </section>
        <section>
          <h2>Create Post</h2>
          <PostForm />
        </section>
        <section>
          <h2>Posts</h2>
          <PostList />
        </section>
      </main>
    </div>
  );
}

export default App;