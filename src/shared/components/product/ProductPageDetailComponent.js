import React from 'react';
import ajax from 'superagent';

import ProductTitleComponent from './ProductTitleComponent';
import ProductDataComponent from './ProductDataComponent';
import ProductBuyBoxComponent from './ProductBuyBoxComponent';
import ProductOtherAdvertsComponent from './ProductOtherAdvertsComponent';

class ProductPageDetailComponent extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        result : {},
        product : {}
      };

  }

  componentDidMount() {
    var baseUrl = 'http://ws.sse-deb-dev.priceminister.lan/rest/product/v1/get';

    ajax.get(`${baseUrl}?advertType=ALL&productId=${this.props.productId}&channel=hackathon&loadProductDetails=true`)
        .set({
          //'User-Agent': 'HACKATHON Q1.2016',
          'Accept' : 'application/json'
        })
        .end((error, response) => {
            if (!error && response) {
                this.setState({
                  result : response.body.result,
                  product : {
                    "id" : response.body.result.id,
                    "urlName" : response.body.result.urlName,
                    "breadcrumbs" : response.body.result.breadcrumbs,
                    "headline" : response.body.result.headline,
                    "reviewsAverageNote" : response.body.result.reviewsAverageNote,
                    "nbReviews" : response.body.result.nbReviews,
                    "imagesUrls" : response.body.result.imagesUrls,
                    "isAvailable" : response.body.result.isAvailable,
                    "isMevFormAvailable" : response.body.result.isMevFormAvailable,
                    "newBestPrice" : response.body.result.newBestPrice,
                    "usedBestPrice" : response.body.result.usedBestPrice,
                    "bestOffers" : response.body.result.bestOffers,
                    "nbAdverts" : response.body.result.advertsCount,
                    "nbNewAdverts" : response.body.result.advertsNewCount,
                    "nbUsedAdverts" : response.body.result.advertsUsedCount,
                    "adverts" : response.body.result.adverts
                  }
                });
            } else {
                var response = this.getFakeResponse();
                this.setState({
                  result : response.result,
                  product : {
                    "id" : response.result.id,
                    "urlName" : response.result.urlName,
                    "breadcrumbs" : response.result.breadcrumbs,
                    "headline" : response.result.headline,
                    "reviewsAverageNote" : response.result.reviewsAverageNote,
                    "nbReviews" : response.result.nbReviews,
                    "imagesUrls" : response.result.imagesUrls,
                    "isAvailable" : response.result.isAvailable,
                    "isMevFormAvailable" : response.result.isMevFormAvailable,
                    "newBestPrice" : response.result.newBestPrice,
                    "usedBestPrice" : response.result.usedBestPrice,
                    "bestOffers" : response.result.bestOffers,
                    "nbAdverts" : response.result.advertsCount,
                    "nbNewAdverts" : response.result.advertsNewCount,
                    "nbUsedAdverts" : response.result.advertsUsedCount,
                    "adverts" : response.result.adverts
                  }
                });
            }
        }
    );
  }

  // Mettre dans ProductPageDetailComponent.render() le contenu de la page
  render() {
    return <div>
            <div className="row">
              <div className="col-md-12">
                <div className="product-box2">
                  <ProductTitleComponent product={this.state.product}/>
                  <div className="row">
                    <ProductDataComponent product={this.state.product}/>
                    <ProductBuyBoxComponent product={this.state.product}/>
                  </div>
                </div>
              </div>
            </div>
            {this.renderProductAdverts()}
            </div>;
  }

  renderProductAdverts() {
    if (!this.state.product || this.state.product.nbAdverts === 0) {
      return "";
    }
    else {
      return <ProductOtherAdvertsComponent product={this.state.product}/>
    }
  }

  getFakeResponse() {
    return {
      "webserviceVersion": "1",
      "result": {
        "aisle": "[TelPDA]::[Accessoiresmobiles]::[EtuiApple]",
        "id": 113097659,
        "isDigital": false,
        "urlName": "coque-etui-housse-effet-carbone-pour-iphone-4-iphone4-clip-etui-et-housse",
        "productScope": "PUBLIC",
        "adverts": [
          {
            "advertId": 614695902,
            "productId": 113097659,
            "salePrice": 7,
            "shippingAmount": 0,
            "seller": {
              "id": 21732772,
              "login": "Vendos85",
              "type": "PRO",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": 1280014348000,
              "lastLoginDate": 1456925197000,
              "saleCommitCount": 57173,
              "totalSaleCount": 58597,
              "saleCount": 57173,
              "averageScore": 4.37,
              "isoCountryId": 249,
              "sellerAnswerTime": 6055025520274,
              "isMicroCompagny": false
            },
            "attributes": null,
            "imagesUrls": [],
            "shippingTypes": [
              "NORMAL",
              "SUIVI",
              "RECOMMANDE",
              "CHRONOPOST"
            ],
            "availableShippingTypes": [
              {
                "id": 10,
                "label": "Normal",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 30,
                "label": "Suivi",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 15,
                "label": "Recommandé",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 60,
                "label": "Chronopost",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              }
            ],
            "isPickupAllowed": false,
            "pickupDistance": 0,
            "isAdvertInCircleRange": false,
            "quality": "NEW",
            "type": "NEW",
            "sellerComment": "nous vendons une housse carbone iphone 4",
            "expressDeliveryDate": 1457132399999,
            "isUnlimitedQuantity": false,
            "images": [],
            "rspMinimumAmount": 7
          },
          {
            "advertId": 873511852,
            "productId": 113097659,
            "salePrice": 9.49,
            "shippingAmount": 2.9,
            "seller": {
              "id": 21829837,
              "login": "COKenSTOK",
              "type": "PRO",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": 1281094050000,
              "lastLoginDate": 1456921751000,
              "saleCommitCount": 70040,
              "totalSaleCount": 72614,
              "saleCount": 70040,
              "averageScore": 4.8,
              "isoCountryId": 249,
              "sellerAnswerTime": 3569774410911,
              "isMicroCompagny": false
            },
            "attributes": null,
            "imagesUrls": [
              "http://pmcdn.priceminister.com/photo/1011754335.jpg"
            ],
            "shippingTypes": [
              "NORMAL",
              "SUIVI",
              "RECOMMANDE"
            ],
            "availableShippingTypes": [
              {
                "id": 10,
                "label": "Normal",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 30,
                "label": "Suivi",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              },
              {
                "id": 15,
                "label": "Recommandé",
                "isAllowedByPlatform": false,
                "isAllowedForSeller": false,
                "canBeModified": false,
                "isMandatory": false,
                "isPreselectedByDefault": false,
                "isMandatoryForFreeShipping": false,
                "isUnsupportedWithFreeShipping": false
              }
            ],
            "isPickupAllowed": false,
            "pickupDistance": 0,
            "isAdvertInCircleRange": false,
            "quality": "NEW",
            "type": "NEW",
            "sellerComment": "&#9668; &#9608; &#9658; &#9668; &#9608; &#9658; \"CARBONE RIGIDE Noir\" Housse iPhone 4G 4S De Qualité &#9733;&#9733;&#9733;&#9733; Protection Totale de votre iphone.Vendeur PRO Facture.Envoi tres rapide (Sauf week-end).",
            "expressDeliveryDate": 1457132399999,
            "isUnlimitedQuantity": false,
            "images": [
              {
                "imagesUrls": {
                  "entry": [
                    {
                      "size": "ORIGINAL",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335.jpg"
                    },
                    {
                      "size": "SMALL",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335_S.jpg"
                    },
                    {
                      "size": "MEDIUM",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335_M.jpg"
                    },
                    {
                      "size": "LARGE",
                      "url": "http://pmcdn.priceminister.com/photo/1011754335_L.jpg"
                    }
                  ]
                },
                "id": 1011754335
              }
            ],
            "rspMinimumAmount": 10
          }
        ],
        "bestOffers": {
          "new": {
            "isBuybox": false,
            "score": 0,
            "adverts": [
              {
                "advertId": 614695902,
                "productId": 113097659,
                "salePrice": 7,
                "shippingAmount": 0,
                "seller": {
                  "id": 21732772,
                  "login": "Vendos85",
                  "type": "PRO",
                  "isPreOrderGrant": false,
                  "userFirstAdvertTrackingDate": null,
                  "isUserBuyer": false,
                  "userBirthDate": 0,
                  "creationDate": 1280014348000,
                  "lastLoginDate": 1456925197000,
                  "saleCommitCount": 57173,
                  "totalSaleCount": 58597,
                  "saleCount": 57173,
                  "averageScore": 4.37,
                  "isoCountryId": 249,
                  "sellerAnswerTime": 6055025520274,
                  "isMicroCompagny": false
                },
                "attributes": null,
                "imagesUrls": [],
                "shippingTypes": [
                  "NORMAL",
                  "SUIVI",
                  "RECOMMANDE",
                  "CHRONOPOST"
                ],
                "availableShippingTypes": [
                  {
                    "id": 10,
                    "label": "Normal",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  },
                  {
                    "id": 30,
                    "label": "Suivi",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  },
                  {
                    "id": 15,
                    "label": "Recommandé",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  },
                  {
                    "id": 60,
                    "label": "Chronopost",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  }
                ],
                "isPickupAllowed": false,
                "pickupDistance": 0,
                "isAdvertInCircleRange": false,
                "quality": "NEW",
                "type": "NEW",
                "sellerComment": "nous vendons une housse carbone iphone 4",
                "expressDeliveryDate": 1457132399999,
                "isUnlimitedQuantity": false,
                "images": [],
                "rspMinimumAmount": 7
              },
              {
                "advertId": 873511852,
                "productId": 113097659,
                "salePrice": 9.49,
                "shippingAmount": 2.9,
                "seller": {
                  "id": 21829837,
                  "login": "COKenSTOK",
                  "type": "PRO",
                  "isPreOrderGrant": false,
                  "userFirstAdvertTrackingDate": null,
                  "isUserBuyer": false,
                  "userBirthDate": 0,
                  "creationDate": 1281094050000,
                  "lastLoginDate": 1456921751000,
                  "saleCommitCount": 70040,
                  "totalSaleCount": 72614,
                  "saleCount": 70040,
                  "averageScore": 4.8,
                  "isoCountryId": 249,
                  "sellerAnswerTime": 3569774410911,
                  "isMicroCompagny": false
                },
                "attributes": null,
                "imagesUrls": [
                  "http://pmcdn.priceminister.com/photo/1011754335.jpg"
                ],
                "shippingTypes": [
                  "NORMAL",
                  "SUIVI",
                  "RECOMMANDE"
                ],
                "availableShippingTypes": [
                  {
                    "id": 10,
                    "label": "Normal",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  },
                  {
                    "id": 30,
                    "label": "Suivi",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  },
                  {
                    "id": 15,
                    "label": "Recommandé",
                    "isAllowedByPlatform": false,
                    "isAllowedForSeller": false,
                    "canBeModified": false,
                    "isMandatory": false,
                    "isPreselectedByDefault": false,
                    "isMandatoryForFreeShipping": false,
                    "isUnsupportedWithFreeShipping": false
                  }
                ],
                "isPickupAllowed": false,
                "pickupDistance": 0,
                "isAdvertInCircleRange": false,
                "quality": "NEW",
                "type": "NEW",
                "sellerComment": "&#9668; &#9608; &#9658; &#9668; &#9608; &#9658; \"CARBONE RIGIDE Noir\" Housse iPhone 4G 4S De Qualité &#9733;&#9733;&#9733;&#9733; Protection Totale de votre iphone.Vendeur PRO Facture.Envoi tres rapide (Sauf week-end).",
                "expressDeliveryDate": 1457132399999,
                "isUnlimitedQuantity": false,
                "images": [
                  {
                    "imagesUrls": {
                      "entry": [
                        {
                          "size": "ORIGINAL",
                          "url": "http://pmcdn.priceminister.com/photo/1011754335.jpg"
                        },
                        {
                          "size": "SMALL",
                          "url": "http://pmcdn.priceminister.com/photo/1011754335_S.jpg"
                        },
                        {
                          "size": "MEDIUM",
                          "url": "http://pmcdn.priceminister.com/photo/1011754335_M.jpg"
                        },
                        {
                          "size": "LARGE",
                          "url": "http://pmcdn.priceminister.com/photo/1011754335_L.jpg"
                        }
                      ]
                    },
                    "id": 1011754335
                  }
                ],
                "rspMinimumAmount": 10
              }
            ]
          }
        },
        "bestPrice": 0,
        "newBestPrice": 7,
        "usedBestPrice": 0,
        "collectibleBestPrice": 0,
        "collapseBestPrice": "7.00",
        "priceList": "3.00",
        "summaryNewBestPrice": "7.00",
        "summaryBestPrice": "7.00",
        "summaryAvailableStock": true,
        "summaryNew": true,
        "advertsCount": 2,
        "advertsNewCount": 2,
        "advertsUsedCount": 0,
        "advertsCollectibleCount": 0,
        "headline": "Coque Etui Housse Effet Carbone Pour Iphone 4 Iphone4",
        "caption": "Générique",
        "topic": " Etui ",
        "references": {},
        "breadcrumbs": [
          {
            "label": "Téléphonie et Tablettes",
            "url": "/nav/Tel-PDA",
            "isBlur": true
          },
          {
            "label": "Accessoires pour téléphone mobile et tablette",
            "url": "/nav/Tel-PDA_Accessoires-mobiles",
            "isBlur": false
          },
          {
            "label": "Etui  Apple",
            "url": "/nav/Tel-PDA_Accessoires-mobiles/f3/Apple/f5/Etui",
            "isBlur": false
          }
        ],
        "reviewsAverageNote": 4.056603773584905,
        "nbReviews": 53,
        "imagesUrls": [
          "http://pmcdn.priceminister.com/photo/869181018.jpg",
          "http://pmcdn.priceminister.com/photo/955747449.jpg"
        ],
        "reviews": [
          {
            "note": 3,
            "title": "mieux",
            "author": {
              "login": "hanenehb",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1322751944000,
            "description": "la pochette s'abime vite fait, dommage elle est belle"
          },
          {
            "note": 3,
            "title": "mauvaise qualité",
            "author": {
              "login": "Geoy5_7",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1319294368000,
            "description": "je trouve que la qualité de l'article est mauvaise les tissus ce dégrade très vite :("
          },
          {
            "note": 1,
            "title": "avis",
            "author": {
              "login": "tintin38360",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1313847545000,
            "description": "étui qui protège mais sans plus. assez fragile tout de même"
          },
          {
            "note": 5,
            "title": "tres bien",
            "author": {
              "login": "porche67",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1431545460000,
            "description": "bien recu impeccable,envoi rapide\nje recommande\nbon materiaux"
          },
          {
            "note": 5,
            "title": "Super coque !",
            "author": {
              "login": "eltoro78",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1420574651000,
            "description": "Cette coque est super ! Elle protège en tièrement mon écran. J'en suis entièrement satisfait."
          },
          {
            "note": 5,
            "title": "Très bien",
            "author": {
              "login": "floo_13100",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1396348767000,
            "description": "Coque très solide. Rien a dire. Je suis satisfaite de ce produit"
          },
          {
            "note": 5,
            "title": "bon produit",
            "author": {
              "login": "chiwi11",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1394741075000,
            "description": "envoie rapide et bon produit marche tres bien à conseiller"
          },
          {
            "note": 5,
            "title": "etui",
            "author": {
              "login": "ramalho52",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1394055807000,
            "description": "Je suis satisfait Coque Etui Housse Effet Carbone Pour Iphone 4 Iphone4"
          },
          {
            "note": 5,
            "title": "housse i phone",
            "author": {
              "login": "veronike37",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1392233887000,
            "description": "très bon article qualité et couleur sans aucun problème  à conseiller +++++"
          },
          {
            "note": 5,
            "title": "tres bien",
            "author": {
              "login": "camou27s",
              "isPreOrderGrant": false,
              "userFirstAdvertTrackingDate": null,
              "isUserBuyer": false,
              "userBirthDate": 0,
              "creationDate": null,
              "lastLoginDate": null
            },
            "date": 1390225678000,
            "description": "cette pochette et bien faites elle protege bien l ecrant est le cotes .... tout est niquel surtout sur priceminister merci priceminister"
          }
        ],
        "productDetailTitle": "Fiche Technique",
        "description": "<li class=\"sub\"><span class=\"label\">Fabricant&nbsp;: </span><em class=\"value\"><a data-pmbt=\"javascript:void PM.BT.ubs(47,'s',47,'g',37,'e9n',37,'e9rique')\" class=\"pmbt ft_link\">Générique</a></em></li><li class=\"sub\"><span class=\"label\">Type de produit&nbsp;: </span><em class=\"value\">Clip, Étui et Housse</em></li><li class=\"sub\"><span class=\"label\">Compatible téléphones&nbsp;: </span><em class=\"value\">Apple</em></li>",
        "specifications": {
          "sections": {
            "entry": []
          }
        },
        "pickupAllowed": false,
        "isPreOrder": false,
        "releaseDate": null,
        "attributes": null,
        "isMemo": false,
        "ownerId": 0,
        "isMevFormAvailable": true,
        "isNotModifiedSinceLastCrawl": false,
        "isAvailable": true,
        "isManuallySEOExcludedProduct": false,
        "isAutomaticallySEOExcludedProduct": false,
        "hasImages": true,
        "isChangeDateModified": false,
        "categories": [
          "Tel-PDA",
          "Accessoires-mobiles"
        ],
        "pickUpSelected": true,
        "hasOnlyPickupAdverts": false,
        "images": [
          {
            "imagesUrls": {
              "entry": [
                {
                  "size": "ORIGINAL",
                  "url": "http://pmcdn.priceminister.com/photo/869181018.jpg"
                },
                {
                  "size": "SMALL",
                  "url": "http://pmcdn.priceminister.com/photo/869181018_S.jpg"
                },
                {
                  "size": "MEDIUM",
                  "url": "http://pmcdn.priceminister.com/photo/869181018_M.jpg"
                },
                {
                  "size": "LARGE",
                  "url": "http://pmcdn.priceminister.com/photo/869181018_L.jpg"
                }
              ]
            },
            "id": 869181018
          },
          {
            "imagesUrls": {
              "entry": [
                {
                  "size": "ORIGINAL",
                  "url": "http://pmcdn.priceminister.com/photo/955747449.jpg"
                },
                {
                  "size": "SMALL",
                  "url": "http://pmcdn.priceminister.com/photo/955747449_S.jpg"
                },
                {
                  "size": "MEDIUM",
                  "url": "http://pmcdn.priceminister.com/photo/955747449_M.jpg"
                },
                {
                  "size": "LARGE",
                  "url": "http://pmcdn.priceminister.com/photo/955747449_L.jpg"
                }
              ]
            },
            "id": 955747449
          }
        ],
        "rspMinimumAmount": 7
      }
    };
  }

}

export default ProductPageDetailComponent;
