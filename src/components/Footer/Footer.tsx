import React from "react";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Call } from "../Call/Call";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div  style={{
        backgroundColor: "gray",
      }}>
        <p> &#169; busova_olga_nails_zp </p>
        <p>карта та посилання на гуггл мепс щоб знайти по мітці</p>
        <ul>
          <li>прайс</li>
          <li>акції</li>
          <li>корисне про догляд</li>
        </ul>
    <Call/>
        <SocialLinks/>
      </div>
    </footer>
  );
};
