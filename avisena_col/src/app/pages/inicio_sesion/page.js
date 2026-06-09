import { useState } from 'react';
import header from '../../components/header';
import footer from '../../components/footer';

export default function LoginView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        // Validación simple
        const newErrors = {};
        if (!email) newErrors.email = 'El email es requerido';
        if (!password) newErrors.password = 'La contraseña es requerida';
        if (email && !email.includes('@')) newErrors.email = 'Email inválido';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        // Simular envío
        console.log('Iniciando sesión con:', { email, password });
        
        // Aquí irá la lógica de autenticación
        setTimeout(() => {
            alert('Inicio de sesión exitoso (simulado)');
            setLoading(false);
        }, 1000);
    };

    return (
        <>
            <header/>
                <main class="flex-1 flex items-center justify-center px-4 py-12">
                    <article
                    class="w-full max-w-[460px] bg-white dark:bg-[#1c2e17] rounded-2xl shadow-2xl border border-[#eaf3e7] dark:border-emerald-900/30 overflow-hidden">

                        <header class="pt-10 px-8 text-center">
                            <h1 class="text-[#111b0e] dark:text-white text-3xl font-black">
                                Bienvenido
                            </h1>
                            <p class="text-slate-500 dark:text-slate-400 text-base mt-2">
                                Gestiona tu producción en <span class="text-emerald-600 font-bold">AVISENA COL</span>.
                            </p>
                        </header>

                        <form id="loginForm" class="p-8 space-y-5">

                            <div id="errorBox"
                                class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-sm font-bold"
                                role="alert">
                                Usuario o contraseña incorrectos.
                            </div>

                            <section class="flex flex-col gap-2">
                                <label class="text-[#111b0e] dark:text-slate-200 text-sm font-semibold">Correo electrónico o
                                    Usuario</label>
                                <input type="text" id="email" placeholder="admin / aprendiz / investigador" required
                                    class="w-full rounded-lg text-[#111b0e] dark:text-white border border-[#d5e7d0] dark:border-emerald-900/50 bg-[#f9fcf8] dark:bg-background-dark/50 h-12 p-4 text-base transition-all" />
                            </section>

                            <section class="flex flex-col gap-2">
                                <label class="text-[#111b0e] dark:text-slate-200 text-sm font-semibold">Contraseña</label>
                                <aside class="relative">
                                    <input id="password" type="password" placeholder="••••••••" required
                                        class="w-full rounded-lg text-[#111b0e] dark:text-white border border-[#d5e7d0] dark:border-emerald-900/50 bg-[#f9fcf8] dark:bg-background-dark/50 h-12 p-4 pr-12 text-base transition-all" />
                                    <button onclick="togglePassword()" type="button"
                                        class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary text-xl">
                                        👁
                                    </button>
                                </aside>
                            </section>

                            <button type="submit"
                                class="flex items-center justify-center w-full bg-primary hover:bg-[#3dbd14] text-black font-black py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] mt-2 uppercase tracking-wide">
                                Iniciar Sesión
                            </button>


                            <section class="grid grid-cols-2 gap-4">
                                <button type="button" id="btnGoogle"
                                    class="flex items-center justify-center gap-2 border border-[#d5e7d0] dark:border-emerald-900/50 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-background-dark transition-all font-bold text-sm">
                                    <img class="w-4 h-4" src="assets/images/google-logo-search-new-svgrepo-com.svg" alt="Google"/>
                                    Google
                                </button>

                                <button type="button" id="btnFacebook"
                                    class="flex items-center justify-center gap-2 border border-[#d5e7d0] dark:border-emerald-900/50 py-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-background-dark transition-all font-bold text-sm">
                                    <img class="w-4 h-4"
                                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
                                        alt="Facebook"/>
                                    Facebook
                                </button>
                            </section>
                        </form>

                        <footer
                            class="bg-slate-50 dark:bg-black/20 border-t border-[#eaf3e7] dark:border-emerald-900/30 py-6 text-center">
                            <p class="text-slate-500 dark:text-slate-400 text-sm">
                                <a href="olvidastecontraseña.html"
                                    class="text-primary font-black hover:underline underline-offset-4 ml-1">¿olvidaste tu
                                    contraseña?</a>
                            </p>
                        </footer>
                    </article>
                </main>
                <footer/>
        </>
        
    );
}