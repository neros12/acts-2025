import { Container } from 'components/Base/Container'
import { Logo } from 'components/Logo'

export function Footer() {
    return (
        <footer className="flex-none py-4">
            {/* <Container>
                <h2>Location</h2>
                <div className="h-96 w-96">
                    <iframe
                        title="seoul-station-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.028205919016!2d126.96946967599162!3d37.55467802464557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca257a951e56b%3A0x77b9d5c52f0f9d73!2z7ISc7Jq47Yq567OE7IucIOyEnOyalOyngO2YuA!5e0!3m2!1sko!2skr!4v1739890000000!5m2!1sko!2skr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </Container> */}
            <Container className="flex flex-col items-center justify-between md:flex-row">
                <Logo className="h-12 w-auto text-slate-900" />
                <p className="mt-6 text-base text-slate-500 md:mt-0">
                    Copyright &copy; {new Date().getFullYear()} MDL. All rights
                    reserved.
                </p>
            </Container>
        </footer>
    )
}
