import { TaskList } from "../../task-list"
import styled from "styled-components";

const Li = styled.li`
display: flex;
flex-direction: column;
gap: 1rem;

background: var(--gray);

width: 18rem;
max-height: calc(100vh - 4rem);
min-height: 4rem;
height: 100%;
padding: 1rem;
border-radius: 5px;

> input {
  width: 16rem;

  background: transparent;
  color: white;
  border: none;
  border-bottom: solid 2px var(--purple);

  font-size: 2.5rem;
  height: 3.5rem;

  caret-color: var(--purple);
}

> input:focus {
  outline: none;
}
`

export const Category = () => {
    return (
        <Li>
          <input type="text" />
          <TaskList />
        </Li>
    )
}