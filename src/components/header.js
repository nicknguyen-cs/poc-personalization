import React from "react"
import { COLORS } from "../styles/constants"

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "space-between",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
          padding: "1rem 2rem",
          fontSize: ".85rem",
        }}
      >
        <div style={{ fontWeight: 700 }}>
          <button
            style={{ textDecoration: "none" }}
            onClick={() => this.props.changeToDeveloper('english')}
          >Developer</button>
          <button
            style={{ textDecoration: "none" }}
            onClick={() => this.props.changeToMarketer('english')}
          >Marketer</button>
        </div>
        <div style={{ fontWeight: 700 }}>
          <button
            style={{ textDecoration: "none" }}
            onClick={() => this.props.changeToDeveloper('spanish')}
          >Developer (es)</button>
          <button
            style={{ textDecoration: "none" }}
            onClick={() => this.props.changeToMarketer('spanish')}
          >Marketer (es)</button>
        </div>
      </div>
    )
  }
}


export default Header

