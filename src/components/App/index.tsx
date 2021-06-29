import styled from "styled-components";
import { MdChevronLeft } from "react-icons/md";
import { CategoryList } from "../CategoryList";

const ScrollButton = styled.button`
  position: fixed;
  bottom: 4.5rem;
  right: 4.5rem;

  width: 5rem;
  height: 5rem;
  border: solid 2px var(--purple);
  border-radius: 5px;

  background: var(--gray);
  color: var(--purple);

  opacity: 0.3;

  transition: 200ms;

  :hover {
    cursor: pointer;

    opacity: 1;
  }
`

const StyledChevronLeft = styled(MdChevronLeft)`
  width: 3rem;
  height: 3rem;
`

const App = () => {
  return (
    <main>
      <CategoryList />
      <ScrollButton>
        <StyledChevronLeft />
      </ScrollButton>
    </main>
  );
}

export default App;
