import Card from './card';
import { cardsContent } from "@/constants";


const Cards = () => {
  return (
    <div className="cardsContainer flex flex-col bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-600 gap-5 relative z-0 max-w-[1440px] mx-auto min-h-[85vh] pb-[80px]">
        <h1 className="text-center p-20 text-white text-4xl font-bold">¿Por qué elegir el alquiler de laptops con mi Empresa?</h1>
        <div className="flex md:flex-row flex-col lg:flex-nowrap flex-wrap z-0 max-w-[1440px] mx-auto justify-center items-center gap-5 padding-x">
            {cardsContent.map((card) => {
                return (
                    <Card 
                        key={card.id}
                        src={card.src}
                        title={card.title}
                        desc={card.desc}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Cards