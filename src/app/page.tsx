import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div>
          <h1 className="text-4xl font-bold text-center sm:text-left">
            Hi, I'm Ishita!
          </h1>
          </div>
          <p className="text-lg text-center sm:text-left max-w-md">
            One day I <i>will</i> build this portfolio website. Until then, this will do..
          </p>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.linkedin.com/in/ishitabadole/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/linkedin_logo.svg"
              alt="LinkedIn logo"
              width={16}
              height={16}
            />
            LinkedIn
          </a>
        </footer>
        </div>
      </main>
    </div>
  );
}
