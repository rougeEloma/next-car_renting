'use client';
import Image from 'next/image'
import { CustomButton } from '.'

const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div className='flex-1 pt-36 padding-x'>
        <div>
        <h1 className='hero__title'>Trouvez, réservez ou louez une voiture - rapidement et facilement</h1>

        <p className="hero__subtitle">ameliorer votre experience de location de voiture avec notre logiciel exceptionel.</p>

        <CustomButton 
            title='Explorer nos voitures'
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            alternative="explorer voitures"
            handleClick={handleScroll} />
        </div>

        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className='object-contain' />
                <div className="hero__image-overlay"/>
            </div>
        </div>
    </div>
  )
}

export default Hero