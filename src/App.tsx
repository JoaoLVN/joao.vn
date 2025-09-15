import { Linkedin, Github, Mail, File, Download, Loader2 } from 'lucide-react';
import joao from './assets/photo.jpg';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CV } from './components/CV';
import { Resume } from './components/Resume';
import data from './data/cv.json';
import { IconButton } from './components/IconButton';

export function App() {
  return (
    <div className="min-h-dvh bg-white text-neutral-900">
      <main className="flex flex-col w-full mx-auto px-4 sm:px-6">
        <section
          id="about"
          className="relative min-h-dvh flex flex-col justify-center gap-5 max-w-lg mx-auto"
        >
          <img
            src={joao}
            alt="João"
            className="w-20 h-20 rounded-full object-cover"
          />

          <h1 className="text-3xl font-medium sm:text-4xl tracking-tight">
            Hi, I'm João.
          </h1>
          <h2 className="text-base font-light sm:text-lg text-neutral-700">
            Senior software engineer and tech lead crafting games and playful
            web experiences. Based in Berlin, originally from Brazil.
          </h2>
          <div className="flex gap-3 text-neutral-500">
            <a
              href={data.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <IconButton label="LinkedIn">
                <Linkedin className="w-5 h-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />
              </IconButton>
            </a>
            <a
              href={data.links.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <IconButton label="GitHub">
                <Github className="w-5 h-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />
              </IconButton>
            </a>
            <a href={`mailto:${data.email}`} aria-label="Email">
              <IconButton label="Email">
                <Mail className="w-5 h-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />
              </IconButton>
            </a>
            <a href="#resume" aria-label="Resume">
              <IconButton label="Resume">
                <File className="w-5 h-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />
              </IconButton>
            </a>
          </div>
        </section>
        <section
          id="resume"
          className="min-h-dvh flex flex-col gap-10 max-w-xxl mx-auto py-5 justify-center"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">
              Resume
            </h2>
            <PDFDownloadLink document={<CV />} fileName="JoaoVN_CV.pdf">
              {({ loading }) => (
                <IconButton label="Download PDF">
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Download className="w-5 h-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-105" />
                  )}
                </IconButton>
              )}
            </PDFDownloadLink>
          </div>
          <Resume />
        </section>
      </main>
    </div>
  );
}
