import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: 0.5px;
  margin: 0;

  &::first-letter {
    color: #60a5fa;
    font-size: 64px;
    font-weight: 800;
  }
`;

const Button = styled.button`
  appearance: none;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 120ms ease, filter 200ms ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
    filter: brightness(0.98);
  }
`;

const Section = styled.section`
  margin: 32px auto 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Section>
        <Heading>Styled Components Demo</Heading>
        <Button>Hover Me</Button>
      </Section>
    </div>
  );
}

export default App;
