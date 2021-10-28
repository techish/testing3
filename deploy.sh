#!/bin/sh     
ssh ec2-user@3.109.1.48 <  cd /node-express-boilerplate
 git pull      
 npm install --production      
 pm2 restart all
 exit      
EOF
