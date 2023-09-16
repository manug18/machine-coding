
export function getBaseUrl() {
    if (process.env.REACT_APP_BASE_URL != null) {
      return process.env.REACT_APP_BASE_URL;
    }
  
    return 'http://localhost:8080';
  }
  