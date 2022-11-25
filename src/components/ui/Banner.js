function Banner(props) {
  return (
    <div
      className='grid grid--2-cols'
      style={{
        backgroundColor: 'white',
        height: '100%',
        borderRadius: '11px',
      }}
    >
      <div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
      <img src={props.image} alt={props.title} style={{ width: '100%' }} />
    </div>
  );
}

export default Banner;
