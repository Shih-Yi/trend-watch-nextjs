'use client';

import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";

export default function NewsCard({post}) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{post.topic}</p>
        <h4 className="text-white font-medium text-large">{post.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={post.img}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">Breathing App</p>
            <p className="text-tiny text-white/60">Get a good night&apos;s sleep.</p>
          </div>
        </div>
        <Button radius="full" size="sm">Read more</Button>
      </CardFooter>
    </Card>
  )
}
