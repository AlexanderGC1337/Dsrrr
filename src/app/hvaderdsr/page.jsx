'use client'

import React from 'react'
import Galleri from '../components/Galleri'
import { ChevronDown } from 'lucide-react'

const Hvaderdsr = () => {
  const scrollToContent = () => {
    const contentElement = document.getElementById('dsr-content');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0" 
          style={{ backgroundImage: 'url(/assets/images/galleri/MAL_1552.JPG)' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-secondary">D</span>ansk <span className="text-secondary">S</span>uper <span className="text-secondary">R</span>ally
          </h1>
          <p className="text-xl md:text-2xl text-white mb-16 max-w-3xl mx-auto">
            Oplev toppen af dansk rally - fart, spænding og konkurrence på højeste niveau
          </p>
        </div>
        
        {/* Moved the button outside of the text container and positioned it at the bottom */}
        <button 
          onClick={scrollToContent}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white z-20 animate-bounce"
          aria-label="Scroll down"
        >
          <ChevronDown size={42} />
        </button>
      </div>

      {/* Key Facts Section */}
      <div id="dsr-content" className="bg-primary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="bg-primary-dark p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="text-5xl font-bold mb-3">6</div>
              <p className="text-xl">Afdelinger over hele Danmark</p>
            </div>
            
            <div className="bg-primary-dark p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="text-5xl font-bold mb-3">40-60</div>
              <p className="text-xl">Deltagende biler i hver afdeling</p>
            </div>
            
            <div className="bg-primary-dark p-6 rounded-lg shadow-lg text-center transform transition-transform hover:scale-105">
              <div className="text-5xl font-bold mb-3">10+</div>
              <p className="text-xl">RC2 teams i kongeklassen</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Hvad er DSR?</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8">
              DSR er toppen af dansk rally. Mesterskabet afvikles over 6 afdelinger, hvor der køres i flere landsdele.
              Hver afdeling består af 4-5 forskellige hastighedsprøver der køres flere gange. Med et deltagende felt på 40-60 biler
              er konkurrencen intens og højt kvalificeret.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
              <div>
                <img 
                  src="/assets/images/galleri/MAL_1552.JPG" 
                  alt="Rally bil i aktion" 
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">En voksende sport</h3>
                <p>
                  DSR er vokset markant i deltagerantal, og interessen fra tilskuere er ligeledes steget betydeligt gennem de senere år. 
                  Det er blevet eftertragtet for kørere og teams at deltage i DSR, hvilket afspejles i investeringerne i bl.a. RC2 klassen.
                </p>
                <p className="mt-4">
                  RC2 klassen kan betegnes som Kongeklassen. RC2 bilerne er den type, der deltager som supportklasse i World Rally Car Championship.
                  Klassen er vokset i Danmark siden 2018, fra 1-3 tilmeldte til nu 10 teams i 2024.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg my-12">
              <h3 className="text-2xl font-semibold mb-4 text-center">Mesterskabet</h3>
              <p>
                I hvert rally kåres en totalvinder og et antal klassevindere. Teamet med flest point til slut kåres som officiel DIF-Rally Mester. 
                Dansk Automobil Sports Union kårer efter samme princip vinderne i de enkelte vognklasser.
              </p>
            </div>
            
            <div className="my-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Mediedækning</h3>
              <div className="bg-white p-6 shadow-lg rounded-lg">
                <p className="mb-6">
                  DSR dækkes af et professionelt produktionsselskab, der viser <strong>live</strong> fra hvert rally. 
                  Efter hvert løb produceres der et dedikeret program, som sendes på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>TV3 Sport</li>
                  <li>TV2-regionerne</li>
                  <li>Forskellige net-tv kanaler</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center my-16 px-4 py-10 border-t border-b border-gray-200">
              <h4 className="italic uppercase font-semibold text-3xl mb-3 text-primary">
                Rallysporten er fangende
              </h4>
              <p className="italic text-xl">
                "Det går direkte i blodet!"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">En oplevelse for hele familien</h3>
                <p>
                  I dag er sportsbegivenheder i langt højere grad en oplevelse for hele familien. Det gælder ikke mindst motorsporten, 
                  og det stiger i takt med den øgede mediedækning både på tv og i den lokale presse.
                </p>
                <p className="mt-4">
                  I rallysporten kan en familie sammenligne deres private bil med den, som deltagerne kører i, 
                  da konkurrencebilerne næsten ligner en almindelig bil - bare med en masse reklamer på.
                </p>
              </div>
              <div>
                <img 
                  src="/assets/images/galleri/MAL_1552.JPG" 
                  alt="Familier til rally" 
                  className="rounded-lg shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
            
            <p className="my-8">
              Et stort rallyarrangement dækker et helt lokalområde og kan være med til at give samhørighed og identitet til dem, der bor i området.
              Det er i mange tilfælde også den vigtigste drivkraft hos de firmaer og sponsorer, der støtter op om rallysporten - 
              nemlig kærligheden til rally, biler, motor og teknik.
            </p>
            
            <p className="mb-12">
              Det er værdier, der er svære at gøre op i kroner og øre, men uanset beløbenes størrelse er det guld værd for sporten. 
              Og for firmaet er det en sikker investering i goodwill og positivt omdømme.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Oplev dansk rally på tætteste hold</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Find information om kommende løb, se livestreams eller meld dig som frivillig til næste DSR-event
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <a href="/rallies">
              Se løbskalender
              </a>
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              <a href="https://www.dasu.dk/find-dasu-klub/frivillig-i-motorsport/" target='_blank'>
              Bliv frivillig
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hvaderdsr