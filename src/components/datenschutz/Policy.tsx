import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-6xl font-bold mb-6">Datenschutzerklärung</h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Verantwortliche Stelle und Kontakt</h2>
            <p className="mb-4">
                Verantwortlicher im Sinne des Art. 4 Nr. 7 DSGVO (Datenschutz-Grundverordnung) für die Datenverarbeitungen auf der Second-Level-Domain zacklack.de einschließlich aller zugehörigen Subdomains ist:                
                <br /><br />
                <em>Name:</em> Cédric
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
                Es ist kein Datenschutzbeauftragter bestellt, da die gesetzlichen Voraussetzungen einer Bestellpflicht nicht vorliegen (Art. 37 DSGVO). Bei Fragen zum Datenschutz können Sie sich daher direkt an den Verantwortlichen wenden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Begriffsbestimmungen</h2>
            <p className="mb-4">
                Diese Datenschutzerklärung verwendet Begriffe im Sinne der DSGVO. Zur besseren Verständlichkeit werden wichtige datenschutzrechtliche Begriffe vorab erläutert (vgl. Art. 4 DSGVO):
                <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><strong>Personenbezogene Daten:</strong> Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen. Eine Person gilt als identifizierbar, wenn sie direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung wie einem Namen, einer Kennnummer, Standortdaten, einer Online-Kennung oder besonderen Merkmalen identifiziert werden kann. Dazu gehören z.B. Name, Anschrift, E-Mail-Adresse, aber auch IP-Adressen oder Gerätekennungen.</li>
                    <li><strong>Betroffene Person:</strong> Jede identifizierte oder identifizierbare natürliche Person, deren personenbezogene Daten verarbeitet werden (also z.B. Sie als Besucher*in dieser Website).</li>
                    <li><strong>Verarbeitung:</strong> Jeder Vorgang im Zusammenhang mit personenbezogenen Daten, egal ob automatisiert oder manuell, wie etwa das Erheben, das Erfassen, die Organisation, das Speichern, das Anpassen oder Verändern, das Auslesen, Abfragen, Verwenden, Offenlegen durch Übermittlung, Verbreiten oder eine andere Form der Bereitstellung, der Abgleich, die Verknüpfung, Einschränkung, das Löschen oder die Vernichtung von Daten.</li>
                    <li><strong>Verantwortlicher:</strong> Die Person oder Stelle, die allein oder gemeinsam über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet – hier also der oben genannte Webseitenbetreiber.</li>
                    <li><strong>Auftragsverarbeiter:</strong> Eine Person oder Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet (Art. 4 Nr. 8 DSGVO). Beispiel: Ein externer Dienstleister, der in unserem Auftrag Daten hostet.</li>
                    <li><strong>Empfänger:</strong> Eine Person oder Stelle, der personenbezogene Daten offengelegt werden – unabhängig davon, ob es sich um einen Dritten im datenschutzrechtlichen Sinne handelt oder nicht (Art. 4 Nr. 9 DSGVO). Behörden, die im Rahmen eines gesetzlichen Auftrags Daten erhalten, gelten jedoch nicht als Empfänger.</li>
                    <li><strong>Dritter:</strong> Jede Person oder Stelle außerhalb der betroffenen Person, des Verantwortlichen, des Auftragsverarbeiters und der Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, Daten zu verarbeiten.</li>
                    <li><strong>Einwilligung:</strong> Jede freiwillig und in informierter Weise durch eine eindeutige bestätigende Handlung abgegebene Willensbekundung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist (Art. 4 Nr. 11 DSGVO). Eine Einwilligung kann gemäß Art. 7 DSGVO jederzeit für die Zukunft widerrufen werden.</li>
                </ul>
                Hinweis: Weitere Begriffsbestimmungen können Art. 4 DSGVO entnommen werden. Wir verwenden die obigen Definitionen in dieser Datenschutzerklärung, um möglichst präzise auszudrücken, welche Daten wir wie verarbeiten.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Gegenstand und Geltungsbereich dieser Datenschutzerklärung</h2>
            <p className="mb-4">
                Diese Datenschutzerklärung informiert Sie darüber, welche personenbezogenen Daten auf der Domain zacklack.de und allen zugehörigen Subdomains erhoben werden, zu welchen Zwecken wir diese Daten verwenden und wie wir sie verarbeiten. Sie gilt für alle Webseiten-Inhalte unter zacklack.de einschließlich Unterseiten und Subdomains (insbesondere legal.zacklack.de für rechtliche Hinweise, quiz.zacklack.de für interaktive Quiz-Angebote, cedric.zacklack.de als persönliche Portfolio-Seite des Betreibers, sowie weitere Dienste wie privat.zacklack.de, wakapi.zacklack.de etc.).
                <br /><br />
                Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften – insbesondere der DSGVO, dem Bundesdatenschutzgesetz (BDSG), dem Telekommunikation-Telemedien-Datenschutz-Gesetz (TTDSG) sowie der ePrivacy-Richtlinie 2002/58/EG – und dieser Datenschutzerklärung.
                <br /><br />
                Bitte beachten Sie, dass wir uns vorbehalten, diese Datenschutzerklärung bei Bedarf anzupassen, etwa bei Einführung neuer Dienste oder Änderungen der Rechtslage. Die jeweils aktuelle Fassung wird an dieser Stelle veröffentlicht.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Allgemeine Hinweise zur Datenverarbeitung auf unserer Website</h2>
            <p className="mb-4">
                <strong>Umfang der Verarbeitung:</strong> Wir verarbeiten personenbezogene Daten unserer Nutzer nur, soweit dies zur Bereitstellung eines funktionsfähigen Webangebots sowie unserer Inhalte und Leistungen erforderlich ist. Grundsätzlich erfolgt die Nutzung unserer Website ohne aktive Angabe personenbezogener Daten durch Sie (es existieren keine klassischen Benutzerkonten oder Formulareingaben für öffentliche Nutzer). Dennoch werden bei der Nutzung – vor allem technisch bedingt – einige Daten automatisch verarbeitet (siehe unten). Sofern Sie bestimmte geschützte Bereiche nutzen (Login-Bereich) oder unsere interaktiven Dienste aufrufen, kann es zur Verarbeitung weiterer Daten (z.B. Ihrer E-Mail-Adresse zur Verifikation) kommen. In keinem Fall erfolgt eine Verarbeitung Ihrer Daten zu Werbezwecken oder Profilbildung ohne Ihre ausdrückliche Einwilligung.
                <br /><br />
                <strong>Rechtsgrundlagen:</strong> Soweit wir für Verarbeitungsvorgänge eine Einwilligung von Ihnen einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Ist die Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen erforderlich (z.B. Nutzung eines von uns angebotenen Dienstes, für den Sie sich registriert haben), erfolgt sie auf Basis von Art. 6 Abs. 1 lit. b DSGVO. In den meisten Fällen stützen wir die Datenverarbeitung auf berechtigte Interessen nach Art. 6 Abs. 1 lit. f DSGVO – etwa unser Interesse an der technisch fehlerfreien Bereitstellung und Sicherheit der Website, an der Verbesserung unseres Angebots oder der Beantwortung von Anfragen. In solchen Fällen prüfen wir stets, dass keine überwiegenden Interessen oder Grundrechte Ihrerseits entgegenstehen. Zudem werden im erforderlichen Umfang die spezialgesetzlichen Regelungen des TTDSG berücksichtigt (siehe insbesondere § 25 TTDSG für den Einsatz von Cookies und ähnlichen Technologien). Technisch notwendige Cookies oder Zugriffe, die ausschließlich der Übertragung einer Nachricht oder der Bereitstellung eines von Ihnen gewünschten Dienstes dienen, erfolgen auf Grundlage von § 25 Abs. 2 Nr. 2 TTDSG (keine Einwilligung erforderlich). Für alle anderen Fälle holen wir eine Einwilligung nach § 25 Abs. 1 TTDSG ein (etwa über eine Cookie-Einwilligung, sofern nicht bereits durch die Konfiguration des Browsers erteilt).
                <br /><br />
                <strong>Sicherheitsmaßnahmen:</strong> Wir haben umfangreiche technische und organisatorische Maßnahmen getroffen, um Ihre Daten nach dem Stand der Technik zu schützen. Dennoch weisen wir darauf hin, dass die Datenübertragung im Internet stets Sicherheitslücken aufweisen kann (vgl. Erwägungsgrund 49 DSGVO) – ein absoluter Schutz ist nicht garantiert. Insbesondere bei der Übertragung von Daten via Internet (z.B. Kommunikation per E-Mail) kann kein lückenloser Schutz vor dem Zugriff Dritter gewährleistet werden. Wir bitten Sie, dies bei der Nutzung unseres Webangebots zu berücksichtigen.
                <br /><br />
                <strong>Weitergabe in Drittländer:</strong> Wo wir Dienste von Anbietern außerhalb der EU/EWR einsetzen (insbesondere in den USA), stellen wir sicher, dass ein angemessenes Datenschutzniveau gewährleistet ist. Für bestimmte US-Dienstleister besteht ein Angemessenheitsbeschluss gemäß Art. 45 DSGVO – diese sind unter dem EU–US Data Privacy Framework zertifiziert, wodurch die Europäische Kommission ein angemessenes Schutzniveau in den USA anerkennt. Wo wir auf nicht zertifizierte Anbieter zurückgreifen, erfolgen Übermittlungen auf Grundlage von Standarddatenschutzklauseln nach Art. 46 Abs. 2 lit. c DSGVO und ggf. zusätzlichen Maßnahmen. Wir weisen jedoch darauf hin, dass in solchen Fällen ein gewisses Restrisiko bestehen kann, da US-Behörden unter Umständen Zugriff auf personenbezogene Daten nehmen können (Stichwort CLOUD Act); dies wurde auch durch das Schrems II-Urteil des EuGH hervorgehoben. Sollte keine der genannten Garantien greifen, holen wir Ihre ausdrückliche Einwilligung nach Art. 49 Abs. 1 lit. a DSGVO ein, bevor wir Daten in ein unsicheres Drittland übermitteln.
                <br /><br />
                Im Folgenden erläutern wir im Detail, welche Datenverarbeitungsvorgänge stattfinden, wenn Sie unser Webangebot nutzen, und nennen die jeweiligen Zwecke, Rechtsgrundlagen, Empfänger und Schutzmaßnahmen.
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