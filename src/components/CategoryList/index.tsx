import styled from "styled-components"
import { Category } from "./Category"

const Ul = styled.ul`
    display: flex;
    gap: 4rem;
`

const Li = styled.li`
    align-self: flex-start;

    background: var(--gray);

    min-width: 18rem;
    min-height: 4rem;
    padding: 1rem;
    border-radius: 5px;

    opacity: 0.3;
    transition: 200ms;

    :hover {
        cursor: pointer;
        opacity: 1
    }
`

export const CategoryList = () => {
    return (
        <>
            <Ul>
                <Category />
                <Li>
                    Add category...
                </Li>
            </Ul>            
        </>
    )
}