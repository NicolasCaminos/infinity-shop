// eslint-disable-next-line react/prop-types
const ItemListContainer = ({ greeting }) => {
  return (
    <main className="base-content">
      <div className="container">
        <h1>{greeting} </h1>
      </div>
    </main>
  );
};

export default ItemListContainer;
