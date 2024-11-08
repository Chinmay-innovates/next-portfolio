"use client";
"use client";
import React, { useState } from "react";
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string;
		link: string;
		icon?: JSX.Element;
	}[];
	className?: string;
}) => {
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(true);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		if (typeof current === "number") {
			let direction = current! - scrollYProgress.getPrevious()!;

			if (scrollYProgress.get() < 0.05) {
				// also set true for the initial state
				setVisible(true);
			} else {
				if (direction < 0) {
					setVisible(true);
				} else {
					setVisible(false);
				}
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					`flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto   px-4 py-4 rounded-full border border-black/0.1 
                    items-center justify-center space-x-4 bg-black-100`,
					className
				)}
				style={{
					backdropFilter: "blur(16px) saturate(180%)",
					backgroundColor: "rgba(17, 25, 40, 0.75)",
					borderRadius: "12px",
					border: "1px solid rgba(255, 255, 255, 0.125)",
				}}
			>
				{navItems.map((navItem: any, idx: number) => (
					<Link key={`link=${idx}`} href={navItem.link}>
						<button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
							<span className="text-sm !cursor-pointer">{navItem.name}</span>
							<span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
						</button>
					</Link>
				))}
			</motion.div>
		</AnimatePresence>
	);
};
