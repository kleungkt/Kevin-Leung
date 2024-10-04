const LoadingCircle = () => (
    <div className="spinning-circle"
    />
  );
  
  // Add this CSS to your stylesheet or in a style tag
  `@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`
  
export default LoadingCircle;