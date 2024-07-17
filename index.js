const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cron = require('node-cron');

// Creating a transpoter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'vishaldeepak8434@gmail.com',
        pass: 'nvdu ghmc fyxh ppin'
    },
});


// Email Content
const mailOptions = {
    from: {
        name: 'Deepak Kumar',
        address: 'vishaldeepak8434@gmail.com',
    },
    to: 'gk983965@gmail.com',
    subject: 'Testing Nodemailer',
    text: 'Good Morning , My name is Deepak Kumar , a Web Developer. This is a mail sent using Nodemailer.I have attached my resume with this email. Kindly look into my resume once and feel free to contact me for the further process.My contact details are as follows Contact Number - 9798808390 Email Id- vishaldeepak8434@gmail.com',
    attachments: [{
        filename: 'Resume Deepak.pdf',
        path: '/Users/deepak/Desktop/SELF/Node/nodemailer/resume/Resume Deepak.pdf', //exact file path not folder
        cid: 'unique@nodemailer.com',
    }]
};


// Sending  Email

cron.schedule('27 11 * * *', () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending mail:', error);
        } else {
            console.log('Email sent:', info.response);

        }
    });
});