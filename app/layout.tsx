import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import '@/styles/main.scss';
import '@/styles/_editor.scss';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Black from '@/components/black';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BGSPORTS',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<Navbar />
				{children}
				{/* <Black /> */}
				<Footer />
			</body>
		</html>
	);
}
