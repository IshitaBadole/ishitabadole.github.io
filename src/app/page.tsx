import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-homepage" aria-hidden="true">
    <div className="font-body grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div>
          <h1 className="text-4xl font-heading font-bold text-center sm:text-left">
            Hi, I&apos;m Ishita!
          </h1>
          </div>
          <p className="text-lg text-center sm:text-left max-w-prose">
            I&apos;m slowly growing this cozy little space; part digital garden, part sketchbook, part project log.
            It&apos;s where I gather the things I&apos;m thinking about, building, drawing, exploring, and figuring out along the way.
          </p>
          <p className="text-lg text-center sm:text-left max-w-prose">
            No pressure to be polished here. Just a quiet, evolving corner of the internet.
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
      <p className="fixed bottom-2 right-2 text-xs text-gray-500 z-50">
        <a className="flex" href="https://www.freepik.com/free-vector/watercolor-international-cat-day-background_29018602.htm#fromView=search&page=3&position=35&uuid=06b07e5a-4c77-4ea4-95f7-e492dc6af156&query=cat+background">Image by pikisuperstar on Freepik</a>
      </p>
    </div>
    </div>
  );
}
