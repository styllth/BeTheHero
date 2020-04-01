import crypto from 'crypto';
import conection from '../../database/conection';

class OngController {
  async index(request, response) {
    const ongs = await conection('ongs').select('*');

    return response.json(ongs);
  }

  async store(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await conection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });
    return response.json({ id });
  }

  async update(request, response) {
    return response.json({});
  }

  async destroy(request, response) {
    return response.json({});
  }
}

export default new OngController();
