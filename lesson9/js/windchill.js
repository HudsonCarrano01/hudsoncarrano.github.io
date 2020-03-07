// Function to use in nav menu
function windchill (tempF, speed) {
    let wdchill;
    if((tempF != null) & (speed != null)){
        wdchill = 35.74 + (0.6215 * tempF) - (35.75 * (speed ** 0.16)) + (0.4275 * tempF * (speed ** 0.16));
        wdchill = wdchill.toFixed(1);
        wdchill = Math.round(wdchill);
    }else{
        wdchill = 'N/A';
    }    
    return wdchill;
 }   