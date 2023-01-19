import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const MapWithNoSSR = dynamic(() => import("../components/Maps"), {
    ssr: false
  });

	return (
		<div>
			<Head>
				<title>GPS Tracker</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainLayout>
				<MapWithNoSSR />
			</MainLayout>
		</div>
	);
};

export default Home;
