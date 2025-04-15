import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-6xl font-bold mb-6">Datenschutzerklärung</h1>
            <p className="mb-4">
                Diese Datenschutzerklärung informiert in umfassender und detaillierter Weise über Art, Umfang und Zweck der Erhebung, Verarbeitung und Nutzung personenbezogener Daten im Rahmen der Bereitstellung und Nutzung sämtlicher Webseiten, die unter der Second-Level-Domain{" "}
                <strong>zacklack.de</strong> betrieben werden. Sie basiert auf den Vorgaben der Datenschutz-Grundverordnung (DSGVO; vgl. Art. 4 ff. DSGVO), des Bundesdatenschutzgesetzes (BDSG; insbesondere § 26 BDSG), des Telemediengesetzes (TMG; vgl. § 13 TMG), des Telekommunikation-Telemedien-Datenschutz-Gesetzes (TTDSG) sowie der ePrivacy-Richtlinie (2002/58/EG). Alle hier getroffenen Maßnahmen erfolgen im Einklang mit den gesetzlichen Vorgaben.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Allgemeine Hinweise und Pflichtinformationen</h2>
            <p className="mb-4">
                Personenbezogene Daten im Sinne dieser Erklärung sind alle Informationen, welche sich auf eine identifizierte oder identifizierbare natürliche Person beziehen (vgl. Art. 4 DSGVO). Hierzu zählen insbesondere Name, Anschrift, E-Mail-Adresse, Telefonnummer, IP-Adresse sowie alle weiteren Daten, die eine Identifizierung ermöglichen. Die Erhebung, Verarbeitung und Nutzung dieser Daten erfolgt ausschließlich auf Basis der in Art. 6 DSGVO genannten Rechtsgrundlagen.
                <br /><br />
                <strong>Verantwortlicher im Sinne der DSGVO (Art. 4 DSGVO):</strong>
                <br />
                <em>Name:</em> Auf Anfrage, kontaktieren sie uns unter unserer E-Mail Adresse.
                <br />
                <em>Anschrift:</em> Auf Anfrage, kontaktieren sie uns unter unserer E-Mail Adresse.
                <br />
                <em>Telefon:</em> Auf Anfrage, kontaktieren sie uns unter unserer E-Mail Adresse.
                <br />
                E-Mail:{" "}
                <a href="mailto:webmaster@zacklack.de" className="text-blue-400 underline">
                    webmaster@zacklack.de
                </a>
                <br /><br />
                Diese Datenschutzerklärung gilt für sämtliche Datenverarbeitungen im Zusammenhang mit der Nutzung unserer Webangebote unter der Domain{" "}
                <strong>zacklack.de</strong>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Erfassung und Speicherung personenbezogener Daten</h2>
            <p className="mb-4">
                Beim Aufrufen unserer Webseiten werden automatisch bestimmte Informationen durch den von Ihnen verwendeten Browser an den Server übermittelt. Hierzu zählen insbesondere:
                <br /><br />
                - Browsertyp und Browserversion
                <br />
                - Betriebssystem
                <br />
                - Referrer URL (zuvor besuchte Seite)
                <br />
                - Hostname des zugreifenden Rechners
                <br />
                - Datum und Uhrzeit des Zugriffs
                <br /><br />
                Diese Daten werden in sogenannten Server-Logfiles gespeichert. Die Speicherung erfolgt zur Sicherstellung eines störungsfreien Betriebs sowie zur Verbesserung unseres Angebots, und zwar auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Eine Identifizierung einzelner Nutzer erfolgt hierbei nicht.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Verwendung von Cookies und ähnlichen Technologien</h2>
            <p className="mb-4">
                Unsere Webseiten verwenden Cookies, um die Benutzerfreundlichkeit zu erhöhen und eine reibungslose Nutzung der angebotenen Inhalte zu gewährleisten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Es werden sowohl temporäre (Session-) als auch dauerhafte Cookies eingesetzt. Die Nutzung dieser Technologien erfolgt unter Beachtung der Datenschutzbestimmungen (vgl. Art. 5 sowie Art. 6 Abs. 1 lit. f DSGVO und die ePrivacy-Richtlinie). Über die individuellen Einstellungen Ihres Browsers können Sie die Verwendung von Cookies steuern oder verhindern, wobei in einzelnen Fällen Funktionseinschränkungen möglich sind.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Einsatz von Cloudflare</h2>
            <p className="mb-4">
                Zur Optimierung der Auslieferung unserer Inhalte und zur Absicherung unserer Webpräsenz greifen wir auf die Dienste des Anbieters Cloudflare zurück. Cloudflare fungiert als Content Delivery Network (CDN) und stellt darüber hinaus Sicherheitsfunktionen bereit, um Cyberangriffen, DDoS-Attacken und sonstigen unberechtigten Zugriffen wirksam entgegenzuwirken. Die Datenübertragung an Cloudflare erfolgt unter Zuhilfenahme von SSL/TLS-Verschlüsselung und auf Grundlage berechtigter Interessen (vgl. Art. 6 Abs. 1 lit. f DSGVO). Die Übermittlung in Drittstaaten, insbesondere in die USA, erfolgt unter vertraglich gesicherten Garantien.
                <br /><br />
                Weitere Einzelheiten finden Sie in der Datenschutzerklärung von Cloudflare:{" "}
                <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://www.cloudflare.com/privacypolicy/
                </a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Einsatz von Umami</h2>
            <p className="mb-4">
                Zur Erfassung und Auswertung anonymisierter Nutzungsstatistiken kommt das Analyse-Tool Umami zum Einsatz. Dieses Tool erhebt ausschließlich aggregierte und anonymisierte Daten, um die Performance sowie die Benutzerfreundlichkeit unserer Webangebote zu optimieren. Die Verarbeitung erfolgt auf Basis der datenschutzrechtlichen Vorgaben (vgl. Art. 6 DSGVO) und unterliegt keinen individuellen Nutzerprofilierungen, da sämtliche Daten anonymisiert werden.
                <br /><br />
                Weitere Informationen hierzu entnehmen Sie bitte der Umami-Datenschutzerklärung unter:{" "}
                <a
                    href="https://umami.is/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://umami.is/
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Einbindung von Google Fonts</h2>
            <p className="mb-4">
                Zur einheitlichen Darstellung typografischer Elemente wird auf unserer Webseite der Dienst Google Fonts verwendet. Hierbei werden Schriftarten von den Servern der Google Inc. geladen, wobei technische Daten wie Ihre IP-Adresse und weitere für die Darstellung notwendige Informationen übermittelt werden. Diese Datenübertragung erfolgt zur Sicherstellung einer konsistenten visuellen Darstellung (vgl. Art. 6 DSGVO und die ePrivacy-Richtlinie). Es besteht kein Vertrag zur Auftragsverarbeitung mit Google, und eine weitergehende Profilerstellung findet nicht statt.
                <br /><br />
                Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://policies.google.com/privacy
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Einsatz der Google Search Console</h2>
            <p className="mb-4">
                Die Google Search Console wird eingesetzt, um die Auffindbarkeit und Leistung unserer Webseiten in den organischen Suchergebnissen zu überwachen und zu analysieren. Dabei werden technische Daten wie Zugriffszeiten, Seitenaufrufe und Fehlermeldungen erfasst – dies erfolgt auf Grundlage berechtigter Interessen (vgl. Art. 6 Abs. 1 lit. f DSGVO). Eine Zusammenführung der erhobenen Daten mit anderen personenbezogenen Informationen findet nicht statt.
                <br /><br />
                Weitere Details entnehmen Sie bitte der Datenschutzerklärung von Google:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://policies.google.com/privacy
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Einsatz von Google Analytics</h2>
            <p className="mb-4">
                Zur umfassenden statistischen Analyse der Nutzung unserer Webseiten wird Google Analytics eingesetzt, ein Dienst der Google Inc. Hierbei werden Daten über Ihr Nutzungsverhalten, wie besuchte Seiten, Verweildauer und Herkunft, erfasst. Die Verarbeitung erfolgt auf Grundlage berechtigter Interessen (vgl. Art. 6 Abs. 1 lit. f DSGVO). Soweit technisch möglich, wird Ihre IP-Adresse anonymisiert (vgl. Recital 30 DSGVO), sodass eine direkte Zuordnung zu Ihrer Person nicht erfolgt.
                <br /><br />
                Weitere Informationen entnehmen Sie bitte der Datenschutzerklärung von Google:{" "}
                <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 underline"
                >
                    https://policies.google.com/privacy
                </a>.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Hosting</h2>
            <p className="mb-4">
                Die Bereitstellung und Verwaltung der Serverinfrastruktur, die den Betrieb unserer Webangebote ermöglicht, erfolgt in eigenverantwortlicher Durchführung unter Zuhilfenahme einer Synology NAS (Modell DS220+) in Verbindung mit der Web Station. Diese Infrastruktur ist operativ in Berlin, Deutschland, stationiert. Ergänzend dazu umfasst unser technisches Repertoire einen weiteren Server, ausgestattet mit einer Intel CPU sowie NVMe SSD, der ergänzend zum primären System zur Anwendung kommt.
                <br /><br />
                Sämtliche Datenverarbeitungsprozesse erfolgen unter strikter Einhaltung der geltenden gesetzlichen Bestimmungen, insbesondere gemäß Art. 6 DSGVO, und unter Berücksichtigung interner Richtlinien. Die eingesetzte technische Infrastruktur unterliegt einem kontinuierlichen Überwachungs- und Wartungsprozess, welcher den Anforderungen der IT-Sicherheit (vgl. Art. 32 DSGVO) gerecht wird. Die operative Verwaltung der Hostinginfrastruktur wird als integraler Bestandteil eines ganzheitlichen IT-Betriebskonzepts betrachtet, das alle relevanten Prozesse und Kontrollmechanismen umfasst. Details hierzu werden aus Gründen der Betriebssicherheit und zum Schutz betrieblicher Geheimhaltungsinteressen nicht offengelegt.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Speicherdauer</h2>
            <p className="mb-4">
                Ihre personenbezogenen Daten werden so lange gespeichert, wie dies zur Erreichung der in dieser Datenschutzerklärung genannten Zwecke erforderlich ist. Soweit keine spezifische Speicherdauer angegeben ist, werden Ihre Daten gelöscht, sobald der Zweck der Speicherung entfällt oder Sie Ihre Einwilligung widerrufen, es sei denn, gesetzliche Aufbewahrungspflichten (z. B. steuer- oder handelsrechtliche) stehen dem entgegen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="mb-4">
                Zum Schutz der Übertragung vertraulicher Inhalte wird auf dieser Website eine SSL- bzw. TLS-Verschlüsselung eingesetzt. Eine verschlüsselte Verbindung erkennen Sie an der URL (https://) und dem Schlosssymbol in Ihrer Browserzeile.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Widerruf Ihrer Einwilligung und Widerspruchsrecht</h2>
            <p className="mb-4">
                Viele Datenverarbeitungsvorgänge basieren auf Ihrer Einwilligung (vgl. Art. 7 DSGVO). Diese können Sie jederzeit widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird. Ferner haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen (vgl. Art. 21 DSGVO).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h2>
            <p className="mb-4">
                Sollten Sie den Eindruck haben, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die geltenden Datenschutzbestimmungen verstößt, steht Ihnen das Recht zu, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Zuständig hierfür ist in der Regel die Aufsichtsbehörde Ihres gewöhnlichen Aufenthalts oder des Ortes, an dem der mutmaßliche Verstoß stattgefunden hat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Recht auf Datenübertragbarkeit</h2>
            <p className="mb-4">
                Sie haben das Recht, Ihre personenbezogenen Daten, die auf Grundlage Ihrer Einwilligung oder zur Vertragserfüllung automatisiert verarbeitet werden, in einem gängigen, maschinenlesbaren Format zu erhalten und diese Daten an einen anderen Verantwortlichen zu übermitteln (vgl. Art. 20 DSGVO).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Auskunft, Berichtigung und Löschung</h2>
            <p className="mb-4">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und den Zweck der Datenverarbeitung (vgl. Art. 15 DSGVO). Ferner haben Sie das Recht, unrichtige Daten berichtigen zu lassen sowie unter Beachtung gesetzlicher Vorgaben die Löschung Ihrer personenbezogenen Daten zu verlangen (vgl. Art. 16 und 17 DSGVO).
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Recht auf Einschränkung der Verarbeitung</h2>
            <p className="mb-4">
                Unter bestimmten Voraussetzungen haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Dies gilt beispielsweise, wenn Sie die Richtigkeit der Daten bestreiten oder wenn die Verarbeitung unrechtmäßig erfolgt ist. In diesen Fällen werden die Daten – abgesehen von der Speicherung – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen weiterverarbeitet.
            </p>

            <p className="mt-8 text-sm text-gray-400">
                Stand: 08.02.2025
            </p>
        </section>
    );
};

export default Policy;