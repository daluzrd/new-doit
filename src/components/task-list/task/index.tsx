import styled from "styled-components"

const Li = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 10px;
    min-height: 5rem;
    border-radius: 5px;

    background: var(--light-gray);
    color: var(--black);

    > p {
    align-self: flex-start;
    }
`

export const Task = () => {
    return (
        <Li>
            <p>Lorem Ipsum</p>
        </Li>
    )
}