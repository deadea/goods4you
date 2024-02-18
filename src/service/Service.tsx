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
}

const Service = new ApiService();
export default Service;
