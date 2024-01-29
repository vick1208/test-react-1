import CardProduct from "../components/Fragments/CardProduct";


const ProductPage = () => {

    return (
        <div className="flex justify-center py-4">
            <CardProduct>
                <CardProduct.Header image="/img/black-tee.jpg" />
                <CardProduct.Body title="Kaos baru">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis quae deleniti saepe quod quas, porro expedita beatae est cumque ad sequi nesciunt ipsam fuga molestiae ratione asperiores voluptates ipsa.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 302.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/img/black-tee.jpg" />
                <CardProduct.Body title="Kaos baru">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perspiciatis quae deleniti saepe quod quas, porro expedita beatae est cumque ad sequi nesciunt ipsam fuga molestiae ratione asperiores voluptates ipsa.
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 302.000" />
            </CardProduct>
        </div>
    );
}

export default ProductPage;