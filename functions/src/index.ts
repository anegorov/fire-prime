import * as functions from 'firebase-functions';
const cors = require('cors')({origin: true});

const SENDGRID_API_KEY = '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';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

export const sendEmail = functions.https.onRequest((request, response) => {
 
  cors(request, response, () => {});

  if(request.method !== "POST"){
    response.status(400).send('Please send a POST request');
    return;
  }

  const msg = {
    to: request.body.to,
    from: request.body.from,
    subject: request.body.subject,
    html: request.body.content
  };

 sgMail.send(msg);

 response.send("Email sent to " + request.body.to);
});
