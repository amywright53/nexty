import httpClient from '../instance';
import { IArticle } from './types';

class ArticleService {
  key = 'articles';

  getAll(): Promise<IArticle> {
    return httpClient.get(`/${this.key}`);
  }

  get(id: number): Promise<IArticle> {
    return httpClient.get(`/${this.key}/${id}`);
  }

  create(data: IArticle): Promise<IArticle> {
    return httpClient.post(`/${this.key}`, data);
  }

  update(id: number, data: IArticle): Promise<IArticle> {
    return httpClient.put(`/${this.key}/${id}`, data);
  }

  delete(id: number): Promise<IArticle> {
    return httpClient.delete(`/${this.key}/${id}`);
  }

  deleteAll(): Promise<IArticle> {
    return httpClient.delete(`/${this.key}`);
  }
}

export default new ArticleService();
