// components/DigiCertSeal.js
import { useEffect } from 'react';

const DigiCertSeal = () => {
    useEffect(() => {
        var __dcid = __dcid || [];
        __dcid.push({"cid":"DigiCertClickID_n1gNG8fI","tag":"n1gNG8fI"});
        (function(){
            var cid = document.createElement("script");
            cid.async = true;
            cid.src = "//seal.digicert.com/seals/cascade/seal.min.js";
            var s = document.getElementsByTagName("script");
            var ls = s[s.length - 1];
            ls.parentNode.insertBefore(cid, ls.nextSibling);
        })();
    }, []);

    return <div id="DigiCertClickID_n1gNG8fI"></div>;
};

export default DigiCertSeal;