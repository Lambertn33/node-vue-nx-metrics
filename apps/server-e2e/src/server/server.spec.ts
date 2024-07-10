import axios from 'axios';
import { IUser, IPost } from '@node-vue-prom/shared-types';

describe('TEST APIS', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });

  it('should return the list of users', async () => {
    const res = await axios.get('/users');
    expect(res.status).toBe(200);

    const users = res.data as IUser[];
    users.forEach((user) => {
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('name');
      expect(user).toHaveProperty('email');
    });
  });

  it('should return a single user', async () => {
    const userId = 1;
    const res = await axios.get(`/users/${userId}`);
    const user = res.data as IUser;
    expect(res.status).toBe(200);
    expect(user.name).toContain('Lean');
  });

  it('should 404 if user is not found', async () => {
    const userId = 123;

    try {
      await axios.get(`/users/${userId}`);
    } catch (error) {
      expect(error.response?.status).toEqual(404);
    }
  });

  it('should return user posts', async () => {
    const userId = 1;
    const res = await axios.get(`/users/${userId}/posts`);
    const posts = res.data as IPost[];
    expect(res.status).toBe(200);

    posts.forEach((post) => {
      expect(post.userId).toBe(userId);
    });
  });

  it('should return posts list', async () => {
    const res = await axios.get(`/posts`);
    const posts = res.data as IPost[];
    expect(res.status).toBe(200);

    posts.forEach((post) => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('body');
    });
  });
});
