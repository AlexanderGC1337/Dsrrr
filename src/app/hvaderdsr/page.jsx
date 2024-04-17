'use client'

import React from 'react'
import Image from 'next/image'

const Hvaderdsr = () => {
  return (
    <>
      <div className="hero min-h-[600px]" style={{ backgroundImage: 'url(/assets/images/galleri/MAL_1552.JPG)' }}>

        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md text-[whitesmoke]">
            <h1 className="mb-5 text-5xl font-bold">Hvad er DSR ?</h1>
          </div>
        </div>
      </div>

      <div className='container px-10 sm:px-3 mx-auto mt-14 text-[#333] prose-base lg:prose-lg'>
        <p className='my-6'>
          DSR er toppen af dansk rally. DSR afvikles over 6 afdelinger, hvor der køres i flere landsdele.

          Hver afdeling tæller omkring 4-5 forskellige hastighedsprøver der køres flere gange.

          DSR deltager feltet ligger på 40-60 biler

          DSR er vokset i deltagerantal og interes­sen fra tilskuere er ligeledes steget markant gennem de senere år. Det er blevet eftertragtet for kører og teams at deltage i DSR, hvilket vises ved at der er tilmeldt godt 10 teams der har investeret tid og penge for at være med i RC2 klassen. RC2 klassen kan betegnes som Kongeklassen. RC2 bilerne, er den type der deltager som supportklasse i World Rally Car Championship. VI ser frem til at se den skarpe konkurrence i netop den klasse. Det er en klasse der i Danmark er vokset siden 2018, fra 1-3 tilmeldte, til de nu 10 teams i 2024 og måske et par stykker fra andre lande i løbet året.
        </p>
        <p className='my-6'>
          I hvert rally kåres en totalvinder og et antal klassevindere. Teamet med flest point til slut kåres som officiel DIF-Rally Mester. Dansk Automobil Sports Union kårer efter samme princip vinderne i de enkelte vognklasser.
        </p>
        <h3 className='uppercase font-semibold text-lg my-6 text-center lg:text-start'>
          Mediedækning
        </h3>
        <p className='mb-20'>
          DSR dækkes af et produktionsselskab der viser live fra hvert rally og der laves et program efter hvert rally der sendes på TV3 Sport, TV2-regionerne samt på forskellige net-tv kanaler.
        </p>

        <div className='text-center mb-10'>
          <h4 className='italic uppercase font-semibold text-xl'>
            Rallysporten er fangende
          </h4>
          <h6 className='italic'>
            &quot;det går direkte i blodet !&quot;
          </h6>
        </div>
        <p>
          I dag er sportsbegivenheder i langt højere grad en oplevelse

          for Hele familien.

          Det gælder ikke mindst motorsporten, og det stiger i takt

          med, at der kommer flere arrangementer og indslag omkring

          motorsports arrangementer både på tv og i den lokale

          presse rundt

          omkring i landet.
        </p>
        <p className='my-2'>
          I Rally sporten kan en familie sammenligne deres private bil,

          med den som deltagerne kører rundt i, da konkurrence

          bilerne næsten ligner en alm. Bil, bare med en masse

          reklame på.
        </p>
        <p>
          Der til skal man lægge at arrangementerne og dens

          faciliteter forbedres og udbygges, i takt med de krav som

          omverden stiller.

          Rally er en sportsgren, som kan samle far, mor og børn samt

          vennerne og de tager gerne af sted, for at få oplevelsen af

          denne fantastiske sport.
        </p>
        <p className='my-2'>
          Et stort Rally arrangement dækker et helt lokalområdet og

          kan være

          Med til at give samhørighed og identitet til dem der bor i

          området.
        </p>
        <p className='mb-20'>
          Det er i mange tilfælde også den vigtigste drivkraft hos de

          firmaer og sponsorer, der støtter op om Rally sporten,

          nemlig kærligheden til Rally

          – biler – motor – teknik osv.

          Det er værdier, der er svære at gøre op i kroner og øre, men

          uanset beløbenes størrelse er det guld værd for Sporten. Og

          for firmaet er det en sikker investering i goodwill og positivt

          omdømme.
        </p>
      </div>
      <div className='container mx-auto mb-20'>
        <div className='grid gap-2 place-items-center'>
          <img src="/assets/images/presse-dansk.jpg" alt=""/>
          <img src="/assets/images/presse-engelsk.jpg" alt=""/>
        </div>
      </div>
    </>
  )
}

export default Hvaderdsr