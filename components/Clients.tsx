import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import Image from "next/image";

const Clients = () => {
	return (
		<div className="py-20" id="testimonials">
			<h1 className="heading">
				Kind words from <span className="text-purple"> satisfied clients</span>
			</h1>
			<div className="flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10"></div>
			<div className="flex flex-col items-center max-lg:mt-10">
				<InfiniteMovingCards
					items={testimonials}
					direction="left"
					speed="slow"
				/>
				{/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-20">
                    {companies.map(({ id, img, name, subTitle }) => (
                        <div key={id} className="flex md:max-w-60 max-w-64 mt-7">
                            <Image height={80} width={80} src={img} alt={name} className="md:w-10 md:h-10 w-9 h-9 mx-2 " />
                            <p className="items-center justify-center flex font-sm "> {subTitle} </p>
                        </div>
                    ))}
                </div> */}
			</div>
		</div>
	);
};

export default Clients;
