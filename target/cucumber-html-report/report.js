$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OliwaSecondFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Feature wich makes some tests to the http://www.olivagourmet.pl web site",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Selecting one single product and adding to the cart and checking the prices",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I order one single Sierra Solana product \u0027\u003cproduct\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product \u0027\u003cproduct\u003e\u0027 should be added to the Cart with the correct price",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 8,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;1"
    },
    {
      "cells": [
        "18"
      ],
      "line": 9,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;2"
    },
    {
      "cells": [
        "15"
      ],
      "line": 10,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;3"
    },
    {
      "cells": [
        "12"
      ],
      "line": 11,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;4"
    },
    {
      "cells": [
        "20"
      ],
      "line": 12,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;5"
    },
    {
      "cells": [
        "44"
      ],
      "line": 13,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Selecting one single product and adding to the cart and checking the prices",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I order one single Sierra Solana product \u002718\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product \u002718\u0027 should be added to the Cart with the correct price",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 2960335880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartWithTheCorrectPrice(int)"
});
formatter.result({
  "duration": 507398088,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Selecting one single product and adding to the cart and checking the prices",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I order one single Sierra Solana product \u002715\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product \u002715\u0027 should be added to the Cart with the correct price",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 171670793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartWithTheCorrectPrice(int)"
});
formatter.result({
  "duration": 274967793,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Selecting one single product and adding to the cart and checking the prices",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I order one single Sierra Solana product \u002712\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product \u002712\u0027 should be added to the Cart with the correct price",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 160324992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartWithTheCorrectPrice(int)"
});
formatter.result({
  "duration": 288748758,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Selecting one single product and adding to the cart and checking the prices",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I order one single Sierra Solana product \u002720\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product \u002720\u0027 should be added to the Cart with the correct price",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 172282151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartWithTheCorrectPrice(int)"
});
formatter.result({
  "duration": 276017363,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Selecting one single product and adding to the cart and checking the prices",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-one-single-product-and-adding-to-the-cart-and-checking-the-prices;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I order one single Sierra Solana product \u002744\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "product \u002744\u0027 should be added to the Cart with the correct price",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 166085580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartWithTheCorrectPrice(int)"
});
formatter.result({
  "duration": 263675093,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "Selecting product by product, adding to the cart and checking the names",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I order one single Sierra Solana product \u0027\u003cproduct\u003e\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "product \u0027\u003cproduct\u003e\u0027 should be added to the Cart with the correct name",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;",
  "rows": [
    {
      "cells": [
        "product"
      ],
      "line": 20,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;1"
    },
    {
      "cells": [
        "18"
      ],
      "line": 21,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;2"
    },
    {
      "cells": [
        "15"
      ],
      "line": 22,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;3"
    },
    {
      "cells": [
        "12"
      ],
      "line": 23,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;4"
    },
    {
      "cells": [
        "20"
      ],
      "line": 24,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;5"
    },
    {
      "cells": [
        "44"
      ],
      "line": 25,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Selecting product by product, adding to the cart and checking the names",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I order one single Sierra Solana product \u002718\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "product \u002718\u0027 should be added to the Cart with the correct name",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 165901726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartAndContainCorrectName(int)"
});
formatter.result({
  "duration": 273258670,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Selecting product by product, adding to the cart and checking the names",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I order one single Sierra Solana product \u002715\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "product \u002715\u0027 should be added to the Cart with the correct name",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 170688606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartAndContainCorrectName(int)"
});
formatter.result({
  "duration": 280335237,
  "error_message": "java.lang.AssertionError: Names are not matching, founded \u0027EKOLOGICZNA \"BALDONA\" 5L***\u0027 when expected is \u0027EKOLOGICZNA \"BALDONA\" 5L\u0027\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat OliwaFirstTest.RESTzOliwekImplementation.itShouldBeAddedToTheCartAndContainCorrectName(RESTzOliwekImplementation.java:95)\r\n\tat ✽.Then product \u002715\u0027 should be added to the Cart with the correct name(OliwaSecondFeature.feature:18)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Selecting product by product, adding to the cart and checking the names",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I order one single Sierra Solana product \u002712\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "product \u002712\u0027 should be added to the Cart with the correct name",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 165875844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartAndContainCorrectName(int)"
});
formatter.result({
  "duration": 315630164,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Selecting product by product, adding to the cart and checking the names",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I order one single Sierra Solana product \u002720\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "product \u002720\u0027 should be added to the Cart with the correct name",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 162667783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartAndContainCorrectName(int)"
});
formatter.result({
  "duration": 260623664,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Selecting product by product, adding to the cart and checking the names",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-product-by-product,-adding-to-the-cart-and-checking-the-names;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I order one single Sierra Solana product \u002744\u0027",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "product \u002744\u0027 should be added to the Cart with the correct name",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 42
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String)"
});
formatter.result({
  "duration": 168882203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 9
    }
  ],
  "location": "RESTzOliwekImplementation.itShouldBeAddedToTheCartAndContainCorrectName(int)"
});
formatter.result({
  "duration": 270138519,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Selecting different products adding to the cart, verifying the total sum",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I order three products: \u0027\u003cproduct1\u003e\u0027, \u0027\u003cproduct2\u003e\u0027 and \u0027\u003cproduct3\u003e\u0027 and are added to the cart",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the total price should be correct calculated for the products \u0027\u003cproduct1\u003e\u0027, \u0027\u003cproduct2\u003e\u0027 and \u0027\u003cproduct3\u003e\u0027",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;",
  "rows": [
    {
      "cells": [
        "product1",
        "product2",
        "product3"
      ],
      "line": 32,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;1"
    },
    {
      "cells": [
        "44",
        "18",
        "12"
      ],
      "line": 33,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;2"
    },
    {
      "cells": [
        "15",
        "44",
        "20"
      ],
      "line": 34,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;3"
    },
    {
      "cells": [
        "12",
        "20",
        "18"
      ],
      "line": 35,
      "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Selecting different products adding to the cart, verifying the total sum",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I order three products: \u002744\u0027, \u002718\u0027 and \u002712\u0027 and are added to the cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the total price should be correct calculated for the products \u002744\u0027, \u002718\u0027 and \u002712\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 25
    },
    {
      "val": "18",
      "offset": 31
    },
    {
      "val": "12",
      "offset": 40
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderThreeProductsAndAreAddedToTheCart(int,int,int)"
});
formatter.result({
  "duration": 496335651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "44",
      "offset": 63
    },
    {
      "val": "18",
      "offset": 69
    },
    {
      "val": "12",
      "offset": 78
    }
  ],
  "location": "RESTzOliwekImplementation.theTotalPriceShouldBeCorrect(int,int,int)"
});
formatter.result({
  "duration": 250249786,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Selecting different products adding to the cart, verifying the total sum",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I order three products: \u002715\u0027, \u002744\u0027 and \u002720\u0027 and are added to the cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the total price should be correct calculated for the products \u002715\u0027, \u002744\u0027 and \u002720\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 25
    },
    {
      "val": "44",
      "offset": 31
    },
    {
      "val": "20",
      "offset": 40
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderThreeProductsAndAreAddedToTheCart(int,int,int)"
});
formatter.result({
  "duration": 493472092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 63
    },
    {
      "val": "44",
      "offset": 69
    },
    {
      "val": "20",
      "offset": 78
    }
  ],
  "location": "RESTzOliwekImplementation.theTotalPriceShouldBeCorrect(int,int,int)"
});
formatter.result({
  "duration": 386354336,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Selecting different products adding to the cart, verifying the total sum",
  "description": "",
  "id": "feature-wich-makes-some-tests-to-the-http://www.olivagourmet.pl-web-site;selecting-different-products-adding-to-the-cart,-verifying-the-total-sum;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@TestingREST"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I order three products: \u002712\u0027, \u002720\u0027 and \u002718\u0027 and are added to the cart",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "the total price should be correct calculated for the products \u002712\u0027, \u002720\u0027 and \u002718\u0027",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 25
    },
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "18",
      "offset": 40
    }
  ],
  "location": "RESTzOliwekImplementation.iOrderThreeProductsAndAreAddedToTheCart(int,int,int)"
});
formatter.result({
  "duration": 494775130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 63
    },
    {
      "val": "20",
      "offset": 69
    },
    {
      "val": "18",
      "offset": 78
    }
  ],
  "location": "RESTzOliwekImplementation.theTotalPriceShouldBeCorrect(int,int,int)"
});
formatter.result({
  "duration": 262360900,
  "status": "passed"
});
});