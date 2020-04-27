import React from 'react';

const Header = (props) => (
<div class="header">
  <a href="#default" class="logo">homeql</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
);

export default Header;