export const PromiseResolved = new Promise((resolve, reject) => resolve({ data: [] }))
export const PromiseAxios = path => new Promise(resolve => resolve({ path }))
