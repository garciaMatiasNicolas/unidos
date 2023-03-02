import { MDBAccordion, MDBAccordionItem, MDBIcon } from 'mdb-react-ui-kit';

const FAQs = () => {
  return (
    <section className="faqs p-5" id="faqs">

        <div className="d-flex justify-content-center align-items-center gap-1 flex-column mb-5">
            <h3 className="font-family fs-6 text-center">¿Tienes dudas?</h3>
            <h3 className="font-family fs-1 text-center">Aca las respondemos!</h3>
        </div>

        <MDBAccordion flush initialActive={1}>
            <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Pregunta frecuente 1</>}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Pregunta frecuente 2</>}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </MDBAccordionItem>
            <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> &nbsp; Pregunta frecuente 3</>}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
                moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
                proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </MDBAccordionItem>
    </MDBAccordion>
    </section>
  )
}

export default FAQs