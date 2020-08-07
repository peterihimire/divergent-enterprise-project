import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import WhyProcredita from "./components/WhyProcredita";
import OwnProcredita from "./components/OwnProcredita";
import Partnered from "./components/Partnered";
import Testimonials from "./components/Testimonials";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Hero />
        <WhyProcredita />
        <OwnProcredita />
        <Partnered />
        <Testimonials />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

// const App = () => {
//   return (
//     <>
//       <h1>hellog</h1>
//       <Navbar />
//     </>
//   );
// };
// export default App;
