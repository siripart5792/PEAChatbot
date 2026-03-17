/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="flex flex-col h-screen w-screen bg-gray-100 font-sans">
      {/* PEA Themed Header */}
      <header className="bg-[#742181] text-white shadow-md z-10 flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1.5 rounded-full shadow-sm">
              <Zap className="w-6 h-6 text-[#742181]" fill="currentColor" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold leading-tight tracking-wide">PEA Safety Smart System</h1>
              <span className="text-xs text-purple-200 font-medium">การไฟฟ้าส่วนภูมิภาค (Provincial Electricity Authority)</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-purple-100 bg-black/20 px-3 py-1.5 rounded-full border border-white/10">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Secure System</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative flex flex-col p-0 sm:p-4 md:p-6">
        <div className="flex-1 w-full max-w-6xl mx-auto bg-white sm:rounded-2xl shadow-xl overflow-hidden border border-gray-200 flex flex-col relative">
          
          {/* Optional decorative top bar for the chat window */}
          <div className="h-2 w-full bg-gradient-to-r from-[#742181] via-purple-600 to-[#742181]"></div>
          
          <iframe
            src="https://copilotstudio.microsoft.com/environments/Default-a2339f6d-bf4a-44db-88ec-cb8f27da4abb/bots/copilots_header_4d90b/webchat?__version__=2"
            frameBorder="0"
            className="w-full h-full border-none flex-1 bg-white"
            title="PEA Safety Smart System Bot"
            allow="microphone; camera"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
