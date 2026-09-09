export const questions = [
  {
    "questionNumber": 1,
    "question": "What can be used to override the Account's standard Edit button for Lightning Experience?",
    "options": [
      {
        "letter": "A",
        "text": "Lightning component"
      },
      {
        "letter": "B",
        "text": "Lightning action"
      },
      {
        "letter": "C",
        "text": "Lightning flow"
      },
      {
        "letter": "D",
        "text": "Lightning page"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
    "options": [
      {
        "letter": "A",
        "text": "fire()"
      },
      {
        "letter": "B",
        "text": "registerEvent()"
      },
      {
        "letter": "C",
        "text": "init()"
      },
      {
        "letter": "D",
        "text": "fireEvent()"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 3,
    "question": "The values 'High', 'Medium', and 'Low' are identified as common values for multiple picklists across different objects. What is an approach a developer can take to streamline maintenance of the picklists and their values, while also restricting the values to the ones mentioned above?",
    "options": [
      {
        "letter": "A",
        "text": "Create the Picklist on each object and add a validation rule to ensure data integrity."
      },
      {
        "letter": "B",
        "text": "Create the Picklist on each object and select \"Restrict picklist to the values defined in the value set\"."
      },
      {
        "letter": "C",
        "text": "Create the Picklist on each object as a required field and select \"Display values alphabetically, not in the order entered\"."
      },
      {
        "letter": "D",
        "text": "Create the Picklist on each object and use a Global Picklist Value Set containing the values."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "Universal Containers decides to use purely declarative development to build out a new Salesforce application. Which two options can be used to build out the business logic layer for this application?",
    "options": [
      {
        "letter": "A",
        "text": "Validation Rules"
      },
      {
        "letter": "B",
        "text": "Remote Actions"
      },
      {
        "letter": "C",
        "text": "Record-Triggered Flow"
      },
      {
        "letter": "D",
        "text": "Batch Jobs"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 5,
    "question": "Ursa Major Solar has a custom object, ServiceJob__c, with an optional Lookup field to Account called Partner_Service_Provider__c. The Totaljobs__c field on Account tracks the total number of ServiceJob__c records to which a partner service provider Account is related. What is the most efficient way to ensure that the Totaljobs__c field is kept up to date?",
    "options": [
      {
        "letter": "A",
        "text": "Change TotalJobs__c to a roll-up summary field."
      },
      {
        "letter": "B",
        "text": "Create a record-triggered flow on ServiceJob__c."
      },
      {
        "letter": "C",
        "text": "Create an Apex trigger on ServiceJob__c"
      },
      {
        "letter": "D",
        "text": "Create a schedule-triggered flow on ServiceJob__c"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "For which three items can a trace flag be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Apex Trigger"
      },
      {
        "letter": "B",
        "text": "Visualforce"
      },
      {
        "letter": "C",
        "text": "Apex Class"
      },
      {
        "letter": "D",
        "text": "Flow"
      },
      {
        "letter": "E",
        "text": "User"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer completed modifications to a customized feature that is comprised of two elements: Apex trigger Trigger handler Apex class What are two factors that the developer must take into account to properly deploy the modification to the production environment?"
      },
      {
        "letter": "A",
        "text": "All methods in the test classes must use @isTest."
      },
      {
        "letter": "B",
        "text": "Test methods must be declared with the testMethod keyword."
      },
      {
        "letter": "C",
        "text": "At least one line of code must be executed for the Apex trigger."
      },
      {
        "letter": "D",
        "text": "All Apex classes must have at least 75% code coverage org-wide."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 8,
    "question": "Which three statements are true regarding custom exceptions in Apex?",
    "options": [
      {
        "letter": "A",
        "text": "custom exception class cannot contain member variables or methods."
      },
      {
        "letter": "B",
        "text": "custom exception class must extend the system Exception class."
      },
      {
        "letter": "C",
        "text": "custom exception class can extend other classes besides the Exception class."
      },
      {
        "letter": "D",
        "text": "custom exception class name must end with \"Exception\"."
      },
      {
        "letter": "E",
        "text": "custom exception class can implement one or many interfaces."
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 9,
    "question": "How should a developer write unit tests for a private method in an Apex class?",
    "options": [
      {
        "letter": "A",
        "text": "Use the SeeAll Data annotation."
      },
      {
        "letter": "B",
        "text": "Add a test method in the Apex class."
      },
      {
        "letter": "C",
        "text": "Mark the Apex class as global."
      },
      {
        "letter": "D",
        "text": "Use the TestVisible annotation."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a Lightning web component called status Component to be inserted into the Account record page. Which two things should the developer do to make this component available?"
      },
      {
        "letter": "A",
        "text": "Add <target>lightning__RecordPage</target> to the statusComponent.js-meta.xml file."
      },
      {
        "letter": "B",
        "text": "Add <target>lightning__RecordPag</target> to the statusComponent.js file."
      },
      {
        "letter": "C",
        "text": "Add <masterLabel>Account</masterlabel> to the statusComponent.js-meta.xml file."
      },
      {
        "letter": "D",
        "text": "Set isExposed to true in the statusComponent.js-meta.xml file."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 11,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?"
      },
      {
        "letter": "A",
        "text": "Developer orgs"
      },
      {
        "letter": "B",
        "text": "Full Copy sandboxes"
      },
      {
        "letter": "C",
        "text": "Developer sandboxes"
      },
      {
        "letter": "D",
        "text": "Scratch orgs"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what is defined for payments in the PaymentProcessor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which implementation is correct to use the Payment Processor interface class?"
      },
      {
        "letter": "A",
        "text": "public class CheckPaymentProcessor implements PaymentProcessor { public void pay(Decimal amount); }"
      },
      {
        "letter": "B",
        "text": "public class CheckPaymentProcessor implements PaymentProcessor { public void pay(Decimal amount) { // implementation } }"
      },
      {
        "letter": "C",
        "text": "public class CheckPaymentProcessor extends PaymentProcessor { public void pay(Decimal amount); }"
      },
      {
        "letter": "D",
        "text": "public class CheckPaymentProcessor extends PaymentProcessor { public void pay(Decimal amount) {} }"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Which two scenarios require an Apex method to be called imperatively from a Lightning web component?",
    "options": [
      {
        "letter": "A",
        "text": "Calling a method that makes a web service callout"
      },
      {
        "letter": "B",
        "text": "Calling a method that is not annotated with cacheable=true"
      },
      {
        "letter": "C",
        "text": "Calling a method with the click of a button"
      },
      {
        "letter": "D",
        "text": "Calling a method that is external to the main controller for the Lightning web component"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 14,
    "question": "[In terms of the MVC paradigm, what are two advantages of implementing the view layer of a Salesforce application using Lightning Web Component-based development over Visualforce.",
    "options": [
      {
        "letter": "A",
        "text": "Rich component ecosystem"
      },
      {
        "letter": "B",
        "text": "Self-contained and reusable units of an application"
      },
      {
        "letter": "C",
        "text": "Log capturing via the Debug Logs Setup page"
      },
      {
        "letter": "D",
        "text": "Built-in standard and custom set controllers"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?"
      },
      {
        "letter": "A",
        "text": "Setup Menu"
      },
      {
        "letter": "B",
        "text": "Visual Studio Code IDE"
      },
      {
        "letter": "C",
        "text": "Developer Console"
      },
      {
        "letter": "D",
        "text": "AppExchange"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data. Which security consideration should the developer be aware of?"
      },
      {
        "letter": "A",
        "text": "The .isAccessible() method must be used for field-level access checks."
      },
      {
        "letter": "B",
        "text": "Lightning Data Service handles sharing rules and field-level security."
      },
      {
        "letter": "C",
        "text": "Lightning Data Service ignores field-level security."
      },
      {
        "letter": "D",
        "text": "The with sharing keyword must be used to enforce sharing rules."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 17,
    "question": "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. Which relationship field should be implemented to support these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Master-detail field from Engineering_Support__c to Opportunity"
      },
      {
        "letter": "B",
        "text": "Lookup field from Opportunity to Engineering _Support__c"
      },
      {
        "letter": "C",
        "text": "Master-detail field from Opportunity to Engineering_Support__c"
      },
      {
        "letter": "D",
        "text": "Lookup field from Engineering Support__c to Opportunity"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "Which three resources in an Aura component can contain JavaScript functions?",
    "options": [
      {
        "letter": "A",
        "text": "Design"
      },
      {
        "letter": "B",
        "text": "Controller"
      },
      {
        "letter": "C",
        "text": "Helper"
      },
      {
        "letter": "D",
        "text": "Style"
      },
      {
        "letter": "E",
        "text": "Renderer"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 19,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of tests allowing them to test independent requirements for various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?"
      },
      {
        "letter": "A",
        "text": "Use @TestSetup with a void method."
      },
      {
        "letter": "B",
        "text": "Create test data before Test.startTest() in the unit test."
      },
      {
        "letter": "C",
        "text": "Create a mock using the Stub API."
      },
      {
        "letter": "D",
        "text": "Add @IsTest (seeAllData=true) at the start of the unit test class."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Which three steps allow a custom Scalable Vector Graphic (SVG) to be included in @ Lightning web component?",
    "options": [
      {
        "letter": "A",
        "text": "Import the static resource and provide a JavaScript property for it."
      },
      {
        "letter": "B",
        "text": "Reference the property in the HTML template."
      },
      {
        "letter": "C",
        "text": "Import the SVG as a content asset file."
      },
      {
        "letter": "D",
        "text": "Upload the SVG as a static resource."
      },
      {
        "letter": "E",
        "text": "Reference the import in the HTML template."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 1,
    "question": "Universal Containers (UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called \"Global Address\". Which field should the developer add to create the most efficient model that supports the business need?",
    "options": [
      {
        "letter": "A",
        "text": "Add a master-detail field on the Global Address object to the Account object."
      },
      {
        "letter": "B",
        "text": "Add a lookup field on the Global Address object to the Account object."
      },
      {
        "letter": "C",
        "text": "Add a master-detail field on the Account object to the Global Address object."
      },
      {
        "letter": "D",
        "text": "Add a lookup field on the Account object to the Global Address object."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Universal Containers recently transitioned from Classic to Lightning Experience. One of its business processes requires certain values from the Opportunity object to be sent via an HTTP REST callout to its external order management system based on an ad-hoc basis when the user presses a custom button on the Opportunity detail page. Example values are as follows: Name Amount Account Which two methods should the developer implement to fulfill the business requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page."
      },
      {
        "letter": "B",
        "text": "Create a Remote Action on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated."
      },
      {
        "letter": "C",
        "text": "Create an after update trigger an the Opportunity object that calls a helper method using Future (Callout=true) to perform the HTTP REST callout."
      },
      {
        "letter": "D",
        "text": "Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 3,
    "question": "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship. How can this be achieved?",
    "options": [
      {
        "letter": "A",
        "text": "Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity."
      },
      {
        "letter": "B",
        "text": "Write a trigger on the Opportunity object and use an aggregate function to sum the amount for all related child objects under the Opportunity."
      },
      {
        "letter": "C",
        "text": "Use the Metadata AP! to create real-time roll-up summaries."
      },
      {
        "letter": "D",
        "text": "Use the Streaming API to create real-time roll-up summaries."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "development team wants to use a deployment script to automatically deploy to a sandbox during their development cycles. Which two tools can they use to run a script that deploys to a sandbox?"
      },
      {
        "letter": "A",
        "text": "Developer Console"
      },
      {
        "letter": "B",
        "text": "Salesforce CLI"
      },
      {
        "letter": "C",
        "text": "Ant Migration Tool"
      },
      {
        "letter": "D",
        "text": "Change Sets"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 5,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer has identified a method in an Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a DML statement to save the changes to the database. Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?"
      },
      {
        "letter": "A",
        "text": "Use partial DML statements to ensure only valid data is committed."
      },
      {
        "letter": "B",
        "text": "Use the System.Limit class to monitor the current CPU governor limit consumption."
      },
      {
        "letter": "C",
        "text": "Use the Database.Savepoint method to enforce database integrity."
      },
      {
        "letter": "D",
        "text": "Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 6,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is asked to create a Visuatforce page that lists the contacts owned by the current user. This component will be embedded in a Lightning page. Without writing unnecessary code, which controller should be used for this purpose?"
      },
      {
        "letter": "A",
        "text": "Custom controller"
      },
      {
        "letter": "B",
        "text": "Standard controller"
      },
      {
        "letter": "C",
        "text": "Standard list controller"
      },
      {
        "letter": "D",
        "text": "Lightning controller"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer has a single custom controller class that works with a Visuatforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and frame a parameter on the initial URL. Which three statements are useful inside the unit test to effectively test the custom controller?"
      },
      {
        "letter": "A",
        "text": "Test.setCurrentPage(pageRef);"
      },
      {
        "letter": "B",
        "text": "ApexPages.currentPage().getParameters().put('input', 'TestValue');"
      },
      {
        "letter": "C",
        "text": "String nextPage = controller.save().getUrl();"
      },
      {
        "letter": "D",
        "text": "insert pageRef;"
      },
      {
        "letter": "E",
        "text": "public ExtendedController(ApexPages.StandardController cntrl) { }"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 8,
    "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object. Which two automation tools can be used to implement this feature?",
    "options": [
      {
        "letter": "A",
        "text": "Approval process"
      },
      {
        "letter": "B",
        "text": "Fast Field Updates record-triggered flow"
      },
      {
        "letter": "C",
        "text": "Quick actions"
      },
      {
        "letter": "D",
        "text": "Account trigger"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 9,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of the new Apex helper class. Change Set deployment to production fails with the test coverage warning: \"Test coverage of selected Apex Triggers is 0%, at least 1% test coverage is required.\" What should the developer do to successfully deploy the new Apex trigger and helper class?"
      },
      {
        "letter": "A",
        "text": "Remove the failing test methods from the test class."
      },
      {
        "letter": "B",
        "text": "Create a test class and methods to cover the Apex trigger."
      },
      {
        "letter": "C",
        "text": "Run the tests using the 'Run All Tests' method."
      },
      {
        "letter": "D",
        "text": "Increase the test class coverage on the helper class."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Universal Containers hires a developer to build @ custom search page to help users find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL?",
    "options": [
      {
        "letter": "A",
        "text": "SOSL is able to return more records."
      },
      {
        "letter": "B",
        "text": "SOQL is able to return more records."
      },
      {
        "letter": "C",
        "text": "SOSL is faster for text searches."
      },
      {
        "letter": "D",
        "text": "SOQL is faster for text searches."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 11,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created this Apex trigger that calls MyClass.myStaticMethod: trigger myTrigger on Contact (before insert) { MyClass.myStaticMethod(Trigger.new); The developer creates a test class with a test method that calls MyClass.myStaticMethod directly, resulting in 87% overall code coverage. What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exists?"
      },
      {
        "letter": "A",
        "text": "The deployment fails because the Apex trigger has no code coverage."
      },
      {
        "letter": "B",
        "text": "The deployment fails because no assertions were made in the test method."
      },
      {
        "letter": "C",
        "text": "The deployment passes because the Apex code has the required >75% code coverage."
      },
      {
        "letter": "D",
        "text": "The deployment passes because both classes and the trigger were included in the deployment."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "How does the Lightning Component framework help developers implement solutions faster?",
    "options": [
      {
        "letter": "A",
        "text": "By providing device-awareness for mobile and desktops"
      },
      {
        "letter": "B",
        "text": "By providing code review standards and processes"
      },
      {
        "letter": "C",
        "text": "By providing change history and version control"
      },
      {
        "letter": "D",
        "text": "By providing an Agile process with default steps"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Which statement describes the execution order when triggers are associated to the same object and event?",
    "options": [
      {
        "letter": "A",
        "text": "Triggers are executed in the order they are created."
      },
      {
        "letter": "B",
        "text": "Trigger execution order cannot be guaranteed."
      },
      {
        "letter": "C",
        "text": "Triggers are executed in the order they are modified."
      },
      {
        "letter": "D",
        "text": "Triggers are executed alphabetically by trigger name."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
    "options": [
      {
        "letter": "A",
        "text": "Messaging"
      },
      {
        "letter": "B",
        "text": "Limits"
      },
      {
        "letter": "C",
        "text": "Exception"
      },
      {
        "letter": "D",
        "text": "OrgLimits"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "Universal Containers (UC) is developing a process for their sales teams that requires all sales reps to go through a set of scripted steps with each new customer they create. In the first step of collecting information, UC's ERP system must be checked via a REST endpoint to see if the customer exists. If the customer exists, the data must be presented to the sales rep in Salesforce. Which two should a developer implement to satisfy the requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Invocable method"
      },
      {
        "letter": "B",
        "text": "Trigger"
      },
      {
        "letter": "C",
        "text": "Future method"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 16,
    "question": "Which two are best practices when it comes to Aura component and application event handling?",
    "options": [
      {
        "letter": "A",
        "text": "Reuse the event logic in a component bundle, by putting the logic in the helper."
      },
      {
        "letter": "B",
        "text": "Use component events to communicate actions that should be handled at the application level."
      },
      {
        "letter": "C",
        "text": "Try to use application events as opposed to component events."
      },
      {
        "letter": "D",
        "text": "Handle low-level events in the event handler and re-fire them as higher-level events."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 17,
    "question": "What are two ways a developer can get the status of an enqueued job for a class that implements the queueable interface?",
    "options": [
      {
        "letter": "A",
        "text": "View the Apex Jobs page"
      },
      {
        "letter": "B",
        "text": "View the Apex Flex Queue"
      },
      {
        "letter": "C",
        "text": "Query the AsyncApexJob object"
      },
      {
        "letter": "D",
        "text": "View the Apex Status page"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violations to the user. How can the developer make sure that validation rule violations are displayed?"
      },
      {
        "letter": "A",
        "text": "Add custom controller attributes to display the message."
      },
      {
        "letter": "B",
        "text": "Include <apex:pageMessages> on the Visualforce page."
      },
      {
        "letter": "C",
        "text": "Use a try/catch with a custom exception class."
      },
      {
        "letter": "D",
        "text": "Perform the DML using the Database.upsert() method."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created these three Rollup Summary fields in the custom object, Project__c: Total_Timesheets__c Total_Approved_Timesheets__c Total_Rejected_Timesheets__c The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?"
      },
      {
        "letter": "A",
        "text": "Rollup summary field"
      },
      {
        "letter": "B",
        "text": "Apex trigger"
      },
      {
        "letter": "C",
        "text": "Formula field"
      },
      {
        "letter": "D",
        "text": "Record-triggered flow"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Which action causes a before trigger to fire by default for Accounts?",
    "options": [
      {
        "letter": "A",
        "text": "Importing data using the Data Loader and the Bulk API"
      },
      {
        "letter": "B",
        "text": "Renaming or replacing picklists"
      },
      {
        "letter": "C",
        "text": "Converting Leads to Contacts"
      },
      {
        "letter": "D",
        "text": "_ Updating addresses using the Mass Address update tool"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in another custom object called PostalCodeToTimezone__c. What is the optimal way to implement this feature?",
    "options": [
      {
        "letter": "A",
        "text": "Build an account assignment rule."
      },
      {
        "letter": "B",
        "text": "Create an account approval process."
      },
      {
        "letter": "C",
        "text": "Build a flow with Flow Builder."
      },
      {
        "letter": "D",
        "text": "Create a formula field."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic of Lightning Experience. What should the developer use to override the Contact's Edit button and provide this functionality?"
      },
      {
        "letter": "A",
        "text": "A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience"
      },
      {
        "letter": "B",
        "text": "A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience"
      },
      {
        "letter": "C",
        "text": "A Lightning component in Salesforce Classic and a Lightning component in Lightning Experience"
      },
      {
        "letter": "D",
        "text": "A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 3,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer considers the following snippet of code: Boolean isOK; // defaults to null Integer x; String theString = 'Hello'; if (isOK == false && theString == 'Hello') { x = 1; } else if (isOK == true && theString == 'Hello') { x = 2; } else if (isOK != null && theString == 'Hello') { x = 3; } else { x = 4; } Based on this code, what is the value of x?"
      },
      {
        "letter": "A",
        "text": "1"
      },
      {
        "letter": "B",
        "text": "2"
      },
      {
        "letter": "C",
        "text": "3"
      },
      {
        "letter": "D",
        "text": "4"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use Data Loader instead of Data [Import Wizard?"
      },
      {
        "letter": "A",
        "text": "Data Loader runs from the developer's browser."
      },
      {
        "letter": "B",
        "text": "Data Import Wizard can not import all 500 records."
      },
      {
        "letter": "C",
        "text": "Data Loader automatically relates Opportunities to Accounts."
      },
      {
        "letter": "D",
        "text": "Data import Wizard does not support Opportunities."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "Universal Containers is building a recruiting app with an Applicant object that stores information about an individual person and a Job object that represents a job. Each applicant may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
    "options": [
      {
        "letter": "A",
        "text": "Formula field on Applicant that references Job"
      },
      {
        "letter": "B",
        "text": "Lookup field from Applicant to Job"
      },
      {
        "letter": "C",
        "text": "Master-detail field from Applicant to Job"
      },
      {
        "letter": "D",
        "text": "Junction object between Applicant and Job"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application, One of the application modules allows the user to calculate body fat using the Apex Class, BodyFat, and its method, calculateBodyFat (). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace. Which approach should a developer take to ensure calculateBodyFat () is accessible outside the package namespace?",
    "options": [
      {
        "letter": "A",
        "text": "Declare the class and method using the global access modifier"
      },
      {
        "letter": "B",
        "text": "Declare the class and method using the public access modifier"
      },
      {
        "letter": "C",
        "text": "Declare the class as public and use the global access modifier on the method."
      },
      {
        "letter": "D",
        "text": "Declare the class as global and use the public access modifier on the method"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "What are three considerations when using the @InvocableMethod annotation in Apex?",
    "options": [
      {
        "letter": "A",
        "text": "A method using the @InvocableMethod annotation can have multiple input parameters."
      },
      {
        "letter": "B",
        "text": "A method using the @InvocableMethod annotation must define a return value."
      },
      {
        "letter": "C",
        "text": "A method using the @InvocableMethod annotation must be declared as static, ."
      },
      {
        "letter": "D",
        "text": "Only one method using the @InvocableMethod annotation can be defined per Apex class."
      },
      {
        "letter": "E",
        "text": "A method using the @InvocableMethod annotation can be declared as Public or Global."
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 8,
    "question": "While writing an Apex class, a developer wants to make sure that all functionality being developed is handled as specified by the requirements. Which approach should the developer use to be sure that the Apex class is working according to specifications?",
    "options": [
      {
        "letter": "A",
        "text": "Create a test class to execute the business logic and run the test in the Developer Console."
      },
      {
        "letter": "B",
        "text": "Include a savepoint and Database.rollback."
      },
      {
        "letter": "C",
        "text": "Include a try/catch block to the Apex class."
      },
      {
        "letter": "D",
        "text": "Run the code in an Execute Anonymous block in the Developer Console."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "The sales management team at Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted, What should be done to ensure that a user populates the Lead Source field prior to converting a Lead?",
    "options": [
      {
        "letter": "A",
        "text": "Use a formula field."
      },
      {
        "letter": "B",
        "text": "Create an after trigger on Lead."
      },
      {
        "letter": "C",
        "text": "Use Lead Conversion field mapping."
      },
      {
        "letter": "D",
        "text": "Use a validation rule."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Which two settings must be defined in order to update a record of a junction object?",
    "options": [
      {
        "letter": "A",
        "text": "Read/Write access on the primary relationship"
      },
      {
        "letter": "B",
        "text": "Read/Write access on the secondary relationship"
      },
      {
        "letter": "C",
        "text": "Read access on the primary relationship"
      },
      {
        "letter": "D",
        "text": "Read/Write access on the junction object"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 11,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is debugging the following code to determine why Accounts are not being created, List<Account> accts = getAccounts(); // to getaccounts implemented elsewhere Database.insert(accts, false); How should the code be altered to help debug the issue?"
      },
      {
        "letter": "A",
        "text": "Collect the insert method return value in a SaveResult variable."
      },
      {
        "letter": "B",
        "text": "Change the DML statement to insert accts."
      },
      {
        "letter": "C",
        "text": "Set the second insert method parameter to true."
      },
      {
        "letter": "D",
        "text": "Add a try-catch around the insert method."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "Refer to the following Apex code: Integer x = 0; do { x = 1; x++; } while (x < 1); System.debug(x); What is the value of x when it is written to the debug log?",
    "options": [
      {
        "letter": "A",
        "text": "0"
      },
      {
        "letter": "B",
        "text": "1"
      },
      {
        "letter": "C",
        "text": "2"
      },
      {
        "letter": "D",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Refer to the code snippet below: import fetchOpps from '@salesforce/apex/OpportunitySearch.fetchOpportunities'; @wire(fetchOpps) opportunities; When a Lightning web component is rendered, a list of opportunities that match certain criteria should be retrieved from the database and displayed to the end-user. Which three considerations must the developer implement to make the fetchOpportunities method available within the Lightning web component?",
    "options": [
      {
        "letter": "A",
        "text": "The method must specify the (cacheable=true) attribute."
      },
      {
        "letter": "B",
        "text": "The method must specify the (continuation=true) attribute."
      },
      {
        "letter": "C",
        "text": "The method must be annotated with the @InvocableMethod annotation."
      },
      {
        "letter": "D",
        "text": "The method cannot mutate the result set retrieved from the database."
      },
      {
        "letter": "E",
        "text": "The method must be annotated with the @AuraEnabled annotation."
      }
    ],
    "correctAnswers": [
      "A",
      "D",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 14,
    "question": "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permissions for the currently logged-in user while using the custom search tool?",
    "options": [
      {
        "letter": "A",
        "text": "Use the with sharing keyword on the class declaration."
      },
      {
        "letter": "B",
        "text": "Use the schema describe calls to determine if the logged-in user has access to the Account object."
      },
      {
        "letter": "C",
        "text": "Use the UserInfo Apex class to filter all SOQL queries to return records owned by the logged-in user."
      },
      {
        "letter": "D",
        "text": "Use the without sharing keyword on the class declaration."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Order Item object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. Which should a developer do to allow their code to move some existing Order Item records to a new Order record?"
      },
      {
        "letter": "A",
        "text": "Create a junction object between Order Item and Order."
      },
      {
        "letter": "B",
        "text": "Add without sharing to the Apex class declaration."
      },
      {
        "letter": "C",
        "text": "Select the Allow Reparenting option on the master-detail relationship."
      },
      {
        "letter": "D",
        "text": "Change the master-detail relationship to an external lookup relationship."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Assuming that name is a String obtained by an <apex:inputText> tag on a Visualforce page, which two SOQL queries performed are safe from SOQL Injection?",
    "options": [
      {
        "letter": "A",
        "text": "String query = 'SELECT Id FROM Account WHERE Name LIKE \\'%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);"
      },
      {
        "letter": "B",
        "text": "String query = 'SELECT Id FROM Account WHERE Name LIKE \\'%' + name + '%\\'';List<Account> results = Database.query(query);"
      },
      {
        "letter": "C",
        "text": "String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];"
      },
      {
        "letter": "D",
        "text": "String query = 'SELECT Id FROM Account WHERE Name LIKE \\'%' + String.escapeSingleQuotes(name) + '%\\'';List<Account> results = Database.query(query);"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 17,
    "question": "Which two operations affect the number of times a trigger can fire.",
    "options": [
      {
        "letter": "A",
        "text": "Criteria-based sharing calculations"
      },
      {
        "letter": "B",
        "text": "Roll-up summary fields"
      },
      {
        "letter": "C",
        "text": "Lightning flows"
      },
      {
        "letter": "D",
        "text": "Email messages"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 18,
    "question": "What should be used to create scratch orgs?",
    "options": [
      {
        "letter": "A",
        "text": "Workbench"
      },
      {
        "letter": "B",
        "text": "Salesforce CLI"
      },
      {
        "letter": "C",
        "text": "Sandbox refresh"
      },
      {
        "letter": "D",
        "text": "Developer Console"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "An org tracks customer orders using the Order and Line Item objects. The Line Item object has a master-detail relationship to the Order object. A developer has a requirement to calculate the total order amount for an Order and the line amount on each Line Item based on quantity and price. What is the correct implementation?",
    "options": [
      {
        "letter": "A",
        "text": "Implement the line item amount as a currency field and the order amount as a SUM formula field."
      },
      {
        "letter": "B",
        "text": "Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order."
      },
      {
        "letter": "C",
        "text": "Implement the line amount as a numeric formula field and the order amount as a roll-up summary field."
      },
      {
        "letter": "D",
        "text": "Create a fast field update, record-triggered flow on the Line Item that calculates the item amount and order amount and updates the fields on the Line Item and the Order."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "What should be used to create scratch orgs?",
    "options": [
      {
        "letter": "A",
        "text": "Workbench"
      },
      {
        "letter": "B",
        "text": "Salesforce CLI"
      },
      {
        "letter": "C",
        "text": "Sandbox refresh"
      },
      {
        "letter": "D",
        "text": "Developer Console"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that the Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field-level permissions on Salary__c?"
      },
      {
        "letter": "A",
        "text": "<lightning-input-field field-name=\"Salary__c\"></lightning-input-field>"
      },
      {
        "letter": "B",
        "text": "<lightning-input-currency value=\"Salary__c\"></lightning-input-currency>"
      },
      {
        "letter": "C",
        "text": "<lightning-formatted-number value=\"Salary__c\" format-style=\"currency\"></lightning-formatted-number>"
      },
      {
        "letter": "D",
        "text": "<lightning-input type=\"number\" value=\"Salary__c\" formatter=\"currency\"></lightning-input>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the records together. Which two statements are valid considerations when using merge?"
      },
      {
        "letter": "A",
        "text": "External ID fields can be used with the merge method."
      },
      {
        "letter": "B",
        "text": "Merge is supported with accounts, contacts, cases, and leads."
      },
      {
        "letter": "C",
        "text": "The field values on the master record are overwritten by the records being merged."
      },
      {
        "letter": "D",
        "text": "The merge method allows up to three records, including the master and two additional records with the same sObject type, to be merged into the master record."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 3,
    "question": "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Schedule a report."
      },
      {
        "letter": "B",
        "text": "Use the Data Loader command line."
      },
      {
        "letter": "C",
        "text": "Define a Data Export scheduled job."
      },
      {
        "letter": "D",
        "text": "Create a Schedulable Apex class."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?",
    "options": [
      {
        "letter": "A",
        "text": "Use SOQL and the Tooling API."
      },
      {
        "letter": "B",
        "text": "Use the Flow Properties page."
      },
      {
        "letter": "C",
        "text": "Use the ApexTestResult class."
      },
      {
        "letter": "D",
        "text": "Use the Code Coverage Setup page."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "Which action may cause triggers to fire?",
    "options": [
      {
        "letter": "A",
        "text": "Renaming or replacing a picklist entry"
      },
      {
        "letter": "B",
        "text": "Changing a user's default division when the transfer division option is checked"
      },
      {
        "letter": "C",
        "text": "Updates to Feed Items"
      },
      {
        "letter": "D",
        "text": "Cascading delete operations"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "software company uses the following objects and relationships: - Case: to handle customer support issues - Defect__c: a custom object to represent known issues with the company's software - Case_Defect__c: a junction object between Case and Defect__c to represent that a defect is a cause of a customer Issue Case and Defect__c have Private organization-wide defaults. What should be done to share a specific Case_Defect__c record with a user?"
      },
      {
        "letter": "A",
        "text": "Share the Case_Defect__c record."
      },
      {
        "letter": "B",
        "text": "Share the parent Case and Defect__c records."
      },
      {
        "letter": "C",
        "text": "Share the parent Case record."
      },
      {
        "letter": "D",
        "text": "Share the parent Defect__c record."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "custom picklist field, Food_Preference__c, exists on a custom object. The picklist contains the following options: 'Vegan', 'Kosher', 'No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the optimal way to ensure a value is selected every time a record is saved?"
      },
      {
        "letter": "A",
        "text": "Mark the field as Required on the field definition."
      },
      {
        "letter": "B",
        "text": "Mark the field as Required on the object's page layout."
      },
      {
        "letter": "C",
        "text": "Set \"Use the first value in the list as the default value\" to True"
      },
      {
        "letter": "D",
        "text": "Write an Apex trigger to ensure a value is selected."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "Which annotation should a developer use on an Apex method to make it available to be wired to a property in a Lightning web component?",
    "options": [
      {
        "letter": "A",
        "text": "@AuraEnabled"
      },
      {
        "letter": "B",
        "text": "@AuraEnabled(cacheable = true)"
      },
      {
        "letter": "C",
        "text": "@RemoteAction(cacheable= true)"
      },
      {
        "letter": "D",
        "text": "@RemoteAction"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application?",
    "options": [
      {
        "letter": "A",
        "text": "Custom objects and fields"
      },
      {
        "letter": "B",
        "text": "Flows"
      },
      {
        "letter": "C",
        "text": "Relationships"
      },
      {
        "letter": "D",
        "text": "Triggers"
      },
      {
        "letter": "E",
        "text": "Roll-up summaries"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 10,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?"
      },
      {
        "letter": "A",
        "text": "Use Test. loadData() and reference a JSON file in Documents."
      },
      {
        "letter": "B",
        "text": "Use Anonymous Apex to create the required data."
      },
      {
        "letter": "C",
        "text": "Use SOQL to query the org for the required data."
      },
      {
        "letter": "D",
        "text": "@Use Test. loadData() and reference a CSV file in a static resource."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "Which scenario is valid for execution by unit tests?",
    "options": [
      {
        "letter": "A",
        "text": "Execute anonymous Apex as a different user."
      },
      {
        "letter": "B",
        "text": "Load data from a remote site with a callout."
      },
      {
        "letter": "C",
        "text": "Generate a Visualforce PDF with getContentAsPDF()."
      },
      {
        "letter": "D",
        "text": "Set the created date of a record using a system method."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use Data Loader instead of Data Import Wizard?"
      },
      {
        "letter": "A",
        "text": "Data Import Wizard can not import all 500 records."
      },
      {
        "letter": "B",
        "text": "Data Loader automatically relates Opportunities to Accounts."
      },
      {
        "letter": "C",
        "text": "Data Loader runs from the developer's browser."
      },
      {
        "letter": "D",
        "text": "Data Import Wizard does not support Opportunities."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wants to improve runtime performance of Apex calls by caching results on the client. What is the most efficient way to implement this and follow best practices?"
      },
      {
        "letter": "A",
        "text": "Decorate the server-side method with @AuraEnabled(storable=true)."
      },
      {
        "letter": "B",
        "text": "Call the setStorable() method on the action in the JavaScript client-side code."
      },
      {
        "letter": "C",
        "text": "Decorate the server-side method with @AuraEnabled(cacheable=true)."
      },
      {
        "letter": "D",
        "text": "Set a cookie in the browser for use upon return to the page."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "The sales management team at Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted. What should be done to ensure that a user populates the Lead Source field prior to converting a Lead?",
    "options": [
      {
        "letter": "A",
        "text": "Use a formula field."
      },
      {
        "letter": "B",
        "text": "Create an after trigger on Lead"
      },
      {
        "letter": "C",
        "text": "Use a validation rule."
      },
      {
        "letter": "D",
        "text": "Use Lead Conversion field mapping."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "Salesforce administrator used Flow Builder to create a flow named \"accountOnboarding\". The flow must be used inside an Aura component. Which tag should a developer use to display the flow in the component?"
      },
      {
        "letter": "A",
        "text": "aura: flow"
      },
      {
        "letter": "B",
        "text": "lightning-flow"
      },
      {
        "letter": "C",
        "text": "aura-flow"
      },
      {
        "letter": "D",
        "text": "lightning:flow"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "In the following example, which sharing context will myMethod execute when it is invoked? public class myClass { public void myMethod() {/* implementation */} }",
    "options": [
      {
        "letter": "A",
        "text": "Sharing rules will be inherited from the calling context"
      },
      {
        "letter": "B",
        "text": "Sharing rules will be enforced for the running user"
      },
      {
        "letter": "C",
        "text": "Sharing rules will be enforced by the instantiating class."
      },
      {
        "letter": "D",
        "text": "Sharing rules will not be enforced for the running user."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 17,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a child Lightning web component nested inside a parent Lightning web component. The parent component needs to pass a string value to the child component. In which two ways can this be accomplished?"
      },
      {
        "letter": "A",
        "text": "The parent component can use the Apex controller class to send data to the child component."
      },
      {
        "letter": "B",
        "text": "The parent component can invoke a method in the child component."
      },
      {
        "letter": "C",
        "text": "The parent component can use a custom event to pass the data to the child component."
      },
      {
        "letter": "D",
        "text": "The parent component can use a public property to pass the data to the child component."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer at Universal Containers is tasked with implementing a new Salesforce application that will be maintained completely by their company's Salesforce administrator. Which two options should be considered for building out the business logic layer of the application?"
      },
      {
        "letter": "A",
        "text": "Record-Triggered Flows"
      },
      {
        "letter": "B",
        "text": "Scheduled Jobs"
      },
      {
        "letter": "C",
        "text": "Invocable Actions"
      },
      {
        "letter": "D",
        "text": "Validation Rules"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 19,
    "question": "An org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update must the developer make in the flow?",
    "options": [
      {
        "letter": "A",
        "text": "Add a new Get Records element."
      },
      {
        "letter": "B",
        "text": "Add a new Update Records element."
      },
      {
        "letter": "C",
        "text": "Add a new Create Records element."
      },
      {
        "letter": "D",
        "text": "Add a new Roll Back Records element."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Where are two locations a developer can look to find information about the status of batch or future methods?",
    "options": [
      {
        "letter": "A",
        "text": "Apex Flex Queue"
      },
      {
        "letter": "B",
        "text": "Apex Jobs"
      },
      {
        "letter": "C",
        "text": "Developer Console"
      },
      {
        "letter": "D",
        "text": "Paused Flow Interviews component"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 1,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "custom Visualforce controller calls the ApexPages.addMessage() method, but no messages are rendering on the page. Which component should be added to the Visualforce page to display the message?"
      },
      {
        "letter": "A",
        "text": "<apex:facet name=\"messages\" />"
      },
      {
        "letter": "B",
        "text": "<apex:message for=\"info\" />"
      },
      {
        "letter": "C",
        "text": "<apex:pageMessages />"
      },
      {
        "letter": "D",
        "text": "<apex:pageMessage severity=\"info\" />"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Which action causes a before trigger to fire by default for Accounts?",
    "options": [
      {
        "letter": "A",
        "text": "Updating addresses using the Mass Address update tool"
      },
      {
        "letter": "B",
        "text": "Renaming or replacing picklists"
      },
      {
        "letter": "C",
        "text": "Converting Leads to Contacts"
      },
      {
        "letter": "D",
        "text": "Importing data using the Data Loader and the Bulk API"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 3,
    "question": "If Apex code executes inside the execute() method of an Apex class that implements the Database.Batchable interface, which two statements are true regarding governor limits?",
    "options": [
      {
        "letter": "A",
        "text": "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction."
      },
      {
        "letter": "B",
        "text": "The Apex governor limits are reset for each execution of the execute() method."
      },
      {
        "letter": "C",
        "text": "The Apex governor limits will use the asynchronous limit levels"
      },
      {
        "letter": "D",
        "text": "The Apex governor limits are omitted while calling the constructor of the Apex class."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 4,
    "question": "Where are two locations a developer can look to find information about the status of batch or future methods?",
    "options": [
      {
        "letter": "A",
        "text": "Developer Console"
      },
      {
        "letter": "B",
        "text": "Paused Flow Interviews component"
      },
      {
        "letter": "C",
        "text": "Apex Flex Queue"
      },
      {
        "letter": "D",
        "text": "Apex Jobs"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 5,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "software company uses the following objects and relationships: - Case: to handle customer support issues - Defect__c: a custom object to represent known issues with the company's software - Case_Defect__c: a junction object between Case and Defect__c to represent that a defect is a cause of a customer issue Case and Defect__c have Private organization-wide defaults (OWD). What should be done to share a specific Case_Defect__c record with a user?"
      },
      {
        "letter": "A",
        "text": "Share the Case_Defect__c record directly."
      },
      {
        "letter": "B",
        "text": "Share the parent Case and Defect__c records."
      },
      {
        "letter": "C",
        "text": "Share the parent Case record only."
      },
      {
        "letter": "D",
        "text": "Share the parent Defect__c record only."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "Which two are phases in the Aura application event propagation framework?",
    "options": [
      {
        "letter": "A",
        "text": "Bubble"
      },
      {
        "letter": "B",
        "text": "Emit"
      },
      {
        "letter": "C",
        "text": "Default"
      },
      {
        "letter": "D",
        "text": "Control"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 7,
    "question": "The Job Application__c custom object has a field that is a master-detail relationship to the Contact object, where the Contact object is the master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry Is 'Technology', while also retrieving the Contact's Job Application__c records. Based on the object's relationships, what is the most efficient statement to retrieve the list of Contacts?",
    "options": [
      {
        "letter": "A",
        "text": "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Account.Industry = 'Technology'];"
      },
      {
        "letter": "B",
        "text": "[SELECT Id, (SELECT Id FROM Job_Application__c) FROM Contact WHERE Account.Industry = 'Technology'];"
      },
      {
        "letter": "C",
        "text": "[SELECT Id, (SELECT Id FROM Job_Applications__r) FROM Contact WHERE Accounts.Industry = 'Technology'];"
      },
      {
        "letter": "D",
        "text": "[SELECT Id, (SELECT Id FROM Job_Application__r) FROM Contact WHERE Account.Industry = 'Technology'];"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "What are two use cases for executing Anonymous Apex code?",
    "options": [
      {
        "letter": "A",
        "text": "To run a batch Apex class to update all! Contacts"
      },
      {
        "letter": "B",
        "text": "To add unit test code coverage to an org"
      },
      {
        "letter": "C",
        "text": "To schedule an Apex class to run periodically"
      },
      {
        "letter": "D",
        "text": "To delete 15,000 inactive Accounts in a single transaction after a deployment"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 9,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?"
      },
      {
        "letter": "A",
        "text": "Use the schema.userinfo.Opportunity. getDefaultRecordType() method."
      },
      {
        "letter": "B",
        "text": "Use Opportunity.SObjectType.getDescribe () .getRecordTypeInfos() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping () is true."
      },
      {
        "letter": "C",
        "text": "Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() method"
      },
      {
        "letter": "D",
        "text": "Create the opportunity and check the opportunity.recozrdtType, which will have the record ID of the current user's default record type, before inserting."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a new after insert trigger on the Lead object that creates Task records for each Lead. After deploying to production, an existing outside integration that inserts Lead records in batches to Salesforce is occasionally reporting total batch failures being caused by the Task insert statement. This causes the integration process in the outside system to stop, requiring a manual restart. Which change should the developer make to allow the integration to continue when some records in a batch cause failures due to the Task insert statement, so that manual restarts are not needed?"
      },
      {
        "letter": "A",
        "text": "Remove the Apex class from the integration user's profile."
      },
      {
        "letter": "B",
        "text": "Deactivate the trigger before the integration runs."
      },
      {
        "letter": "C",
        "text": "Use the database method with allorNone set to false."
      },
      {
        "letter": "D",
        "text": "Use a try-catch block after the insert statement."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "How should a developer write unit tests for a private method in an Apex class?",
    "options": [
      {
        "letter": "A",
        "text": "Use the TestVisible annotation."
      },
      {
        "letter": "B",
        "text": "Use the SeeAllData annotation."
      },
      {
        "letter": "C",
        "text": "Add a test method in the Apex class."
      },
      {
        "letter": "D",
        "text": "Mark the Apex class as global."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer needs to have records with specific field values in order to test a new Apex class. What should the developer do to ensure the data is available to the test?"
      },
      {
        "letter": "A",
        "text": "Use Test. loadData() and reference a CSV file in a static resource."
      },
      {
        "letter": "B",
        "text": "Use Anonymous Apex to create the required data."
      },
      {
        "letter": "C",
        "text": "Use SOQL to query the org for the required data."
      },
      {
        "letter": "D",
        "text": "Use Test. loadData() and reference a JSON file in Documents."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "The sales management team at Universal Containers require that the Lead Source field of the Lead record be populated when a Lead is converted. What should be done to ensure that a user populates the Lead Source field prior to converting a Lead?",
    "options": [
      {
        "letter": "A",
        "text": "Use a validation rule."
      },
      {
        "letter": "B",
        "text": "Use a formula field."
      },
      {
        "letter": "C",
        "text": "Use Lead Conversion field mapping."
      },
      {
        "letter": "D",
        "text": "Create an after trigger on Lead."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "Which three statements are true regarding custom exceptions in Apex?",
    "options": [
      {
        "letter": "A",
        "text": "A custom exception class cannot contain member variables or methods."
      },
      {
        "letter": "B",
        "text": "A custom exception class name must end with \"Exception\"."
      },
      {
        "letter": "C",
        "text": "A custom exception class can implement one or many interfaces."
      },
      {
        "letter": "D",
        "text": "A custom exception class must extend the system exception class."
      },
      {
        "letter": "E",
        "text": "A custom exception class can extend other classes besides the Exception class."
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "lead developer creates an Apex interface called Laptop. Consider the following code snippet: public class SilverLaptop{ //code implementation } How can a developer use the Laptop Interface within the silverLaptop class?"
      },
      {
        "letter": "A",
        "text": "Extends (class=\"Laptop\") public class SilverLaptop"
      },
      {
        "letter": "B",
        "text": "Interface(class=\"Laptop\") public class SilverLaptop"
      },
      {
        "letter": "C",
        "text": "public class SilverLaptop implements Laptop"
      },
      {
        "letter": "D",
        "text": "public class SilverLaptop extends Laptop"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "What are three capabilities of the <ltng: require> tag when loading JavaScript resources in Aura components?",
    "options": [
      {
        "letter": "A",
        "text": "Specifying loading order"
      },
      {
        "letter": "B",
        "text": "Loading scripts in parallel"
      },
      {
        "letter": "C",
        "text": "Loading files from Documents"
      },
      {
        "letter": "D",
        "text": "One-time loading for duplicate scripts"
      },
      {
        "letter": "E",
        "text": "Loading externally hosted scripts"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "D"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 17,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must create a Drawlist class that provides capabilities defined in the Sortable and Drawable interfaces. public interface Sortable { void sort(); } public interface Drawable { void draw(); }"
      },
      {
        "letter": "A",
        "text": "public class Drawlist implements Sortable, Drawable { public void sort() { /* implementation */ } public void draw() { /* implementation */ } }"
      },
      {
        "letter": "B",
        "text": "public class Drawlist extends Sortable, Drawable { public void sort() { /* implementation */ } public void draw() { /* implementation */ } }"
      },
      {
        "letter": "C",
        "text": "public class Drawlist implements Sortable extends Drawable { public void sort() { /* implementation */ } public void draw() { /* implementation */ } }"
      },
      {
        "letter": "D",
        "text": "public class Drawlist extends Sortable implements Drawable { public void sort() { /* implementation */ } public void draw() { /* implementation */ } }"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requirement in the most efficient manner?"
      },
      {
        "letter": "A",
        "text": "A record trigger flow on the Opportunity object"
      },
      {
        "letter": "B",
        "text": "An approval process on the Opportunity object"
      },
      {
        "letter": "C",
        "text": "An error condition formula on a validation rule on Opportunity"
      },
      {
        "letter": "D",
        "text": "An Apex trigger on the Opportunity object"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public without sharing class OpportunityService { public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds) { List<OpportunityLineItem> oppLineItems = new List<OpportunityLineItem>(); for (Id thisOppId : opportunityIds) { oppLineItems.addAll([ SELECT Id FROM OpportunityLineItem WHERE OpportunityId = :thisOppId ]); } return oppLineItems; } } The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?"
      },
      {
        "letter": "A",
        "text": "Refactor the code above to perform only one SOQL query, filtering by the set of opportunitylds."
      },
      {
        "letter": "B",
        "text": "Refactor the code above to perform the SOQL query only if the set of opportunityIds contains less than 100 IDs."
      },
      {
        "letter": "C",
        "text": "Use the System.Limits.getQueries() method to ensure the number of queries is less than 100 before executing."
      },
      {
        "letter": "D",
        "text": "Change the class declaration to use the with sharing keyword."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Which three statements are accurate about debug logs?",
    "options": [
      {
        "letter": "A",
        "text": "System debug logs are retained for 24 hours."
      },
      {
        "letter": "B",
        "text": "Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels."
      },
      {
        "letter": "C",
        "text": "Only the 20 most recent debug logs for a user are kept."
      },
      {
        "letter": "D",
        "text": "The maximum size of a debug log is 5 MB."
      },
      {
        "letter": "E",
        "text": "Debug logs can be set for specific users, classes, and triggers."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 1,
    "question": "An org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to also create a Contact and store the created Contact's ID on the Opportunity. Which update must the developer make in the flow?",
    "options": [
      {
        "letter": "A",
        "text": "Add a new Get Records element."
      },
      {
        "letter": "B",
        "text": "Add a new Update Records element."
      },
      {
        "letter": "C",
        "text": "Add a new Roll Back Records element."
      },
      {
        "letter": "D",
        "text": "Add a new Create Records element."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the records together. Which two statements are valid considerations when using merge?"
      },
      {
        "letter": "A",
        "text": "External ID fields can be used with the merge method."
      },
      {
        "letter": "B",
        "text": "Merge is supported with accounts, contacts, cases, and leads."
      },
      {
        "letter": "C",
        "text": "The field values on the master record are overwritten by the records being merged."
      },
      {
        "letter": "D",
        "text": "The merge method allows up to three records, including the master and two additional records with the same sObject type, to be merged into the master record."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 3,
    "question": "Which scenario is valid for execution by unit tests?",
    "options": [
      {
        "letter": "A",
        "text": "Execute anonymous Apex as a different user."
      },
      {
        "letter": "B",
        "text": "Generate a Visualforce PDF with getContentAsPDF()."
      },
      {
        "letter": "C",
        "text": "Load data from a remote site with a callout."
      },
      {
        "letter": "D",
        "text": "Set the created date of a record using a system method."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must create a Lightning component that allows users to input Contact record information to create a Contact record, including a Salary _c custom field. What should the developer use, along with a lightning-record-edit-form, so that salary __c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary c?"
      },
      {
        "letter": "A",
        "text": "lightning---formatted-number value=\"Salary cc\" format-style=\"currency\"> </lightning-formatted-number>"
      },
      {
        "letter": "B",
        "text": "<lightning-input-currency value=\"Salary <c\"> </lightning-input-currency>"
      },
      {
        "letter": "C",
        "text": "<lightning-input-field field-name=\"Salary c\"> </lightning-input-field>"
      },
      {
        "letter": "D",
        "text": "<lightning-input type=\"number\" value=\"Salary c™ formatter=\"currency\"> </lightning-input>"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "What are two ways for a developer to execute tests in an org?",
    "options": [
      {
        "letter": "A",
        "text": "Developer Console"
      },
      {
        "letter": "B",
        "text": "Tooling API"
      },
      {
        "letter": "C",
        "text": "Metadata API"
      },
      {
        "letter": "D",
        "text": "Bulk API"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 6,
    "question": "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage. Which two strategies can a developer use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Use an after-save flow."
      },
      {
        "letter": "B",
        "text": "Use the Process Automation settings."
      },
      {
        "letter": "C",
        "text": "Use a trigger."
      },
      {
        "letter": "D",
        "text": "Use a validation rule."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 7,
    "question": "Universal Containers has implemented an order management application, Each Order can have one or more Order Line items. The Order Line object is related to the Order via a master-detail relationship. For each Order Line item, the total price is calculated by multiplying the Order Line item price with the quantity ordered. What is the best practice to get the sum of all Order Line item totals on the Order record?",
    "options": [
      {
        "letter": "A",
        "text": "Apex trigger"
      },
      {
        "letter": "B",
        "text": "Roll-up summary field"
      },
      {
        "letter": "C",
        "text": "Quick action"
      },
      {
        "letter": "D",
        "text": "Formula field"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a child Lightning web component nested inside a parent Lightning web component. The parent component needs to pass a string value to the child component. In which two ways can this be accomplished?"
      },
      {
        "letter": "A",
        "text": "The parent component can invoke a method in the child component."
      },
      {
        "letter": "B",
        "text": "The parent component can use a public property to pass the data to the child component."
      },
      {
        "letter": "C",
        "text": "The parent component can use a custom event to pass the data to the child component."
      },
      {
        "letter": "D",
        "text": "The parent component can use the Apex controller class to send data to the child component."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 9,
    "question": "Universal Containers wants to back up all of the data and attachments in its Salesforce org once a month. Which approach should a developer use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a Schedulable Apex class."
      },
      {
        "letter": "B",
        "text": "Use the Data Loader command line."
      },
      {
        "letter": "C",
        "text": "Schedule a report."
      },
      {
        "letter": "D",
        "text": "Define a Data Export scheduled job."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction; while being able to share the variable''s state between trigger executions. How should the developer declare maxAttempts to meet these requirements?"
      },
      {
        "letter": "A",
        "text": "Declare maxAttempts as @ private static variable on a helper class."
      },
      {
        "letter": "B",
        "text": "Declare maxAttempts as a variable on a helper class."
      },
      {
        "letter": "C",
        "text": "Declare maxAttempts as a constant using the static and final keywords."
      },
      {
        "letter": "D",
        "text": "Declare maxAttempts as a member variable on the trigger definition."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "Universal Containers (UC) is developing a process for their sales teams that requires all sales reps to go through a set of scripted steps with each new customer they create. in the first step of collecting information, UC's ERP system must be checked via a REST endpoint to see if the customer exists. If the customer exists, the data must be presented to the sales rep in Salesforce. Which two should a developer implement to satisfy the requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Future method"
      },
      {
        "letter": "B",
        "text": "Trigger"
      },
      {
        "letter": "C",
        "text": "Invocable method"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 12,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is tasked to perform a security review of the ContactSearch Apex class that exists in the system. Within the class, the developer identifies the following method as a security threat: List<Contact> performSearch (String lastName) { return Database.query('SELECT Id, FirstName, LastName FROM Contact WHERE LastName Like $'t+lastNamet+'$'); } What are two ways the developer can update the method to prevent a SOQL injection attack?"
      },
      {
        "letter": "A",
        "text": "Use variable binding and replace the dynamic query with a static SOQL."
      },
      {
        "letter": "B",
        "text": "Use the @Readonly annotation and the with sharing keyword on the class."
      },
      {
        "letter": "C",
        "text": "Use the escapeSingleQuotes method to sanitize the parameter before its use."
      },
      {
        "letter": "D",
        "text": "Use a regular expression expression on the parameter to remove special characters."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 13,
    "question": "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application?",
    "options": [
      {
        "letter": "A",
        "text": "Triggers"
      },
      {
        "letter": "B",
        "text": "Custom objects and fields"
      },
      {
        "letter": "C",
        "text": "Relationships"
      },
      {
        "letter": "D",
        "text": "Roll-up summaries"
      },
      {
        "letter": "E",
        "text": "Flows"
      }
    ],
    "correctAnswers": [
      "B",
      "C",
      "D"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 14,
    "question": "How can a developer check the test coverage of autolaunched Flows before deploying them in a change set?",
    "options": [
      {
        "letter": "A",
        "text": "Use the Flow Properties page."
      },
      {
        "letter": "B",
        "text": "Use SOQL and the Tooling API."
      },
      {
        "letter": "C",
        "text": "Use the Code Coverage Setup page."
      },
      {
        "letter": "D",
        "text": "Use the ApexTestResult class."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?"
      },
      {
        "letter": "A",
        "text": "Visual Studio Code IDE"
      },
      {
        "letter": "B",
        "text": "Developer Console"
      },
      {
        "letter": "C",
        "text": "AppExchange"
      },
      {
        "letter": "D",
        "text": "Setup Menu"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Which three Salesforce resources can be accessed from a Lightning web component?",
    "options": [
      {
        "letter": "A",
        "text": "Third-party web components"
      },
      {
        "letter": "B",
        "text": "SVG resources"
      },
      {
        "letter": "C",
        "text": "All external libraries"
      },
      {
        "letter": "D",
        "text": "Static resources"
      },
      {
        "letter": "E",
        "text": "Content asset files"
      }
    ],
    "correctAnswers": [
      "B",
      "D",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 17,
    "question": "Which action may cause triggers to fire?",
    "options": [
      {
        "letter": "A",
        "text": "Updates to Feed Items"
      },
      {
        "letter": "B",
        "text": "Changing a user's default division when the transfer division option is checked"
      },
      {
        "letter": "C",
        "text": "Renaming or replacing a picklist entry"
      },
      {
        "letter": "D",
        "text": "Cascading delete operations"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's id number and is marked as Unique in the schema definition. As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?"
      },
      {
        "letter": "A",
        "text": "Upload the CSV into a custom object related to candidate _c."
      },
      {
        "letter": "B",
        "text": "Update the PrimaryId__c field definition to mark it as an External Id."
      },
      {
        "letter": "C",
        "text": "Create a before save flow to correctly map the records."
      },
      {
        "letter": "D",
        "text": "Create a before insert trigger to correctly map the records."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "custom Visualforce controller calls the ApexPages.addMessage() method, but no messages are rendering on the page. Which component should be added to the Visualforce page to display the message?"
      },
      {
        "letter": "A",
        "text": "apex:pageMessage severity=\"info\"\" />"
      },
      {
        "letter": "B",
        "text": "apex: facet name=\"messages\" />"
      },
      {
        "letter": "C",
        "text": "<apex:pageMessages />"
      },
      {
        "letter": "D",
        "text": "apex:message for=\"info\"/>"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "What are three characteristics of change set deployments?",
    "options": [
      {
        "letter": "A",
        "text": "Deployment is done in a one-way, single transaction."
      },
      {
        "letter": "B",
        "text": "Sending a change set between two orgs requires a deployment connection."
      },
      {
        "letter": "C",
        "text": "Change sets can deploy custom settings data."
      },
      {
        "letter": "D",
        "text": "Change sets can be used to transfer records."
      },
      {
        "letter": "E",
        "text": "Change sets can only be used between related organizations."
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 1,
    "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in another custom object called PostalcodeToTimezone_c. What is the optimal way to implement this feature?",
    "options": [
      {
        "letter": "A",
        "text": "Create a formula field."
      },
      {
        "letter": "B",
        "text": "Build a flow with Flow Builder."
      },
      {
        "letter": "C",
        "text": "Build an account assignment rule."
      },
      {
        "letter": "D",
        "text": "Create an account approval process."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Refer to the following code snippet, that is part of a custom controller for a Visualforce page: public void updateContact(Contact thisContact) { thisContact.Is_Active__c = false; try { update thisContact; } catch (Exception e) { String errorMessage = 'An error occurred while updating the Contact. ' + e.getMessage(); ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.FATAL, errorMessage)); } } In which two ways can the try/catch block be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the currently logged-in user does not have the appropriate level of access?",
    "options": [
      {
        "letter": "A",
        "text": "Use if (Schema.sObjectType.Contact.isUpdateable())"
      },
      {
        "letter": "B",
        "text": "Use if (thisContact.OwnerId == UserInfo.getUserId())"
      },
      {
        "letter": "C",
        "text": "Use if (Schema.sObjectType.Contact.fields.Is_Active__c.isUpdateable())"
      },
      {
        "letter": "D",
        "text": "Use if (Schema.sObjectType.Contact.isAccessible())"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 3,
    "question": "Which two statements are true about using the @TestSetup annotation in an Apex test class?",
    "options": [
      {
        "letter": "A",
        "text": "Records created in the test setup method cannot be updated in individual test methods."
      },
      {
        "letter": "B",
        "text": "The @TestSetup annotation is not supported when the @isTest(SeeAllData=True) annotation is used."
      },
      {
        "letter": "C",
        "text": "A method defined with the @TestSetup annotation executes once for each test method in the test class and counts towards system limits."
      },
      {
        "letter": "D",
        "text": "In a test setup method, test data is inserted once and made available for all test methods in the test class."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 4,
    "question": "While working in 2 sandbox, an Apex test fails when run in the Test Framework. However, running the Apex test logic in the Execute Anonymous window succeeds with no exceptions or errors. Why did the method fail in the sandbox test framework but succeed in the Developer Console?",
    "options": [
      {
        "letter": "A",
        "text": "The test method is calling an @future method."
      },
      {
        "letter": "B",
        "text": "The test method does not use System.runAs to execute as a specific user."
      },
      {
        "letter": "C",
        "text": "The test method has a syntax error in the code."
      },
      {
        "letter": "D",
        "text": "The test method relies on existing data in the sandbox."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "When using Salesforce DX, what does a developer need to enable to create and manage scratch orgs?",
    "options": [
      {
        "letter": "A",
        "text": "Dev Hub"
      },
      {
        "letter": "B",
        "text": "Sandbox"
      },
      {
        "letter": "C",
        "text": "Production"
      },
      {
        "letter": "D",
        "text": "Environment Hub"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "A/V Computing tracks order information in custom objects called Order__c and Order_Line__c. Currently, all shipping information is stored in the Order__c object. The company wants to expand its order application to support split shipments so that any number of Order_Line__c records on a single Order__c can be shipped to different locations. What should a developer add to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Order_Shipment_Group__c object and a master-detail field on Order_Shipment_Group__c"
      },
      {
        "letter": "B",
        "text": "order_Shipment_Group__c object and master-detail fields to both Order__c and Order_Line__c."
      },
      {
        "letter": "C",
        "text": "An Order_Shipment_Group__c object and a master-detail field on Order_Line__c."
      },
      {
        "letter": "D",
        "text": "Order_Shipment_Group__c object and a master-detail field on Order__c."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created these three Rollup Summary fields in the custom object, Project__c: Total_Timesheets__c Total_Approved_Timesheets__c Total_Rejected_Timesheets__c The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project. Which should the developer use to implement the business requirement in order to minimize maintenance overhead?"
      },
      {
        "letter": "A",
        "text": "Apex trigger"
      },
      {
        "letter": "B",
        "text": "Record-triggered flow"
      },
      {
        "letter": "C",
        "text": "Formula field"
      },
      {
        "letter": "D",
        "text": "Roll-up summary field"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "What is the result of the following code? Account a = new Account(); Database.insert(a,false);",
    "options": [
      {
        "letter": "A",
        "text": "The record will not be created and an exception will be thrown."
      },
      {
        "letter": "B",
        "text": "The record will not be created and no error will be reported"
      },
      {
        "letter": "C",
        "text": "The record will be created and no error will be reported."
      },
      {
        "letter": "D",
        "text": "The record will be created and o message will be in the debug log."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "Which Salesforce org has a complete duplicate copy of the production org including data and configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Partial Copy Sandbox"
      },
      {
        "letter": "B",
        "text": "Full Sandbox"
      },
      {
        "letter": "C",
        "text": "Production"
      },
      {
        "letter": "D",
        "text": "Developer Pro Sandbox"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name \"Universal Containers\"?",
    "options": [
      {
        "letter": "A",
        "text": "SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'"
      },
      {
        "letter": "B",
        "text": "SELECT Lead.id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'"
      },
      {
        "letter": "C",
        "text": "FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id, name), contact(id, name)"
      },
      {
        "letter": "D",
        "text": "FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id, name), account(id, name), contact(id, name)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "What does the Lightning Component framework provide to developers?",
    "options": [
      {
        "letter": "A",
        "text": "Extended governor limits for applications"
      },
      {
        "letter": "B",
        "text": "Prebuilt components that can be reused"
      },
      {
        "letter": "C",
        "text": "Templates to create custom components"
      },
      {
        "letter": "D",
        "text": "Support for Classic and Lightning UIs"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "Management asked for opportunities to be automatically created for accounts with annual revenue greater than $1,000,000. A developer created the following trigger on the Account object to satisfy this requirement: trigger AccountTrigger on Account (after insert, after update) { for (Account a : Trigger.new) { if (a.AnnualRevenue > 1000000) { List<Opportunity> oppList = [SELECT Id FROM Opportunity WHERE AccountId = :a.Id]; if (oppList.size() == 0) { Opportunity oppty = new Opportunity( Name = a.Name, StageName = 'Prospecting', CloseDate = System.today().addDays(30) ); insert oppty; } } } } Users are able to update the account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrator tries to upload a list of 179 accounts using Data Loader, it fails with System.Exception errors. Which two actions should the developer take to fix the code segment shown above?",
    "options": [
      {
        "letter": "A",
        "text": "Check if all the required fields for Opportunity are being added on creation."
      },
      {
        "letter": "B",
        "text": "Query for existing opportunities outside the for loop."
      },
      {
        "letter": "C",
        "text": "Use database.query to query the opportunities."
      },
      {
        "letter": "D",
        "text": "Move the DML that saves opportunities outside the for loop."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 13,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's ID number and is marked as Unique in the schema definition As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each Candidate's primary ID as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?"
      },
      {
        "letter": "A",
        "text": "Upload the CSV into a custom object related to Candidate__c."
      },
      {
        "letter": "B",
        "text": "Update the PrimaryId__c field definition to mark it as an External ID."
      },
      {
        "letter": "C",
        "text": "Create a before-save flow to correctly map the records."
      },
      {
        "letter": "D",
        "text": "Create a before-insert trigger to correctly map the records."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class. Which code segment shows the correct declaration of the class and methods?"
      },
      {
        "letter": "A",
        "text": "webservice class WebServiceClass { private Boolean helperMethod() { / implementation \\... / } global static String updateRecords() { / implementation \\... / } }"
      },
      {
        "letter": "B",
        "text": "global class WebServiceClass { private Boolean helperMethod() { / implementation \\... / } global String updateRecords() { / implementation \\... / } }"
      },
      {
        "letter": "C",
        "text": "global class WebServiceClass { private Boolean helperMethod() { / implementation \\... / } webservice static String updateRecords() { / implementation \\... / } }"
      },
      {
        "letter": "D",
        "text": "global class WebServiceClass { webservice Boolean helperMethod() { / implementation \\... / } webservice static String updateRecords() { / implementation \\... / } }"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer has the following requirements: - Calculate the total amount on an Order. - Calculate the line amount for each Line Item based on quantity selected and price. - Move Line Items to a different Order if a Line Item is not in stock. Which relationship implementation supports these requirements on its own?"
      },
      {
        "letter": "A",
        "text": "Order has a re-parentable lookup field to Line Item."
      },
      {
        "letter": "B",
        "text": "Line Item has a re-parentable lookup field to Order."
      },
      {
        "letter": "C",
        "text": "Order has a re-parentable master-detail field to Line Item."
      },
      {
        "letter": "D",
        "text": "Line Item has a re-parentable master-detail field to Order."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
    "options": [
      {
        "letter": "A",
        "text": "force:data:tree:import"
      },
      {
        "letter": "B",
        "text": "force:data:object:create"
      },
      {
        "letter": "C",
        "text": "force:data:bulk:upsert"
      },
      {
        "letter": "D",
        "text": "force:data:async:upsert"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 17,
    "question": "Universal Containers has a large number of custom applications that were built using 3 third-party JavaScript frameworks and exposed using Visualforce pages. The company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application."
      },
      {
        "letter": "B",
        "text": "Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications."
      },
      {
        "letter": "C",
        "text": "Rewrite all Visualforce pages as Lightning components."
      },
      {
        "letter": "D",
        "text": "Set the attribute enableLightning to true in the definition."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?"
      },
      {
        "letter": "A",
        "text": "Use Test.loadData() and a static resource to load a standard price book."
      },
      {
        "letter": "B",
        "text": "Use Test.getStandardPricebookId() to get the standard price book ID."
      },
      {
        "letter": "C",
        "text": "Use @IsTest(SeeAllData=true) and delete the existing standard price book."
      },
      {
        "letter": "D",
        "text": "Use @TestVisible to allow the test method to see the standard price book."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "lead developer creates an Apex interface called Laptop. Consider the following code snippet: public class SilverLaptop { // code implementation } How can a developer use the Laptop interface within the SilverLaptop class?"
      },
      {
        "letter": "A",
        "text": "public class SilverLaptop extends Laptop"
      },
      {
        "letter": "B",
        "text": "@Interface(class=\"Laptop\") public class SilverLaptop"
      },
      {
        "letter": "C",
        "text": "@Extends(class=\"Laptop\") public class SilverLaptop"
      },
      {
        "letter": "D",
        "text": "public class SilverLaptop implements Laptop"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Universal Containers wants Opportunities to no longer be editable when reaching the Closed/Won stage. How should a Developer accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Use a validation rule."
      },
      {
        "letter": "B",
        "text": "Mark fields as read-only on the page layout."
      },
      {
        "letter": "C",
        "text": "Use Flow Builder."
      },
      {
        "letter": "D",
        "text": "Use the Process Automation settings."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is asked to prevent anyone other than a user with Sales Manager profile from changing the Opportunity Status to Closed Lost if the lost reason is blank. Which automation allows the developer to satisfy this requirement in the most efficient manner?"
      },
      {
        "letter": "A",
        "text": "An Apex trigger on the Opportunity object"
      },
      {
        "letter": "B",
        "text": "An error condition formula on 2 validation rule on Opportunity"
      },
      {
        "letter": "C",
        "text": "An approval process on the Opportunity object"
      },
      {
        "letter": "D",
        "text": "A record trigger flow on the Opportunity object"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Which three code lines are required to create a Lightning component on a Visualforce page?",
    "options": [
      {
        "letter": "A",
        "text": "$Lightning.useComponent"
      },
      {
        "letter": "B",
        "text": "<apex:slds/>"
      },
      {
        "letter": "C",
        "text": "$Lightning.use"
      },
      {
        "letter": "D",
        "text": "<apex:includeLightning/>"
      },
      {
        "letter": "E",
        "text": "$Lightning.createComponent"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 3,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is integrating with a legacy on-premise SQL database. What should the developer use to ensure the data being integrated is matched to the right records in Salesforce?"
      },
      {
        "letter": "A",
        "text": "External Object"
      },
      {
        "letter": "B",
        "text": "Lookup field"
      },
      {
        "letter": "C",
        "text": "External ID field"
      },
      {
        "letter": "D",
        "text": "Formula field"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?"
      },
      {
        "letter": "A",
        "text": "Schema.sObjectType.Account.isDeletable()"
      },
      {
        "letter": "B",
        "text": "Account.isDeletable()"
      },
      {
        "letter": "C",
        "text": "accountRec.isDeletable()"
      },
      {
        "letter": "D",
        "text": "accountRec.sObjectType.isDeletable()"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "business has two proprietary Order Management Systems (OMS) that create orders from their website and fulfill the orders. When an order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact identified by the email on the order. As the order goes through different stages in the OMS, the integration updates it in Salesforce. It is noticed that each update from the OMS creates a new order record in Salesforce. Which two actions will prevent duplicate order records from being created in Salesforce?"
      },
      {
        "letter": "A",
        "text": "Write a before trigger on the order object to delete any duplicates."
      },
      {
        "letter": "B",
        "text": "Use the email on the contact record as an external ID."
      },
      {
        "letter": "C",
        "text": "Ensure that the order number in the OMS is unique."
      },
      {
        "letter": "D",
        "text": "Use the order number from the OMS as an external ID."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 6,
    "question": "Consider the following code snippet: public static List<Lead> obtainAllFields(Set<Id> leadIds) { List<Lead> result = new List<Lead>(); for(Id leadId : leadIds) { result.add([SELECT FIELDS(ALL) FROM Lead WHERE Id = :leadId]); } return result; } Given the multi-tenant architecture of the Salesforce platform, what is a best practice a developer should implement to ensure successful execution of the method?",
    "options": [
      {
        "letter": "A",
        "text": "Avoid executing queries without a LIMIT clause."
      },
      {
        "letter": "B",
        "text": "Avoid performing queries inside for loops."
      },
      {
        "letter": "C",
        "text": "Avoid using variables as query filters."
      },
      {
        "letter": "D",
        "text": "Avoid returning an empty list of records."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a trigger on the Account object and wants to test if the trigger is properly bulkified. The developer team decided that the trigger should be tested with 200 account records with unique names. What two things should be done to create the test data within the unit test with the least amount of code?"
      },
      {
        "letter": "A",
        "text": "Use the @isTest(seeAllData=true) annotation in the test class."
      },
      {
        "letter": "B",
        "text": "Use the @isTest(isParallel=true) annotation in the test class."
      },
      {
        "letter": "C",
        "text": "Create a static resource containing test data."
      },
      {
        "letter": "D",
        "text": "Use Test.loadData() to populate data in your test methods."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 8,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "company has a custom object, Sales_Help_Request__c, that has a lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c. A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?"
      },
      {
        "letter": "A",
        "text": "A trigger on the Opportunity object"
      },
      {
        "letter": "B",
        "text": "A roll-up summary field on the Sales_Help_Request__c object"
      },
      {
        "letter": "C",
        "text": "A roll-up summary field on the Opportunity object"
      },
      {
        "letter": "D",
        "text": "A record-triggered flow on the Sales_Help_Request__c object"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is creating an app that contains multiple Lightning web components. One of the child components is used for navigation purposes. When a user clicks a button called Next in the child component, the parent component must be alerted so it can navigate to the next page. How should this be accomplished?"
      },
      {
        "letter": "A",
        "text": "Create a custom event."
      },
      {
        "letter": "B",
        "text": "Update a property on the parent."
      },
      {
        "letter": "C",
        "text": "Fire a notification."
      },
      {
        "letter": "D",
        "text": "Call a method in the Apex controller."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "What are three capabilities of the <ltng: require> tag when loading JavaScript resources in Aura components?",
    "options": [
      {
        "letter": "A",
        "text": "Specifying loading order"
      },
      {
        "letter": "B",
        "text": "Loading scripts in parallel"
      },
      {
        "letter": "C",
        "text": "One-time loading for duplicate scripts"
      },
      {
        "letter": "D",
        "text": "Loading tiles from Documents"
      },
      {
        "letter": "E",
        "text": "Loading externally hosted scripts"
      }
    ],
    "correctAnswers": [
      "A",
      "B",
      "C"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 11,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer must create a credit card payment class that provides an implementation of an existing Payment class. public virtual class Payment { public virtual void makePayment(Decimal amount) { /* implementation */ } }"
      },
      {
        "letter": "A",
        "text": "public class CreditCardPayment implements Payment { public override void makePayment(Decimal amount) { /* implementation */ } }"
      },
      {
        "letter": "B",
        "text": "public class CreditCardPayment implements Payment { public virtual void makePayment(Decimal amount) { /* implementation */ } }"
      },
      {
        "letter": "C",
        "text": "public class CreditCardPayment extends Payment { public override void makePayment(Decimal amount) { /* implementation */ } }"
      },
      {
        "letter": "D",
        "text": "public class CreditCardPayment extends Payment { public virtual void makePayment(Decimal amount) { /* implementation */ } }"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "What are three ways for a developer to execute tests in an org?",
    "options": [
      {
        "letter": "A",
        "text": "Metadata API"
      },
      {
        "letter": "B",
        "text": "Bulk API"
      },
      {
        "letter": "C",
        "text": "Setup Menu"
      },
      {
        "letter": "D",
        "text": "Salesforce DX"
      },
      {
        "letter": "E",
        "text": "Tooling API"
      }
    ],
    "correctAnswers": [
      "C",
      "D",
      "E"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 13,
    "question": "Universal Containers (UC) processes orders in Salesforce in a custom object, Order__c. They also allow sales reps to upload CSV files with thousands of orders at a time. A developer is tasked with integrating orders placed in Salesforce with UC's enterprise resource planning (ERP) system. After the status for an Order__c is first set to 'Placed', the order information must be sent to a REST endpoint in the ERP system that can process one order at a time. What should the developer implement to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Callout from a Queueable class called from a trigger"
      },
      {
        "letter": "B",
        "text": "Callout from a Batchable class called from a scheduled job"
      },
      {
        "letter": "C",
        "text": "Flow with a callout from an invocable method"
      },
      {
        "letter": "D",
        "text": "Callout from an @future method called from a trigger"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "When importing and exporting data into Salesforce, which two statements are true?",
    "options": [
      {
        "letter": "A",
        "text": "Bulk API can be used to bypass the storage limits when importing large volumes in development environments"
      },
      {
        "letter": "B",
        "text": "Bulk API can be used to import large data volumes in development environments without bypassing the storage limits"
      },
      {
        "letter": "C",
        "text": "Developer and developer pro sandboxes have different storage limits."
      },
      {
        "letter": "D",
        "text": "Data import wizard is an application that is installed on your computer"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 15,
    "question": "Which code statement includes an Apex method named updateAccounts in the class AccountController for use in a Lightning web component?",
    "options": [
      {
        "letter": "A",
        "text": "import updateAccounts from 'AccountController.updateAccounts';"
      },
      {
        "letter": "B",
        "text": "import updateAccounts from 'AccountController';"
      },
      {
        "letter": "C",
        "text": "import updateAccounts from '@salesforce/apex/AccountController';"
      },
      {
        "letter": "D",
        "text": "import updateAccounts from '@salesforce/apex/AccountController.updateAccounts';"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is implementing an Apex class for a financial system. Within the class, the variables creditAmount and debitAmount should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time?"
      },
      {
        "letter": "A",
        "text": "Use the static keyword and assign its value in a static initializer."
      },
      {
        "letter": "B",
        "text": "Use the final keyword and assign its value when declaring the variable."
      },
      {
        "letter": "C",
        "text": "Use the final keyword and assign its value in the class constructor."
      },
      {
        "letter": "D",
        "text": "Use the static keyword and assign its value in the class constructor."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 17,
    "question": "When a user edits the Postal Code on an Account, a custom Account text field named \"Timezone\" must be updated based on the values in a PostalCodeToTimezone__c custom object. Which two automation tools can be used to implement this feature?",
    "options": [
      {
        "letter": "A",
        "text": "Fast Field Updates record-triggered flow"
      },
      {
        "letter": "B",
        "text": "Quick actions"
      },
      {
        "letter": "C",
        "text": "Account trigger"
      },
      {
        "letter": "D",
        "text": "Approval process"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components. Which annotation should the developer add to the Apex method to achieve this?"
      },
      {
        "letter": "A",
        "text": "@AuraEnabled(cacheable=true)"
      },
      {
        "letter": "B",
        "text": "@RemoteAction"
      },
      {
        "letter": "C",
        "text": "@RemoteAction(cacheable=true)"
      },
      {
        "letter": "D",
        "text": "@AuraEnabled"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is creating a Lightning web component to show a list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field. How should this be enforced so that the component works for both users without showing any errors?"
      },
      {
        "letter": "A",
        "text": "Use Security.stripInaccessible to remove fields inaccessible to the current user."
      },
      {
        "letter": "B",
        "text": "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component."
      },
      {
        "letter": "C",
        "text": "Use Lightning Data Service to get the collection of sales records."
      },
      {
        "letter": "D",
        "text": "Use Lightning Locker Service to enforce sharing rules and field-level security."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "Management asked for opportunities to be automatically created for accounts with annual revenue greater than $1,000,000. A developer created the following trigger on the Account object to satisfy this requirement: for (Account a : Trigger.new) { if (a.AnnualRevenue > 1000000) { List<Opportunity> oppList = [SELECT Id FROM Opportunity WHERE AccountId = :a.Id]; if (oppList.size() == 0) { Opportunity oppty = new Opportunity(Name = a.Name, StageName = 'Prospecting', CloseDate = System.today().addDays(30)); insert oppty; } } } Users are able to update account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrator tries to upload a list of 179 accounts using Data Loader, it fails with system exception errors. Which two actions should the developer take to fix the code segment shown above?",
    "options": [
      {
        "letter": "A",
        "text": "Move the DML that saves opportunities outside the for loop."
      },
      {
        "letter": "B",
        "text": "Check if all the required fields for Opportunity are being added on creation."
      },
      {
        "letter": "C",
        "text": "Query for existing opportunities outside the for loop."
      },
      {
        "letter": "D",
        "text": "Use Database.query to query the opportunities."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 2,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer created a trigger on the Account object and wants to test if the trigger is properly bulkified. The developer team decided that the trigger should be tested with 200 account records with unique names. What two things should be done to create the test data within the unit test with the least amount of code?"
      },
      {
        "letter": "A",
        "text": "Create a static resource containing test data."
      },
      {
        "letter": "B",
        "text": "Use Test.loadData() to populate data in your test methods."
      },
      {
        "letter": "C",
        "text": "Use the @isTest(seeAllData=true) annotation in the test class."
      },
      {
        "letter": "D",
        "text": "Use the @isTest(isParallel=true) annotation in the test class."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 3,
    "question": "Universal Containers wants Opportunities to no longer be editable when reaching the Closed/Won stage. How should a developer accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Use the Process Automation settings."
      },
      {
        "letter": "B",
        "text": "Mark fields as read-only on the page layout."
      },
      {
        "letter": "C",
        "text": "Use a validation rule."
      },
      {
        "letter": "D",
        "text": "Use Flow Builder."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "What should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name \"Universal Containers\"?",
    "options": [
      {
        "letter": "A",
        "text": "FIND 'Universal Containers' IN CompanyName Fields RETURNING Lead(Id, Name), Account(Id, Name), Contact(Id, Name)"
      },
      {
        "letter": "B",
        "text": "FIND 'Universal Containers' IN Name Fields RETURNING Lead(Id, Name), Account(Id, Name), Contact(Id, Name)"
      },
      {
        "letter": "C",
        "text": "SELECT Lead.Id, Lead.Name, Account.Id, Account.Name, Contact.Id, Contact.Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'"
      },
      {
        "letter": "D",
        "text": "SELECT lead(id, name), account(id, name), contact(id, name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "company has a custom object, Sales_Help_Request__c, that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c. A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?"
      },
      {
        "letter": "A",
        "text": "A roll-up summary field on the Opportunity object"
      },
      {
        "letter": "B",
        "text": "A roll-up summary field on the Sales Help Request__c object"
      },
      {
        "letter": "C",
        "text": "A record-triggered flow on the Sales Help Request__c object"
      },
      {
        "letter": "D",
        "text": "A trigger on the Opportunity object"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "Refer to the following code snippet, which is part of a custom controller for a Visualforce page: public void updateContact(Contact thisContact) { thisContact.IsActive__c = false; try { update thisContact; } catch (Exception e) { String errorMessage = 'An error occurred while updating the Contact. ' + e.getMessage(); ApexPages.addmessage(new ApexPages.message(ApexPages.severity.FATAL, errorMessage)); } } In which two ways can the try/catch be enclosed to enforce object-level and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access?",
    "options": [
      {
        "letter": "A",
        "text": "Use if (thisContact.OwnerId == UserInfo.getUserId())"
      },
      {
        "letter": "B",
        "text": "Use if (Schema.sObjectType.Contact.fields.IsActive__c.isUpdateable())"
      },
      {
        "letter": "C",
        "text": "Use if (Schema.sObjectType.Contact.isAccessible())"
      },
      {
        "letter": "D",
        "text": "Use if (Schema.sObjectType.Contact.isUpdateable())"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is creating a Lightning web component to show a list of sales records. The Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field. How should this be enforced so that the component works for both users without showing any errors?"
      },
      {
        "letter": "A",
        "text": "Use Lightning Data Service to get the collection of sales records."
      },
      {
        "letter": "B",
        "text": "Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component."
      },
      {
        "letter": "C",
        "text": "Use Lightning Locker Service to enforce sharing rules and field-level security."
      },
      {
        "letter": "D",
        "text": "Use Security.stripInaccessible to remove fields inaccessible to the current user."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "PrimaryId__c custom field exists on the Candidate__c custom object. The field is used to store each candidate's ID number and is marked as Unique in the schema definition. As part of a data enrichment process, Universal Containers has a CSV file that contains updated data for all candidates in the system. The file contains each candidate's primary ID as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?"
      },
      {
        "letter": "A",
        "text": "Create a before save flow to correctly map the records."
      },
      {
        "letter": "B",
        "text": "Update the PrimaryId__c field definition to mark it as an External Id."
      },
      {
        "letter": "C",
        "text": "Create a before insert trigger to correctly map the records."
      },
      {
        "letter": "D",
        "text": "Upload the CSV into a custom object related to Candidate__c."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "Universal Containers (UC) is developing a process for their sales teams that requires all sales reps to go through a set of scripted steps with each new customer they create. In the first step of collecting information, UC's ERP system must be checked via a REST endpoint to see if the customer exists. If the customer exists, the data must be presented to the sales rep in Salesforce. Which two should a developer implement to satisfy the requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Future method"
      },
      {
        "letter": "B",
        "text": "Trigger"
      },
      {
        "letter": "C",
        "text": "Invocable method"
      },
      {
        "letter": "D",
        "text": "Flow"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 10,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to include helper methods that are not used by the Web Application in the implementation of the Web Service Class. Which code segment shows the correct declaration of the class and methods?"
      },
      {
        "letter": "A",
        "text": "webservice class WebServiceClass { private Boolean helperMethod() { / implementation \\... / } webservice static String updateRecords() { / implementation \\... / } }"
      },
      {
        "letter": "B",
        "text": "global class WebServiceClass { private Boolean helperMethod() { / implementation \\... / } webservice static String updateRecords() { / implementation \\... / } }"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?"
      },
      {
        "letter": "A",
        "text": "Use @TestVisible to allow the test method to see the standard price book."
      },
      {
        "letter": "B",
        "text": "Use @isTest(SeeAllData=true) and delete the existing standard price book."
      },
      {
        "letter": "C",
        "text": "Use Test.loadData() and a static resource to load a standard price book."
      },
      {
        "letter": "D",
        "text": "Use Test.getStandardPricebookId() to get the standard price book ID."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?"
      },
      {
        "letter": "A",
        "text": "Use the Schema.userInfo.Opportunity.getDefaultRecordtypeId() method."
      },
      {
        "letter": "B",
        "text": "Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of record types, and iterate through them until isDefaultRecordTypeMapping() is true."
      },
      {
        "letter": "C",
        "text": "Create the opportunity and check the opportunity record type, which will have the record ID of the current user's default record type, before inserting."
      },
      {
        "letter": "D",
        "text": "Query the Profile where the ID equals UserInfo.getProfileId() and then use the profile object's default record type method."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "company has been adding data to Salesforce and has not done a good job of limiting the creation of duplicate Lead records. The developer is considering writing an Apex process to identify duplicates and merge the records together. Which two statements are valid considerations when using merge?"
      },
      {
        "letter": "A",
        "text": "The field values on the master record are overwritten by the records being merged."
      },
      {
        "letter": "B",
        "text": "External ID fields can be used with the merge method."
      },
      {
        "letter": "C",
        "text": "The merge method allows up to three records, including the master and two additional records with the same sObject type, to be merged into the master record."
      },
      {
        "letter": "D",
        "text": "Merge is supported with accounts, contacts, cases, and leads."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 14,
    "question": "How should a developer write unit tests for a private method in an Apex class?",
    "options": [
      {
        "letter": "A",
        "text": "Use the SeeAllData annotation."
      },
      {
        "letter": "B",
        "text": "Add a test method in the Apex class"
      },
      {
        "letter": "C",
        "text": "Use the TestVisible annotation."
      },
      {
        "letter": "D",
        "text": "Mark the Apex class as global."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer has an integer variable called maxAttempts. The developer needs to ensure that once maxAttempts is initialized, it preserves its value for the length of the Apex transaction, while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?"
      },
      {
        "letter": "A",
        "text": "Declare maxAttempts as a constant using the static and final keywords."
      },
      {
        "letter": "B",
        "text": "Declare maxAttempts as a member variable on the trigger definition."
      },
      {
        "letter": "C",
        "text": "Declare maxAttempts as a variable on a helper class."
      },
      {
        "letter": "D",
        "text": "Declare maxAttempts as a private static variable on a helper class."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "If Apex code executes inside the execute() method of an Apex class when implementing the Database.Batchable interface, which two statements are true regarding governor limits?",
    "options": [
      {
        "letter": "A",
        "text": "The Apex governor limits are omitted while calling the constructor of the Apex class."
      },
      {
        "letter": "B",
        "text": "The Apex governor limits are reset for each iteration of the execute() method."
      },
      {
        "letter": "C",
        "text": "The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction."
      },
      {
        "letter": "D",
        "text": "The Apex governor limits will use the asynchronous limit levels."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 17,
    "question": "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?",
    "options": [
      {
        "letter": "A",
        "text": "<aura:application access=\"GLOBAL\" extends=\"ltng:outApp\"> <aura:dependency resource=\"c:accountList\"/> </aura:application>"
      },
      {
        "letter": "B",
        "text": "<aura:component access=\"GLOBAL\" extends=\"ltng:outApp\"> <aura:dependency resource=\"c:accountList\"/> </aura:component>"
      },
      {
        "letter": "C",
        "text": "<aura:component access=\"GLOBAL\"> <aura:dependency resource=\"c:accountList\"/> </aura:component>"
      },
      {
        "letter": "D",
        "text": "<aura:application access=\"GLOBAL\"> <aura:dependency resource=\"c:accountList\"/> </aura:application>"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "software company uses the following objects and relationships: - Case: to handle customer support issues - Defect__c: a custom object to represent known issues with the company's software - Case_Defect__c: a junction object between Case and Defect__c to represent that a defect is a cause of a customer issue Case and Defect__c have Private organization-wide defaults. What should be done to share a specific Case_Defect__c record with a user?"
      },
      {
        "letter": "A",
        "text": "Share the parent Defect__c record."
      },
      {
        "letter": "B",
        "text": "Share the parent Case record."
      },
      {
        "letter": "C",
        "text": "Share the parent Case and Defect__c records."
      },
      {
        "letter": "D",
        "text": "Share the Case_Defect__c record."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "What should a developer do to check the code coverage of a class after running all tests?",
    "options": [
      {
        "letter": "A",
        "text": "Select and run the class on the Apex Test Execution page in the Developer Console."
      },
      {
        "letter": "B",
        "text": "View the Class Test Percentage tab on the Apex Class list view in Salesforce Setup."
      },
      {
        "letter": "C",
        "text": "View the code coverage percentage for the class using the Overall Code Coverage panel in the Developer Console Tests tab."
      },
      {
        "letter": "D",
        "text": "View the Code Coverage column in the list view on the Apex Classes page."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "How should a developer write unit tests for a private method in an Apex class?",
    "options": [
      {
        "letter": "A",
        "text": "Mark the Apex class as global."
      },
      {
        "letter": "B",
        "text": "Use the TestVisible annotation."
      },
      {
        "letter": "C",
        "text": "Add a test method in the Apex class."
      },
      {
        "letter": "D",
        "text": "_Use the SeeAllData annotation."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 21,
    "question": "Which scenario is valid for execution by unit tests?",
    "options": [
      {
        "letter": "A",
        "text": "Generate a Visualforce PDF with getContentAsPDF()."
      },
      {
        "letter": "B",
        "text": "Execute anonymous Apex as a different user."
      },
      {
        "letter": "C",
        "text": "Set the created date of a record using a system method."
      },
      {
        "letter": "D",
        "text": "Load data from a remote site with a callout."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as DML statements?",
    "options": [
      {
        "letter": "A",
        "text": "OrgLimits"
      },
      {
        "letter": "B",
        "text": "Messaging"
      },
      {
        "letter": "C",
        "text": "Limits"
      },
      {
        "letter": "D",
        "text": "Exception"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is tasked to perform a security review of the ContactSearch Apex class that exists in the system. Within the class, the developer identifies the following method as a security threat: > Apex - List<Contact> performSearch(String lastName) { - return Database.query('SELECT Id, FirstName, LastName FROM Contact WHERE LastName Like \\'%' + lastName + '%\\''); - } What are two ways the developer can update the method to prevent a SOQL injection attack?"
      },
      {
        "letter": "A",
        "text": "Use a regular expression on the parameter to remove special characters."
      },
      {
        "letter": "B",
        "text": "Use variable binding and replace the dynamic query with a static SOQL."
      },
      {
        "letter": "C",
        "text": "Use the escapeSingleQuotes method to sanitize the parameter before its use."
      },
      {
        "letter": "D",
        "text": "Use the @ReadOnly annotation and the with sharing keyword on the class."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 3,
    "question": "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c. Users should be able to associate multiple Engineering_Support__c records to a single Opportunity record. Additionally, aggregate information about the Engineering_Support__c records should be shown on the Opportunity record. Which relationship field should be implemented to support these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Lookup field from Engineering_Support__c to Opportunity"
      },
      {
        "letter": "B",
        "text": "Lookup field from Opportunity to Engineering_Support__c"
      },
      {
        "letter": "C",
        "text": "Master-detail field from Opportunity to > Engineering_Support__c"
      },
      {
        "letter": "D",
        "text": "Master-detail field from Engineering_Support__c to Opportunity"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "An Apex method, getAccounts, that returns a list of Accounts given a searchTerm, is available for Lightning Web Components to use. What is the correct definition of a Lightning Web Component property that uses the getAccounts method?",
    "options": [
      {
        "letter": "A",
        "text": "@AuraEnabled(getAccounts, '$searchTerm') accountList;"
      },
      {
        "letter": "B",
        "text": "@wire(getAccounts, { searchTerm: '$searchTerm' }) accountList;"
      },
      {
        "letter": "C",
        "text": "@AuraEnabled(getAccounts, { searchTerm: '$searchTerm' }) accountList;"
      },
      {
        "letter": "D",
        "text": "@wire(getAccounts, '$searchTerm') accountList;"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?"
      },
      {
        "letter": "A",
        "text": "Use Test.loadData() and a static resource to load a standard price book."
      },
      {
        "letter": "B",
        "text": "Use Test.getStandardPricebookId() to get the standard price book ID."
      },
      {
        "letter": "C",
        "text": "Use @IsTest(SeeAllData=true) and delete the existing standard price book."
      },
      {
        "letter": "D",
        "text": "Use @TestVisible to allow the test method to see the standard price book."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "Refer to the following code snippet for an environment that has more than 200 Accounts belonging to the 'Technology' industry: for(Account thisAccount : [SELECT Id, Industry FROM Account LIMIT 150]) { if(thisAccount.Industry == 'Technology') { thisAccount.Is_Tech__c = true; } update thisAccount; } When the code executes, what happens as a result of the Apex transaction?",
    "options": [
      {
        "letter": "A",
        "text": "The Apex transaction succeeds and all processed accounts are updated if no exceptions occur during the update."
      },
      {
        "letter": "B",
        "text": "The Apex transaction fails with the following message: sObject row was retrieved via SOQL without querying the requested field: Account.Is_Tech__c."
      },
      {
        "letter": "C",
        "text": "If executed in a synchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit."
      },
      {
        "letter": "D",
        "text": "If executed in an asynchronous context, the Apex transaction is likely to fail by exceeding the DML governor limit."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "",
    "options": [
      {
        "letter": "A",
        "text": "developer is working on a project to import data from an external system into Salesforce. The data contains sensitive information that should not be visible to all users in Salesforce. What should the developer do to ensure that the data is secure?"
      },
      {
        "letter": "A",
        "text": "Use the Salesforce CLI to import the data and set up user permissions to restrict access to sensitive data."
      },
      {
        "letter": "B",
        "text": "Use the Data Import Wizard to import the data and set up field-level security to restrict access to sensitive fields."
      },
      {
        "letter": "C",
        "text": "Use a third-party tool to encrypt the sensitive data before importing it into Salesforce."
      },
      {
        "letter": "D",
        "text": "Use the Apex Data Loader to import the data and write Apex code to handle security and access control."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "Universal Containers tracks customer complaints in a custom object, Complaint__c, that has a Master-Detail relationship to the Contact that made the complaint. Which field is needed to display the date of the most recent Complaint__c on the Contact's detail page?",
    "options": [
      {
        "letter": "A",
        "text": "Formula field on Contact of the MIN Created Date of a Complaint__c"
      },
      {
        "letter": "B",
        "text": "Roll-up summary field on Contact of the MIN Created Date of a Complaint__c"
      },
      {
        "letter": "C",
        "text": "Roll-up summary field on Contact of the MAX Created Date of a Complaint__c"
      },
      {
        "letter": "D",
        "text": "Formula field on Contact of the MAX Created Date of a Complaint__c"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  }
];
