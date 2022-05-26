/**
 * This configuration will be loaded if the memory game cannot fetch the memory.json
 * file, e.g. on a localhost. If you prefer to use the memory.js file over the
 * memory.json file just delete the JSON file in your memory game instance.
 */

var memory = {

    // Add a description text to the sidebar for this memory.
    description: "Das hier ist ein Memory-Spiel. Es gibt 8 Kartenpaare. Findet die passenden Sound-Beispiele zu den Bildkarten. Dafür müsst ihr erstmal selbst herausfinden, was der Grundton ist!",

    // Show the description for the memory in the sidebar.
    showDescription: true,

    // Show infos with the card set name in the sidebar. 
    showCardSetInfo: false,

    // Show the number of cards within a card set in the sidebar.
    showNumberOfCardsPerCardSet: true,

    // Sets the maximum number of cards per card set. The cards are chosen
    // randomly in each round. Set to `null` to display all cards of a card set.
    maxNumberOfCardsPerCardSet: null,

    // Add multiple card sets to this memory.
    cardSets: [
        {
            // Add a name for this card set that will appear in the sidebar along 
            // with the number of cards for this set.
            name: 'Card set 1',

            // Set a color for the back face of a face up cards within this card set. Set
            // to `null` or remove property to use a random color. Pick nice color from
            // https://tailwindcss.com/docs/customizing-colors or https://color.adobe.com
            color: '#6366F1',

            // Add multiple cards to one set. More than two cards can be added to one set.
            cards: [
                {
                    // Add the name of this card. It will appear on the backside of the
                    // card once this set was found.
                    name: 'Card 1',

                    // Add a description for this card that will also appear on the
                    // backside of the card.
                    description: '',

                    // Set the relative path to the audio file for this card. Don't
                    // forget to add the audio file if self to this folder at the same
                    // path that is configured here.
                    audioFileUrl: 'storage/do_so.mp3',

                    // Set an image for the frontside of this card and don't forget to
                    // add the file to this folder. You can use any image format like
                    // JPG, PNG, SVG or inline SVG like in the example below. In most
                    // cases you won't need a frontImageFileUrl, so keep this value `null`.
                    // All cards can use the same image for the frontImageFileUrl.
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    // Set an image for the backside of this card and don't forget to
                    // add the file to this folder. You may want to add for example the
                    // score of the audio file as the backImageFileUrl. Keep this value
                    // `null` if you don't need an image on the back side.
                    backImageFileUrl: 'storage/do_so.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/do_so.jpg',
                    backImageFileUrl: 'storage/do_so.jpg',
                },
            ],
        },
        {
            name: 'Card set 2',
            color: '#EC4899',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/la_mi.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/la_mi.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/la_mi.jpg',
                    backImageFileUrl: 'storage/la_mi.jpg',
                },
            ],
        },
        {
            name: 'Card set 3',
            color: '#FF4040',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/mi_so.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/mi_so.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/mi_so.jpg',
                    backImageFileUrl: 'storage/mi_so.jpg',
                },
            ],
        },
        {
            name: 'Card set 4',
            color: '#FF7F00',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/re_fa.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/re_fa.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/re_fa.jpg',
                    backImageFileUrl: 'storage/re_fa.jpg',
                },
            ],
        },
        {
            name: 'Card set 5',
            color: '#FF0000',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/so_re.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/so_re.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/so_re.jpg',
                    backImageFileUrl: 'storage/so_re.jpg',
                },
            ],
        },
        {
            name: 'Card set 6',
            color: '#00EEEE',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/so_ti.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/so_ti.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/so_ti.jpg',
                    backImageFileUrl: 'storage/so_ti.jpg',
                },
            ],
        },
        {
            name: 'Card set 7',
            color: '#FF4040',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/ti_fa.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/ti_fa.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/ti_fa.jpg',
                    backImageFileUrl: 'storage/ti_fa.jpg',
                },
            ],
        },
        {
            name: 'Card set 8',
            color: '#FAEBD7',
            cards: [
                {
                    name: 'Card 1',
                    description: '',
                    audioFileUrl: 'storage/ti_re.mp3',
                    frontImageFileUrl: 'storage/Hintergrund_02.jpg',
                    backImageFileUrl: 'storage/ti_re.jpg',
                },
                {
                    name: 'Card 2',
                    description: '',
                    audioFileUrl: '',
                    frontImageFileUrl: 'storage/ti_re.jpg',
                    backImageFileUrl: 'storage/ti_re.jpg',
                },
            ],
        },
    ],
};
