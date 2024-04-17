import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const REGULAMIN_TEXT = `§1 Postanowienia ogólne Serwis internetowy dostępny pod adresem
(dalej: "Serwis") jest własnością firmy Nor-Bud, z
siedzibą w Biskupnica 43, 77-300 Człuchów. Niniejszy regulamin
określa zasady korzystania z Serwisu oraz prawa i obowiązki
Użytkowników oraz Administratora Serwisu. §2 Usługi oferowane przez
serwis Serwis umożliwia Użytkownikom zapoznanie się z ofertą firmy
Nor-Bud, obejmującą usługi budowlane, remontowe, oraz inne usługi
związane z branżą budowlaną. Informacje o usługach, realizacjach,
warunkach współpracy są dostępne na stronach Serwisu. §3 Zasady
korzystania z serwisu Korzystanie z Serwisu jest możliwe bez
konieczności rejestrowania się i logowania. Użytkownik zobowiązany
jest do korzystania z Serwisu w sposób zgodny z prawem, dobrymi
obyczajami oraz postanowieniami niniejszego Regulaminu. §4 Ochrona
własności intelektualnej Wszystkie treści publikowane w Serwisie, w
tym teksty, zdjęcia, logo firmy, są chronione prawem autorskim i
należą do firmy Nor-Bud. §5 Postanowienia końcowe W sprawach
nieuregulowanych niniejszym Regulaminem mają zastosowanie
odpowiednie przepisy prawa krajowego. Polityka prywatności serwisu
Nor-Bud §1 Informacje ogólne Administratorem danych osobowych
zbieranych za pośrednictwem Serwisu jest firma Nor-Bud, z siedzibą w
Biskupnica 43, 77-300 Człuchów. §2 Zakres i cel przetwarzania danych
Serwis zbiera dane osobowe podane dobrowolnie przez Użytkowników, w
szczególności podczas wypełniania formularzy kontaktowych, które
mogą obejmować imię i nazwisko, adres e-mail, numer telefonu. Dane
osobowe są przetwarzane w celu realizacji zapytań i usług
oferowanych przez firmę Nor-Bud. §3 Prawa użytkownika Użytkownik ma
prawo dostępu do swoich danych, ich sprostowania, usunięcia lub
ograniczenia przetwarzania. Użytkownik może wycofać zgodę na
przetwarzanie danych osobowych w dowolnym momencie. §4 Pliki cookies
Serwis wykorzystuje pliki cookies w celu poprawy jakości
świadczonych usług i analizy ruchu na stronie. Użytkownik może
samodzielnie zarządzać plikami cookies, zmieniając ustawienia swojej
przeglądarki. §5 Zmiany w polityce prywatności Administrator Serwisu
zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności.
O wszelkich zmianach Użytkownicy zostaną powiadomieni za
pośrednictwem Serwisu.`;

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
        <DialogTitle>{"Regulamin Nor-Bud"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {REGULAMIN_TEXT}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Potwierdzam</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
