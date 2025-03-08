import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8x3jbmmwqasvdkno.us.auth0.com"
      clientId="nuooT94XWyOViI3bkjPCCCdFjD8XPErT"
      authorizationParams={{
        redirect_uri: window.location.origin + '/dashboard'
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
); 