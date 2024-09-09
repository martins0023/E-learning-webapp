import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Ball from "@components/Ball";

export const metadata = {
  title: "vconnect",
  description:
    "Welcome to Our Virtual Connect Platform, We're excited to have you here!",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="bg-white">
            <div className="bg-white" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
          <Ball />
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
