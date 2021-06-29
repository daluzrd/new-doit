import styled from "styled-components";
import { Task } from "./task";

const Ul = styled.ul`
display: flex;
flex-direction: column;
gap: 1rem;

padding: 0 0.5rem 0.5rem 0.5rem;

overflow-y: auto;
`

const Li = styled.li`
    padding: 10px;
    min-height: 5rem;
    border-radius: 5px;

    background: var(--light-gray);
    color: var(--black);

    opacity: 0.3;
    transition: 200ms;

    :hover {
        cursor: pointer;
        opacity: 1;
    }
`

export const TaskList = () => {
    return (
        <Ul>
        <Task />
            <Task />
            <Li>Add task...</Li>
        </Ul>
    )
}