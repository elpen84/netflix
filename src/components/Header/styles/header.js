import styled from "styled-components/macro";

export const Background = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.p``;

export const Container = styled.div``;

export const Logo = styled.img`
  height: 32px;
  width: 108px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)``;
