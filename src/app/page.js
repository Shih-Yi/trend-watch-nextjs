'use client';

import Feed from "./components/Feed";

export default function Home() {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Trend Watch
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>Staying Ahead with New Summaries</span>
      </h1>
      <p className='desc text-center'>
        Stay informed with the latest insights, keeping ahead of trends through concise and informative updates. Explore now for strategic advantage
      </p>
      <Feed />
    </section>
  )
}
