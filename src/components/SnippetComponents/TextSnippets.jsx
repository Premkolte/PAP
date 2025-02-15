import React, { useState } from "react";
import Modal from "../Modal";
import StringToReactComponent from "string-to-react-component";
import { textSnippets } from "./Snippets/Text";

function TextSnippets() {
  const [showModal, setShowModal] = useState(false);
  const [jsxCode, setJsxCode] = useState("");
  const [cssCode, setCssCode] = useState("");

  const handleShowModal = (jsx, css) => {
    setJsxCode(jsx);
    setCssCode(css);
    setShowModal(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {textSnippets.map((textObject, index) => (
        <div
          key={index}
          className="p-8 pt-14 bg-white rounded-lg shadow-lg flex flex-col items-center justify-evenly gap-10"
        >
          <StringToReactComponent>
            {`(props) => (${textObject.jsxCode})`}
          </StringToReactComponent>
          <div className="flex space-x-4">
            <button
              className="text-white text-md py-3 px-2 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-xl focus:outline-none"
              onClick={() =>
                handleShowModal(textObject.jsxCode, textObject.cssCode)
              }
            >
              Show CSS
            </button>
            <button
              className="text-black text-md py-2 px-4 rounded-lg shadow-md"
              onClick={() =>
                handleShowModal(textObject.jsxCode, textObject.cssCode)
              }
            >
              React Snippet
            </button>
          </div>
        </div>
      ))}
      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        jsxCode={jsxCode}
        cssCode={cssCode}
      />
    </div>
  );
}

export default TextSnippets;
