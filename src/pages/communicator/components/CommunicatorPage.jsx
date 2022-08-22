import Header from '../../../commons/components/Header';
import Footer from '../../../commons/components/Footer';
import '../assets/style/communicator-style.css';
import Communicator from './Communicator';
import CardsList from './CardsList';

function CommunicatorPage() {
  return (
    <>
    <Header />
    <Communicator />
    <CardsList />
    <Footer />
    </>
  )
}

export default CommunicatorPage;
