export default function ImageSection() {
  return (
    <div 
      className="common-container-content-img px-4 sm:px-6 lg:px-8"
      style={{
        width: '100%',
        marginTop: '60px'
      }}
    >
      <img
        src="/xclusive-collection.jpg"
        alt="Xclusive Collections Image"
        width={400}
        height={300}
        loading="lazy"
        decoding="async"
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover'
        }}
      />
    </div>
  );
}
