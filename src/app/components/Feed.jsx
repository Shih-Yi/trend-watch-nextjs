'use client';

import axios from "axios";
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
    const response = await axios.get("/api/news", {
      headers: {
        'Cache-Control': 'no-store'
      }
    });
    console.log('response-------------')
    console.log(response)
    const data = await response.data;
    console.log('data-------------')
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
