import { Linkedin, Github, Mail, File } from 'lucide-react';
import joao from './assets/photo.jpg';

export function App() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900 flex justify-center items-center flex-col">
      <main className="flex flex-col gap-5 w-full max-w-lg px-4 sm:px-6">
        <section id="about">
          <img
            src={joao}
            alt="João"
            className="w-20 h-20 rounded-full object-cover"
          />

          <h1 className="text-3xl font-medium sm:text-4xl">Hi, I'm João.</h1>
          <h2 className="text-base font-medium sm:text-lg">
            I'm a software developer with a passion for building games. I
            started coding when I was 15 and I haven't stopped since! I'm
            originally from Brazil but currently based in Berlin.
          </h2>
          <div className="flex gap-2">
            <Linkedin />
            <Github />
            <Mail />
            <File />
          </div>
        </section>
        <section id="resume"></section>
      </main>
    </div>
  );
}
