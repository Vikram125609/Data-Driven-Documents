import Eyes from './Eyes';
import Face from './Face';
import Facecontainer from './Facecontainer';
import Lips from './Lips';
import './Smily.css'
const Smily = () => {
    return (
        <>
            <Facecontainer>
                <Face />
                <Eyes cx='-100' />
                <Eyes cx='+100' />
                <Lips />
            </Facecontainer>
        </>
    );
}
export default Smily;