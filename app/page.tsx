import Image from "next/image";
import Logo from '../public/assets/Logo.png'

export default function Home() {
  return (
    <div>
      <Image
        src={Logo}
        alt="Logo"
      />
    </div>
  );
}
