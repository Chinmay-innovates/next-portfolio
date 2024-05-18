import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"
import Image from "next/image"


const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
                {projects.map(({
                    id,
                    title,
                    des,
                    img,
                    iconLists,
                    link,
                }) => (
                    <div
                        className="sm:h-[41rem] sm:w-[570px] lg:min-h-[38rem] h-[32rem] flex items-center justify-center  w-[80vw]"
                        key={id}
                    >
                        <PinContainer
                            title={link}
                            href={link}
                        >
                            <div className="relative flex items-center justify-center
                             lg:min-h-[25.5rem] sm:w-[570px] sm:h-[40vh] w-[80vw] h-[30vh]  overflow-hidden mb-10">
                                <div
                                    className="relative size-full overflow-hidden lg:rounded-3xl bg-[#13162d]"
                                >
                                    {/* <img src="/bg.png" alt="bgImg" /> */}
                                    <Image
                                        src="/bg.png"
                                        alt="bgImg"
                                        height={550}
                                        width={330}
                                    />
                                </div>
                                {/* <img src={img} alt={title} /> */}
                                <Image
                                    fill
                                    src={img} alt={title}
                                    className="z-10 absolute bottom-0"
                                />
                            </div>
                            <h1
                                className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-4'
                            >{title}</h1>
                            <p
                                className="lg:font-normal lg:text-xl md:text-xl text-base line-clamp-2 mt-2"
                            >{des}</p>
                            <div className="flex items-center justify-center mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, idx) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:size-10 size-8 flex justify-center items-center 
                                            "
                                            style={{
                                                transform: `translateX(-${5 * idx}px)`
                                            }}
                                        >
                                            {/* <img src={icon} alt={icon} className="p-2" /> */}
                                            <Image src={icon} alt={icon} className="p-2" fill />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                                    <FaLocationArrow className="ms-2" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects