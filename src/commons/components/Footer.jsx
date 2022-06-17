import '../assets/styles/footer.css';

function Footer(props) {
  const { content } = props;

  return (
    <footer className='footer'>
      { content }
    </footer>
  )
}

export default Footer;
