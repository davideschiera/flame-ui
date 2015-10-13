import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            avg: svFillData(avg),
            min: svFillData(min),
            max: svFillData(max)
        };
    }
});

function svFillData(tree) {
    var key, rem;

    for (key in tree) {
        svFillData(tree[key].ch);

        rem = tree[key].t;
        if (rem > 0) {
            tree[key].ch[''] = {
                'svSynthetic': true,
                't': rem,
                'svTotal': rem,
                'ch': {}
            };
        }
    }

    return tree;
}

var avg = {
  "":{
    "t":0,
    "ch":{
      "srvc_node1":{
        "t":2122973.5,
        "ch":{
          "req1":{
            "t":2952290.2,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "srvc_node5":{
                "t":262875.5,
                "exe":"python /src/us.py",
                "cont":"srvc_node5",
                "ch":{
                  "req0":{
                    "t":4327011.1,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node5",
                    "tt":19363922.7,
                    "c":1,
                    "ch":{
                      "srvc_node4":{
                        "t":619519.1,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":34770.9,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "tt":5962094.8,
                            "c":1,
                            "ch":{
                              "prepare":{
                                "t":1752537.6,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":1752537.6,
                                "c":1,
                                "ch":[]
                              },
                              "run":{
                                "t":3106559.5,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":3106559.5,
                                "c":1,
                                "ch":[]
                              },
                              "reduce":{
                                "t":1068226.8,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":1068226.8,
                                "c":1,
                                "ch":[]
                              }
                            }
                          },
                          "data_write":{
                            "t":8455297.7,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "tt":8455297.7,
                            "c":1,
                            "ch":[]
                          }
                        },
                        "tt":15036911.6,
                        "c":1,
                        "logs":[{
                            "t":"16:09:36.198634906",
                            "tid":33494,
                            "tl":198634906,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.347598152",
                            "tid":33494,
                            "tl":347598152,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.497346821",
                            "tid":33494,
                            "tl":497346821,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.660336892",
                            "tid":33494,
                            "tl":660336892,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.819350497",
                            "tid":33494,
                            "tl":819350497,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:37.036836790",
                            "tid":33494,
                            "tl":36836790,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.269267282",
                            "tid":33494,
                            "tl":269267282,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.445992161",
                            "tid":33494,
                            "tl":445992161,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.657455025",
                            "tid":33494,
                            "tl":657455025,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.840751317",
                            "tid":33494,
                            "tl":840751317,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    }
                  },
                  "req1":{
                    "t":1200271.6,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node5",
                    "tt":7116825.4,
                    "c":1,
                    "ch":{
                      "srvc_node3":{
                        "t":408021.3,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":5508532.5,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "tt":5508532.5,
                            "c":1,
                            "ch":[]
                          }
                        },
                        "tt":5916553.8,
                        "c":1,
                        "logs":[{
                            "t":"16:09:36.203118647",
                            "tid":33545,
                            "tl":203118647,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.366374325",
                            "tid":33545,
                            "tl":366374325,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.505069166",
                            "tid":33545,
                            "tl":505069166,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.665470173",
                            "tid":33545,
                            "tl":665470173,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.836635616",
                            "tid":33545,
                            "tl":836635616,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:37.066982448",
                            "tid":33545,
                            "tl":66982448,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.302146553",
                            "tid":33545,
                            "tl":302146553,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.459366601",
                            "tid":33545,
                            "tl":459366601,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.676147724",
                            "tid":33545,
                            "tl":676147724,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.854587821",
                            "tid":33545,
                            "tl":854587821,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    }
                  }
                },
                "tt":26743623.6,
                "c":1,
                "logs":[{
                    "t":"16:09:36.197538538",
                    "tid":33644,
                    "tl":197538538,
                    "b":"received connection.",
                    "th":1443395376
                  },{
                    "t":"16:09:36.347247998",
                    "tid":33644,
                    "tl":347247998,
                    "b":"sent:1:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35918).sent:1:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.496785481",
                    "tid":33644,
                    "tl":496785481,
                    "b":"sent:2:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35925).sent:2:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.659903249",
                    "tid":33644,
                    "tl":659903249,
                    "b":"sent:3:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35932).sent:3:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.818701424",
                    "tid":33644,
                    "tl":818701424,
                    "b":"sent:4:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35939).sent:4:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:37.035193574",
                    "tid":33644,
                    "tl":35193574,
                    "b":"sent:5:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35946).sent:5:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.268774698",
                    "tid":33644,
                    "tl":268774698,
                    "b":"sent:6:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35953).sent:6:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.444914669",
                    "tid":33644,
                    "tl":444914669,
                    "b":"sent:7:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35960).sent:7:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.646509752",
                    "tid":33644,
                    "tl":646509752,
                    "b":"sent:8:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35972).sent:8:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.816482059",
                    "tid":33644,
                    "tl":816482059,
                    "b":"sent:9:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35986).sent:9:srvc_node1",
                    "th":1443395377
                  }]
              }
            },
            "tt":29695913.8,
            "c":1,
            "logs":[{
                "t":"16:09:36.197230388",
                "tid":33693,
                "tl":197230388,
                "b":"Sending request to srvc_next1",
                "th":1443395376
              },{
                "t":"16:09:36.197241147",
                "tid":33693,
                "tl":197241147,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.347111458",
                "tid":33693,
                "tl":347111458,
                "b":"Sending request to srvc_next1",
                "th":1443395376
              },{
                "t":"16:09:36.347121550",
                "tid":33693,
                "tl":347121550,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.496587176",
                "tid":33693,
                "tl":496587176,
                "b":"Sending request to srvc_next1",
                "th":1443395376
              },{
                "t":"16:09:36.496606529",
                "tid":33693,
                "tl":496606529,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.659778409",
                "tid":33693,
                "tl":659778409,
                "b":"Sending request to srvc_next1",
                "th":1443395376
              },{
                "t":"16:09:36.659786376",
                "tid":33693,
                "tl":659786376,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.794733906",
                "tid":33693,
                "tl":794733906,
                "b":"Sending request to srvc_next1",
                "th":1443395376
              },{
                "t":"16:09:36.794737238",
                "tid":33693,
                "tl":794737238,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:37.034700222",
                "tid":33693,
                "tl":34700222,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.034791254",
                "tid":33693,
                "tl":34791254,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.268486283",
                "tid":33693,
                "tl":268486283,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.268590219",
                "tid":33693,
                "tl":268590219,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.444434480",
                "tid":33693,
                "tl":444434480,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.444461064",
                "tid":33693,
                "tl":444461064,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.646020900",
                "tid":33693,
                "tl":646020900,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.646096951",
                "tid":33693,
                "tl":646096951,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.816213370",
                "tid":33693,
                "tl":816213370,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.816231235",
                "tid":33693,
                "tl":816231235,
                "b":"warn: ciao",
                "th":1443395377
              }]
          },
          "req0":{
            "t":642864.3,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "srvc_node2":{
                "t":335033.9,
                "exe":"python /src/us.py",
                "cont":"srvc_node2",
                "ch":{
                  "req1":{
                    "t":2510422.3,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "tt":17014528.7,
                    "c":1,
                    "ch":{
                      "srvc_node3":{
                        "t":398619.7,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":14105486.7,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "tt":14105486.7,
                            "c":1,
                            "ch":[]
                          }
                        },
                        "tt":14504106.4,
                        "c":1,
                        "logs":[{
                            "t":"16:09:36.191247804",
                            "tid":33545,
                            "tl":191247804,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.341308947",
                            "tid":33545,
                            "tl":341308947,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.490919351",
                            "tid":33545,
                            "tl":490919351,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.623110216",
                            "tid":33545,
                            "tl":623110216,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.785453489",
                            "tid":33545,
                            "tl":785453489,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.980059330",
                            "tid":33545,
                            "tl":980059330,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:37.220252027",
                            "tid":33545,
                            "tl":220252027,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.431854694",
                            "tid":33545,
                            "tl":431854694,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.587319877",
                            "tid":33545,
                            "tl":587319877,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.802801763",
                            "tid":33545,
                            "tl":802801763,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    }
                  },
                  "req0":{
                    "t":1378143,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "tt":11680880.7,
                    "c":1,
                    "ch":{
                      "srvc_node4":{
                        "t":465507.5,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":43206.8,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "tt":5866024.3,
                            "c":1,
                            "ch":{
                              "prepare":{
                                "t":1598572.3,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":1598572.3,
                                "c":1,
                                "ch":[]
                              },
                              "run":{
                                "t":2931361.7,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":2931361.7,
                                "c":1,
                                "ch":[]
                              },
                              "reduce":{
                                "t":1292883.5,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":1292883.5,
                                "c":1,
                                "ch":[]
                              }
                            }
                          },
                          "data_write":{
                            "t":3971205.9,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "tt":3971205.9,
                            "c":1,
                            "ch":[]
                          }
                        },
                        "tt":10302737.7,
                        "c":1,
                        "logs":[{
                            "t":"16:09:36.184230289",
                            "tid":33494,
                            "tl":184230289,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.333927269",
                            "tid":33494,
                            "tl":333927269,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.479724527",
                            "tid":33494,
                            "tl":479724527,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.612055778",
                            "tid":33494,
                            "tl":612055778,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.777067140",
                            "tid":33494,
                            "tl":777067140,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.956927519",
                            "tid":33494,
                            "tl":956927519,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:37.190552515",
                            "tid":33494,
                            "tl":190552515,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.419163804",
                            "tid":33494,
                            "tl":419163804,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.576345021",
                            "tid":33494,
                            "tl":576345021,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.792870999",
                            "tid":33494,
                            "tl":792870999,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    }
                  },
                  "req2":{
                    "t":4815389,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "tt":8991972,
                    "c":1,
                    "ch":{
                      "srvc_node6":{
                        "t":388698,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":{
                          "processing":{
                            "t":32661.2,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node6",
                            "tt":3787885,
                            "c":1,
                            "ch":{
                              "prepare":{
                                "t":976122.2,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "tt":976122.2,
                                "c":1,
                                "ch":[]
                              },
                              "run":{
                                "t":2148489.8,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "tt":2148489.8,
                                "c":1,
                                "ch":[]
                              },
                              "reduce":{
                                "t":630611.8,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "tt":630611.8,
                                "c":1,
                                "ch":[]
                              }
                            }
                          }
                        },
                        "tt":4176583,
                        "c":1,
                        "logs":[{
                            "t":"16:09:36.192630512",
                            "tid":33443,
                            "tl":192630512,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.343666770",
                            "tid":33443,
                            "tl":343666770,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.493098365",
                            "tid":33443,
                            "tl":493098365,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.657005650",
                            "tid":33443,
                            "tl":657005650,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:36.789757449",
                            "tid":33443,
                            "tl":789757449,
                            "b":"received connection.",
                            "th":1443395376
                          },{
                            "t":"16:09:37.028128833",
                            "tid":33443,
                            "tl":28128833,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.260692426",
                            "tid":33443,
                            "tl":260692426,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.436735077",
                            "tid":33443,
                            "tl":436735077,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.639222190",
                            "tid":33443,
                            "tl":639222190,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.807313733",
                            "tid":33443,
                            "tl":807313733,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    }
                  }
                },
                "tt":38022415.3,
                "c":1,
                "logs":[{
                    "t":"16:09:36.182532198",
                    "tid":33593,
                    "tl":182532198,
                    "b":"received connection.",
                    "th":1443395376
                  },{
                    "t":"16:09:36.333481152",
                    "tid":33593,
                    "tl":333481152,
                    "b":"sent:1:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56239).sent:1:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.478841623",
                    "tid":33593,
                    "tl":478841623,
                    "b":"sent:2:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56246).sent:2:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.611529745",
                    "tid":33593,
                    "tl":611529745,
                    "b":"sent:3:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56253).sent:3:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.776541724",
                    "tid":33593,
                    "tl":776541724,
                    "b":"sent:4:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56260).sent:4:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:36.955938497",
                    "tid":33593,
                    "tl":955938497,
                    "b":"sent:5:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56267).sent:5:srvc_node1",
                    "th":1443395376
                  },{
                    "t":"16:09:37.189866785",
                    "tid":33593,
                    "tl":189866785,
                    "b":"sent:6:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56274).sent:6:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.417922034",
                    "tid":33593,
                    "tl":417922034,
                    "b":"sent:1:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56288).sent:1:srvc_node7",
                    "th":1443395377
                  },{
                    "t":"16:09:37.575315654",
                    "tid":33593,
                    "tl":575315654,
                    "b":"sent:2:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56300).sent:2:srvc_node7",
                    "th":1443395377
                  },{
                    "t":"16:09:37.791996348",
                    "tid":33593,
                    "tl":791996348,
                    "b":"sent:3:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56310).sent:3:srvc_node7",
                    "th":1443395377
                  }]
              }
            },
            "tt":38665279.6,
            "c":1,
            "logs":[{
                "t":"16:09:36.182136414",
                "tid":33693,
                "tl":182136414,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.182150700",
                "tid":33693,
                "tl":182150700,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.333366388",
                "tid":33693,
                "tl":333366388,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.333377175",
                "tid":33693,
                "tl":333377175,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.478414240",
                "tid":33693,
                "tl":478414240,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.478439466",
                "tid":33693,
                "tl":478439466,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.611292495",
                "tid":33693,
                "tl":611292495,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.611304467",
                "tid":33693,
                "tl":611304467,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.776173468",
                "tid":33693,
                "tl":776173468,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.776188378",
                "tid":33693,
                "tl":776188378,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:36.955589515",
                "tid":33693,
                "tl":955589515,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.955595066",
                "tid":33693,
                "tl":955595066,
                "b":"warn: ciao",
                "th":1443395376
              },{
                "t":"16:09:37.189427709",
                "tid":33693,
                "tl":189427709,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.189506140",
                "tid":33693,
                "tl":189506140,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.417546626",
                "tid":33693,
                "tl":417546626,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.417574095",
                "tid":33693,
                "tl":417574095,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.574315805",
                "tid":33693,
                "tl":574315805,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.574341783",
                "tid":33693,
                "tl":574341783,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.791550538",
                "tid":33693,
                "tl":791550538,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.791556554",
                "tid":33693,
                "tl":791556554,
                "b":"warn: ciao",
                "th":1443395377
              }]
          },
          "processing":{
            "t":37247.1,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "tt":7682674.3,
            "c":1,
            "ch":{
              "prepare":{
                "t":2117815.9,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "tt":2117815.9,
                "c":1,
                "ch":[]
              },
              "run":{
                "t":4125321.1,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "tt":4125321.1,
                "c":1,
                "ch":[]
              },
              "reduce":{
                "t":1402290.2,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "tt":1402290.2,
                "c":1,
                "ch":[]
              }
            }
          }
        },
        "n":10,
        "c":1,
        "exe":"python /src/us.py",
        "id":1,
        "cont":"srvc_node1",
        "tt":78166841.2,
        "logs":[{
            "t":"16:09:36.180025615",
            "tid":33693,
            "tl":180025615,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.196310214",
            "tid":33693,
            "tl":196310214,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.332768241",
            "tid":33693,
            "tl":332768241,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.346772865",
            "tid":33693,
            "tl":346772865,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.477838363",
            "tid":33693,
            "tl":477838363,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.496014857",
            "tid":33693,
            "tl":496014857,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.610769471",
            "tid":33693,
            "tl":610769471,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.659472137",
            "tid":33693,
            "tl":659472137,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.775492821",
            "tid":33693,
            "tl":775492821,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.794340504",
            "tid":33693,
            "tl":794340504,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.954545280",
            "tid":33693,
            "tl":954545280,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:37.033684232",
            "tid":33693,
            "tl":33684232,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.188261447",
            "tid":33693,
            "tl":188261447,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.267784868",
            "tid":33693,
            "tl":267784868,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.416311521",
            "tid":33693,
            "tl":416311521,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.443710837",
            "tid":33693,
            "tl":443710837,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.572689242",
            "tid":33693,
            "tl":572689242,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.645050408",
            "tid":33693,
            "tl":645050408,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.790544391",
            "tid":33693,
            "tl":790544391,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.815549477",
            "tid":33693,
            "tl":815549477,
            "b":"Child transaction start.",
            "th":1443395377
          }]
      },
      "srvc_node7":{
        "t":4401361.8,
        "ch":{
          "req1":{
            "t":808532.3,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "srvc_node6":{
                "t":474192.7,
                "exe":"python /src/us.py",
                "cont":"srvc_node6",
                "ch":{
                  "processing":{
                    "t":55844.5,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node6",
                    "tt":4907627.3,
                    "c":1,
                    "ch":{
                      "prepare":{
                        "t":1303922.2,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "tt":1303922.2,
                        "c":1,
                        "ch":[]
                      },
                      "run":{
                        "t":2646393.4,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "tt":2646393.4,
                        "c":1,
                        "ch":[]
                      },
                      "reduce":{
                        "t":901467.2,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "tt":901467.2,
                        "c":1,
                        "ch":[]
                      }
                    }
                  }
                },
                "tt":5381820,
                "c":1,
                "logs":[{
                    "t":"16:09:37.352087200",
                    "tid":33443,
                    "tl":352087200,
                    "b":"received connection.",
                    "th":1443395377
                  },{
                    "t":"16:09:37.489080341",
                    "tid":33443,
                    "tl":489080341,
                    "b":"received connection.",
                    "th":1443395377
                  },{
                    "t":"16:09:37.675723854",
                    "tid":33443,
                    "tl":675723854,
                    "b":"received connection.",
                    "th":1443395377
                  },{
                    "t":"16:09:37.883005681",
                    "tid":33443,
                    "tl":883005681,
                    "b":"received connection.",
                    "th":1443395377
                  },{
                    "t":"16:09:38.474406801",
                    "tid":33443,
                    "tl":474406801,
                    "b":"received connection.",
                    "th":1443395378
                  },{
                    "t":"16:09:38.612147061",
                    "tid":33443,
                    "tl":612147061,
                    "b":"received connection.",
                    "th":1443395378
                  },{
                    "t":"16:09:38.763997911",
                    "tid":33443,
                    "tl":763997911,
                    "b":"received connection.",
                    "th":1443395378
                  },{
                    "t":"16:09:38.919386852",
                    "tid":33443,
                    "tl":919386852,
                    "b":"received connection.",
                    "th":1443395378
                  },{
                    "t":"16:09:39.074968098",
                    "tid":33443,
                    "tl":74968098,
                    "b":"received connection.",
                    "th":1443395379
                  },{
                    "t":"16:09:39.229572002",
                    "tid":33443,
                    "tl":229572002,
                    "b":"received connection.",
                    "th":1443395379
                  }]
              }
            },
            "tt":6190352.3,
            "c":1,
            "logs":[{
                "t":"16:09:37.351311051",
                "tid":33742,
                "tl":351311051,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.351324274",
                "tid":33742,
                "tl":351324274,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.488789594",
                "tid":33742,
                "tl":488789594,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.488804378",
                "tid":33742,
                "tl":488804378,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.675051914",
                "tid":33742,
                "tl":675051914,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.675131827",
                "tid":33742,
                "tl":675131827,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.882282932",
                "tid":33742,
                "tl":882282932,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.882298098",
                "tid":33742,
                "tl":882298098,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:38.474329096",
                "tid":33742,
                "tl":474329096,
                "b":"Sending request to srvc_next1",
                "th":1443395378
              },{
                "t":"16:09:38.474333813",
                "tid":33742,
                "tl":474333813,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:38.611750754",
                "tid":33742,
                "tl":611750754,
                "b":"Sending request to srvc_next1",
                "th":1443395378
              },{
                "t":"16:09:38.611865203",
                "tid":33742,
                "tl":611865203,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:38.763485537",
                "tid":33742,
                "tl":763485537,
                "b":"Sending request to srvc_next1",
                "th":1443395378
              },{
                "t":"16:09:38.763651028",
                "tid":33742,
                "tl":763651028,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:38.918909308",
                "tid":33742,
                "tl":918909308,
                "b":"Sending request to srvc_next1",
                "th":1443395378
              },{
                "t":"16:09:38.918921260",
                "tid":33742,
                "tl":918921260,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:39.074655496",
                "tid":33742,
                "tl":74655496,
                "b":"Sending request to srvc_next1",
                "th":1443395379
              },{
                "t":"16:09:39.074679193",
                "tid":33742,
                "tl":74679193,
                "b":"warn: ciao",
                "th":1443395379
              },{
                "t":"16:09:39.229120641",
                "tid":33742,
                "tl":229120641,
                "b":"Sending request to srvc_next1",
                "th":1443395379
              },{
                "t":"16:09:39.229136342",
                "tid":33742,
                "tl":229136342,
                "b":"warn: ciao",
                "th":1443395379
              }]
          },
          "req0":{
            "t":6101315.7,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "srvc_node2":{
                "t":498744.8,
                "exe":"python /src/us.py",
                "cont":"srvc_node2",
                "ch":{
                  "req1":{
                    "t":1320078,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "tt":4082256.3,
                    "c":1,
                    "ch":{
                      "srvc_node3":{
                        "t":386368.3,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":2375810,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "tt":2375810,
                            "c":1,
                            "ch":[]
                          }
                        },
                        "tt":2762178.3,
                        "c":1,
                        "logs":[{
                            "t":"16:09:37.345391993",
                            "tid":33545,
                            "tl":345391993,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.481864408",
                            "tid":33545,
                            "tl":481864408,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.659623229",
                            "tid":33545,
                            "tl":659623229,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.841617446",
                            "tid":33545,
                            "tl":841617446,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:38.470036469",
                            "tid":33545,
                            "tl":470036469,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.600230037",
                            "tid":33545,
                            "tl":600230037,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.751960871",
                            "tid":33545,
                            "tl":751960871,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.906947141",
                            "tid":33545,
                            "tl":906947141,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:39.063473189",
                            "tid":33545,
                            "tl":63473189,
                            "b":"received connection.",
                            "th":1443395379
                          },{
                            "t":"16:09:39.218984638",
                            "tid":33545,
                            "tl":218984638,
                            "b":"received connection.",
                            "th":1443395379
                          }]
                      }
                    }
                  },
                  "req0":{
                    "t":1517993.2,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "tt":54566540.1,
                    "c":1,
                    "ch":{
                      "srvc_node4":{
                        "t":453557.8,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":44234.6,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "tt":7165221,
                            "c":1,
                            "ch":{
                              "prepare":{
                                "t":1830289.1,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":1830289.1,
                                "c":1,
                                "ch":[]
                              },
                              "run":{
                                "t":3852113,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":3852113,
                                "c":1,
                                "ch":[]
                              },
                              "reduce":{
                                "t":1438584.3,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "tt":1438584.3,
                                "c":1,
                                "ch":[]
                              }
                            }
                          },
                          "data_write":{
                            "t":45429768.1,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "tt":45429768.1,
                            "c":1,
                            "ch":[]
                          }
                        },
                        "tt":53048546.9,
                        "c":1,
                        "logs":[{
                            "t":"16:09:37.336397098",
                            "tid":33494,
                            "tl":336397098,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.475146458",
                            "tid":33494,
                            "tl":475146458,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.646232429",
                            "tid":33494,
                            "tl":646232429,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.817131403",
                            "tid":33494,
                            "tl":817131403,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:38.037652775",
                            "tid":33494,
                            "tl":37652775,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.587243353",
                            "tid":33494,
                            "tl":587243353,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.741435726",
                            "tid":33494,
                            "tl":741435726,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.895694083",
                            "tid":33494,
                            "tl":895694083,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:39.052903248",
                            "tid":33494,
                            "tl":52903248,
                            "b":"received connection.",
                            "th":1443395379
                          },{
                            "t":"16:09:39.204873513",
                            "tid":33494,
                            "tl":204873513,
                            "b":"received connection.",
                            "th":1443395379
                          }]
                      }
                    }
                  },
                  "req2":{
                    "t":1047624.5,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "tt":6238074.6,
                    "c":1,
                    "ch":{
                      "srvc_node6":{
                        "t":337474.8,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":{
                          "processing":{
                            "t":46587.1,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node6",
                            "tt":4852975.3,
                            "c":1,
                            "ch":{
                              "prepare":{
                                "t":1275400.8,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "tt":1275400.8,
                                "c":1,
                                "ch":[]
                              },
                              "run":{
                                "t":2646293.4,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "tt":2646293.4,
                                "c":1,
                                "ch":[]
                              },
                              "reduce":{
                                "t":884694,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "tt":884694,
                                "c":1,
                                "ch":[]
                              }
                            }
                          }
                        },
                        "tt":5190450.1,
                        "c":1,
                        "logs":[{
                            "t":"16:09:37.347497659",
                            "tid":33443,
                            "tl":347497659,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.484091539",
                            "tid":33443,
                            "tl":484091539,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.664166914",
                            "tid":33443,
                            "tl":664166914,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:37.850939629",
                            "tid":33443,
                            "tl":850939629,
                            "b":"received connection.",
                            "th":1443395377
                          },{
                            "t":"16:09:38.471589980",
                            "tid":33443,
                            "tl":471589980,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.603823010",
                            "tid":33443,
                            "tl":603823010,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.755598477",
                            "tid":33443,
                            "tl":755598477,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:38.911247902",
                            "tid":33443,
                            "tl":911247902,
                            "b":"received connection.",
                            "th":1443395378
                          },{
                            "t":"16:09:39.067074627",
                            "tid":33443,
                            "tl":67074627,
                            "b":"received connection.",
                            "th":1443395379
                          },{
                            "t":"16:09:39.222089376",
                            "tid":33443,
                            "tl":222089376,
                            "b":"received connection.",
                            "th":1443395379
                          }]
                      }
                    }
                  }
                },
                "tt":65385615.8,
                "c":1,
                "logs":[{
                    "t":"16:09:37.335700325",
                    "tid":33593,
                    "tl":335700325,
                    "b":"sent:7:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56281).sent:7:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.474421133",
                    "tid":33593,
                    "tl":474421133,
                    "b":"sent:8:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56293).sent:8:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.644819610",
                    "tid":33593,
                    "tl":644819610,
                    "b":"sent:9:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56305).sent:9:srvc_node1",
                    "th":1443395377
                  },{
                    "t":"16:09:37.815148095",
                    "tid":33593,
                    "tl":815148095,
                    "b":"sent:10:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56317).sent:10:srvc_nod",
                    "th":1443395377
                  },{
                    "t":"16:09:38.036076408",
                    "tid":33593,
                    "tl":36076408,
                    "b":"sent:4:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56322).sent:4:srvc_node7",
                    "th":1443395378
                  },{
                    "t":"16:09:38.586462321",
                    "tid":33593,
                    "tl":586462321,
                    "b":"sent:5:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56329).sent:5:srvc_node7",
                    "th":1443395378
                  },{
                    "t":"16:09:38.739829720",
                    "tid":33593,
                    "tl":739829720,
                    "b":"sent:6:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56334).sent:6:srvc_node7",
                    "th":1443395378
                  },{
                    "t":"16:09:38.894704234",
                    "tid":33593,
                    "tl":894704234,
                    "b":"sent:7:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56339).sent:7:srvc_node7",
                    "th":1443395378
                  },{
                    "t":"16:09:39.051752706",
                    "tid":33593,
                    "tl":51752706,
                    "b":"sent:8:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56344).sent:8:srvc_node7",
                    "th":1443395379
                  },{
                    "t":"16:09:39.203920580",
                    "tid":33593,
                    "tl":203920580,
                    "b":"sent:9:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56349).sent:9:srvc_node7",
                    "th":1443395379
                  }]
              }
            },
            "tt":71486931.5,
            "c":1,
            "logs":[{
                "t":"16:09:37.335369029",
                "tid":33742,
                "tl":335369029,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.335408192",
                "tid":33742,
                "tl":335408192,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.473982441",
                "tid":33742,
                "tl":473982441,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.474086669",
                "tid":33742,
                "tl":474086669,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.606390365",
                "tid":33742,
                "tl":606390365,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.606440230",
                "tid":33742,
                "tl":606440230,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:37.799737552",
                "tid":33742,
                "tl":799737552,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.799761954",
                "tid":33742,
                "tl":799761954,
                "b":"warn: ciao",
                "th":1443395377
              },{
                "t":"16:09:38.034872668",
                "tid":33742,
                "tl":34872668,
                "b":"Sending request to srvc_next0",
                "th":1443395378
              },{
                "t":"16:09:38.034933977",
                "tid":33742,
                "tl":34933977,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:38.586323105",
                "tid":33742,
                "tl":586323105,
                "b":"Sending request to srvc_next0",
                "th":1443395378
              },{
                "t":"16:09:38.586328670",
                "tid":33742,
                "tl":586328670,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:38.739189035",
                "tid":33742,
                "tl":739189035,
                "b":"Sending request to srvc_next0",
                "th":1443395378
              },{
                "t":"16:09:38.739194543",
                "tid":33742,
                "tl":739194543,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:38.894289866",
                "tid":33742,
                "tl":894289866,
                "b":"Sending request to srvc_next0",
                "th":1443395378
              },{
                "t":"16:09:38.894295300",
                "tid":33742,
                "tl":894295300,
                "b":"warn: ciao",
                "th":1443395378
              },{
                "t":"16:09:39.051044578",
                "tid":33742,
                "tl":51044578,
                "b":"Sending request to srvc_next0",
                "th":1443395379
              },{
                "t":"16:09:39.051252062",
                "tid":33742,
                "tl":51252062,
                "b":"warn: ciao",
                "th":1443395379
              },{
                "t":"16:09:39.203005355",
                "tid":33742,
                "tl":203005355,
                "b":"Sending request to srvc_next0",
                "th":1443395379
              },{
                "t":"16:09:39.203027486",
                "tid":33742,
                "tl":203027486,
                "b":"warn: ciao",
                "th":1443395379
              }]
          },
          "processing":{
            "t":46903.3,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "tt":16905339.8,
            "c":1,
            "ch":{
              "prepare":{
                "t":4904449.7,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "tt":4904449.7,
                "c":1,
                "ch":[]
              },
              "run":{
                "t":9001197.8,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "tt":9001197.8,
                "c":1,
                "ch":[]
              },
              "reduce":{
                "t":2952789,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "tt":2952789,
                "c":1,
                "ch":[]
              }
            }
          }
        },
        "n":10,
        "c":1,
        "exe":"python /src/us.py",
        "id":1,
        "cont":"srvc_node7",
        "tt":98983985.4,
        "logs":[{
            "t":"16:09:37.333802459",
            "tid":33742,
            "tl":333802459,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.350260278",
            "tid":33742,
            "tl":350260278,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.473073552",
            "tid":33742,
            "tl":473073552,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.488245552",
            "tid":33742,
            "tl":488245552,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.605628564",
            "tid":33742,
            "tl":605628564,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.674192252",
            "tid":33742,
            "tl":674192252,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.798725093",
            "tid":33742,
            "tl":798725093,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.860565977",
            "tid":33742,
            "tl":860565977,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:38.033738598",
            "tid":33742,
            "tl":33738598,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.473860709",
            "tid":33742,
            "tl":473860709,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.585140603",
            "tid":33742,
            "tl":585140603,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.611185361",
            "tid":33742,
            "tl":611185361,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.738362747",
            "tid":33742,
            "tl":738362747,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.762684365",
            "tid":33742,
            "tl":762684365,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.893531145",
            "tid":33742,
            "tl":893531145,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.917660233",
            "tid":33742,
            "tl":917660233,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:39.049755219",
            "tid":33742,
            "tl":49755219,
            "b":"Child transaction start.",
            "th":1443395379
          },{
            "t":"16:09:39.073874573",
            "tid":33742,
            "tl":73874573,
            "b":"Child transaction start.",
            "th":1443395379
          },{
            "t":"16:09:39.201977320",
            "tid":33742,
            "tl":201977320,
            "b":"Child transaction start.",
            "th":1443395379
          },{
            "t":"16:09:39.228472136",
            "tid":33742,
            "tl":228472136,
            "b":"Child transaction start.",
            "th":1443395379
          }]
      }
    },
    "tt":0
  }
};

var min = {
  "":{
    "t":0,
    "ch":{
      "srvc_node1":{
        "t":3670416,
        "ch":{
          "req1":{
            "t":352582,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "srvc_node5":{
                "t":234553,
                "exe":"python /src/us.py",
                "cont":"srvc_node5",
                "ch":{
                  "req0":{
                    "t":1270469,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node5",
                    "ch":{
                      "srvc_node4":{
                        "t":192735,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":16425,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":{
                              "prepare":{
                                "t":723618,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":723618
                              },
                              "run":{
                                "t":1491696,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":1491696
                              },
                              "reduce":{
                                "t":476925,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":476925
                              }
                            },
                            "c":1,
                            "tt":2708664
                          },
                          "data_write":{
                            "t":908561,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":[],
                            "c":1,
                            "tt":908561
                          }
                        },
                        "c":1,
                        "tt":3809960,
                        "logs":[{
                            "t":"16:09:36.198634906",
                            "tid":33494,
                            "tl":198634906,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":5080429
                  },
                  "req1":{
                    "t":588185,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node5",
                    "ch":{
                      "srvc_node3":{
                        "t":187177,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":906594,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "ch":[],
                            "c":1,
                            "tt":906594
                          }
                        },
                        "c":1,
                        "tt":1093771,
                        "logs":[{
                            "t":"16:09:36.203118647",
                            "tid":33545,
                            "tl":203118647,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":1681956
                  }
                },
                "c":1,
                "tt":6996938,
                "logs":[{
                    "t":"16:09:36.197538538",
                    "tid":33644,
                    "tl":197538538,
                    "b":"received connection.",
                    "th":1443395376
                  }]
              }
            },
            "c":1,
            "tt":7349520,
            "logs":[{
                "t":"16:09:36.197230388",
                "tid":33693,
                "tl":197230388,
                "b":"Sending request to srvc_next1",
                "th":1443395376
              },{
                "t":"16:09:36.197241147",
                "tid":33693,
                "tl":197241147,
                "b":"warn: ciao",
                "th":1443395376
              }]
          },
          "req0":{
            "t":905042,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "srvc_node2":{
                "t":189731,
                "exe":"python /src/us.py",
                "cont":"srvc_node2",
                "ch":{
                  "req1":{
                    "t":751606,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node3":{
                        "t":200445,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":622858,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "ch":[],
                            "c":1,
                            "tt":622858
                          }
                        },
                        "c":1,
                        "tt":823303,
                        "logs":[{
                            "t":"16:09:36.191247804",
                            "tid":33545,
                            "tl":191247804,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":1574909
                  },
                  "req0":{
                    "t":1817592,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node4":{
                        "t":367760,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":30597,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":{
                              "prepare":{
                                "t":2172929,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":2172929
                              },
                              "run":{
                                "t":2149540,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":2149540
                              },
                              "reduce":{
                                "t":661186,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":661186
                              }
                            },
                            "c":1,
                            "tt":5014252
                          },
                          "data_write":{
                            "t":830254,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":[],
                            "c":1,
                            "tt":830254
                          }
                        },
                        "c":1,
                        "tt":6212266,
                        "logs":[{
                            "t":"16:09:36.184230289",
                            "tid":33494,
                            "tl":184230289,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":8029858
                  },
                  "req2":{
                    "t":552099,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node6":{
                        "t":185394,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":{
                          "processing":{
                            "t":18553,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node6",
                            "ch":{
                              "prepare":{
                                "t":555674,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":555674
                              },
                              "run":{
                                "t":1218322,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":1218322
                              },
                              "reduce":{
                                "t":357704,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":357704
                              }
                            },
                            "c":1,
                            "tt":2150253
                          }
                        },
                        "c":1,
                        "tt":2335647,
                        "logs":[{
                            "t":"16:09:36.192630512",
                            "tid":33443,
                            "tl":192630512,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":2887746
                  }
                },
                "c":1,
                "tt":12682244,
                "logs":[{
                    "t":"16:09:36.182532198",
                    "tid":33593,
                    "tl":182532198,
                    "b":"received connection.",
                    "th":1443395376
                  }]
              }
            },
            "c":1,
            "tt":13587286,
            "logs":[{
                "t":"16:09:36.182136414",
                "tid":33693,
                "tl":182136414,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.182150700",
                "tid":33693,
                "tl":182150700,
                "b":"warn: ciao",
                "th":1443395376
              }]
          },
          "processing":{
            "t":19065,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "prepare":{
                "t":1141210,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "ch":[],
                "c":1,
                "tt":1141210
              },
              "run":{
                "t":2964382,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "ch":[],
                "c":1,
                "tt":2964382
              },
              "reduce":{
                "t":673708,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "ch":[],
                "c":1,
                "tt":673708
              }
            },
            "c":1,
            "tt":4798365
          }
        },
        "n":1,
        "c":1,
        "exe":"python /src/us.py",
        "id":1,
        "cont":"srvc_node1",
        "tt":29405587,
        "logs":[{
            "t":"16:09:36.180025615",
            "tid":33693,
            "tl":180025615,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:36.196310214",
            "tid":33693,
            "tl":196310214,
            "b":"Child transaction start.",
            "th":1443395376
          }]
      },
      "srvc_node7":{
        "t":1730102,
        "ch":{
          "req1":{
            "t":448507,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "srvc_node6":{
                "t":249291,
                "exe":"python /src/us.py",
                "cont":"srvc_node6",
                "ch":{
                  "processing":{
                    "t":26268,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node6",
                    "ch":{
                      "prepare":{
                        "t":939623,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":[],
                        "c":1,
                        "tt":939623
                      },
                      "run":{
                        "t":1526391,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":[],
                        "c":1,
                        "tt":1526391
                      },
                      "reduce":{
                        "t":487295,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":[],
                        "c":1,
                        "tt":487295
                      }
                    },
                    "c":1,
                    "tt":2979577
                  }
                },
                "c":1,
                "tt":3228868,
                "logs":[{
                    "t":"16:09:37.489080341",
                    "tid":33443,
                    "tl":489080341,
                    "b":"received connection.",
                    "th":1443395377
                  }]
              }
            },
            "c":1,
            "tt":3677375,
            "logs":[{
                "t":"16:09:37.488789594",
                "tid":33742,
                "tl":488789594,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.488804378",
                "tid":33742,
                "tl":488804378,
                "b":"warn: ciao",
                "th":1443395377
              }]
          },
          "req0":{
            "t":655751,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "srvc_node2":{
                "t":290884,
                "exe":"python /src/us.py",
                "cont":"srvc_node2",
                "ch":{
                  "req1":{
                    "t":1242421,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node3":{
                        "t":305455,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":1060358,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "ch":[],
                            "c":1,
                            "tt":1060358
                          }
                        },
                        "c":1,
                        "tt":1365813,
                        "logs":[{
                            "t":"16:09:37.481864408",
                            "tid":33545,
                            "tl":481864408,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    },
                    "c":1,
                    "tt":2608234
                  },
                  "req0":{
                    "t":946929,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node4":{
                        "t":195528,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":25918,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":{
                              "prepare":{
                                "t":1048480,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":1048480
                              },
                              "run":{
                                "t":2474922,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":2474922
                              },
                              "reduce":{
                                "t":727003,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":727003
                              }
                            },
                            "c":1,
                            "tt":4276323
                          },
                          "data_write":{
                            "t":1026208,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":[],
                            "c":1,
                            "tt":1026208
                          }
                        },
                        "c":1,
                        "tt":5498059,
                        "logs":[{
                            "t":"16:09:37.475146458",
                            "tid":33494,
                            "tl":475146458,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    },
                    "c":1,
                    "tt":6444988
                  },
                  "req2":{
                    "t":783666,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node6":{
                        "t":330634,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":{
                          "processing":{
                            "t":27650,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node6",
                            "ch":{
                              "prepare":{
                                "t":667354,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":667354
                              },
                              "run":{
                                "t":1513167,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":1513167
                              },
                              "reduce":{
                                "t":884363,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":884363
                              }
                            },
                            "c":1,
                            "tt":3092534
                          }
                        },
                        "c":1,
                        "tt":3423168,
                        "logs":[{
                            "t":"16:09:37.484091539",
                            "tid":33443,
                            "tl":484091539,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    },
                    "c":1,
                    "tt":4206834
                  }
                },
                "c":1,
                "tt":13550940,
                "logs":[{
                    "t":"16:09:37.474421133",
                    "tid":33593,
                    "tl":474421133,
                    "b":"sent:8:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56293).sent:8:srvc_node1",
                    "th":1443395377
                  }]
              }
            },
            "c":1,
            "tt":14206691,
            "logs":[{
                "t":"16:09:37.473982441",
                "tid":33742,
                "tl":473982441,
                "b":"Sending request to srvc_next0",
                "th":1443395377
              },{
                "t":"16:09:37.474086669",
                "tid":33742,
                "tl":474086669,
                "b":"warn: ciao",
                "th":1443395377
              }]
          },
          "processing":{
            "t":34830,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "prepare":{
                "t":3132829,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "ch":[],
                "c":1,
                "tt":3132829
              },
              "run":{
                "t":6287846,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "ch":[],
                "c":1,
                "tt":6287846
              },
              "reduce":{
                "t":2014590,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "ch":[],
                "c":1,
                "tt":2014590
              }
            },
            "c":1,
            "tt":11470095
          }
        },
        "n":1,
        "c":1,
        "exe":"python /src/us.py",
        "id":2,
        "cont":"srvc_node7",
        "tt":31084263,
        "logs":[{
            "t":"16:09:37.473073552",
            "tid":33742,
            "tl":473073552,
            "b":"Child transaction start.",
            "th":1443395377
          },{
            "t":"16:09:37.488245552",
            "tid":33742,
            "tl":488245552,
            "b":"Child transaction start.",
            "th":1443395377
          }]
      }
    },
    "tt":0
  }
};

var max = {
  "":{
    "t":0,
    "ch":{
      "srvc_node1":{
        "t":2099011,
        "ch":{
          "req1":{
            "t":1049716,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "srvc_node5":{
                "t":300713,
                "exe":"python /src/us.py",
                "cont":"srvc_node5",
                "ch":{
                  "req0":{
                    "t":1378524,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node5",
                    "ch":{
                      "srvc_node4":{
                        "t":1182294,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":49895,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":{
                              "prepare":{
                                "t":3281447,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":3281447
                              },
                              "run":{
                                "t":4047272,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":4047272
                              },
                              "reduce":{
                                "t":1227179,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":1227179
                              }
                            },
                            "c":1,
                            "tt":8605793
                          },
                          "data_write":{
                            "t":19194475,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":[],
                            "c":1,
                            "tt":19194475
                          }
                        },
                        "c":1,
                        "tt":28982562,
                        "logs":[{
                            "t":"16:09:37.036836790",
                            "tid":33494,
                            "tl":36836790,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    },
                    "c":1,
                    "tt":30361086
                  },
                  "req1":{
                    "t":1613020,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node5",
                    "ch":{
                      "srvc_node3":{
                        "t":401681,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":9143111,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "ch":[],
                            "c":1,
                            "tt":9143111
                          }
                        },
                        "c":1,
                        "tt":9544792,
                        "logs":[{
                            "t":"16:09:37.066982448",
                            "tid":33545,
                            "tl":66982448,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    },
                    "c":1,
                    "tt":11157812
                  }
                },
                "c":1,
                "tt":41819611,
                "logs":[{
                    "t":"16:09:37.035193574",
                    "tid":33644,
                    "tl":35193574,
                    "b":"sent:5:srvc_node1.req1.srvc_node5.req0 ('172.17.0.216', 35946).sent:5:srvc_node1",
                    "th":1443395377
                  }]
              }
            },
            "c":1,
            "tt":42869327,
            "logs":[{
                "t":"16:09:37.034700222",
                "tid":33693,
                "tl":34700222,
                "b":"Sending request to srvc_next1",
                "th":1443395377
              },{
                "t":"16:09:37.034791254",
                "tid":33693,
                "tl":34791254,
                "b":"warn: ciao",
                "th":1443395377
              }]
          },
          "req0":{
            "t":533738,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "srvc_node2":{
                "t":173069,
                "exe":"python /src/us.py",
                "cont":"srvc_node2",
                "ch":{
                  "req1":{
                    "t":12279085,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node3":{
                        "t":643634,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":9154976,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "ch":[],
                            "c":1,
                            "tt":9154976
                          }
                        },
                        "c":1,
                        "tt":9798610,
                        "logs":[{
                            "t":"16:09:36.980059330",
                            "tid":33545,
                            "tl":980059330,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":22077695
                  },
                  "req0":{
                    "t":1303030,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node4":{
                        "t":491914,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":56390,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":{
                              "prepare":{
                                "t":2331861,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":2331861
                              },
                              "run":{
                                "t":3896257,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":3896257
                              },
                              "reduce":{
                                "t":1468524,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":1468524
                              }
                            },
                            "c":1,
                            "tt":7753032
                          },
                          "data_write":{
                            "t":2477366,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":[],
                            "c":1,
                            "tt":2477366
                          }
                        },
                        "c":1,
                        "tt":10722312,
                        "logs":[{
                            "t":"16:09:36.956927519",
                            "tid":33494,
                            "tl":956927519,
                            "b":"received connection.",
                            "th":1443395376
                          }]
                      }
                    },
                    "c":1,
                    "tt":12025342
                  },
                  "req2":{
                    "t":38274042,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node6":{
                        "t":268118,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":{
                          "processing":{
                            "t":38238,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node6",
                            "ch":{
                              "prepare":{
                                "t":1012248,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":1012248
                              },
                              "run":{
                                "t":2690002,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":2690002
                              },
                              "reduce":{
                                "t":831708,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":831708
                              }
                            },
                            "c":1,
                            "tt":4572196
                          }
                        },
                        "c":1,
                        "tt":4840314,
                        "logs":[{
                            "t":"16:09:37.028128833",
                            "tid":33443,
                            "tl":28128833,
                            "b":"received connection.",
                            "th":1443395377
                          }]
                      }
                    },
                    "c":1,
                    "tt":43114356
                  }
                },
                "c":1,
                "tt":77390462,
                "logs":[{
                    "t":"16:09:36.955938497",
                    "tid":33593,
                    "tl":955938497,
                    "b":"sent:5:srvc_node1.req0.srvc_node2.req0 ('172.17.0.215', 56267).sent:5:srvc_node1",
                    "th":1443395376
                  }]
              }
            },
            "c":1,
            "tt":77924200,
            "logs":[{
                "t":"16:09:36.955589515",
                "tid":33693,
                "tl":955589515,
                "b":"Sending request to srvc_next0",
                "th":1443395376
              },{
                "t":"16:09:36.955595066",
                "tid":33693,
                "tl":955595066,
                "b":"warn: ciao",
                "th":1443395376
              }]
          },
          "processing":{
            "t":44678,
            "exe":"python /src/us.py",
            "cont":"srvc_node1",
            "ch":{
              "prepare":{
                "t":2621695,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "ch":[],
                "c":1,
                "tt":2621695
              },
              "run":{
                "t":5167336,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "ch":[],
                "c":1,
                "tt":5167336
              },
              "reduce":{
                "t":2132952,
                "exe":"python /src/us.py",
                "cont":"srvc_node1",
                "ch":[],
                "c":1,
                "tt":2132952
              }
            },
            "c":1,
            "tt":9966661
          }
        },
        "n":1,
        "c":1,
        "exe":"python /src/us.py",
        "id":6,
        "cont":"srvc_node1",
        "tt":132859199,
        "logs":[{
            "t":"16:09:36.954545280",
            "tid":33693,
            "tl":954545280,
            "b":"Child transaction start.",
            "th":1443395376
          },{
            "t":"16:09:37.033684232",
            "tid":33693,
            "tl":33684232,
            "b":"Child transaction start.",
            "th":1443395377
          }]
      },
      "srvc_node7":{
        "t":1929205,
        "ch":{
          "req1":{
            "t":205009,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "srvc_node6":{
                "t":106556,
                "exe":"python /src/us.py",
                "cont":"srvc_node6",
                "ch":{
                  "processing":{
                    "t":11083,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node6",
                    "ch":{
                      "prepare":{
                        "t":430114,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":[],
                        "c":1,
                        "tt":430114
                      },
                      "run":{
                        "t":976025,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":[],
                        "c":1,
                        "tt":976025
                      },
                      "reduce":{
                        "t":319060,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":[],
                        "c":1,
                        "tt":319060
                      }
                    },
                    "c":1,
                    "tt":1736282
                  }
                },
                "c":1,
                "tt":1842838,
                "logs":[{
                    "t":"16:09:38.474406801",
                    "tid":33443,
                    "tl":474406801,
                    "b":"received connection.",
                    "th":1443395378
                  }]
              }
            },
            "c":1,
            "tt":2047847,
            "logs":[{
                "t":"16:09:38.474329096",
                "tid":33742,
                "tl":474329096,
                "b":"Sending request to srvc_next1",
                "th":1443395378
              },{
                "t":"16:09:38.474333813",
                "tid":33742,
                "tl":474333813,
                "b":"warn: ciao",
                "th":1443395378
              }]
          },
          "req0":{
            "t":983869,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "srvc_node2":{
                "t":508435,
                "exe":"python /src/us.py",
                "cont":"srvc_node2",
                "ch":{
                  "req1":{
                    "t":631786,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node3":{
                        "t":181425,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node3",
                        "ch":{
                          "data_write":{
                            "t":752342,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node3",
                            "ch":[],
                            "c":1,
                            "tt":752342
                          }
                        },
                        "c":1,
                        "tt":933767,
                        "logs":[{
                            "t":"16:09:38.470036469",
                            "tid":33545,
                            "tl":470036469,
                            "b":"received connection.",
                            "th":1443395378
                          }]
                      }
                    },
                    "c":1,
                    "tt":1565553
                  },
                  "req0":{
                    "t":1407493,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node4":{
                        "t":533877,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node4",
                        "ch":{
                          "processing":{
                            "t":51076,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":{
                              "prepare":{
                                "t":2079098,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":2079098
                              },
                              "run":{
                                "t":4277685,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":4277685
                              },
                              "reduce":{
                                "t":1151450,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node4",
                                "ch":[],
                                "c":1,
                                "tt":1151450
                              }
                            },
                            "c":1,
                            "tt":7559309
                          },
                          "data_write":{
                            "t":423924368,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node4",
                            "ch":[],
                            "c":1,
                            "tt":423924368
                          }
                        },
                        "c":1,
                        "tt":432017554,
                        "logs":[{
                            "t":"16:09:38.037652775",
                            "tid":33494,
                            "tl":37652775,
                            "b":"received connection.",
                            "th":1443395378
                          }]
                      }
                    },
                    "c":1,
                    "tt":433425047
                  },
                  "req2":{
                    "t":570162,
                    "exe":"python /src/us.py",
                    "cont":"srvc_node2",
                    "ch":{
                      "srvc_node6":{
                        "t":141870,
                        "exe":"python /src/us.py",
                        "cont":"srvc_node6",
                        "ch":{
                          "processing":{
                            "t":12609,
                            "exe":"python /src/us.py",
                            "cont":"srvc_node6",
                            "ch":{
                              "prepare":{
                                "t":455687,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":455687
                              },
                              "run":{
                                "t":983876,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":983876
                              },
                              "reduce":{
                                "t":319166,
                                "exe":"python /src/us.py",
                                "cont":"srvc_node6",
                                "ch":[],
                                "c":1,
                                "tt":319166
                              }
                            },
                            "c":1,
                            "tt":1771338
                          }
                        },
                        "c":1,
                        "tt":1913208,
                        "logs":[{
                            "t":"16:09:38.471589980",
                            "tid":33443,
                            "tl":471589980,
                            "b":"received connection.",
                            "th":1443395378
                          }]
                      }
                    },
                    "c":1,
                    "tt":2483370
                  }
                },
                "c":1,
                "tt":437982405,
                "logs":[{
                    "t":"16:09:38.036076408",
                    "tid":33593,
                    "tl":36076408,
                    "b":"sent:4:srvc_node7.req0.srvc_node2.req0 ('172.17.0.215', 56322).sent:4:srvc_node7",
                    "th":1443395378
                  }]
              }
            },
            "c":1,
            "tt":438966274,
            "logs":[{
                "t":"16:09:38.034872668",
                "tid":33742,
                "tl":34872668,
                "b":"Sending request to srvc_next0",
                "th":1443395378
              },{
                "t":"16:09:38.034933977",
                "tid":33742,
                "tl":34933977,
                "b":"warn: ciao",
                "th":1443395378
              }]
          },
          "processing":{
            "t":14148,
            "exe":"python /src/us.py",
            "cont":"srvc_node7",
            "ch":{
              "prepare":{
                "t":1980191,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "ch":[],
                "c":1,
                "tt":1980191
              },
              "run":{
                "t":3858854,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "ch":[],
                "c":1,
                "tt":3858854
              },
              "reduce":{
                "t":1314157,
                "exe":"python /src/us.py",
                "cont":"srvc_node7",
                "ch":[],
                "c":1,
                "tt":1314157
              }
            },
            "c":1,
            "tt":7167350
          }
        },
        "n":1,
        "c":1,
        "exe":"python /src/us.py",
        "id":5,
        "cont":"srvc_node7",
        "tt":450110676,
        "logs":[{
            "t":"16:09:38.033738598",
            "tid":33742,
            "tl":33738598,
            "b":"Child transaction start.",
            "th":1443395378
          },{
            "t":"16:09:38.473860709",
            "tid":33742,
            "tl":473860709,
            "b":"Child transaction start.",
            "th":1443395378
          }]
      }
    },
    "tt":0
  }
};