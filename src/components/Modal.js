import { MDBIcon } from 'mdb-react-ui-kit';
import CopyToClipboard from 'react-copy-to-clipboard';

const Modal = () => {

    const handleClcik = ()=>{
        let text = document.getElementById('copy');
        text.innerHTML='Copiado!'
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h3 className="modal-title font-family fs-5" id="exampleModalLabel">Datos de la cuenta</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-center gap-3 align-items-center w-auto'>
                        <p className='font-family mb-0'>CBU : 0110693640069307713512</p>
                        <CopyToClipboard text='0110693640069307713512'>
                            <button onClick={handleClcik} className='border border-0 bg-white d-flex flex-column justify-content-center align-items-center gap-3 mt-4'>
                                <MDBIcon size='lg' far icon="copy"/>
                                <span id='copy' style={{fontSize:'0.7rem'}} className='font-family'>Copiar!</span>
                            </button>
                        </CopyToClipboard>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Modal