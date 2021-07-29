
// NextJs and typescript doesn't allow
// template strings or VARIABLES :(, so this is my work around for now.
const getCryptoPng = async (tickerName: string) => {
  let icon;
  try{
    console.log(`inside the TRY just before SWITCH (${tickerName})`)
    switch (tickerName) {
      case "ada":
        icon = (await import(`cryptocurrency-icons/128/color/ada.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "btc":
        icon = (await import(`cryptocurrency-icons/128/color/btc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "eth":
        icon = (await import(`cryptocurrency-icons/128/color/eth.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "ltc":
        icon = (await import(`cryptocurrency-icons/128/color/ltc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "rly":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "uma":
        icon = (await import(`cryptocurrency-icons/128/color/uma.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "bnt":
        icon = (await import(`cryptocurrency-icons/128/color/bnt.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "amp":
        icon = (await import(`cryptocurrency-icons/128/color/amp.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "mkr":
        icon = (await import(`cryptocurrency-icons/128/color/mkr.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "uni":
        icon = (await import(`cryptocurrency-icons/128/color/uni.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "1inch":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "aave":
        icon = (await import(`cryptocurrency-icons/128/color/aave.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "algo":
        icon = (await import(`cryptocurrency-icons/128/color/algo.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "ankr":
        icon = (await import(`cryptocurrency-icons/128/color/ankr.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "atom":
        icon = (await import(`cryptocurrency-icons/128/color/atom.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "bal":
        icon = (await import(`cryptocurrency-icons/128/color/bal.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "band":
        icon = (await import(`cryptocurrency-icons/128/color/band.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "bat":
        icon = (await import(`cryptocurrency-icons/128/color/bat.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "bch":
        icon = (await import(`cryptocurrency-icons/128/color/bch.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "bond":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "cgld":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "chz":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "clv":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "comp":
        icon = (await import(`cryptocurrency-icons/128/color/comp.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "crv":
        icon = (await import(`cryptocurrency-icons/128/color/crv.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "ctsi":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "dai":
        icon = (await import(`cryptocurrency-icons/128/color/dai.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "dash":
        icon = (await import(`cryptocurrency-icons/128/color/dash.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "doge":
        icon = (await import(`cryptocurrency-icons/128/color/doge.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "dot":
        icon = (await import(`cryptocurrency-icons/128/color/dot.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "enj":
        icon = (await import(`cryptocurrency-icons/128/color/enj.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "eos":
        icon = (await import(`cryptocurrency-icons/128/color/eos.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "etc":
        icon = (await import(`cryptocurrency-icons/128/color/etc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "fil":
        icon = (await import(`cryptocurrency-icons/128/color/fil.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "forth":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "grt":
        icon = (await import(`cryptocurrency-icons/128/color/grt.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "gtc":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "icp":
        icon = (await import(`cryptocurrency-icons/128/color/icp.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "keep":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "knc":
        icon = (await import(`cryptocurrency-icons/128/color/knc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "link":
        icon = (await import(`cryptocurrency-icons/128/color/link.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "lpt":
        icon = (await import(`cryptocurrency-icons/128/color/lpt.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "lrc":
        icon = (await import(`cryptocurrency-icons/128/color/lrc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "mana":
        icon = (await import(`cryptocurrency-icons/128/color/mana.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "mask":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "matic":
        icon = (await import(`cryptocurrency-icons/128/color/matic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "mir":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "mln":
        icon = (await import(`cryptocurrency-icons/128/color/mln.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "nkn":
        icon = (await import(`cryptocurrency-icons/128/color/nkn.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "nmr":
        icon = (await import(`cryptocurrency-icons/128/color/nmr.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "nu":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "ogn":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "omg":
        icon = (await import(`cryptocurrency-icons/128/color/omg.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "oxt":
        icon = (await import(`cryptocurrency-icons/128/color/oxt.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "qnt":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "ren":
        icon = (await import(`cryptocurrency-icons/128/color/ren.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "rep":
        icon = (await import(`cryptocurrency-icons/128/color/repv2.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "rlc":
        icon = (await import(`cryptocurrency-icons/128/color/rlc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "skl":
        icon = (await import(`cryptocurrency-icons/128/color/skl.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "snx":
        icon = (await import(`cryptocurrency-icons/128/color/snx.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "sol":
        icon = (await import(`cryptocurrency-icons/128/color/sol.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "storj":
        icon = (await import(`cryptocurrency-icons/128/color/storj.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "sushi":
        icon = (await import(`cryptocurrency-icons/128/color/sushi.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "trb":
        icon = (await import(`cryptocurrency-icons/128/color/generic.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "uma":
        icon = (await import(`cryptocurrency-icons/128/color/uma.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "usdt":
        icon = (await import(`cryptocurrency-icons/128/color/usdt.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "wbtc":
        icon = (await import(`cryptocurrency-icons/128/color/wbtc.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "xlm":
        icon = (await import(`cryptocurrency-icons/128/color/xlm.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "xtz":
        icon = (await import(`cryptocurrency-icons/128/color/xtz.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "yfi":
        icon = (await import(`cryptocurrency-icons/128/color/yfi.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "zec":
        icon = (await import(`cryptocurrency-icons/128/color/zec.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      case "zrx":
        icon = (await import(`cryptocurrency-icons/128/color/zrx.png`)).default
        console.table(icon);
        console.log(`returning ${tickerName} icon`);
        return icon;
      default:
        icon = "generic"
        break;
    }
  } catch (err) {
    console.error("lmao"); 
    return "generic";
  }
  console.log("falling back..........")
};

export default getCryptoPng;