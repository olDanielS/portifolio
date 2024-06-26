import React from "react";
import '../../Styles/global.css'

import Me from '../../assets/me.png'
import Projects from '../../assets/projects.png'
import skills from '../../assets/skills.png'

import Card from "../../Components/Card";

export default function Home() {
    return (
        <main className="flex flex-1 flex-col items-center min-h-screen w-full bg-background p-5">
            <header className="flex items-center justify-center h-96 w-full animate-pulse">
                <span className="w-[410px] ">
                    <p className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl text-center font-title text-white transition-all duration-500 ease-in-out font-bold select-none">
                        Transformando ideias em <span className="text-primaryGreen ">realidade</span> através de <span className="text-primaryGreen">
                            código</span> e <span className="text-primaryGreen">criatividade</span>.</p>
                </span>
            </header>
            <section className="flex relative flex-wrap group items-center h-2/5 w-2/3 justify-around transition-all duration-1000 ease-in-out  ">
                <Card className="relative transition-all duration-1000 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                    
                    <span className="flex flex-1 items-center justify-center w-14">
                        <p className=" font-side text-center text-white text-7xl -rotate-90 uppercase select-none">whoami</p>
                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <img src={Me} alt="Me" className="w-36 h-36 rounded-full select-none" />
                        <p className="text-white font-subtitle select-none">Daniel Oliveira</p>
                    </div>
                    

                    <div className="absolute inset-0 h-full w-full rounded-xl bg-bgCard
                     px-12 text-slate-200 z-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex flex-col ">

                        </div>
                    </div>

                </Card>
                <Card className="relative transition-all duration-1000 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                    <span className="flex flex-1 items-center justify-center w-14">
                        <p className=" font-side text-center text-white text-6xl -rotate-90 uppercase select-none">Projects</p>
                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <img src={Projects} alt="Me" className="w-36 h-36 rounded-full object-cover"/>
                        <p className="text-white font-subtitle select-none">Projetos</p>
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-bgCard
                     px-12 text-slate-200 z-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex flex-col ">

                        </div>
                    </div>
                </Card>
                <Card className="relative transition-all duration-1000 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]" >
                    <span className="flex flex-1 items-center justify-center w-14">
                        <p className=" font-side text-center text-white text-6xl -rotate-90 uppercase select-none">Skills</p>
                    </span>
                    <div className="flex flex-col items-center justify-center">
                        <img src={skills} alt="Me" className="w-36 h-36 rounded-full object-cover" />
                        <p className="text-white font-subtitle select-none">Habilidades</p>
                    </div>

                    <div className="absolute inset-0 h-full w-full rounded-xl bg-bgCard
                     px-12 text-slate-200 z-50 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div className="flex flex-col ">

                        </div>
                    </div>

                </Card>
            </section>

            <footer className=" flex-1 flex items-center">
                <p className="font-subtitle text-white text-xl text-center select-none">Codificando o futuro, um projeto de cada vez.</p>
            </footer>

        </main>
    );
}