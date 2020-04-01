import conection from '../../database/conection';

class IncidentController {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await conection('incidents').count();

    const incident = await conection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf',
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incident);
  }

  async store(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await conection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });
    return response.json({ id });
  }

  async update(request, response) {
    return response.json({});
  }

  async destroy(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await conection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: 'Operation not permited' });
    }

    await conection('incidents')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
}

export default new IncidentController();
