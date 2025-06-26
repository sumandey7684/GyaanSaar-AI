"use client";

import Search from "@/components/shared/Search";
import { Provider } from "react-redux";
import { store } from "@/utils/services/store";
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <Provider store={store}>
      <section className="flex flex-col size-full my-auto cursor-default">
        <Hero />
        <div className=" wrapper flex flex-col">
          <p className="text-xl md:text-3xl text-primary/80">
          Elevate your reading journey with{" "}
            <span className="underline text-foreground/80 hover:underline-offset-4">
              GyaanSaar AI
            </span>
            , a cutting-edge open-source tool for article summarization.
          </p>
        </div>
        <div className="flex flex-row my-auto">
          <Search />
        </div>
      </section>
    </Provider>
  );
}
