import { NavLink, Outlet } from "react-router-dom";
import { PopUp4 } from "../../../PopUP/PopUp4";



export const Settings = () => {
return (
  
  <div>
  
    <div className="bg-[#091928] min-h-screen flex flex-col justify-between text-white p-4 md:p-8">
    
      <div className="relative flex-1">
        <Outlet />
      
      </div>
      <div>
      <PopUp4/>
      </div>
      <div>
      
      <h1 className="text-left text-2xl md:text-3xl font-semibold mb-6">Paramètres</h1>
      
      </div>
      
      <div className="">
      
      <div className="flex items-center space-x-3" >
    
      <svg className=" " width="30" height="100" viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="100" fill="url(#pattern0_123_1522)"/>
      <defs>
      <pattern id="pattern0_123_1522" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use href="#image0_123_1522" transform="matrix(0.01 0 0 0.003 0 0.35)"/>
      </pattern>
      <image id="image0_123_1522" width="100" height="100" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKtUlEQVR4nO1deaxeRRUfVFwqKrhXBXeNS9S4FrcYJeBWl5iauFZFsOpfpiSYGEFSKVWDWnDBqGiqSKwgf5CKSvA18vr6fXN+832P188qlVah5lkKXcBCW7pcc3in5PH6fTNz753l3sJJTtK8znfnnHvuzJw558xvlGo4dbvdp2it36y1/hyAFUT0eyJaD2AKwGYi2klE+4V38t/4/7gNt+XfGGM+a4w5lZ+VW5/W0fr1658BYBER/QTAFgBFYJ4GsNoYczaAU3Lr20jSWr8UwDcB/COCAaxMRBsBLOt2uy9RD2WamJh4MoAvA+ikNgJGG4enwi+xbOohNiWtAHBPbgNgtGH28ZTZ6XSeo45V6vf7zwOwEsDe3C8c/obZD2BVr9d7sTpWaHx8/AkALgZwIPcLRnW+j4i+PRgMTlBtJvGW/hPhy90l7m0PwI1E9Edm/rf8bbO0CW2YrVrrj6i2kdb6ZAB/CvACDgLQPMKI6EwAb+31ek/zlYPbAngbgM/LM0ieWfeDuK416wuA9wO4s+Y+YaUxZiGAJ4WWr9/vn6i1/gCASwH8t4acd2it36OaSmNjY48iom8Q0aEKyu2VzdpCAMenkrkoikdorU/jhZuI/ldhpBwWRyWZzGWmhnUVDMEj6bypqamTGrIvOh/Ajgp68Nr1VNUgd/bmkgpsA7C0iV7LYDA4AcA5RHR7SZ3+nj0U0+v1Xs6eR4khztPZqjYE+fr9/okyHZVxAqZ7vd6rswgMYIFEV32F7QJ4rWoZGWNeL96Zr5485b0pqZBa61f6GkNGxbLVq1c/MkTfmzZtegwbVjylRcwcWucvWsV1WJaXcFh2dLvdV6hUa0aJzd429mLq9jkYDB7NOQ0Af+Zd84i+eGpZy2tTmb1KGQJwRom1ZWv0NUW8Ka8FXIb5/Lp9Avho2d2+uLBLi6I4TgUmY8yzAJgSC30c74t97RKu7fUcwwowNV1RxhBDDPMDFYE6nc4TiegGTxn+ylNecCGI6DueAvyWp5g6fY2NjT0WwFgdY8xiTvVOE9F2CcNcxNNu3fchH8xqTxkuUqHDIbIrdRqDd791+iqK4rgSilblvUS0pO57YV19ZGVnwBjzbhWCOIjGcRuPTm/gr6Zuf0S0JLIxZsv8lbry8mzgE0jlEdrv958dYnT4dEZ11wzpaz6A3QkNwl/uqSHWFM+Ffk3dF7TIMwxS25uS/r6byhizjIIQ3hh//bJOufr8cKUO+It3uZv8hYXYZxwJ7hHRntQGEX5nCB14nfDYPN46OTn5+NIPl7SrS5FlIRSR/r6YyRjMV4TSg3f0Hv2tKPVQrfULPHLg3VDhECYA47kMwmGgUHsFCbOQq3jCGPNc74dK1aBNiYMhA4WcD6mY2CoCGuWNofTRWr/BpQ8R/dDbzeW6JIcCl6iABOBDOY2BmRf0hcA6Xebobx+HYZwPIqLvO4TfFjqySkQX5jYIgJURMpCu/dvF1odw4sijonCpCkwAftcAg1wTWi8iOtcxSvZY09dc1+oQ+s4YadeSCaAiEq+LFIS05o2sIRyPwuevhxZa+i2bky9CM38TMXQjogsqfQhyJMD2w3tiVYcAuC23QQBsiKGbrCX3Wj6Ew0Nrh+V8RpLN01ySMxpF5hGyKZZ+AK509H3BsB9ZD8sECx8PIU7i5DYIgKmI+r3XYZC/HRUYcwg7HXJXPpcA/LwBBvlLLP149y5B2FEGOfygAK0x5pMpffS5JMXQRU7m5FpMHTmd7JDh47MbX25rzCU3MYXtdDrP98lIIi7bN2nxoxE/e6AxEf3bEbcKXoU+RODrMxvkEzH184jXbZm9O7cJqlVkkjz6lTkNYox5XWw9Z/a/o2W4f1vBh/JzDmUmAO9rwBpyeWw9ieh7DjkWKKkItAl6ZgJBfZI6RWS+LbaeAM5yyLCYG33LYZC3xBbUI7xQJOC9sfU0xrzd8a6Xs0GusTWKVSebq/QHo1/GnkRn9G0yXM0vY8LSYJdKQDx3NsAg2xPpepdFjnFusMHS4JYUQspO9u7MRhlLoSsR/cvyUdzkajCZQkgR9OrMBjk/kZ43WWTYohxHmG9MIaQI+sGM0xVXML4ohZ6O6po7lOB5jBL0uhRCiqDHcwg8k0F+lUpPfqcWOfZZDQLgDyoh6ZljaqmNsTNUKawP8Tu1GsQ2ZXGeIpWgswQ+z3JsLTQfSI3GIGfarVPWyEWdgVxSCnuEAJyeYGQcShGFmEvsKLkWdZvbe7PKQJhZT3a1Of9h0e0Wl9s7cmPIm5gcQjMB+E3kUXKWSkwc1XZgqowrgVIdKfjk5OTTVQYiRx66Jt8V4oBRxQNJNrmuUoJ/OLJRiBNGNb6mjZEMEj2lMIwEu8s2jS53ht+11p/KIbxnuLo089qUC2tFwKBt8i12Jqi4+FplosHMgcrQWL7n5NJHQNNssi1wpnBjlVj6ktb6tIAFECYn2JgjjjWTwpWGtr3IgRwLYIXjdS7ey3BSKhN5FDlsLlOodkYuRZgAzAuwdnxNZSSPsNBPH2jMJTCOxpflVGZsJl9SGfdXprysaG9cd+WQ8WNzEW5sjbdHAVApcWYP9UbIvSojiXOyw/bBdLvdZz7oRwIlNFKpUOfRqxAceX+fERIE1qIedK5NxsGwHy1z/OiXOZShQBUpnPOIgZ8VIgzE8LpH/Yjvz3D8aN9RwyqeAvOI6B118bKG8JrUIJUC3nOfbfSOzFbK/RnlDpYEIIY54hANZsI4nQT5kK1E9Gs+Cg3ghSoiMYh/5bONrkOfjDc4MTHxuFDCcpRAQApGnp1AAuYNG08bDO6pwt8MsbvyoU85D2c9Fs1HfesKyThVfGoopxEwWr/1HN+rBBAzPPtZ/Vi0Z0Hw3VyBV9EQ51aE8i4yMBe0ragKksBbCRe6EcMm+uI+uaA1LvUVjI/C8VRYEnS5aAqL3F8tiyNJRL/wuIBgfhCcDll0neAz3W73Na4zEW1hItrInl8J1O9DoT7q+4+YeXg6G2wYi5LLaM19U/AzymH2mmxRC157XEAIUnp1Smh3bSgQlyB1/jj3y0NcXjsKIBnAjzwMe6GqeG2DC2Hh4OyQiqRdXVhbxwQT0eTczKMPnK6c55ynqhBfgOUh3I4jmyvGQsn9opCWzZGXa4x5mQ+iKtcwq1i1qLN4IKGOVBWHRYP4Eh4pRPRPD2Ncq1IBKYe4/QwtZJmiNni0u90LQc6HuP41NyYiWszy7k5XIclVv/UwIwmc7tw0qq1y+2HG0HewNlq2VRav7NhWaAlzADX6VeCyyN+aW1k0nBmmvRRYcoDr8toStS0y8G5jzKtUSuKr4R42Cppxbd6ckdIEAMuiITydfGTMJanpmmrAyyhysjg7ea9ePUIc+WwIkGWRiddG96YSX9/dSqamXt89m4wx76p5cXzREm72BfdDYGfXHMMj49pggcKUZIxZ6Dh70rrNHhF9WrWZJMe8wgHh0Wgmov1yx0m1TF8TiV1CWQBHAtOjYSwf0arY5aZZic+9szfmQFYrMhuCC9xW5jzCkOvM3ZISN1AXCVzYdSxTrGs5WkN8f4acAxlkMMYGHrGpAMxaOaUBWMTlRJEKsqf5hmdjzNla65Nz69s6mpqaOklQSz/D0BOCzTguMEebOboqXhAvwBxp3Sz/x1B6VwlI82KOwLZhKvo/Wjitg/eYr2EAAAAASUVORK5CYII="/>
      </defs>
      </svg> 
      <h2 className="text-left text-xl md:text-2xl font-medium mb-2"> Personnel</h2>
      
        </div>
        <div className="flex-col mb-6 ">
        <div className="mb-3">
        <NavLink to="/Parametre_compte" className="hover:text-gray-200 text-base md:text-lg mt-1">
          Compte
        </NavLink>
        </div>
        <NavLink to="/PageConsentement" className="hover:text-gray-200 text-base md:text-lg mt-2">
          Consentement et confidentialité
        </NavLink>
      </div>
      </div>
      
    
      <div className="flex items-center space-x-3">
        
    <svg className="" width="30" height="100" viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="30" height="100" fill="url(#pattern0_123_1523)"/>
    <defs>
    <pattern id="pattern0_123_1523" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use href="#image0_123_1523" transform="matrix(0.01 0 0 0.003 0 0.35)"/>
    </pattern>
    <image id="image0_123_1523" width="100" height="100" href="data:image/png;base64,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"/>
    </defs>
    </svg>
    <h3 className="text-left text-xl md:text-2xl font-medium mb-2">Alarme</h3>
    </div>
    <div className="flex flex-col mb-6 ">

        <NavLink to="/Parametre_Vibration" className="hover:text-gray-200 text-base md:text-lg mt-1">
          Vibration
        </NavLink>
        <NavLink to="/Parametre_microphone" className="hover:text-gray-200 text-base md:text-lg mt-2">
          Microphone
        </NavLink>
        </div>
      
      
      <div className="flex items-center space-x-3">
        <svg className="" width="30" height="100" viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="100" fill="url(#pattern0_123_1524)"/>
        <defs>
        <pattern id="pattern0_123_1524" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_123_1524" transform="matrix(0.01 0 0 0.003 0 0.35)"/>
        </pattern>
        <image id="image0_123_1524" width="100" height="100" href="data:image/png;base64,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"/>
        </defs>
        </svg>
        <h4 className="text-left text-xl md:text-2xl font-medium mb-2">Notifications et rappels</h4>
        </div>
        <div className="flex flex-col mb-6">
        <NavLink to="/Parametre_Rappel" className="hover:text-gray-200 text-base md:text-lg mt-1">
          Rappel pour le coucher
        </NavLink>
        <NavLink to="/Parametre_notifications" className="hover:text-gray-200 text-base md:text-lg mt-2">
          Préférences de notifications
        </NavLink>
        </div>
      

      <div className="flex items-center space-x-3">
      <svg className="" width="30" height="100" viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="100" fill="url(#pattern0_123_1525)"/>
        <defs>
        <pattern id="pattern0_123_1525" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_123_1525" transform="matrix(0.01 0 0 0.003 0 0.35)"/>
        </pattern>
        <image id="image0_123_1525" width="100" height="100" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkklEQVR4nO2dzWoUQRSFS91F8D2CuBP8w7XoQlfzIOJC3PiHiE8R17Y+yEyf0zALFV/DhW4MXmnSyBh0Mh061qmu88FZpUlP3S+3b1d3QlIyxhhjjDHGmBnQNM0FkrcBvADwlmSTOwAephpp2/Y+yS8kQy0AnqdaiIhzAF7nLjot5QiST3IXm7vnTZozJK+QPBQodFjKkZAPAgUOX75SSuv1+iLJ77mLS3fK78vVdYGihqUMAHiwQzFy7D2+VnlLTHJx0mIzfa6PVd59zUxIFC9lhkKiaCkzFRLFSpmxkChSysyFRHFSKhASRUmpREgUI6UiIVGElMqEhLyUCoWEtJRKhYSslIqFhKSUyoWEnBQLoZYUC6FWp1gINy9fd3L7sBD+IWSR24eF0ELU7rLcIbvQ/3J1P2gnjoUoYSFiWIgYFiKGhYhhIWJYiBgWIoaFiGEhYliIGBYiRjVChr94ii1pNo9frVaXz+BJbbPD57QQWog75F+4Q+hL1mg8Q+ihvvJQd4f0eIbQMyTLDOm67sbwfRZ/S//1zeOXy+WlbcefJsfPUfU+pBRoIVpYiBgWIoaFiGEhYliIGNUIOWkfwlOk36uMOYf3IeNeUMXY9M+7Rp7DL6gspNzH7+EOsZB6h7o7ZEIshO4Q+i7LHVLVDCkFWogWFiKGhYhhIWJYiBgWIoaFiFGEEOF/edScQbaus6+Fwk/NtakfnbPQdF13VUHIHslvuYvB/OlrsJcUIPleoCCRMwDeJRW6rtsn+SN3UZgvh8ff4WcHwGOBwkSmPEqKkHwF4KdAgeJ/ZFjry6QMgHsAPlcg41PbtndTCUTEeQC3SD4DcCCwf2imyLCWp23b3uzXmLvOxhhjjDHGGJMm4Bdl/DoU+Vv3igAAAABJRU5ErkJggg=="/>
        </defs>
        </svg>
        <NavLink to="/Parametre_documentations" className="hover:text-gray-200 text-base md:text-lg mt-1">
          <h5 className="text-left text-xl md:text-2xl font-medium mb-2">Documentations</h5>
        </NavLink>
      </div>

      <div className="flex items-center space-x-3">
      <svg className="" width="30" height="100" viewBox="0 0 30 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="100" fill="url(#pattern0_139_831)"/>
        <defs>
        <pattern id="pattern0_139_831" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use href="#image0_139_831" transform="matrix(0.01 0 0 0.003 0 0.35)"/>
        </pattern>
        <image id="image0_139_831" width="100" height="100" href="data:image/png;base64,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"/>
        </defs>
        </svg>
        <NavLink to="/Parametre_conseil" className="hover:text-gray-200 text-base md:text-lg mt-1">
        
          <h6 className="text-left text-xl md:text-2xl font-medium mb-2">Conseil</h6>
        </NavLink>
      </div>
    </div>
    </div>
);
};
