import Modal from '../../Component/modal';
import Accordian from '../../Component/accordian';

const HomePage = () =>{
    return(
        <>
        <h2>HomePage</h2>
        <Modal>asdsad</Modal>

        <Modal>555555</Modal>
        <section>
        <Accordian>
            <div>1</div>
            <div>2</div>
            <Accordian>
                <div>3</div>
                <div>4</div>
            </Accordian>
        </Accordian>
        </section>
        
        </>
    );
};

export default HomePage;