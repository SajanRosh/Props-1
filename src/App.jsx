import Card from "./components/Card";
const items = [
  {
    foodname: "Veggie Delight Pizza",
    img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHwwfDB8fHww",
    desc: "A delicious pizza topped with a variety of fresh vegetables, mozzarella cheese, and a tangy",
    price: 150,
    type: "veg",
    ratings: 4.6
  },
  {
    foodname: "Spicy Chicken Wings",
    img: "https://images.unsplash.com/photo-1543340904-0b1d843bccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3BpY3klMjBDaGlja2VuJTIwV2luZ3N8ZW58MHwwfDB8fHww",
    desc: "Crispy chicken wings tossed in a spicy buffalo sauce, served with a side of ranch dressing.",
    price: 79,
    type: "non-veg",
    ratings: 4.2
  },
  {
    foodname: "Paneer Tikka",
    img: "https://images.unsplash.com/photo-1690369642707-3d30e6f7fdcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFuZWVyJTIwdGlra2F8ZW58MHwwfDB8fHww",
    desc: "Grilled paneer marinated in a spicy yogurt mixture, served with mint chutney.",
    price: 114,
    type: "veg",
    ratings: 4.4
  },
  {
    foodname: "Grilled Lamb Chops",
    img: "https://plus.unsplash.com/premium_photo-1680090432998-45b1c0884cf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8R3JpbGxlZCUyMExhbWIlMjBDaG9wc3xlbnwwfDB8MHx8fDA%3D",
    desc: "Juicy lamb chops grilled to perfection, served with a side of rosemary potatoes.",
    price: 169,
    type: "non-veg",
    ratings: 4.9
  }
];

function App(){
  return(
    <>
      <div className="flex gap-3 mt-3 items-center justify-center">
        {
          items.map(item => <Card img={item.img} title={item.foodname} desc={item.desc} type={item.type} ratings = {item.ratings} price= {item.price}></Card>)
        }
      </div>
    </>
  )
}

export default App;