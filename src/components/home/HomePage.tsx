import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Welcome Page</h1>
            <br/>
            <p>
                Please navigate to the <Link to="/protected">custom login page</Link> to log in.
            </p>
            <p>
                Use rod:koala as credentials.
            </p>
        </div>
    );
}

export default HomePage;