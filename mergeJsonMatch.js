
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
  const json3 = {
      "ST_Tilt": {
          "CANID": {
              "atribdisplay": "{attribute 'displaymode' := 'hex'}",
              "type": "UDINT"
          },
          "Length": {
              "atribdisplay": "{attribute 'displaymode':='hex'}",
              "type": "UINT"
          },
          "ReadValue": {
              "type": "BOOL"
          },
          "SensorValueRAW": {
              "type": "UDINT"
          },
          "SpeedValueRAW": {
              "type": "DINT"
          },
          "SensorValueDegrees": {
              "type": "REAL"
          },
          "SensorValueDegreesNormalized": {
              "type": "REAL",
              "comment": "Only for tilt"
          },
          "SerialNumber": {
              "atribdisplay": "{attribute 'displaymode':='hex'}",
              "type": "UDINT"
          },
          "StepsPerRev": {
              "type": "UDINT"
          },
          "TotalResolution": {
              "type": "UDINT"
          },
          "ErrorID": {
              "atribdisplay": "{attribute 'displaymode':='hex'}",
              "type": "UDINT"
          },
          "RotationSpeed": {
              "type": "REAL",
              "comment": "Rotation speed in deg/sec"
          },
          "WriteStatus": {
              "type": "ST_TiltRotStatus"
          },
          "ReadStatus": {
              "type": "ST_TiltRotStatus"
          },
          "Calibrate": {
              "type": "ST_TiltRotCalibrate"
          }
      }
  }
  
  const json4 = {
      "ST_TiltRotStatus": {
          "Bootup": {
              "type": "BOOL",
              "comment": "Only for reading"
          },
          "Operational": {
              "type": "BOOL"
          },
          "PreOperational": {
              "type": "BOOL"
          },
          "Stopped": {
              "type": "BOOL"
          },
          "Reset": {
              "type": "BOOL",
              "comment": "Only for writing"
          }
      }
  }
  
  const json34 = {
    "ST_Tilt": {
      "CANID": {
        "atribdisplay": "{attribute 'displaymode' := 'hex'}",
        "type": "UDINT"
      },
      "Length": {
        "atribdisplay": "{attribute 'displaymode':='hex'}",
        "type": "UINT"
      },
      "ReadValue": {
        "type": "BOOL"
      },
      "SensorValueRAW": {
        "type": "UDINT"
      },
      "SpeedValueRAW": {
        "type": "DINT"
      },
      "SensorValueDegrees": {
        "type": "REAL"
      },
      "SensorValueDegreesNormalized": {
        "type": "REAL",
        "comment": "Only for tilt"
      },
      "SerialNumber": {
        "atribdisplay": "{attribute 'displaymode':='hex'}",
        "type": "UDINT"
      },
      "StepsPerRev": {
        "type": "UDINT"
      },
      "TotalResolution": {
        "type": "UDINT"
      },
      "ErrorID": {
        "atribdisplay": "{attribute 'displaymode':='hex'}",
        "type": "UDINT"
      },
      "RotationSpeed": {
        "type": "REAL",
        "comment": "Rotation speed in deg/sec"
      },
      "WriteStatus": {
        "type": {
          "0": "S",
          "1": "T",
          "2": "_",
          "3": "T",
          "4": "i",
          "5": "l",
          "6": "t",
          "7": "R",
          "8": "o",
          "9": "t",
          "10": "S",
          "11": "t",
          "12": "a",
          "13": "t",
          "14": "u",
          "15": "s",
          "Bootup": {
            "type": "BOOL",
            "comment": "Only for reading"
          },
          "Operational": {
            "type": "BOOL"
          },
          "PreOperational": {
            "type": "BOOL"
          },
          "Stopped": {
            "type": "BOOL"
          },
          "Reset": {
            "type": "BOOL",
            "comment": "Only for writing"
          }
        }
      },
      "ReadStatus": {
        "type": {
          "0": "S",
          "1": "T",
          "2": "_",
          "3": "T",
          "4": "i",
          "5": "l",
          "6": "t",
          "7": "R",
          "8": "o",
          "9": "t",
          "10": "S",
          "11": "t",
          "12": "a",
          "13": "t",
          "14": "u",
          "15": "s",
          "Bootup": {
            "type": "BOOL",
            "comment": "Only for reading"
          },
          "Operational": {
            "type": "BOOL"
          },
          "PreOperational": {
            "type": "BOOL"
          },
          "Stopped": {
            "type": "BOOL"
          },
          "Reset": {
            "type": "BOOL",
            "comment": "Only for writing"
          }
        }
      },
      "Calibrate": {
        "type": "ST_TiltRotCalibrate"
      }
    }
  }
  
  const json5 = {
      "ST_DC2": {
          "CANBusState": {
              "type": "BOOL",
              "comment": "TRUE"
          },
          "Power": {
              "type": "BOOL",
              "comment": "TRUE"
          },
          "Lock": {
              "type": "BOOL",
              "comment": "TRUE"
          },
          "TMCurrent": {
              "type": "REAL",
              "comment": "TM current draw"
          },
          "LockCurrent": {
              "type": "REAL",
              "comment": "Lock current draw"
          },
          "TM": {
              "type": "ST_TM"
          },
          "CM": {
              "type": "ST_CM"
          },
          "TiltACW4": {
              "type": "ST_Tilt"
          },
          "RotationTCW4": {
              "type": "ST_Tilt"
          },
          "NMT": {
              "type": "ST_Tilt"
          },
          "Calibrated": {
              "type": "ST_Calibrated"
          },
          "dResetCalibrationSequence": {
              "type": "BOOL",
              "comment": "Reset all set-variables used in auto calibration"
          },
          "dStartAutoCalibration": {
              "type": "BOOL",
              "comment": "Enable to start autocalibrating tilt/rot sensors"
          },
          "dAutoCalibrationInProgress": {
              "type": "BOOL",
              "comment": "Deactivate other communication while doing automatic tilt/rot calibration"
          },
          "Unknown": {
              "type": "ARRAY [0..9] OF ST_UnknownID"
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
                      json1[subKey] = Object.assign({}, json2[key]);
                      console.log('------------- SUBKEY ------------- ');
                      console.log(json1[subKey] + '       '+ json2[key]);
                      console.log(Object.keys(json1[subKey]) + '       '+ Object.keys(json2[key]));
                  } else {
                      mergeJsonMatch(json1[subKey], { [key]: json2[key] });
                      console.log('-------------ELSE SUBKEY ------------- ');
                      console.log(Object.keys(json1[subKey]) + '       '+ Object.keys(json2[key]));
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
  