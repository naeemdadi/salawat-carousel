import Image from 'next/image';

interface PledgeCardProps {
  name: string;
  count: number;
  country: string;
  flag: string;
}

const PledgeCard: React.FC<PledgeCardProps> = ({ name, count, country, flag }) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-6 rounded-lg shadow-md w-56">
      <p className="">{name}</p>
      <p className="text-2xl font-bold">{count}</p>
      <div className="flex items-center mt-2">
        <Image src={`https://flagcdn.com/48x36/${flag}.png`} alt={country} width={30} height={30} className="mr-2" />
        <span>{country}</span>
      </div>
    </div>
  );
};

export default PledgeCard;