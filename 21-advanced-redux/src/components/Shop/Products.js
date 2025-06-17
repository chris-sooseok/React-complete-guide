import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
    {id: 'p1', price: 6, title: "My first book", description: "My first book"},
    {id: 'p2', price: 6, title: "My second book", description: "My second book"},
]
const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_ITEMS.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}/>))}
            </ul>
        </section>
    );
};

export default Products;
