import Image from 'next/image';

const Card = ({ src, title, desc }) => {
  return (
    <div className="bg-white shadow-2xl border border-indigo-600 rounded-md h-96 lg:w-1/4 md:w-[48%] w-full">
        <div className="relative overflow-hidden h-1/2">
            <Image
            className="object-cover rounded-t-sm"
            src={src}
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="h-1/2 p-6">
            <h3 className="text-lg font-bold text-blue-800">{title}</h3>
            <p className="pt-3 text-md font-light">{desc}</p>
        </div>
    </div>
  )
}

export default Card