const newBuilds = [
  "Épée longue",
  "Morpho-hache",
  "Volto-hache",
  "Build LS Raw/Elem",
  "Build Morpho-hache Raw/Elem",
  "Build Morpho-hache Choc",
  "Build Volto-hache Choc",
];

const weaponCards = document.querySelectorAll(".weapon-card");

weaponCards.forEach((card) => {
  const weaponName = card.dataset.weapon;

  if (newBuilds.includes(weaponName)) {
    const newBadge = document.createElement("span");

    newBadge.textContent = "NEW";
    newBadge.classList.add("new-badge");

    card.appendChild(newBadge);
  }
});

const modal = document.getElementById("modal");
const modalHeader = document.getElementById("modal-header");
const buildsContainer = document.getElementById("builds-container");
const closeButton = document.querySelector(".close-btn");

// Ouvre la modale lorsqu'on clique sur une carte
weaponCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    const weapon = card.dataset.weapon;

    openModal(event, weapon, card);
  });
});

// Ouvre la modale
function openModal(event, weapon, element) {
  document.body.style.overflow = "hidden";

  modalHeader.innerHTML = "";
  buildsContainer.innerHTML = "";

  const oldClone = document.querySelector(".clone-card");

  if (oldClone) {
    oldClone.remove();
  }

  const rect = element.getBoundingClientRect();

  const clone = element.cloneNode(true);

  const newBadge = clone.querySelector(".new-badge");

  if (newBadge) {
    newBadge.remove();
  }

  clone.classList.add("clone-card");

  document.body.appendChild(clone);

  // Position de départ
  clone.style.position = "fixed";
  clone.style.left = rect.left + "px";
  clone.style.top = rect.top + "px";
  clone.style.width = rect.width + "px";
  clone.style.height = rect.height + "px";
  clone.style.zIndex = "2000";
  clone.style.transformOrigin = "center";

  // Ouverture de la modale
  modal.style.display = "flex";

  // Position finale de la carte
  const targetX = window.innerWidth / 2 - rect.width / 2;
  const targetY = window.innerWidth <= 1024 ? 0 : -30;

  requestAnimationFrame(() => {
    modal.classList.add("show");

    clone.style.left = targetX + "px";
    clone.style.top = targetY + "px";
    clone.style.transform = "none";
  });

  // Fin de l'animation
  setTimeout(() => {
    modalHeader.appendChild(clone);

    /*
     * IMPORTANT :
     * On conserve position: fixed.
     * On conserve également la position centrée calculée
     * pendant l'animation.
     */
    clone.style.position = "fixed";
    clone.style.left = targetX + "px";
    clone.style.top = window.innerWidth <= 1024 ? "0px" : "-30px";
    clone.style.transform = "none";
    clone.style.width = rect.width + "px";
    clone.style.height = rect.height + "px";

    let builds = "";

    switch (weapon) {
      case "Arc":
        builds = `
          <div class="build-card">
            <h3>Build Elementaire No Crit</h3>
            <a href="Images/Arc-ElemNoCrit.png" target="_blank">
              <img src="Images/Arc-ElemNoCrit.png" alt="Build Élémentaire No Crit">
            </a>
            <p>Voici un build Arc qui peut évoluer selon vos préférences. Hormis face à l’Arkveld, il n’est pas inférieur au build critique en termes de dégâts. Étant un build basé sur l’élément, il faut noter que l’Arkveld est un monstre possédant peu de faiblesses élémentaires, voire une immunité sur ses ailes. De plus, il peut infliger le Fléau-dragons, ce qui empêche d’infliger des dégâts élémentaires.</p>
            <p>En revanche, contre les autres monstres, vous bénéficierez à la fois du DPS, du confort et de la survie souhaités. Grâce aux nombreux emplacements de joyaux de niveau 1 et 2, vous pouvez adapter votre build en privilégiant davantage de niveaux d’Athlète ou de Métabolisme.</p>
            <p>Pour ce faire, il est possible de sacrifier Bénédiction si vous êtes à l’aise avec les esquives, ainsi que quelques niveaux d’Union ou de Performance optimale.</p>
            <p>C'est un build qui fonctionne avec une arme élémentaire. Pour profiter pleinement de ce build, il vous faudra avoir au minimum 2 bonus de renforcement avec Boost élémentaire.</p>
          </div>
        `;
        break;

      case "Corne de chasse":
        builds = `
          <div class="build-card">
            <h3>Build Corne de chasse DPS</h3>
            <a href="Images/HH-DPS.png" target="_blank">
              <img src="Images/HH-DPS.png" alt="Build Corne de chasse DPS">
            </a>
            <p>Un build Corne de chasse DPS. Et oui, même si la Corne de chasse permet de booster et d’apporter différents types de soutien à l’équipe, c’est également une arme extrêmement forte en DPS, mais sans doute l’une des plus complexes à maîtriser.</p>
            <p>Ce build vous permet d’infliger un maximum de dégâts tout en disposant de nombreux emplacements de joyaux pour adapter vos talents selon le monstre affronté.</p>
            <p>On peut également remarquer que la Corne de chasse utilisée ici n’a pas d’élément. Le choix d’une Corne de chasse Artian Gogmazios non élémentaire modifie les mélodies par rapport à une version élémentaire. Toutefois, les deux options restent viables : il n’y a pas de différence significative de dégâts entre une version élémentaire et non élémentaire. La principale variation concerne les musiques, que vous choisirez donc selon vos préférences de jeu.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Double lames":
        builds = `
          <div class="build-card">
            <h3>Build Elementaire No Crit</h3>
            <a href="Images/DB-ElemNoCrit.png" target="_blank">
              <img src="Images/DB-ElemNoCrit.png" alt="Build Elementaire No Crit">
            </a>
            <p>Voici un build Double Lames qui peut évoluer selon vos préférences. Hormis face à l’Arkveld classique, il n’est pas inférieur au build critique en termes de dégâts. En effet, les chaînes de l’Arkveld classique sont immunisées aux dégâts élémentaires, ce qui réduit fortement l’efficacité des builds élémentaires.</p>
            <p>À l’inverse, ce build reste tout à fait efficace contre l’Arkveld Alpha Suprême, dont les chaînes ne sont pas immunisées aux dégâts élémentaires. Il conserve ainsi une grande partie de son potentiel offensif.</p>
            <p>Face aux autres monstres, vous bénéficierez d’un excellent DPS, d’un bon confort de jeu et d’une bonne survie. Grâce aux nombreux emplacements de joyaux de niveau 1 et 2, vous pouvez adapter le build à votre style de jeu en privilégiant davantage de niveaux d’Athlète, de Marathonien ou encore de Métabolisme.</p>
            <p>Pour cela, vous pouvez sacrifier Bénédiction et Contre-attaque si vous êtes à l’aise avec les esquives, ou simplement si vous souhaitez privilégier le confort au détriment d’une partie du DPS.</p>
            <p>C'est un build qui fonctionne avec une arme élémentaire. Pour profiter pleinement de ce build, il vous faudra avoir au minimum 2 bonus de renforcement avec Boost élémentaire.</p>
          </div>
        `;
        break;

      case "Epee & bouclier":
        builds = `
          <div class="build-card">
            <h3>Build SnS DPS</h3>
            <a href="Images/SnS-DPS.png" target="_blank">
              <img src="Images/SnS-DPS.png" alt="Build SnS DPS">
            </a>
            <p>Ce build offre un excellent équilibre entre dégâts, confort et survie. On peut notamment remarquer la présence de joyaux de niveau 1 placés dans des emplacements de niveau 2. Il serait possible de compléter Performance optimale jusqu'au niveau 5, mais le gain apporté ne me paraît pas suffisamment intéressant.</p>
            <p>En effet, avec l'Épée et Bouclier, bloquer une attaque peut entraîner une légère perte de points de vie, ce qui désactive Performance optimale. Or, cette perte est parfois trop faible pour justifier l'utilisation d'un soin, ce qui réduit l'efficacité du talent.</p>
            <p>Il est également possible d'opter pour Vengeance, mais là encore, je trouve que le gain apporté reste relativement faible. J'ai donc préféré investir dans Carnassier, qui permet de récupérer sa vie plus rapidement. Ce talent est particulièrement efficace avec l'Épée et Bouclier, puisqu'il n'est pas nécessaire de rengainer son arme pour utiliser des objets.</p>
            <p>Il est également envisageable de remplacer Bénédiction, le bouclier de l'arme apportant déjà une certaine sécurité. Toutefois, je considère que le gain offert par Vengeance ne compense pas la survivabilité supplémentaire procurée par Bénédiction.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>

          <div class="build-card">
            <h3>Build Support</h3>
            <a href="Images/SnS-Support.png" target="_blank">
              <img src="Images/SnS-Support.png" alt="Build Support">
            </a>
            <p>Voici un build de soutien. Il vous permettra de soigner rapidement et fréquemment vos alliés, tout en leur conférant des bonus d'attaque grâce aux Potions de démon, aux Poudres de démon, etc., ainsi qu'au bonus de groupe « Faveur du seigneur ». Ce dernier accorde 10 points d'attaque supplémentaires à toute l'équipe après l'utilisation d'un soin ou d'un objet de renforcement.</p>
            <p>Vous remarquerez également la présence de joyaux de niveau 1 placés dans des emplacements de niveau 2. Si vous le souhaitez, vous pouvez sacrifier deux niveaux de Bénédiction afin d'obtenir les deux derniers niveaux de Mycologue extrême. Cela vous permettra notamment de bénéficier des effets du Fléau du diable, qui constitue selon moi le seul véritable intérêt à investir au-delà du niveau 1 de Mycologue extrême.</p>
            <p>En effet, les champignons accessibles au niveau 2 de Mycologue extrême remplissent le même rôle que les Potions de démon et les Potions de pierre, ces dernières étant plus efficaces que leurs équivalents fongiques.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Épée longue":
        builds = `
          <div class="build-card">
            <h3>Build LS Multi-Monstres</h3>
            <a href="Images/Multi-Monstres.png" target="_blank">
              <img src="Images/Multi-Monstres.png" alt="Build Multi-Monstres">
            </a>
            <p>Ceci est un build qui fonctionne sur tous les monstres. Si Mise à mort n'est pas rentable sur certains monstres (ex. : phases 1 et 2 du Gogmazios ou le Gore Magala si vous ne tapez pas sa tête), vous pouvez alors mettre Force latente lv 5 ou Témérité lv 5 + Poussée d'adrénaline lv 1, car les 5 niveaux de Mise à mort sont obtenus via des joyaux.</p>
            <p>Il en va de même pour Ignifuge lv 3, utile pour atteindre 20 de résistance au feu, ce qui permet de ne pas subir le Fléau-feu. Vous pouvez donc remplacer Ignifuge par d'autres talents de résistance élémentaire afin d'atteindre 20 de résistance dans l'élément souhaité et ainsi éviter le fléau élémentaire correspondant.<br>Attention, pour atteindre 20 de résistance dans certains éléments, vous aurez besoin de la résistance élémentaire obtenue via le repas.</p>
            <p>Contre Seregios, vous pouvez également utiliser le talent Anti-hémorragie.</p>
            <p>Selon les emplacements de joyaux de votre talisman, vous pouvez ajouter les talents que vous voulez. Sur ce stuff, on peut voir le joyau d'Adaptation pour la chaleur ou le froid, ainsi que le joyau d'Atlantis pour être moins ralenti par l'huile que le Gogmazios répand au sol.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>

          <div class="build-card">
            <h3>Build LS Raw/Elem</h3>
            <a href="Images/LS-Raw-Elem.png" target="_blank">
              <img src="Images/LS-Raw-Elem.png" alt="Builds LS Raw/Elem">
            </a>
            <p>Voici un build meilleur que le précédent en termes de DPS et de survie. Ce qu’il a de plus que le précédent, c’est la possibilité d’avoir le bouclier du 4p Gogmapocalypse ainsi qu’une petite régénération de vie via le 2p Appétit de l’Arkveld. Ces bonus de set vous permettent donc d’avoir très souvent le talent Performance optimale activé.</p>
            <p>Vous perdez donc la possibilité d’avoir les 20 de résistance élémentaire pour éviter les fléaux élémentaires du build précédent, mais vous récupérez Carnassier, qui vous permet de prendre une baie de soin plus rapidement pour retirer ces fléaux, mais aussi de boire vos potions plus rapidement. De plus, vous bénéficiez de deux niveaux du talent Écorcheur, ce qui permettra de faire plus souvent des blessures.</p>
            <p>C’est un build moins polyvalent que le précédent, au vu du 4p Gogmapocalypse qui rend le build un peu plus axé sur l’élément que le précédent. Il est donc possible que, face à l’Arkveld normal ou alpha, il soit légèrement moins performant que le précédent. Pour profiter de l’élément apporté par le 4p Gogmapocalypse, vous devriez donc avoir votre arme en élémentaire, et non en affliction ou attaque.</p>
        `;
        break;

      case "Grande épée":
        builds = `
          <div class="build-card">
            <h3>Build GS Triple Impact</h3>
            <a href="Images/Triple-Impact.png" target="_blank">
              <img src="Images/Triple-Impact.png" alt="Build Triple Impact">
            </a>
            <p>Ce build permet d’infliger d’importants dégâts grâce à une attaque et une affinité élevées, ainsi qu’au passif de l’arme « Reflet éparpillé » et au bonus 2 pièces Maléfique. L’arme offre déjà un excellent confort de jeu grâce au talent Concentration intégré et à son très bon tranchant, ce qui permet de se passer de talents comme Samouraï ou Main de maître.</p>
            <p>L’équipement n’apporte pas de confort supplémentaire particulier, mais si vous êtes à l’aise en survie, vous pouvez remplacer Bénédiction par des talents utilitaires tels que Crâne d’acier ou Anti-hémorragie (notamment contre Seregios), selon les besoins du combat.</p>
            <p>Concernant le talisman, il est idéal d'avoir deux niveaux de Machine de guerre plutôt qu’un seul afin d’atteindre le niveau 5.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Lance":
        builds = `
          <div class="build-card">
            <h3>Builds Lance DPS</h3>
            <a href="Images/Lance-DPS.png" target="_blank">
              <img src="Images/Lance-DPS.png" alt="Build Lance DPS">
            </a>
            <p>Ce build Lance vous permet d’allier de bons dégâts tout en conservant un excellent confort et une bonne survie. Grâce aux bonus 2 pièces Arkvulcan, vous bénéficiez d’une légère régénération de vie lors de vos attaques, sans oublier le bonus de groupe « Âme du seigneur », qui peut vous permettre de survivre à 1 point de vie, ainsi que Bénédiction niveau 3.</p>
            <p>En termes de confort, le bonus 2 pièces Anjanath vous permet d’activer plus fréquemment Corps et âme. J’ai également opté pour 2 niveaux de Trompe-la-mort, tout comme dans le build Lance canon DPS, ce qui améliore votre mobilité lorsque vous êtes dégainé.</p>
            <p>Concernant le talisman, comme vous pouvez le voir, il s’agit d’un talisman offrant directement les 3 niveaux d’Ultra-garde, ce qui ne correspond pas forcément à un build dit « DPS ». Les talents recherchés sur le talisman restent donc flexibles. L’objectif est surtout d’obtenir au moins le niveau de Mise à mort permettant d’atteindre le niveau 5.</p>
            <p>Pour les monstres contre lesquels Ultra-garde n’est pas nécessaire, vous pouvez privilégier des niveaux de Machine de guerre, par exemple.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Lance canon":
        builds = `
          <div class="build-card">
            <h3>Builds Lance canon DPS</h3>
            <a href="Images/LanceCanon-DPS.png" target="_blank">
              <img src="Images/LanceCanon-DPS.png" alt="Build Lance canon DPS">
            </a>
            <p>Voici un build Lance canon DPS. Étant une arme lente lors des déplacements, tout comme dans le build Lance DPS, j’ai opté pour 2 niveaux de Trompe-la-mort afin d’améliorer la mobilité lorsque vous êtes dégainé.</p>
            <p>Vous disposez également de 2 niveaux de Bouchon d’oreilles. Cependant, si vous recherchez un maximum de DPS, même si certaines attaques de la Lance canon ne peuvent pas infliger de coups critiques, vous pouvez remplacer Bouchon d’oreilles et/ou Trompe-la-mort par des talents comme Corps et âme ou d’autres talents selon vos préférences.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Fusarbalète léger":
        builds = `
          <div class="build-card">
            <h3>Builds DPS Elementaire</h3>
            <a href="Images/LBG-ElemCrit.png" target="_blank">
              <img src="Images/LBG-ElemCrit.png" alt="Build DPS Elementaire">
            </a>
            <p>Ce build LBG vous apporte d’importants dégâts élémentaires grâce aux talents Vendetta et Union. Tout comme le talent Antivirus, le talent Union s’active facilement grâce au bonus 2 pièces Tyrannie du Gore Magala.</p>
            <p>Ce build inclut également quelques talents de confort, comme Bouchon d’oreilles, qui peut être remplacé si vous le souhaitez afin de compléter le niveau 5 de Performance optimale et ainsi augmenter encore davantage vos dégâts.</p>
            <p>Concernant le talisman, le plus important est d’obtenir Antivirus pour les 10 % d’affinité qu’il procure. Cependant, vous pouvez choisir d’autres options selon vos préférences, le choix des talents sur le talisman restant entièrement flexible.</p>
            <p class="italic">Le build Fusarbalète léger DPS élémentaire est identique au build Fusarbalète lourd DPS élémentaire.</p>
            <p>C'est un build qui fonctionne avec une arme élémentaire.</p>
          </div>
        `;
        break;

      case "Fusarbalète lourd":
        builds = `
          <div class="build-card">
            <h3>Builds DPS Elementaire</h3>
            <a href="Images/HBG-ElemCrit.png" target="_blank">
              <img src="Images/HBG-ElemCrit.png" alt="Build DPS Elementaire">
            </a>
            <p>Ce build HBG vous apporte d’importants dégâts élémentaires grâce aux talents Vendetta et Union. Tout comme le talent Antivirus, le talent Union s’active facilement grâce au bonus 2 pièces Tyrannie du Gore Magala.</p>
            <p>Ce build inclut également quelques talents de confort, comme Bouchon d’oreilles, qui peut être remplacé si vous le souhaitez afin de compléter le niveau 5 de Performance optimale et ainsi augmenter encore davantage vos dégâts.</p>
            <p>Concernant le talisman, le plus important est d’obtenir Antivirus pour les 10 % d’affinité qu’il procure. Cependant, vous pouvez choisir d’autres options selon vos préférences, le choix des talents sur le talisman restant entièrement flexible.</p>
            <p class="italic">Le build Fusarbalète lourd DPS élémentaire est identique au build Fusarbalète léger DPS élémentaire.</p>
            <p>C'est un build qui fonctionne avec une arme élémentaire.</p>
          </div>
        `;
        break;

      case "Insectoglaive":
        builds = `
          <div class="build-card">
            <h3>Builds Insectoglaive DPS</h3>
            <a href="Images/IG-DPS.png" target="_blank">
              <img src="Images/IG-DPS.png" alt="Build Insectoglaive DPS">
            </a>
            <p>Voici un build Insectoglaive DPS. Ce build vous apporte d’importants dégâts tout en conservant un bon niveau de confort.</p>
            <p>Vous disposez de Bouchon d’oreilles ainsi que de résistances élémentaires pouvant atteindre 20 minimum, grâce au repas, mais surtout aux trois emplacements supplémentaires de niveau 1. Ceux-ci vous permettent d’ajouter des talents tels qu’Ignifuge, Étanchéité, Aura draconique, etc., afin d’éviter de subir des fléaux élémentaires.</p>
            <p>Contre certains monstres, comme le Seregios, vous pouvez remplacer ces résistances élémentaires par le talent Anti-hémorragie.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Marteau":
        builds = `
          <div class="build-card">
            <h3>Builds Marteau DPS</h3>
            <a href="Images/Marteau-DPS.png" target="_blank">
              <img src="Images/Marteau-DPS.png" alt="Build Marteau DPS">
            </a>
            <p>Ce build Marteau est très complet : vous n’aurez pas besoin de changer vos talents selon le monstre affronté.</p>
            <p>En effet, au lieu de devoir utiliser des talents comme Ignifuge ou Étanchéité, vous disposez directement des 3 niveaux du talent Totem élémentaire, ce qui vous confère une immunité aux fléaux élémentaires.</p>
            <p>Ce build vous octroie également d’importants dégâts. Même s’il vous manque un niveau de Témérité, vous disposez de tout ce qu’il faut en termes de talents offensifs, ainsi que d’un bonus supplémentaire grâce au talent Conversion élémentaire niveau 3, qui ajoute parfois environ 300 de dégâts. De plus, lorsque vous utilisez un marteau élémentaire dragon, ce talent peut également augmenter les dégâts de cet élément.</p>
            <p>Concernant le talisman, si vous avez la possibilité d’obtenir 2 niveaux ou plus de Machine de guerre, cela sera plus optimal afin d’atteindre le niveau 5 de Machine de guerre.</p>
            <p>C'est un build polyvalent qui fonctionne aussi bien avec une arme élémentaire, en affliction qu'en attaque.</p>
          </div>
        `;
        break;

      case "Morpho-hache":
        builds = `
          <div class="build-card">
            <h3>Builds Morpho Full Crit</h3>
            <a href="Images/Morpho-Crit.png" target="_blank">
              <img src="Images/Morpho-Crit.png" alt="Build Morpho Full Crit">
            </a>
            <p>Un build Morpho-hache qui fonctionne aussi bien avec une Morpho-hache à fiole élémentaire qu’avec une fiole de choc. Il s’agit d’un build combinant une forte attaque, un bon apport élémentaire et une affinité pouvant atteindre les 100 %.</p>
            <p>On peut y observer le talent Union, dans le cas où vous jouez une Morpho-hache sans élément ou basée sur l’affliction, vous pouvez retirer ce talent, qui devient alors obsolète, et le remplacer par des talents tels que Bouchon d’oreille, Destructeur ou encore Expert en survie, afin d’utiliser plus fréquemment votre cape. Il est également possible, selon les situations, d’augmenter votre attaque grâce à des talents comme Vengeance ou Performance optimale.</p>
            <p> C'est un build principalement conçu pour une arme élémentaire, mais il reste viable avec une arme en affliction ou en attaque. Dans ce cas, le talent Union ne sera pas utile et pourra être remplacé par un autre talent.</p>
          </div>

          <div class="build-card">
            <h3>Build Morpho-hache Raw/Elem</h3>
            <a href="Images/Morpho-Raw-Elem.png" target="_blank">
              <img src="Images/Morpho-Raw-Elem.png" alt="Build Morpho-hache Raw/Elem">
            </a>
            <p>Voici un build meilleur que le précédent en termes de DPS et de survie, mais il est préférable d'utiliser les fioles élémentaires. Ce qu’il a de plus que le précédent, c’est la possibilité d’avoir le bouclier du 4p Gogmapocalypse ainsi qu’une petite régénération de vie via le 2p Appétit de l’Arkveld. Ces bonus de set vous permettent donc d’avoir très souvent le talent Performance optimale activé.</p>
            <p>Dans ce build, vous n'atteindrez pas les 100 % d'affinité, mais vous aurez plus d’attaque et d’élément, mais aussi deux niveaux du talent Écorcheur, ainsi que la possibilité d’avoir plus d’emplacements de niveau 1, ce qui vous permettra d’avoir des talents comme Crâne d'acier et Carnassier.</p>
            <p>C’est un build moins polyvalent que le précédent, au vu du 4p Gogmapocalypse, qui rend le build un peu plus axé sur l’élément que le précédent. Il est donc possible que, face à l’Arkveld normal ou alpha, il soit légèrement moins performant que le précédent. Pour profiter de l’élément apporté par le 4p Gogmapocalypse, vous devriez donc avoir votre arme en élémentaire, et non en affliction ou attaque.</p>

            <div class="build-card">
            <h3>Build Morpho-hache Choc</h3>
            <a href="Images/Morpho-Choc.png" target="_blank">
              <img src="Images/Morpho-Choc.png" alt="Build Morpho-hache Choc">
            </a>
            <p>Ce build Morpho-hache est fait pour être joué en fiole de choc. Si vous ne voulez pas devoir monter plusieurs Morpho-haches de chaque élément, alors il est fait pour vous.</p>
            <p>Sur votre arme, vous pouvez choisir d'avoir soit le bonus 2 pièces Volonté de l'Anjanath tonnerre, soit le bonus 4 pièces Appétit de l'Arkveld. La Morpho-hache n'est pas une arme qui consomme de l'endurance. Toutefois, le bonus Volonté de l'Anjanath tonnerre peut servir à ne pas perdre le talent Corps et âme si vous faites une esquive.</p>
            <p>Pour ce build, vous allez donc jouer en fiole de choc, mais vous avez quand même le choix d'utiliser une arme élémentaire ou à affliction selon vos préférences.</p>
        `;
        break;

      case "Volto-hache":
        builds = `
          <div class="build-card">
            <h3>Build Volto-hache SAED</h3>
            <a href="Images/Volto-SAED.png" target="_blank">
              <img src="Images/Volto-SAED.png" alt="Build Volto-hache SAED">
            </a>
            <p>Voici le build SAED. Ce build vous permet d’atteindre le maximum d’élément possible, voire de le dépasser légèrement.</p>
            <p>Pourquoi dépasser le maximum ? En réalité, il n’y a aucun intérêt à dépasser la limite d’élément en permanence, mais tous les talents ne sont pas actifs en même temps. Par exemple, si le monstre n’est pas énervé, vous ne bénéficierez pas du bonus d’élément obtenu via le bonus 4 pièces Gogmapocalypse. Dans ces situations, ce build vous permet de vous rapprocher du maximum lorsque Conversion élémentaire et Absorption élémentaire sont activés.</p>
            <p>À l’inverse, si ces deux talents ne sont pas actifs lorsque le monstre est énervé, vous bénéficierez du bonus Gogmapocalypse, ce qui vous permettra d’atteindre le maximum d’élément. Et si tous les bonus sont actifs en même temps et que vous dépassez largement ce maximum, le talent Conversion élémentaire reste intéressant grâce à son effet de proc infligeant environ 300 dégâts occasionnels.</p>
            <p>Concernant le talisman, si vous souhaitez obtenir une immunité au fléau élémentaire, vous devrez impérativement y avoir deux niveaux de Totem élémentaire, car ce talent n’existe pas en joyaux.</p>
            <p>C'est un build qui fonctionne avec une arme élémentaire. Il est fortement conseillé d'avoir un maximum de bonus de renforcement en Boost élémentaire, soit jusqu'à 4 lignes au maximum.</p>
          </div>

          <div class="build-card">
            <h3>Build Volto-hache Choc</h3>
            <a href="Images/Volto-Choc.png" target="_blank">
              <img src="Images/Volto-Choc.png" alt="Build Volto-hache Choc">
            </a>
            <p>Ce build Volto-hache est fait pour être joué en fiole de choc. Si vous ne voulez pas devoir monter plusieurs Volto-haches de chaque élément, alors il est fait pour vous.</p>
            <p>Vous pouvez ne pas vous soucier des bonus de talents de votre arme, mais si vous voulez vraiment avoir le mieux, alors vous pouvez compléter le bonus 4 pièces Appétit de l'Arkveld. Même si ce bonus n'apporte pas une très grande régénération de vie, c'est toujours mieux que rien.</p>
            <p>Ce build n'a rien de particulier, il est complet. Vous avez le DPS grâce aux talents qui apportent de l'attaque et de l'affinité, comme Mise à mort et Témérité, mais vous avez aussi Écorcheur, qui augmentera le nombre de blessures ainsi qu'un proc de dégâts non négligeable. Mais vous aurez aussi de la survie, comme le bonus 4 pièces Appétit de l'Arkveld, Bénédiction ainsi que le 3 pièces Âme du seigneur. Sans oublier le confort, avec Carnassier, Bouchon d'oreille et Antichocs.</p>
        `;
        break;

      default:
        builds = `
          <div class="build-card">
            <h3>Build à venir ..</h3>
          </div>
        `;
        break;
    }

    buildsContainer.innerHTML = builds;

    const buildCards = buildsContainer.querySelectorAll(".build-card");

    buildCards.forEach((buildCard) => {
      const title = buildCard.querySelector("h3");

      if (title && newBuilds.includes(title.textContent.trim())) {
        const newBadge = document.createElement("span");

        newBadge.textContent = "NEW";
        newBadge.classList.add("new-badge");

        buildCard.appendChild(newBadge);
      }
    });
  }, 600);
}

// Ferme la modale
function closeModal() {
  document.body.style.overflow = "auto";

  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
    modalHeader.innerHTML = "";
    buildsContainer.innerHTML = "";

    const oldClone = document.querySelector(".clone-card");

    if (oldClone) {
      oldClone.remove();
    }
  }, 200);
}

// Bouton de fermeture
closeButton.addEventListener("click", closeModal);

// Ferme la modale en cliquant à l'extérieur
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
