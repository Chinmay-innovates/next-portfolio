"use client";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
	// const initValues = { name: "", email: "", message: "" };
	// const [formValues, setFormValues] = useState(initValues);
	// const [formErrors, setFormErrors] = useState({
	// 	name: "",
	// 	email: "",
	// 	message: "",
	// });
	// const [isSubmit, setIsSubmit] = useState<boolean>(false);

	// const handleChange = (
	// 	e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	// ) => {
	// 	const { name, value } = e.target;
	// 	setFormValues({ ...formValues, [name]: value });
	// 	console.log(formValues);
	// };

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	setFormErrors(validate(formValues));
	// 	setIsSubmit(true);
	// 	setFormValues(initValues);
	// };

	// useEffect(() => {
	// 	console.log(formErrors);
	// 	if (Object.keys(formErrors).length === 0 && isSubmit) {
	// 		console.log(formValues);
	// 	}
	// }, [formErrors]);

	// const validate =
	// 	(
	// 		values: SetStateAction<{ name: string; email: string; message: string }) =>
	// 	() => {
	// 		const errors = { name: "", email: "", message: "" };
	// 		const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	// 		if (!values.name) {
	// 			errors.name = "Please enter your name";
	// 		}
	// 		if (!values.email) {
	// 			errors.email = "Please enter your email";
	// 		}
	// 		if (!values.name) {
	// 			errors.message = "Please enter a message";
	// 		}
	// 		return errors;
	// 	};
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
				<div className="container w-full max-w-[500px] flex items-center ">
					<form
						// onSubmit={handleSubmit}
						action="https://getform.io/f/ayvvkzgb"
						method="POST"
						className="mt-12 flex flex-col space-y-7"
					>
						<div
							className="grid items-center grid-cols-1 gap-x-2 
							 lg:flex lg:items-center 
							"
						>
							<div className="mt-4">
								<label htmlFor="name" className="label">
									Name
								</label>
								<input
									required
									// value={formValues.name}
									// onChange={handleChange}
									type="text"
									name="name"
									id="name"
									autoComplete="name"
									placeholder="Chinmay"
									className="text-field"
								/>
							</div>

							<div className="mt-4">
								<label htmlFor="email" className="label">
									Email
								</label>
								<input
									required
									// value={formValues.email}
									// onChange={handleChange}
									type="email"
									name="email"
									id="email"
									autoComplete="email"
									placeholder="chinmaygope69@gmail.com"
									className="text-field"
								/>
							</div>
						</div>
						<div className="">
							<label htmlFor="message" className="label">
								Message
							</label>
							<textarea
								required
								// value={formValues.message}
								// onChange={handleChange}
								name="message"
								id="message"
								className="text-field resize-y min-h-32 max-h-80"
								placeholder="Your thoughts"
							/>
						</div>

						<Button type="submit">Submit</Button>
					</form>
				</div>
				<Link href="mailto:chinmaygope69@gmail.com" className="mt-7">
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
