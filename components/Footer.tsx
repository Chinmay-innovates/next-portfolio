import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="w-full mb-[100px] md:mb-4 sm:h-full">
			<div className="flex flex-col items-center">
				<Image
					width={500}
					height={30}
					src="/footer-grid.svg"
					alt="Grid"
					className="w-full h-full opacity-50 "
				/>
				<h1 className="heading lg:max-w-[45vw]" id="contact">
					Ready to take <span className="text-purple">your</span> digital
					presence to the next level?
				</h1>
				<p className="text-white-200 md:mt-10 my-5 text-center">
					Reach out to me today and let&apos;s discuss how I can help you
					achieve your goals.
				</p>
				<Link href="mailto:chinmaygope69@gmail.com">
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position="right"
					/>
				</Link>
			</div>

			<div className="flex mt-16 md:flex-row flex-col justify-between items-center">
				<p className="md:text-base text-sm md:font-normal font-light">
					Copyright © 2024 Chinmay Innovates
				</p>

				<div className="flex items-center md:gap-3 gap-6 my-6">
					{socialMedia.map(({ id, link, img }) => (
						<div
							key={id}
							className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 mb-20 sm:mt-20"
						>
							<Link href={link}>
								<Image src={img} alt="icons" width={20} height={20} />
							</Link>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
