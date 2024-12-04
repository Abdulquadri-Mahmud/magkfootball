import React, { useState } from "react";

const CopyTextButton = () => {
  const [copyStatus, setCopyStatus] = useState(""); // State to track copy status

  const textToCopy = "This is the text you can copy!";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(""), 2000); // Clear status after 2 seconds
    } catch (error) {
      console.error("Failed to copy text: ", error);
      setCopyStatus("Failed to copy!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <p style={{ fontSize: "18px" }}>{textToCopy}</p>
      <button
        onClick={handleCopy}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Copy Text
      </button>
      {copyStatus && <p style={{ marginTop: "10px", color: "#4CAF50" }}>{copyStatus}</p>}
    </div>
  );
};

export default CopyTextButton;
