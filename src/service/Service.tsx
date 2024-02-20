class ApiService {
    _apiBase = 'https://dummyjson.com/';

    async getCategories() {
        try {            
            const res = await fetch(`${this._apiBase}products/categories`);
              const result = await res.json();
              return result;
        } catch (e) {
            throw e
        }
    }
    async getAllProducts(limit: number) {
        try {            
            const res = await fetch(`${this._apiBase}products?limit=${limit}&skip=0`);
              const result = await res.json();
              return result;
        } catch (e) {
            throw e
        }
    }
    async getCategoryProducts(category: string, limit: number) {
        try {            
            const res = await fetch(`${this._apiBase}products/category/${category}?limit=${limit}&skip=0`);
              const result = await res.json();
              return result;
        } catch (e) {
            throw e
        }
    }
}

const Service = new ApiService();
export default Service;
