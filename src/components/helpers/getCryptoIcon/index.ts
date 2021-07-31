
// NextJs and typescript doesn't allow
// template strings or VARIABLES :(, so this is my work around for now.
import ADA from 'cryptocurrency-icons/32/color/ada.png';
import BTC from 'cryptocurrency-icons/32/color/btc.png';
import ETH from 'cryptocurrency-icons/32/color/eth.png';
import LTC from 'cryptocurrency-icons/32/color/ltc.png';
import UMA from 'cryptocurrency-icons/32/color/uma.png';
import BNT from 'cryptocurrency-icons/32/color/bnt.png';
import AMP from 'cryptocurrency-icons/32/color/amp.png';
import MKR from 'cryptocurrency-icons/32/color/mkr.png';
import UNI from 'cryptocurrency-icons/32/color/uni.png';
import AAVE from 'cryptocurrency-icons/32/color/aave.png';
import ALGO from 'cryptocurrency-icons/32/color/algo.png';
import ANKR from 'cryptocurrency-icons/32/color/ankr.png';
import ATOM from 'cryptocurrency-icons/32/color/atom.png';
import BAL from 'cryptocurrency-icons/32/color/bal.png';
import BAND from 'cryptocurrency-icons/32/color/band.png';
import BAT from 'cryptocurrency-icons/32/color/bat.png';
import BCH from 'cryptocurrency-icons/32/color/bch.png';
import COMP from 'cryptocurrency-icons/32/color/comp.png';
import CRV from 'cryptocurrency-icons/32/color/crv.png';
import DAI from 'cryptocurrency-icons/32/color/dai.png';
import DASH from 'cryptocurrency-icons/32/color/dash.png';
import DOGE from 'cryptocurrency-icons/32/color/doge.png';
import DOT from 'cryptocurrency-icons/32/color/dot.png';
import ENJ from 'cryptocurrency-icons/32/color/enj.png';
import EOS from 'cryptocurrency-icons/32/color/eos.png';
import ETC from 'cryptocurrency-icons/32/color/etc.png';
import FIL from 'cryptocurrency-icons/32/color/fil.png';
import GRT from 'cryptocurrency-icons/32/color/grt.png';
import ICP from 'cryptocurrency-icons/32/color/icp.png';
import KNC from 'cryptocurrency-icons/32/color/knc.png';
import LINK from 'cryptocurrency-icons/32/color/link.png';
import LPT from 'cryptocurrency-icons/32/color/lpt.png';
import LRC from 'cryptocurrency-icons/32/color/lrc.png';
import MANA from 'cryptocurrency-icons/32/color/mana.png';
import MATIC from 'cryptocurrency-icons/32/color/matic.png';
import MLN from 'cryptocurrency-icons/32/color/mln.png';
import NKN from 'cryptocurrency-icons/32/color/nkn.png';
import NMR from 'cryptocurrency-icons/32/color/nmr.png';
import OMG from 'cryptocurrency-icons/32/color/omg.png';
import OXT from 'cryptocurrency-icons/32/color/oxt.png';
import REN from 'cryptocurrency-icons/32/color/ren.png';
import REP from 'cryptocurrency-icons/32/color/rep.png';
import RLC from 'cryptocurrency-icons/32/color/rlc.png';
import SKL from 'cryptocurrency-icons/32/color/skl.png';
import SNX from 'cryptocurrency-icons/32/color/skl.png';
import SOL from 'cryptocurrency-icons/32/color/sol.png';
import STORJ from 'cryptocurrency-icons/32/color/storj.png';
import SUSHI from 'cryptocurrency-icons/32/color/sushi.png';
import USDT from 'cryptocurrency-icons/32/color/usdt.png';
import WBTC from 'cryptocurrency-icons/32/color/wbtc.png';
import XLM from 'cryptocurrency-icons/32/color/xlm.png';
import XTZ from 'cryptocurrency-icons/32/color/xtz.png';
import YFI from 'cryptocurrency-icons/32/color/yfi.png';
import ZEC from 'cryptocurrency-icons/32/color/zec.png';
import ZRX from 'cryptocurrency-icons/32/color/zrx.png';

import GENERIC from 'cryptocurrency-icons/32/color/generic.png';
// import
const getCryptoIcon = (tickerName: string) => {
  // let icon;
  try{
    console.log(`inside the TRY just before ICONS switch statement:  (${tickerName})`);
    switch (tickerName) {
      case "ada":
        return ADA;
      case "btc":
        return BTC;
      case "eth":
        return ETH;
      case "ltc":
        return LTC;
      case "rly":
        return GENERIC;
      case "uma":
        return UMA;
      case "bnt":
        return BNT;
      case "amp":
        return AMP;
      case "mkr":
        return MKR;
      case "uni":
        return UNI;
      case "1inch":
        return GENERIC;
      case "aave":
        return AAVE;
      case "algo":
        return ALGO;
      case "ankr":
        return ANKR;
      case "atom":
        return ATOM;
      case "bal":
        return BAL;
      case "band":
        return BAND;
      case "bat":
        return BAT;
      case "bch":
        return BCH;
      case "bond":
        return GENERIC;
      case "cgld":
        return GENERIC;
      case "chz":
        return GENERIC;
      case "clv":
        return GENERIC;
      case "comp":
        return COMP;
      case "crv":
        return CRV;
      case "ctsi":
        return GENERIC;
      case "dai":
        return DAI;
      case "dash":
        return DASH
      case "doge":
        return DOGE;
      case "dot":
        return DOT;
      case "enj":
        return ENJ;
      case "eos":
        return EOS;
      case "etc":
        return ETC;
      case "fil":
        return FIL;
      case "forth":
        return GENERIC;
      case "grt":
        return GRT;
      case "gtc":
        return GENERIC;
      case "icp":
        return ICP;
      case "keep":
        return GENERIC;
      case "knc":
        return KNC;
      case "link":
        return LINK;
      case "lpt":
        return LPT;
      case "lrc":
        return LRC;
      case "mana":
        return MANA;
      case "mask":
        return GENERIC;
      case "matic":
        return MATIC;
      case "mir":
        return GENERIC;
      case "mln":
        return MLN;
      case "nkn":
        return NKN;
      case "nmr":
        return NMR;
      case "nu":
        return GENERIC;
      case "ogn":
        return GENERIC;
      case "omg":
      return OMG;
      case "oxt":
        return OXT;
      case "qnt":
        return GENERIC;
      case "ren":
        return REN;
      case "rep":
        return REP;
      case "rlc":
        return RLC;
      case "skl":
        return SKL;
      case "snx":
        return SNX;
      case "sol":
        return SOL;
      case "storj":
        return STORJ;
      case "sushi":
        return SUSHI;
      case "trb":
        return GENERIC;
      case "uma":
        return UMA;
      case "usdt":
        return USDT;
      case "wbtc":
        return WBTC;
      case "xlm":
        return XLM;
      case "xtz":
        return XTZ;
      case "yfi":
        return YFI;
      case "zec":
        return ZEC;
      case "zrx":
        return ZRX;
      default:
        return GENERIC;
        break;
    }
  } catch (err) {
    // console.error("lmao"); 
    return GENERIC;
  }
};
  
export default getCryptoIcon;