import styled from "styled-components"

export const HeaderStyles = styled.header`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 98;

  h1 {
    a {
      color: var(--dark);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    &:hover {
      a {
        color: var(--highlight);
      }
    }
  }
`
