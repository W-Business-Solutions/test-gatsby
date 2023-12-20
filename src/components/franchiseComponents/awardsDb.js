import asm from '../../images/awards/asm.jpeg';
import cai from '../../images/awards/cai.png';
import veteran from '../../images/awards/veteran.png';
import westplains from '../../images/awards/westplains.png';
import torch from '../../images/awards/torch.png';
import homeadvisor from '../../images/awards/homeadvisor.png';
import bbb from '../../images/awards/bbb.png';
import disabled from '../../images/awards/disabled.jpeg';
import ussbchamberlogo from '../../images/awards/ussbchamberlogo.jpg';
import bbb2 from '../../images/awards/bbb2.png';
import sima from '../../images/awards/sima.jpg';
import wmbe from '../../images/awards/wmbe.jpg';

let awardsDb = {
    spokane: [
        asm,
        disabled,
        cai,
        veteran,
        westplains,
        homeadvisor,
        ussbchamberlogo
    ],
    norfolk: [torch, homeadvisor, bbb],
    monroe: [torch, bbb2, sima, cai, wmbe]
};

export default awardsDb;
