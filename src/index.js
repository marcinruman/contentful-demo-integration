import { h, render } from 'preact';
import App from './components/App';


const mainElement = document.querySelector('main');

render(<App />, mainElement);