# Infinity-Shop

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Collaboration](#collaboration)
5. [FAQs](#faqs)

---

## General Info

Sitio web creado para el curso de "React JS" en Coderhouse.
</br>
Ramas de trabajo: El mismo cuenta con dos ramas de trabajo: Master (donde se aloja el proyecto final) y en la rama V.01 donde se trabajan las updates y fix.

Esta app puede conectarse con los productos de firebase o bien con la API de Mercado Libre. 
</br>

### Entrega 0.1

</br>
Objetivos:
</br>
Crear un componente CartWidget con un ícono y una notificación mostrando un número hardcodeado (fijo). Este servirá luego para indicar la cantidad de elementos que tenemos en el carrito, pero por ahora, mostrará un número hardcodeado (colocado en el código).
Ubicar este componente (CartWidget) dentro de Navbar..
</br>
Agregar algunos estilos con bootstrap/materialize u otro.
</br>
</br>
Crear un componente contenedor ItemListContainer.js con una prop greeting, y muestra el mensaje dentro del contenedor con el styling integrado.

<li>Brand (título/nombre de la tienda).</li>
<li>Un listado de categorías clickeables.</li>
<li>Incorpora alguna librería de estilos con bootstrap/materialize u otro de tu preferencia (opcional).</li>
</br>

### Entrega 0.2

Configurar en App.js el routing usando un BrowserRouter de tu aplicación con react-router-dom.Deberás desarrollar la navegabilidad básica de la aplicación, demostrando que la app permite ver el catálogo, y navegar a un detalle.

Componentes:
<li>Navbar con cart</li>
<li>Catálogo</li>
<li>Detalle de producto</li>
<br>
Rutas a configurar
<li>‘/’ navega a <ItemListContainer /> </li>
<li>‘/category/:id’  <ItemListContainer /> </li>
<li>‘/item/:id’ navega a <ItemDetailContainer /> </li>
</br>
Links a configurar
<li>Clickear en el brand debe navegar a ‘/’</li>
<li>Clickear un Item.js debe navegar a /item/:id</li>
<li>Clickear en una categoría del navbar debe navegar a /category/:categoryId </li>

</br>

### Entrega 0.3 Final

Se hace la entrega de:
</br>
App de un e-commerce para poder vender productos.
</br>
Componentes:
<li>Navbar</li>
<li>Catálogo</li>
<li>Detalle de producto</li>
<li>CartContext</li>
<li>CartWidget</li>

</br>
Módulos:
</br>
<li>NavBar</li>
<li>CartWidget</li>
<li>ItemListContainer</li>
<li>ItemList</li>
<li>ItemDetailContainer</li>
<li>ItemDetail</li>
<li>temQuantitySelector</li>
<li>Description</li>
<li>AddItemButton</li>
<li>Checkout</li>
<li>Brief (detalle de compra)</li>

</br>

---

### Screenshot

<video width="320" height="320" controls autoplay>
  <source src="src/assets/video/Infinity.mp4" type="video/mp4">
</video>

---

## Technologies

<h3 align="left">Languages and Tools:</h3>
<p align="left">
<a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <h2>V5.0</h2>
</br>

<a href="https://vitejs.dev" target="_blank" rel="noreferrer"> <img src="https://vitejs.dev/logo.svg" alt="vite" width="40" height="40"/> </a> <h2>VITE</h2>
</br>

<a href="https://react.dev/" target="_blank" rel="noreferrer"> <img src="http://www.w3.org/2000/svg" alt="react" width="40" height="40"/> </a> <h2>ReactJS</h2>
</br>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <h2>ES6</h2>
</br>

<a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <h2>V2.19.6</h2></p>
</br>

---

## Installation

Para instalar los paquetes usados en el proyecto puede utilizar los siguientes comandos.

```
git clone NicolasCaminos/Oasis
npm install
npm start
npm install -g node-sass
npm install --save sanitize.css
npm create vite@latest
npm run dev

```

---

## Collaboration

<li>Nicolás Caminos</li>

</br>

---

## FAQs

Puede visitar la web en: <a href="https://infinityshops.netlify.app/" target="_blank" rel="noreferrer"> <img src="https://infinityshops.netlify.app/assets/4-edce19d1.png" alt="Infinity" width="40" height="40"/> https://infinityshops.netlify.app/</a>
</br>
Link del repositorio:
<a href="https://github.com/NicolasCaminos/infinity-shop" target="_blank" rel="noreferrer">https://github.com/NicolasCaminos/infinity-shop</a>

</br>

Muchas Gracias.
</br>

---
