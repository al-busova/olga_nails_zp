import React from "react";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const Header: React.FC = () => {
  return (
    <header>
      <div style={{
        backgroundColor: "yellow",
      }}>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
        <SocialLinks />
        <button type="button">Написати тут</button>
      </div>
    </header>
  );
};
