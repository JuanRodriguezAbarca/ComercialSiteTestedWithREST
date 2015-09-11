package OliwaFirstTest;

import Common.RequestModel;
import com.jayway.restassured.http.ContentType;
import com.jayway.restassured.response.Response;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.junit.Assert;

import java.io.IOException;
import java.util.List;

import static com.jayway.restassured.RestAssured.baseURI;
import static com.jayway.restassured.RestAssured.given;

/**
 * Created by Juan_Rodriguez on 9/9/2015.
 */
public class RESTzOliwekImplementation extends RequestModel {


    @Given("^I order one single Sierra Solana product '([^\"]*)'$")
    public void iOrderOneSingleSierraSolanaProductItShouldBeAddedToTheCart(String productId) {
        baseURI = constant.THE_URL;

        Response selectOneSierraSolana = given().contentType(ContentType.URLENC).
                body("products_id=" + productId + "&quantity=1").post("/rpc.php?action=add_to_basket");

        temporaryCookies = selectOneSierraSolana.getCookies();

        String selectProductBody = selectOneSierraSolana.body().asString();

        System.out.println("Response Headers:\n" + selectOneSierraSolana.getHeaders());

        System.out.println("\nResponse Body:\n" + selectProductBody);

        System.out.println("\nResponse Cookies:\n" + temporaryCookies);

        System.out.println("Status Code:\n" + selectOneSierraSolana.getStatusCode());

        Assert.assertTrue("Body expected '" + constant.SELECT_PRODUCT_RESPONSE_BODY + "' and Body found '" + selectProductBody,
                constant.SELECT_PRODUCT_RESPONSE_BODY.contentEquals(selectProductBody));

    }

    @Then("^product '([^\"]*)' should be added to the Cart with the correct price$")
    public void itShouldBeAddedToTheCartWithTheCorrectPrice(int product) throws IOException {
        baseURI = constant.THE_URL;

        double priceExpected = getTheProductPriceForSpecificElement(product);

        Response theCartResponse = given().cookies(temporaryCookies).get("/shopping_cart.php");

        Assert.assertTrue("The status is not '200 OK' " + theCartResponse.getStatusCode(), theCartResponse.getStatusCode() == 200);

        Document doc = Jsoup.parse(theCartResponse.body().asString());
        List<Element> productListingList = doc.getElementsByAttributeValue("class", "productListing-data boxNumber total");

        System.out.println("Founded Elements: " + productListingList.size());


        String priceFounded = productListingList.get(0).text();
        System.out.println("Total Price: " + priceFounded);


        Assert.assertTrue("Price is not correct, founded '" + priceFounded + "' instead of '" + priceExpected + "'",
                priceFounded.toLowerCase().contains(Double.toString(priceExpected).replace(".", ",")));

    }

    @Then("^product '([^\"]*)' should be added to the Cart with the correct name$")
    public void itShouldBeAddedToTheCartAndContainCorrectName(int product) throws IOException {
        baseURI = constant.THE_URL;

        String nameExpected = getTheProductNameForSpecificElement(product);

        Response theCartResponse = given().cookies(temporaryCookies).get("/shopping_cart.php");

        Assert.assertTrue("The status is not '200 OK' " + theCartResponse.getStatusCode(), theCartResponse.getStatusCode() == 200);

        Document doc = Jsoup.parse(theCartResponse.body().asString());
        List<Element> productListingList = doc.getElementsByAttributeValue("class", "productListing-data boxNumber total");

        System.out.println("Founded Elements: " + productListingList.size());



        String nameFounded = doc.getElementsByAttributeValue("class", "productListing-data").get(0).text();
        System.out.println("Name Founded: " + nameFounded);


        Assert.assertTrue("Names are not matching, founded '" + nameFounded + "' when expected is '" + nameExpected + "'",
                nameFounded.contentEquals(nameExpected));

    }

    @Given("^I order three products: '([^\"]*)', '([^\"]*)' and '([^\"]*)' and are added to the cart$")
    public void iOrderThreeProductsAndAreAddedToTheCart(int product1, int product2, int product3) {

        baseURI = constant.THE_URL;

//        String nameGetterForAssertion = null;
//        String priceGetterForAssertion = null;

        Response selectFirstProduct = given().contentType(ContentType.URLENC).body("products_id=" + product1 + "&quantity=1").post("/rpc.php?action=add_to_basket");

        temporaryCookies = selectFirstProduct.getCookies();

        Response selectSecondProduct = given().cookies(temporaryCookies).contentType(ContentType.URLENC).body("products_id=" + product2 + "&quantity=1").post("/rpc.php?action=add_to_basket");

        Response selectThirdProduct = given().cookies(temporaryCookies).contentType(ContentType.URLENC).body("products_id=" + product3 + "&quantity=1").post("/rpc.php?action=add_to_basket");


    }

    @Then("^the total price should be correct calculated for the products '([^\"]*)', '([^\"]*)' and '([^\"]*)'$")
    public void theTotalPriceShouldBeCorrect(int product1, int product2, int product3) {

        double totalPrice = totalAmountFor3ProductsOneEach(product1, product2, product3);

        Response theCartResponse = given().cookies(temporaryCookies).get("/shopping_cart.php");

        Document theCartHtml = Jsoup.parse(theCartResponse.getBody().asString());
        String totalCalculated = theCartHtml.getElementsByAttributeValue("class", "boxTotal").get(0).text();

        Assert.assertTrue("The price calculated is not correct. Obtained '" + totalCalculated + "' when Expected '" + totalPrice + "'",
                totalCalculated.toLowerCase().contains(String.valueOf(Math.round(totalPrice))));
    }


}
