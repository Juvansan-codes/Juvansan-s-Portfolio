export const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Juvansan. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
