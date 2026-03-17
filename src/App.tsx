/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden bg-gray-50">
      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-a2339f6d-bf4a-44db-88ec-cb8f27da4abb/bots/copilots_header_4d90b/webchat?__version__=2"
        frameBorder="0"
        className="w-full h-full border-none"
        title="Copilot Studio Bot"
        allow="microphone; camera"
      ></iframe>
    </div>
  );
}
