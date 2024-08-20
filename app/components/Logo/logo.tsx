import Image from 'next/image'

const Logo = () => {
  return (
  <div className="logo relative w-[136px] h-[40px]">
    <Image src="/scope.svg" sizes="136px" alt="Logo Scope" fill
      style={{objectFit: 'contain'}}
    />
  </div>
  )
}

export default Logo