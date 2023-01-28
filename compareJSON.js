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

/*This code iterates through the keys in json2 and checks if the corresponding key in json1 is an object.
If it is, it checks if the "type" key in the object matches the current key in json2.
If it does, it uses the spread operator to merge the value of the matching key in json2 into the value
of the "type" key in json1. If the key in json1 is not an object or if the "type" key does not match, 
the function recursively calls itself with the value of the key in json1 and the current key in json2. 
Finally, the modified json1 is returned. */

function compareJSON(json1, json2, path = []) {
    for (let key in json2) {
        if (typeof json1 === "object") {
            for (let subKey in json1) {
                let newPath = [...path, subKey];
                if (subKey === "type" && json1[subKey] === key) {
                    console.log('This is '+(subKey === "type" && json1[subKey] === key)+':');
                    console.log(`Comparing json2.${key} (${key}) with json1.${newPath.join(".")} (${json1[subKey]})`);
                } else {
                    compareJSON(json1[subKey], { [key]: json2[key] }, newPath);
                }
            }
        } else {
            console.log('This is false:')
            console.log(`Comparing json2.${key} (${key}) with json1.${path.join(".")} (${json1})`);
        }
    }
}




compareJSON(json1, json2);
