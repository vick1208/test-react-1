import CardProduct from "../components/Fragments/CardProduct";



const products = [
    {
        id: 1,
        name: "Kaos Baru",
        price: "Rp. 302.000",
        image: "/img/black-tee.jpg",
        description: `Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. 
        Molestias perspiciatis quae deleniti saepe quod quas, porro expedita 
        beatae est cumque ad sequi nesciunt ipsam 
        fuga molestiae ratione asperiores voluptates ipsa.`
    },
    {
        id: 2,
        name: "Kaos Lama",
        price: "Rp. 302.000",
        image: "/img/black-tee.jpg",
        description: `Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. 
        `
    },
];


function ProductPage() {
    return (
        <div className="flex justify-center py-5">
            {
                products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header image={product.image} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>)
                )}

        </div>
    );
}

export default ProductPage;