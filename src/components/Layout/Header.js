import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious meals!"></img>
      </div>
    </Fragment>
  );
};

export default Header;
