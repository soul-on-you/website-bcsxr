import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/main.scss';
import '@/styles/_editor.scss';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'BCSPORTS',
	description:
		'XR (Extended Reality) Lab – a division of BCSports specializing in developing sports content in virtual reality. Discover our innovative projects!',
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
				<Footer />
			</body>
		</html>
	);
}
