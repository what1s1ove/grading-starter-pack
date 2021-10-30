import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import 'assets/styles/index.scss';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
