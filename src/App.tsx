import { Linkedin, Github, Mail, File, Download, Loader2 } from 'lucide-react';
import joao from './assets/photo.jpg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CVPDF } from './components/CVPDF';
import { CVReact } from './components/CVReact';

export function App() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <main className="flex flex-col w-full mx-auto px-4 sm:px-6">
        <section
          id="about"
          className="min-h-dvh flex flex-col justify-center gap-5 snap-start max-w-lg mx-auto"
        >
          <img
            src={joao}
            alt="João"
            className="w-20 h-20 rounded-full object-cover"
          />

          <h1 className="text-3xl font-medium sm:text-4xl tracking-tight">
            Hi, I'm João.
          </h1>
          <h2 className="text-base font-light sm:text-lg">
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
        <section
          id="resume"
          className="snap-start min-h-dvh flex flex-col gap-8 max-w-xxl mx-auto py-5"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Resume
            </h2>
            <PDFDownloadLink document={<CVPDF />} fileName="JoaoVN_CV.pdf">
              {({ loading }) =>
                loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Download className="w-4 h-4" />
                )
              }
            </PDFDownloadLink>
          </div>
          <div className="w-full">
            <CVReact />
          </div>
        </section>
      </main>
    </div>
  );
}
