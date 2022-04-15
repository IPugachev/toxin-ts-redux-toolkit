import React from 'react'
import { JsxElement } from 'typescript'
import { Item, Subtitle, Title } from './styles'

interface DetailsProps {
  title: string
  subtitle: string
  //!!
  icon: any
}

export const Datails: React.FC<DetailsProps> = ({ title, subtitle, icon }) => {
  return (
    <Item>
      {icon}
      <div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </div>
    </Item>
  )
}
