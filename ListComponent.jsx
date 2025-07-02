function ListComponent({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <ul>
      {items.map(renderItem)}
    </ul>
  );
}

export default ListComponent;
