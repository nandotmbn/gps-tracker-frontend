import { AppProps } from "next/app";
import Image from "next/image";
import React, { ReactChild } from "react";
import LOGO from "../../../public/logo.png";

interface LayoutProps {
	children: React.ReactNode;
}

function Button({ children }: LayoutProps) {
	return (
		<button className="px-4 h-12 mb-5 rounded w-full flex flex-col justify-center hover:text-emerald-800 hover:bg-white">
			<p>{children}</p>
		</button>
	);
}

function Sider() {
	return (
		<div className="flex-1 h-full sticky bg-emerald-800 text-white">
			<div className="w-full flex justify-center items-center flex-col">
				<Image alt="alt-image" src={LOGO} width={160} height={120} />
				<h1 className="font-semibold text-xl">GPS Tracker</h1>
			</div>
			<ul className="w-full flex justify-center items-center px-2 flex-col mt-16">
				<li className="w-full">
					<Button>Beranda</Button>
				</li>
				<li className="w-full">
					<Button>Lacak</Button>
				</li>
				<li className="w-full">
					<Button>Riwayat</Button>
				</li>
				<li className="w-full">
					<Button>Pengaturan</Button>
				</li>
			</ul>
		</div>
	);
}

export default Sider;
