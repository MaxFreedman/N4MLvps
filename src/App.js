import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

// Home/Main Page Component
function Home() {
  return (
    <>
      <section className="py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Welcome to N4ML</h2>
        <p className="mb-4 text-lg">
          This website serves as a personal space for amateur radio operations, contest results, and related activities.
        </p>
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm border border-blue-100">
          <h3 className="text-xl font-bold text-blue-700 mb-2">Latest Updates</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><NavLink to="/pj2tyouth" className="text-blue-600 hover:underline">Upcoming PJ2T Youth Contest Operation in 2025</NavLink></li>
            <li><NavLink to="/awards" className="text-blue-600 hover:underline">Recent contest results and awards</NavLink></li>
          </ul>
        </div>
      </section>
    </>
  );
}

// PJ2T Page Component
function PJ2TYouth() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">PJ2T 2025 Youth Contest Operation</h2>
        <p className="mb-4">
          PJ2T will be QRV in the 2025 CQ WW SSB contest as a primarily youth team, a uniquety in M/M contest operations. See below for information on the youth team members, and also how to support the operation.
        </p>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Support the Operation</h2>
        <p className="mb-4">
          If you would like to provide financial support for travel, station rental, and other costs, see the gofundme link below:
        </p>
        <a href="https://gofund.me/ec547f05" className="text-blue-600 hover:underline mb-4"> GoFundMe </a>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Team Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Levi KG5XR</h3>
              <p className="text-gray-700 mb-2">Operated at:</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>PJ2T</li>
                <li>NR4M</li>
                <li>N4OGW</li>
              </ul>
              <p className="text-gray-700">Age: 23</p>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Leon DL3ON</h3>
              <p className="text-gray-700 mb-2">21 years old - Studying Electrical Engineering at TUM</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>ES9UKR (@ES9C) CQ WW SSB 22</li>
                <li>I44P at WRTC 23</li>
                <li>DF0HQ CQ WW CW 23</li>
                <li>DQ2C CQ WPX CW 24 SOP Youth</li>
                <li>PJ2T CQ WW SSB 24</li>
              </ul>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Megan EI5LA</h3>
              <p className="text-gray-700 mb-2">18 years old</p>
              <p className="text-gray-700 mb-2">Previous activities:</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>EI7M, OL24YOTA, TM4Y</li>
                <li>I44P, DQ2C, OE1W</li>
                <li>HG23YOTA, 9A22YOTA, EI0YOTA</li>
              </ul>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Grace K8LG</h3>
              <p className="text-gray-700 mb-2">Age: 19</p>
              <p className="text-gray-700 mb-2">Previous stations/operations:</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>K3LR (CQ WW, and YDXA)</li>
                <li>J62K</li>
              </ul>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Max N4ML</h3>
              <p className="text-gray-700 mb-2">Age: 21</p>
              <p className="text-gray-700 mb-2">Operations:</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>N4ML@AA4NU ARRl SS SSB 2024</li>
                <li>N4ML@K0EJ ARRL 10m 2024 </li>
                <li>N4ML@K4RO Jan NAQP SSB 2025</li>
                <li>W1HQ ARRL DX SSB 2025</li>
                <li>WX1AW CQ WPX SSB 2025</li>
              </ul>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Connor W4IPC</h3>
              <p className="text-gray-700 mb-2">Age: 22</p>
              <p className="text-gray-700 mb-2">Previous operations and stations:</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>PJ2T, NP4Z, ZF5T</li>
                <li>WX3B, K1TTT, LZ5R</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Member 7 */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500">Image Placeholder</div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-blue-800">Violetta KN2P</h3>
          <p className="text-gray-700 mb-2">Age: 20</p>
          <p className="text-gray-700 mb-2">Previous operations and stations:</p>
          <ul className="list-disc pl-5 mb-2 text-gray-700">
            <li>W3LPL CQWW SSB 2018</li>
            <li>K3LR Team Exuberance CQ WPX SSB 2019</li>
            <li>PJ2Y@PJ2T YDXA 2018</li>
            <li>PJ2T CQWW SSB 2024</li>
            <li>J62K CQ WPX SSB 2025</li>
          </ul>
        </div>
      </div>

      {/* Team Member Others */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-500">Image Placeholder</div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-blue-800">Others</h3>
          <p className="text-gray-700 mb-2">James W7EY and Pim PC8M</p>
        </div>
      </div>

      <section className="mt-8">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Operation Details</h3>
        <p className="mb-4">
          Stay tuned for more information about this event. Planning is currently underway and more details will be posted as they become available.
        </p>
      </section>
    </>
  );
}

// Awards/Contests Page Component
function Awards() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Contest Results & Awards</h2>
        <p className="mb-6">
          Recent contest participation and award achievements.
        </p>
        
        <div className="space-y-6">
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-2">ARRL DX SSB 2025</h3>
            <p className="italic text-gray-600 mb-2">W1HQ - Multi-Single Low Power</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Score: 1,234,567</li>
              <li>QSOs: 1,234</li>
              <li>Multipliers: 123</li>
              <li>Rank: 5th in New England Division</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-2">NAQP SSB January 2025</h3>
            <p className="italic text-gray-600 mb-2">N4ML@K4RO - Single Op Low Power</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Score: 98,765</li>
              <li>QSOs: 876</li>
              <li>Multipliers: 113</li>
            </ul>
          </div>
          
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-2">ARRL 10m Contest 2024</h3>
            <p className="italic text-gray-600 mb-2">N4ML@K0EJ - Single Op High Power (Phone Only)</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Score: 87,654</li>
              <li>QSOs: 789</li>
              <li>Multipliers: 111</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

// ETC Page Component
function Etc() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Miscellaneous</h2>
        <p className="mb-6">
          Additional information, resources, and links.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-blue-700 mb-2">Resources</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li><a href="https://www.arrl.org/" className="text-blue-600 hover:underline">ARRL</a></li>
              <li><a href="https://www.contestcalendar.com/" className="text-blue-600 hover:underline">Contest Calendar</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

// Contact button component
function ContactButton({ text, url = "#" }) {
  return (
    <a 
      href={url}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
    >
      {text}
    </a>
  );
}

// Main App component
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-blue-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-3xl font-bold">N4ML</h1>
                <p className="text-blue-200">Amateur Radio Operations</p>
              </div>
              <nav>
                <ul className="flex space-x-2 md:space-x-6">
                  <li>
                    <NavLink to="/" className={({isActive}) => 
                      isActive ? "text-white font-bold border-b-2 border-white pb-1" : 
                      "text-blue-200 hover:text-white"
                    }>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/pj2tyouth" className={({isActive}) => 
                      isActive ? "text-white font-bold border-b-2 border-white pb-1" : 
                      "text-blue-200 hover:text-white"
                    }>
                      PJ2T Youth
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/awards" className={({isActive}) => 
                      isActive ? "text-white font-bold border-b-2 border-white pb-1" : 
                      "text-blue-200 hover:text-white"
                    }>
                      Awards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/etc" className={({isActive}) => 
                      isActive ? "text-white font-bold border-b-2 border-white pb-1" : 
                      "text-blue-200 hover:text-white"
                    }>
                      Etc
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pj2tyouth" element={<PJ2TYouth />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/etc" element={<Etc />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold mb-2">N4ML</h2>
                <p className="text-gray-300">Amateur Radio Operations</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <ContactButton text="Email Me" url="mailto:contact@example.com" />
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-700 text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} N4ML. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}