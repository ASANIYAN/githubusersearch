import styled from "styled-components";

export const Container = styled.form`
    display: flex;
    max-width: 37.5rem;
    margin-top: 3.125rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.3125rem;
    padding: 6px 0.9375rem;
    font-weight: 300;
    box-shadow: 0.25rem 0.25rem rgba(0,0,0,0.1);

    .pl {
        padding-left: 12px;
    }

    .pt {
        padding-top: 10px;
    }

    .pointer {
        cursor: pointer;
    }
`;

export const TextInput = styled.input`
    font-size: 1rem;
    width: 100%;
    color: black;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: none;
    outline: none;
    font-weight: 300;
    ::placeholder {
        color: rgba(0,0,0,0.8);
        font-size: 1rem;
    }
`;