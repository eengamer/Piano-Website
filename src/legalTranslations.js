// Translations of the existing English legal copy.
const owner = 'Marcel Marki'
const email = 'event@marcel-marki.com'
const domain = 'marcel-marki.com'
const section = (title, ...body) => ({ title, body })

export const legalTranslations = {
  fr: {
    legalLabel: 'Informations légales', backHome: 'Retour à l’accueil',
    copyright: `© 2026 ${owner}. Tous droits réservés. Le contenu de ce site, notamment les œuvres musicales, arrangements, prestations, enregistrements, vidéos, photographies, textes, éléments graphiques et créations, ne peut être copié, reproduit, distribué, interprété publiquement, utilisé pour l’entraînement de l’IA ou exploité de toute autre manière sans l’accord écrit préalable de ${owner}.`,
    terms: {
      eyebrow: 'Informations légales', title: 'Conditions d’utilisation', updated: 'Dernière mise à jour : 2026',
      intro: `Les présentes conditions régissent l’utilisation de ${domain}, le site personnel et professionnel de ${owner}. En accédant à ce site, vous acceptez de l’utiliser conformément à ces conditions.`,
      sections: [
        section('Objet du site', 'Ce site présente des prestations au piano, des arrangements musicaux, des enregistrements, des vidéos, des photographies et des informations professionnelles. Il permet également de contacter Marcel Marki pour des réservations et des demandes de renseignements.'),
        section('Propriété intellectuelle', `Sauf mention expresse contraire, tous les contenus du site sont la propriété intellectuelle exclusive de ${owner}.`, 'Les contenus protégés comprennent notamment les arrangements musicaux, prestations, enregistrements, vidéos, photographies, images, éléments graphiques, logos, textes, créations, code source et documents téléchargeables.', `Aucun contenu ne peut être copié, reproduit, redistribué, modifié, republié, vendu, concédé sous licence, interprété publiquement, exploité commercialement ou utilisé autrement sans l’autorisation écrite préalable de ${owner}.`),
        section('Collecte automatisée et utilisation pour l’IA', `L’extraction automatisée, le téléchargement, l’entraînement de l’IA, la constitution de jeux de données d’apprentissage automatique, l’indexation pour des systèmes d’IA générative et la collecte massive des contenus du site sont strictement interdits sans le consentement écrit explicite de ${owner}.`),
        section('Utilisation autorisée', 'Les utilisateurs peuvent consulter ce site uniquement à des fins personnelles et non commerciales. Toute utilisation dépassant la simple consultation nécessite une autorisation écrite préalable.'),
        section('Exclusion de garanties', 'Le site est fourni en l’état et selon sa disponibilité. Malgré les efforts raisonnables déployés pour assurer l’exactitude et la disponibilité des informations, aucune garantie n’est donnée quant à un fonctionnement ininterrompu, sans erreur, sécurisé ou exempt d’éléments nuisibles.'),
        section('Limitation de responsabilité', `Dans toute la mesure permise par le droit applicable, ${owner} ne saurait être tenu responsable de dommages directs, indirects, accessoires, consécutifs ou particuliers résultant de l’accès au site, de son utilisation ou de l’impossibilité de l’utiliser.`),
        section('Liens externes', 'Ce site peut contenir des liens vers des sites ou services tiers. Marcel Marki n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, leur disponibilité ou leurs pratiques.'),
        section('Modification des conditions', `${owner} se réserve le droit de modifier ces conditions à tout moment. Les modifications prennent effet dès leur publication sur cette page.`),
        section('Droit applicable', 'Ces conditions sont régies et interprétées conformément au droit suisse.'),
      ],
    },
    privacy: {
      eyebrow: 'Protection des données', title: 'Politique de confidentialité', updated: 'Dernière mise à jour : 2026',
      intro: `Cette politique explique comment les données personnelles peuvent être collectées et traitées lorsque vous consultez ${domain} ou contactez ${owner}.`,
      sections: [
        section('Droit applicable', 'Ce site est exploité conformément au droit suisse de la protection des données. Le Règlement général sur la protection des données (RGPD) peut également s’appliquer aux visiteurs situés dans l’Union européenne ou l’Espace économique européen.'),
        section('Données recueillies lors des demandes', 'Si vous contactez Marcel Marki par un formulaire, une demande de réservation, un lien e-mail ou un moyen similaire, les informations fournies peuvent être collectées et traitées. Elles peuvent comprendre votre nom, adresse e-mail, numéro de téléphone, type et date d’événement, lieu, budget, message et tout autre renseignement communiqué volontairement.', 'Ces informations servent à répondre à votre demande, discuter de réservations ou de collaborations, fournir les renseignements sollicités et conserver la correspondance associée.'),
        section('Informations techniques', 'Lors de votre visite, les hébergeurs, systèmes de sécurité ou journaux de serveur habituels peuvent traiter automatiquement des informations techniques : adresse IP, navigateur, appareil, système d’exploitation, pages de provenance et pages consultées, heure d’accès et journaux d’accès.'),
        section('Cookies', 'Ce site peut utiliser des cookies ou technologies similaires nécessaires à son fonctionnement de base, à sa sécurité, à ses performances ou à l’expérience utilisateur. Si des services facultatifs d’analyse, de médias intégrés ou de marketing sont ajoutés, ils peuvent installer leurs propres cookies conformément à leurs politiques respectives.'),
        section('Services tiers', 'Les services tiers intégrés, tels que YouTube, Google Maps, Spotify, Instagram et les fournisseurs d’outils d’analyse, peuvent traiter des données personnelles conformément à leurs propres politiques lorsqu’ils sont affichés, chargés ou utilisés.', 'Les visiteurs sont invités à consulter les politiques de confidentialité de ces fournisseurs pour connaître leurs pratiques de traitement des données.'),
        section('Aucune vente de données personnelles', 'Les données personnelles ne sont jamais vendues. Elles ne peuvent être partagées que si cela est nécessaire pour exploiter le site, répondre aux demandes, respecter les obligations légales, protéger des intérêts légitimes ou recourir à des prestataires de confiance.'),
        section('Vos droits', 'Selon le droit applicable, vous pouvez disposer des droits d’accès, de rectification, d’effacement, de limitation du traitement, d’opposition au traitement et de retrait du consentement lorsque le traitement repose sur celui-ci.', `Pour exercer ces droits, contactez ${owner} à ${email}.`),
        section('Conservation des données', 'Les données personnelles sont conservées uniquement pendant la durée nécessaire à la finalité de leur collecte, notamment pour répondre aux demandes, gérer les réservations et la correspondance professionnelle, satisfaire aux obligations légales, résoudre les litiges et tenir les dossiers appropriés.'),
        section('Sécurité', 'Des mesures techniques et organisationnelles raisonnables sont utilisées pour protéger les données personnelles contre l’accès non autorisé, la perte, l’utilisation abusive ou la divulgation. Aucune méthode de transmission ou de stockage n’est totalement sûre et une sécurité absolue ne peut être garantie.'),
        section('Contact', `Pour toute question ou demande relative à la confidentialité, contactez ${owner} à ${email}.`),
      ],
    },
    impressum: {
      eyebrow: 'Informations légales', title: 'Mentions légales', updated: `Mentions légales de ${domain}`,
      intro: `Cette page fournit les informations légales relatives à ${domain}.`,
      sections: [
        section('Propriétaire du site', owner, `Domaine : ${domain}`, `Adresse e-mail : ${email}`),
        section('Responsabilité du contenu', `${owner} est responsable du contenu de ce site.`),
        section('Droits d’auteur', `Tous les éléments de ce site, notamment les œuvres musicales, arrangements, prestations, enregistrements, vidéos, photographies, textes, éléments graphiques, logos, créations, code source et documents téléchargeables, sont protégés par le droit d’auteur et d’autres droits de propriété intellectuelle. Ils ne peuvent être copiés, reproduits, distribués, interprétés publiquement, utilisés pour l’entraînement de l’IA ou exploités autrement sans le consentement écrit préalable de ${owner}.`),
        section('Liens externes', 'Ce site peut renvoyer vers des sites externes. Marcel Marki n’est pas responsable de leur contenu, de leur exactitude, de leur disponibilité ou de leurs pratiques de confidentialité.'),
      ],
    },
  },
  nl: {
    legalLabel: 'Juridische informatie', backHome: 'Terug naar de homepage',
    copyright: `© 2026 ${owner}. Alle rechten voorbehouden. De inhoud van deze website, waaronder muziekwerken, arrangementen, uitvoeringen, opnamen, video’s, foto’s, teksten, afbeeldingen en ontwerpen, mag niet worden gekopieerd, gereproduceerd, verspreid, openbaar uitgevoerd, gebruikt voor AI-training of anderszins geëxploiteerd zonder voorafgaande schriftelijke toestemming van ${owner}.`,
    terms: {
      eyebrow: 'Juridische informatie', title: 'Gebruiksvoorwaarden', updated: 'Laatst bijgewerkt: 2026',
      intro: `Deze voorwaarden zijn van toepassing op het gebruik van ${domain}, de persoonlijke en professionele website van ${owner}. Door deze website te bezoeken, stemt u ermee in deze uitsluitend volgens deze voorwaarden te gebruiken.`,
      sections: [
        section('Doel van de website', 'Deze website presenteert piano-optredens, muzikale arrangementen, opnamen, video’s, foto’s en bijbehorende professionele informatie. Bezoekers kunnen contact opnemen met Marcel Marki voor boekingen en vragen.'),
        section('Intellectuele eigendom', `Alle inhoud van deze website is het exclusieve intellectuele eigendom van ${owner}, tenzij uitdrukkelijk anders vermeld.`, 'Beschermde inhoud omvat onder meer muzikale arrangementen, uitvoeringen, opnamen, video’s, foto’s, afbeeldingen, grafische elementen, logo’s, teksten, ontwerpen, broncode en downloadbare materialen.', `Inhoud mag niet worden gekopieerd, gereproduceerd, opnieuw verspreid, gewijzigd, opnieuw gepubliceerd, verkocht, in licentie gegeven, openbaar uitgevoerd, commercieel geëxploiteerd of anderszins gebruikt zonder voorafgaande schriftelijke toestemming van ${owner}.`),
        section('Geautomatiseerde verzameling en AI-gebruik', `Geautomatiseerd scrapen, downloaden, AI-training, het samenstellen van datasets voor machine learning, indexering voor generatieve AI-systemen en het op grote schaal verzamelen van website-inhoud zijn strikt verboden zonder uitdrukkelijke schriftelijke toestemming van ${owner}.`),
        section('Toegestaan gebruik', 'Gebruikers mogen deze website uitsluitend voor persoonlijke en niet-commerciële doeleinden bezoeken. Voor elk gebruik dat verder gaat dan het normaal bekijken van de website is voorafgaande schriftelijke toestemming vereist.'),
        section('Uitsluiting van garanties', 'De website wordt aangeboden zoals deze is en voor zover beschikbaar. Hoewel redelijke zorg wordt besteed aan de juistheid en beschikbaarheid van informatie, wordt niet gegarandeerd dat de website ononderbroken, foutloos, veilig of vrij van schadelijke componenten is.'),
        section('Beperking van aansprakelijkheid', `Voor zover toegestaan door het toepasselijke recht is ${owner} niet aansprakelijk voor directe, indirecte, incidentele, gevolg- of bijzondere schade die voortvloeit uit de toegang tot, het gebruik van of het niet kunnen gebruiken van deze website.`),
        section('Externe links', 'Deze website kan links naar externe websites of diensten van derden bevatten. Marcel Marki heeft geen controle over en aanvaardt geen verantwoordelijkheid voor de inhoud, beschikbaarheid of werkwijzen van externe websites.'),
        section('Wijzigingen in deze voorwaarden', `${owner} behoudt zich het recht voor deze voorwaarden op elk moment te wijzigen. Wijzigingen worden van kracht zodra ze op deze pagina worden gepubliceerd.`),
        section('Toepasselijk recht', 'Deze voorwaarden worden beheerst door en uitgelegd volgens het recht van Zwitserland.'),
      ],
    },
    privacy: {
      eyebrow: 'Gegevensbescherming', title: 'Privacybeleid', updated: 'Laatst bijgewerkt: 2026',
      intro: `Dit privacybeleid legt uit hoe persoonsgegevens kunnen worden verzameld en verwerkt wanneer u ${domain} bezoekt of contact opneemt met ${owner}.`,
      sections: [
        section('Toepasselijk recht', 'Deze website wordt beheerd volgens het Zwitserse gegevensbeschermingsrecht. De Algemene verordening gegevensbescherming (AVG) kan ook van toepassing zijn op bezoekers in de Europese Unie of de Europese Economische Ruimte.'),
        section('Gegevens uit contact en aanvragen', 'Als u Marcel Marki benadert via een contactformulier, boekingsaanvraag, e-maillink of vergelijkbare communicatie, kunnen de verstrekte gegevens worden verzameld en verwerkt. Dit kunnen uw naam, e-mailadres, telefoonnummer, type evenement, datum, locatie, budget, bericht en andere vrijwillig gedeelde gegevens zijn.', 'Deze informatie wordt gebruikt om uw vraag te beantwoorden, boekingen of samenwerkingen te bespreken, gevraagde informatie te verstrekken en bijbehorende correspondentie te bewaren.'),
        section('Technische informatie', 'Wanneer u de website bezoekt, kunnen hostingproviders, beveiligingssystemen of standaard serverlogboeken automatisch technische informatie verwerken. Dit kan bestaan uit IP-adressen, browsertype, apparaatgegevens, besturingssysteem, verwijzende pagina’s, bezochte pagina’s, toegangstijd en toegangslogboeken.'),
        section('Cookies', 'Deze website kan cookies of vergelijkbare technologieën gebruiken die nodig zijn voor basisfunctionaliteit, beveiliging, prestaties of gebruikservaring. Als optionele analyse-, ingesloten media- of marketingdiensten worden toegevoegd, kunnen deze hun eigen cookies plaatsen volgens hun respectieve beleid.'),
        section('Diensten van derden', 'Ingesloten diensten van derden, zoals YouTube, Google Maps, Spotify, Instagram en analyseproviders, kunnen persoonsgegevens verwerken volgens hun eigen privacybeleid wanneer deze diensten worden weergegeven, geladen of gebruikt.', 'Bezoekers dienen het privacybeleid van deze aanbieders te raadplegen voor informatie over hun gegevensverwerking.'),
        section('Geen verkoop van persoonsgegevens', 'Persoonsgegevens worden nooit verkocht. Gegevens mogen uitsluitend worden gedeeld wanneer dit noodzakelijk is om de website te beheren, vragen te beantwoorden, aan wettelijke verplichtingen te voldoen, gerechtvaardigde belangen te beschermen of vertrouwde dienstverleners in te schakelen.'),
        section('Uw rechten', 'Afhankelijk van het toepasselijke recht kunt u recht hebben op inzage in uw persoonsgegevens, correctie van onjuiste gegevens, verwijdering, beperking van of bezwaar tegen de verwerking en intrekking van toestemming wanneer de verwerking daarop is gebaseerd.', `Neem voor het uitoefenen van deze rechten contact op met ${owner} via ${email}.`),
        section('Bewaartermijn', 'Persoonsgegevens worden uitsluitend bewaard zolang dat nodig is voor het doel waarvoor ze zijn verzameld, waaronder het beantwoorden van vragen, beheren van boekingen of professionele correspondentie, voldoen aan wettelijke verplichtingen, oplossen van geschillen en bijhouden van passende administratie.'),
        section('Beveiliging', 'Er worden redelijke technische en organisatorische maatregelen genomen om persoonsgegevens te beschermen tegen onbevoegde toegang, verlies, misbruik of openbaarmaking. Geen enkele overdrachts- of opslagmethode is volledig veilig en absolute veiligheid kan niet worden gegarandeerd.'),
        section('Contact', `Neem voor privacyvragen of verzoeken contact op met ${owner} via ${email}.`),
      ],
    },
    impressum: {
      eyebrow: 'Juridische informatie', title: 'Colofon', updated: `Juridische informatie over ${domain}`,
      intro: `Dit colofon bevat juridische informatie over ${domain}.`,
      sections: [
        section('Eigenaar van de website', owner, `Domein: ${domain}`, `E-mailadres: ${email}`),
        section('Verantwoordelijkheid voor de inhoud', `${owner} is verantwoordelijk voor de inhoud van deze website.`),
        section('Auteursrecht', `Alle materialen op deze website, waaronder muziekwerken, arrangementen, uitvoeringen, opnamen, video’s, foto’s, teksten, afbeeldingen, logo’s, ontwerpen, broncode en downloadbare materialen, worden beschermd door auteursrecht en andere intellectuele-eigendomsrechten. Ze mogen niet worden gekopieerd, gereproduceerd, verspreid, openbaar uitgevoerd, gebruikt voor AI-training of anderszins geëxploiteerd zonder voorafgaande schriftelijke toestemming van ${owner}.`),
        section('Externe links', 'Deze website kan verwijzen naar externe websites. Marcel Marki is niet verantwoordelijk voor de inhoud, juistheid, beschikbaarheid of privacypraktijken van externe websites.'),
      ],
    },
  },
}
