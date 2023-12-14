import Accordion from 'react-bootstrap/Accordion';

function Content() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header >About me</Accordion.Header>
        <Accordion.Body>
        Hello,
I am a very focused and determined web developer,
highly motivated , passionate about technology since childhood ,
however the goal of working with IT came after the birth of my daughter ,
Since then I have dedicated time and efforts.
The administrative experience in one of the largest companies in the 
health area 
(private hospital) in Brazil helped me further improve my organizational 
skills and
priority tasks, as well as the experiences as a seller of stores made me 
have a
customer-focused look , their needs and desires, helping them with 
friendliness 
and warmth and willingness, as well as consequent to this creating a 
portfolio 
of loyal customers.

        </Accordion.Body> <br/>
        <br/>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>About Technologies</Accordion.Header>
        <Accordion.Body>
        In IT I developed some academic projects in Angular.js and Typescript ,
using Node.js , Javascript and currently studying React.js , 
I have seen a little SQL and C# , AzureDevops , I am available to learn and deepen any
technology that is necessary for the project.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
export default Content;