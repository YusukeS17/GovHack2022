source: [Live Traffic Hazards API](https://opendata.transport.nsw.gov.au/node/342/exploreapi#!/alpine/GetAllAlpine)

***

This API can be used to query live information regarding road closures due to different types of hazards (e.g. fire, flood, incidents, etc.). Please find some examples how the received data looks like.

Of course, one would have to replace the `YOURAPPKEY` with a real key received from the [NSW open data platform](https://opendata.transport.nsw.gov.au/).


## Alpine

Request:
```curl
curl -X GET --header 'Accept: application/json' --header 'Authorization: apikey YOURAPPKEY' 'https://api.transport.nsw.gov.au/v1/live/hazards/alpine/all'
```

Response:
```json
{
    "type": "FeatureCollection",
    "lastPublished": 1660967700000,
    "layerName": "Alpine",
    "rights": {
        "copyright": "Transport for NSW",
        "licence": "https://opendata.transport.nsw.gov.au/dataset/live-traffic-hazards"
    },
    "features": [
        {
            "type": "Feature",
            "id": 123855,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.472257,
                    -35.877734
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [
                    {
                        "linkText": "Snowy Mountains Highway/Selwyn reference points",
                        "linkURL": "https://drive.google.com/file/d/1sfCRL_v61B5Pen1WwTs_KahTt9Xvm4g-/view"
                    },
                    {
                        "linkText": "Driving in the snow",
                        "linkURL": "https://roadsafety.transport.nsw.gov.au/stayingsafe/drivers/badweather/snowdriving.html"
                    },
                    {
                        "linkText": "Kosciuszko National Park alerts",
                        "linkURL": "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kosciuszko-national-park/local-alerts"
                    }
                ],
                "headline": "",
                "periods": [],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1654462284000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "null",
                "adviceA": "Exercise caution",
                "adviceB": "Check signage",
                "adviceC": " ",
                "incidentKind": "Unplanned",
                "mainCategory": "ALPINE CONDITIONS",
                "lastUpdated": 1660963282748,
                "otherAdvice": "<p>The road is open.</p><p><br></p><p>Chains must be carried in Kosciuszko National Park in winter (4WDs exempt).</p><p>All motorists should be prepared and equipped for sudden changes in road and weather conditions in Alpine areas.</p>",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": null,
                "encodedPolylines": [],
                "displayName": "ALPINE CONDITIONS",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Snowy Mountains Highway",
                        "delay": "",
                        "impactedLanes": [
                            {
                                "affectedDirection": "Both directions",
                                "closedLanes": "",
                                "description": "",
                                "extent": "Affected",
                                "numberOfLanes": "",
                                "roadType": ""
                            }
                        ],
                        "locationQualifier": "between",
                        "mainStreet": "Link Road",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Snowy Mountains",
                        "secondLocation": "Selwyn Snow Resort",
                        "suburb": "Kosciuszko National Park",
                        "trafficVolume": ""
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "id": 123858,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.590921,
                    -35.833279
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [
                    {
                        "linkText": "Kosciuszko National Park",
                        "linkURL": "https://www.nationalparks.nsw.gov.au/visit-a-park/parks/kosciuszko-national-park/local-alerts"
                    },
                    {
                        "linkText": "Driving in the snow",
                        "linkURL": "https://roadsafety.transport.nsw.gov.au/stayingsafe/drivers/badweather/snowdriving.html"
                    }
                ],
                "headline": "",
                "periods": [],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": false,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1654464452000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "null",
                "adviceA": "Snow chains are required",
                "adviceB": "Plan your journey",
                "adviceC": " ",
                "incidentKind": "Unplanned",
                "mainCategory": "ALPINE CONDITIONS",
                "lastUpdated": 1660963314009,
                "otherAdvice": "<p><strong></strong><strong>Chains must be carried in Kosciuszko National Park in winter (4WDs exempt). </strong></p><p><strong>All motorists should be prepared and equipped for sudden changes in road and weather conditions in Alpine areas.</strong></p><p><strong></strong><strong></strong></p>",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": null,
                "encodedPolylines": [],
                "displayName": "ALPINE CONDITIONS",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "",
                        "delay": "",
                        "impactedLanes": [],
                        "locationQualifier": "at",
                        "mainStreet": "All roads",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Snowy Mountains",
                        "secondLocation": "",
                        "suburb": "Kosciuszko National Park",
                        "trafficVolume": ""
                    }
                ]
            }
        }
    ]
}
```



## Flood

Request:
```curl
curl -X GET --header 'Accept: application/json' --header 'Authorization: apikey YOURAPPKEY' 'https://api.transport.nsw.gov.au/v1/live/hazards/flood/all'
```

Response:
```json
{
    "type": "FeatureCollection",
    "lastPublished": 1660968001000,
    "layerName": "Flood",
    "rights": {
        "copyright": "Transport for NSW",
        "licence": "https://opendata.transport.nsw.gov.au/dataset/live-traffic-hazards"
    },
    "features": [
        {
            "type": "Feature",
            "id": 131771,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    149.0586462,
                    -34.9918196
                ],
                "collections": [
                    {
                        "type": "Point",
                        "coordinates": [
                            149.105556,
                            -35.01572
                        ]
                    }
                ]
            },
            "properties": {
                "webLinks": [
                    {
                        "linkText": "Yass Valley Council - Road closures due to flooding",
                        "linkURL": "https://www.yassvalley.nsw.gov.au/our-council/news/article/1615"
                    },
                    {
                        "linkText": "Yass Valley Council - Facebook",
                        "linkURL": "https://www.facebook.com/YassValleyCouncil/"
                    }
                ],
                "headline": "",
                "periods": [],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1659753874000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "null",
                "adviceA": "Use an alternative route",
                "adviceB": "Never drive through floodwater",
                "adviceC": " ",
                "incidentKind": "Unplanned",
                "mainCategory": "FLOODING",
                "lastUpdated": 1659764255905,
                "otherAdvice": "<p>Other local roads in the Yass Valley Council area may be closed due to flooding or affected by recent adverse weather. Visit Council&#39;s <a href=\"https://www.yassvalley.nsw.gov.au/our-council/news/article/1615\" target=\"_blank\">website</a> or <a href=\"https://www.facebook.com/YassValleyCouncil/\" target=\"_blank\">social media page</a> for further information.</p><p><br></p>",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": [
                    "Local Council"
                ],
                "encodedPolylines": [
                    {
                        "levels": "",
                        "coords": "ffqtEw{wl[l@o@|@_AX[z@y@z@y@j@s@j@u@NQVa@j@gAh@oA\\iAVy@j@kBJa@RaAXeBRwALwALwADa@Fs@TeDNmAJeAHqAVgBVsAVwAXiAtAkEL]Tw@`@_Af@qATaANm@\\kB^_BRmA?AVeATu@Zq@\\w@FMHUXs@fBoCn@gAf@y@JMh@o@b@c@t@}@PSFIh@m@XYNOX]^Wl@c@^Sr@[x@[LIvAk@fEcBvAk@^QTKj@_@XULKnAmAdDcD\\WtDuCb@]X[TYVc@R_@JWFQHWF]Hi@Js@@OBs@?g@Ag@Ek@IaAc@mDUiBKaAA_A@s@Dg@Fk@Jm@Nk@@EPg@BKZq@^{@Zi@hAiCjAcC|B}E`@}@Zw@JWRi@Xu@Rq@Je@Hk@DWL_AHw@l@_K@SB]L_BDg@PgA@CJk@Jg@Ni@Ti@Xi@Va@X_@^e@ZYHGLInDcCl@a@tFuDXUdD{Bd@c@`@c@`@e@j@y@DGRe@L]Tu@No@Jg@Fm@Bk@Ba@@a@AaACu@Gq@Gc@Gi@Km@c@sCEOCQEW"
                    }
                ],
                "displayName": "FLOODING",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Patemans Lane",
                        "delay": "",
                        "impactedLanes": [
                            {
                                "affectedDirection": "Both directions",
                                "closedLanes": "",
                                "description": "",
                                "extent": "Closed",
                                "numberOfLanes": "",
                                "roadType": "Road"
                            }
                        ],
                        "locationQualifier": "between",
                        "mainStreet": "Murrumbateman Road",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Southern Highlands",
                        "secondLocation": "Nanima Road",
                        "suburb": "Murrumbateman",
                        "trafficVolume": ""
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "id": 132411,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    146.5246926,
                    -34.7769397
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [],
                "headline": "FLOODING GILLENBAH Newell Highway between Sturt Highway and Reas Lane",
                "periods": [],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": true,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1660370724000,
                "isMajor": true,
                "name": null,
                "subCategoryA": "null",
                "adviceA": "Never drive through floodwater",
                "adviceB": "Use diversions",
                "adviceC": "Plan your journey",
                "incidentKind": "Unplanned",
                "mainCategory": "FLOODING",
                "lastUpdated": 1660967215124,
                "otherAdvice": "",
                "arrangementElements": [],
                "diversions": "<p><strong>Southbound: </strong>Sturt Hwy, Reas Ln.</p><p><strong>Northbound: </strong>Reas Ln, Sturt Hwy.</p><p>The diversion is suitable for all vehicles and will add around 5 minutes to your travel time.</p>",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": [
                    "Transport for NSW"
                ],
                "encodedPolylines": [
                    {
                        "levels": "",
                        "coords": "xwhsEokg}ZS[y@eAeAsAs@}@s@_Ao@{@IKiB}BKOY_@Y]OSyAmBoA_BuBqC{AmBg@q@qBkCoBeCaCaDiAyAsAgBaAoAW]aBuBq@{@W[aAgAiBkBqBmBgA}@u@o@}@s@WQWSm@a@EEiAu@cAo@eBcAoBcASIoAk@GEg@Sc@Qw@[YKm@Wu@YaAa@gCiAgAc@qB{@_@OWKw@[OGc@Q_A_@cAa@]O[OSIQIKEQIQIWOMIGEGGKIWSa@_@_@]CCMMQOMMMMECSQ]UQM]Ua@Um@[[O"
                    }
                ],
                "displayName": "FLOODING",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Sturt Highway",
                        "delay": "",
                        "impactedLanes": [
                            {
                                "affectedDirection": "Both directions",
                                "closedLanes": "",
                                "description": "",
                                "extent": "Closed",
                                "numberOfLanes": "",
                                "roadType": "Highway"
                            }
                        ],
                        "locationQualifier": "between",
                        "mainStreet": "Newell Highway",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Riverina",
                        "secondLocation": "Reas Lane",
                        "suburb": "Gillenbah",
                        "trafficVolume": ""
                    }
                ]
            }
        }
    ]
}
```


## Fire

Request:
```curl
curl -X GET --header 'Accept: application/json' --header 'Authorization: apikey YOURAPPKEY' 'https://api.transport.nsw.gov.au/v1/live/hazards/fire/all'
```

Response: *(no fires recorded at the moment of writing)*
```json
{
    "type": "FeatureCollection",
    "lastPublished": 1660968303000,
    "layerName": "Fire",
    "rights": {
        "copyright": "Transport for NSW",
        "licence": "https://opendata.transport.nsw.gov.au/dataset/live-traffic-hazards"
    },
    "features": []
}
```


## Incident

Request:
```curl
curl -X GET --header 'Accept: application/json' --header 'Authorization: apikey YOURAPPKEY' 'https://api.transport.nsw.gov.au/v1/live/hazards/incident/all'
```

Response:
```json
{
    "type": "FeatureCollection",
    "lastPublished": 1660968333000,
    "layerName": "Incident",
    "rights": {
        "copyright": "Transport for NSW",
        "licence": "https://opendata.transport.nsw.gov.au/dataset/live-traffic-hazards"
    },
    "features": [
        {
            "type": "Feature",
            "id": 116163,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    152.590494,
                    -28.900432
                ],
                "collections": null
            },
            "properties": {
                "webLinks": [],
                "headline": "",
                "periods": [],
                "speedLimit": 40,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1647038522000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "Road damage",
                "adviceA": "Reduced speed limit",
                "adviceB": "Check signage",
                "adviceC": "Allow extra travel time",
                "incidentKind": "Unplanned",
                "mainCategory": "HAZARD",
                "lastUpdated": 1658453639000,
                "otherAdvice": "<p>Portable traffic lights will allow motorists to pass in one direction at a time. <strong></strong><br>There is a 4 metre width restriction for vehicles at this location.</p>",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": null,
                "encodedPolylines": [],
                "displayName": "HAZARD Road damage",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Rodgers Road",
                        "delay": "",
                        "impactedLanes": [
                            {
                                "affectedDirection": "Both directions",
                                "closedLanes": "",
                                "description": "",
                                "extent": "Affected",
                                "numberOfLanes": "",
                                "roadType": "Highway"
                            }
                        ],
                        "locationQualifier": "between",
                        "mainStreet": "Bruxner Highway",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "North Coast NSW",
                        "secondLocation": "Captains Road",
                        "suburb": "Tabulam",
                        "trafficVolume": ""
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "id": 125981,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    148.234473,
                    -32.947314
                ],
                "collections": null
            },
            "properties": {
                "webLinks": [],
                "headline": "",
                "periods": [],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1656651292000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "Road damage",
                "adviceA": "Allow extra travel time",
                "adviceB": "Reduce your speed",
                "adviceC": "Exercise caution",
                "incidentKind": "Unplanned",
                "mainCategory": "HAZARD",
                "lastUpdated": 1658377269000,
                "otherAdvice": "Alternating (stop/slow) traffic conditions are in place.",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": [
                    "Transport for NSW"
                ],
                "encodedPolylines": [],
                "displayName": "HAZARD Road damage",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "1km south of Alectown",
                        "delay": "",
                        "impactedLanes": [
                            {
                                "affectedDirection": "Both directions",
                                "closedLanes": "",
                                "description": "",
                                "extent": "Affected",
                                "numberOfLanes": "",
                                "roadType": "Highway"
                            }
                        ],
                        "locationQualifier": "approximately",
                        "mainStreet": "Newell Highway",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Central NSW",
                        "secondLocation": "",
                        "suburb": "Alectown",
                        "trafficVolume": ""
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "id": 132964,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2170364,
                    -33.8913497
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [],
                "headline": "",
                "periods": [],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1660968258000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "Car",
                "adviceA": "Exercise caution",
                "adviceB": " ",
                "adviceC": " ",
                "incidentKind": "Unplanned",
                "mainCategory": "BREAKDOWN",
                "lastUpdated": 1660968311653,
                "otherAdvice": "",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": [
                    "Transport for NSW",
                    "Tow Truck"
                ],
                "encodedPolylines": [],
                "displayName": "BREAKDOWN Car",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Cleveland Street",
                        "delay": "",
                        "impactedLanes": [
                            {
                                "affectedDirection": "Southbound",
                                "closedLanes": "1",
                                "description": "Right turn lane",
                                "extent": "Lanes closed",
                                "numberOfLanes": "4",
                                "roadType": ""
                            }
                        ],
                        "locationQualifier": "approaching",
                        "mainStreet": "South Dowling Street",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Sydney",
                        "secondLocation": "",
                        "suburb": "Surry Hills",
                        "trafficVolume": ""
                    }
                ]
            }
        }
    ]
}
```



## Roadwork

Request:
```curl
curl -X GET --header 'Accept: application/json' --header 'Authorization: apikey YOURAPPKEY' 'https://api.transport.nsw.gov.au/v1/live/hazards/roadwork/all'
```

Response: *(no fires recorded at the moment of writing)*
```json
{
    "type": "FeatureCollection",
    "lastPublished": 1660968303000,
    "layerName": "Roadwork",
    "rights": {
        "copyright": "Transport for NSW",
        "licence": "https://opendata.transport.nsw.gov.au/dataset/live-traffic-hazards"
    },
    "features": [
        {
            "type": "Feature",
            "id": 131109,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.560692,
                    -32.819312
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [],
                "headline": "",
                "periods": [
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Affected",
                        "roadtype": "",
                        "direction": "Both directions",
                        "finishTime": "5:00pm",
                        "fromDay": "Every Day",
                        "startTime": "7:00am",
                        "toDay": ""
                    }
                ],
                "speedLimit": 60,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": true,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1659055525000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "Road/lane widening",
                "adviceA": "Reduced speed limit",
                "adviceB": "Expect delays",
                "adviceC": " ",
                "end": 1661497200000,
                "incidentKind": "Planned",
                "mainCategory": "SCHEDULED ROADWORK",
                "lastUpdated": 1659055526602,
                "otherAdvice": "<p>Alternating (stop/slow) traffic conditions will be in place. The speed limit outside work hours is 60km/h. </p>",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": null,
                "encodedPolylines": [],
                "duration": null,
                "start": 1651068000000,
                "displayName": "SCHEDULED ROADWORK Road/lane widening",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Lings Road",
                        "delay": "",
                        "impactedLanes": [],
                        "locationQualifier": "at",
                        "mainStreet": "John Renshaw Drive",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Hunter",
                        "secondLocation": "",
                        "suburb": "Buchanan",
                        "trafficVolume": ""
                    }
                ]
            }
        },
        {
            "type": "Feature",
            "id": 132681,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    151.2098817,
                    -33.867472
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [],
                "headline": "",
                "periods": [
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Closed",
                        "roadtype": "Road",
                        "direction": "Southbound",
                        "finishTime": "5:00am",
                        "fromDay": "Sunday",
                        "startTime": "9:00pm",
                        "toDay": ""
                    },
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Closed",
                        "roadtype": "Road",
                        "direction": "Southbound",
                        "finishTime": "5:00am",
                        "fromDay": "Monday",
                        "startTime": "9:00pm",
                        "toDay": ""
                    },
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Closed",
                        "roadtype": "Road",
                        "direction": "Southbound",
                        "finishTime": "5:00am",
                        "fromDay": "Tuesday",
                        "startTime": "9:00pm",
                        "toDay": ""
                    },
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Closed",
                        "roadtype": "Road",
                        "direction": "Southbound",
                        "finishTime": "5:00am",
                        "fromDay": "Wednesday",
                        "startTime": "9:00pm",
                        "toDay": ""
                    },
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Closed",
                        "roadtype": "Road",
                        "direction": "Southbound",
                        "finishTime": "5:00am",
                        "fromDay": "Thursday",
                        "startTime": "9:30pm",
                        "toDay": ""
                    }
                ],
                "speedLimit": -1,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": false,
                "isNewIncident": true,
                "publicTransport": "",
                "impactingNetwork": false,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1660691698000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "Utilities",
                "adviceA": "Use diversions",
                "adviceB": "Check signage",
                "adviceC": " ",
                "end": 1661457600000,
                "incidentKind": "Planned",
                "mainCategory": "SCHEDULED ROADWORK",
                "lastUpdated": 1660691699228,
                "otherAdvice": "",
                "arrangementElements": [],
                "diversions": "<p>Via Hunter St and Elizabeth St,, or via Hunter St, Pitt St and King St.</p>",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": null,
                "encodedPolylines": [],
                "duration": null,
                "start": 1661076000000,
                "displayName": "SCHEDULED ROADWORK Utilities",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Hunter Street",
                        "delay": "",
                        "impactedLanes": [],
                        "locationQualifier": "between",
                        "mainStreet": "Castlereagh Street",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "Sydney",
                        "secondLocation": "King Street",
                        "suburb": "Sydney",
                        "trafficVolume": ""
                    }
                ]
            }
        },

        {
            "type": "Feature",
            "id": 127051,
            "geometry": {
                "type": "Point",
                "coordinates": [
                    150.6056457,
                    -30.3600519
                ],
                "collections": []
            },
            "properties": {
                "webLinks": [],
                "headline": "",
                "periods": [
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Affected",
                        "roadtype": "Road",
                        "direction": "Both directions",
                        "finishTime": "6:00pm",
                        "fromDay": "Weekdays",
                        "startTime": "7:00am",
                        "toDay": ""
                    },
                    {
                        "closureType": "ROAD_CLOSURE",
                        "roadextent": "Affected",
                        "roadtype": "Road",
                        "direction": "Both directions",
                        "finishTime": "1:00pm",
                        "fromDay": "Saturday",
                        "startTime": "8:00am",
                        "toDay": ""
                    }
                ],
                "speedLimit": 40,
                "weblinkUrl": null,
                "expectedDelay": -1,
                "ended": true,
                "isNewIncident": false,
                "publicTransport": "",
                "impactingNetwork": true,
                "subCategoryB": null,
                "arrangementAttachments": [],
                "isInitialReport": false,
                "created": 1657522996000,
                "isMajor": false,
                "name": null,
                "subCategoryA": "null",
                "adviceA": "Reduced speed limit",
                "adviceB": "Check signage",
                "adviceC": " ",
                "end": 1660964400000,
                "incidentKind": "Planned",
                "mainCategory": "SCHEDULED ROADWORK",
                "lastUpdated": 1660964446858,
                "otherAdvice": "<p>One lane will be closed in each direction 24hrs/day.</p><p>Motorists are advised to allow approximately 5 minutes of additional travel time. </p>",
                "arrangementElements": [],
                "diversions": "",
                "additionalInfo": [],
                "weblinkName": null,
                "attendingGroups": null,
                "encodedPolylines": [],
                "duration": null,
                "start": 1657659600000,
                "displayName": "SCHEDULED ROADWORK - Pavement rehabilitation",
                "media": [],
                "roads": [
                    {
                        "conditionTendency": "",
                        "crossStreet": "Woodsreef Road",
                        "delay": "",
                        "impactedLanes": [],
                        "locationQualifier": "at",
                        "mainStreet": "Bingara Road (Manilla Road)",
                        "quadrant": "",
                        "queueLength": 0,
                        "region": "New England North West",
                        "secondLocation": "",
                        "suburb": "Barraba",
                        "trafficVolume": ""
                    }
                ]
            }
        }
    ]
}
```