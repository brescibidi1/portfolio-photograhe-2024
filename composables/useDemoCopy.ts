const copy = {
  fr: {
    notice: 'Démo d’intégration · Photographe fictif. Visuels générés avec Freepik.',
    current: 'Mon Labo', menu: 'Ouvrir le menu', close: 'Fermer le menu', navigation: 'Navigation principale',
    previous: 'Photos précédentes', next: 'Photos suivantes', contact: 'Coordonnées fictives — aucun contact réel',
    formTitle: 'Essayer le formulaire', formHint: 'Ce formulaire est une démonstration. Utilise des informations fictives : aucun message n’est envoyé ni enregistré.',
    name: 'Ton nom', email: 'Ton email', message: 'Ton message', send: 'Tester l’envoi',
    success: 'Simulation terminée. Aucun message n’a été envoyé.', social: 'Profil de démonstration : aucun réseau social n’est connecté.',
    credit: 'Intégration par Kenelm · Visuels générés avec Freepik',
    timeline: ['Portraits et lumière naturelle : exemple d’étape pour cette année.', 'Reportages et événements : exemple de projet dans ce parcours fictif.', 'Essais de compositions et de cadrages pour cette étape de démonstration.', 'Exploration de paysages et de scènes urbaines dans ce parcours fictif.', 'Premiers portraits : exemple de texte à personnaliser.', 'Découverte de la photographie : point de départ de cette biographie fictive.'],
  },
  en: {
    notice: 'Integration demo · Fictional photographer. Visuals generated with Freepik.',
    current: 'My Lab', menu: 'Open menu', close: 'Close menu', navigation: 'Main navigation',
    previous: 'Previous photos', next: 'Next photos', contact: 'Fictional contact details — no real contact',
    formTitle: 'Try the form', formHint: 'This is a demonstration. Use fictional information: no message is sent or stored.',
    name: 'Your name', email: 'Your email', message: 'Your message', send: 'Try sending',
    success: 'Simulation complete. No message was sent.', social: 'Demo profile: no social account is connected.',
    credit: 'Integration by Kenelm · Visuals generated with Freepik',
    timeline: ['Portraits and natural light: an example milestone for this year.', 'Events and reports: an example in this fictional journey.', 'Composition and framing studies for this demo milestone.', 'Exploring landscapes and city scenes in this fictional journey.', 'First portraits: sample text to customize.', 'Discovering photography: the start of this fictional biography.'],
  },
};
export function useDemoCopy() {
  const { locale } = useI18n();
  return computed(() => copy[locale.value === 'en' ? 'en' : 'fr']);
}
