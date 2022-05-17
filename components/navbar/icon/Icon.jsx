import Image from "next/image";

function Icon({ src, alt }) {
	return <Image src={src} alt={alt} width={21} height={21} layout="fixed" />;
}

export default Icon;
