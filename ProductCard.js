export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100%' }} />
      <h3>{product.title}</h3>
      <p>{product.price} €</p>
    </div>
  );
}
