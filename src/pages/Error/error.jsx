import styled from "styled-components";
import { Link } from "react-router";
function ErrorPage() {
  return (
    <>
      <ErrorComponent>
        <h2>The page you are trying to search for does not exist</h2>
        <h1>404 Not Found</h1>

        <StyledLink to="/">Go back Home</StyledLink>
      </ErrorComponent>
    </>
  );
}

const ErrorComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;

  h1 {
    font-size: 5rem;
  }
`;

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
  font-size: 2rem;
`;

export default ErrorPage;
