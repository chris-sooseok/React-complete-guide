import { Link, useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }

    return (
    <>
        <p>Home page</p>
        <p>Go to <Link to="/products">products</Link></p>
        <p>
            <button onClick={navigateHandler}>Navigate</button>
        </p>
    </>);
}

export default HomePage;