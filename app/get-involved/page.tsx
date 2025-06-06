"use client";

import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import client component to ensure proper Suspense usage
const GetInvolvedClient = dynamic(() => import("./GetInvolvedClient"), {
  ssr: false,
});

export default function GetInvolvedPage() {
  return (
    <>
      <Head>
        <title>Robinson Rnacheria Safety Action Plan</title>
        <meta
          name="description"
          content="Robinson Rancheria Safety Action Plan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GetInvolvedClient />
    </>
  );
}
