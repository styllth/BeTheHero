import conection from '../../database/conection';

class SessionController {
  async store(request, response) {
    const { id } = request.body;
    const ong = await conection('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong)
      return response.status(400).json({ error: 'No ONG found with this ID' });

    return response.json({ ong });
  }
}

export default new SessionController();
