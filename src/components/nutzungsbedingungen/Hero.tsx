import { Spotlight } from "../ui/spotlight";

const Hero = () => {
    return (
        <div className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-black antialiased">
            <div className="absolute inset-0">
                <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <img src="/media/Designer.png" alt="Logo" className="h-20 w-20 mx-auto mb-8" />
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4 break-words">
                        Nutzungsbedingungen
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
                        Nachfolgend finden Sie die Nutzungsbedingungen für die Nutzung unserers Webangebotes.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#policy-details"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-neutral-200 transition-all duration-200 transform hover:scale-105"
                        >
                            Mehr
                        </a>
                        <a
                            href="mailto:contact@zacklack.de"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-neutral-500 text-neutral-200 hover:bg-neutral-900 transition-all duration-200 transform hover:scale-105"
                        >
                            Kontaktiere uns
                        </a>
                    </div>
                </div>
            </div>

            {/* Enhanced background grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
};

export default Hero;