package Common;


import java.util.Map;

/**
 * Created by Juan_Rodriguez on 9/11/2015.
 */
public class RequestModel {

    public Map<String, String> temporaryCookies;


    public double getTheProductPriceForSpecificElement(int productID) {

        switch (productID) {
            case 12:
                return ProductsInfo.ID12.getProductPrice();
            case 15:
                return ProductsInfo.ID15.getProductPrice();
            case 18:
                return ProductsInfo.ID18.getProductPrice();
            case 20:
                return ProductsInfo.ID20.getProductPrice();
            case 44:
                return ProductsInfo.ID44.getProductPrice();
            default:
                throw new RuntimeException("Product is not contained in the Enum.Class");
        }
    }

    public String getTheProductNameForSpecificElement(int productID) {

        switch (productID) {
            case 12:
                return ProductsInfo.ID12.getProductName();
            case 15:
                return ProductsInfo.ID15.getProductName();
            case 18:
                return ProductsInfo.ID18.getProductName();
            case 20:
                return ProductsInfo.ID20.getProductName();
            case 44:
                return ProductsInfo.ID44.getProductName();
            default:
                throw new RuntimeException("Product is not contained in the Enum.Class");
        }

    }

    public double totalAmountFor3ProductsOneEach(int prod1, int prod2, int prod3) {
        return getTheProductPriceForSpecificElement(prod1) + getTheProductPriceForSpecificElement(prod2) + getTheProductPriceForSpecificElement(prod3);
    }
}
