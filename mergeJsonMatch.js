
const json1 = {
  "ST_TM": {
    "ISens": {
      "type": "ST_I_Sens"
    },
    "QSCSensors": {
      "type": "ST_QSC_Sensors"
    },
    "VersionInfo": {
      "type": "ST_VersionInfo"
    },
    "Alarms": {
      "type": "ST_Alarms"
    },
    "Tilt": {
      "type": "ST_TM_Setpoints_RW"
    },
    "Rotation": {
      "type": "ST_TM_Setpoints_RW"
    },
    "dSaveSettings": {
      "type": "BOOL"
    },
    "dSaveSettingsAck": {
      "type": "BOOL"
    }
  }
}

const json2 = {
  "ST_I_Sens": {
    "CANID": {
      "atribdisplay": "{attribute 'displaymode':='hex'}",
      "type": "UDINT",
      "comment": "Dec"
    },
    "ADCRotation": {
      "type": "INT",
      "comment": "Array[1] | Array[0]"
    },
    "ADCTilt": {
      "type": "INT",
      "comment": "Array[3] | Array[2]"
    },
    "ADCExtra1": {
      "type": "INT",
      "comment": "Array[5] | Array[4]"
    },
    "ADCExtra2": {
      "type": "INT",
      "comment": "Array[7] | Array[6]"
    }
  }
}

function loopDotNotation(json, parent = "") {
    for (let key in json) {
        if (typeof json[key] === "object" && json[key] !== null) {
            loopDotNotation(json[key], parent + key + ".");
        } else {
            console.log(parent + key);
        }
    }
}

console.log(loopDotNotation(json1));
console.log(loopDotNotation(json2));

function mergeJsonMatch(json1, json2) {
    for (let key in json2) {
        if (typeof json1 === "object") {
            for (let subKey in json1) {
                if (subKey === "type" && json1[subKey] === key) {
                    console.log('------------- IF TRUE ------------- ');
                    console.log(`Comparing json2.${key} with json1.${subKey}: ${JSON.stringify(json2[key])} === ${JSON.stringify(json1[subKey])}`);
                    console.log('------------- IF TRUE ------------- ');
                    json1[subKey] = {...json1[subKey], ...json2[key]};
                } else {
                    mergeJsonMatch(json1[subKey], { [key]: json2[key] });
//                    console.log('------------- ELSE ------------- ');
//                    console.log('json1[subKey] => '+ json1[subKey] + ' | key =>' + key + ' | json2[key] => ' + json2[key]);
//                    console.log('------------- ELSE ------------- ');
                }
            }
        } else {
//            console.log(`Comparing json2.${key} with json1: ${JSON.stringify(json2[key])} !== ${JSON.stringify(json1)}`);
        }
    }
    return json1;
}




let comparedResult = mergeJsonMatch(json1, json2);

console.log(comparedResult);
console.log(JSON.stringify(comparedResult));



loopDotNotation(comparedResult);
