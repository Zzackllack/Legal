import React from "react";

const Policy: React.FC = () => {
    return (
        <section id="policy-details" className="container mx-auto px-4 py-12 text-gray-200">
            <h1 className="text-6xl font-bold mb-6">Impressum</h1>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
                <em>Vorname Nachname:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
                <br />
                <em>Straße Nr.:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
                <br />
                <em>PLZ Ort:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
            <p className="mb-4">
                <em>Telefon:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
                <br />
                E-Mail:{" "}
                <a href="mailto:webmaster@zacklack.de" className="text-blue-400 underline">
                    webmaster@zacklack.de
                </a>
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p className="mb-4">
                <em>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</em>
                <br />
                Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Redaktionell verantwortlich</h2>
            <p className="mb-4">
                <em>Vorname Nachname:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
                <br />
                <em>Straße Nr.:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
                <br />
                <em>PLZ Ort:</em> Auf Anfrage, kontaktieren Sie uns bitte über die E-Mail-Adresse.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p className="mb-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
            <p className="mb-4">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Links</h2>
            <p className="mb-4">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht</h2>
            <p className="mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Weitere rechtliche Hinweise</h2>
            <p className="mb-4">
                Bitte beachten Sie auch unsere{" "}
                <a href="https://zacklack.de/datenschutz" className="text-blue-400 underline">
                    Datenschutzerklärung
                </a>{" "}
                ,{" "}
                <a href="https://zacklack.de/cookies" className="text-blue-400 underline">
                    Cookie-Richtlinie
                </a>{" "}
                und unsere{" "}
                <a href="https://zacklack.de/nutzungsbedingungen" className="text-blue-400 underline">
                    Nutzungsbedingungen
                </a>
            </p>

            <p className="mt-8 text-sm text-gray-400">
                Stand: 9.2.2025
            </p>
        </section>
    );
};

export default Policy;