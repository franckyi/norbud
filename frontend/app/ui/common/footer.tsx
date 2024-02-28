import Logo from "./logo";

const footerText =
  new Date().getFullYear() + " Norbud. Wszelkie prawa zastrzeżone.";

function Footer() {
  return (
    <footer className="text-center p-16 mt-16 bg-green-700 text-white">
      <Logo classes="mx-auto mb-8" version="white" />
      <p>{footerText}</p>
    </footer>
  );
}

export default Footer;
