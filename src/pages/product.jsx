import { useEffect, useState } from "react";
import Button from "../components/Elements/Buttons";
import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Kaos Baru",
    price: 302000,
    image: "/img/black-tee.jpg",
    description: `Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. 
        Molestias perspiciatis quae deleniti saepe quod quas, porro expedita 
        beatae est cumque ad sequi nesciunt ipsam 
        fuga molestiae ratione asperiores voluptates ipsa.`,
  },
  {
    id: 2,
    name: "Kaos Lama",
    price: 222000,
    image: "/img/black-tee.jpg",
    description: `Lorem ipsum dolor 
        sit amet consectetur adipisicing elit. 
        `,
  },
  {
    id: 3,
    name: "Kaos Joger",
    price: 252000,
    image: "/img/black-tee.jpg",
    description: `Ini adalah
        sample kaos Joger.
        Joger jelek 
        `,
  },
];

const email = localStorage.getItem("email");

function ProductPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart"))|| []);
  }, []);

  useEffect(() => {
    if(cart.length>0){
        const sum = cart.reduce((acc, item) => {
          const product = products.find((product) => product.id == item.id);
          return acc + product.price * item.qty;
        }, 0);
        setTotalPrice(sum);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          id,
          qty: 1,
        },
      ]);
    }
  };

  return (
    <>
      <div className="flex justify-end h-12 bg-blue-600 text-white items-center px-10">
        {email}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-2">
        <div className="w-2/3 flex flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="text-3xl font-bold text-blue-500 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={"3"}>Price</td>
                <td>
                  Rp{" "}
                  {totalPrice.toLocaleString("id-ID", {
                    styles: "currency",
                    currency: "IDR",
                  })}{" "}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
