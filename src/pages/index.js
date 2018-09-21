import React from 'react'

import "../assets/css/main.css";

import Layout from '../components/layout'
import About from "../components/about";
import Services from "../components/services";
import TestimonialsBg from "../components/testimonials-bg";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";

const IndexPage = () => (
  <Layout>
    <About />
    <Services />
    <TestimonialsBg />
    <Testimonials />
    <Contact />
    <Footer />
  </Layout>
)

export default IndexPage
