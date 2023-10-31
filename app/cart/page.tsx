export default function Cart() {
  let myCart: string[] = ["Tomatoes", "Pasta"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      {myCart.map((item, i) => {
        return <CartItem myCart={item} key={i} />;
      })}
    </div>
  );
}

function CartItem(props: any) {
  const { myCart } = props;
  const color = "blue";
  return (
    <div className="cart-item">
      <p>{myCart}</p>
      <p>$40</p>
      <p>1개</p>
      <p>
        <LikeButton buttonColor={color} />
      </p>
    </div>
  );
}

function LikeButton(props: any) {
  const { buttonColor } = props;
  return (
    <div>
      <button style={{ backgroundColor: `${buttonColor}` }}>+</button>
    </div>
  );
}
