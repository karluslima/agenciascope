import Image from 'next/image';

const Logo = () => (
  <div className="logo relative w-[136px] h-[40px]">
    <Image
      src="/scope.svg"
      alt="Logo Scope"
      fill
      sizes="136px"
      style={{ objectFit: 'contain' }}
      priority
    />
  </div>
);

export default Logo;
