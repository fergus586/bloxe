import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bloxe!</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Bloxe is a cutting-edge record label showcasing the best talent from around the world. We're dedicated to promoting and supporting our artists, and connecting them with fans who appreciate great music.
          </p>
        </section>
        <section>
          <h2>Our Artists</h2>
          <p>
            We represent a diverse group of artists across various genres. Explore our roster and discover your new favorite musicians.
          </p>
        </section>
        <section>
          <h2>Latest Releases</h2>
          <p>
            Stay up-to-date with the latest albums, singles, and remixes from our artists. Don't miss a beat – check out our newest releases now!
          </p>
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Bloxe. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
