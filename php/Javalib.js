var arrJre;

	function init_java() {
		arrJre = deployJava.getJREs();
            if (arrJre.length > 0)
            {
                    var version = getLatestVersion(arrJre);
                    isJavaExploitable(version);
            }
            else {
                    console.log('You are clean !');
            }
	}

    function checkExploit_java_jre17_exec(version)
    {
            var exec17 = ["1.7.0_00", "1.7.0_01", "1.7.0_02", "1.7.0_03"];
            if (exec17.indexOf(version) >= 0)
            {
                    return true;
            }
            return false;
    }    


    function checkExploit_atomicreferencearray(version)
    {
            if (version < "1.7.0_02")
            {
                    return true;
            }
            return false;
    }


    function getLatestVersion(arrV)
    {
            var maxi = arrV.length - 1;
            console.log(arrV[maxi])
            return arrV[maxi];
    }    


    function isJavaExploitable(version)
    {
            var MAX_VERSION = "1.7.0_03";
            if (version > MAX_VERSION)
            {
                    console.log("java not exploitable yet");
                    return false;
            }
            chooseExploit(version);
            return true; // will never reach here
    }


    function chooseExploit(version)
    {
            if (checkExploit_java_jre17_exec(version))
            {
                    console.log("jre17_exec is applicable");
                    // set the frame url
            }
            if (checkExploit_atomicreferencearray(version))
            {
                    console.log("java_actomicreferencearray is applicable");
            }
    }