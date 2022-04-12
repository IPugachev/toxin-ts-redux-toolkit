import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  outline: none;
  border: none;
  list-style: none;
  font-family: 'Montserrat', sans-serif;
}

`

export interface Theme {
  colors: {
    darkShade100: string
    darkShade75: string
    darkShade50: string
    darkShade25: string
    darkShade05: string
    purple: string
  }
  background: {
    purple: string
    green: string
    purpleBackground: string
  }
}
export const theme: Theme = {
  colors: {
    darkShade100: 'rgba(31, 32, 65)',
    darkShade75: 'rgba(31, 32, 65, 0.75)',
    darkShade50: 'rgba(31, 32, 65, 0.50)',
    darkShade25: 'rgba(31, 32, 65, 0.25)',
    darkShade05: 'rgba(31, 32, 65, 0.05)',
    purple: '#BC9CFF',
  },
  background: {
    purple: 'linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%)',
    green: 'linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%)',
    purpleBackground: 'linear-gradient(180deg, rgb(188, 156, 255, 0.25) 0%, rgb(139, 164, 249, 0.25) 100%)',
  },
}
