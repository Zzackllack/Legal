import React from 'react';

interface CardProps {
    title: string;
    description: string;
    href: string;
    icon?: React.ReactNode; // Optional icon prop
}

const Card: React.FC<CardProps> = ({ title, description, href, icon }) => (
    <a
        href={href}
        className="block p-6 bg-neutral-900 border border-neutral-800 rounded-lg shadow-md hover:bg-neutral-800 transition-colors duration-200 group"
    >
        <div className="flex items-center mb-3">
            {icon && <span className="mr-3 text-blue-400 group-hover:text-blue-300 transition-colors">{icon}</span>}
            <h3 className="text-xl font-semibold text-white group-hover:text-neutral-100 transition-colors">{title}</h3>
        </div>
        <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors">{description}</p>
    </a>
);

// Simple SVG icons for demonstration
const DocumentIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
);

const ShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
);

const CookieIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3 3 0 0 0-3-3 3 3 0 0 0-3 3m6 0a3 3 0 0 1-3 3 3 3 0 0 1-3-3m6 0h.008v.008H15.75v-.008Zm-6 0h.008v.008H9.75v-.008Z" />
    </svg>
);


const Overview: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8">
            <div className="text-center mb-12">
                 <img src="/media/law-svgrepo-com.svg" alt="Logo" className="h-20 w-20 mx-auto mb-6" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    Rechtliche Hinweise
                </h1>
                <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
                    Hier finden Sie alle wichtigen rechtlichen Informationen zu unserem Webangebot übersichtlich zusammengestellt.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                <Card
                    title="Impressum"
                    description="Angaben gemäß § 5 TMG und Kontaktdaten des Webseitenbetreibers."
                    href="/impressum"
                    icon={<DocumentIcon />}
                />
                <Card
                    title="Datenschutzerklärung"
                    description="Informationen zur Erhebung und Verarbeitung Ihrer personenbezogenen Daten."
                    href="/datenschutz"
                    icon={<ShieldIcon />}
                />
                <Card
                    title="Nutzungsbedingungen"
                    description="Regelungen für die Nutzung unserer Webseite und Dienste."
                    href="/nutzungsbedingungen"
                    icon={<DocumentIcon />}
                />
                <Card
                    title="Cookie Policy"
                    description="Details über die Verwendung von Cookies auf unserer Webseite."
                    href="/cookies"
                    icon={<CookieIcon />}
                />
            </div>
             {/* Enhanced background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] -z-10" />
        </div>
    );
};

export default Overview;
