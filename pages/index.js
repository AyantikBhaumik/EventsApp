import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { HomePage } from "@/src/components/home/home-page";
import { Header } from "@/src/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <HomePage data={ data } />
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("../data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
