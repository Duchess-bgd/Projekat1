# Projekat1

<b>Duchess</b> je vrsta male web prodavnice, koja je zamisljena tako da klijent moze da vidi uvodni video, galeriju sa deset slika, malu biografiju i kontakt vlasnika sajta. Svaka slika se na klik uvecava i nudi opciju za kupovinu oznacenu ikonicom korpe.
Slike bi trebalo da se u stvarnosti, nakon kupovine, stampaju i salju klijentu. Svaki poster ima cenu od 5 evra, a klijent moze naruciti jedan ili vise postera, ili vise kopija istog postera. <br>
Korpa sa narucenim proizvodima se nalazi sa desne strane galerije i pristupa
joj se jednostavnim prelaskom kursora preko zelene korpice koja je uvek vidljiva. Korpa otkriva spisak narucenih proizvoda kao i opciju
za brisanje proizvoda (dugme Clear), ili narucivanje (dugme Confirm). <br>
Posebno dugme, Review Shopping, pruza opciju za pregled svih kupovina koje su kupci napravili. To dugme otvara novu stranu gde su prikazani
svi kupci po rednom broju kao i sve njihove narudzbine. Ovo dugme je napravljeno samo za potrebe ovog projekta, a u stvari bi trebalo da bude
deo koji ove informacije pruza samo vlasniku sajta, a ne i klijentima. Takodje, sem spiska klijenata i njihovih narudzbina ova strana sadrzi i dugme Clear All koje sluzi da bi se sve obradjene narudzbine obrisale. Narudzbine se pamte u i brisu iz Local Storage-a.<br>
Tehnologije koje su koriscene za ovaj projekat su HTML za osnovnu strukturu obe strane, ali je korisceno i dinamicko kreiranje elemenata pomocu Javascripta. Javascript je takodje koriscen za pravljenje narudzbina,prikaz narudzbine, kreiranje ukupne sume naruzbine, uvecavanje slika iz galerije i formiranje spiska narucilaca.  Za pamcenje narudzbina koriscen je Local Storage. CSS je naravno koriscen za uoblicavanje i konacan izgled citavog projekta - a od specificnosti izdvojila bih i Grid koji je omogucio kako specifican dizajn galerije tako i lakse dizajniranje citave te strane.
