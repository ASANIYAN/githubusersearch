import axios from "axios";
import SearchIcon from "../icons/SearchIcons";
import { Container, TextInput } from "./SearchBar.styled";

const SearchBar = ({user, setUser, setData, setError, setLoading}) => {
    
    function handleChange(e) {
        setUser(e.target.value);
    };

    const handleClick = (e) => {
        axios.get(`https://api.github.com/users/${user}`)
            .then(function (response) {
                //handle success
                setLoading(true)
                setData(response.data);
            }).catch(function (error) {
                setError(error);
            }).then(function () {
                setLoading(false);
            })
    };
    return (
        <>
            <Container>
                <div className="pt pointer" onClick={handleClick}>
                    <SearchIcon />
                </div>
                <TextInput 
                placeholder="Enter github username"
                type="search"
                name="searchInput"
                id="searchInput"
                className="pl"
                onChange={handleChange}
                value={user}
                />
            </Container>
        </>
    );
}
 
export default SearchBar;