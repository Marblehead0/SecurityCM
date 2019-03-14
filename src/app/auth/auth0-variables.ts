interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'TxI8TxC1CK7Km9otmItcEYGjIAEXj7nH',
  domain: 'securityassignement.eu.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
