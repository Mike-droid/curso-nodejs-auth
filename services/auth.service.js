const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('./../config/config');
const UserService = require('./user.service');
const service = new UserService();
const nodemailer = require('nodemailer');

class AuthService {

  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw(boom.unauthorized());
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw(boom.unauthorized());
    }
    delete user.dataValues.password;
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role
    }
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token
    };
  }

  async sendMail(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw(boom.unauthorized());
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.FAKE_EMAIL,
        pass: process.env.FAKE_PASSWORD
      }
    });

    await transporter.sendMail({
      from: process.env.FAKE_EMAIL, // sender address
      to: `${user.email}`,
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>', // html body
    });

    return { message: 'Mail sent' }
  }
}

module.exports = AuthService;
