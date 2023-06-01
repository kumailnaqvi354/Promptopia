"use client";
import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          onClick={() => () =>
            handleTagClick(post.tag) && handleTagClick(post.tag)}
          // handleTagClick={()=>handleTagClick(post.tag) && handleTagClick(post.tag) }
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleSearchChange = () => {
    console.log("here handleSearchChange");
    setSearchText(e.target.value);
    const searchResults = posts.filter(
      (post) =>
        post.tag == e.target.value ||
        post.creator.username == e.target.value ||
        post.prompt == e.target.value
    );
    console.log("searchResults", searchResults);
    if (searchResults.length) {
      setPosts(searchResults);
    }
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
