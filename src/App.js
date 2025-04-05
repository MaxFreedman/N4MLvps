import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

/**
 * Uses Tailwind CSS for styling
 * Tailwind file is imported in App.css
 */

// Home/Main Page Component
function Home() {
  // ...existing Home component code...
}

// PJ2T Page Component
function PJ2TYouth() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-blue-800 mb-4">PJ2T 2025 Youth Contest Operation</h2>
        <p className="mb-4">
          This page contains information about the upcoming PJ2T operation.
        </p>
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
              <h3 className="text-xl font-bold text-blue-800">Megan EI5LA/KI5LA</h3>
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
              <h3 className="text-xl font-bold text-blue-800">Grace Papay K8LG</h3>
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
              <h3 className="text-xl font-bold text-blue-800">Max Freedman N4ML</h3>
              <p className="text-gray-700 mb-2">Age: 21</p>
              <p className="text-gray-700 mb-2">Operations:</p>
              <ul className="list-disc pl-5 mb-2 text-gray-700">
                <li>N4ML@AA4NU SS SSB 2024 SOUHP</li>
                <li>N4ML@K0EJ ARRL 10m SOHP 2024 Phone Only</li>
                <li>N4ML@K4RO Jan NAQP SSB 2025 SOLP</li>
                <li>W1HQ ARRL DX SSB 2025 M/S LP</li>
              </ul>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <div className="text-gray-500">Image Placeholder</div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-blue-800">Connor Black</h3>
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
  // ...existing Awards component code...
}

// ETC Page Component
function Etc() {
  // ...existing Etc component code...
}

export default function App() {
  // ...existing App code...
}

function ContactButton({ text, url = "#" }) {
  // ...existing ContactButton code...
}