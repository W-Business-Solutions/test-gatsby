import wcommercial from '../../images/franchise/wcommercial.jpg';
import wmulti from '../../images/franchise/wmulti.jpg';
import wev from '../../images/franchise/wev.jpg';
import nwev from '../../newSrc/images/government/evCropped.jpg';
import nwcommercial from '../../images/franchise/commercial.jpg';
import nwmulti from '../../images/franchise/multifamily.jpeg';
import smulti from '../../images/franchise/smulti.jpg';

import mwcommercial from '../../images/franchise/mwcommercial.jpg';
import mwmulti from '../../images/franchise/mwmulti.jpg';
import mwev from '../../images/franchise/mwev.jpg';

import necommercial from '../../images/franchise/necommercial.jpg';
import nemulti from '../../images/franchise/nemulti.jpg';
import neev from '../../images/franchise/neev.jpg';

const regional = {
    west: [wcommercial, wmulti, wev],
    northwest: [nwcommercial, nwmulti, nwev],
    southwest: [wcommercial, smulti, wev],
    midwest: [mwcommercial, mwmulti, mwev],
    east: [necommercial, nemulti, neev],
    central: [nwcommercial, nwmulti, nwev]
};

export default regional;
