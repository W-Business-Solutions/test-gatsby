import nwdecks from '../../images/franchise/services/nwdecks.jpg';
import nwfirepit from '../../images/franchise/services/nwfirepit.jpg';
import sunroom from '../../images/franchise/services/sunroom.jpg';
import nwpatiocover from '../../images/franchise/services/nwpatiocover.jpg';
import nesnow from '../../images/franchise/services/nesnow.jpg';
import nwkitchen from '../../images/franchise/services/nwkitchen.jpg';
import wdeck from '../../images/franchise/services/wdeck.jpg';
import wkitchen from '../../images/franchise/services/wkitchen.jpg';
import wpool from '../../images/franchise/services/wpool.jpg';
import nekitchen from '../../images/franchise/services/nekitchen.jpg';
import neinterior from '../../images/franchise/services/neinterior.jpg';
import spool from '../../images/franchise/services/spool.jpg';
import spatio from '../../images/franchise/services/spatio.jpg';
import swkitchen from '../../images/franchise/services/swkitchen.jpg';
import mwpatio from '../../images/franchise/services/mwpatio.jpg';
import mwpool from '../../images/franchise/services/mwpool.jpg';
import mwdeck from '../../images/franchise/services/mwdeck.jpg';

const regionalServices = {
    northwest: {
        services: ['PATIO COVERS', 'FIREPITS', 'DECKS', 'OUTDOOR KITCHENS'],
        images: [nwpatiocover, nwfirepit, nwdecks, nwkitchen]
    },
    central: {
        services: ['PATIO COVERS', 'FIREPITS', 'DECKS', 'OUTDOOR KITCHENS'],
        images: [nwpatiocover, nwfirepit, nwdecks, nwkitchen]
    },
    west: {
        services: ['POOLS', 'DECKS', 'FIREPITS', 'OUTDOOR KITCHENS'],
        images: [wpool, wdeck, nwfirepit, wkitchen]
    },
    east: {
        services: [
            'OUTDOOR KITCHENS',
            'SNOW REMOVAL',
            'INTERIOR REMODEL',
            'SUNROOMS'
        ],
        images: [nekitchen, nesnow, neinterior, sunroom]
    },
    midwest: {
        services: ['SUNROOMS', 'POOLS', 'PATIOS', 'DECKS'],
        images: [sunroom, mwpool, mwpatio, mwdeck]
    },
    southwest: {
        services: ['OUTDOOR KITCHENS', 'SUNROOMS', 'PATIOS', 'POOLS'],
        images: [swkitchen, sunroom, spatio, spool]
    }
};

export default regionalServices;
