var wms_layers = [];

var lyr_Swisstopoimagesswissimage_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.images-swissimage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Swisstopo images-swissimage",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Swisstopoimagesswissimage_0, 0]);
var lyr_SwisstopoLandeskarte110000farbig_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.landeskarte-farbe-10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Swisstopo Landeskarte 1:10`000 (farbig)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SwisstopoLandeskarte110000farbig_1, 0]);
var format_KarstGrundwasserleiter_2 = new ol.format.GeoJSON();
var features_KarstGrundwasserleiter_2 = format_KarstGrundwasserleiter_2.readFeatures(json_KarstGrundwasserleiter_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KarstGrundwasserleiter_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KarstGrundwasserleiter_2.addFeatures(features_KarstGrundwasserleiter_2);
var lyr_KarstGrundwasserleiter_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KarstGrundwasserleiter_2, 
                style: style_KarstGrundwasserleiter_2,
                popuplayertitle: "Karst-Grundwasserleiter",
                interactive: true,
                    title: '<img src="styles/legend/KarstGrundwasserleiter_2.png" /> Karst-Grundwasserleiter'
                });
var lyr_AmtlicheVermessung_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.ch/db/avc_0/deu",
    attributions: ' ',
                              params: {
                                "LAYERS": "avc",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Amtliche Vermessung",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AmtlicheVermessung_3, 0]);
var lyr_Bewirtschaftungseinheit_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.ch/db/lwb_bewirtschaftungseinheit_v2_0_0/deu",
    attributions: ' ',
                              params: {
                                "LAYERS": "bewirtschaftungseinheit",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Bewirtschaftungseinheit",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bewirtschaftungseinheit_4, 0]);
var lyr_StrassenundWegeswissTLM3D_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swisstlm3d-strassen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Strassen und Wege swissTLM3D",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StrassenundWegeswissTLM3D_5, 0]);
var lyr_GefhrdungskarteOberflchenabfluss_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.gefaehrdungskarte-oberflaechenabfluss",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Gefährdungskarte Oberflächenabfluss",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GefhrdungskarteOberflchenabfluss_6, 0]);
var lyr_GewsserswissTLM3D_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.swisstlm3d-gewaessernetz",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Gewässer swissTLM3D",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GewsserswissTLM3D_7, 0]);
var lyr_BspHheSden_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bsp Höhe Süden",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BspHheSden_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [965288.627003, 6012560.111766, 966787.347762, 6014063.454102]
                            })
                        });
var lyr_BspHheNorden_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "Bsp Höhe Norden",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BspHheNorden_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [965311.810318, 6014040.070290, 966810.788364, 6015543.669127]
                            })
                        });
var lyr_Eschickon2Sued_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "Eschickon 2 Sued",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Eschickon2Sued_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [966787.347762, 6014016.436334, 968286.567270, 6015520.277403]
                            })
                        });
var lyr_Eschikon2Nord_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "Eschikon 2 Nord",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Eschikon2Nord_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [966810.788364, 6015496.635450, 968310.265329, 6017000.733188]
                            })
                        });
var lyr_Gewsseranschlusserweitert_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.blw.gewaesseranschlusskarte-direkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Gewässeranschluss erweitert",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewsseranschlusserweitert_12, 0]);
var lyr_Fliesswegkarte_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.blw.erosion-fliesswegkarte",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fliesswegkarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fliesswegkarte_13, 0]);
var lyr_ErosionsrisikoAckerqualitativ_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.blw.erosion",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Erosionsrisiko Acker qualitativ",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ErosionsrisikoAckerqualitativ_14, 0]);
var lyr_AmphibienWanderobjekte_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-amphibien_wanderobjekte",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Amphibien Wanderobjekte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AmphibienWanderobjekte_15, 0]);
var lyr_AmphibienOrtsfesteObjekte_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-amphibien",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Amphibien Ortsfeste Objekte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AmphibienOrtsfesteObjekte_16, 0]);
var lyr_Auengebiete_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-auen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Auengebiete",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Auengebiete_17, 0]);
var lyr_Flachmoore_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-flachmoore",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Flachmoore",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Flachmoore_18, 0]);
var lyr_Hochmoore_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-hochmoore",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Hochmoore",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Hochmoore_19, 0]);
var lyr_TrockenwiesenundweidenTWW_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "ch.bafu.bundesinventare-trockenwiesen_trockenweiden",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Trockenwiesen und -weiden (TWW)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TrockenwiesenundweidenTWW_20, 0]);
var lyr_Grundwasserschutzzonen_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.ch/db/planerischer_gewaesserschutz_v1_1_1/deu",
    attributions: ' ',
                              params: {
                                "LAYERS": "grundwasserschutzzonen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Grundwasserschutzzonen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Grundwasserschutzzonen_21, 0]);
var lyr_NutzungsflchenHauptkategorien_22 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.ch/db/lwb_nutzungsflaechen_v2_0_0/deu",
    attributions: ' ',
                              params: {
                                "LAYERS": "nutzungsflaechen_hauptkategorien",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Nutzungsflächen (Hauptkategorien)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NutzungsflchenHauptkategorien_22, 0]);
var lyr_Nutzungsflchen_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geodienste.ch/db/lwb_nutzungsflaechen_v2_0_0/deu",
    attributions: ' ',
                              params: {
                                "LAYERS": "nutzungsflaechen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Nutzungsflächen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Nutzungsflchen_23, 0]);
var group_BiotopenNatbedeutung = new ol.layer.Group({
                                layers: [lyr_AmphibienWanderobjekte_15,lyr_AmphibienOrtsfesteObjekte_16,lyr_Auengebiete_17,lyr_Flachmoore_18,lyr_Hochmoore_19,lyr_TrockenwiesenundweidenTWW_20,],
                                fold: "open",
                                title: "Biotopen Nat. bedeutung"});
var group_AndereGruppe = new ol.layer.Group({
                                layers: [lyr_Gewsseranschlusserweitert_12,lyr_Fliesswegkarte_13,lyr_ErosionsrisikoAckerqualitativ_14,],
                                fold: "open",
                                title: "Andere Gruppe"});
var group_WeitereKarten = new ol.layer.Group({
                                layers: [lyr_KarstGrundwasserleiter_2,lyr_AmtlicheVermessung_3,lyr_Bewirtschaftungseinheit_4,lyr_StrassenundWegeswissTLM3D_5,lyr_GefhrdungskarteOberflchenabfluss_6,lyr_GewsserswissTLM3D_7,lyr_BspHheSden_8,lyr_BspHheNorden_9,lyr_Eschickon2Sued_10,lyr_Eschikon2Nord_11,],
                                fold: "open",
                                title: "Weitere Karten"});
var group_Hintergrundkartenv3 = new ol.layer.Group({
                                layers: [lyr_Swisstopoimagesswissimage_0,lyr_SwisstopoLandeskarte110000farbig_1,],
                                fold: "open",
                                title: "Hintergrundkarten v3"});

lyr_Swisstopoimagesswissimage_0.setVisible(true);lyr_SwisstopoLandeskarte110000farbig_1.setVisible(false);lyr_KarstGrundwasserleiter_2.setVisible(false);lyr_AmtlicheVermessung_3.setVisible(false);lyr_Bewirtschaftungseinheit_4.setVisible(false);lyr_StrassenundWegeswissTLM3D_5.setVisible(false);lyr_GefhrdungskarteOberflchenabfluss_6.setVisible(false);lyr_GewsserswissTLM3D_7.setVisible(false);lyr_BspHheSden_8.setVisible(false);lyr_BspHheNorden_9.setVisible(false);lyr_Eschickon2Sued_10.setVisible(false);lyr_Eschikon2Nord_11.setVisible(false);lyr_Gewsseranschlusserweitert_12.setVisible(false);lyr_Fliesswegkarte_13.setVisible(false);lyr_ErosionsrisikoAckerqualitativ_14.setVisible(false);lyr_AmphibienWanderobjekte_15.setVisible(false);lyr_AmphibienOrtsfesteObjekte_16.setVisible(false);lyr_Auengebiete_17.setVisible(false);lyr_Flachmoore_18.setVisible(false);lyr_Hochmoore_19.setVisible(false);lyr_TrockenwiesenundweidenTWW_20.setVisible(false);lyr_Grundwasserschutzzonen_21.setVisible(false);lyr_NutzungsflchenHauptkategorien_22.setVisible(false);lyr_Nutzungsflchen_23.setVisible(false);
var layersList = [group_Hintergrundkartenv3,group_WeitereKarten,group_AndereGruppe,group_BiotopenNatbedeutung,lyr_Grundwasserschutzzonen_21,lyr_NutzungsflchenHauptkategorien_22,lyr_Nutzungsflchen_23];
lyr_KarstGrundwasserleiter_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'aquifertyp': 'aquifertyp', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'flaeche': 'flaeche', });
lyr_KarstGrundwasserleiter_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'aquifertyp': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'flaeche': 'TextEdit', });
lyr_KarstGrundwasserleiter_2.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'aquifertyp': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'flaeche': 'no label', });
lyr_KarstGrundwasserleiter_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});