import axios from "axios";
import { format } from "date-fns";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Card.styled";

const Cards = ({user}) => {

    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            //handle success
            setLoading(true)
            setData(response.data);
        }).catch(function (error) {
            setError(error);
        }).then(function () {
            setLoading(false);
        })
    },[user])


    return (
        <Container>
            {data && data.map((each, index) => (
                <section key={index.id} className="card">
                    <p> Title:  <strong> {each.name} </strong>  </p>
                    <div className="button"> {each.visibility} </div>
                    <section className="flex">
                        <Link href={each.html_url} >
                            <a className="link">View repo</a>
                        </Link>
                        <section>
                            <p> <strong> {each.watchers_count} Watchers </strong></p>
                            <p> <strong> { each.fork ? "Forked repo" : "Not Forked" } </strong></p>
                        </section>
                    </section>
                    <p>This repo was created on { format(new Date(each.created_at), 'dd MMMM yyyy') } </p>
                    <section className="languages">
                        {each.language ? <div className="button"> {each.language}</div> : ""}
                        
                    </section>
                </section>
            ))}
        </Container>
    );
}
 
export default Cards;