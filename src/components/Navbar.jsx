import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
      <NabarContainer>
        <figure><img src="../assets/logo-g4a.png" alt="" /></figure>
        <div className="links">
          <a href="">Conocenos</a>
          <a href="">Aprende</a>
          <a href="">Comunidad</a>
        </div>
      </NabarContainer>
    </>
  );
}

const NabarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  
  h2 {
    font-size: 3rem;
    color: #0A033C;
  }

  .links {
    display: flex;
    gap: 4rem;

     a {
        text-decoration: none;
        font-size: 2rem;
        color: #0A033C;
      }
  }

`;
