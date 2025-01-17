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
    delete user.dataValues.recoveryToken;
    return {
      user,
      token
    };
  }

  async sentRecovery(email) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw(boom.unauthorized());
    }

    const payload = { sub: user.id };
    const token = jwt.sign(payload, config.jwtSecret, { expiresIn: '15min' });
    const link = `http://myfrontend.com/recovery?token=${token}`;
    await service.update(user.id, { recoveryToken: token });

    const mail = {
      from: process.env.FAKE_EMAIL,
      to: `${user.email}`,
      subject: 'Email para recuperar contraseña',
      text: 'Recover password',
      html: `<b>Ingresa a este link => ${link}</b>`,
    }

    const rta = await this.sendMail(mail);
    return rta;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);
      const user = await service.findOne(payload.sub);
      if (user.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await service.update(user.id, { recoveryToken: null, password: hash });
      return { message: 'Password has been changed' }
    } catch (error) {
      throw boom.unauthorized();
    }
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.FAKE_EMAIL,
        pass: process.env.FAKE_PASSWORD
      }
    });

    await transporter.sendMail(infoMail);
    return { message: 'Mail sent' }
  }
}

module.exports = AuthService;
