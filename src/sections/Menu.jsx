import React from 'react'
import { motion } from 'framer-motion'

export default function Menu() {
  const antipasti = [
    { name: 'Crocchette di Baccalà', price: '14, 00 €', desc: 'Con pesto di pomodoro secco e salsa tartara' },
    { name: 'Tarte Tatin di Cipolla', price: '12, 00 €', desc: 'Con gelato al gorgonzola e crumble di nocciole' },
    { name: 'Carpaccio di Ricciola', price: '12, 00 €', desc: 'Crudo sottile, servito fresco' },
    { name: 'Gambero Rosso', price: '5, 00 €', desc: 'Servito due modi, per esaltare la sua dolcezza naturale' },
    { name: 'Polpo in Insalata', price: '15, 00 €', desc: 'Con pomodorini, arance, olive taggiasche e pacchino' }
  ]

  const primi = [
    { name: 'Paccheri al Pesce Spada', price: '18, 00 €', desc: 'Con melanzane, pomodorini e ricotta salata' },
    { name: 'Paccheri al Pesce Spada', price: '18, 00 €', desc: 'Con melanzane, pomodorini e ricotta salata' },
    { name: 'Ravioli di Burrata', price: '16, 00 €', desc: 'Con pomodorini di Pachino e pesto di basilico' },
    { name: 'Risotto agli Agrumi', price: '22, 00 €', desc: 'Con gamberi scottati e gel di limone bruciato' },
    { name: 'Spaghettoni alle Ortiche', price: '18, 00 €', desc: 'Con polpo croccante e coulis di stracciatella' },
    { name: 'Tagliolini al Tonno', price: '22, 00 €', desc: 'Con pomodorini e menta fresca' }
  ]

  const secondi = [
    { name: 'Filetto di Spigola', price: '24, 00 €', desc: 'Con gazpacho di pomodoro fresco e spinacino saltato' },
    { name: 'Salmone in Crosta', price: '23, 00 €', desc: 'Con pistacchio e misticanza esotica' },
    { name: 'Polpo in Doppia Cottura', price: '26, 00 €', desc: 'Con hummus al lime, patate dolci e riso soffiato' },
    { name: 'Tonno Rosso Scottato', price: '28, 00 €', desc: 'Con carote in due consistenze' },
    { name: 'Cotoletta Sbagliata', price: '26, 00 €', desc: 'Alla milanese con patate arrosto' }
  ]

  const desserts = [
    { name: 'Sbrisolona di riso', price: '7, 00 €', desc: 'Sbrisolona croccante con crema zabaione' },
    { name: 'Tartufi e Recioto', price: '10, 00 €', desc: 'Tartufi di riso e cocco, ricotta al pistacchio, Recioto' },
    { name: 'Semifreddo alle nocciole', price: '7, 00 €', desc: 'Semifreddo alla nocciola con crumble di riso' },
    { name: 'Cheesecake ai frutti di bosco', price: '7, 00 €', desc: 'Cheesecake di riso con frutti di bosco' },
    { name: 'Crostatina di riso', price: '7, 00 €', desc: 'Crostatina con vaniglia e frutta fresca' },
    { name: 'Crostatina di riso', price: '7, 00 €', desc: 'Crostatina con vaniglia e frutta fresca' }
  ]

  const renderMenuItems = (items) => {
    return items.map((item, idx) => (
      <div key={idx} className="border-b border-[#8a1c25]/15 pb-4 mb-4 last:mb-0">
        <div className="flex justify-between items-baseline gap-4">
          <h4 className="font-['Bonny-Bold'] text-lg sm:text-xl text-[#8a1c25] leading-tight">
            {item.name}
          </h4>
          <span className="font-['Bonny-Bold'] text-lg sm:text-xl text-[#8a1c25] whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="font-['Switzer-Regular'] text-[0.85rem] text-[#7a4338] mt-1 md:mt-2 leading-relaxed font-light">
          {item.desc}
        </p>
      </div>
    ))
  }

  return (
    <section className="w-full bg-[#8a1c25] py-16 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* The Cream Menu Card */}
      <div className="w-full max-w-[94vw] xl:max-w-[1420px] mx-auto bg-[#F9F7EF] rounded-[2rem] md:rounded-[3rem] border border-[#8a1c25]/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] p-6 sm:p-10 md:p-16 lg:p-20">
        
        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 relative">
          
          {/* Left Column (Antipasti & Primi) */}
          <div className="md:border-r md:border-[#8a1c25]/15 md:pr-12 lg:pr-16 flex flex-col gap-12 md:gap-16">
            {/* Antipasti */}
            <div>
              <h3 className="font-['Bonny-Bold'] text-[2rem] md:text-[2.5rem] text-[#8a1c25] tracking-wide mb-6 md:mb-8 leading-none">
                ANTIPASTI
              </h3>
              <div className="flex flex-col">
                {renderMenuItems(antipasti)}
              </div>
            </div>

            {/* Primi */}
            <div>
              <h3 className="font-['Bonny-Bold'] text-[2rem] md:text-[2.5rem] text-[#8a1c25] tracking-wide mb-6 md:mb-8 leading-none">
                PRIMI
              </h3>
              <div className="flex flex-col">
                {renderMenuItems(primi)}
              </div>
            </div>
          </div>

          {/* Right Column (Secondi & Desserts) */}
          <div className="md:pl-12 lg:pl-16 flex flex-col gap-12 md:gap-16">
            {/* Secondi */}
            <div>
              <h3 className="font-['Bonny-Bold'] text-[2rem] md:text-[2.5rem] text-[#8a1c25] tracking-wide mb-6 md:mb-8 leading-none">
                SECONDI
              </h3>
              <div className="flex flex-col">
                {renderMenuItems(secondi)}
              </div>
            </div>

            {/* Desserts */}
            <div>
              <h3 className="font-['Bonny-Bold'] text-[2rem] md:text-[2.5rem] text-[#8a1c25] tracking-wide mb-6 md:mb-8 leading-none">
                DESSERTS
              </h3>
              <div className="flex flex-col">
                {renderMenuItems(desserts)}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Giant ME. NU. Typography */}
        <div className="grid grid-cols-2 mt-16 md:mt-24 select-none border-t border-[#8a1c25]/10 pt-12 md:pt-16">
          <div className="font-['Bonny-Bold'] text-[#8a1c25] text-[6.5rem] sm:text-[10rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] leading-none tracking-normal">
            ME.
          </div>
          <div className="font-['Bonny-Bold'] text-[#8a1c25] text-[6.5rem] sm:text-[10rem] md:text-[15rem] lg:text-[18rem] xl:text-[22rem] leading-none tracking-normal md:pl-12 lg:pl-16">
            NU.
          </div>
        </div>

      </div>
    </section>
  )
}
