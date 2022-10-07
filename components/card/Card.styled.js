import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    padding: 0 20px;
    font-size: 14px;
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    
    .card {
        margin-top: 20px;
        max-width: 350px;
        height: 260px;
        border-radius: 5px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        padding-left: 15px;
        padding-right: 15px;
    }

    .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .link {
        margin-top: 20px;
        text-decoration: underline;
    }

    .flex {
        display: flex;
        justify-content: space-between;
    }

    .languages {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 4px;
        padding-left: 4px;
    }

    .button {
        padding: 6px;
        background-color: #77dd77;
        border-radius: 5px;
        display: inline-block;
    }
`;

export const CardItem = styled.section`
    max-width: 300px;
    height: 250px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 20px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    font-size: 14px;

    .flex {
        display: flex;
    }

    .pl {
        padding-left: 10px;
    }

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;