import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = (data) => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title={data.contentstackData.features_header}
      description={data.contentstackData.features_description}
    />
    <Button>{data.contentstackData.footer_cta.title}</Button>
  </div>
)

export default CallToAction
