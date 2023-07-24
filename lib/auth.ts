import { Provider } from 'next-auth/client'

export function AuthProvider({ children }) {
  return (
    <Provider session={pageProps.session}>
      {children}
    </Provider>
  )
}