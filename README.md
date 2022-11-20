## Practice Challenge

### Implement Persistence on Contact form data​

#### Context

Prime Solutions is an IT solutions provider company who have earned reputation in providing IT solutions in different business domains

Recently they have received a project to develop contact book app.

Prime Solutions have approached Graffitti designers for a good UI design.

The design is ready and now it needs to be made functional.

The development will be carried out in stages.

The development is carried out in phases. The first phase is complete, whereby the inputs are captured and validated ​

In the second phase of development, you as a frontend developer have to develop solution to posted all to contacts.json file residing at the server​

##### Contact Form

Graffitti Designers have designed contact form that allows app users to provide inputs

Below is the image of UI of contact form.

![](images/contact-form.png)

#### Challenge

The inputs are captured and validated but the data is yet not persisted

The data should be persisted to `contacts.json` file served through json-server

#### Problem Statement

Persist the data to contacts.json by making HTTP calls to json-server

Ensure the response is communicated to the end-user, both for success and failures


#### Instructions

1. Fork the boilerplate
2. Clone the forked repository
3. Provide the solution code inside the script file `contact_service.js`.
4. The validation code can be reused from previous challenge and can be kept in `script.js`
5. Ensure no other codes get modified, else, the rendering logic will fail to generate desired output.
6. Launch the `index.html` page on the browser to view the rendered output
7. `contacts.json` should be created and put under a separate folder outside the application folder
8. Command to run json-server is:
`json-server -w contacts.json`