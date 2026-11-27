const BASE_URL = import.meta.env.BASE_URL;

export const weaponsBuilds = {
  Arc: [
    {
      title: "Build Arc Elementaire No Crit",
      image: `${BASE_URL}Arc-ElemNoCrit.webp`,
      alt: "Build Arc Élémentaire No Crit",
      description: [
        "Voici un build Arc qui peut évoluer selon vos préférences. Hormis face à l’Arkveld, il n’est pas inférieur au build critique en termes de dégâts. Étant un build basé sur l’élément, il faut noter que l’Arkveld est un monstre possédant peu de faiblesses élémentaires, voire une immunité sur ses ailes. De plus, il peut infliger le Fléau-dragons, ce qui empêche d’infliger des dégâts élémentaires.",
        "En revanche, contre les autres monstres, vous bénéficierez à la fois du DPS, du confort et de la survie souhaités. Grâce aux nombreux emplacements de joyaux de niveau 1 et 2, vous pouvez adapter votre build en privilégiant davantage de niveaux d’Athlète ou de Métabolisme.",
        "Pour ce faire, il est possible de sacrifier Bénédiction si vous êtes à l’aise avec les esquives, ainsi que quelques niveaux d’Union ou de Performance optimale.",
        "C'est un build qui fonctionne avec une arme élémentaire. Pour profiter pleinement de ce build, il vous faudra avoir au minimum 2 bonus de renforcement avec Boost élémentaire.",
      ],
    },
    {
      title: "Build Arc Raw/Crit",
      image: `${BASE_URL}Arc-Raw.webp`,
      alt: "Build Arc Raw/Crit",
      description: [
        "Un build Arc basé sur l'attaque et l'affinité. Si vous ne voulez pas devoir monter plusieurs Arcs de chaque élément, ou pour affronter l'Arkveld normal ou Alpha.",
        "Attention, un Build Arc avec de l'élément sera généralement supérieur en DPS (hors Arkveld).",
        "Sur le talisman, on peut y voir les talents Quatrième tir ainsi que Géologiste, mais ils sont inutiles. Vous pouvez donc potentiellement avoir d'autres talents plus utiles. Il y a également le talent Salve mortelle pour augmenter les dégâts de Mille dragons, Perce-Dragon ou Munitions traçantes. Mais si vous n'utilisez pas souvent ces attaques, vous pouvez opter pour d'autres talents, comme Maître d'arme, Machine de guerre, etc.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build Arc Elementaire Crit",
      image: `${BASE_URL}Arc-ElemCrit.webp`,
      alt: "Build Arc Élémentaire Crit",
      description: [
        "Ce build est meilleur que le \"Build Arc Élémentaire No Crit\", aussi bien en DPS qu'en survie. Cependant, il est plus exigeant concernant les bonus de set de l'arme Gogmazios, mais également au niveau du talisman si vous souhaitez conserver un confort similaire.",
        'En ce qui concerne la survie, ce build peut bénéficier de talents similaires à ceux du "Build Arc Élémentaire No Crit", tout en profitant du bonus 2 pièces Arkveld, qui apporte une légère régénération de vie. Cela permet potentiellement de maintenir le talent Performance optimale actif plus longtemps. De plus, vous bénéficiez également du bonus « Âme du seigneur ».',
        'Si vous souhaitez retrouver le même confort que le "Build Arc Élémentaire No Crit", il vous suffit de retirer les joyaux Métabolisme ainsi que 2 joyaux Parfait, afin de les remplacer par 4 joyaux Fenêtre d\'invulnérabilité.',
        "Concernant le talisman, si vous ne disposez pas des 2 emplacements de niveau 1, vous pouvez retirer les 2 niveaux de Métabolisme afin de compléter les talents Athlète et Bénédiction. Toutefois, le choix des talents de confort et de survie dépend avant tout de vos préférences personnelles.",
        "C'est un build qui fonctionne avec une arme élémentaire. Pour profiter pleinement de ce build, il vous faudra avoir au minimum 2 bonus de renforcement avec Boost élémentaire.",
      ],
    },
  ],

  "Corne de chasse": [
    {
      title: "Build Corne de chasse DPS",
      image: `${BASE_URL}HH-DPS.webp`,
      alt: "Build Corne de chasse DPS",
      description: [
        "Un build Corne de chasse DPS. Et oui, même si la Corne de chasse permet de booster et d’apporter différents types de soutien à l’équipe, c’est également une arme extrêmement forte en DPS, mais sans doute l’une des plus complexes à maîtriser.",
        "Ce build vous permet d’infliger un maximum de dégâts tout en disposant de nombreux emplacements de joyaux pour adapter vos talents selon le monstre affronté.",
        "On peut également remarquer que la Corne de chasse utilisée ici n’a pas d’élément. Le choix d’une Corne de chasse Artian Gogmazios non élémentaire modifie les mélodies par rapport à une version élémentaire. Toutefois, les deux options restent viables : il n’y a pas de différence significative de dégâts entre une version élémentaire et non élémentaire. La principale variation concerne les musiques, que vous choisirez donc selon vos préférences de jeu.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build Corne de chasse Perma Boost",
      image: `${BASE_URL}HH-Perma-Boost.webp`,
      alt: "Build Corne de chasse Perma Boost",
      description: [
        "Ce build est basé sur l'arme de l'Arkveld « Galahad le Tonitruant », qui est la seule corne de chasse avec la mélodie : Extension des mélodies. C'est cette mélodie qui vous permet de garder les boosts de vos deux cornes de chasse actifs durant le combat.",
        "Un build Corne de chasse qui vous permettra, à vous et à vos alliés, de bénéficier de boosts en permanence. Ce build vous offre un confort extrême pour soigner et booster rapidement vos alliés, tout en vous permettant de ne pas trébucher face aux monstres.",
        "Selon votre talisman et le nombre d'emplacements de joyaux qu'il possède, vous pouvez avoir jusqu'à 3 emplacements de niveau 1 supplémentaires, ce qui vous permettra d'ajouter d'autres compétences de confort, comme Anti-hémorragie face au Seregios, Mobilité eau/boue huileuse face au Gogmazios, ou encore 2 niveaux d'Adaptabilité et 1 niveau de Ignifuge contre le Nu Udra AT.",
        "Et grâce à la corne de chasse de l'Arkveld « Galahad le Tonitruant », vous bénéficiez également du boost de la Bulle d'écho, qui apporte de la défense ainsi que 5 points de résistance élémentaire. Combiné au repas, cela vous permet, avec un seul niveau d'Ignifuge, d'Aura draconique, d'Étanchéité, de Paratonnerre ou d'Antigel, d'atteindre les 20 points de résistance élémentaire correspondants. Vous pourrez ainsi éviter de subir le fléau élémentaire du monstre.",
        "Concernant Mycologue extrême, le niveau 2 apporte Champinitros et Champaralysies, qui remplacent les Potions démon et les Potions de pierre. Vous pouvez donc vous passer de ces champignons. Pour le niveau 3, la Mandragore ne fonctionne pas avec Un pour tous, et Champexciteur permet d'obtenir un bonus aléatoire parmi tous les champignons, ce qui n'est donc pas intéressant. Seul le Fléau du diable peut être intéressant pour vos alliés, selon l'arme qu'ils jouent. Cependant, le Fléau du diable donne le même effet que la Potion de vitalité. Ainsi, si vous n'avez pas une seconde corne de chasse qui vous apporte la mélodie \" Protection ouïe \", vous pouvez retirer ces 2 niveaux de Mycologue extrême afin de prendre le talent Bouchon d'oreille niveau 2.",
        "Et petit bonus : dans ce build, vous avez le bonus de groupe « Faveur de la gloire ». Ce bonus vous permet d'obtenir un peu plus de récompenses lors des quêtes.",
      ],
    },
  ],

  "Double lames": [
    {
      title: "Build Double Lames Elementaire No Crit",
      image: `${BASE_URL}DB-ElemNoCrit.webp`,
      alt: "Build Double Lames Elementaire No Crit",
      description: [
        "Voici un build Double Lames qui peut évoluer selon vos préférences. Hormis face à l’Arkveld classique, il n’est pas inférieur au build critique en termes de dégâts. En effet, les chaînes de l’Arkveld classique sont immunisées aux dégâts élémentaires, ce qui réduit fortement l’efficacité des builds élémentaires.",
        "À l’inverse, ce build reste tout à fait efficace contre l’Arkveld Alpha Suprême, dont les chaînes ne sont pas immunisées aux dégâts élémentaires. Il conserve ainsi une grande partie de son potentiel offensif.",
        "Face aux autres monstres, vous bénéficierez d’un excellent DPS, d’un bon confort de jeu et d’une bonne survie. Grâce aux nombreux emplacements de joyaux de niveau 1 et 2, vous pouvez adapter le build à votre style de jeu en privilégiant davantage de niveaux d’Athlète, de Marathonien ou encore de Métabolisme.",
        "Pour cela, vous pouvez sacrifier Bénédiction et Contre-attaque si vous êtes à l’aise avec les esquives, ou simplement si vous souhaitez privilégier le confort au détriment d’une partie du DPS.",
        "C'est un build qui fonctionne avec une arme élémentaire. Pour profiter pleinement de ce build, il vous faudra avoir au minimum 2 bonus de renforcement avec Boost élémentaire.",
      ],
    },
    {
      title: "Build Double Lames Raw/Crit",
      image: `${BASE_URL}DB-Raw.webp`,
      alt: "Build Double Lames Raw/Crit",
      description: [
        "Un build Double Lames basé sur l'attaque et l'affinité. Si vous ne voulez pas devoir monter plusieurs Double Lames de chaque élément, ou pour affronter l'Arkveld normal ou Alpha.",
        "Attention, un Build Double Lames avec de l'élément sera généralement supérieur en DPS (hors Arkveld).",
        "Parmi les bonus de set, il y a « Révolte du Jin Dahad ». Ce bonus de set ne peut pas être activé avec une quelconque attaque avec les Doubles Lames. Vous pouvez, selon votre choix, remplacer le torse Jin Dahad Y par le torse Nu Udra Y. Ils sont équivalents, mais il est préférable de choisir celui du Jin Dahad dans les cas où vous vous feriez immobiliser par l'Arkveld, ou même geler par le Jin Dahad ou Oméga Sadique, à ce moment-là, le bonus 2p Jin Dahad pourra s'activer.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build Double lames Elementaire Crit",
      image: `${BASE_URL}DB-ElemCrit.webp`,
      alt: "Build Double lames Élémentaire Crit",

      description: [
        'Ce build est meilleur que le "Build Doubles Lames Élémentaire No Crit", aussi bien en DPS qu’en survie. Cependant, il est plus exigeant concernant les bonus de set de l’arme Gogmazios et offre un peu moins de talents de confort.',

        'En matière de survie, ce build peut bénéficier de talents similaires à ceux du "Build Doubles Lames Élémentaire No Crit", tout en profitant du bonus 2 pièces Arkveld, qui apporte une légère régénération de vie. Cela permet potentiellement de maintenir le talent Performance optimale actif plus longtemps. De plus, vous bénéficiez également du bonus « Âme du seigneur ».',

        'Contrairement au "Build Doubles Lames Élémentaire No Crit", vous ne bénéficiez pas du talent Fenêtre d’invulnérabilité.',

        "Concernant le talisman, il vous suffit de 2 niveaux de Machine de guerre, ainsi que, si possible, du talent Vendetta pour compléter ce dernier jusqu’au niveau maximum. Si votre talisman ne possède pas d’emplacement de niveau 2, vous ne pourrez pas atteindre le niveau 3 de Contre-attaque. Toutefois, les Doubles Lames sont une arme qui repose principalement sur l’esquive et qui offre très peu de possibilités d’hyperarmure. Contre-attaque n’est donc pas forcément un talent que l’on cherche à déclencher volontairement avec cette arme. Il s’activera néanmoins si vous subissez une attaque qui vous projette.",

        "Ce build fonctionne avec une arme élémentaire. Pour en profiter pleinement, vous devrez disposer d’au moins 2 bonus de renforcement « Boost élémentaire ».",
      ],
    },
  ],

  "Épée & bouclier": [
    {
      title: "Build SnS DPS",
      image: `${BASE_URL}SnS-DPS.webp`,
      alt: "Build SnS DPS",
      description: [
        "Ce build offre un excellent équilibre entre dégâts, confort et survie. On peut notamment remarquer la présence de joyaux de niveau 1 placés dans des emplacements de niveau 2. Il serait possible de compléter Performance optimale jusqu'au niveau 5, mais le gain apporté ne me paraît pas suffisamment intéressant.",
        "En effet, avec l'Épée et Bouclier, bloquer une attaque peut entraîner une légère perte de points de vie, ce qui désactive Performance optimale. Or, cette perte est parfois trop faible pour justifier l'utilisation d'un soin, ce qui réduit l'efficacité du talent.",
        "Il est également possible d'opter pour Vengeance, mais là encore, je trouve que le gain apporté reste relativement faible. J'ai donc préféré investir dans Carnassier, qui permet de récupérer sa vie plus rapidement. Ce talent est particulièrement efficace avec l'Épée et Bouclier, puisqu'il n'est pas nécessaire de rengainer son arme pour utiliser des objets.",
        "Il est également envisageable de remplacer Bénédiction, le bouclier de l'arme apportant déjà une certaine sécurité. Toutefois, je considère que le gain offert par Vengeance ne compense pas la survivabilité supplémentaire procurée par Bénédiction.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build SnS Support",
      image: `${BASE_URL}SnS-Support.webp`,
      alt: "Build SnS Support",
      description: [
        "Voici un build de soutien. Il vous permettra de soigner rapidement et fréquemment vos alliés, tout en leur conférant des bonus d'attaque grâce aux Potions de démon, aux Poudres de démon, etc., ainsi qu'au bonus de groupe « Faveur du seigneur ». Ce dernier accorde 10 points d'attaque supplémentaires à toute l'équipe après l'utilisation d'un soin ou d'un objet de renforcement.",
        "Vous remarquerez également la présence de joyaux de niveau 1 placés dans des emplacements de niveau 2. Si vous le souhaitez, vous pouvez sacrifier deux niveaux de Bénédiction afin d'obtenir les deux derniers niveaux de Mycologue extrême. Cela vous permettra notamment de bénéficier des effets du Fléau du diable, qui constitue selon moi le seul véritable intérêt à investir au-delà du niveau 1 de Mycologue extrême. Toutefois, il existe également la Potion de vitalité, qui procure exactement les mêmes effets que le champignon Fléau du diable.",
        "En effet, les champignons accessibles au niveau 2 de Mycologue extrême remplissent le même rôle que les Potions de démon et les Potions de pierre, ces dernières étant plus efficaces que leurs équivalents fongiques.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build SnS Elementaire Crit DPS",
      image: `${BASE_URL}SnS-ElemCrit.webp`,
      alt: "Build SnS Elementaire Crit",
      description: [
        'Tout comme le "Build SnS DPS", ce build offre un excellent équilibre entre dégâts, confort et survie. Il est même supérieur en matière de survie, mais propose légèrement moins de confort.',

        "En effet, grâce au bonus 2 pièces Arkveld et au bonus 4 pièces Gogmapocalypse, vous bénéficiez d’une meilleure survie. Ces bonus de set vous permettent également de profiter davantage du talent Performance optimale. En revanche, vous perdez le bonus 2 pièces Anjanath, ce qui rend le talent Corps et âme un peu moins efficace. Vous risquez notamment de perdre ses effets lorsque votre endurance diminue après avoir bloqué une attaque.",

        "Il est également envisageable de remplacer certains talents de confort, comme Bénédiction et Adaptabilité. En effet, le bouclier de l’arme offre déjà une certaine sécurité, tandis que les boissons chaudes et fraîches permettent de compenser les effets du froid et de la chaleur dans certaines zones.",

        "Ce build est principalement conçu pour une arme élémentaire, afin de profiter pleinement du bonus aux dégâts élémentaires apporté par le set Gogmapocalypse. Il reste néanmoins possible de le jouer avec une arme à affliction, même si cela entraîne une perte de dégâts.",
      ],
    },
  ],

  "Épée longue": [
    {
      title: "Build LS Multi-Monstres",
      image: `${BASE_URL}Multi-Monstres.webp`,
      alt: "Build LS Multi-Monstres",
      description: [
        "Ceci est un build qui fonctionne sur tous les monstres. Si Mise à mort n'est pas rentable sur certains monstres (ex. : phases 1 et 2 du Gogmazios ou le Gore Magala si vous ne tapez pas sa tête), vous pouvez alors mettre Force latente lv 5 ou Témérité lv 5 + Poussée d'adrénaline lv 1, car les 5 niveaux de Mise à mort sont obtenus via des joyaux.",
        "Il en va de même pour Ignifuge lv 3, utile pour atteindre 20 de résistance au feu, ce qui permet de ne pas subir le Fléau-feu. Vous pouvez donc remplacer Ignifuge par d'autres talents de résistance élémentaire afin d'atteindre 20 de résistance dans l'élément souhaité et ainsi éviter le fléau élémentaire correspondant. Attention, pour atteindre 20 de résistance dans certains éléments, vous aurez besoin de la résistance élémentaire obtenue via le repas.",
        "Contre Seregios, vous pouvez également utiliser le talent Anti-hémorragie.",
        "Selon les emplacements de joyaux de votre talisman, vous pouvez ajouter les talents que vous voulez. Sur ce stuff, on peut voir le joyau d'Adaptation pour la chaleur ou le froid, ainsi que le joyau d'Atlantis pour être moins ralenti par l'huile que le Gogmazios répand au sol.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build LS Raw/Elem",
      image: `${BASE_URL}LS-Raw-Elem.webp`,
      alt: "Builds LS Raw/Elem",
      description: [
        "Voici un build meilleur que le précédent en termes de DPS et de survie. Ce qu’il a de plus que le précédent, c’est la possibilité d’avoir le bouclier du 4p Gogmapocalypse ainsi qu’une petite régénération de vie via le 2p Appétit de l’Arkveld. Ces bonus de set vous permettent donc d’avoir très souvent le talent Performance optimale activé.",
        "Vous perdez donc la possibilité d’avoir les 20 de résistance élémentaire pour éviter les fléaux élémentaires du build précédent, mais vous récupérez Carnassier, qui vous permet de prendre une baie de soin plus rapidement pour retirer ces fléaux, mais aussi de boire vos potions plus rapidement. De plus, vous bénéficiez de deux niveaux du talent Écorcheur, ce qui permettra de faire plus souvent des blessures.",
        "C’est un build moins polyvalent que le précédent, au vu du 4p Gogmapocalypse qui rend le build un peu plus axé sur l’élément que le précédent. Il est donc possible que, face à l’Arkveld normal ou alpha, il soit légèrement moins performant que le précédent. Pour profiter de l’élément apporté par le 4p Gogmapocalypse, vous devriez donc avoir votre arme en élémentaire, et non en affliction ou attaque.",
      ],
    },
  ],

  "Grande épée": [
    {
      title: "Build GS Triple Impact",
      image: `${BASE_URL}Triple-Impact.webp`,
      alt: "Build GS Triple Impact",
      description: [
        "Ce build permet d’infliger d’importants dégâts grâce à une attaque et une affinité élevées, ainsi qu’au passif de l’arme « Reflet éparpillé » et au bonus 2 pièces Maléfique. L’arme offre déjà un excellent confort de jeu grâce au talent Concentration intégré et à son très bon tranchant, ce qui permet de se passer de talents comme Samouraï ou Main de maître.",
        "L’équipement n’apporte pas de confort supplémentaire particulier, mais si vous êtes à l’aise en survie, vous pouvez remplacer Bénédiction par des talents utilitaires tels que Crâne d’acier ou Anti-hémorragie (notamment contre Seregios), selon les besoins du combat.",
        "Concernant le talisman, il est idéal d'avoir deux niveaux de Machine de guerre plutôt qu’un seul afin d’atteindre le niveau 5.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build GS DPS Confort",
      image: `${BASE_URL}GS-DPS-Confort.webp`,
      alt: "Build GS DPS Confort",
      description: [
        "Voici un build GS moins puissant que le précédent, mais qui vous offre un meilleur confort. Vous pouvez obtenir Crâne d'acier niveau 3 et Bouchon d'oreille niveau 2, ainsi que le bonus 2p « Volonté de l'Anjanath tonnerre », qui vous permet de mieux profiter du talent Corps et âme.",
        "Dans ce build, vous avez le choix entre le bonus 2p « Puissance du Doshaguma » et le bonus 2p « Révolte du Jin Dahaad », selon le bonus de set que vous souhaitez obtenir sur votre arme Gogmazios.",
        "Concernant le talisman, vous devez principalement avoir soit Mise à mort niveau 1, soit Vendetta niveau 1. Pour bénéficier de tout le confort souhaité, il vous faudra également des emplacements de niveau 2 et 1. Le talent Affûtage rapide n'est pas obligatoire : je vous conseillerais plutôt d'opter pour Garde offensif niveau 3 ou Concentration niveau 3. Cela vous permettra de retirer le joyau Concentration ou Gardien afin de le remplacer par un joyau Berserker de niveau 2 et ainsi compléter le talent Berserker jusqu'à son niveau maximal.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme élémentaire qu'avec une arme en affliction ou en attaque. Cependant, si vous souhaitez profiter du bonus 2p Gogmapocalypse, il sera préférable de jouer avec une GS élémentaire.",
      ],
    },
  ],

  Lance: [
    {
      title: "Build Lance DPS",
      image: `${BASE_URL}Lance-DPS.webp`,
      alt: "Build Lance DPS",
      description: [
        "Ce build Lance vous permet d’allier de bons dégâts tout en conservant un excellent confort et une bonne survie. Grâce aux bonus 2 pièces Arkvulcan, vous bénéficiez d’une légère régénération de vie lors de vos attaques, sans oublier le bonus de groupe « Âme du seigneur », qui peut vous permettre de survivre à 1 point de vie, ainsi que Bénédiction niveau 3.",
        "En termes de confort, le bonus 2 pièces Anjanath vous permet d’activer plus fréquemment Corps et âme. J’ai également opté pour 2 niveaux de Trompe-la-mort, tout comme dans le build Lance canon DPS, ce qui améliore votre mobilité lorsque vous êtes dégainé.",
        "Concernant le talisman, comme vous pouvez le voir, il s’agit d’un talisman offrant directement les 3 niveaux d’Ultra-garde, ce qui ne correspond pas forcément à un build dit « DPS ». Les talents recherchés sur le talisman restent donc flexibles. L’objectif est surtout d’obtenir au moins le niveau de Mise à mort permettant d’atteindre le niveau 5.",
        "Pour les monstres contre lesquels Ultra-garde n’est pas nécessaire, vous pouvez privilégier des niveaux de Machine de guerre, par exemple.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build Lance Auto-Régén",
      image: `${BASE_URL}Lance-Auto-Regen.webp`,
      alt: "Build Lance Auto-Régén",
      description: [
        "C'est un build conçu pour être autosuffisant. Grâce aux bonus 2p « Appétit de l'Arkveld » et 4p « Pouls du Zoh Shia », vous bénéficiez d'une légère régénération de vie lors de vos attaques, ainsi que d'une régénération passive continue. De plus, grâce au talent Cercle de vie, les effets de vos bonus et objets de régénération sont amplifiés. Le talent Halo de guérison vous permet également de récupérer beaucoup plus rapidement les PV temporairement perdus (la jauge rouge de la barre de vie).",
        "Concernant le talisman, vous pouvez choisir celui que vous souhaitez. Pour ma part, j'ai opté pour Bénédiction niveau 3, avec Neutralisation niveau 3 en bonus. Cela me permettra de paralyser les monstres un peu plus rapidement, étant donné que mon arme inflige des dégâts de paralysie.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme élémentaire qu'avec une arme en affliction ou en attaque.",
      ],
    },
    {
      title: "Build Lance Elementaire Crit",
      image: `${BASE_URL}Lance-ElemCrit.webp`,
      alt: "Build Lance Elementaire Crit",
      description: [
        'Ce build Lance est meilleur que le "Build Lance DPS", notamment grâce à une meilleure survie, mais il propose des talents de confort légèrement différents.',

        "Grâce au bonus 4 pièces Gogmapocalypse et au bonus 2 pièces Arkveld, vous bénéficiez d’un bouclier ainsi que d’une légère régénération de vie lorsque vous attaquez. En revanche, vous perdez le talent Trompe-la-mort, qui peut être particulièrement utile avec la Lance, une arme disposant de peu de mobilité, pour vous repositionner ou poursuivre rapidement un monstre. Pour récupérer ce talent, vous pouvez sacrifier la régénération de vie du bonus 2 pièces Arkveld ainsi que les 2 niveaux d’Écorcheur, en équipant les Avant-bras Rey Dau γ, qui possèdent Trompe-la-mort. Il vous suffira ensuite d’y ajouter 2 joyaux Mise à mort.",

        "Vous perdez également le bonus de set Anjanath, ce qui vous permet de profiter un peu moins efficacement du talent Corps et âme. En contrepartie, vous pouvez atteindre le niveau 3 de Carnassier. Concernant le talent Ultra garde, si vous n’en avez pas besoin face à certains monstres, vous pouvez remplacer son joyau par un joyau Berserker, puis équiper un joyau Paladin dans l’emplacement d’arme du talisman, ou choisir un autre talent selon vos préférences. Une autre possibilité consiste à utiliser un joyau Main de maître ou Samouraï, puis à équiper un talisman offrant, par exemple, Machine de guerre niveau 3. Vous pourrez ainsi atteindre le niveau 4 grâce à un éventuel emplacement de joyau d’arme de niveau 1 sur le talisman.",

        "Concernant le talisman, comme expliqué précédemment, plusieurs configurations sont possibles selon les talents que vous souhaitez privilégier et les joyaux présents sur votre arme. Il n’est pas obligatoire de choisir spécifiquement Main de maître : le talent Samouraï constitue une alternative équivalente, compte tenu de votre affinité qui peut atteindre 70 %.",

        "Ce build est principalement conçu pour une arme élémentaire, afin de profiter pleinement du bonus aux dégâts élémentaires apporté par le set Gogmapocalypse. Il reste néanmoins possible de le jouer avec une arme à affliction, même si cela entraîne une perte de dégâts.",
      ],
    },
  ],

  "Lance canon": [
    {
      title: "Build Lance canon DPS",
      image: `${BASE_URL}LanceCanon-DPS.webp`,
      alt: "Build Lance canon DPS",
      description: [
        "Voici un build Lance canon DPS. Étant une arme lente lors des déplacements, tout comme dans le build Lance DPS, j’ai opté pour 2 niveaux de Trompe-la-mort afin d’améliorer la mobilité lorsque vous êtes dégainé.",
        "Vous disposez également de 2 niveaux de Bouchon d’oreilles. Cependant, si vous recherchez un maximum de DPS, même si certaines attaques de la Lance canon ne peuvent pas infliger de coups critiques, vous pouvez remplacer Bouchon d’oreilles et/ou Trompe-la-mort par des talents comme Corps et âme ou d’autres talents selon vos préférences.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme en élémentaire, en affliction qu'en attaque.",
      ],
    },
  ],

  "Fusarbalète léger": [
    {
      title: "Build LBG DPS Elementaire",
      image: `${BASE_URL}LBG-ElemCrit.webp`,
      alt: "Build LBG DPS Elementaire",
      description: [
        "Ce build LBG vous apporte d’importants dégâts élémentaires grâce aux talents Vendetta et Union. Tout comme le talent Antivirus, le talent Union s’active facilement grâce au bonus 2 pièces Tyrannie du Gore Magala.",
        "Ce build inclut également quelques talents de confort, comme Bouchon d’oreilles, qui peut être remplacé si vous le souhaitez afin de compléter le niveau 5 de Performance optimale et ainsi augmenter encore davantage vos dégâts.",
        "Concernant le talisman, le plus important est d’obtenir Antivirus pour les 10 % d’affinité qu’il procure. Cependant, vous pouvez choisir d’autres options selon vos préférences, le choix des talents sur le talisman restant entièrement flexible.",
        "Le build Fusarbalète léger DPS élémentaire est identique au build Fusarbalète lourd DPS élémentaire.",
        "C'est un build qui fonctionne avec une arme élémentaire.",
      ],
    },
    {
      title: "Build LBG Mun Normal",
      image: `${BASE_URL}LBG-Mun-Normal.webp`,
      alt: "Build LBG Mun Normal",
      description: [
        "Ce build est complet, vous n’avez rien à faire pour activer vos talents, mis à part manger un steak pour activer le bonus 2p du Xu Wu, qui vous apportera +15 d’attaque pendant 3 minutes.",
        "Concernant le talisman, si vous avez Mise à mort, alors il vous suffit de mettre un joyau Vendetta à la place d’un joyau Mise à mort. Si vous avez Témérité sur le talisman, il vous suffira de remplacer un joyau Témérité par un joyau Vendetta. Pour Premier Tir, si vous avez Balistique sur le talisman, alors vous échangerez le joyau Kyudo III contre un joyau Premier Tir. De même, si vous avez Tir super rapide sur le talisman, il vous suffira de le remplacer par le joyau du talent manquant.",
        "Ce build est fait pour jouer avec des munitions normales, donc des munitions basées uniquement sur l’attaque. Il est donc inutile de jouer élémentaire. Concernant les afflictions, si vous le souhaitez, vous pouvez jouer Paralysie ou Sommeil si vous voulez paralyser ou endormir le monstre à certains moments grâce aux munitions Paralysie ou Sommeil.",
      ],
    },
  ],

  "Fusarbalète lourd": [
    {
      title: "Build HBG DPS Elementaire",
      image: `${BASE_URL}HBG-ElemCrit.webp`,
      alt: "Build HBG DPS Elementaire",
      description: [
        "Ce build HBG vous apporte d’importants dégâts élémentaires grâce aux talents Vendetta et Union. Tout comme le talent Antivirus, le talent Union s’active facilement grâce au bonus 2 pièces Tyrannie du Gore Magala.",
        "Ce build inclut également quelques talents de confort, comme Bouchon d’oreilles, qui peut être remplacé si vous le souhaitez afin de compléter le niveau 5 de Performance optimale et ainsi augmenter encore davantage vos dégâts.",
        "Concernant le talisman, le plus important est d’obtenir Antivirus pour les 10 % d’affinité qu’il procure. Cependant, vous pouvez choisir d’autres options selon vos préférences, le choix des talents sur le talisman restant entièrement flexible.",
        "Le build Fusarbalète lourd DPS élémentaire est identique au build Fusarbalète léger DPS élémentaire.",
        "C'est un build qui fonctionne avec une arme élémentaire.",
      ],
    },
    {
      title: "Build HBG Mortier",
      image: `${BASE_URL}HBG-Mortier.webp`,
      alt: "Build HBG Mortier",
      description: [
        "Ce build HBG est principalement conçu pour être joué avec « Combustion Souffle-du-dragon », une attaque qui ne peut pas infliger de coups critiques et dont les dégâts dépendent uniquement de votre attaque. Le bonus Xu Wu vous permet donc de bénéficier de +30 en attaque pendant 3 minutes après avoir mangé un steak.",
        "C'est un build qui offre énormément de confort, notamment grâce à Trompe-la-mort pour la mobilité, à Bouchon d'oreille pour bloquer les cris des monstres pendant que vous tirez avec le « Souffle-du-dragon », ainsi qu'à Fenêtre d'invulnérabilité pour faciliter les esquives, cela vous permet d'activer plus facilement Poussée d'adrénaline, et Rengainage éclair ainsi que Carnassier pour vous soigner à temps avant une éventuelle attaque du monstre.",
        "Concernant le talisman, vous pouvez choisir entre Salve mortelle et BOUM ! selon le talent que vous obtenez, il vous suffit d'ajouter l'autre en joyau. Même si vous n'avez pas le point supplémentaire en Trompe-la-mort, le niveau 2 reste déjà très agréable. Vous pouvez toutefois réduire Fenêtre d'invulnérabilité si vous le préférez, voire diminuer Bouchon d'oreille. En effet, le niveau 3 de Bouchon d'oreille n'est nécessaire que contre Zoh Shia, Gogmazios, Gravios et Jin Dahaad, ainsi que pour bloquer le cri du Gore Magala lorsqu'il entre dans son état enragé. Si vous n’avez pas de points en Machine de guerre et que vous ne pouvez donc pas atteindre le niveau 4 ou 5, vous pouvez utiliser le joyau Plomb pour remplacer Machine de guerre. Il vous apporte le talent Désigné pour mourir, qui augmentera les dégâts de vos munitions Grenaille. Sinon, vous pouvez toujours opter pour Ultra-garde, pour plus de confort face à certaines attaques de monstres.",
        "Ce build ne repose pas nécessairement sur les dégâts élémentaires ou les afflictions. Cependant, en utiliser ne vous empêchera pas d'infliger de bons dégâts : cela vous permettra simplement de profiter de munitions supplémentaires selon le type de HBG choisi. Par exemple, avec un HBG Feu, vous disposerez de munitions incendiaires, tandis qu'avec un HBG Explosion, vous aurez accès aux munitions antiblindage, etc.",
      ],
    },
  ],

  Insectoglaive: [
    {
      title: "Build Insectoglaive DPS",
      image: `${BASE_URL}IG-DPS.webp`,
      alt: "Build Insectoglaive DPS",
      description: [
        "Voici un build Insectoglaive DPS. Ce build vous apporte d’importants dégâts tout en conservant un bon niveau de confort.",
        "Vous disposez de Bouchon d’oreilles ainsi que de résistances élémentaires pouvant atteindre 20 minimum, grâce au repas, mais surtout aux trois emplacements supplémentaires de niveau 1. Ceux-ci vous permettent d’ajouter des talents tels qu’Ignifuge, Étanchéité, Aura draconique, etc., afin d’éviter de subir des fléaux élémentaires.",
        "Contre certains monstres, comme le Seregios, vous pouvez remplacer ces résistances élémentaires par le talent Anti-hémorragie.",
        "C'est un build polyvalent qui fonctionne aussi bien avec une arme élémentaire, en affliction qu'en attaque.",
      ],
    },
    {
      title: "Build Insectoglaive Elementaire Crit",
      image: `${BASE_URL}IG-ElemCrit.webp`,
      alt: "Build Insectoglaive Elementaire Crit",

      description: [
        'Ce build possède un DPS équivalent à celui du "Build Insectoglaive DPS", tout en offrant davantage de talents de survie, mais avec des talents de confort différents.',

        "Vous disposez du talent Bouchon d’oreilles niveau 1, contre le niveau 2 pour le build précédent. Cependant, grâce au bonus des 3 kinsects, vous gagnez un niveau supplémentaire, ce qui vous permet d’atteindre le niveau 2 de Bouchon d’oreilles, suffisant contre la plupart des monstres. Contrairement au build précédent, vous ne pourrez pas atteindre les 20 points de résistance à l’élément Dragon nécessaires pour éviter le Fléau-dragon. En revanche, vous pouvez atteindre ce seuil pour les autres éléments en équipant des joyaux comme Ignifuge, Étanchéité, etc. Pour intégrer ces talents, vous pouvez, si vous le souhaitez, retirer Bénédiction ou Crâne d’acier. En contrepartie, ce build vous permet de bénéficier du talent Carnassier, du bonus 2 pièces Arkveld, qui apporte une légère régénération de vie, ainsi que du bonus 4 pièces Gogmapocalypse, qui vous procure un bouclier.",

        "Pour les chasseurs qui apprécient le talent Trompe-la-mort sur l’Insectoglaive, il est possible de sacrifier le bonus 2 pièces Arkveld pour équiper les Avant-bras Rey Dau γ, qui apportent 2 niveaux de Trompe-la-mort. Il vous suffira ensuite d’ajouter 2 joyaux Mise à mort dans les emplacements de niveau 3 de ces avant-bras afin de retrouver Mise à mort niveau 5. Toutefois, cette modification vous fera perdre les 2 niveaux d’Écorcheur.",

        "Concernant le talisman, l’idéal est de disposer de 3 niveaux de Machine de guerre ainsi que d’un emplacement de joyau d’arme permettant d’atteindre le niveau 5 de ce talent. Si votre talisman ne possède que 2 niveaux de Machine de guerre ou ne dispose pas d’emplacement de joyau d’arme, vous pourrez tout de même atteindre le niveau 4, ce qui reste suffisant. En revanche, si vous ne parvenez pas à atteindre ce niveau, je vous conseille de remplacer un joyau Berserker de votre arme par un joyau Machine de guerre de niveau 3. Il vous faudra également un niveau supplémentaire de Mise à mort sur votre talisman afin d’atteindre le niveau 5 de ce talent.",

        "Ce build est principalement conçu pour une arme élémentaire, afin de profiter pleinement du bonus aux dégâts élémentaires apporté par le set Gogmapocalypse. Il reste néanmoins possible de le jouer avec une arme à affliction, même si cela entraîne une perte de dégâts.",
      ],
    },
  ],

  Marteau: [
    {
      title: "Build Marteau Multi Proc",
      image: `${BASE_URL}Marteau-Multi-Proc.webp`,
      alt: "Build Marteau Multi Proc",
      description: [
        "Ce build Marteau est très complet : vous n’aurez pas besoin de changer vos talents selon le monstre affronté.",
        "En effet, au lieu de devoir utiliser des talents comme Ignifuge ou Étanchéité, vous disposez directement des 3 niveaux du talent Totem élémentaire, ce qui vous confère une immunité aux fléaux élémentaires.",
        "Ce build vous octroie également d’importants dégâts. Même s’il vous manque un niveau de Témérité, vous disposez de tout ce qu’il faut en termes de talents offensifs, ainsi que des procs de dégâts supplémentaires grâce aux talents Conversion élémentaire niveau 3 et Écorcheur niveau 2, qui ajoutent parfois respectivement 300 et 160 dégâts. De plus, lorsque vous utilisez un marteau élémentaire dragon, Conversion élémentaire peut également augmenter l'élément dragon de votre arme de 180.",
        "Concernant le talisman, si vous avez la possibilité d’obtenir 3 niveaux de Machine de guerre, cela sera plus optimal afin d’atteindre le niveau 5 de Berserk tout en ayant Machine niveau 4.",
        "C'est un build polyvalent qui fonctionne surtout avec une arme élémentaire, mais aussi avec une arme en affliction ou en attaque. Cependant, si vous ne jouez pas une arme élémentaire alors il ne bénéficiera pas du talent Conversion élémentaire. Vous pouvez donc remplacer la Cotte Arkvulcan Y qui contient Conversion élémentaire Lv 3 par la Cotte Jin Dahad Y et y mettre des joyaux Bouchon d'oreille.",
      ],
    },
    {
      title: "Build Marteau DPS",
      image: `${BASE_URL}Marteau-DPS.webp`,
      alt: "Build Marteau DPS",
      description: [
        "Ce build est tout aussi efficace que le précédent. Il aura plus de dégâts sur vos attaques, mais ne bénéficie ni de Conversion élémentaire ni d’Écorcheur. Vous n’avez pas non plus le talent Totem élémentaire, mais vous avez la possibilité d’avoir 3 emplacements de joyaux de niveau 1 supplémentaires. Vous pourrez donc mettre des talents comme Crâne d’acier, Carnassier, etc.",
        "Concernant le talisman, si vous avez la possibilité d’obtenir 3 niveaux de Machine de guerre, cela sera plus optimal afin d’atteindre le niveau 5 de Berserk tout en ayant Machine de guerre niveau 4.",
        "C’est un build polyvalent qui fonctionne surtout avec une arme élémentaire, car vous avez le bonus 2p Gogmapocalypse, mais vous aurez suffisamment de dégâts en affliction comme en attaque.",
      ],
    },
  ],

  "Morpho-hache": [
    {
      title: "Build Morpho-hache Full Crit",
      image: `${BASE_URL}Morpho-Crit.webp`,
      alt: "Build Morpho-hache Full Crit",
      description: [
        "Un build Morpho-hache qui fonctionne aussi bien avec une Morpho-hache à fiole élémentaire qu’avec une fiole de choc. Il s’agit d’un build combinant une forte attaque, un bon apport élémentaire et une affinité pouvant atteindre les 100 %.",
        "On peut y observer le talent Union, dans le cas où vous jouez une Morpho-hache sans élément ou basée sur l’affliction, vous pouvez retirer ce talent, qui devient alors obsolète, et le remplacer par des talents tels que Bouchon d’oreille, Destructeur ou encore Expert en survie, afin d’utiliser plus fréquemment votre cape. Il est également possible, selon les situations, d’augmenter votre attaque grâce à des talents comme Vengeance ou Performance optimale.",
        "C'est un build principalement conçu pour une arme élémentaire, mais il reste viable avec une arme en affliction ou en attaque. Dans ce cas, le talent Union ne sera pas utile et pourra être remplacé par un autre talent.",
      ],
    },
    {
      title: "Build Morpho-hache Raw/Elem",
      image: `${BASE_URL}Morpho-Raw-Elem.webp`,
      alt: "Build Morpho-hache Raw/Elem",
      description: [
        "Voici un build meilleur que le précédent en termes de DPS et de survie, mais il est préférable d'utiliser les fioles élémentaires. Ce qu’il a de plus que le précédent, c’est la possibilité d’avoir le bouclier du 4p Gogmapocalypse ainsi qu’une petite régénération de vie via le 2p Appétit de l’Arkveld. Ces bonus de set vous permettent donc d’avoir très souvent le talent Performance optimale activé.",
        "Dans ce build, vous n'atteindrez pas les 100 % d'affinité, mais vous aurez plus d’attaque et d’élément, mais aussi deux niveaux du talent Écorcheur, ainsi que la possibilité d’avoir plus d’emplacements de niveau 1, ce qui vous permettra d’avoir des talents comme Crâne d'acier et Carnassier.",
        "C’est un build moins polyvalent que le précédent, au vu du 4p Gogmapocalypse, qui rend le build un peu plus axé sur l’élément que le précédent. Il est donc possible que, face à l’Arkveld normal ou alpha, il soit légèrement moins performant que le précédent. Pour profiter de l’élément apporté par le 4p Gogmapocalypse, vous devriez donc avoir votre arme en élémentaire, et non en affliction ou attaque.",
        "Ce build Morpho-hache est fait pour être joué en fiole de choc. Si vous ne voulez pas devoir monter plusieurs Morpho-haches de chaque élément, alors il est fait pour vous.",
        "Sur votre arme, vous pouvez choisir d'avoir soit le bonus 2 pièces Volonté de l'Anjanath tonnerre, soit le bonus 4 pièces Appétit de l'Arkveld. La Morpho-hache n'est pas une arme qui consomme de l'endurance. Toutefois, le bonus Volonté de l'Anjanath tonnerre peut servir à ne pas perdre le talent Corps et âme si vous faites une esquive.",
        "Pour ce build, vous allez donc jouer en fiole de choc, mais vous avez quand même le choix d'utiliser une arme élémentaire ou à affliction selon vos préférences.",
      ],
    },
    {
      title: "Build Morpho-hache Choc",
      image: `${BASE_URL}Morpho-Choc.webp`,
      alt: "Build Morpho-hache Choc",
      description: [
        "Ce build Morpho-hache est fait pour être joué en fiole de choc. Si vous ne voulez pas devoir monter plusieurs Morpho-haches de chaque élément, alors il est fait pour vous.",
        "Sur votre arme, vous pouvez choisir d'avoir soit le bonus 2 pièces Volonté de l'Anjanath tonnerre, soit le bonus 4 pièces Appétit de l'Arkveld. La Morpho-hache n'est pas une arme qui consomme de l'endurance. Toutefois, le bonus Volonté de l'Anjanath tonnerre peut servir à ne pas perdre le talent Corps et âme si vous faites une esquive.",
        "Pour ce build, vous allez donc jouer en fiole de choc, mais vous avez quand même le choix d'utiliser une arme élémentaire ou à affliction selon vos préférences.",
      ],
    },
  ],

  "Volto-hache": [
    {
      title: "Build Volto-hache SAED",
      image: `${BASE_URL}Volto-SAED.webp`,
      alt: "Build Volto-hache SAED",
      description: [
        "Voici le build SAED. Ce build vous permet d’atteindre le maximum d’élément possible, voire de le dépasser légèrement.",
        "Pourquoi dépasser le maximum ? En réalité, il n’y a aucun intérêt à dépasser la limite d’élément en permanence, mais tous les talents ne sont pas actifs en même temps. Par exemple, si le monstre n’est pas énervé, vous ne bénéficierez pas du bonus d’élément obtenu via le bonus 4 pièces Gogmapocalypse. Dans ces situations, ce build vous permet de vous rapprocher du maximum lorsque Conversion élémentaire et Absorption élémentaire sont activés. Conversion élémentaire augmente uniquement l’élément dragon, et non les autres éléments.",
        "À l’inverse, si ces deux talents ne sont pas actifs lorsque le monstre est énervé, vous pouvez bénéficier du bonus Gogmapocalypse, ce qui vous permettra d’atteindre le maximum d’élément. Et si tous les bonus sont actifs en même temps et que vous dépassez largement ce maximum, le talent Conversion élémentaire reste intéressant grâce à son effet de proc infligeant environ 300 dégâts occasionnels.",
        "Concernant le talisman, si vous souhaitez obtenir une immunité au fléau élémentaire, vous devrez impérativement y avoir deux niveaux de Totem élémentaire, car ce talent n’existe pas en joyaux.",
        "C'est un build qui fonctionne avec une arme élémentaire. Il est fortement conseillé d'avoir un maximum de bonus de renforcement en Boost élémentaire, soit jusqu'à 4 lignes au maximum.",
      ],
    },
    {
      title: "Build Volto-hache Choc",
      image: `${BASE_URL}Volto-Choc.webp`,
      alt: "Build Volto-hache Choc",
      description: [
        "Ce build Volto-hache est fait pour être joué en fiole de choc. Si vous ne voulez pas devoir monter plusieurs Volto-haches de chaque élément, alors il est fait pour vous.",
        "Vous pouvez ne pas vous soucier des bonus de talents de votre arme, mais si vous voulez vraiment avoir le mieux, alors vous pouvez compléter le bonus 4 pièces Appétit de l'Arkveld. Même si ce bonus n'apporte pas une très grande régénération de vie, c'est toujours mieux que rien.",
        "Ce build n'a rien de particulier, il est complet. Vous avez le DPS grâce aux talents qui apportent de l'attaque et de l'affinité, comme Mise à mort et Témérité, mais vous avez aussi Écorcheur, qui augmentera le nombre de blessures ainsi qu'un proc de dégâts non négligeable. Mais vous aurez aussi de la survie, comme le bonus 4 pièces Appétit de l'Arkveld, Bénédiction ainsi que le 3 pièces Âme du seigneur. Sans oublier le confort, avec Carnassier, Bouchon d'oreille et Antichocs.",
      ],
    },
  ],
};
