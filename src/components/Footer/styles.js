//Import do router dom
import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

  
`;

export const FooterLogo = styled(Link)`  
`;

export const FooterImage = styled.img`
  max-width: 168px;
  
  @media(max-width: 800px) {
  
    max-width: 105px;
  
}
`;


