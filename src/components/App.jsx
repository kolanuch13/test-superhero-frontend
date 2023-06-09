import { Route, Routes } from 'react-router-dom';
import { Header } from "./Header/Header";
import { HomePage } from "pages/HomePage/HomePage";
import { CharacterPage } from "pages/CharacterPage/CharacterPage";
import { PageNotFound } from './PageNotFound/PageNotFound';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="character/:id" element={<CharacterPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
