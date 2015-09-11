import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Juan_Rodriguez on 09/09/2015.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/cucumber-html-report","json:target/cucumber.json"}, snippets = SnippetType.CAMELCASE,
        features ="src/test/resources",
        tags = {"@TestingREST"}
)


public class CukeRunner{


}