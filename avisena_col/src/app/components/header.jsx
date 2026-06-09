export default function Header() {
    return (
        <header
            className="flex items-center justify-between border-b border-solid border-[#eaf3e7] dark:border-emerald-900/30 px-6 py-4 md:px-40 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
            <section className="flex items-center gap-3">
                <img src="/assets/images/logo-sena-verde-complementario-svg-2022.svg" alt="Logo SENA" className="w-12 h-12 object-contain" />
                <h2 className="text-[#111b0e] dark:text-slate-100 text-xl font-black uppercase tracking-tight">
                    AVISENA COL
                </h2>
            </section>
            <p className="text-slate-500 dark:text-slate-400 text-base mt-2 ">
                Sistema de Gestión Avícola
            </p>
        </header>
    );
}
