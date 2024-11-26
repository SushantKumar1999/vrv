// Mock API configuration (Optional)

// Simulate API latency
const simulateLatency = (response, delay = 500) => {
    return new Promise((resolve) => setTimeout(() => resolve(response), delay));
  };
  
  // Mock API for fetching data
  export const mockFetch = (data) => simulateLatency(data);
  
  // Mock API for adding a new item
  export const mockAdd = (data, newItem) =>
    simulateLatency([...data, { ...newItem, id: data.length + 1 }]);
  
  // Mock API for updating an item
  export const mockUpdate = (data, updatedItem) =>
    simulateLatency(
      data.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  
  // Mock API for deleting an item
  export const mockDelete = (data, id) =>
    simulateLatency(data.filter((item) => item.id !== id));
  