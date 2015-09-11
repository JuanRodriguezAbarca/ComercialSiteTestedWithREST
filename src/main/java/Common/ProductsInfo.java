package Common;

/**
 * Created by Juan_Rodriguez on 9/10/2015.
 */
public enum ProductsInfo {



    ID44("Oliwki \"Mojo Picon\"-paprykowe 2,5kg",70.00),
    ID18("EXTRA VIRGIN \"SIERRA SOLANA\" 0.75 L", 33.00),
    ID12("EKOLOGICZNA \"BALDONA\" 250ml",32.00),
    ID20("\"SIERRA SOLANA\" EXTRA VIRGIN 2L",65.00),
    ID15("EKOLOGICZNA \"BALDONA\" 5L",192.00)

    ;
    private String productName;
    private double productPrice;

    ProductsInfo(String productName, double productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }


    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }


    public double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }





}
