import Button from "../components/ui/Button"
import Heading from "../components/ui/Heading"

const HeroSection = () => {
    return (
        <section className="hero-section" data-aos="fade-up">
            <Heading text="stay connected. stay focused." color="#123DD8" />
            <Button text="join the waitlist" variant="cta" />
        </section>
    )
}

export default HeroSection