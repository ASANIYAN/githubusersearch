import Image from "next/image";
import { CardItem } from "./Card.styled";
import githubImg from "../../public/githubImg.png"
import Link from "next/link";
import { format } from "date-fns";

const Card = ({ data }) => {
    return (
        <CardItem>
            <section className="flex">
                <Link href={data ? data.html_url : "#"}>
                    <a>
                        <Image src={data ? data.avatar_url : githubImg} alt={data.login} width={80} height={80} />
                    </a>
                </Link>
                <p className="pl">Name: {data && data.login} </p>
            </section>
            <section>
                <p> Followers: {data.followers} </p>
                <p> Following: {data.following} </p>
                <p> Info: This account was created on { data ? format(new Date(data.created_at), 'dd MMMM yyyy') : "" }  </p>
            </section>
        </CardItem>
    );
}
 
export default Card;