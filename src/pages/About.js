import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to Miraida’s Pizzeria, where every slice tells a story!

We’re a local favorite known for combining traditional flavors with modern convenience. At Miraida’s, we believe pizza should be more than just food — it should be an experience. That’s why we handcraft every pie with love, using only the freshest ingredients, rich sauces, and our signature crispy-yet-chewy crust.

Whether you’re craving a classic Margherita, a loaded Meat Lovers, or want to build your own dream pizza, we’ve got you covered.

And now, ordering your favorite pizza is easier than ever with our sleek online platform. Browse our menu, customize your order, and get piping-hot pizza delivered right to your door — all with just a few clicks.


🍕 Miraida’s Pizzeria — Bringing flavor, comfort, and a whole lot of cheese to your table.
        </p>
      </div>
    </div>
  );
}

export default About;
