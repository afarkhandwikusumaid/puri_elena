
function Logo({ size = 'md' }) {
  // Atur tinggi logo berdasarkan prop size
  const heights = { sm: 32, md: 52, lg: 68 };
  const imgHeight = heights[size] || 52;

  return (
    <img 
      src="/purielena.png" 
      alt="Logo Puri Elena" 
      style={{ 
        height: `${imgHeight}px`, 
        width: 'auto', 
        display: 'block', 
        objectFit: 'contain' 
      }} 
    />
  );
}

export default Logo;
