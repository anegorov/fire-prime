import * as functions from 'firebase-functions';
import { format } from 'path';
const cors = require('cors')({origin: true});

const express = require('express');
const fetch = require('node-fetch');
const url = require('url');
const app = express();

const appUrl = 'guidein-c7f6f.firebaseapp.com';
const renderUrl = 'https://guidein-c7f6f.appspot.com/render';

const SENDGRID_API_KEY = functions.config().sendgrid.key;
const SENDGRID_TEMPLATE_ID = functions.config().sendgrid.template;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

export const sendEmail = functions.https.onRequest((request, response) => {
 
  cors(request, response, () => {});

  if(request.method !== "POST"){
    response.status(400).send('Please send a POST request');
    return;
  }

  const msg = {
    "from": {
     "name": "Guidein",
     "email": request.body.from
    },
    "personalizations": [{
     "to": request.body.to,
     "dynamic_template_data": {"name": request.body.name, "lname": request.body.lname, "pdfurl": request.body.pdfurl}
    }],
    "subject": request.body.subject,
    "template_id": SENDGRID_TEMPLATE_ID
  };

 sgMail.send(msg);

 response.send("Email sent to " + request.body.to);
});

//Generate url
function generateUrl(request){
  return url.format({
    protocol: request.protocol,
    host: appUrl,
    pathname: request.originUrl
  });
}

function detectBot(userAgent){
  const bots = [
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    'twitterbot',
    'pinterest',
    'vkshare', 
    'yandexaccessibilitybot',   
    'yandexmetrika',   
    'yandexscreenshotbot',   
    'yandexblogs',   
    'yandeximages'   
  ];

  const agent = userAgent.toLowerCase()

  for(const bot of bots){
    if(agent.indexOf(bot) > -1){
      console.log('bot detected',bot,agent)
      return true
    }
  }

  console.log('not bots found')
  return false
}


app.get('*', (req,res) => {
 const isBot = detectBot(req.headers['user-agent']);

 if(isBot){

  const botUrl = generateUrl(req);
console.log(renderUrl+'/'+botUrl);
  fetch(`${renderUrl}/${botUrl}`)
    .then(res => res.text())
    .then(body => {
      res.set('Cashe-Control', 'publuc, max-age=300, s-maxage=600');
      res.set('Vary', 'User-Agent');
      res.send(body.toString());
    })

  }else{
    fetch(`https://${appUrl}`)
    .then(res => res.text())
    .then(body => {
      res.send(body.toString());
    })
  }

})

exports.app = functions.https.onRequest(app);
