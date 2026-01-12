const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 items-center justify-center py-1 text-gray-500 text-sm">
      <span>
        Todos os direitos reservados &copy; {new Date().getFullYear()}
      </span>

      <span>
        Feito com ❤️ por{" "}
        <a href="kerscher.dev.br" target="_blank" className="underline">
          Matheus Kerscher
        </a>
      </span>
    </footer>
  );
};

export default Footer;
