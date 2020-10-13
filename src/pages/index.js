import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Header from "../components/header"
import Content from "../components/content"
import CallToAction from "../components/cta"
import {
  createInstance,
  OptimizelyFeature,
  OptimizelyProvider,
  withOptimizely
} from '@optimizely/react-sdk';

const optimizely = createInstance({
  sdkKey: 'PevwVsQ7AdKujPXGSzhgww'
});

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      edge: 0,
      display: ''
    }
  }

  componentWillMount() {
    let languages = ["english", "spanish"];
    let max = this.props.data.spanish.edges.length;
    let language = languages[Math.floor(Math.random()*languages.length)];
    let n = Math.floor(Math.random() * max);
    this.setState ({
      display: this.props.data[language].edges[n].node
    });
  }

  changeToDeveloper = (lang) => {
    this.setState ({
      display: this.props.data[lang].edges[1].node
    });
  }

  changeToMarketer = (lang) => {
    this.setState ({
      display: this.props.data[lang].edges[0].node
    });
  }

  render() {
    return (
    <Layout>
      <Header changeToDeveloper={this.changeToDeveloper} changeToMarketer={this.changeToMarketer} />
      <SEO />
      <Hero contentstackData={this.state.display} />
      <Content contentstackData={this.state.display} />
      <CallToAction contentstackData={this.state.display} />
    </Layout> )
  }
}

export default IndexPage

export const query = graphql`
    query MyQuery1 {
      english:allContentstackLandingPage(filter: {locale: {eq: "en-us"}}) {
        edges {
          node {
            id
            image_description
            image_header
            footer_description
            footer_header
            features_header
            features_description
            cta {
              href
              title
            }
            footer_cta {
              href
              title
            }
            page_header
            page_description
            title
          }
          next {
            locale
          }
        }
      }
      spanish:allContentstackLandingPage(filter: {locale: {eq: "es-us"}}) {
        edges {
          node {
            id
            image_description
            image_header
            footer_description
            footer_header
            features_header
            features_description
            cta {
              href
              title
            }
            footer_cta {
              href
              title
            }
            page_header
            page_description
            title
          }
          next {
            locale
          }
        }
      }
    }
`;
