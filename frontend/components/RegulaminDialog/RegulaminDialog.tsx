import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

function getRegulaminText() {
  return (
    <>
      <h2 className="mt-8 mb-4 text-2xl font-bold">Regulamin</h2>
      <ul className="list-none">
        <li>
          <h3 className="font-bold">§1 Postanowienia ogólne</h3>
          <ul>
            <li>
              Serwis internetowy dostępny pod adresem (dalej:
              &quot;Serwis&quot;) jest własnością firmy Nor-Bud, z siedzibą w
              Biskupnica 43, 77-300 Człuchów.
            </li>
            <li>
              Niniejszy regulamin określa zasady korzystania z Serwisu oraz
              prawa i obowiązki Użytkowników oraz Administratora Serwisu.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§2 Usługi oferowane przez serwis</h3>
          <ul>
            <li>
              Serwis umożliwia Użytkownikom zapoznanie się z ofertą firmy
              Nor-Bud, obejmującą usługi budowlane, remontowe, oraz inne usługi
              związane z branżą budowlaną.
            </li>
            <li>
              Informacje o usługach, realizacjach, warunkach współpracy są
              dostępne na stronach Serwisu.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§3 Zasady korzystania z serwisu</h3>
          <ul>
            <li>
              Korzystanie z Serwisu jest możliwe bez konieczności rejestrowania
              się i logowania.
            </li>
            <li>
              Użytkownik zobowiązany jest do korzystania z Serwisu w sposób
              zgodny z prawem, dobrymi obyczajami oraz postanowieniami
              niniejszego Regulaminu.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§4 Ochrona własności intelektualnej</h3>
          <ul>
            <li>
              Wszystkie treści publikowane w Serwisie, w tym teksty, zdjęcia,
              logo firmy, są chronione prawem autorskim i należą do firmy
              Nor-Bud.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§5 Postanowienia końcowe</h3>
          <ul>
            <li>
              W sprawach nieuregulowanych niniejszym Regulaminem mają
              zastosowanie odpowiednie przepisy prawa krajowego.
            </li>
          </ul>
        </li>
      </ul>
      <h2 className="mt-8 mb-4 text-2xl font-bold">
        Polityka prywatności serwisu Nor-Bud
      </h2>
      <ul className="list-none">
        <li>
          <h3 className="font-bold">§1 Informacje ogólne</h3>
          <ul>
            <li>
              Administratorem danych osobowych zbieranych za pośrednictwem
              Serwisu jest firma Nor-Bud, z siedzibą w Biskupnica 43, 77-300
              Człuchów.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§2 Zakres i cel przetwarzania danych</h3>
          <ul>
            <li>
              Serwis zbiera dane osobowe podane dobrowolnie przez Użytkowników,
              w szczególności podczas wypełniania formularzy kontaktowych, które
              mogą obejmować imię i nazwisko, adres e-mail, numer telefonu.
            </li>
            <li>
              Dane osobowe są przetwarzane w celu realizacji zapytań i usług
              oferowanych przez firmę Nor-Bud.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§3 Prawa użytkownika</h3>
          <ul>
            <li>
              Użytkownik ma prawo dostępu do swoich danych, ich sprostowania,
              usunięcia lub ograniczenia przetwarzania.
            </li>
            <li>
              Użytkownik może wycofać zgodę na przetwarzanie danych osobowych w
              dowolnym momencie.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§4 Pliki cookies</h3>
          <ul>
            <li>
              Serwis wykorzystuje pliki cookies w celu poprawy jakości
              świadczonych usług i analizy ruchu na stronie.
            </li>
            <li>
              Użytkownik może samodzielnie zarządzać plikami cookies, zmieniając
              ustawienia swojej przeglądarki.
            </li>
          </ul>
        </li>
        <li>
          <h3 className="font-bold">§5 Zmiany w polityce prywatności</h3>
          <ul>
            <li>
              Administrator Serwisu zastrzega sobie prawo do wprowadzania zmian
              w Polityce Prywatności.
            </li>
            <li>
              O wszelkich zmianach Użytkownicy zostaną powiadomieni za
              pośrednictwem Serwisu.
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
}
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RegulaminDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Przeczytaj Regulamin
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Regulamin i Polityka prywatności Nor-Bud"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {getRegulaminText()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Potwierdzam</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
