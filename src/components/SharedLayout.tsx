import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from "../components/Footer/Footer";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};