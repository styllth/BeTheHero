import conection from '../../database/conection';

class ProfileController {
  async index(request, response) {
    const ong_id = request.headers.authorization;

    const incidents = await conection('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return response.json(incidents);
  }
}

export default new ProfileController();
