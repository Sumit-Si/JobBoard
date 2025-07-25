import React from "react";
import Container from "../Container/Container";

function Footer() {
  return (
    <Container>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="font-semibold">
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </Container>
  );
}

export default Footer;
