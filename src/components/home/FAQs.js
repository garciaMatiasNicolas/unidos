import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const FAQs = () => {
  return (
    <section className="faqs p-5" id="colaboration">

        <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
            <h3 className="font-family fs-6 text-center">¡Si te interesa darnos una mano, aquí podrás ver cómo!</h3>
            <h3 className="font-family fs-1 text-center">¿Como puedo colaborar?</h3>
        </div>

        <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Donar desde tu empresa</>}>
            Para concretar nuestro objetivo
            buscamos consolidar vínculos con organizaciones
            a través de una alianza que signifique un
            “compromiso por la inclusión”.
            Su presencia nos permitirá seguir
            fortaleciendo nuestros programas de Contención,
            Promoción e Información.
            Consideramos que los lazos entre las instituciones
            permiten aunar esfuerzos y alcanzar satisfactoriamente las metas.

            Los invitamos a sumarse a través de un patrocinio estable
            o de eventos puntuales de la organización.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Ser voluntario</>}>
            Los voluntarios en unidos por la alegria son los que hacen posible nuestra acción solidaria.
            Ellos desde el compromiso y su adhesión al proyecto de nuestra Institución,
            ayudan a construir nuestra misión. Si querés sumarte, completá el formulario de <Link to='/contacto'>Contacto</Link> ¡Muchas gracias!
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Donaciones online</>}>
            También puedes colaborar con nosotros de manera online dejándonos alguna donación para que nuestra fundación pueda seguir creciendo. Podrás ver nuestra información de CBU y Alias aquí.
            </MDBAccordionItem>
    </MDBAccordion>
    </section>
  )
}

export default FAQs