import { CompanyInfo } from "@/types/company-info";
import Logo from "./logo";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import FacebookIcon from "@mui/icons-material/Facebook";

const CURRENT_YEAR = new Date().getFullYear();

function Footer({ companyInfo }: { companyInfo: CompanyInfo }) {
  const COPYRIGHT_TEXT = `${CURRENT_YEAR} Wszelkie prawa zastrzeżone`;
  return (
    <footer className="md:flex p-16 bg-green-700 text-white">
      <div className="md:w-1/2">
        <Logo classes="mb-4" version="white" />
        <p>&copy; {COPYRIGHT_TEXT}</p>
        <p>{companyInfo.fullName}</p>
      </div>
      <div className="md:w-1/2 mb-8 text-white">
        <div className="hover:cursor-zoom-in">
          {companyInfo.street && companyInfo.cap && companyInfo.city && (
            <p className="hover:text-2xl">
              Adres:{" "}
              {`${companyInfo.street}, ${companyInfo.cap} ${companyInfo.city}`}
            </p>
          )}
          {companyInfo.nip && (
            <p className="hover:text-2xl">NIP: {companyInfo.nip}</p>
          )}
          {companyInfo.regon && (
            <p className="hover:text-2xl">Regon: {companyInfo.regon}</p>
          )}
          {companyInfo.krs && (
            <p className="hover:text-2xl">KRS: {companyInfo.krs}</p>
          )}
          {companyInfo.bank.name && companyInfo.bank.number && (
            <p className="hover:text-2xl">
              Przelewy: {companyInfo.bank.name} {companyInfo.bank.number}
            </p>
          )}
        </div>
        {companyInfo.email && (
          <a href={`mailto:${companyInfo.email}`} className="block mt-4">
            <EnvelopeIcon className="h-5 w-5 text-white inline mr-2" />
            {companyInfo.email}
          </a>
        )}
        {companyInfo.facebook && (
          <a
            href={companyInfo.facebook}
            title="Facebook link"
            className="block "
          >
            <FacebookIcon className="h-5 w-5 text-white inline mr-2" /> Odwiedź
            naszą stronę na FB!
          </a>
        )}
      </div>
    </footer>
  );
}

export default Footer;
