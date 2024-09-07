"use client";

import { Button } from "@/components/ui/button";

export function Home() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="flex mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div>
            <h1 className="text-xl sm:text-5xl font-bold tracking-tight  ">
              Hi I'm Abdullah 👋🏻
            </h1>
            <p className="text-md sm:text-xl  tracking-tight mt-4 text-gray-500">
              I'm a passionate software developer and a software engineering
              student at the University of Tripoli. With over four years of
              experience in mobile development and a solid foundation in web
              development, I specialize in building high-converting landing
              pages.
            </p>

            <div className="flex space-x-2 ">
              <Button title="View My Work" onClick={() => {}} />
              <Button title="Contact" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
