import { Fragment } from "react";
import classes from "./Header.module.css";
import MealsImg from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick}>Cart</HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
