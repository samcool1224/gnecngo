import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

if (rootElement && !rootElement.dataset.reactMounted) {
  rootElement.dataset.reactMounted = "true";
  createRoot(rootElement).render(<App />);
}
