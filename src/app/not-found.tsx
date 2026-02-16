import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative w-full aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/5">
          <Image
            src="/images/desk.jpg"
            alt="Escritorio de trabajo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 px-6">
            <p className="text-7xl font-bold text-primary-light drop-shadow-lg">404</p>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Esta página no existe
          </h1>
          <p className="text-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Parece que te has perdido. La página que buscas no fue encontrada o ha sido movida.
          </p>
        </div>

        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Volver al portafolio
        </a>
      </div>
    </div>
  );
}
