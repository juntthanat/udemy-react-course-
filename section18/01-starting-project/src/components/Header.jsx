import { useState } from "react";

import reactFoodLogo from "../assets/logo.jpg";

export default function Header({ cartOrder, onClickIsCartModal }) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={reactFoodLogo} />
        <h1>REACTFOOD</h1>
      </div>
      <div onClick={onClickIsCartModal}>
        <div className="text-button">{`Cart (${cartOrder.length})`}</div>
      </div>
    </header>
  );
}
