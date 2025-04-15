import { Icons } from "./ui/icons";
import { Button } from "./ui/button";

export default function Footer() {
    return (
        <footer className="py-12 bg-transparent backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Left Section */}
                    <div className="space-y-4 w-full md:w-1/3">
                        <div className="flex items-center gap-2">
                            <Icons.logo className="w-8 h-8 text-blue-400" />
                            <h2 className="text-lg font-bold text-white">Cédric</h2>
                        </div>
                        <p className="text-neutral-400 max-w-md">
                            Student Developer & Tech Enthusiast based in Berlin, Germany.
                            Passionate about modern web technologies, coding, and tech.
                        </p>
                        <div className="flex gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                            >
                                <a
                                    href="https://github.com/Zzackllack"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-400 text-white"
                                >
                                    <Icons.gitHub className="w-5 h-5" />
                                </a>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                asChild
                            >
                                <a
                                    href="mailto:contact@zacklack.de"
                                    className="hover:text-blue-400 text-white"
                                >
                                    <Icons.mail className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Section - Quick Links */}
                    <div className="grid grid-cols-2 gap-8 w-full md:w-2/3 md:flex md:justify-end">
                        <div className="space-y-4 md:ml-auto">
                            <h3 className="font-semibold text-white">Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://zacklack.de"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Main Page
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://privat.zacklack.de"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Login Page
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://zacklack.de:8443"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Server Console
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-4 md:ml-16">
                            <h3 className="font-semibold text-white">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a
                                        href="https://zacklack.de/impressum"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Legal Notice
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://zacklack.de/datenschutz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://zacklack.de/nutzungsbedingungen"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Terms of Use
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://zacklack.de/cookies"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-neutral-400 hover:text-blue-400 transition-colors"
                                    >
                                        Cookie Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-neutral-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-400 text-sm">
                            © {new Date().getFullYear()} Cédric. All rights reserved.
                        </p>
                        <p className="text-neutral-400 text-sm">
                            This site is open source on{" "}
                            <a
                                href="https://github.com/Zzackllack/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline"
                            >
                                GitHub
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}