import { HealthySection } from "./HealthySection/HealthySection"
import "./HeroSection.css"
import { LoginAd } from "./LoginAd/LoginAd"

export const HeroSection = () => {
  return (
    <main className='hero-section'>
        <HealthySection/>
        <LoginAd/>
    </main>
  )
}
