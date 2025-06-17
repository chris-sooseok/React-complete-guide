import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";

export default function ProductDetail() {

    const params = useParams();
    return (<>
            <h1>product detail {params.productId}</h1>
            {/* the relative is by default route which brings you back to home page, but with relative path it will bring you to the previous page*/}
            <p><Link to=".." relative="path">Back</Link></p>
        </>)
}