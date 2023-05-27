import { Header } from "./Header/Header";
import { HomePage } from "pages/HomePage/HomePage";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Header />
      <HomePage/>
    </div>
  );
};
