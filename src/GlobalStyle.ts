import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    :root {
        --black: #282828;
        --gray: #555;
        --light-gray: #999;
        --purple: #9a30fa;
        --dark-purple: #8a20da;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--purple);
    }

    ::-webkit-scrollbar-thumb:hover {
        background: var(--dark-purple);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;

        font-size: 100%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        color: white;
        background-color: var(--black);

        width: calc(100vh - 4rem);
        height: calc(100vh - 4rem);
        padding: 2rem;
    }

    ul, ol {
        list-style: none;
    }
`