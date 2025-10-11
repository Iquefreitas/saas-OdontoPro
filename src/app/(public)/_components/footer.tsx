
export function Footer() {
    return (
        <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
            <p>Todos direitos reservados © {new Date().getFullYear()}
                - <span className="hover:text-transparent bg-clip-text bg-gradient-to-r 
                from-emerald-600 via-emerald-400 to-green-600 animate-gradient-smooth duration-400"
                >João Freitas</span></p>
        </footer>
    );
}