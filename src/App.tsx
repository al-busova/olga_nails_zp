import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const UsefulPage = lazy(() => import("./pages/UsefulPage/UsefulPage"));

const App: React.FC = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/useful" element={<UsefulPage />} />
            <Route path="*" element={<p>Page not found.</p>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
