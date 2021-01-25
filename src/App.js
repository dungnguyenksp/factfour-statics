import { useEffect, useState } from "react";
import PostList from "./components/PostList";

function App() {
  const listposts = [
    {
      id: 1,
      title: "Post 1",
      status: true,
    },
    {
      id: 2,
      title: "Post 2",
      status: true,
    },
    {
      id: 3,
      title: "Post 3",
      status: true,
    },
  ];

  const [postlist, setPostlist] = useState(listposts);

  useEffect(() => {
    const getListPosts = async () => {
      try {
        const requestURL =
          "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const request = await fetch(requestURL);
        const results = await request.json(request);
        console.log(results);
        setPostlist(results.data);
      } catch (error) {
        console.log("Fail get data" + error.message);
      }
    };
    getListPosts();
  }, []);

  return (
    <div>
      <PostList posts={postlist} />
    </div>
  );
}

export default App;
