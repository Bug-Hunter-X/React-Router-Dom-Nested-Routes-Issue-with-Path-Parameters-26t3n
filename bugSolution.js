```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Correct order of routes */}
        <Route path="/about" element={<About />} />
        <Route path="/about/*" element={<AboutNested />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function AboutNested() {
  return <h1>About Nested</h1>;
}
export default App;
```