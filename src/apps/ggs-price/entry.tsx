import { useEffect } from 'react';
import App from './App';
import './index.css';

const FONTS = [
  'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Outfit:wght@600;700&family=Jost:ital,wght@0,300;0,400;0,500;1,300&family=Plus+Jakarta+Sans:ital,wght@0,700;0,800;1,400&display=swap',
];

export default function Entry() {
  useEffect(() => {
    FONTS.forEach((href) => {
      if (document.querySelector(`link[href="${href}"]`)) return;
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);
  return <App />;
}
