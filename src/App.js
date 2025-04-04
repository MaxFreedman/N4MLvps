import React from "react";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

export default function App() {
  return (
    <div className="app min-h-screen text-gray-800 flex items-center flex-col p-4 md:p-8 lg:p-12 bg-slate-50">
      <div className="w-full max-w-4xl">
        <header className="mb-8 border-b-2 border-blue-600 pb-4">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-800">N4ML</h1>
          <p className="text-lg text-blue-600">Ham Radio Operator</p>
        </header>

        <main className="space-y-8">
          <section>
            <p className="mb-4">
              Formerly N4MLF, now N4ML. I was issued KM4RDW in February of 2016, and then quickly got the Vanity N4MLF, My initials. 
              As I got my extra, and started to operate more, I looked to vanities and found N4ML, which was my same call minus the last letter. 
              Even though I now live in W1, I will probably keep this call for a while.
            </p>
            <p className="mb-4">
              If you send me a QSL card, I will send one back. No SASE or IRC required, but it would be appreciated. 
              Currently waiting on some new cards to arrive, so standby.
            </p>
          </section>

          <section>
            <p className="mb-4">
              I most commonly operate the <a href="http://qrz.com/db/w1hq" className="text-blue-600 hover:text-blue-800 underline">W1HQ</a> station, 
              as I do work at the ARRL. It is a solid station, has 160-6m, and is remote capable. 
              For contests I may end up as an op at some stations, or using the W1HQ station if it is available.
            </p>
          </section>

          <section>
            <p className="mb-4">
              I'm an accredited Volunteer Examiner with the ARRL and CAVEC and regulary VE for both online and in person test sessions.
            </p>
          </section>

          <section>
            <p className="mb-4">
              Give <a href="http://yarc.world" className="text-blue-600 hover:text-blue-800 underline">YARC</a> a look 
              if you're looking for youth actvitiy in amateur radio. A good international group of young hams.
            </p>
          </section>

          <section className="bg-blue-100 p-4 rounded-lg inline-block">
            <p>
              WWYC #968<br />
              YMCA #14
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Brief History</h2>
            <p className="mb-4">
              Got licensed in 2015 as part of my schools Ham Radio club licensing initiative, and then was club president for a few years, 
              during which I completed an ARISS contact. Got my dad (<a href="https://www.qrz.com/db/W4BFZ/" className="text-blue-600 hover:text-blue-800 underline">W4BFZ</a>) into the hobby, 
              and then after a brief hiatus I obtained my general class license in 2022, and most recently my Extra ticket at the 2023 Huntsville Hamfest.
            </p>
            <p className="mb-4">
              As of February 2025, I work in the ARRL Education and Learning department.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="shadow-md rounded-lg overflow-hidden">
                <img 
                  src="/hampages/n4ml/naqpssbaug24.png" 
                  alt="NAQP SSB August 2024 Award" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="shadow-md rounded-lg overflow-hidden">
                <img 
                  src="/hampages/n4ml/Screenshot_2025_02_26_104603.png.jpg" 
                  alt="Ham Radio Award" 
                  className="w-full h-auto" 
                />
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-12 pt-4 border-t border-gray-300 text-sm text-gray-600">
          <div className="flex flex-wrap gap-6 justify-center">
            <ContactButton text="QRZ Profile" url="https://www.qrz.com/db/N4ML" />
            <ContactButton text="Email" url="mailto:n4ml@arrl.net" />
            <ContactButton text="ARRL" url="https://www.arrl.org" />
          </div>
        </footer>
      </div>
    </div>
  );
}

function ContactButton({ text, url = "#" }) {
  return (
    <a
      href={url}
      className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white block rounded text-center shadow flex items-center justify-center leading-snug text-sm transition ease-in duration-150"
    >
      {text}
    </a>
  );
}