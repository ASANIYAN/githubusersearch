import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Card from '../components/card/Card'
import SearchBar from '../components/searchbar/SearchBar'
import styles from '../styles/Home.module.css'
import styled from "styled-components";
import Cards from '../components/card/Cards'

export default function Home() {

  const [user, setUser] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);



  return (
    <div>
      <Heading> Search For Any User on Github </Heading>
     <SearchBar user={user} setUser={setUser} setData={setData} setError={setError} setLoading={setLoading} />
     {  data &&
      <>
        <Heading> User </Heading>
        <Card data={data} />
      </>
     }
     {
      data &&
      <>
        <Heading2> Repositories </Heading2>
        <Cards user={user} />
      </>
     }
     {
      error && <Error>{ error }</Error>
     }
    </div>
  )
}

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;

const Heading2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;

const Loading = styled(Heading2)`
  font-size: 16px;
`;

const Error = styled(Loading);
