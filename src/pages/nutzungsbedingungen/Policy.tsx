import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-6xl font-bold mb-6 break-words">Nutzungsbedingungen</h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Geltungsbereich und Vertragsgegenstand</h2>
            <p className="mb-4">
                Diese Nutzungsbedingungen regeln die Nutzung jeglicher, der unter der Second-Level-Domain <strong>"zacklack.de"</strong>, sowie verbundenen Subdomains, bereitgestellten Inhalte im Rahmen ihres Internetauftritts bereitgestellten Dienstleistungen und Inhalte, insbesondere der Website unter der Domain <strong>zacklack.de</strong>. Mit dem Aufruf und der Nutzung dieser Website erklärt der Nutzer sein Einverständnis mit diesen Bedingungen. Die vorliegenden Regelungen stellen die vertragliche Grundlage für sämtliche Nutzungen der angebotenen Dienste dar und sind in verbindlicher, rechtssicherer Formulierung abgefasst.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Vertragspartner</h2>
            <p className="mb-4">
                Vertragspartner im Sinne dieser Nutzungsbedingungen ist:
                <br />
                <em>Vorname Nachname:</em> Auf Anfrage, kontaktieren Sie uns bitte über die angegebene E-Mail-Adresse.
                <br />
                <em>Straße Nr.:</em> Auf Anfrage, kontaktieren Sie uns bitte über die angegebene E-Mail-Adresse.
                <br />
                <em>PLZ Ort:</em> Auf Anfrage, kontaktieren Sie uns bitte über die angegebene E-Mail-Adresse.
                <br />
                E-Mail: <a href="mailto:webmaster@zacklack.de" className="text-blue-400 underline"> webmaster@zacklack.de </a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Nutzung der Website</h2>
            <p className="mb-4">
                Die Nutzung der Website erfolgt in eigener Verantwortung des Nutzers. Es obliegt dem Nutzer, sich über alle erforderlichen technischen Voraussetzungen zu informieren, die zur Nutzung der angebotenen Dienste notwendig sind. Sämtliche Inhalte werden ohne Gewähr auf Aktualität, Vollständigkeit und Richtigkeit zur Verfügung gestellt. Der Nutzer ist verpflichtet, sich eigenständig über etwaige Änderungen der Inhalte und technischen Voraussetzungen zu informieren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftungsausschluss und Haftungsbeschränkung</h2>
            <p className="mb-4">
                Die bereitgestellten Inhalte dieser Website erfolgen in dem Bestreben, korrekte und aktuelle Informationen anzubieten. Der Anbieter übernimmt jedoch keine Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Inhalte. Haftungsansprüche gegen den Anbieter, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen entstehen, sind ausgeschlossen – soweit seitens des Anbieters kein vorsätzliches oder grob fahrlässiges Verschulden nachgewiesen werden kann. Dieser Haftungsausschluss gilt ebenfalls für sämtliche Inhalte, die über externe Links bereitgestellt werden, da der Anbieter auf fremde Inhalte keinen Einfluss hat.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht und Nutzungsrechte</h2>
            <p className="mb-4">
                Die durch den Anbieter erstellten Inhalte und Werke auf dieser Website unterliegen dem deutschen Urheberrecht. Jede Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Verwertung bedarf der ausdrücklichen schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Das Herunterladen und Speichern von Inhalten zum privaten, nicht kommerziellen Gebrauch ist gestattet, sofern alle urheberrechtlichen Hinweise unverändert bleiben.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Streitbeilegung</h2>
            <p className="mb-4">
                Der Anbieter erklärt, dass er grundsätzlich nicht bereit oder verpflichtet ist, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Im Falle von Streitigkeiten, die sich aus der Nutzung dieser Website ergeben, wird zunächst eine einvernehmliche Lösung zwischen den Parteien angestrebt. Sollte eine Einigung nicht erzielt werden, gelten die gesetzlichen Bestimmungen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Schlussbestimmungen</h2>
            <p className="mb-4">
                Sollten einzelne Bestimmungen dieser Nutzungsbedingungen ganz oder teilweise unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen Regelung tritt eine solche Regelung in Kraft, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
            </p>

            <p className="mt-8 text-sm text-gray-400">
                Stand: 10.02.2025
            </p>
        </section>
    );
};

export default Policy;