"use client"; // Ensure this is a client component

import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { SketchPicker } from "react-color";

export default function Home() {
  const [color, setColor] = useState("#ff69b4"); // Default pink heart
  const [text, setText] = useState(""); // User input text
  const heartRef = useRef(null);

  const captureScreenshot = async () => {
    if (heartRef.current) {
      const canvas = await html2canvas(heartRef.current, { backgroundColor: null });
      const image = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = image;
      link.download = "heart-sticker.png";
      link.click();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:
          "url('https://i.pinimg.com/originals/dd/7b/19/dd7b19fc9bf0d477f311093ffe0a094e.gif')",
        backgroundSize: "cover",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {/* Glowing Cursive Title */}
      <h1
        style={{
          fontFamily: "cursive",
          fontSize: "50px",
          color: "rgb(116, 22, 57)",
          textShadow: "0px 0px 20px rgba(255, 105, 180, 1)",
        }}
      >
        Make Customised Heart
      </h1>

      {/* Main Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* White Box with Glow Effect */}
        <div
          ref={heartRef}
          style={{
            width: "250px",
            height: "300px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: `0px 0px 30px ${color}`,
            borderRadius: "10px",
            position: "relative",
            padding: "10px",
            border: `3px solid ${color}`,
          }}
        >
          {/* SVG Heart without Glow */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>

          {/* User Text Display with Stronger Glow Effect */}
          <p
            style={{
              marginTop: "10px",
              textAlign: "center",
              fontSize: "14px",
              color: "#333",
              maxWidth: "90%",
              wordWrap: "break-word",
              textShadow: `0px 0px 10px ${color}, 0px 0px 20px ${color}, 0px 0px 40px ${color}, 0px 0px 60px ${color}`,
            }}
          >
            {text}
          </p>
        </div>

        {/* Controls - Color Picker and Text Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {/* Color Picker with Glow */}
          <div
            style={{
              boxShadow: `0px 0px 20px ${color}`,
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <SketchPicker color={color} onChange={(e) => setColor(e.hex)} />
          </div>

          {/* Text Input for User */}
          <input
            type="text"
            placeholder="Enter up to 50 words"
            maxLength={300}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              padding: "10px",
              width: "200px",
              borderRadius: "5px",
              border: `2px solid ${color}`,
              boxShadow: `0px 0px 15px ${color}`,
            }}
          />
        </div>
      </div>

      {/* Download Button with Glow Effect */}
      <button
        onClick={captureScreenshot}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: color,
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          boxShadow: `0px 0px 15px ${color}`,
        }}
      >
        Download Sticker
      </button>
    </div>
  );
}
