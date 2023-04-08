import { Link } from "react-router-dom";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { Call } from "../Call/Call";
import { Box, Container } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      style={{
        backgroundColor: "gray",
      }}
    >
      <Container>
        <p> &#169; busova_olga_nails_zp </p>
        <p>карта та посилання на гуггл мепс щоб знайти по мітці</p>
        <ul>
          <li>
            {" "}
            <Link to="/services">прайс</Link>{" "}
          </li>
          <li>
            <Link to="/useful">корисне про догляд</Link>
          </li>
        </ul>
        <Call />
        <SocialLinks />
      </Container>
    </Box>
  );
};
