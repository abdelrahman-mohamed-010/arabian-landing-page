import Adventure from "@/components/Adventure";
import BookTicket from "@/components/BookTicket";
import ContactForm from "@/components/ContactForm";
import Dbr from "@/components/Dbr";
import Footer from "@/components/Footer";
import Heritage from "@/components/Heritage";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import ScrollableSection from "@/components/ScrollableSection";
import Slider from "@/components/Slider";
import Sponsers from "@/components/Sponsers";
import React from "react";
import arLocales from "../../../public/locales/ar.json";
import enLocales from "../../../public/locales/en.json";


const Page = async ({ params }) => {
  const lang = (await params).lang;
  const translations = lang === "ar" ? arLocales : enLocales;

  const dummyData = [
    { id: 1, title: "Card 1", imgSrc: "/images/3.png" },
    { id: 2, title: "Card 2", imgSrc: "/images/3.png" },
    { id: 3, title: "Card 3", imgSrc: "/images/3.png" },
    { id: 4, title: "Card 4", imgSrc: "/images/3.png" },
    { id: 5, title: "Card 5", imgSrc: "/images/3.png" },
    { id: 6, title: "Card 6", imgSrc: "/images/3.png" },
    { id: 7, title: "Card 7", imgSrc: "/images/3.png" },
    { id: 8, title: "Card 8", imgSrc: "/images/3.png" },
    { id: 9, title: "Card 9", imgSrc: "/images/3.png" },
    { id: 10, title: "Card 10", imgSrc: "/images/3.png" },
    { id: 11, title: "Card 11", imgSrc: "/images/3.png" },
    { id: 12, title: "Card 12", imgSrc: "/images/3.png" },
    { id: 13, title: "Card 13", imgSrc: "/images/3.png" },
    { id: 14, title: "Card 14", imgSrc: "/images/3.png" },
    { id: 15, title: "Card 15", imgSrc: "/images/3.png" },
  ];
  return (
    <>
      <Hero lang={lang} />
      <Location translations={translations} />
      <img
        src="/images/Screenshot 2024-12-09 at 08.22.02.png"
        className=" w-full h-[60px] mt-20"
      />
      <section className="text-white md:px-28 px-4 pt-20  relative">
        <h1 className="text-[28px]">{translations.explore.explore}</h1>
        {/* <h1 className="text-[28px]">{translations.adventure.title}</h1> */}
        <ScrollableSection items={dummyData} />
      </section>
      <Adventure translations={translations} />
      <Heritage translations={translations} />
      <Dbr translations={translations} />
      <Slider items={dummyData} />
      <BookTicket translations={translations} />
      <ContactForm translations={translations} />
      <Sponsers />
      <Footer translations={translations} />
    </>
  );
};

export default Page;
