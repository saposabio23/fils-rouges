var SPREADSHEET_ID_AND_TAB = "1CepMxBlqokqLrDMb84xbm3CkfmGTCF-mlHB-BtDu8KQ/1";

var inside = document.querySelector('.inside')

fetch(
  "https://opensheet.elk.sh/" + SPREADSHEET_ID_AND_TAB
)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.

      let block = document.createElement("div");
      block.className = 'block';
      block.id = 'blocks';

      let gauche = document.createElement("div");
      gauche.className = 'cote gauche';
      block.appendChild(gauche);

      let image = document.createElement("img");
      image.src = row.Image;
      image.className = 'imagex';
      gauche.appendChild(image);

      let droite = document.createElement("div");
      droite.className = 'cote droite';
      block.appendChild(droite);

      let titre = document.createElement("h3");
      titre.innerHTML = '"' + row.Titre + '"';
      droite.appendChild(titre);

      let sypnosis = document.createElement("p");
      sypnosis.innerHTML = row.Synopsis;
      droite.appendChild(sypnosis);

      let numeros = document.createElement("small");
      numeros.innerHTML = ' ' + row.Auteurices + ' · ' + row.Promo + '<sup>ème</sup> année · ' + row.Durée + '"';
      droite.appendChild(numeros);

      let lien = document.createElement("a");
      lien.className = 'lien';
      lien.href = row.lien;
      lien.innerHTML = '→ lien';
      droite.appendChild(lien);

      inside.appendChild(block);


    });
  });