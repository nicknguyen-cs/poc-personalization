import React from "react"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

export default function (data) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${headerImage})`,
          position: "absolute",
          top: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
        }}
      />
      <h1 style={{ textAlign: "center" }}>{data.contentstackData.page_header}</h1>
      <p style={{ textAlign: "center", maxWidth: 440 }}>
        {data.contentstackData.page_description}
      </p>
      <Button>{data.contentstackData.cta.title}</Button>
      <div style={{ margin: 60, width: `250px`, position: "relative" }}>
        <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
          <MockupContent />
        </div>
        <div
          style={{
            position: "absolute",
            width: "250px",
            top: 0,
          }}
        >
          <img
            src={mockupFrame}
            alt="outlines of shapes and confetti in the background "
          />
        </div>
      </div>
    </div>
  )
}
