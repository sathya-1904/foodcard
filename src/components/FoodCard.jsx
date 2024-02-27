import { PropTypes } from "prop-types";

const foodItems = [
  {
    img: "img/img1.jpg",
    name: "Vanila Cup Cake",
    desc: "Using the batter from my much loved Vanilla Cake, these Vanilla Cupcakes have a professional bakery-style crumb and stay perfectly moist for 4 whole days which is unheard of for cupcakes!",
    price: 45,
  },
  {
    img: "img/img2.jpg",
    name: "Chocolate Cup Cake",
    desc: "Ditch the box mix and try these unbelievable super moist chocolate cupcakes at home instead! They're rich, fudgy, and so easy to make.",
    price: 20,
  },
  {
    img: "img/img3.jpg",
    name: "Almond Cup Cake",
    desc: "Tender and moist vanilla almond cupcakes topped with creamy vanilla almond frosting. These elegant cupcakes are perfect for weddings, showers, or parties.",
    price: 32,
  },
];

function Card(props) {
  return (
    <div className="container">
      <div className="foodCard">
        <div className="foodCardLeft">
          <img src={props.img} alt="" className="foodCardImg" />
        </div>
        <div className="foodCardRight">
          <h2 className="foodName">{props.name}</h2>
          <p className="desc">{props.desc}</p>
          <div className="d-flex">
            <h2 className="price">${props.price}</h2>
            <button className="buyBtn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const FoodCard = () => {
  return (
    <>
      {foodItems.map((value, index) => (
        <Card
          key={index}
          img={value.img}
          name={value.name}
          desc={value.desc}
          price={value.price}
        />
      ))}
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
