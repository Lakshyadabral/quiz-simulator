export const questions = [
  {
    "questionNumber": 1,
    "question": "Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow. How should the administrator address this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Remove validation rules so that the users are able to proceed without complete records."
      },
      {
        "letter": "B",
        "text": "Use a fault connector and display a screen with text explaining what went wrong and how to correct it."
      },
      {
        "letter": "C",
        "text": "Uncheck the End User Flow Errors box in Setup."
      },
      {
        "letter": "D",
        "text": "Create a permission set to allow users to bypass the error."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "What are two considerations an administrator should keep in mind when working with Salesforce objects?",
    "options": [
      {
        "letter": "A",
        "text": "Standard objects are included with Salesforce."
      },
      {
        "letter": "B",
        "text": "Custom and standard objects have standard fields."
      },
      {
        "letter": "C",
        "text": "A new standard object can be created."
      },
      {
        "letter": "D",
        "text": "Only standard objects support master-detail relationships."
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
    "question": "An administrator has been asked to change the data type of an auto number to a text field. What should the administrator be aware of before changing the field?",
    "options": [
      {
        "letter": "A",
        "text": "Existing field values will remain unchanged."
      },
      {
        "letter": "B",
        "text": "Existing field values will be deleted."
      },
      {
        "letter": "C",
        "text": "Existing Auto Number field to Text is prevented."
      },
      {
        "letter": "D",
        "text": "Existing field values will be converted."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should the administrator use to deliver this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Formula Field"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Prebuilt Macro"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "An administrator at Northern Trail Outfitters is creating a validation rule. Which two functions should the administrator use when creating a validation rule?",
    "options": [
      {
        "letter": "A",
        "text": "Error condition formula"
      },
      {
        "letter": "B",
        "text": "Error message location"
      },
      {
        "letter": "C",
        "text": "Formula return type"
      },
      {
        "letter": "D",
        "text": "Rule active date"
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
    "question": "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
    "options": [
      {
        "letter": "A",
        "text": "Configure Email-to-Case so emails are delivered to the correct queue."
      },
      {
        "letter": "B",
        "text": "Create an Escalation Rule to send cases to the correct queue."
      },
      {
        "letter": "C",
        "text": "Use a custom email service to set the owner of the case upon creation."
      },
      {
        "letter": "D",
        "text": "Utilize a flow to identify the correct queue and assign the case."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
    "options": [
      {
        "letter": "A",
        "text": "Owner-based sharing"
      },
      {
        "letter": "B",
        "text": "Criteria-based sharing"
      },
      {
        "letter": "C",
        "text": "Hierarchical sharing"
      },
      {
        "letter": "D",
        "text": "Use manual sharing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
    "options": [
      {
        "letter": "A",
        "text": "Design a standard Campaign report and add the Value Won Opportunities in Campaign field."
      },
      {
        "letter": "B",
        "text": "Create a roll-up summary field on Opportunity to Campaign."
      },
      {
        "letter": "C",
        "text": "Perform periodic data jobs to update campaign records."
      },
      {
        "letter": "D",
        "text": "Add a Total Value field on Campaign and use a workflow rule to update the value when an opportunity is won."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should an administrator use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Case Escalation Rule"
      },
      {
        "letter": "B",
        "text": "Assignment Rule"
      },
      {
        "letter": "C",
        "text": "Formula field"
      },
      {
        "letter": "D",
        "text": "Omni-Channel Supervisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Universal Containers created a new job posting on the first of the month. It triggered a process scheduled action that will send a Chatter post to the department VP in 30 days if the position is still open and the status is not equal to Interviewing. On the 10th of the month, an applicant interviews, and the job posting status is updated to Interviewing. What will happen to the Chatter post in this situation?",
    "options": [
      {
        "letter": "A",
        "text": "The pending Chatter post will be canceled."
      },
      {
        "letter": "B",
        "text": "The pending Chatter post will be sent on the 10th of the month."
      },
      {
        "letter": "C",
        "text": "The pending Chatter post will be paused."
      },
      {
        "letter": "D",
        "text": "The pending Chatter post will be sent in 30 days."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "Users at Cloud Kicks are reporting different options when updating a custom picklist on the Opportunity object based on the kind of opportunity. Where should an administrator update the option in the picklist?",
    "options": [
      {
        "letter": "A",
        "text": "Fields and relationships"
      },
      {
        "letter": "B",
        "text": "Picklist value sets"
      },
      {
        "letter": "C",
        "text": "Related lookup filters"
      },
      {
        "letter": "D",
        "text": "Record type"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create an assignment rule to email the lead."
      },
      {
        "letter": "B",
        "text": "Configure an auto-response rule to email the lead."
      },
      {
        "letter": "C",
        "text": "Add a public group and Process Builder to email the lead."
      },
      {
        "letter": "D",
        "text": "Use a validation rule to trigger workflow to email the lead."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Territory Management"
      },
      {
        "letter": "B",
        "text": "Escalation Rules"
      },
      {
        "letter": "C",
        "text": "Omni-Channel"
      },
      {
        "letter": "D",
        "text": "Knowledge Management"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should an administrator add to the dashboard to fulfill the request?",
    "options": [
      {
        "letter": "A",
        "text": "Dashboard Component"
      },
      {
        "letter": "B",
        "text": "Combination Chart"
      },
      {
        "letter": "C",
        "text": "Dashboard Filter"
      },
      {
        "letter": "D",
        "text": "Bucket Column"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "The Support team at Ursa Major Solar occasionally views shipments from an application external to Salesforce. What is the best way to configure the UI to allow for this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "Split views are only available on standard objects."
      },
      {
        "letter": "B",
        "text": "Filter by a single shipment record type in the list view."
      },
      {
        "letter": "C",
        "text": "Add the Manage List Views permission for support users."
      },
      {
        "letter": "D",
        "text": "Use external objects and add a custom tab to the Support App for support agents."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Which two solutions could an administrator find on the AppExchange to enhance their organization?",
    "options": [
      {
        "letter": "A",
        "text": "Communities"
      },
      {
        "letter": "B",
        "text": "Components"
      },
      {
        "letter": "C",
        "text": "Consultants"
      },
      {
        "letter": "D",
        "text": "Customers"
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
    "question": "Northern Trail Outfitters (NTO) has deployed my domain. The Chief Marketing Officer wants to make sure that all of the Salesforce users log in using the branded login URL. There needs to be a grace period for the user's bookmarks to be updated. How should the administrator configure the policies in my domain settings?",
    "options": [
      {
        "letter": "A",
        "text": "Set the Redirect policy to Do Not redirect."
      },
      {
        "letter": "B",
        "text": "Set the login policy to prevent login from https://login.salesforce.com"
      },
      {
        "letter": "C",
        "text": "Set the redirect policy to Redirect with a warning to the same page within the domain."
      },
      {
        "letter": "D",
        "text": "Set the login policy to require login from https://nto.my.salesforce.com"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "Ursa Major Solar classifies its accounts as Silver, Gold, or Platinum Level. When a new case is created for a Silver or Gold partner, it should go to the Regular Support Queue. When an account is Platinum Level, it should automatically go to the Priority Support Queue. What should the administrator use to achieve this?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Escalation Rules"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Case Rules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "The administrator at Cloud Kicks writes an assignment rule to send all cases created via email or the web to the Automated Cases Queue. Any manually created cases should be owned by the agent creating them; however, the manually created cases now show the administrator as the owner. What will the administrator find when troubleshooting this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Another assignment rule is giving ownership to the administrator."
      },
      {
        "letter": "B",
        "text": "The Assignment Rule checkbox is selected by default."
      },
      {
        "letter": "C",
        "text": "An escalation rule is changing the case owner on case creation."
      },
      {
        "letter": "D",
        "text": "The Owner field is missing on the webform and email template."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest form online. The team currently does not have access to the Lead object. How should an administrator provide proper access?",
    "options": [
      {
        "letter": "A",
        "text": "Configure permission sets"
      },
      {
        "letter": "B",
        "text": "Create a new profile"
      },
      {
        "letter": "C",
        "text": "Set up Manual sharing"
      },
      {
        "letter": "D",
        "text": "Assign a new role"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 21,
    "question": "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and series. How should the administrator set up the Campaign to simplify reporting?",
    "options": [
      {
        "letter": "A",
        "text": "Use Campaign Hierarchy where the monthly events roll up to a parent Campaign."
      },
      {
        "letter": "B",
        "text": "Create individual Campaigns that all have the same name."
      },
      {
        "letter": "C",
        "text": "Configure Campaign Member Statuses to record which event Members attended."
      },
      {
        "letter": "D",
        "text": "Add different record types for the monthly event types."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 22,
    "question": "An administrator at Cloud Kicks wants to deactivate a user who has left the company. What are two reasons that would prevent a user from being deactivated?",
    "options": [
      {
        "letter": "A",
        "text": "The user is in a custom hierarchy field."
      },
      {
        "letter": "B",
        "text": "The user is the highest role in the role hierarchy."
      },
      {
        "letter": "C",
        "text": "The user is the sole recipient of a workflow email alert."
      },
      {
        "letter": "D",
        "text": "The user is part of a territory hierarchy."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 23,
    "question": "Cloud Kicks has the organization-wide defaults for Opportunity set to Private. Which two features should the administrator use to open up access to opportunity records for sales users working on collaborative deals?",
    "options": [
      {
        "letter": "A",
        "text": "Profiles"
      },
      {
        "letter": "B",
        "text": "Sharing set"
      },
      {
        "letter": "C",
        "text": "Sharing rules"
      },
      {
        "letter": "D",
        "text": "Role hierarchy"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 24,
    "question": "An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app. Which two types of pages could an administrator build and customize using the Lightning App Builder?",
    "options": [
      {
        "letter": "A",
        "text": "Dashboard page"
      },
      {
        "letter": "B",
        "text": "App page"
      },
      {
        "letter": "C",
        "text": "Record page"
      },
      {
        "letter": "D",
        "text": "User page"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 25,
    "question": "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Give the user View All access and assign them to the highest role in the role hierarchy."
      },
      {
        "letter": "B",
        "text": "Create and assign a permission set that includes Read, Create, and Edit access."
      },
      {
        "letter": "C",
        "text": "Assign the standard System Administrator profile to the analytics user."
      },
      {
        "letter": "D",
        "text": "Create and assign a custom profile with Delete access removed for each object."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 26,
    "question": "DreamHouse Realty regularly holds open houses for the selling of both houses and condominiums. For condominium open houses, there are a few extra steps that need to be taken. Agents need to be able to submit requests and receive approvals from the homeowners' association. How can the administrator ensure these extra steps only appear when creating open house records for condominiums?",
    "options": [
      {
        "letter": "A",
        "text": "Create one page layout. Use record types to ensure the proper status picklist values display."
      },
      {
        "letter": "B",
        "text": "Create two page layouts. Use processes and record types to display the appropriate picklist values."
      },
      {
        "letter": "C",
        "text": "Create two page layouts, one with a House Status field and the other with a Condominium Status field."
      },
      {
        "letter": "D",
        "text": "Create one page layout. Use business processes to ensure the proper status picklist values display."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 27,
    "question": "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Turn on Recurring Activities"
      },
      {
        "letter": "B",
        "text": "Workflow rule to create recurring tasks"
      },
      {
        "letter": "C",
        "text": "Enable Creation of Recurring Tasks"
      },
      {
        "letter": "D",
        "text": "Flow to create recurring tasks"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 28,
    "question": "Northern Trail Outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads. What approach should an administrator take to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a separate Lead Lightning App."
      },
      {
        "letter": "B",
        "text": "Update the active Lead Assignment Rules."
      },
      {
        "letter": "C",
        "text": "Define a record type and assign it to the interns."
      },
      {
        "letter": "D",
        "text": "Set up Web-to-Lead for the interns' use."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 29,
    "question": "The business development team at Cloud Kicks thinks the Account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process. Which automation tool should an administrator use?",
    "options": [
      {
        "letter": "A",
        "text": "Approval Process"
      },
      {
        "letter": "B",
        "text": "Validation Rule"
      },
      {
        "letter": "C",
        "text": "Flow Builder"
      },
      {
        "letter": "D",
        "text": "Workflow Rule"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 30,
    "question": "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "One page layout, two record types, one picklist"
      },
      {
        "letter": "B",
        "text": "Two page layouts, one record type, two picklists"
      },
      {
        "letter": "C",
        "text": "One record type, two profiles, one picklist"
      },
      {
        "letter": "D",
        "text": "Two permission sets, one record type, one picklist"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 31,
    "question": "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator configure to help with these issues?",
    "options": [
      {
        "letter": "A",
        "text": "Einstein Opportunity Scoring"
      },
      {
        "letter": "B",
        "text": "Einstein Lead Scoring"
      },
      {
        "letter": "C",
        "text": "Einstein Activity Capture"
      },
      {
        "letter": "D",
        "text": "Einstein Search Personalization"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 32,
    "question": "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-Response Rules"
      },
      {
        "letter": "B",
        "text": "Validation Rules"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Escalation Rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 33,
    "question": "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Opportunity Processes"
      },
      {
        "letter": "C",
        "text": "Path Key Fields"
      },
      {
        "letter": "D",
        "text": "Dynamic Forms"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 34,
    "question": "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
    "options": [
      {
        "letter": "A",
        "text": "External lookup"
      },
      {
        "letter": "B",
        "text": "Geolocation"
      },
      {
        "letter": "C",
        "text": "Custom address"
      },
      {
        "letter": "D",
        "text": "Geofence"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 35,
    "question": "Cloud Kicks wants to track shoe designs by products because there can be multiple designs for one product across various stages. They need to know how many designs have been created for a given product on the product record. Which two steps should the administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Add a custom master-detail field for shoe designs on the Design object."
      },
      {
        "letter": "B",
        "text": "Create a custom object for shoe designs."
      },
      {
        "letter": "C",
        "text": "Configure a custom lookup field for shoe designs on the Product object."
      },
      {
        "letter": "D",
        "text": "Use the standard object for designs."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 36,
    "question": "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
    "options": [
      {
        "letter": "A",
        "text": "Include the action in the Salesforce Mobile Navigation menu."
      },
      {
        "letter": "B",
        "text": "Add the Salesforce Mobile and Lightning Experience action to the page layout."
      },
      {
        "letter": "C",
        "text": "Modify compact Case page layout to include the action."
      },
      {
        "letter": "D",
        "text": "Create a custom Lightning App with the action."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 37,
    "question": "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Validation rules that ensure that users are entering accurate sales stage information"
      },
      {
        "letter": "B",
        "text": "Public groups to limit record types and sales processes for opportunities"
      },
      {
        "letter": "C",
        "text": "Separate record types and sales processes for the different types of opportunities"
      },
      {
        "letter": "D",
        "text": "Different page layouts that control the picklist values for the opportunity types"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 38,
    "question": "DreamHouse Realty has an approval process. A manager attempts to approve the record but receives an error. What should the administrator review to troubleshoot this request?",
    "options": [
      {
        "letter": "A",
        "text": "Update the field-level security to view on fields that are updated in the process."
      },
      {
        "letter": "B",
        "text": "Add a delegated approver for the next approver in the process."
      },
      {
        "letter": "C",
        "text": "Check if the user in the next approver is inactive or missing."
      },
      {
        "letter": "D",
        "text": "Review the page layout to ensure the fields updated in the process are visible."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 39,
    "question": "Northern Trail Outfitters wants to update data with information from their data warehouse. What should an administrator do to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Use an external object to match records between the systems."
      },
      {
        "letter": "B",
        "text": "Use an unique ID field to match records between the systems."
      },
      {
        "letter": "C",
        "text": "Use an external ID field to match records between the systems."
      },
      {
        "letter": "D",
        "text": "Use the data loader to match records between the systems."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 40,
    "question": "The administrator has created new users for ten new employees at Northern Trail Outfitters. Why are these users unable to view the account tab in the Salesforce org?",
    "options": [
      {
        "letter": "A",
        "text": "Users' roles are low on the role hierarchy."
      },
      {
        "letter": "B",
        "text": "Users' profile requires permission to the Account object."
      },
      {
        "letter": "C",
        "text": "Organization wide defaults are set to private."
      },
      {
        "letter": "D",
        "text": "Users' profile requires a sharing rule for Accounts."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 41,
    "question": "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and want to share all cross-sell opportunities with a team of subject matter experts in their organization. The company has different roles, and the organization-wide default for Opportunity is set to Private. How should the administrator accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Add the subject matter experts to a public group and give them access to the records with a criteria based sharing rule."
      },
      {
        "letter": "B",
        "text": "Create a new role for the subject matter experts and give them access to the records with an owner-based sharing rule."
      },
      {
        "letter": "C",
        "text": "Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing."
      },
      {
        "letter": "D",
        "text": "Change the organization-wide default for Opportunity from Private to Public Read/Write to open up access for the subject matter experts."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 42,
    "question": "The VP of sales at AW Computing would like sales reps to check in with their top account every Monday. The VP would like a dashboard component to show the status of the check-ins. What should the administrator configure to remind the reps to contact their top account?",
    "options": [
      {
        "letter": "A",
        "text": "Enable the creation of recurring tasks."
      },
      {
        "letter": "B",
        "text": "Use a process email alert on the account."
      },
      {
        "letter": "C",
        "text": "Add the email action to the page layout."
      },
      {
        "letter": "D",
        "text": "Create a time-based workflow task."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 43,
    "question": "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
    "options": [
      {
        "letter": "A",
        "text": "Use a partner community to track the Contacts."
      },
      {
        "letter": "B",
        "text": "Create a new Contact record for each agency."
      },
      {
        "letter": "C",
        "text": "Create a junction object to track many-to-many relationship."
      },
      {
        "letter": "D",
        "text": "Enable Contacts to multiple Accounts."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 44,
    "question": "At Universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well. Which are two considerations for enabling this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "The Add Record action must be configured in the group publisher."
      },
      {
        "letter": "B",
        "text": "An administrator needs to create a group to enable record sharing."
      },
      {
        "letter": "C",
        "text": "Collaboration groups are created automatically for every department."
      },
      {
        "letter": "D",
        "text": "Object layouts should be configured to include the groups related list."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 45,
    "question": "The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is \"Search Engine\", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not \"Search Engine\", this picklist should be hidden. What is the most efficient way for the administrator to complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use an assignment element, one for when Lead Source is \"Search Engine\" and one for everything else."
      },
      {
        "letter": "B",
        "text": "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is \"Search Engine\"."
      },
      {
        "letter": "C",
        "text": "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is \"Search Engine\"."
      },
      {
        "letter": "D",
        "text": "Use a conditional filter in the screen element to only show 'Specific Search Engine' field only when Lead Source is \"Search Engine\"."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 46,
    "question": "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status. Which feature should an administrator use to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "Dependent Picklists"
      },
      {
        "letter": "B",
        "text": "Global Value Picklists"
      },
      {
        "letter": "C",
        "text": "Predefined Field Values"
      },
      {
        "letter": "D",
        "text": "Validation Rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 47,
    "question": "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound Message"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Workflow Rule"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 48,
    "question": "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "A user with a manager role above the agent."
      },
      {
        "letter": "B",
        "text": "A user with Read permission on the account."
      },
      {
        "letter": "C",
        "text": "A user with the System Administrator profile."
      },
      {
        "letter": "D",
        "text": "A user with the Manage Cases permission."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 49,
    "question": "Cloud Kicks wants users to only be able to choose Opportunity stage closed won if the Lead source has been selected. How should the administrator accomplish this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a validation rule requiring Lead source when the stage is set to closed won."
      },
      {
        "letter": "B",
        "text": "Modify the Opportunity stage a dependent picklist to the Lead source field."
      },
      {
        "letter": "C",
        "text": "Change the Opportunity stage field to read only on the page layout."
      },
      {
        "letter": "D",
        "text": "Make Lead source a dependent picklist to the Opportunity stage field."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 50,
    "question": "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign. Which two solutions should the administrator use to modify the picklist field values?",
    "options": [
      {
        "letter": "A",
        "text": "Modify the picklist value on the Campaign Member Statuses related list."
      },
      {
        "letter": "B",
        "text": "Edit the picklist values for the Campaign Status in Object Manager."
      },
      {
        "letter": "C",
        "text": "Add the Campaign Member Statuses related list to the Page Layout."
      },
      {
        "letter": "D",
        "text": "Mass modify the Campaign Member Statuses related list."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 51,
    "question": "Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped and the user is directed to the second screen. How should the administrator configure the decision element?",
    "options": [
      {
        "letter": "A",
        "text": "Use the equals operator and \"High Value Customer\" as the value."
      },
      {
        "letter": "B",
        "text": "Use the contains operator and \"High Value Customer\" as the value."
      },
      {
        "letter": "C",
        "text": "Use the contains operator and {!$GlobalConstant.False} as the value."
      },
      {
        "letter": "D",
        "text": "Use the equals operator and {!$GlobalConstant.True} as the value."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 52,
    "question": "Cloud Kicks has the organization-wide sharing default set to private on the Shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team. Which three items should the administrator configure to provide appropriate access to the report?",
    "options": [
      {
        "letter": "A",
        "text": "Role Hierarchy"
      },
      {
        "letter": "B",
        "text": "Folder Access"
      },
      {
        "letter": "C",
        "text": "Report Subscription"
      },
      {
        "letter": "D",
        "text": "Field-Level Security"
      },
      {
        "letter": "E",
        "text": "Custom Report Type"
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
    "questionNumber": 53,
    "question": "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
    "options": [
      {
        "letter": "A",
        "text": "Rich Text field"
      },
      {
        "letter": "B",
        "text": "External ID"
      },
      {
        "letter": "C",
        "text": "Record ID"
      },
      {
        "letter": "D",
        "text": "Auto-Number field"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 54,
    "question": "An administrator at Universal Containers has been asked to prevent some users from accessing Salesforce from outside of their network. What are two considerations for this configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Enforce Login IP Ranges on Every Request on the profile must be selected to enforce IP restrictions."
      },
      {
        "letter": "B",
        "text": "Assign single sign-on to a permission set to allow users to log in when outside the network."
      },
      {
        "letter": "C",
        "text": "Restrict U2F Security Keys on the user's profile to enforce login hours."
      },
      {
        "letter": "D",
        "text": "IP address restrictions are set on the profile for the org."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 55,
    "question": "The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Opportunity List View"
      },
      {
        "letter": "B",
        "text": "Sales Quotas"
      },
      {
        "letter": "C",
        "text": "Forecasting"
      },
      {
        "letter": "D",
        "text": "Opportunity Stages"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 56,
    "question": "The Ursa Major Solar administrator is editing the page layout for a new custom object. A text area field is accidentally removed from the page layout, and it needs to be restored to the page layout. Which are two methods for achieving this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Restore from the recycle bin within 15 days."
      },
      {
        "letter": "B",
        "text": "Clone the layout from a different profile and use save as."
      },
      {
        "letter": "C",
        "text": "Restore original page layout from a sandbox."
      },
      {
        "letter": "D",
        "text": "From the fields palette, drag the field into the same position."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 57,
    "question": "An administrator supporting a global team of Salesforce users has been asked to configure company settings. Which two options should the administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Currency Locale"
      },
      {
        "letter": "B",
        "text": "Default Language"
      },
      {
        "letter": "C",
        "text": "Password Policy"
      },
      {
        "letter": "D",
        "text": "Login Hours"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 58,
    "question": "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "B",
        "text": "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule."
      },
      {
        "letter": "C",
        "text": "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "D",
        "text": "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 59,
    "question": "Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage. Which three options should the administrator use to address this need?",
    "options": [
      {
        "letter": "A",
        "text": "Use validation rules."
      },
      {
        "letter": "B",
        "text": "Mark fields required on the page layout."
      },
      {
        "letter": "C",
        "text": "Enable guided selling."
      },
      {
        "letter": "D",
        "text": "Configure Opportunity Path."
      },
      {
        "letter": "E",
        "text": "Use Flow to mark fields required."
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
    "questionNumber": 60,
    "question": "The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases. How should the screen flow be distributed?",
    "options": [
      {
        "letter": "A",
        "text": "Lightning Page"
      },
      {
        "letter": "B",
        "text": "Component Filter"
      },
      {
        "letter": "C",
        "text": "Home Page"
      },
      {
        "letter": "D",
        "text": "Page Layout"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "The Ursa Major Solar administrator is editing the page layout for a new custom object. A text area field is accidentally removed from the page layout, and it needs to be restored to the page layout. Which are two methods for achieving this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Restore from the recycle bin within 15 days."
      },
      {
        "letter": "B",
        "text": "Clone the layout from a different profile and use save as."
      },
      {
        "letter": "C",
        "text": "Restore original page layout from a sandbox."
      },
      {
        "letter": "D",
        "text": "From the fields palette, drag the field into the same position."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 2,
    "question": "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound Message"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Workflow Rule"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 3,
    "question": "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "B",
        "text": "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule."
      },
      {
        "letter": "C",
        "text": "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "D",
        "text": "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "When a sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
    "options": [
      {
        "letter": "A",
        "text": "Flow Builder"
      },
      {
        "letter": "B",
        "text": "Platform Event"
      },
      {
        "letter": "C",
        "text": "Workflow Rule"
      },
      {
        "letter": "D",
        "text": "Process Builder"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create an assignment rule to email the lead."
      },
      {
        "letter": "B",
        "text": "Configure an auto-response rule to email the lead."
      },
      {
        "letter": "C",
        "text": "Add a public group and Process Builder to email the lead."
      },
      {
        "letter": "D",
        "text": "Use a validation rule to trigger workflow to email the lead."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "The administrator at Cloud Kicks writes an assignment rule to send all cases created via email or the web to the Automated Cases Queue. Any manually created cases should be owned by the agent creating them; however, the manually created cases now show the administrator as the owner. What will the administrator find when troubleshooting this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Another assignment rule is giving ownership to the administrator."
      },
      {
        "letter": "B",
        "text": "The Assignment Rule checkbox is selected by default."
      },
      {
        "letter": "C",
        "text": "An escalation rule is changing the case owner on case creation."
      },
      {
        "letter": "D",
        "text": "The Owner field is missing on the webform and email template."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
    "options": [
      {
        "letter": "A",
        "text": "Configure Email-to-Case so emails are delivered to the correct queue."
      },
      {
        "letter": "B",
        "text": "Create an Escalation Rule to send cases to the correct queue."
      },
      {
        "letter": "C",
        "text": "Use a custom email service to set the owner of the case upon creation."
      },
      {
        "letter": "D",
        "text": "Utilize a flow to identify the correct queue and assign the case."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Opportunity List View"
      },
      {
        "letter": "B",
        "text": "Sales Quotas"
      },
      {
        "letter": "C",
        "text": "Forecasting"
      },
      {
        "letter": "D",
        "text": "Opportunity Stages"
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
    "question": "DreamHouse Realty regularly holds open houses for the selling of both houses and condominiums. For condominium open houses, there are a few extra steps that need to be taken. Agents need to be able to submit requests and receive approvals from the homeowners' association. How can the administrator ensure these extra steps only appear when creating open house records for condominiums?",
    "options": [
      {
        "letter": "A",
        "text": "Create one page layout. Use record types to ensure the proper status picklist values display."
      },
      {
        "letter": "B",
        "text": "Create two page layouts. Use processes and record types to display the appropriate picklist values."
      },
      {
        "letter": "C",
        "text": "Create two page layouts, one with a House Status field and the other with a Condominium Status field."
      },
      {
        "letter": "D",
        "text": "Create one page layout. Use business processes to ensure the proper status picklist values display."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Cloud Kicks has the organization-wide defaults for Opportunity set to Private. Which two features should the administrator use to open up access to opportunity records for sales users working on collaborative deals?",
    "options": [
      {
        "letter": "A",
        "text": "Profiles"
      },
      {
        "letter": "B",
        "text": "Sharing set"
      },
      {
        "letter": "C",
        "text": "Sharing rules"
      },
      {
        "letter": "D",
        "text": "Role hierarchy"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 11,
    "question": "The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases. How should the screen flow be distributed?",
    "options": [
      {
        "letter": "A",
        "text": "Lightning Page"
      },
      {
        "letter": "B",
        "text": "Component Filter"
      },
      {
        "letter": "C",
        "text": "Home Page"
      },
      {
        "letter": "D",
        "text": "Page Layout"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "An administrator has been asked to change the data type of an auto number to a text field. What should the administrator be aware of before changing the field?",
    "options": [
      {
        "letter": "A",
        "text": "Existing field values will remain unchanged."
      },
      {
        "letter": "B",
        "text": "Existing field values will be deleted."
      },
      {
        "letter": "C",
        "text": "Existing Auto Number field to Text is prevented."
      },
      {
        "letter": "D",
        "text": "Existing field values will be converted."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Cloud Kicks wants to track shoe designs by products because there can be multiple designs for one product across various stages. They need to know how many designs have been created for a given product on the product record. Which two steps should the administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Add a custom master-detail field for shoe designs on the Design object."
      },
      {
        "letter": "B",
        "text": "Create a custom object for shoe designs."
      },
      {
        "letter": "C",
        "text": "Configure a custom lookup field for shoe designs on the Product object."
      },
      {
        "letter": "D",
        "text": "Use the standard object for designs."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 14,
    "question": "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "A user with a manager role above the agent."
      },
      {
        "letter": "B",
        "text": "A user with Read permission on the account."
      },
      {
        "letter": "C",
        "text": "A user with the System Administrator profile."
      },
      {
        "letter": "D",
        "text": "A user with the Manage Cases permission."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 15,
    "question": "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and want to share all cross-sell opportunities with a team of subject matter experts in their organization. The company has different roles, and the organization-wide default for Opportunity is set to Private. How should the administrator accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Add the subject matter experts to a public group and give them access to the records with a criteria based sharing rule."
      },
      {
        "letter": "B",
        "text": "Create a new role for the subject matter experts and give them access to the records with an owner-based sharing rule."
      },
      {
        "letter": "C",
        "text": "Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing."
      },
      {
        "letter": "D",
        "text": "Change the organization-wide default for Opportunity from Private to Public Read/Write to open up access for the subject matter experts."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Cloud Kicks users are seeing error messages when they use one of their screen flows. The error messages are confusing but could be resolved if the users entered more information on the account before starting the flow. How should the administrator address this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Remove validation rules so that the users are able to proceed without complete records."
      },
      {
        "letter": "B",
        "text": "Use a fault connector and display a screen with text explaining what went wrong and how to correct it."
      },
      {
        "letter": "C",
        "text": "Uncheck the End User Flow Errors box in Setup."
      },
      {
        "letter": "D",
        "text": "Create a permission set to allow users to bypass the error."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 17,
    "question": "An administrator at Universal Containers has been asked to prevent some users from accessing Salesforce from outside of their network. What are two considerations for this configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Enforce Login IP Ranges on Every Request on the profile must be selected to enforce IP restrictions."
      },
      {
        "letter": "B",
        "text": "Assign single sign-on to a permission set to allow users to log in when outside the network."
      },
      {
        "letter": "C",
        "text": "Restrict U2F Security Keys on the user's profile to enforce login hours."
      },
      {
        "letter": "D",
        "text": "IP address restrictions are set on the profile for the org."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 18,
    "question": "The administrator at Ursa Major Solar has created a custom report type and built a report for the sales operations team. However, none of the users are able to access the report. Which two options could cause this issue?",
    "options": [
      {
        "letter": "A",
        "text": "The report is saved in a private folder."
      },
      {
        "letter": "B",
        "text": "The org has reached its limit for custom report types."
      },
      {
        "letter": "C",
        "text": "The user's profile is missing View access."
      },
      {
        "letter": "D",
        "text": "The custom report type is in development."
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
    "question": "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Validation rules that ensure that users are entering accurate sales stage information"
      },
      {
        "letter": "B",
        "text": "Public groups to limit record types and sales processes for opportunities"
      },
      {
        "letter": "C",
        "text": "Separate record types and sales processes for the different types of opportunities"
      },
      {
        "letter": "D",
        "text": "Different page layouts that control the picklist values for the opportunity types"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Give the user View All access and assign them to the highest role in the role hierarchy."
      },
      {
        "letter": "B",
        "text": "Create and assign a permission set that includes Read, Create, and Edit access."
      },
      {
        "letter": "C",
        "text": "Assign the standard System Administrator profile to the analytics user."
      },
      {
        "letter": "D",
        "text": "Create and assign a custom profile with Delete access removed for each object."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 21,
    "question": "The administrator at Northern Trail Outfitters has been using a spreadsheet to track assigned licenses and permission sets. What feature can be used to track this in Salesforce?",
    "options": [
      {
        "letter": "A",
        "text": "Login History"
      },
      {
        "letter": "B",
        "text": "Lightning Usage App"
      },
      {
        "letter": "C",
        "text": "Permission Set Groups"
      },
      {
        "letter": "D",
        "text": "User Report"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 22,
    "question": "DreamHouse Realty has an approval process. A manager attempts to approve the record but receives an error. What should the administrator review to troubleshoot this request?",
    "options": [
      {
        "letter": "A",
        "text": "Update the field-level security to view on fields that are updated in the process."
      },
      {
        "letter": "B",
        "text": "Add a delegated approver for the next approver in the process."
      },
      {
        "letter": "C",
        "text": "Check if the user in the next approver is inactive or missing."
      },
      {
        "letter": "D",
        "text": "Review the page layout to ensure the fields updated in the process are visible."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 23,
    "question": "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status. Which feature should an administrator use to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "Dependent Picklists"
      },
      {
        "letter": "B",
        "text": "Global Value Picklists"
      },
      {
        "letter": "C",
        "text": "Predefined Field Values"
      },
      {
        "letter": "D",
        "text": "Validation Rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 24,
    "question": "The VP of sales at AW Computing would like sales reps to check in with their top account every Monday. The VP would like a dashboard component to show the status of the check-ins. What should the administrator configure to remind the reps to contact their top account?",
    "options": [
      {
        "letter": "A",
        "text": "Enable the creation of recurring tasks."
      },
      {
        "letter": "B",
        "text": "Use a process email alert on the account."
      },
      {
        "letter": "C",
        "text": "Add the email action to the page layout."
      },
      {
        "letter": "D",
        "text": "Create a time-based workflow task."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 25,
    "question": "An administrator at Northern Trail Outfitters is creating a validation rule. Which two functions should the administrator use when creating a validation rule?",
    "options": [
      {
        "letter": "A",
        "text": "Error condition formula"
      },
      {
        "letter": "B",
        "text": "Error message location"
      },
      {
        "letter": "C",
        "text": "Formula return type"
      },
      {
        "letter": "D",
        "text": "Rule active date"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 26,
    "question": "Cloud Kicks wants users to only be able to choose Opportunity stage closed won if the Lead source has been selected. How should the administrator accomplish this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Configure a validation rule requiring Lead source when the stage is set to closed won."
      },
      {
        "letter": "B",
        "text": "Modify the Opportunity stage a dependent picklist to the Lead source field."
      },
      {
        "letter": "C",
        "text": "Change the Opportunity stage field to read only on the page layout."
      },
      {
        "letter": "D",
        "text": "Make Lead source a dependent picklist to the Opportunity stage field."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 27,
    "question": "Ursa Major Solar classifies its accounts as Silver, Gold, or Platinum Level. When a new case is created for a Silver or Gold partner, it should go to the Regular Support Queue. When an account is Platinum Level, it should automatically go to the Priority Support Queue. What should the administrator use to achieve this?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Escalation Rules"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Case Rules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 28,
    "question": "An administrator supporting a global team of Salesforce users has been asked to configure company settings. Which two options should the administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Currency Locale"
      },
      {
        "letter": "B",
        "text": "Default Language"
      },
      {
        "letter": "C",
        "text": "Password Policy"
      },
      {
        "letter": "D",
        "text": "Login Hours"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 29,
    "question": "Which two solutions could an administrator find on the AppExchange to enhance their organization?",
    "options": [
      {
        "letter": "A",
        "text": "Communities"
      },
      {
        "letter": "B",
        "text": "Components"
      },
      {
        "letter": "C",
        "text": "Consultants"
      },
      {
        "letter": "D",
        "text": "Customers"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 30,
    "question": "The business development team at Cloud Kicks thinks the Account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process. Which automation tool should an administrator use?",
    "options": [
      {
        "letter": "A",
        "text": "Approval Process"
      },
      {
        "letter": "B",
        "text": "Validation Rule"
      },
      {
        "letter": "C",
        "text": "Flow Builder"
      },
      {
        "letter": "D",
        "text": "Workflow Rule"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 31,
    "question": "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
    "options": [
      {
        "letter": "A",
        "text": "Use a partner community to track the Contacts."
      },
      {
        "letter": "B",
        "text": "Create a new Contact record for each agency."
      },
      {
        "letter": "C",
        "text": "Create a junction object to track many-to-many relationship."
      },
      {
        "letter": "D",
        "text": "Enable Contacts to multiple Accounts."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 32,
    "question": "An administrator at Cloud Kicks wants to deactivate a user who has left the company. What are two reasons that would prevent a user from being deactivated?",
    "options": [
      {
        "letter": "A",
        "text": "The user is in a custom hierarchy field."
      },
      {
        "letter": "B",
        "text": "The user is the highest role in the role hierarchy."
      },
      {
        "letter": "C",
        "text": "The user is the sole recipient of a workflow email alert."
      },
      {
        "letter": "D",
        "text": "The user is part of a territory hierarchy."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 33,
    "question": "The call center manager at Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status, and owner. What should an administrator add to the dashboard to fulfill the request?",
    "options": [
      {
        "letter": "A",
        "text": "Dashboard Component"
      },
      {
        "letter": "B",
        "text": "Combination Chart"
      },
      {
        "letter": "C",
        "text": "Dashboard Filter"
      },
      {
        "letter": "D",
        "text": "Bucket Column"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 34,
    "question": "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
    "options": [
      {
        "letter": "A",
        "text": "Design a standard Campaign report and add the Value Won Opportunities in Campaign field."
      },
      {
        "letter": "B",
        "text": "Create a roll-up summary field on Opportunity to Campaign."
      },
      {
        "letter": "C",
        "text": "Perform periodic data jobs to update campaign records."
      },
      {
        "letter": "D",
        "text": "Add a Total Value field on Campaign and use a workflow rule to update the value when an opportunity is won."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 35,
    "question": "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Turn on Recurring Activities"
      },
      {
        "letter": "B",
        "text": "Workflow rule to create recurring tasks"
      },
      {
        "letter": "C",
        "text": "Enable Creation of Recurring Tasks"
      },
      {
        "letter": "D",
        "text": "Flow to create recurring tasks"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 36,
    "question": "Sales reps miss key fields when filling out an opportunity record through the sales process. Reps need to move forward in stages but are unable to enter a previous stage. Which three options should the administrator use to address this need?",
    "options": [
      {
        "letter": "A",
        "text": "Use validation rules."
      },
      {
        "letter": "B",
        "text": "Mark fields required on the page layout."
      },
      {
        "letter": "C",
        "text": "Enable guided selling."
      },
      {
        "letter": "D",
        "text": "Configure Opportunity Path."
      },
      {
        "letter": "E",
        "text": "Use Flow to mark fields required."
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
    "questionNumber": 37,
    "question": "The Support team at Ursa Major Solar occasionally views shipments from an application external to Salesforce. What is the best way to configure the UI to allow for this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "Split views are only available on standard objects."
      },
      {
        "letter": "B",
        "text": "Filter by a single shipment record type in the list view."
      },
      {
        "letter": "C",
        "text": "Add the Manage List Views permission for support users."
      },
      {
        "letter": "D",
        "text": "Use external objects and add a custom tab to the Support App for support agents."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 38,
    "question": "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator configure to help with these issues?",
    "options": [
      {
        "letter": "A",
        "text": "Einstein Opportunity Scoring"
      },
      {
        "letter": "B",
        "text": "Einstein Lead Scoring"
      },
      {
        "letter": "C",
        "text": "Einstein Activity Capture"
      },
      {
        "letter": "D",
        "text": "Einstein Search Personalization"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 39,
    "question": "Northern Trail Outfitters wants to update data with information from their data warehouse. What should an administrator do to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Use an external object to match records between the systems."
      },
      {
        "letter": "B",
        "text": "Use an unique ID field to match records between the systems."
      },
      {
        "letter": "C",
        "text": "Use an external ID field to match records between the systems."
      },
      {
        "letter": "D",
        "text": "Use the data loader to match records between the systems."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 40,
    "question": "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest form online. The team currently does not have access to the Lead object. How should an administrator provide proper access?",
    "options": [
      {
        "letter": "A",
        "text": "Configure permission sets"
      },
      {
        "letter": "B",
        "text": "Create a new profile"
      },
      {
        "letter": "C",
        "text": "Set up Manual sharing"
      },
      {
        "letter": "D",
        "text": "Assign a new role"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 41,
    "question": "The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is \"Search Engine\", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not \"Search Engine\", this picklist should be hidden. What is the most efficient way for the administrator to complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use an assignment element, one for when Lead Source is \"Search Engine\" and one for everything else."
      },
      {
        "letter": "B",
        "text": "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is \"Search Engine\"."
      },
      {
        "letter": "C",
        "text": "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is \"Search Engine\"."
      },
      {
        "letter": "D",
        "text": "Use a conditional filter in the screen element to only show 'Specific Search Engine' field only when Lead Source is \"Search Engine\"."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 42,
    "question": "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
    "options": [
      {
        "letter": "A",
        "text": "Include the action in the Salesforce Mobile Navigation menu."
      },
      {
        "letter": "B",
        "text": "Add the Salesforce Mobile and Lightning Experience action to the page layout."
      },
      {
        "letter": "C",
        "text": "Modify compact Case page layout to include the action."
      },
      {
        "letter": "D",
        "text": "Create a custom Lightning App with the action."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 43,
    "question": "An administrator at DreamHouse Realty needs to create customized pages for the Salesforce mobile app. Which two types of pages could an administrator build and customize using the Lightning App Builder?",
    "options": [
      {
        "letter": "A",
        "text": "Dashboard page"
      },
      {
        "letter": "B",
        "text": "App page"
      },
      {
        "letter": "C",
        "text": "Record page"
      },
      {
        "letter": "D",
        "text": "User page"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 44,
    "question": "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and series. How should the administrator set up the Campaign to simplify reporting?",
    "options": [
      {
        "letter": "A",
        "text": "Use Campaign Hierarchy where the monthly events roll up to a parent Campaign."
      },
      {
        "letter": "B",
        "text": "Create individual Campaigns that all have the same name."
      },
      {
        "letter": "C",
        "text": "Configure Campaign Member Statuses to record which event Members attended."
      },
      {
        "letter": "D",
        "text": "Add different record types for the monthly event types."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 45,
    "question": "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Opportunity Processes"
      },
      {
        "letter": "C",
        "text": "Path Key Fields"
      },
      {
        "letter": "D",
        "text": "Dynamic Forms"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 46,
    "question": "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-Response Rules"
      },
      {
        "letter": "B",
        "text": "Validation Rules"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Escalation Rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 47,
    "question": "Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped and the user is directed to the second screen. How should the administrator configure the decision element?",
    "options": [
      {
        "letter": "A",
        "text": "Use the equals operator and \"High Value Customer\" as the value."
      },
      {
        "letter": "B",
        "text": "Use the contains operator and \"High Value Customer\" as the value."
      },
      {
        "letter": "C",
        "text": "Use the contains operator and {!$GlobalConstant.False} as the value."
      },
      {
        "letter": "D",
        "text": "Use the equals operator and {!$GlobalConstant.True} as the value."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 48,
    "question": "Northern Trail Outfitters (NTO) has deployed my domain. The Chief Marketing Officer wants to make sure that all of the Salesforce users log in using the branded login URL. There needs to be a grace period for the user's bookmarks to be updated. How should the administrator configure the policies in my domain settings?",
    "options": [
      {
        "letter": "A",
        "text": "Set the Redirect policy to Do Not redirect."
      },
      {
        "letter": "B",
        "text": "Set the login policy to prevent login from https://login.salesforce.com"
      },
      {
        "letter": "C",
        "text": "Set the redirect policy to Redirect with a warning to the same page within the domain."
      },
      {
        "letter": "D",
        "text": "Set the login policy to require login from https://nto.my.salesforce.com"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 49,
    "question": "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation. Which feature should an administrator use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Case Escalation Rule"
      },
      {
        "letter": "B",
        "text": "Assignment Rule"
      },
      {
        "letter": "C",
        "text": "Formula field"
      },
      {
        "letter": "D",
        "text": "Omni-Channel Supervisor"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 50,
    "question": "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign. Which two solutions should the administrator use to modify the picklist field values?",
    "options": [
      {
        "letter": "A",
        "text": "Modify the picklist value on the Campaign Member Statuses related list."
      },
      {
        "letter": "B",
        "text": "Edit the picklist values for the Campaign Status in Object Manager."
      },
      {
        "letter": "C",
        "text": "Add the Campaign Member Statuses related list to the Page Layout."
      },
      {
        "letter": "D",
        "text": "Mass modify the Campaign Member Statuses related list."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 51,
    "question": "Northern Trail Outfitters has hired interns to enter Leads into Salesforce and has requested a way to identify these new records from existing Leads. What approach should an administrator take to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a separate Lead Lightning App."
      },
      {
        "letter": "B",
        "text": "Update the active Lead Assignment Rules."
      },
      {
        "letter": "C",
        "text": "Define a record type and assign it to the interns."
      },
      {
        "letter": "D",
        "text": "Set up Web-to-Lead for the interns' use."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 52,
    "question": "Cloud Kicks has the organization-wide sharing default set to private on the Shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team. Which three items should the administrator configure to provide appropriate access to the report?",
    "options": [
      {
        "letter": "A",
        "text": "Role Hierarchy"
      },
      {
        "letter": "B",
        "text": "Folder Access"
      },
      {
        "letter": "C",
        "text": "Report Subscription"
      },
      {
        "letter": "D",
        "text": "Field-Level Security"
      },
      {
        "letter": "E",
        "text": "Custom Report Type"
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
    "questionNumber": 53,
    "question": "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should the administrator use to deliver this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Formula Field"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Prebuilt Macro"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 54,
    "question": "Cloud Kicks has a custom object called Shipments. The company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Accounts?",
    "options": [
      {
        "letter": "A",
        "text": "Accounts should have a master detail to Shipments."
      },
      {
        "letter": "B",
        "text": "Accounts should have a lookup to Shipments."
      },
      {
        "letter": "C",
        "text": "Shipments should have a lookup to Account."
      },
      {
        "letter": "D",
        "text": "Shipments should have a master detail to Accounts."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 55,
    "question": "Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
    "options": [
      {
        "letter": "A",
        "text": "Owner-based sharing"
      },
      {
        "letter": "B",
        "text": "Criteria-based sharing"
      },
      {
        "letter": "C",
        "text": "Hierarchical sharing"
      },
      {
        "letter": "D",
        "text": "Use manual sharing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 56,
    "question": "Cloud Kicks needs to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "One page layout, two record types, one picklist"
      },
      {
        "letter": "B",
        "text": "Two page layouts, one record type, two picklists"
      },
      {
        "letter": "C",
        "text": "One record type, two profiles, one picklist"
      },
      {
        "letter": "D",
        "text": "Two permission sets, one record type, one picklist"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 57,
    "question": "At Universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well. Which are two considerations for enabling this functionality?",
    "options": [
      {
        "letter": "A",
        "text": "The Add Record action must be configured in the group publisher."
      },
      {
        "letter": "B",
        "text": "An administrator needs to create a group to enable record sharing."
      },
      {
        "letter": "C",
        "text": "Collaboration groups are created automatically for every department."
      },
      {
        "letter": "D",
        "text": "Object layouts should be configured to include the groups related list."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 58,
    "question": "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
    "options": [
      {
        "letter": "A",
        "text": "Build the dashboards manually to meet the deadline."
      },
      {
        "letter": "B",
        "text": "Train someone on the sales and marketing teams to build dashboards."
      },
      {
        "letter": "C",
        "text": "Check the AppExchange for a prebuilt solution that can be easily customized."
      },
      {
        "letter": "D",
        "text": "Hire a consultant to build the custom dashboards."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 59,
    "question": "The administrator has created new users for ten new employees at Northern Trail Outfitters. Why are these users unable to view the account tab in the Salesforce org?",
    "options": [
      {
        "letter": "A",
        "text": "Users' roles are low on the role hierarchy."
      },
      {
        "letter": "B",
        "text": "Users' profile requires permission to the Account object."
      },
      {
        "letter": "C",
        "text": "Organization wide defaults are set to private."
      },
      {
        "letter": "D",
        "text": "Users' profile requires a sharing rule for Accounts."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 60,
    "question": "What are two considerations an administrator should keep in mind when working with Salesforce objects?",
    "options": [
      {
        "letter": "A",
        "text": "Standard objects are included with Salesforce."
      },
      {
        "letter": "B",
        "text": "Custom and standard objects have standard fields."
      },
      {
        "letter": "C",
        "text": "A new standard object can be created."
      },
      {
        "letter": "D",
        "text": "Only standard objects support master-detail relationships."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 61,
    "question": "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
    "options": [
      {
        "letter": "A",
        "text": "Rich Text field"
      },
      {
        "letter": "B",
        "text": "External ID"
      },
      {
        "letter": "C",
        "text": "Record ID"
      },
      {
        "letter": "D",
        "text": "Auto-Number field"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 62,
    "question": "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
    "options": [
      {
        "letter": "A",
        "text": "External lookup"
      },
      {
        "letter": "B",
        "text": "Geolocation"
      },
      {
        "letter": "C",
        "text": "Custom address"
      },
      {
        "letter": "D",
        "text": "Geofence"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 63,
    "question": "Universal Containers created a new job posting on the first of the month. It triggered a process scheduled action that will send a Chatter post to the department VP in 30 days if the position is still open and the status is not equal to Interviewing. On the 10th of the month, an applicant interviews, and the job posting status is updated to Interviewing. What will happen to the Chatter post in this situation?",
    "options": [
      {
        "letter": "A",
        "text": "The pending Chatter post will be canceled."
      },
      {
        "letter": "B",
        "text": "The pending Chatter post will be sent on the 10th of the month."
      },
      {
        "letter": "C",
        "text": "The pending Chatter post will be paused."
      },
      {
        "letter": "D",
        "text": "The pending Chatter post will be sent in 30 days."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 64,
    "question": "An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Territory Management"
      },
      {
        "letter": "B",
        "text": "Escalation Rules"
      },
      {
        "letter": "C",
        "text": "Omni-Channel"
      },
      {
        "letter": "D",
        "text": "Knowledge Management"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 65,
    "question": "Users at Cloud Kicks are reporting different options when updating a custom picklist on the Opportunity object based on the kind of opportunity. Where should an administrator update the option in the picklist?",
    "options": [
      {
        "letter": "A",
        "text": "Fields and relationships"
      },
      {
        "letter": "B",
        "text": "Picklist value sets"
      },
      {
        "letter": "C",
        "text": "Related lookup filters"
      },
      {
        "letter": "D",
        "text": "Record type"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rule"
      },
      {
        "letter": "B",
        "text": "Validation Rule"
      },
      {
        "letter": "C",
        "text": "Require Field"
      },
      {
        "letter": "D",
        "text": "Lead Conversion"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Which two actions should an administrator perform with Case escalation rules?",
    "options": [
      {
        "letter": "A",
        "text": "Send email notifications."
      },
      {
        "letter": "B",
        "text": "Re-assign the Case."
      },
      {
        "letter": "C",
        "text": "Re-open the Case."
      },
      {
        "letter": "D",
        "text": "Change the Case Priority."
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
    "question": "Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months. How should the administrator address this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Set the Fiscal Year to Standard and the duration to 12 months."
      },
      {
        "letter": "B",
        "text": "Set the Fiscal Year to Standard and the starting month as February."
      },
      {
        "letter": "C",
        "text": "Set the Fiscal Year to Custom and the starting month as February."
      },
      {
        "letter": "D",
        "text": "Set the Fiscal Year to Custom and the duration to 4 quarters."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Turn on Recurring Activities"
      },
      {
        "letter": "B",
        "text": "Workflow rule to create recurring tasks"
      },
      {
        "letter": "C",
        "text": "Enable Creation of Recurring Tasks"
      },
      {
        "letter": "D",
        "text": "Flow to create recurring tasks"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed in the Sales Console and in the Service Console. How should an administrator meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create different user profiles."
      },
      {
        "letter": "B",
        "text": "Assign Lightning pages as app default."
      },
      {
        "letter": "C",
        "text": "Update page layout assignments."
      },
      {
        "letter": "D",
        "text": "Define multiple record types."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 6,
    "question": "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permission and the two-factor authentication for API Logins permission to a group of users. Which two prompts will happen when one of the users attempts to log in to Data Loader?",
    "options": [
      {
        "letter": "A",
        "text": "Users need to connect an authenticator app to their Salesforce account."
      },
      {
        "letter": "B",
        "text": "Users need to enter a verification code from email or SMS, whichever has higher priority."
      },
      {
        "letter": "C",
        "text": "Users need to download and install an authenticator app on their mobile device."
      },
      {
        "letter": "D",
        "text": "Users need to get a security token from a trusted network using Reset My Security Token."
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
    "question": "When users log in to Salesforce via the user interface, which two settings does the system check for authentication?",
    "options": [
      {
        "letter": "A",
        "text": "The user's Two-Factor Authentication for User Interface Logins permission"
      },
      {
        "letter": "B",
        "text": "The user's Two-Factor Authentication for API Logins permission"
      },
      {
        "letter": "C",
        "text": "The user's profile login hours restrictions"
      },
      {
        "letter": "D",
        "text": "The role IP address restrictions"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 8,
    "question": "Northern Trail Outfitters has the Case object set to private. The support manager raised a concern that reps have a broader view of data than expected and can see all cases on their group's dashboards. What could be causing reps to have inappropriate access to data on dashboards?",
    "options": [
      {
        "letter": "A",
        "text": "Dashboard's running user"
      },
      {
        "letter": "B",
        "text": "Public Dashboards"
      },
      {
        "letter": "C",
        "text": "Dashboard Subscriptions"
      },
      {
        "letter": "D",
        "text": "Dashboard Filters"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "The administrator at AW Computing wants Account details, related lists, and Chatter feeds to each appear on separate tabs when viewing an Account. Which type of page should the administrator create?",
    "options": [
      {
        "letter": "A",
        "text": "Lightning home page"
      },
      {
        "letter": "B",
        "text": "Lightning app page"
      },
      {
        "letter": "C",
        "text": "Lightning page component"
      },
      {
        "letter": "D",
        "text": "Lightning record page"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Ursa Major Solar provides a 1-year warranty on all of the panels it installs. Installation details, along with the warranty information, are captured on a custom object called Installation. The installation record is created by the installer from the mobile app. Customers sometimes receive a longer warranty as a way of increasing customer satisfaction when an installation gets delayed or has issues. How should the administrator configure Salesforce to capture the expiration date of the warranty?",
    "options": [
      {
        "letter": "A",
        "text": "Add a validation rule to ensure the Expiration Date field is populated."
      },
      {
        "letter": "B",
        "text": "Use a formula as the default value of the warranty Expiration Date field."
      },
      {
        "letter": "C",
        "text": "Include the warranty Expiration Date field on the mobile page layout."
      },
      {
        "letter": "D",
        "text": "Create a formula field to display 1 year from the warranty purchased."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "Northern Trail Outfitters wants to encourage employees to choose secure and appropriate passwords for their Salesforce accounts. Which three password policies should an administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Number of days until expiration"
      },
      {
        "letter": "B",
        "text": "Maximum invalid login attempts"
      },
      {
        "letter": "C",
        "text": "Require use of Password Manager App"
      },
      {
        "letter": "D",
        "text": "Prohibited password values"
      },
      {
        "letter": "E",
        "text": "Password complexity requirements"
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
    "questionNumber": 12,
    "question": "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "Page Layout Assignment"
      },
      {
        "letter": "B",
        "text": "Sharing Settings"
      },
      {
        "letter": "C",
        "text": "Component Visibility"
      },
      {
        "letter": "D",
        "text": "Record Type Assignment"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Opportunity Processes"
      },
      {
        "letter": "C",
        "text": "Path Key Fields"
      },
      {
        "letter": "D",
        "text": "Dynamic Forms"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "The administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should be used to undo this import?",
    "options": [
      {
        "letter": "A",
        "text": "Data Import Wizard"
      },
      {
        "letter": "B",
        "text": "Weekly Data Export"
      },
      {
        "letter": "C",
        "text": "Data Loader"
      },
      {
        "letter": "D",
        "text": "Mass Delete Records"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 15,
    "question": "Universal Containers has a private sharing model for Opportunities and uses Opportunity teams. Criteria-based sharing rules are not used. A sales rep at Universal Containers leaves the company and their user record is deactivated. The rep is later rehired in the same role. The administrator activates the old user record. The user is added to the same default Opportunity teams but is no longer able to see the same records the user worked on before leaving the company. What is the likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The record type of the Opportunity records was changed."
      },
      {
        "letter": "B",
        "text": "The records were manually shared with the user."
      },
      {
        "letter": "C",
        "text": "The stage of the Opportunity records was changed to closed lost."
      },
      {
        "letter": "D",
        "text": "Permission sets were removed when the user was deactivated."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Which tool should an administrator use to review recent configuration changes made in their org?",
    "options": [
      {
        "letter": "A",
        "text": "Critical Updates"
      },
      {
        "letter": "B",
        "text": "Debug Logs"
      },
      {
        "letter": "C",
        "text": "Field History Tracking"
      },
      {
        "letter": "D",
        "text": "Setup Audit Trail"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 17,
    "question": "The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to 'Audited', they would like the system to automatically update the Audited Date field on the account with today's date. Which tool should the administrator use to complete this automation?",
    "options": [
      {
        "letter": "A",
        "text": "Flow Builder"
      },
      {
        "letter": "B",
        "text": "Validation Rule"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Formula Field"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Give the user View All access and assign them to the highest role in the role hierarchy."
      },
      {
        "letter": "B",
        "text": "Create and assign a permission set that includes Read, Create, and Edit access."
      },
      {
        "letter": "C",
        "text": "Assign the standard System Administrator profile to the analytics user."
      },
      {
        "letter": "D",
        "text": "Create and assign a custom profile with Delete access removed for each object."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "When a sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
    "options": [
      {
        "letter": "A",
        "text": "Flow Builder"
      },
      {
        "letter": "B",
        "text": "Platform Event"
      },
      {
        "letter": "C",
        "text": "Workflow Rule"
      },
      {
        "letter": "D",
        "text": "Process Builder"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator configure to help with these issues?",
    "options": [
      {
        "letter": "A",
        "text": "Einstein Opportunity Scoring"
      },
      {
        "letter": "B",
        "text": "Einstein Lead Scoring"
      },
      {
        "letter": "C",
        "text": "Einstein Activity Capture"
      },
      {
        "letter": "D",
        "text": "Einstein Search Personalization"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 21,
    "question": "A new sales rep at Ursa Major Solar has a qualified lead that is ready for conversion. When using the Lead conversion process, which two records can be created?",
    "options": [
      {
        "letter": "A",
        "text": "Case"
      },
      {
        "letter": "B",
        "text": "Account"
      },
      {
        "letter": "C",
        "text": "Contact"
      },
      {
        "letter": "D",
        "text": "Campaign"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 22,
    "question": "Cloud Kicks (CK) captures whether an opportunity should be reviewed by someone in product engineering with a checkbox field called Needs Review. CK also has a picklist field on the opportunity for Product Type. When a sales rep saves an opportunity, they need to select the Product Type or check the Needs Review box. What should an administrator use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Before Save flow"
      },
      {
        "letter": "B",
        "text": "Validation rule"
      },
      {
        "letter": "C",
        "text": "Workflow rule"
      },
      {
        "letter": "D",
        "text": "Required fields"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 23,
    "question": "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the question that is needed. How should an administrator complete this?",
    "options": [
      {
        "letter": "A",
        "text": "Use branching in the flow screen to show the proper scenario."
      },
      {
        "letter": "B",
        "text": "Use conditional visibility to hide the unnecessary question."
      },
      {
        "letter": "C",
        "text": "Use a new version of the flow for each scenario."
      },
      {
        "letter": "D",
        "text": "Use a decision element and a new screen to show the proper question."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 24,
    "question": "The administrator at Ursa Major Solar wants to add prepopulated subjects for Tasks and Events. Tasks should have the subjects Schedule Site Visit and Send Contract, while Events should have the subjects Site Visit and Ride Along. How can this requirement be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Include Schedule Site Visit, Send Contract, Site Visit, and Ride Along picklist values for the Activity subject field."
      },
      {
        "letter": "B",
        "text": "Add the new values to the predefined field values for the global actions New Event and New Task."
      },
      {
        "letter": "C",
        "text": "Add Schedule Site Visit and Send Contract picklist values for the Task subject field. Add Site Visit and Ride Along picklist values for the Event subject field."
      },
      {
        "letter": "D",
        "text": "Create a new custom Subject picklist field on Activity and add the field values."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 25,
    "question": "DreamHouse Realty needs to use consistent picklist values in the Category field on Accounts and Cases, with values respective to record types. Which two features should the administrator use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Global picklist"
      },
      {
        "letter": "B",
        "text": "Multi-select picklist"
      },
      {
        "letter": "C",
        "text": "Dependent picklist"
      },
      {
        "letter": "D",
        "text": "Custom picklist"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 26,
    "question": "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors. Which two tools should an administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound Message"
      },
      {
        "letter": "B",
        "text": "Quick Action"
      },
      {
        "letter": "C",
        "text": "Email Alert Action"
      },
      {
        "letter": "D",
        "text": "Approval Process"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 27,
    "question": "The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup. Which scenario could prevent the administrator from fulfilling this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "The lookup field in all the records contains a value."
      },
      {
        "letter": "B",
        "text": "A junction object is required to support the lookup."
      },
      {
        "letter": "C",
        "text": "Roll-up summary fields exist on the master object."
      },
      {
        "letter": "D",
        "text": "The lookup field is required for saving records."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 28,
    "question": "Cloud Kicks wants a report to categorize accounts into small, medium, and large based on the dollar value found in the Contract Value field. What feature should an administrator use to meet this request?",
    "options": [
      {
        "letter": "A",
        "text": "Bucket Column"
      },
      {
        "letter": "B",
        "text": "Filter Logic"
      },
      {
        "letter": "C",
        "text": "Group Rows"
      },
      {
        "letter": "D",
        "text": "Detail Column"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 29,
    "question": "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create an assignment rule to email the lead."
      },
      {
        "letter": "B",
        "text": "Configure an auto-response rule to email the lead."
      },
      {
        "letter": "C",
        "text": "Add a public group and Process Builder to email the lead."
      },
      {
        "letter": "D",
        "text": "Use a validation rule to trigger workflow to email the lead."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 30,
    "question": "Cloud Kicks has decided to delete a custom field. What will happen to the data in the field when it is deleted?",
    "options": [
      {
        "letter": "A",
        "text": "The data associated with the field is removed."
      },
      {
        "letter": "B",
        "text": "The data is restorable from the recycle bin."
      },
      {
        "letter": "C",
        "text": "The data is permanently deleted."
      },
      {
        "letter": "D",
        "text": "The data in the field is stored for 20 days."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 31,
    "question": "Currently, when support reps at Ursa Major Solar close a case, they manually send an email notification to the customer. The support manager would like to automate this process, as too many reps are forgetting this step. Which two settings should the administrator use to meet this request?",
    "options": [
      {
        "letter": "A",
        "text": "Case close template in the support settings"
      },
      {
        "letter": "B",
        "text": "Add the Knowledge component to the closed layout"
      },
      {
        "letter": "C",
        "text": "Auto-response rule step set for status of closed"
      },
      {
        "letter": "D",
        "text": "Notify contact checkbox on close page layout"
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 32,
    "question": "Ursa Solar Major is evaluating a brand new Salesforce org for its service team and would like to know what objects will be made available with out of the box Service Cloud. Which three of the standard objects are available to an administrator considering a support use case?",
    "options": [
      {
        "letter": "A",
        "text": "Case"
      },
      {
        "letter": "B",
        "text": "Request"
      },
      {
        "letter": "C",
        "text": "Ticket"
      },
      {
        "letter": "D",
        "text": "Contract"
      },
      {
        "letter": "E",
        "text": "Account"
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
    "questionNumber": 33,
    "question": "DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases. Which two solutions should an administrator use to meet this request?",
    "options": [
      {
        "letter": "A",
        "text": "Case Queues"
      },
      {
        "letter": "B",
        "text": "Email-to-Case"
      },
      {
        "letter": "C",
        "text": "Web-to-Case"
      },
      {
        "letter": "D",
        "text": "Case Escalation"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 34,
    "question": "What is the order of execution when a Case record is saved?",
    "options": [
      {
        "letter": "A",
        "text": "Validation rules, Assignment rules, Escalation rules, Auto-response rules"
      },
      {
        "letter": "B",
        "text": "Assignment rules, Validation rules, Workflow rules, Escalation rules"
      },
      {
        "letter": "C",
        "text": "Assignment rules, Auto-response rules, Workflow rules, Escalation rules"
      },
      {
        "letter": "D",
        "text": "Validation rules, Escalation rules, Workflow rules, Auto-response rules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 35,
    "question": "Cloud Kicks wants to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal. What feature should the administrator use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "List Views"
      },
      {
        "letter": "B",
        "text": "Queues"
      },
      {
        "letter": "C",
        "text": "Stages"
      },
      {
        "letter": "D",
        "text": "Splits"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 36,
    "question": "What are two considerations an administrator should keep in mind when working with Salesforce objects?",
    "options": [
      {
        "letter": "A",
        "text": "Standard objects are included with Salesforce."
      },
      {
        "letter": "B",
        "text": "Custom and standard objects have standard fields."
      },
      {
        "letter": "C",
        "text": "A new standard object can be created."
      },
      {
        "letter": "D",
        "text": "Only standard objects support master-detail relationships."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 37,
    "question": "AW Computing wants to prevent users from updating the Account Annual Revenue field to be a negative value or an amount more than $100 billion. How should an administrator accomplish this request?",
    "options": [
      {
        "letter": "A",
        "text": "Enable Account Revenue limits in Setup, with 0 as the minimum and 100 billion as the maximum."
      },
      {
        "letter": "B",
        "text": "Build a scheduled report displaying Accounts with Account Revenue that is negative or greater than 100 billion."
      },
      {
        "letter": "C",
        "text": "Make the Account Revenue field required on the page layout."
      },
      {
        "letter": "D",
        "text": "Create a validation rule that displays an error if Account Revenue is below 0 or greater than 100 billion."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 38,
    "question": "What are three settings an administrator should configure to make it easy for approvers to respond to approval requests?",
    "options": [
      {
        "letter": "A",
        "text": "Specify initial submission actions within the approval process."
      },
      {
        "letter": "B",
        "text": "Enable the organization's email approval response setting."
      },
      {
        "letter": "C",
        "text": "Update the organization's Chatter settings to allow approvals."
      },
      {
        "letter": "D",
        "text": "Add the Items to Approve component to the approvers' home page."
      },
      {
        "letter": "E",
        "text": "Create a flow to automatically approve all records."
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
    "questionNumber": 39,
    "question": "Cloud Kicks has the organization-wide defaults for Opportunity set to Private. Which two features should the administrator use to open up access to opportunity records for sales users working on collaborative deals?",
    "options": [
      {
        "letter": "A",
        "text": "Profiles"
      },
      {
        "letter": "B",
        "text": "Sharing set"
      },
      {
        "letter": "C",
        "text": "Sharing rules"
      },
      {
        "letter": "D",
        "text": "Role hierarchy"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 40,
    "question": "Sales users at Cloud Kicks are requesting that the data in the Industry field on the Account object displays on the Opportunity page layout. Which type of field should an administrator create to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Master-detail relationship field"
      },
      {
        "letter": "B",
        "text": "Custom Account field"
      },
      {
        "letter": "C",
        "text": "Cross-object formula field"
      },
      {
        "letter": "D",
        "text": "Standard Account field"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 41,
    "question": "Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
    "options": [
      {
        "letter": "A",
        "text": "Compact Layout Editor"
      },
      {
        "letter": "B",
        "text": "Related Lookup Filters"
      },
      {
        "letter": "C",
        "text": "Page Layout Editor"
      },
      {
        "letter": "D",
        "text": "Search Layout Editor"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 42,
    "question": "The sales team at Ursa Major Solar has asked the administrator to automate an outbound message. What should the administrator utilize to satisfy the request?",
    "options": [
      {
        "letter": "A",
        "text": "Task Assignment"
      },
      {
        "letter": "B",
        "text": "Case Auto-Response Rule"
      },
      {
        "letter": "C",
        "text": "Record-triggered flow"
      },
      {
        "letter": "D",
        "text": "Process Builder"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 43,
    "question": "The VP of sales at DreamHouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key piece of data is the total of all sales for the year and the progress to the enterprise sales goal. What dashboard component will effectively show this number and the proximity to the total goal as a single value?",
    "options": [
      {
        "letter": "A",
        "text": "Table"
      },
      {
        "letter": "B",
        "text": "Donut"
      },
      {
        "letter": "C",
        "text": "Gauge"
      },
      {
        "letter": "D",
        "text": "Stacked Bar"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 44,
    "question": "An administrator at DreamHouse Realty wants an easier way to assign cases based on agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Territory Management"
      },
      {
        "letter": "B",
        "text": "Escalation Rules"
      },
      {
        "letter": "C",
        "text": "Omni-Channel"
      },
      {
        "letter": "D",
        "text": "Knowledge Management"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 45,
    "question": "Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases. Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
    "options": [
      {
        "letter": "A",
        "text": "User management settings in setup"
      },
      {
        "letter": "B",
        "text": "Usage-based entitlements related list in company information"
      },
      {
        "letter": "C",
        "text": "User licenses related list in company information"
      },
      {
        "letter": "D",
        "text": "Search for licenses types in setup"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 46,
    "question": "Universal Containers is trying to improve the user experience when searching for the right status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on. How should the administrator improve on the current implementation?",
    "options": [
      {
        "letter": "A",
        "text": "Edit the status choices directly on the record type."
      },
      {
        "letter": "B",
        "text": "Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console."
      },
      {
        "letter": "C",
        "text": "Review which status choices are needed for each record type and create support processes for each that is necessary."
      },
      {
        "letter": "D",
        "text": "Reduce the number of case status values to five."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 47,
    "question": "The administrator for AW Computing is working with a user who is having trouble logging in to Salesforce. What should the administrator do to identify why the user is unable to log in?",
    "options": [
      {
        "letter": "A",
        "text": "Check the attempted logins by running the setup audit trail."
      },
      {
        "letter": "B",
        "text": "Pull the password history to ensure the password policy was followed."
      },
      {
        "letter": "C",
        "text": "Reset the security token for the profile."
      },
      {
        "letter": "D",
        "text": "Review the login history for the user."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 48,
    "question": "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
    "options": [
      {
        "letter": "A",
        "text": "Design a standard Campaign report and add the Value Won Opportunities in Campaign field."
      },
      {
        "letter": "B",
        "text": "Create a roll-up summary field on Opportunity to Campaign."
      },
      {
        "letter": "C",
        "text": "Perform periodic data jobs to update campaign records."
      },
      {
        "letter": "D",
        "text": "Add a Total Value field on Campaign and use a workflow rule to update the value when an opportunity is won."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 49,
    "question": "An administrator at Universal Containers needs an automated way to delete records based on field values. What automated solution should the administrator use?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Automation Studio"
      },
      {
        "letter": "D",
        "text": "Workflow"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 50,
    "question": "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-Response Rules"
      },
      {
        "letter": "B",
        "text": "Validation Rules"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Escalation Rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 51,
    "question": "At Ursa Major Solar, a flow is in place that sends a reminder email 30 days before the warranty expiration date. A customer renews their warranty for another three years. What is the expected behavior of the email element in the flow?",
    "options": [
      {
        "letter": "A",
        "text": "The email is not sent because the customers email address was missing."
      },
      {
        "letter": "B",
        "text": "The email is locked in the job queue until it meets the criteria."
      },
      {
        "letter": "C",
        "text": "The email is sent with the 30 day reminder criteria."
      },
      {
        "letter": "D",
        "text": "The email is not sent because the record no longer meets the criteria."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 52,
    "question": "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "B",
        "text": "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule."
      },
      {
        "letter": "C",
        "text": "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "D",
        "text": "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 53,
    "question": "The sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure?",
    "options": [
      {
        "letter": "A",
        "text": "Opportunity List View"
      },
      {
        "letter": "B",
        "text": "Sales Quotas"
      },
      {
        "letter": "C",
        "text": "Forecasting"
      },
      {
        "letter": "D",
        "text": "Opportunity Stages"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 54,
    "question": "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
    "options": [
      {
        "letter": "A",
        "text": "Chatter Stream"
      },
      {
        "letter": "B",
        "text": "Chatter Recommendations"
      },
      {
        "letter": "C",
        "text": "Chatter Broadcast Group"
      },
      {
        "letter": "D",
        "text": "Chatter Unlisted Group"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 55,
    "question": "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound Message"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Workflow Rule"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 56,
    "question": "The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is \"Search Engine\", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not \"Search Engine\", this picklist should be hidden. What is the most efficient way for the administrator to complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use an assignment element, one for when Lead Source is \"Search Engine\" and one for everything else."
      },
      {
        "letter": "B",
        "text": "Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is \"Search Engine\"."
      },
      {
        "letter": "C",
        "text": "Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is \"Search Engine\"."
      },
      {
        "letter": "D",
        "text": "Use a conditional filter in the screen element to only show 'Specific Search Engine' field only when Lead Source is \"Search Engine\"."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 57,
    "question": "Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of sales requested that this information be accessible on the opportunity and available for reporting. Which two options should the administrator configure to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Add the Campaign Member related list to the Opportunity page layout."
      },
      {
        "letter": "B",
        "text": "Add the Opportunity Contact Role related list to the Opportunity page layout."
      },
      {
        "letter": "C",
        "text": "Customize Campaign Member Role."
      },
      {
        "letter": "D",
        "text": "Customize Campaign Role."
      },
      {
        "letter": "E",
        "text": "Customize Opportunity Contact Role."
      }
    ],
    "correctAnswers": [
      "B",
      "E"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 58,
    "question": "Which three items are available in the mobile navigation menu?",
    "options": [
      {
        "letter": "A",
        "text": "Dashboards"
      },
      {
        "letter": "B",
        "text": "Lightning Home Page"
      },
      {
        "letter": "C",
        "text": "Lightning App Pages"
      },
      {
        "letter": "D",
        "text": "Chatter"
      },
      {
        "letter": "E",
        "text": "Utility Bar"
      }
    ],
    "correctAnswers": [
      "A",
      "C",
      "D"
    ],
    "chooseCount": 3
  },
  {
    "questionNumber": 59,
    "question": "DreamHouse Realty wants to offer a form on its Experience Cloud site where inspectors will submit findings from a property inspection. Which feature should an administrator place on the page to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Screen Flow"
      },
      {
        "letter": "B",
        "text": "Record Detail"
      },
      {
        "letter": "C",
        "text": "Autolaunched Flow"
      },
      {
        "letter": "D",
        "text": "Related List"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 60,
    "question": "Users at Cloud Kicks are reporting different options when updating a custom picklist on the Opportunity object based on the kind of opportunity. Where should an administrator update the option in the picklist?",
    "options": [
      {
        "letter": "A",
        "text": "Fields and relationships"
      },
      {
        "letter": "B",
        "text": "Picklist value sets"
      },
      {
        "letter": "C",
        "text": "Related lookup filters"
      },
      {
        "letter": "D",
        "text": "Record type"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 61,
    "question": "Which setting on a profile makes a tab hidden in the All App Launcher or visible in any app, but still allows a user to view records that would normally be found under this tab?",
    "options": [
      {
        "letter": "A",
        "text": "Object Permissions"
      },
      {
        "letter": "B",
        "text": "App Permissions"
      },
      {
        "letter": "C",
        "text": "Tab Settings"
      },
      {
        "letter": "D",
        "text": "Org-wide Defaults"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 62,
    "question": "The administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated?",
    "options": [
      {
        "letter": "A",
        "text": "Map the picklist field on the Lead to the Contact."
      },
      {
        "letter": "B",
        "text": "Set the picklist field to be required on the Lead object."
      },
      {
        "letter": "C",
        "text": "Update the picklist value with a validation rule."
      },
      {
        "letter": "D",
        "text": "Create a custom picklist field on Contact."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 63,
    "question": "AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant. What should the administrator configure to make it easier for teams to collaborate with the same customer?",
    "options": [
      {
        "letter": "A",
        "text": "Enable account teams and show the users how to set up a default account team."
      },
      {
        "letter": "B",
        "text": "Propose the users manually share all their accounts with their teammates."
      },
      {
        "letter": "C",
        "text": "Enable and configure standard opportunity teams with splits."
      },
      {
        "letter": "D",
        "text": "Create a queue for each team and assign account ownership to the queue."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 64,
    "question": "Which two solutions could an administrator find on the AppExchange to enhance their organization?",
    "options": [
      {
        "letter": "A",
        "text": "Communities"
      },
      {
        "letter": "B",
        "text": "Components"
      },
      {
        "letter": "C",
        "text": "Consultants"
      },
      {
        "letter": "D",
        "text": "Customers"
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 65,
    "question": "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should the administrator utilize to import the records to Salesforce?",
    "options": [
      {
        "letter": "A",
        "text": "Data Import Wizard"
      },
      {
        "letter": "B",
        "text": "Data Loader"
      },
      {
        "letter": "C",
        "text": "Dataloader.io"
      },
      {
        "letter": "D",
        "text": "Manual Import"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 1,
    "question": "A user at Northern Trail Outfitters is having trouble logging into Salesforce. The user's login history shows that this person has attempted to log in multiple times and has been locked out of the organization. Which two ways should the administrator help the user log into Salesforce?",
    "options": [
      {
        "letter": "A",
        "text": "Use the unlock button on the user's record detail page."
      },
      {
        "letter": "B",
        "text": "Log in as the user to unlock the user and reset the password."
      },
      {
        "letter": "C",
        "text": "Reset password on the user's record detail page."
      },
      {
        "letter": "D",
        "text": "Reset the password policies to allow the user to login."
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
    "question": "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Workflow Rules"
      },
      {
        "letter": "B",
        "text": "Opportunity Processes"
      },
      {
        "letter": "C",
        "text": "Path Key Fields"
      },
      {
        "letter": "D",
        "text": "Dynamic Forms"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 3,
    "question": "Northern Trail Outfitters wants to use Contact Hierarchy in its org to display Contact association. What should the administrator take into consideration regarding the Contact Hierarchy?",
    "options": [
      {
        "letter": "A",
        "text": "Contacts displayed in the Contact Hierarchy are limited to record-level access by user."
      },
      {
        "letter": "B",
        "text": "Customizing hierarchy columns changes the Recently Viewed Contacts list view."
      },
      {
        "letter": "C",
        "text": "Contact Hierarchy is limited to only display 3,000 contacts at one time."
      },
      {
        "letter": "D",
        "text": "Sharing settings are ignored by contacts displayed in the Contact Hierarchy."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "AW Computing needs to capture a loss reason in a rich text field when an opportunity is closed lost. How should an administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Check the required checkbox on the Loss Reason field in Object Manager."
      },
      {
        "letter": "B",
        "text": "Select the required checkbox next to the Loss Reason field on the page layout."
      },
      {
        "letter": "C",
        "text": "Configure a workflow rule to display an error if Loss Reason is blank."
      },
      {
        "letter": "D",
        "text": "Create a validation rule to display an error if stage is closed lost and Loss Reason is blank."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "Cloud Kicks is working on a rebrand. In which two areas of the Salesforce mobile app can the administrator customize the branding?",
    "options": [
      {
        "letter": "A",
        "text": "Popups header color"
      },
      {
        "letter": "B",
        "text": "Record background color"
      },
      {
        "letter": "C",
        "text": "Header background color"
      },
      {
        "letter": "D",
        "text": "Loading page logo"
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
    "question": "Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on Pacific Time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support. How should an administrator solve for this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Create one set of business hours per time zone."
      },
      {
        "letter": "B",
        "text": "Set temporary business hours for each time zone."
      },
      {
        "letter": "C",
        "text": "Allow the reps to set business hours manually."
      },
      {
        "letter": "D",
        "text": "Adjust the current business hours to accommodate the Eastern Time Zone."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "Universal Containers has a Contact Lightning record page with a component that shows LinkedIn data. The sales team would like to only show this component to those users who have the Sales User profile when they are on their mobile phones. Which two solutions should the administrator use to fulfill this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Filter the component visibility with User > Role > Name = Sales User."
      },
      {
        "letter": "B",
        "text": "Filter the component visibility with View = Mobile/Tablet."
      },
      {
        "letter": "C",
        "text": "Filter the component visibility with Form Factor = Phone."
      },
      {
        "letter": "D",
        "text": "Filter the component visibility with User > Profile > Name = Sales User."
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
    "question": "An administrator wants to create a form in Salesforce for users to fill out when they lose a client. Which automation tool supports creating a wizard to accomplish this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound Message"
      },
      {
        "letter": "B",
        "text": "Approval Process"
      },
      {
        "letter": "C",
        "text": "Flow Builder"
      },
      {
        "letter": "D",
        "text": "Process Builder"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "Sales users at Cloud Kicks are requesting that the data in the Industry field on the Account object displays on the Opportunity page layout. Which type of field should an administrator create to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Master-detail relationship field"
      },
      {
        "letter": "B",
        "text": "Custom Account field"
      },
      {
        "letter": "C",
        "text": "Cross-object formula field"
      },
      {
        "letter": "D",
        "text": "Standard Account field"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Support reps at Cloud Kicks (CK) are reporting that when they try to close a case, the Closed option in the Case Status picklist is missing. CK has asked the administrator to find a solution. Why are the support reps unable to see the Closed option in the specified picklist?",
    "options": [
      {
        "letter": "A",
        "text": "The Show Closed Statuses in Case Status Field checkbox is set to the default."
      },
      {
        "letter": "B",
        "text": "The Support Process being used omits Closed as a status choice."
      },
      {
        "letter": "C",
        "text": "The Case record type is missing Closed as a picklist value."
      },
      {
        "letter": "D",
        "text": "The Close Case page layout must be used to close a case."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "Ursa Major Solar is noticing a decrease in deals with a cross-sell opportunity type and want to share all cross-sell opportunities with a team of subject matter experts in their organization. The company has different roles, and the organization-wide default for Opportunity is set to Private. How should the administrator accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Add the subject matter experts to a public group and give them access to the records with a criteria based sharing rule."
      },
      {
        "letter": "B",
        "text": "Create a new role for the subject matter experts and give them access to the records with an owner-based sharing rule."
      },
      {
        "letter": "C",
        "text": "Enable territory management, assign the subject matter experts to the same territory, and give them access to the records with manual sharing."
      },
      {
        "letter": "D",
        "text": "Change the organization-wide default for Opportunity from Private to Public Read/Write to open up access for the subject matter experts."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 12,
    "question": "Northern Trail Outfitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly. What should the administrator do to identify the problem?",
    "options": [
      {
        "letter": "A",
        "text": "View the setup audit trail and review for errors."
      },
      {
        "letter": "B",
        "text": "Set up email logs and review the send error logs."
      },
      {
        "letter": "C",
        "text": "Use the native debug feature in the Flow Builder."
      },
      {
        "letter": "D",
        "text": "Review debug logs with the flow logging level."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
    "options": [
      {
        "letter": "A",
        "text": "Field History Tracking"
      },
      {
        "letter": "B",
        "text": "Setup Audit Trail"
      },
      {
        "letter": "C",
        "text": "Organization-Wide Defaults"
      },
      {
        "letter": "D",
        "text": "Security Health Check"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created. What could the issue be?",
    "options": [
      {
        "letter": "A",
        "text": "The flow url is deactivated."
      },
      {
        "letter": "B",
        "text": "The flow is inactive."
      },
      {
        "letter": "C",
        "text": "The flow trigger is missing."
      },
      {
        "letter": "D",
        "text": "The flow is read only."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
    "options": [
      {
        "letter": "A",
        "text": "Create a workflow rule with an outbound message."
      },
      {
        "letter": "B",
        "text": "Configure a scheduled flow in Flow Builder."
      },
      {
        "letter": "C",
        "text": "Use a process to update the account when it is edited."
      },
      {
        "letter": "D",
        "text": "Set up a scheduled process in Process Builder."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "The administrator at Cloud Kicks has a custom picklist field on Lead, which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated?",
    "options": [
      {
        "letter": "A",
        "text": "Map the picklist field on the Lead to the Contact."
      },
      {
        "letter": "B",
        "text": "Set the picklist field to be required on the Lead object."
      },
      {
        "letter": "C",
        "text": "Update the picklist value with a validation rule."
      },
      {
        "letter": "D",
        "text": "Create a custom picklist field on Contact."
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
    "question": "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variables for use later in the flow. What flow element should the administrator add?",
    "options": [
      {
        "letter": "A",
        "text": "Get Records"
      },
      {
        "letter": "B",
        "text": "Update Records"
      },
      {
        "letter": "C",
        "text": "Assignment"
      },
      {
        "letter": "D",
        "text": "Create Records"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 18,
    "question": "Which two objects are customizable the Stage Setup Flow?",
    "options": [
      {
        "letter": "A",
        "text": "Campaign Members"
      },
      {
        "letter": "B",
        "text": "Leads"
      },
      {
        "letter": "C",
        "text": "Campaigns"
      },
      {
        "letter": "D",
        "text": "Opportunities"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 19,
    "question": "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000. What should the administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Key Deals component on the homepage"
      },
      {
        "letter": "B",
        "text": "Opportunity warnings in Kanban View"
      },
      {
        "letter": "C",
        "text": "Enable Opportunity Update Reminders."
      },
      {
        "letter": "D",
        "text": "Set up Big Deal Alerts for the amount."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "An administrator installed a managed package that contains a permission set group. The permission set group that was installed includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records. What should the administrator do to control Delete access?",
    "options": [
      {
        "letter": "A",
        "text": "Use a muting permission set with a permission set group to mute selected permissions."
      },
      {
        "letter": "B",
        "text": "Create a new permission set that has Delete access deselected for the objects."
      },
      {
        "letter": "C",
        "text": "Edit the profile for the users to remove Delete access from the objects."
      },
      {
        "letter": "D",
        "text": "Create a new role that prevents Delete permissions from rolling up to the users."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 21,
    "question": "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-Response Rules"
      },
      {
        "letter": "B",
        "text": "Validation Rules"
      },
      {
        "letter": "C",
        "text": "Assignment Rules"
      },
      {
        "letter": "D",
        "text": "Escalation Rules"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 22,
    "question": "The Sales manager at DreamHouse Realty wants the sales users to have a quick way to view and edit the Opportunities in their pipeline expected to close in the next 90 days. What should an administrator do to accomplish this request?",
    "options": [
      {
        "letter": "A",
        "text": "Make a new Sales dashboard and add a component that shows all opportunities that meet the criteria."
      },
      {
        "letter": "B",
        "text": "Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities."
      },
      {
        "letter": "C",
        "text": "Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop."
      },
      {
        "letter": "D",
        "text": "Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 23,
    "question": "An administrator at Universal Containers needs an automated way to delete records based on field values. What automated solution should the administrator use?",
    "options": [
      {
        "letter": "A",
        "text": "Process Builder"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Automation Studio"
      },
      {
        "letter": "D",
        "text": "Workflow"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 24,
    "question": "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount. How should the administrator export this file?",
    "options": [
      {
        "letter": "A",
        "text": "Data Loader"
      },
      {
        "letter": "B",
        "text": "Data Export Service"
      },
      {
        "letter": "C",
        "text": "Data Export Wizard"
      },
      {
        "letter": "D",
        "text": "Data Import Wizard"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 25,
    "question": "An administrator has reviewed an upcoming critical update. How should the administrator proceed with activation of the critical update?",
    "options": [
      {
        "letter": "A",
        "text": "Allow the critical update to auto-activate."
      },
      {
        "letter": "B",
        "text": "Activate the critical update in a sandbox."
      },
      {
        "letter": "C",
        "text": "Allow the critical update to auto-activate in a sandbox."
      },
      {
        "letter": "D",
        "text": "Activate the critical update in production."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 26,
    "question": "Universal Container's administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-many relationship?",
    "options": [
      {
        "letter": "A",
        "text": "Create two lookup relationships on the new object."
      },
      {
        "letter": "B",
        "text": "Create a junction with a custom object."
      },
      {
        "letter": "C",
        "text": "Create URL fields on a custom object."
      },
      {
        "letter": "D",
        "text": "Create two master-detail relationships on the new object."
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 27,
    "question": "Once an opportunity reaches the negotiation stage at Cloud Kicks, the Amount field becomes required for sales users. Sales managers need to be able to move opportunities into this stage without knowing the amount. How should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?",
    "options": [
      {
        "letter": "A",
        "text": "Make the field required for all users."
      },
      {
        "letter": "B",
        "text": "Configure a validation rule to meet the criteria."
      },
      {
        "letter": "C",
        "text": "Create a formula field to fill in the field for managers."
      },
      {
        "letter": "D",
        "text": "Assign the Administrator profile to the managers."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 28,
    "question": "At Cloud Kicks, sales reps use discounts on the opportunity record to help win sales on particular products. When an opportunity is won, they then have to manually apply the discount to the related opportunity products. The sales manager has asked if there is a way to automate this time-consuming task. What should the administrator use to deliver this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Formula Field"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Prebuilt Macro"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 29,
    "question": "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "Page Layout Assignment"
      },
      {
        "letter": "B",
        "text": "Sharing Settings"
      },
      {
        "letter": "C",
        "text": "Component Visibility"
      },
      {
        "letter": "D",
        "text": "Record Type Assignment"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 30,
    "question": "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled in on every Invoice record. How should an administrator ensure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Define an approval process for the field."
      },
      {
        "letter": "B",
        "text": "Make the field universally required."
      },
      {
        "letter": "C",
        "text": "Create a Process Builder to set the field."
      },
      {
        "letter": "D",
        "text": "Require the field on the record type."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 31,
    "question": "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
    "options": [
      {
        "letter": "A",
        "text": "Outbound Message"
      },
      {
        "letter": "B",
        "text": "Flow Builder"
      },
      {
        "letter": "C",
        "text": "Workflow Rule"
      },
      {
        "letter": "D",
        "text": "Quick Action"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 32,
    "question": "Users at Cloud Kicks want to see information more useful for their role on the Case page. How should an administrator make the pages more dynamic and easier to use?",
    "options": [
      {
        "letter": "A",
        "text": "Delete the extra components from the page."
      },
      {
        "letter": "B",
        "text": "Add component visibility filters to the components."
      },
      {
        "letter": "C",
        "text": "Include more tab components with filters."
      },
      {
        "letter": "D",
        "text": "Remove fields from the record details component."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 33,
    "question": "An administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won, and another task after 60 days to check in with the customer. Which automation tool should the administrator use?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment Rule"
      },
      {
        "letter": "B",
        "text": "Field Update"
      },
      {
        "letter": "C",
        "text": "Outbound Message"
      },
      {
        "letter": "D",
        "text": "Flow Builder"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 34,
    "question": "A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is. Which tool should an administrator use to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Data Import Wizard"
      },
      {
        "letter": "B",
        "text": "Mass Transfer Tool"
      },
      {
        "letter": "C",
        "text": "Dataloader.io"
      },
      {
        "letter": "D",
        "text": "Data Loader"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 35,
    "question": "The administrator at Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted a case to the administrator indicating that the new field is unavailable. Which two steps should an administrator do to troubleshoot this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Review the field-level security of the field for the user profile."
      },
      {
        "letter": "B",
        "text": "Update the organization-wide defaults for the object."
      },
      {
        "letter": "C",
        "text": "Run the setup audit trail for the organization."
      },
      {
        "letter": "D",
        "text": "Ensure that the page layout for the user's profile has been updated."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 36,
    "question": "Cloud Kicks' executives have noticed the Opportunity Expected Revenue field displays incorrect values. How should the administrator correct this?",
    "options": [
      {
        "letter": "A",
        "text": "Update the expected revenue associated with the stage."
      },
      {
        "letter": "B",
        "text": "Adjust the forecast category associated with the stage."
      },
      {
        "letter": "C",
        "text": "Change the probability associated with the stage."
      },
      {
        "letter": "D",
        "text": "Modify the closed won value associated with the stage."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 37,
    "question": "AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant. What should the administrator configure to make it easier for teams to collaborate with the same customer?",
    "options": [
      {
        "letter": "A",
        "text": "Enable account teams and show the users how to set up a default account team."
      },
      {
        "letter": "B",
        "text": "Propose the users manually share all their accounts with their teammates."
      },
      {
        "letter": "C",
        "text": "Enable and configure standard opportunity teams with splits."
      },
      {
        "letter": "D",
        "text": "Create a queue for each team and assign account ownership to the queue."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 38,
    "question": "Management at Universal Containers would like to share dashboard components with their team in Chatter but currently do not have access to this capability. How should the administrator make this functionality available to management?",
    "options": [
      {
        "letter": "A",
        "text": "Select Download Chart on the component."
      },
      {
        "letter": "B",
        "text": "Set View Dashboard As to the dashboard viewer."
      },
      {
        "letter": "C",
        "text": "Enable reporting snapshots."
      },
      {
        "letter": "D",
        "text": "Enable dashboard feed tracking."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 39,
    "question": "An administrator at Universal Containers has been asked to prevent some users from accessing Salesforce from outside of their network. What are two considerations for this configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Enforce Login IP Ranges on Every Request on the profile must be selected to enforce IP restrictions."
      },
      {
        "letter": "B",
        "text": "Assign single sign-on to a permission set to allow users to log in when outside the network."
      },
      {
        "letter": "C",
        "text": "Restrict U2F Security Keys on the user's profile to enforce login hours."
      },
      {
        "letter": "D",
        "text": "IP address restrictions are set on the profile for the org."
      }
    ],
    "correctAnswers": [
      "A",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 40,
    "question": "The administrator at Cloud Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record. What should the administrator do to pull contact fields into the custom report?",
    "options": [
      {
        "letter": "A",
        "text": "Configure formula fields on Event to populate contact information."
      },
      {
        "letter": "B",
        "text": "Use a dashboard with filters to show Event and contact data as requested."
      },
      {
        "letter": "C",
        "text": "Edit the custom Event report type and add fields related via lookup."
      },
      {
        "letter": "D",
        "text": "Create a new report type with Event as the primary object and Contact as a related object."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 41,
    "question": "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
    "options": [
      {
        "letter": "A",
        "text": "Design a standard Campaign report and add the Value Won Opportunities in Campaign field."
      },
      {
        "letter": "B",
        "text": "Create a roll-up summary field on Opportunity to Campaign."
      },
      {
        "letter": "C",
        "text": "Perform periodic data jobs to update campaign records."
      },
      {
        "letter": "D",
        "text": "Add a Total Value field on Campaign and use a workflow rule to update the value when an opportunity is won."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 42,
    "question": "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "B",
        "text": "Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule."
      },
      {
        "letter": "C",
        "text": "Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry."
      },
      {
        "letter": "D",
        "text": "Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 43,
    "question": "Cloud Kicks generates leads for its different product categories (shoes, apparel, and accessories) through many different sources. While some lead sources are used for all three categories, other lead sources are specific to a single category. The VP of marketing requests that only the proper lead sources be displayed based on the product category chosen. How should the administrator configure Salesforce to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create business processes and record types for each of the three product categories."
      },
      {
        "letter": "B",
        "text": "Create a single lead process, then create record types for each product category."
      },
      {
        "letter": "C",
        "text": "Create a page layout for each category and filter the Lead Source field based on category."
      },
      {
        "letter": "D",
        "text": "Create a dependency between the Product Category field and Lead Source field."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 44,
    "question": "The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management. What case management tools need to be utilized for this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-response rules, Support Processes, Entitlements"
      },
      {
        "letter": "B",
        "text": "Auto-response rules, Entitlements, Queues"
      },
      {
        "letter": "C",
        "text": "Auto-response rules, Support Processes, Escalation Rules"
      },
      {
        "letter": "D",
        "text": "Auto-response rules, Queues, formulas"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 45,
    "question": "What data loss considerations should an administrator keep in mind when changing a custom field type from Text to Picklist?",
    "options": [
      {
        "letter": "A",
        "text": "Assignment and escalation rules may be affected."
      },
      {
        "letter": "B",
        "text": "There will be no data loss with use of a global value set."
      },
      {
        "letter": "C",
        "text": "Any list view based on the custom field is deleted."
      },
      {
        "letter": "D",
        "text": "Auto updates will be made to Visualforce references to prevent data loss."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 46,
    "question": "Northern Trail Outfitters uses web-to-case to convert support requests submitted through its website into cases. The support team wants to automatically send an email containing password reset instructions to the customers when the case subject contains the words forgot and password. What two options should the administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Password reset template"
      },
      {
        "letter": "B",
        "text": "Email-to-case"
      },
      {
        "letter": "C",
        "text": "Email template"
      },
      {
        "letter": "D",
        "text": "Auto-response rule"
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 47,
    "question": "What are three characteristics of a master-detail relationship?",
    "options": [
      {
        "letter": "A",
        "text": "Permissions for the detail record are set independently of the master."
      },
      {
        "letter": "B",
        "text": "Each object can have up to five master-detail relationships."
      },
      {
        "letter": "C",
        "text": "The owner field on the detail records is the owner of the master record."
      },
      {
        "letter": "D",
        "text": "The master object can be a standard or custom object."
      },
      {
        "letter": "E",
        "text": "Roll-up summaries are supported in master-detail relationships."
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
    "questionNumber": 48,
    "question": "The administrator at Cloud Kicks has created an approval process for time off requests. Which two automated actions are available to be added as part of the approval process?",
    "options": [
      {
        "letter": "A",
        "text": "Autolaunched Flow"
      },
      {
        "letter": "B",
        "text": "Email Alert"
      },
      {
        "letter": "C",
        "text": "Chatter Post"
      },
      {
        "letter": "D",
        "text": "Field Update"
      }
    ],
    "correctAnswers": [
      "B",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 49,
    "question": "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Case Assignment Rules"
      },
      {
        "letter": "B",
        "text": "Case Escalation Rules"
      },
      {
        "letter": "C",
        "text": "Case Dashboard Refreshes"
      },
      {
        "letter": "D",
        "text": "Case Scheduled Reports"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 50,
    "question": "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Turn on Recurring Activities"
      },
      {
        "letter": "B",
        "text": "Workflow rule to create recurring tasks"
      },
      {
        "letter": "C",
        "text": "Enable Creation of Recurring Tasks"
      },
      {
        "letter": "D",
        "text": "Flow to create recurring tasks"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 51,
    "question": "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
    "options": [
      {
        "letter": "A",
        "text": "Include the action in the Salesforce Mobile Navigation menu."
      },
      {
        "letter": "B",
        "text": "Add the Salesforce Mobile and Lightning Experience action to the page layout."
      },
      {
        "letter": "C",
        "text": "Modify compact Case page layout to include the action."
      },
      {
        "letter": "D",
        "text": "Create a custom Lightning App with the action."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 52,
    "question": "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permission and the two-factor authentication for API Logins permission to a group of users. Which two prompts will happen when one of the users attempts to log in to Data Loader?",
    "options": [
      {
        "letter": "A",
        "text": "Users need to connect an authenticator app to their Salesforce account."
      },
      {
        "letter": "B",
        "text": "Users need to enter a verification code from email or SMS, whichever has higher priority."
      },
      {
        "letter": "C",
        "text": "Users need to download and install an authenticator app on their mobile device."
      },
      {
        "letter": "D",
        "text": "Users need to get a security token from a trusted network using Reset My Security Token."
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 53,
    "question": "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
    "options": [
      {
        "letter": "A",
        "text": "Chatter Stream"
      },
      {
        "letter": "B",
        "text": "Chatter Recommendations"
      },
      {
        "letter": "C",
        "text": "Chatter Broadcast Group"
      },
      {
        "letter": "D",
        "text": "Chatter Unlisted Group"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 54,
    "question": "At Universal Containers, there is a custom field on the Lead named Product Category. Management wants this information to be part of the Opportunity upon lead conversion. What action should the administrator take to satisfy the request?",
    "options": [
      {
        "letter": "A",
        "text": "Map the lead custom field to the product's product category field."
      },
      {
        "letter": "B",
        "text": "Create a custom field on the Opportunity and map the two fields."
      },
      {
        "letter": "C",
        "text": "Configure the product categories picklist field on the product."
      },
      {
        "letter": "D",
        "text": "Create a workflow to update Opportunity fields based on the lead."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 55,
    "question": "AW Computing would like to improve its Case Lightning record page by including a filtered component to display a message in bold font when a Case is saved as a critical record type, and a quick way to update the Account status from the Case layout. Which two components should an administrator use to satisfy these requests?",
    "options": [
      {
        "letter": "A",
        "text": "Related record"
      },
      {
        "letter": "B",
        "text": "Rich text"
      },
      {
        "letter": "C",
        "text": "Related list"
      },
      {
        "letter": "D",
        "text": "Record detail"
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 56,
    "question": "An administrator creates a custom text area field on the Account object and adds it to the service team's page layout. The service team manager loves the addition of this field and wants it to appear in the highlights panel so that the service reps can quickly find it when on the Account page. How should the administrator accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Create a new page layout and a new section titled highlights panel."
      },
      {
        "letter": "B",
        "text": "In the Account object manager, create a custom compact layout."
      },
      {
        "letter": "C",
        "text": "From the page layout editor, drag the field to the highlights panel."
      },
      {
        "letter": "D",
        "text": "Make the field required and move it to the top of the page."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 57,
    "question": "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations. Which two tools should an administrator use to build this solution?",
    "options": [
      {
        "letter": "A",
        "text": "Flow Builder"
      },
      {
        "letter": "B",
        "text": "Quick Action"
      },
      {
        "letter": "C",
        "text": "Approval Process"
      },
      {
        "letter": "D",
        "text": "Validation Rule"
      }
    ],
    "correctAnswers": [
      "A",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 58,
    "question": "Users have noticed that when they click on a report in a dashboard to view the report details, the values in the report are different from the values displayed on the dashboard. What are the two reasons this is likely to occur?",
    "options": [
      {
        "letter": "A",
        "text": "The running dashboard user and viewer have different permissions."
      },
      {
        "letter": "B",
        "text": "The dashboard needs to be refreshed."
      },
      {
        "letter": "C",
        "text": "The report needs to be refreshed."
      },
      {
        "letter": "D",
        "text": "The current user does not have access to the report folder."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 59,
    "question": "The standard Lead Rating field has picklist values of Hot, Warm, and Cold. A list of new leads was imported without errors even though several records had the value of Unrated in the Rating field. How were these records added without error?",
    "options": [
      {
        "letter": "A",
        "text": "The Add to All Record Types checkbox was selected."
      },
      {
        "letter": "B",
        "text": "A global picklist value set was used to populate the picklist."
      },
      {
        "letter": "C",
        "text": "The Restricted picklist checkbox was unchecked."
      },
      {
        "letter": "D",
        "text": "Field-level security was set to Visible for all profiles."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 60,
    "question": "Users at DreamHouse Realty are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time. How should an administrator create the dashboard without changing any sharing settings?",
    "options": [
      {
        "letter": "A",
        "text": "Create a dashboard with the running user set as someone who can see all opportunities."
      },
      {
        "letter": "B",
        "text": "Build individual dashboards for profiles that need to see the enterprise results."
      },
      {
        "letter": "C",
        "text": "Add a filter to the dashboard to filter the opportunities by owner role."
      },
      {
        "letter": "D",
        "text": "Update the dashboard folder settings to manager for the sales reps role."
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 61,
    "question": "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year. Which AppExchange item should help the administrator meet the request?",
    "options": [
      {
        "letter": "A",
        "text": "Lightning Data"
      },
      {
        "letter": "B",
        "text": "Lightning Community"
      },
      {
        "letter": "C",
        "text": "Flow Solutions"
      },
      {
        "letter": "D",
        "text": "Bolt Solutions"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 62,
    "question": "The VP of sales at Cloud Kicks has a standard sales profile and is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator troubleshoot this issue?",
    "options": [
      {
        "letter": "A",
        "text": "Ask the user for their password so the admin can log in as the user."
      },
      {
        "letter": "B",
        "text": "Use an appexchange product to troubleshoot."
      },
      {
        "letter": "C",
        "text": "Use 'Login as' to log in as the user."
      },
      {
        "letter": "D",
        "text": "Log in as a system administrator to troubleshoot."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 63,
    "question": "Which two actions should an administrator perform with Case escalation rules?",
    "options": [
      {
        "letter": "A",
        "text": "Send email notifications."
      },
      {
        "letter": "B",
        "text": "Re-assign the Case."
      },
      {
        "letter": "C",
        "text": "Re-open the Case."
      },
      {
        "letter": "D",
        "text": "Change the Case Priority."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 64,
    "question": "Universal Containers has two sales teams, sales team A and sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
    "options": [
      {
        "letter": "A",
        "text": "Owner-based sharing"
      },
      {
        "letter": "B",
        "text": "Criteria-based sharing"
      },
      {
        "letter": "C",
        "text": "Hierarchical sharing"
      },
      {
        "letter": "D",
        "text": "Use manual sharing"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 65,
    "question": "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request?",
    "options": [
      {
        "letter": "A",
        "text": "A user with a manager role above the agent."
      },
      {
        "letter": "B",
        "text": "A user with Read permission on the account."
      },
      {
        "letter": "C",
        "text": "A user with the System Administrator profile."
      },
      {
        "letter": "D",
        "text": "A user with the Manage Cases permission."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 1,
    "question": "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-Response Rules"
      },
      {
        "letter": "B",
        "text": "Assignment Rules"
      },
      {
        "letter": "C",
        "text": "Email Alerts"
      },
      {
        "letter": "D",
        "text": "Knowledge Articles"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 2,
    "question": "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs. Which two options should the administrator suggest?",
    "options": [
      {
        "letter": "A",
        "text": "Download into a Trailhead Playground."
      },
      {
        "letter": "B",
        "text": "Install in a sandbox."
      },
      {
        "letter": "C",
        "text": "Test Drive in a production org."
      },
      {
        "letter": "D",
        "text": "Check edition compatibility."
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
    "question": "The administrator at Cloud Kicks deleted a custom field but realized that it is part of the lead conversion process. What should an administrator take into consideration when undeleting the field?",
    "options": [
      {
        "letter": "A",
        "text": "The field history will remain deleted."
      },
      {
        "letter": "B",
        "text": "The field mapping needs to be re-mapped."
      },
      {
        "letter": "C",
        "text": "The field needs to be re-added to reports."
      },
      {
        "letter": "D",
        "text": "The field needs to be restored in the search settings."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 4,
    "question": "The administrator at Ursa Major Solar needs to make sure that unassigned cases from VIP customers get transferred to the appropriate service representative within 5 hours. VIP customers have access to support 24 hours a day. How should this be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Case Queues"
      },
      {
        "letter": "B",
        "text": "Business Hours"
      },
      {
        "letter": "C",
        "text": "Escalation Rules"
      },
      {
        "letter": "D",
        "text": "Assignment Rules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 5,
    "question": "Brokers at DreamHouse Realty need to see certain information about one or more cases when referencing the contact record. This includes: Case Name, Case ID, Customer Name, Case Reason, Case Status, and Case Creation Date. Which two changes in Setup should the administrator make?",
    "options": [
      {
        "letter": "A",
        "text": "Edit the Related List component in the Lightning App Builder and choose Enhanced List as the related list type."
      },
      {
        "letter": "B",
        "text": "Edit the Related List component in the Lightning App Builder and choose Related List as the related list type."
      },
      {
        "letter": "C",
        "text": "Use the page layout editor to include the appropriate columns in the Cases related list."
      },
      {
        "letter": "D",
        "text": "Use the page layout editor to change the related list type to Enhanced List."
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
    "question": "Customer service accesses articles with the Knowledge Lightning component on the Service Cloud console. Billing department users would like similar functionality on the case record without using the console. How should the administrator configure this request?",
    "options": [
      {
        "letter": "A",
        "text": "Add the Knowledge related list to the record page."
      },
      {
        "letter": "B",
        "text": "Add the Knowledge component to the page layout."
      },
      {
        "letter": "C",
        "text": "Add the Knowledge related list to the page layout."
      },
      {
        "letter": "D",
        "text": "Add the Knowledge component to the record page."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 7,
    "question": "DreamHouse Realty requires that house showings be scheduled within the current year to prevent too many future showings from stacking up. How can they make sure Showing Date is only populated with a date this year?",
    "options": [
      {
        "letter": "A",
        "text": "Create a report that shows any Showing Dates not scheduled in the current year to be updated."
      },
      {
        "letter": "B",
        "text": "Create a validation rule that ensures Showing Date contains a date within the current year."
      },
      {
        "letter": "C",
        "text": "Add Help Text so the user knows to only add a Showing Date within the current year."
      },
      {
        "letter": "D",
        "text": "Sync the users' Showing Calendar to Salesforce and filter it to only look at this year."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 8,
    "question": "The IT manager at Universal Containers is doing an audit of the system's security. How should the administrator provide a summary of the org's security health?",
    "options": [
      {
        "letter": "A",
        "text": "Turn on Event Monitoring to track user events."
      },
      {
        "letter": "B",
        "text": "Download the last six months of user login data."
      },
      {
        "letter": "C",
        "text": "Change the Organization-Wide Default to private to restrict visibility."
      },
      {
        "letter": "D",
        "text": "Run a Health Check to identify vulnerabilities."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 9,
    "question": "Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use an interview flow to capture Case details."
      },
      {
        "letter": "B",
        "text": "Direct users to Global Search to look for similar cases."
      },
      {
        "letter": "C",
        "text": "Configure Knowledge with articles and data categories."
      },
      {
        "letter": "D",
        "text": "Create a custom object to capture popular Case resolutions."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 10,
    "question": "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
    "options": [
      {
        "letter": "A",
        "text": "Account and User"
      },
      {
        "letter": "B",
        "text": "Individual, User, and Account"
      },
      {
        "letter": "C",
        "text": "Case and Opportunity"
      },
      {
        "letter": "D",
        "text": "Contact, Lead, and Person Account"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 11,
    "question": "Cloud Kicks intends to protect data with backups by using the data export service. Which two considerations should the administrator remember when scheduling the export?",
    "options": [
      {
        "letter": "A",
        "text": "Metadata backups are limited to sandbox refresh intervals."
      },
      {
        "letter": "B",
        "text": "Data backups are limited to weekly or monthly intervals."
      },
      {
        "letter": "C",
        "text": "Metadata backups must be run via a separate process."
      },
      {
        "letter": "D",
        "text": "Data export service should be run from a sandbox."
      }
    ],
    "correctAnswers": [
      "B",
      "C"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 12,
    "question": "Universal Containers has three separate lines of business. Each line has specific fields that must be displayed to users. However, the fields needed by the sales team are different than the fields needed by the service team. How should the administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create one record type with six Page Layouts."
      },
      {
        "letter": "B",
        "text": "Create three record types, each with 2 page layouts."
      },
      {
        "letter": "C",
        "text": "Create two record types, each with 3 page layouts."
      },
      {
        "letter": "D",
        "text": "Create six record types, each with 1 page layout."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 13,
    "question": "Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product. What should an administrator do to satisfy this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create an auto-response rule and a public group."
      },
      {
        "letter": "B",
        "text": "Create a user-based sharing rule and an ad-hoc case team."
      },
      {
        "letter": "C",
        "text": "Create a queue and a criteria-based sharing rule."
      },
      {
        "letter": "D",
        "text": "Create a predefined case team and an assignment rule."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 14,
    "question": "The administrator at Cloud Kicks deleted a custom field but realized that it is part of the lead conversion process. What should an administrator take into consideration when undeleting the field?",
    "options": [
      {
        "letter": "A",
        "text": "The field history will remain deleted."
      },
      {
        "letter": "B",
        "text": "The field mapping needs to be re-mapped."
      },
      {
        "letter": "C",
        "text": "The field needs to be re-added to reports."
      },
      {
        "letter": "D",
        "text": "The field needs to be restored in the search settings."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 15,
    "question": "DreamHouse Realty requires that house showings be scheduled within the current year to prevent too many future showings from stacking up. How can they make sure Showing Date is only populated with a date this year?",
    "options": [
      {
        "letter": "A",
        "text": "Create a report that shows any Showing Dates not scheduled in the current year to be updated."
      },
      {
        "letter": "B",
        "text": "Create a validation rule that ensures Showing Date contains a date within the current year."
      },
      {
        "letter": "C",
        "text": "Add Help Text so the user knows to only add a Showing Date within the current year."
      },
      {
        "letter": "D",
        "text": "Sync the users' Showing Calendar to Salesforce and filter it to only look at this year."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 16,
    "question": "Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Use an interview flow to capture Case details."
      },
      {
        "letter": "B",
        "text": "Direct users to Global Search to look for similar cases."
      },
      {
        "letter": "C",
        "text": "Configure Knowledge with articles and data categories."
      },
      {
        "letter": "D",
        "text": "Create a custom object to capture popular Case resolutions."
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 17,
    "question": "The administrator at Cloud Kicks has been asked to change the company's Shoe Style field to prevent users from selecting more than one style on a record. Which two steps should an administrator do to accomplish this?",
    "options": [
      {
        "letter": "A",
        "text": "Select the \"Choose only one value\" checkbox on the picklist field."
      },
      {
        "letter": "B",
        "text": "Reactivate the appropriate Shoe Style values after the field type changes."
      },
      {
        "letter": "C",
        "text": "Back-up the Shoe Style values in existing records."
      },
      {
        "letter": "D",
        "text": "Change the field type from a multi-select picklist field to a picklist field."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 18,
    "question": "Universal Containers has three separate lines of business. Each line has specific fields that must be displayed to users. However, the fields needed by the sales team are different than the fields needed by the service team. How should the administrator configure this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create one record type with six Page Layouts."
      },
      {
        "letter": "B",
        "text": "Create three record types, each with 2 page layouts."
      },
      {
        "letter": "C",
        "text": "Create two record types, each with 3 page layouts."
      },
      {
        "letter": "D",
        "text": "Create six record types, each with 1 page layout."
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 19,
    "question": "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Auto-Response Rules"
      },
      {
        "letter": "B",
        "text": "Assignment Rules"
      },
      {
        "letter": "C",
        "text": "Email Alerts"
      },
      {
        "letter": "D",
        "text": "Knowledge Articles"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 20,
    "question": "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs. Which two options should the administrator suggest?",
    "options": [
      {
        "letter": "A",
        "text": "Download into a Trailhead Playground."
      },
      {
        "letter": "B",
        "text": "Install in a sandbox."
      },
      {
        "letter": "C",
        "text": "Test Drive in a production org."
      },
      {
        "letter": "D",
        "text": "Check edition compatibility."
      }
    ],
    "correctAnswers": [
      "A",
      "B"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 21,
    "question": "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
    "options": [
      {
        "letter": "A",
        "text": "Account and User"
      },
      {
        "letter": "B",
        "text": "Individual, User, and Account"
      },
      {
        "letter": "C",
        "text": "Case and Opportunity"
      },
      {
        "letter": "D",
        "text": "Contact, Lead, and Person Account"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 22,
    "question": "Brokers at DreamHouse Realty need to see certain information about one or more cases when referencing the contact record. This includes: Case Name, Case ID, Customer Name, Case Reason, Case Status, and Case Creation Date. Which two changes in Setup should the administrator make?",
    "options": [
      {
        "letter": "A",
        "text": "Edit the Related List component in the Lightning App Builder and choose Enhanced List as the related list type."
      },
      {
        "letter": "B",
        "text": "Edit the Related List component in the Lightning App Builder and choose Related List as the related list type."
      },
      {
        "letter": "C",
        "text": "Use the page layout editor to include the appropriate columns in the Cases related list."
      },
      {
        "letter": "D",
        "text": "Use the page layout editor to change the related list type to Enhanced List."
      }
    ],
    "correctAnswers": [
      "C",
      "D"
    ],
    "chooseCount": 2
  },
  {
    "questionNumber": 23,
    "question": "The administrator at Ursa Major Solar needs to make sure that unassigned cases from VIP customers get transferred to the appropriate service representative within 5 hours. VIP customers have access to support 24 hours a day. How should this be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Case Queues"
      },
      {
        "letter": "B",
        "text": "Business Hours"
      },
      {
        "letter": "C",
        "text": "Escalation Rules"
      },
      {
        "letter": "D",
        "text": "Assignment Rules"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "chooseCount": 1
  },
  {
    "questionNumber": 24,
    "question": "The IT manager at Universal Containers is doing an audit of the system's security. How should the administrator provide a summary of the org's security health?",
    "options": [
      {
        "letter": "A",
        "text": "Turn on Event Monitoring to track user events."
      },
      {
        "letter": "B",
        "text": "Download the last six months of user login data."
      },
      {
        "letter": "C",
        "text": "Change the Organization-Wide Default to private to restrict visibility."
      },
      {
        "letter": "D",
        "text": "Run a Health Check to identify vulnerabilities."
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "chooseCount": 1
  }
];
