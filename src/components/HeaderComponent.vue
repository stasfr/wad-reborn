<template>
  <header class="header">
    <div class="header__container _container">
      <RouterLink to="/" class="header__logo"> WineAndDices </RouterLink>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <RouterLink to="/" class="menu__link">Главная</RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink to="/grapes" class="menu__link">Виноград</RouterLink>
          </li>
          <li class="menu__item">
            <RouterLink to="/dices" class="menu__link">Кубы</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 50;
}
.header__container {
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  font-weight: 700;
  color: inherit;
}
.menu__list {
  display: flex;
  flex-wrap: wrap;
}
.menu__item:not(:last-child) {
  margin-right: 20px;
}
.menu__link {
  color: inherit;
  transition: all 0.35s ease;
  position: relative;
}
.menu__link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform: scale(0);
  transition: all 0.3s ease-in-out 0s;
  visibility: hidden;
}
.menu__link:hover::before {
  visibility: visible;
  transform: scale(1);
}
</style>
