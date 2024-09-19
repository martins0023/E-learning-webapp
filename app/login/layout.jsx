export const metadata = {
  title: "Dashboard",
  description: "Access to the dashboard",
};

const LoginLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default LoginLayout;
