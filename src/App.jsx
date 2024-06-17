import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="">
      <Navbar />
      <div id="home">
        <h1>Welcome to My Website</h1>
      </div>
      <div id="about">
        <h2>About Us</h2>
      </div>
      <div id="services">
        <h2>Our Services</h2>
      </div>
      <div id="contact">
        <h2>Contact Us</h2>
      </div>
    </div>
  );
}

export default App;
