export default defineNuxtPlugin((nuxtApp) => {
    function getToken() {
        let userData = localStorage.getItem("USERDATA")

        return userData ? userData.token : ''
      }
    
      function mergeHeaders(options: { headers?: HeadersInit }, newHeaders: HeadersInit) {
        const headersToBeMerged = new Headers(newHeaders) // cast newHeaders to Headers instance
    
        // check if request has headers to be merged with newHeaders
        if (!options.headers) { 
          options.headers = headersToBeMerged
          return
        }
    
        options.headers = new Headers(options.headers) // cast requestHeaders to Headers instance
    
        // merge the newHeaders with requestHeaders
        Array.from([...headersToBeMerged.entries()]).forEach(([key, value]) => {
          (options.headers as Headers).set(key, value)
        })
      }
    
      const api = $fetch.create({
        baseURL: 'http://localhost:52225/api/',
        headers: {
          Accept: 'application/json',
        },
        credentials: 'include',
        onRequest: ({ options }) => {
          const token = getToken() 
    
          if (!token)
            return
    
          mergeHeaders(options,  ['x-access-token', token])
        },
      })
    
      const { $precognition } = useNuxtApp()
    
      $precognition.client.use(api)
    
      return {
        provide: {
          api
        },
      }

})
