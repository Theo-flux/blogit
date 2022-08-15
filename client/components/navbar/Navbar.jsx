import React from "react";
import { Logo, Section, Nav, ConnectButton } from "../../shared";

export default function Navbar({ activeSection, handleOpenSidebar }) {
  return (
    <Section
      className={`shadow backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white`}
    >
      <Nav>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-start">
            <i
              onClick={() => handleOpenSidebar()}
              className="md:hidden text-xl font-bold mr-4 ri-menu-2-line"
            ></i>
            <p className="text-lg font-poppins font-semibold">
              {activeSection}
            </p>
          </div>
          <ConnectButton />
        </div>
      </Nav>
    </Section>
  );
}
