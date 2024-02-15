'use client';

import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
const NewsCardList = ({ news }) => {
  return (
    <>
      {news.map((post) => (
        <NewsCard
          key={post._id}
          post={post}
        />
      ))}
    </>
  );
};

export default function Feed() {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/news");
    console.log('response-------------')
    console.log(response)
    const data = await response.json();
    console.log(data)
    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-[1200px] gap-2 grid grid-cols-12 grid-rows-2 px-4 my-12">
      <NewsCardList news={allPosts} />
    </div>
  )
}
