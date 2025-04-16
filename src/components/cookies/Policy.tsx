import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="mb-4">
                Diese Cookie Policy gilt für sämtliche Webseiten, die unter der Second-Level-Domain <strong>zacklack.de</strong> betrieben werden. Unabhängig von der spezifischen Subdomain oder dem jeweiligen Einsatzgebiet, unterliegen alle Instanzen dieser Domäne den nachfolgenden Bestimmungen hinsichtlich der Verwendung von Cookies und ähnlichen Technologien.
                <br /><br />
                Unser Bestreben ist es, Ihnen eine sichere, performante und benutzerfreundliche Plattform zu bieten – unter gleichzeitiger Transparenz im Umgang mit technischen und datenschutzrelevanten Aspekten.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Was sind Cookies?</h2>
            <p className="mb-4">
                Cookies sind kleine Dateneinheiten, die von einer Webseite an den Browser eines Nutzers übermittelt und dort gespeichert werden. Sie dienen der Erfassung technischer Daten, der Speicherung von Nutzereinstellungen und der Optimierung der Webseitenfunktionalität. Neben klassischen Cookies kommen auch alternative Technologien wie Local Storage, Session Storage und Web Beacons zum Einsatz.
                <br /><br />
                Diese Technologien ermöglichen es uns, sowohl die Benutzererfahrung als auch die Sicherheit und Performance unserer Dienste nachhaltig zu verbessern.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Implementierte Cookie-Typen</h2>
            <p className="mb-4">
                <>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Notwendige Cookies</h3>
                        <p className="text-gray-200">
                            Diese Cookies sind unerlässlich für den Betrieb der Webseiten. Sie ermöglichen grundlegende Funktionen wie Navigation, Authentifizierung und Sicherheitsmaßnahmen. Ohne diese Cookies könnte die technische Integrität unserer Dienste nicht gewährleistet werden.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Analyse- und Performance-Cookies</h3>
                        <p className="text-gray-200">
                            Zur Optimierung der Webseitenperformance und zur Erfassung anonymisierter Nutzerdaten setzen wir Analyse-Tools ein – unter anderem Umami.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Funktionale Cookies</h3>
                        <p className="text-gray-200">
                            Funktionale Cookies speichern Ihre individuellen Einstellungen und Präferenzen, um Ihnen ein personalisiertes und konsistentes Surferlebnis zu ermöglichen – auch bei wiederholten Besuchen.
                        </p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-2">Cookies von Drittanbietern</h3>
                        <p className="text-gray-200">
                            Für technische Analysen und Sicherheitsverbesserungen kommen unter anderem{" "}
                            <a
                                href="https://www.cloudflare.com/privacypolicy/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                Cloudflare
                            </a>{" "}
                            sowie{" "}
                            <a
                                href="https://policies.google.com/privacy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 underline"
                            >
                                Google Search Console
                            </a> zum Einsatz.
                        </p>
                    </div>
                </>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Zweck und Funktionsweise der Cookies</h2>
            <p className="mb-4">
                <ul className="list-disc pl-8 space-y-3">
                    <li>
                        <strong>Betrieb und Sicherheit:</strong> Sicherstellung eines stabilen und geschützten Betriebs der gesamten Webseiteninfrastruktur.
                    </li>
                    <li>
                        <strong>Nutzererfahrung:</strong> Anpassung und Personalisierung der Inhalte basierend auf individuellen Präferenzen und Interaktionsmustern.
                    </li>
                    <li>
                        <strong>Leistungsüberwachung:</strong> Aggregierte Analyse des Nutzerverhaltens zur Identifizierung von Optimierungspotenzialen in der Systemarchitektur.
                    </li>
                    <li>
                        <strong>Content Management:</strong> Bereitstellung zielgerichteter und relevanter Inhalte, die den Ansprüchen der Nutzer gerecht werden.
                    </li>
                </ul>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Technische Implementierung und Sicherheitsmaßnahmen</h2>
            <p className="mb-4">
                Die technische Umsetzung unserer Cookie-Mechanismen erfolgt unter Einsatz modernster Webtechnologien. Hierbei werden sämtliche Datenübertragungen mittels SSL/TLS verschlüsselt. Unsere Serverinfrastruktur wird kontinuierlich überwacht und durch regelmäßige Sicherheitsupdates geschützt.
                <br /><br />
                Darüber hinaus setzen wir fortschrittliche Algorithmen ein, um potenzielle Sicherheitslücken frühzeitig zu identifizieren und zu schließen – so wird die Integrität der gespeicherten Daten jederzeit gewährleistet.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Deaktivierung und Verwaltung von Cookies</h2>
            <p className="mb-4">
                Sie haben als Nutzer die Möglichkeit, Cookies über die Einstellungen Ihres Browsers zu deaktivieren oder zu löschen. Beachten Sie jedoch, dass eine Deaktivierung zu Funktionseinschränkungen führen kann und bestimmte Dienste nicht mehr vollumfänglich genutzt werden können.
                <br /><br />
                Für weiterführende Informationen zur Verwaltung von Cookies konsultieren Sie bitte die jeweilige Dokumentation Ihres Browsers oder wenden Sie sich an unseren technischen Support.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Änderungsmanagement und Aktualisierungen</h2>
            <p className="mb-4">
                Wir behalten uns das Recht vor, diese Cookie Policy jederzeit zu aktualisieren oder anzupassen, um auf technische Weiterentwicklungen und neue gesetzliche Anforderungen zu reagieren. Alle vorgenommenen Änderungen werden unverzüglich auf dieser Seite kommuniziert.
                <br /><br />
                Es obliegt dem Nutzer, sich regelmäßig über die aktuelle Fassung der Richtlinie zu informieren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftungsausschluss</h2>
            <p className="mb-4">
                Diese Cookie Policy dient ausschließlich der Information über den Einsatz von Cookies und ähnlichen Technologien.
                <br /><br />
                Wir übernehmen keine Haftung für etwaige Schäden oder Konsequenzen, die aus der Nutzung oder Fehlkonfiguration der eingesetzten Technologien resultieren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt und Support</h2>
            <p className="mb-4">
                Bei Fragen, Anmerkungen oder technischen Problemen im Zusammenhang mit unserer Cookie Policy und der implementierten Technologie stehen wir Ihnen gerne zur Verfügung. Bitte nutzen Sie hierzu die E-Mail&nbsp;
                <a
                    href="mailto:contact@zacklack.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                > contact@zacklack.de
                </a>.
                <br /><br />
                Wir setzen alles daran, Ihnen einen reibungslosen und sicheren Service zu gewährleisten.
            </p>
            <p className="mt-8 text-sm text-gray-400">
                Stand: 08.02.2025
            </p>
        </section>
    );
};

export default Policy;