function Card({ children }) {
  // Writing the styles directly inside, simple and clean.
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '10px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      {children}
    </div>
  )
}

export default Card
