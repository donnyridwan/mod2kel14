import React from 'react';
import styled from 'styled-components';

// Membuat komponen styled untuk kartu
const CardContainer = styled.div`
  width: 300px;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #121212;
  margin: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: #4F4557;
  }
`;

const CardNama = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const CardNim = styled.p`
  font-size: 1rem;
`;

const CardEmail = styled.p`
  font-size: 1rem;
`;
// Komponen Card yang menggunakan styled-components
function Card(props) {
    const handleClick = () => {
        window.location.href = props.link; // Arahkan ke tautan yang sesuai
    };
    return (
        <CardContainer onClick={handleClick}>
            <CardNama>{props.Nama}</CardNama>
            <CardNim>{props.Nim}</CardNim>
            <CardEmail>{props.Email}</CardEmail>
        </CardContainer>
    );
}

export default Card;