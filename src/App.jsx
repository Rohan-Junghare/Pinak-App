import styles from "./style";
import { Billing, Business, CardDeal, Client, CTA, Footer, Navbar, Stats, Testimonial, Hero } from "./components";

const App = () => {
  return (
    <>
    <div className="bg-primary w-fully overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexcenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Client />
        <CTA />
        <Footer />
      </div>
    </div>
    </div>
    </>
  )
}

export default App;
