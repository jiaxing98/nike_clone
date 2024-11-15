import { Shoe } from '../types/Shoe'

type Props = {
  shoe: Shoe
  onChanged: (shoe: Shoe) => void
  bigShoeImg: string
}

const ShoeCard = ({ shoe, onChanged, bigShoeImg }: Props) => {
  const handleClick = () => {
    if (bigShoeImg !== shoe.bigShoe) onChanged(shoe)
  }

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === shoe.bigShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          alt="Shoe Collection"
          width={125}
          height={100}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard
